import React, { useEffect, useState } from "react";
import loginImage from "../assets/login-image.jpg";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginAndRegister = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, isLoading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return (
    <div className="w-full h-screen overflow-x-hidden">
      <img
        src={loginImage}
        alt="login-image"
        className="absolute object-cover w-10/12 left-0 h-screen"
      />
      <div className="bg-gradient-to-r from-transparent via-black to-black absolute w-screen right-0 h-screen flex justify-center items-center flex-col sm:items-end">
        <form className="text-white flex flex-col sm:mr-24">
          <input
            type="text"
            placeholder="E M A I L"
            className="w-72 h-12 mt-3 p-4 border border-solid border-white bg-neutral-900 rounded"
            value={credential.email}
            onChange={textFieldEmailOnChangeHandler}
          />
          <input
            type="password"
            placeholder="P A S S W O R D"
            className="w-72 h-12 mt-3 p-4 border border-solid border-white bg-neutral-900 rounded"
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
          />
          <button
            type="submit"
            className="bg-[#E50913] text-white text-s w-72 h-12 mt-6 rounded"
            onClick={buttonLoginOrRegisterOnClickHandler}
          >
            {loginOrRegister === "login" ? "Login" : "Register Account"}
          </button>
          {loginOrRegister === "login" ? (
            <Link to="/register">
              <>Dont have account Register here ?</>
            </Link>
          ) : (
            <Link to="/login">
              <>You want Login ?</>
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginAndRegister;
