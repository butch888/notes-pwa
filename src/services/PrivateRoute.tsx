import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function PrivateRoute() {
  const location = useLocation()
  const context = useContext(AuthContext)

  const user = context?.user || localStorage.getItem('user')

  if (user) {
    localStorage.setItem('user', user)
  }

  return user ? <Outlet /> : <Navigate to="signin" state={{ from: location }} />
}
