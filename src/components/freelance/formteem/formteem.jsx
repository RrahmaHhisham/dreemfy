
import React, { useState, useRef } from "react";
import "./form.css";
import Footer from "../../../layouts/footer/footer";
import { useNavigate } from "react-router-dom";

function FormTeem() {
    const navigate = useNavigate();

  // State variables

    const [bio, setBio] = useState("");

    const [skills, setSkills] = useState(["Figma", "Photoshop", "Illustrator"]);
    const [newSkill, setNewSkill] = useState("");

    const additionalInfoRef = useRef(null);

    const handleAddSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill) {
        setSkills([...skills, trimmedSkill]);
        setNewSkill("");
    }
    };

    const handleSubmit = () => {
    // مثال بسيط على تحقق من ملء البيانات
    if (!bio || skills.length === 0) {
        alert("يرجى ملء جميع الحقول");
        return;
    }

    // حفظ الحالة في localStorage
    localStorage.setItem("teamProfileCompleted", "true");

    // الانتقال للصفحة الرئيسية
    navigate("/freelance");
    };

        return (
    <>
        <div className="form-container-teem row m-0 p-0">
        <div className="form-content col-lg-7 col-12">
          {/* Sidebar */}

          {/* Additional Info Form */}
          <p className="form-title">معلومات الفريق</p>
          <div className="card col-12" ref={additionalInfoRef}>
            <form>
              {/* Specialty Dropdown */}
              <div className="form-group">
                <label>اسم الفريق</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ادخل اسم الفريق"
                />
              </div>
              <div className="form-group">
                <label>التخصص</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="تخصص الفريق"
                />
              </div>

              {/* Bio */}
              <div className="my-3">
                <label htmlFor="bio">نبذة عن الفريق</label>
                <textarea
                  className="form-control"
                  id="bio"
                  rows="3"
                  placeholder="أضف نبذه عنك وعن خبراتك"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  style={{ color: "white" }}
                ></textarea>
              </div>

              {/* Skills Section */}
              <div className="col-12 add-skill d-flex justify-content-between mt-3 align-items-center">
                <p>المهارات</p>
                <div className="d-flex gap-2 align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    style={{ width: "150px" }}
                    placeholder="اكتب المهارة"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddSkill}
                  >
                    إضافة
                  </button>
                </div>
              </div>

              <div className="current-skills d-flex flex-wrap gap-2 mt-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item d-flex align-items-center gap-2 p-2 rounded"
                  >
                    <p className="p-0 m-0">{skill}</p>
                    <button
                      type="button"
                      className="btn border-0"
                      onClick={() =>
                        setSkills(skills.filter((_, i) => i !== index))
                      }
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>

              <div className="form-group">
                <label>رابط الفريق</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="www.teamupnow.com"
                />
              </div>

              {/* Final Submit */}
              <div className="col-md-4 col-12">
                <button
                  type="button"
                  className="btn save col-12"
                  onClick={handleSubmit}
                >
                  حفظ التغييرات
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormTeem;
