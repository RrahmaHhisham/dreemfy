
import React, { useState, useRef } from "react";
import "./style.css";
import Footer from "../../../layouts/footer/footer";
import { useNavigate } from "react-router-dom";

function FormClient() {
  const navigate = useNavigate();

  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
const [selectedWorkType, setSelectedWorkType] = useState("");


  const additionalInfoRef = useRef(null);



  // Handlers
  const handleBasicSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("يرجى ملء الاسم والبريد الإلكتروني");
      return;
    }
    additionalInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };



const handleFinalSubmit = () => {
  if (!bio || !selectedWorkType) {
    alert("يرجى ملء جميع معلومات الشركة");
    return;
  }

  const clientData = {
    name,
    email,
    bio,
    workType: selectedWorkType,
  };

  localStorage.setItem("clientProfileData", JSON.stringify(clientData));

  // 🔴 السطر اللي كان ناقص:
  localStorage.setItem("clientProfileCompleted", "true");

  navigate("/client");
};


  return (
    <>
      <div className="form-container row m-0 p-0">
        <div className="form-content col-md-10 col-12">
          {/* Sidebar */}
          <div className="left-form col-md-3 col-12">
            <p>الحساب</p>
            <p>الحماية</p>
            <p>الإشعارات</p>
          </div>

          <div className="right-form col-md-9 col-12">
            {/* Basic Info Form */}
            <div className="card">
              <form>
                <div className="form-group">
                  <label htmlFor="name">الاسم</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="ادخل الاسم"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="ادخل البريد الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ color: "white" }}
                  />
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <div className="col-md-4 col-12">
                    <button
                      type="button"
                      className="btn save col-12"
                      onClick={handleBasicSubmit}
                    >
                      حفظ التغييرات
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Additional Info Form */}
            <p className="form-title">معلومات الشركة</p>
            <div className="card" ref={additionalInfoRef}>
              <form>
                {/* Bio */}
                <div className="my-3">
                  <label htmlFor="bio">وصف الشركة</label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows="3"
                    placeholder="اكتب وصف للشركة"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>

                <div className="type-work">
  <label className="mb-2">نوع عمل الشركة</label>
  <div className="cards-join row">
    {[
      { label: "وكالة", value: "freelance" },
      { label: "خدمات الكترونية", value: "services" },
      { label: "سلع مادية", value: "products" },
      { label: "نوع آخر", value: "other" },
    ].map((role, index) => (
      <div
        key={index}
        className={`card col-md-8 col-lg-5 col-12 m-2 ${
          selectedWorkType === role.value ? "border" : ""
        }`}
        style={{ cursor: "pointer" }}
        onClick={() => setSelectedWorkType(role.value)}
      >
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="card-text m-0">{role.label}</p>
          <input
            type="radio"
            name="workType"
            value={role.value}
            checked={selectedWorkType === role.value}
            onChange={() => setSelectedWorkType(role.value)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    ))}
  </div>
</div>



                {/* Final Submit */}
                <div className="col-md-4 col-12">
                  <button
                    type="button"
                    className="btn save col-12"
                    onClick={handleFinalSubmit}
                  >
                    حفظ التغييرات
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormClient;
