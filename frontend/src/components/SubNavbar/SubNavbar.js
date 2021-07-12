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
                <li className="subNavLink"> <BubbleChartIcon style={{ marginRight: '5px' }} /> ABOUT</li>
                <li className="subNavLink"> <ExploreIcon style={{ marginRight: '5px' }}/> EXPLORE</li>
                <li className="subNavLink"> <SchoolIcon style={{ marginRight: '5px' }}/> LEARNING</li>
                <li className="subNavLink"> <ShoppingCartIcon style={{ marginRight: '5px' }}/> MARKETPLACE</li>
                <li className="subNavLink"> <ForumIcon style={{ marginRight: '5px' }}/> COMMUNITY</li>
            </ul>
        </div>
    </nav>
    )
}