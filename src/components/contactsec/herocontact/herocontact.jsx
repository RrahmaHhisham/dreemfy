import React from "react";
import assets from "../../../assets/assets";

function HeroContact() {
  return (
    <div className="heroabout row m-0 p-0">
      <div className="card col-12 p-0 border-0">
        <img src={assets.about} className="card-img" alt="Page Hero" />
        <div
          className="card-img-overlay d-flex align-items-center flex-column justify-content-center text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <nav aria-label="breadcrumb" className=" col-11">
            <ol className="d-flex list-unstyled p-0 m-0 align-items-center">
              <li>
                <a href="/" className="text-white text-decoration-none">
                  الرئيسية
                </a>
              </li>
              <li className="px-2 text-white" dir="ltr">
                ««
              </li>
              <li className="text-white fw-bold" aria-current="page">
                من نحن
              </li>
            </ol>
          </nav>

          <p className="card-text text-end col-11  title-hero">
            تواصل معنـــــــا
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroContact;
