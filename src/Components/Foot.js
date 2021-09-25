import React from "react";

const Foot = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#d9d2e9",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3 style={{ fontSize: "18px", paddingTop: "25px", paddingLeft: "10px" }}>
        Demo app component copyright GMC 2021
      </h3>
      <div className="wrapper">
        <div className="icon facebook">
          <div className="tooltip">Facebook</div>
          <span>
            <i className="fab fa-facebook-f"></i>
          </span>
        </div>
        <div className="icon twitter">
          <div className="tooltip">Twitter</div>
          <span>
            <i className="fab fa-twitter"></i>
          </span>
        </div>
        <div className="icon instagram">
          <div className="tooltip">Instagram</div>
          <span>
            <i className="fab fa-instagram"></i>
          </span>
        </div>
        <div className="icon github">
          <div className="tooltip">Github</div>
          <span>
            <i className="fab fa-github"></i>
          </span>
        </div>
        <div className="icon youtube">
          <div className="tooltip">Youtube</div>
          <span>
            <i className="fab fa-youtube"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Foot;
