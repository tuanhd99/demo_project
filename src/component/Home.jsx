import React from "react";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white">
        <img
          src="/assets/5233122.jpg"
          className="card-img"
          alt="Background"
          style={{ height: "600px" }}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW CAR</h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TREND</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
