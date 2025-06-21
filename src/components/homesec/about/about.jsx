import React from "react";
import "./about.css";
import assets from "../../../assets/assets";
function About() {
  return (
    <div className="about row m-0 p-0">
      <div className="content-about col-md-11 col-11">
        <div className="about-left col-lg-8 col-12">
          <div class="card">
            <div class="card-body">
              <p class="card-subtitle mb-2 text-body-secondary">
                من خلال Dreamfy، نحول أفكارك إلى مشاريع ناجحة باستخدام حلول
                مبتكرة وبدون أي تكاليف مبدئية.
              </p>
              <div class="card text-bg-dark">
                <img src={assets.about} class="card-img" alt="..." />
                <div class="card-img-overlay  d-flex justify-content-center align-items-center flex-column">
                  <div className="arrow">
                    <img
                      src={assets.arrowabout}
                      style={{ width: "35px", height: "44px" }}
                    />
                  </div>
                  <p class="card-text">كيفية عمل Dreamfy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right col-lg-4 col-12">
          <div class="card col-12">
            <div class="card-body col-12">
              <p class="card-subtitle mb-2 text-body-secondary">
                في Dreamfy نقدم لك الحل الأمثل لتحويل فكرتك التقنية إلى واقع
                ناجح دون الحاجة لدفع أي تكاليف مسبقة. بفضل تقنياتنا المتطورة
                وشبكتنا العالمية من الخبراء، نعمل على تمويل وتنفيذ مشاريعك بأعلى
                معايير الجودة والابتكار، مع ضمان الشفافية الكاملة في جميع مراحل
                المشروع. نحن هنا لنمنحك الفرصة للنمو والابتكار بدون أي قيود
                مالية.
              </p>

              <div class="card">
                <img src={assets.Character} />
                <div class="card-body">
                  <p class="card-text">
                    حلول ذكية لتحويل أفكارك
                  </p>
                  <button className="col-12">ابدا رحلتك الان</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
