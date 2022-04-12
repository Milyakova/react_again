import React from "react";
import home from "../img/home.png";

export const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center my-5">
      <h1 className="display-1 home-header">Welcome to messenger</h1>
      <img src={home} width="50%" alt="..."></img>
      <span>
        PNG разработан Dr_J, из{" "}
        <a href="https://ru.pngtree.com"> Pngtree.com</a>
      </span>
    </div>
  );
};
