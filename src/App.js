import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar.jsx";
import Main from "./Components/Main.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div>
      {/* <Main /> */}

      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
