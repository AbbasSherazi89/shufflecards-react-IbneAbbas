import React from "react";
import { useNavigate } from "react-router-dom";
const NavComp = () => {
  const navigate = useNavigate();

  const buyCard=()=>{
    navigate("/");
  }
  const takeQuiz=()=>{
    navigate("/quiz");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button className="btn btn-outline-success" onClick={()=>buyCard()}> Buy Card </button>
            </li>
            <li className="nav-item ms-3">
              <button className="btn btn-outline-success" onClick={()=>takeQuiz()}> Quiz </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavComp;
