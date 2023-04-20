import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewTicket from "./pages/NewTicket";

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/new-ticket" element={<NewTicket></NewTicket>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer className="toast-position" />
    </div>
  );
}

export default App;
