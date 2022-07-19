import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Main from "./Components/Main.jsx"
import Footer from "./Components/Footer.jsx";
import LoginForm from "./Components/LoginForm.jsx";

const App = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-scroll bg-[#201F1F]">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
