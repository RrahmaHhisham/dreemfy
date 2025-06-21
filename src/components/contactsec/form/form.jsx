import React from "react";
import "./form.css";
function Form() {
  return (
    <div className="form row m-0 p-0">
      <div className="form-content col-md-11 col-11">
        <div class="card">
          <div class="card-body inputs-form col-md-5 col-12 d-flex flex-row flex-wrap gap-3">
            <div className="col-md-5 col-12 d-flex flex-column">
                <label>الاسم الاول</label>
                <input type="text" placeholder="الاسم الاول" />
            </div>
            <div className="col-md-5 col-12 d-flex flex-column">
                <label>الاسم الاول</label>
                <input type="text" placeholder="الاسم الاول" />
            </div>
            <div className="col-md-10 col-12 d-flex flex-column">
                <label>البريد الألكتروني</label>
                <input type="text" placeholder="البريد الألكتروني" />
            </div>
            <div className="col-md-10 col-12 d-flex flex-column">
                <label>رسالتك</label>
                <textarea type="text" />
            </div>
          </div>
          <div class="card-body map-form col-md-5 col-12">
            <p class="card-title">العنوان</p>
            <p class="card-text">
             سوريا- دمشق القديمة، بالقرب من الجامع الأموي.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
