import React from "react";
import home from "../img/home.png";
import "./Home.css";

export const Home = ({ onAuth }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center my-5 bcground">
        <h1 className="display-1 home-header">Welcome to messenger</h1>
        <button className="btn btn-primary" onClick={onAuth}>
          Login
        </button>
      </div>
      <img className="home" src={home} alt="..."></img>
    </>
  );
};
