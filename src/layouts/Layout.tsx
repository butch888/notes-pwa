import { Outlet } from "react-router-dom"
import {Footer, Header} from '../components/index'
import '../App.css'


const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <section className="main">
        <Outlet />
      </section>
      <Footer />
    </div>
  )
}

export default Layout
