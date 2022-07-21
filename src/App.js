import "./App.css";
import Navbar from "./Components/navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import DetailsSeries from "./pages/DetailsSeries";
import Register from "./pages/Register";
import LoginForm from "./Components/LoginForm";

const App = () => {
  return (
    <div className="w-screen relative overflow-x-hidden">
      {/* <LoginForm /> */}
      <Navbar />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<Register />} />
        <Route path="series" element={<Series />} />
        <Route path="movies" element={<Movies />} />
        <Route path="New-and-Popular" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />} />
        <Route path="series/:tvId" element={<DetailsSeries />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
