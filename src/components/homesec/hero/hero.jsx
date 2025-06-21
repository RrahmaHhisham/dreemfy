import React from "react";
import "../hero/hero.css";
import assets from "../../../assets/assets";
import Heroimg from "../../../assets/hero.jpeg"
function Hero() {
  return (
    <div className="hero row m-0 p-0">
      <div class="card text-bg-dark col-md-12 col-11 p-0">
        <img src={Heroimg} class="card-img" alt="..." />
        <div class="card-img-overlay col-12">
          <p class="card-title col-12">
            <span>شريكك الامثل</span> لتحقيق النجاح ونمو أعمالك
          </p>
          <p class="card-text">
            تربطك بأفضل فرق التطوير عالميًا لتحويل فكرتك التقنية إلى واقع، من
            خلال التعاون الفعّال والشفافية التامة في جميع مراحل المشروع
          </p>
          <div class="card text-center p-2 col-lg-6 col-10 col-md-8 d-flex justify-content-center align-items-center">
            {/* <div class="card-header">Featured</div> */}
            <div class="card-body d-flex justify-content-center align-items-center col-lg-10 col-10 col-md-10">
              <div class="col-md-11 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body p-0">
                    {/* <h5 class="card-title">Special title treatment</h5> */}
                    <p class="card-text">
                      <img src={assets.chaticon} alt="" />
                      تطبيق تمويل موبايل يسمى "Intuitive".
                    </p>
                    <button className="col-12">حلل الفكره باستخدام AI</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
