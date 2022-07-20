import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Main from "./Components/Main.jsx";
import Footer from "./Components/Footer.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import Original from "./Components/Original";
import ListMoviePopular from "./Containers/ListMoviePopular.jsx";
import ListMovieTopRated from "./Containers/ListMovieTopRated.jsx";
import Carousel from "./Components/Carousel";

const App = () => {
  return (
    <div>
      {/* <Main /> */}

      <Navbar />
      <Carousel />
      <h1> ListMoviePopular</h1>
      <ListMoviePopular />
      <h1>ListMovieTopRated</h1>
      <ListMovieTopRated />
      {/* <Original /> */}
      <Footer />
    </div>
  );
};

export default App;
