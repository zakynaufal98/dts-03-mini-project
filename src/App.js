import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import LoginForm from "./Components/LoginForm";

const App = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <LoginForm />
    </div>
  );
};

export default App;
