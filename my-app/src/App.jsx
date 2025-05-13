import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
