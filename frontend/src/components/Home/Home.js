import "./Home.css"
import Navbar from "../Navbar/Navbar"

import carousel1 from "../../Assets/carousel1.jpg"
import carousel2 from "../../Assets/carousel2.jpg"
import carousel3 from "../../Assets/carousel3.jpg"
import carousel4 from "../../Assets/carousel4.jpg"

export default function Home(){
    return(
        <div className="home">
            <Navbar />
            <div className="homeCarousel">
                <ul>
                    <li><img className="carouselimg" src={carousel1} alt=" homecarousel img 1"/></li>
                    <li><img className="carouselimg" src={carousel2} alt=" homecarousel img 2"/></li>
                    <li><img className="carouselimg" src={carousel3} alt=" homecarousel img 3"/></li>
                    <li><img className="carouselimg" src={carousel4} alt=" homecarousel img 4"/></li>
                </ul>
            </div>
        </div>
    )
}