import "./App.css";
import Navbar from "./Components/navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
<<<<<<< HEAD
import Details from "./pages/Details"
import Register from "./pages/Register"
=======
import Details from "./pages/Details";
import DetailsSeries from "./pages/DetailsSeries";
import Login from "./Components/LoginForm";
import LoginForm from "./Components/LoginForm";
>>>>>>> dc30f6dbe49bc84b1687c3ad8bcdc221692fa77a

const App = () => {
  return (
    <div>
      {/* <LoginForm /> */}
      <Navbar />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="series" element={<Series />} />
        <Route path="movies" element={<Movies />} />
<<<<<<< HEAD
        <Route path="register" element={<Register />} />
=======
        <Route path="New-and-Popular" element={<Movies />} />
>>>>>>> dc30f6dbe49bc84b1687c3ad8bcdc221692fa77a
        <Route path="details/:movieId" element={<Details />} />
        <Route path="detailsSeries/:tvId" element={<DetailsSeries />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
