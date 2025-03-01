import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const SignIn = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  
  useEffect(() => {
    try {
      if (localStorage.getItem("user") !== null) {
        navigate("/", { replace: true });
      }
    } catch (error) {
        console.error("Error accessing localStorage", error);
      }
  }, [navigate]);

  if (!context) return null
  const {signIn} = context;
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = form.userName.value.trim().toLowerCase();
    
    if (!user) return;

    signIn(user, () => navigate("/", { replace: true }));

    form.reset();
  };

  return (
    <div className="signin">
      <form onSubmit={onSubmit} className="form-signin">
        <input type="text" name="userName" className="form__input" aria-label="Username" autoFocus/>
        <button className="form__button">Sign in</button>
      </form>
      <p>Welcome to Notes!</p>
      <p>Please enter your name to sign in</p>
      <p>After that you can create notes</p>
      <p className="link">
        <a
          href="https://github.com/butch888?tab=repositories"
          target="_blank"
          className="link"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </p>
    </div>
  );
};
