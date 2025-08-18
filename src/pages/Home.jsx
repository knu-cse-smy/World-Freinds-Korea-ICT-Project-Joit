import React from "react";
import "./Home.css";
import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          JO : IT <img src={logo} alt="JOIT Logo" className="inline-logo" />
        </h1>

        <div className="text-group">
          <p className="subtitle">
            <strong>
              Make every crossing a joy. Love your life with JO : IT!
            </strong>
          </p>
          <p className="description">
            You can wait the traffic light while still have enjoyment since you
            will be protected by the smart system to protect you from danger and
            extreme weather.
          </p>
        </div>

        <button
          className="start-button"
          onClick={() =>
            document.getElementById("traffic-light").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Start Now
        </button>
      </div>
    </section>
  );
}
