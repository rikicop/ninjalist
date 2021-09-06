import Footer from "./Footer"
import Navbar from "./Navbar"

/* children son todo el contenido que puede ir dentro del layout
 */
const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar/>
             { children }
            <Footer/>
        </div>
    )
}

export default Layout
