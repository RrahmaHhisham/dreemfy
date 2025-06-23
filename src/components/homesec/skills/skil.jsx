import React from "react";
import assets from "../../../assets/assets";
import "./skil.css";
function Skil() {
  return (
    <div className="skil row m-0 p-0">
      <div className="col-md-11 col-11 my-5 p-0 d-flex justify-content-between align-items-center flex-wrap flex-row">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={assets.upslach}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8 d-flex justify-content-between flex-column content-skil">
              <div class="card-body d-flex justify-content-between flex-column">
                <p class="card-title side-title">للمطورين</p>
                <p class="card-text main-title">انطلق بمهاراتك نحو آفاق جديدة</p>
                <p class="card-text caption col-md-8 col-12">
                  تعاون مع فرق تطمح إلى الابتكار والإبداع. انضم إلى المشاريع
                  التقنية الواعدة التي تساهم في صنع المستقبل الرقمي.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-wrap flex-row">
                <div class="card card-point col-md-3 col-12 border-0">
                  <div class="card-body py-0">
                    <div className="point my-3">
                      <p class="card-title p-0 m-0">01</p>
                    </div>
                    <p class="card-text">
                      اكتشف فرص التطوير لكل مرحلة من رحلتك المهنية.
                    </p>
                  </div>
                </div>
                <div class="card card-point col-md-3 col-12 border-0">
                  <div class="card-body py-0">
                    <div className="point my-3">
                      <p class="card-title p-0 m-0">02</p>
                    </div>
                    <p class="card-text">
                      سيطر على كيفية وأوقات العمل بما يناسبك.
                    </p>
                  </div>
                </div>
                <div class="card card-point col-md-3 col-12 border-0">
                  <div class="card-body py-0">
                    <div className="point my-3">
                      <p class="card-title p-0 m-0">05</p>
                    </div>
                    <p class="card-text">
                     استكشف طرقًا مختلفة للنمو والتطور.
                    </p>
                  </div>
                </div>

                <div className="start-now col-md-12 d-flex justify-content-start">
                  <button className="btn col-5"> 
                    ابدأ رحلتك
                    <img src={assets.arrowright} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skil;
