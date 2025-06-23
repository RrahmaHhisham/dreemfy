import React from "react";
import assets from "../../../assets/assets";
import "./join.css";
import bg from "../../../assets/bg.jpeg";
function Join() {
  return (
    <div className="join row m-0 p-0">
      <div class="card text-bg-dark col-md-11">
        <img src={bg} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <div class="card-body bg-transparent col-md-5 col-12">
            <p class="card-subtitle mb-2 text-body-secondary">
              انضم إلي الكثير من قصص النجاح!
            </p>
            <p class="card-text">
              نضم إلى العديد من أصحاب الأفكار الذين حققوا نجاحًا كبيرًا بفضل
              تعاونهم مع فرق تطوير محترفة عبر منصة Dreamfy. لن تحتاج إلى دفع
              تكاليف مسبقة، فقط شارك فكرتك وساعدنا في تحويلها إلى واقع مربح!
            </p>
          </div>
          <div class="card-body bg-transparent col-md-5 col-12 d-flex justify-content-center align-items-center flex-column">
            <div className="col-md-5 d-flex justify-content-start align-items-start">
              <img src={assets.team} class="card-img-top" alt="..." />
            </div>
            <div class="card-body col-md-7">
              <button className="col-12">سجل فكرتك الان</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
