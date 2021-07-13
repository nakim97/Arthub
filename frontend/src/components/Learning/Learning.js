import "./Learning.css";
import learningbanner from "../../Assets/learningbanner.jpg";
import Navbar from "../Navbar/Navbar";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import homefeed1 from "../../Assets/homefeed1.jpg"
import homefeed7 from "../../Assets/homefeed7.jpg"
import homefeed4 from "../../Assets/homefeed4.jpg"
import homefeed6 from "../../Assets/homefeed6.jpg"

export default function Learning() {
  return (
    <div className="learning">
      <Navbar />
      <div className="banner" style={{ backgroundImage: `url(${learningbanner})`}}>
        <div className="bannerSearch" >
          <h4> EMPOWER YOURSELF</h4>
          <div className="search-bar">
            <input type="text" name="search" placeholder="Search Tutorials" />
          </div>
        </div>
      </div>

      <div className="learningTags">
      <div className="learningBtns">
            <button className="learningBtn"  style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" + ")", backgroundSize:"100%",}}>All</button>
            <button className="learningBtn1" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" + ")", backgroundSize:"100%",}}>Concept Art </button>
            <button className="learningBtn2"   style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" + ")", backgroundSize:"100%",}}>Sketching</button>
            <button className="learningBtn3"  style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" + ")", backgroundSize:"100%",}}>Illustration</button>
            <button className="learningBtn4"  style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1567360425618-1594206637d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" + ")", backgroundSize:"100%",}}>Animation </button>
            <button className="learningBtn5"  style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1519933045055-2e2d61a64bcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" + ")", backgroundSize:"100%",}}>Painting </button>
            <span className="filterIcon"> <ExpandMoreIcon style={{fontSize: "30px"}} /></span>
      </div>
      </div>

      <div className="newLearning">
                    <h4>Search Results</h4>
                    <div className="container">
                        <div className="learningContainer"> 
                            <div className="learningImageContainer">
                             <li><img className="learningImg" src={homefeed7} alt=" home feed img 2"/></li>
                            </div>
                            <p className="learningTitle">How to Draw Rocks </p>
                            <div className="learningBlurb">
                                <p style={{textAlign:'left'}}>by Hello World
                                <span style={{float:'right'}}>1h 10s</span></p>
                            </div>
                        </div>

                        <div className="learningContainer"> 
                            <div className="learningImageContainer">
                            <li><img className="learningImg" src={homefeed6} alt=" home feed img 6"/></li>
                            </div>
                            <p className="learningTitle">How to Concept Art </p>
                            <div className="learningBlurb">
                                <p style={{textAlign:'left'}}>by Test
                                <span style={{float:'right'}}>45m</span></p>
                            </div>
                        </div>

                        <div className="learningContainer"> 
                            <div className="learningImageContainer">
                                <img className="learningImg" src={homefeed1} alt=" home feed img 1"/>
                            </div>
                            <p className="learningTitle">How to Sketch Animals </p>
                            <div className="learningBlurb">
                                <p style={{textAlign:'left'}}>by Yes
                                <span style={{float:'right'}}>2h 10m</span></p>
                            </div>
                        </div>

                        <div className="learningContainer"> 
                            <div className="learningImageContainer">
                            <li><img className="learningImg" src={homefeed4} alt=" home feed img 4"/></li>
                            </div>
                            <p className="learningTitle">How to Draw Rocks </p>
                            <div className="learningBlurb">
                                <p style={{textAlign:'left'}}>by Hello World
                                <span style={{float:'right'}}>1h 10s</span></p>
                            </div>
                        </div>
                    </div>
                </div>
    </div>

    
  );
}
