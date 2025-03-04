import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Header: React.FC = () => {
    const context = useContext(AuthContext);
    const signOut = context?.signOut;  
  return (
    <header className="header">
      <Link to='https://github.com/butch888/notes-pwa' 
            target="_blank"
            className="link">
        Github
      </Link>
      <h1>Notes</h1>
      <NavLink to='signin'
                className='link'
                onClick={signOut}>
        Sign out
      </NavLink>
      
    </header>
  )
}

