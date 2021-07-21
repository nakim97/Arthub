import "./EditPortfolio.css";
import Navbar from "../Navbar/Navbar";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



import homefeed1 from "../../Assets/homefeed1.jpg";
import homefeed7 from "../../Assets/homefeed7.jpg";
import homefeed4 from "../../Assets/homefeed4.jpg";
import homefeed5 from "../../Assets/homefeed5.jpg";
import homefeed6 from "../../Assets/homefeed6.jpg";



export default function EditPortfolio({user, setUser}){
    return(
        <div className="EditPortfolio">
            <Navbar user={user} setUser={setUser} />
            <div className="content">
                <h3 className="title">Edit Your Portfolio</h3>
            </div>
            <div className="portfolioposts">
            <div className="portfolioImg"> 
                <img className="portfolioImg" src={homefeed1}alt=" home feed img 4"
            /></div>
            <div className="post" style={{position:"relative"}}>
              <h4 className="portfolioTitle"> Art Piece in Progress, any advice?</h4>
              <p className="portfolioDescription"> Description</p>
              <p className="likeComments" style={{ textAlign: "right",position:"absolute",bottom:"0",right:"0", marginRight:"10px"}}>
                  {" "}
                    <EditIcon style={{ fontSize: "20px"}} />{" "} 
                    <DeleteIcon style={{ fontSize: "20px", marginLeft:"10px" }} />{" "}
                </p>
          </div>
        </div>

        <div className="portfolioposts">
            <div className="portfolioImg"> 
                <img className="portfolioImg" src={homefeed7}alt=" home feed img 4"
            /></div>
            <div className="post" style={{position:"relative"}}>
              <h4 className="portfolioTitle"> Art Piece in Progress, any advice?</h4>
              <p className="portfolioDescription"> Description</p>
              <p className="likeComments" style={{ textAlign: "right",position:"absolute",bottom:"0",right:"0", marginRight:"10px"}}>
                  {" "}
                    <EditIcon style={{ fontSize: "20px"}} />{" "} 
                    <DeleteIcon style={{ fontSize: "20px", marginLeft:"10px" }} />{" "}
                </p>
          </div>
        </div>
        
        <div className="portfolioposts">
            <div className="portfolioImg"> 
                <img className="portfolioImg" src={homefeed4}alt=" home feed img 4"
            /></div>
            <div className="post" style={{position:"relative"}}>
              <h4 className="portfolioTitle"> Art Piece in Progress, any advice?</h4>
              <p className="portfolioDescription"> Description</p>
              <p className="likeComments" style={{ textAlign: "right",position:"absolute",bottom:"0",right:"0", marginRight:"10px"}}>
                  {" "}
                    <EditIcon style={{ fontSize: "20px"}} />{" "} 
                    <DeleteIcon style={{ fontSize: "20px", marginLeft:"10px" }} />{" "}
                </p>
          </div>
        </div>

        <div className="portfolioposts">
            <div className="portfolioImg"> 
                <img className="portfolioImg" src={homefeed5}alt=" home feed img 4"
            /></div>
            <div className="post" style={{position:"relative"}}>
              <h4 className="portfolioTitle"> Art Piece in Progress, any advice?</h4>
              <p className="portfolioDescription"> Description</p>
              <p className="likeComments" style={{ textAlign: "right",position:"absolute",bottom:"0",right:"0", marginRight:"10px"}}>
                  {" "}
                    <EditIcon style={{ fontSize: "20px"}} />{" "} 
                    <DeleteIcon style={{ fontSize: "20px", marginLeft:"10px" }} />{" "}
                </p>
          </div>
        </div>

          
        </div>
    )
}