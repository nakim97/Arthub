import "./App.css";
import { useState, useEffect } from "react";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import About from "../About/About";
import Explore from "../Explore/Explore";
import Learning from "../Learning/Learning";
import Market from "../Market/Market";
import Community from "../Community/Community";
import apiClient from "../../services/apiClient";
import UserProfile from "../UserProfile/UserProfile";
import EditPortfolio from "../EditPortfolio/EditPortfolio";
import ImageUpload from "../ImageUpload/ImageUpload";
import CreateForumPost from "../CreateForumPost/CreateForumPost";


export default function App() {
  const [isFetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  // This is just in case for filtering
  const [filterInputValue, setInputValue] = useState(null);
  const [user, setUser] = useState({});

  // Fetch users using the jwt token and save or retrieve from local storage
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("rate_my_setup_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);
  const handleOnLogout = async () => {
    await apiClient.logoutUser();
    setUser({});
    setError(null);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} handleOnLogout={handleOnLogout} />}
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/market" element={<Market />} />
          <Route path="/community" element={<Community />} />
          <Route path="/me" element={<UserProfile />} />

          <Route path="/editportfolio" element={<EditPortfolio/>} />
          <Route path="/createforumpost" element={<CreateForumPost/>} />
          <Route path="/image" element={<ImageUpload />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
