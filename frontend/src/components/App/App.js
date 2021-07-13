import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";
import About from "../About/About";
import Learning from "../Learning/Learning";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/learning" element={<Learning />} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
