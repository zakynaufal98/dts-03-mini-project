import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar.jsx";
import Main from "./Components/Main.jsx";
import Footer from "./Components/Footer.jsx";
import { Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Details from "./pages/Details"
import Register from "./pages/Register"

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="movies" element={<Movies />} />
        <Route path="register" element={<Register />} />
        <Route path="details/:movieId" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
