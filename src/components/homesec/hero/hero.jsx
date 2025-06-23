import React from "react";
import "../hero/hero.css";
import assets from "../../../assets/assets";
import Heroimg from "../../../assets/mainbanner.jpeg";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero row m-0 p-0">
      <div class="card text-bg-dark col-md-12 col-11 p-0">
        <img src={Heroimg} class="card-img" alt="..." />
        <div class="card-img-overlay col-12">
          <p class="card-title col-12 col-md-5 col-lg-6">
            <span>شريكك الامثل</span> لتحقيق النجاح ونمو أعمالك
          </p>
          <p class="card-text col-md-6 col-12">
            تربطك بأفضل فرق التطوير عالميًا لتحويل فكرتك التقنية إلى واقع، من
            خلال التعاون الفعّال والشفافية التامة في جميع مراحل المشروع
          </p>
          <div class="card card-ai text-center col-lg-6 col-12 col-md-8 d-flex justify-content-center align-items-center">
            <div class="card-body d-flex justify-content-center align-items-center col-12">
                  <div class="card-body p-0 col-12">
                    <p class="card-text">
                      <img src={assets.chaticon} alt="" />
                      تطبيق تمويل موبايل يسمى "Intuitive".
                    </p>
                    
                  </div>
                  <a
                      className="col-12"
                      href="https://chat.openai.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      حلل الفكره باستخدام AI
                    </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
