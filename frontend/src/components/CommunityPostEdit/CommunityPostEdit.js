import "./CommunityPostEdit.css";
import CommunityNavbar from "../CommunityNavbar/CommunityNavbar";
import Navbar from "../Navbar/Navbar";
import React from "react";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';


export default function CommunityPostEdit({user, setUser}){
  
    return(
        <div className="EditForumPost">
            <Navbar user={user} setUser={setUser}/>
            <CommunityNavbar/>
            <div className="container">
                <h1>EDIT YOUR FORUM POST</h1>
                <div className="form">
                    <div className="title">
                        <input type="text" name="title" placeholder="Title" />
                    </div>
                    <div className="imgBar">
                            <PhotoLibraryIcon style={{color:"#514F4F", marginLeft:"5px"}} />
                    </div>
                    <div className="description">
                        <textarea placeholder="Text(optional)" />
                    </div>
                    <div className="tags">
                    <ul>
                        <li className="bubbletag"> + General</li>
                        <li className="bubbletag"> + Advice</li>
                        <li className="bubbletag"> + WIP</li>
                        <li className="bubbletag"> + FAQ</li>
                        <li className="bubbletag"> + Art</li>
                        <li className="bubbletag"> + Other</li>
                    </ul>
                    </div>
                    
                   
                    <button className="editBtn">EDIT</button>
                </div>
            </div>
        </div>

    );
}
