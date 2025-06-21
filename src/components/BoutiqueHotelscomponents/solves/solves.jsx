import React from "react";
import "./solves.css";

function Solves({ data }) {
  return (
    <div className="solves row m-0 p-0">
      <div className="card col-md-11 col-11 border-0 bg-transparent">
        <div className="row g-0">
          <div className="col-md-8 d-flex flex-column justify-content-center align-items-start">
            <div className="card-body col-12">
              <p className="card-title">{data.title}</p>
              <p className="card-text">{data.text}</p>
              <button type="button" className="btn col-md-3">{data.buttonLabel}</button>
            </div>
          </div>
          <div className="col-md-4">
            <img src={data.image} className="img-fluid" alt={data.title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solves;
