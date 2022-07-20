import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar.jsx";
import Main from "./Components/Main.jsx";
import Footer from "./Components/Footer.jsx";
<<<<<<< HEAD
import MovieSelected from "./Components/MovieSelected.jsx"
=======
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
>>>>>>> a6b1942830020ac7d39d557439aca630b7ff4586

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <MovieSelected />
=======
      <Navbar />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
      <Footer />
>>>>>>> a6b1942830020ac7d39d557439aca630b7ff4586
    </div>
  );
};

export default App;
