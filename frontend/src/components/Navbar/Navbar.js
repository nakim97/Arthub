import "./Navbar.css"
import SubNavbar from "../SubNavbar/SubNavbar"
import BrushIcon from '@material-ui/icons/Brush';


export default function Navbar(){
    return(
    <div>
       <nav className="Navbar">
           <div className="content">
                <div className="logo">
                    <BrushIcon style={{ fontSize: 40 }}/>
                 </div>

                 <div className="search-bar">
                    <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    />
                </div>
                <ul className="links">
                    <li className="navRegister">
                        Sign Up
                    </li>
                    <li className="navLogin">
                        Sign In
                    </li>
                </ul>

           </div>

       </nav>
       <div>
            <SubNavbar />
        </div>
       /</div>
    )
}