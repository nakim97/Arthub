import "./CommunityNavbar.css"
import FilterListIcon from '@material-ui/icons/FilterList';

export default function CommunityNavbar(){
    return(
        <nav className="communityNavbar">
            <div className="content">
                <div className="links">
                    <li className="trending">Trending</li>
                    <li className="latest">Latest</li>
                </div>

                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search forum..." />
                </div>

                <div className="filterBtn" >
                    <span className="filterIcon" style={{display:"flex", textAlign:"center", flexWrap:"wrap"}}><FilterListIcon/></span>
                </div>
                
            </div>

        </nav>
    )
}