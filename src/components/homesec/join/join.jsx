import React from "react";
import assets from "../../../assets/assets";
import "./join.css";
function Join() {
  return (
    <div className="join row m-0 p-0">
      <div class="card col-md-11 col-11 border-0">
        <div class="card-body">
          <div class="card bg-transparent border-0">
            <div class="card-body d-flex justify-content-between align-items-center flex-wrap flex-row">
              <div class="card col-md-8 col-12 border-0  bg-transparent">
                <div class="card-body bg-transparent">
                  <p class="card-subtitle mb-2 text-body-secondary">
                    انضم إلي الكثير من قصص النجاح!
                  </p>
                  <p class="card-text">
                    نضم إلى العديد من أصحاب الأفكار الذين حققوا نجاحًا كبيرًا
                    بفضل تعاونهم مع فرق تطوير محترفة عبر منصة Dreamfy. لن تحتاج
                    إلى دفع تكاليف مسبقة، فقط شارك فكرتك وساعدنا في تحويلها إلى
                    واقع مربح!
                  </p>
                  
                </div>
              </div>
              <div class="card border-0 side-card col-md-4 bg-transparent col-12 d-flex justify-content-center align-items-start">
                <div className="col-md-5 d-flex justify-content-start align-items-start">
                    <img src={assets.team} class="card-img-top" alt="..." />
                </div>
                <div class="card-body">
                 <button className="col-12">سجل فكرتك الان</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
