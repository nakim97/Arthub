import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
