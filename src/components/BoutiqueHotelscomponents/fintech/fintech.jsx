
import React from "react";
import "./fintech.css";

function Fintech({ data }) {
  return (
    <div className="fintech row m-0 p-0">
      <div className="card text-center col-md-11 col-11 border-0">
        <div className="card-body p-3">
          <div className="card mb-3 bg-transparent border-0">
            <div className="row g-0">
              <div className="col-lg-6 col-12">
                <img src={data.image} className="img-fluid rounded-start" alt={data.title} />
              </div>
              <div className="col-lg-6 col-12">
                <div className="card-body">
                  <p className="card-title">{data.title}</p>
                  {data.points.map((point, index) => (
                    <div key={index} className="content">
                      <div className="point my-3">
                        <p className="card-point- p-0 m-0">{String(index + 1).padStart(2, '0')}</p>
                      </div>
                      <p className="card-text">{point.text}</p>
                      <p className="card-caption">{point.caption}</p>
                    </div>
                  ))}
                  <button type="button" className="btn">{data.buttonLabel}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fintech;
