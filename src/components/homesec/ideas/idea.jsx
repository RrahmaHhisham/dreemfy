import React from "react";
import "./idea.css";
import assets from "../../../assets/assets";
function Idea() {
  return (
    <div className="idea row m-0 p-0">
      {/* <div className="card text-bg-dark position-relative col-md-11 col-11 p-0 m-0">
        <img src={assets.ideas} className="card-img col-12" alt="..." />
        <div
          className="card-img-overlay col-11"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="col-12">
            <p className="card-title side-title">لأصحاب الأفكار</p>
          </div>

          <div className="col-md-8 col-12">
            <p className="card-text-name">حقق فكرتك التقنية بسهولة</p>
            <p className="card-text-idea">
              تواصل مع أفضل فرق التطوير لتنفيذ مشروعك التقني بنجاح دون أي تكلفة.
              اعتمد على Dreamfy لتمويل مشروعك وتحقيق أهدافك بمرونة وشفافية
            </p>

            <div className="idea-cards col-12">
              <div className="card col-lg-12 col-xl-5 col-md-10 col-12">
                <div className="card-body col-12">
                  <p className="card-title small-card">أطلق مشروعك الآن</p>
                  <p className="card-text idea- m-0 p-0">أطلق فكرتك الآن
                    <img src={assets.arrowright} alt="" />
                  </p>
                </div>
              </div>
              <div className="card col-lg-12 col-xl-5 col-md-10 col-12">
                <div className="card-body col-12">
                  <p className="card-title small-card">تصفح الأفكار المبتكرة</p>
                  <p className="card-text idea- m-0 p-0">ابدأ الاستكشاف
                    <img src={assets.arrowright} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="wrapper-idea col-md-11 p-0">
        <div class="card text-bg-dark p-0">
          <img src={assets.ideas} className="card-img col-12" alt="..." />
          <div class="card-img-overlay">
            <div>
              <p class="card-title">لأصحاب الأفكار</p>
            </div>
            <div>
              <div className="text-idea">
                <p class="card-text">حقق فكرتك التقنية بسهولة</p>
                <p className="caption-idea col-md-8 col-12">
                  تواصل مع أفضل فرق التطوير لتنفيذ مشروعك التقني بنجاح دون أي
                  تكلفة اعتمد على Dreamfy لتمويل مشروعك وتحقيق أهدافك بمرونة
                  وشفافية
                </p>
              </div>
              <div className="idea-cards col-12">
              <div className="card col-lg-5 col-xl-5 col-md-10 col-12">
                <div className="card-body col-12">
                  <p className="card-title-idea">أطلق مشروعك الآن</p>
                  <p className="card-text-idea m-0 p-0">أطلق فكرتك الآن
                    <img src={assets.arrowright} alt="" />
                  </p>
                </div>
              </div>
              <div className="card col-lg-5 col-xl-5 col-md-10 col-12">
                <div className="card-body col-12">
                  <p className="card-title-idea">تصفح الأفكار المبتكرة</p>
                  <p className="card-text-idea m-0 p-0">ابدأ الاستكشاف
                    <img src={assets.arrowright} alt="" />
                  </p>
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

export default Idea;
