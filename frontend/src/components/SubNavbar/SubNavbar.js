import "./SubNavbar.css"
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import ExploreIcon from '@material-ui/icons/Explore';
import SchoolIcon from '@material-ui/icons/School';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ForumIcon from '@material-ui/icons/Forum';

export default function SubNavbar(){
    return (
        <nav className="subNavbar">
        <div className="content">
            <ul className="links">
                <li className="subNavLink"> <BubbleChartIcon /> ABOUT</li>
                <li className="subNavLink"> <ExploreIcon/> EXPLORE</li>
                <li className="subNavLink"> <SchoolIcon/> LEARNING</li>
                <li className="subNavLink"> <ShoppingCartIcon/> MARKETPLACE</li>
                <li className="subNavLink"> <ForumIcon/> COMMUNITY</li>
            </ul>
        </div>
    </nav>
    )
}