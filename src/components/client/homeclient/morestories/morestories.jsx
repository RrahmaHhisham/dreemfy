import React from "react";
import "./style.css";
import assets from "../../../../assets/assets";
import { Link } from "react-router-dom";
function MoreStories() {
  return (
    <div className="more-stories row m-0 p-0">
        <div className="more-stories-title col-md-10 col-12">
            <div>
              <p className="m-0 p-0">
                تصفح الكثير من قصص النجاح مع Dreamfy
            </p>
            <p className="captionmorestory">
              استلهم أفكارك من قصص نجاح ملهمة حققتها فرق التطوير وروّاد الأعمال بالتعاون مع Dreamfy، وانطلق نحو تحقيق أحلامك!
            </p>
            </div>
            <div className="more-story-link">
              <Link to="/stories">
                    عرض الكل
                    <img src={assets.arrowright} alt="arrow" />
                    
            </Link>
            </div>
        </div>
      <div className="more-stories-content col-md-10 col-12">
        <div class="card mb-3 col-12">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={assets.story}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="card-item col-md-8">
              <div class="card-body">
                <div className="date-card">
                  <p className="m-0 p-0">تطبيقات الهاتف</p>
                  <p className="m-0 p-0 date">20 نوفمبر 2024</p>
                </div>
                <h5 class="card-title">
                  رحلة نجاح تطبيق توصيل الطعام الأول في سوريا
                </h5>
                <p class="card-text">
                  تعرف على كيف ساهم التطبيق في تسهيل حياة المستخدمين وربطهم
                  بأفضل المطاعم المحلية، ليصبح الحل الأسرع والأكثر موثوقية لخدمة
                  توصيل الطعام
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreStories;
