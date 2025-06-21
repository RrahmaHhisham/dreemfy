import React from "react";
import "./idea.css";
import assets from "../../../assets/assets";
function Idea() {
  return (

    <div className="idea row m-0 p-0">
  <div className="card text-bg-dark my-5 position-relative col-md-11 col-11 p-0">
    <img src={assets.ideas} className="card-img col-12" alt="..." />
    <div className="card-img-overlay col-11 px-4 py-2" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      
      {/* العنوان في الأعلى */}
      <div className="col-12">
        <h5 className="card-title side-title">لأصحاب الأفكار</h5>
      </div>

      {/* المحتوى الآخر تحت */}
      <div className="col-md-8 col-12">
        <p className="card-text-name">حقق فكرتك التقنية بسهولة</p>
        <p className="card-text-idea">
          تواصل مع أفضل فرق التطوير لتنفيذ مشروعك التقني بنجاح دون أي تكلفة.
          اعتمد على Dreamfy لتمويل مشروعك وتحقيق أهدافك بمرونة وشفافية
        </p>

        <div className="idea-cards col-12">
          <div className="card col-lg-12 col-xl-5 col-md-10 col-12">
            <div className="card-body col-12">
              <p className="card-title">أطلق مشروعك الآن</p>
              <p className="card-text">أطلق فكرتك الآن</p>
            </div>
          </div>
          <div className="card col-lg-12 col-xl-5 col-md-10 col-12">
            <div className="card-body col-12">
              <p className="card-title">تصفح الأفكار المبتكرة</p>
              <p className="card-text">ابدأ الاستكشاف</p>
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
