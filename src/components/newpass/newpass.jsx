import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
function NewPass() {
  const [formData, setFormData] = useState({
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup newpass row m-0 p-0">
      <div className="card col-md-12 col-12 d-flex justify-content-center align-items-center flex-column p-4 my-5">
        <div className="card col-md-5 col-12">
          <p>أدخل كلمة المرور الجديدة</p>
          <p>
            أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور واستعادة الوصول إلى
            حسابك بسهولة وأمان
          </p>

          <form className="col-md-12 col-12">
            
            <div className="mb-3 input-wrapper position-relative">
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {formData.password === "" && (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M5 13.5C5 12.9696 5.21071 12.4609 5.58579 12.0858C5.96086 11.7107 6.46957 11.5 7 11.5H17C17.5304 11.5 18.0391 11.7107 18.4142 12.0858C18.7893 12.4609 19 12.9696 19 13.5V19.5C19 20.0304 18.7893 20.5391 18.4142 20.9142C18.0391 21.2893 17.5304 21.5 17 21.5H7C6.46957 21.5 5.96086 21.2893 5.58579 20.9142C5.21071 20.5391 5 20.0304 5 19.5V13.5Z"
                      stroke="#9C9C9C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 11.5V7.5C8 6.43913 8.42143 5.42172 9.17157 4.67157C9.92172 3.92143 10.9391 3.5 12 3.5C13.0609 3.5 14.0783 3.92143 14.8284 4.67157C15.5786 5.42172 16 6.43913 16 7.5V11.5M11 16.5C11 16.7652 11.1054 17.0196 11.2929 17.2071C11.4804 17.3946 11.7348 17.5 12 17.5C12.2652 17.5 12.5196 17.3946 12.7071 17.2071C12.8946 17.0196 13 16.7652 13 16.5C13 16.2348 12.8946 15.9804 12.7071 15.7929C12.5196 15.6054 12.2652 15.5 12 15.5C11.7348 15.5 11.4804 15.6054 11.2929 15.7929C11.1054 15.9804 11 16.2348 11 16.5Z"
                      stroke="#9C9C9C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  كلمة المرور
                </span>
              )}

              {/* أيقونة العين على اليسار */}
              <img
                src={assets.eye}
                alt="show password"
                className="eye-icon-left"
              />
            </div>
            <p>
              يجب أن تتكون كلمة المرور من 8 أحرف على الأقل، وتتضمن رقمًا واحدًا
              أو رمزًا واحدًا.
            </p>

            <div className="mb-3 input-wrapper position-relative">
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {formData.password === "" && (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M5 13.5C5 12.9696 5.21071 12.4609 5.58579 12.0858C5.96086 11.7107 6.46957 11.5 7 11.5H17C17.5304 11.5 18.0391 11.7107 18.4142 12.0858C18.7893 12.4609 19 12.9696 19 13.5V19.5C19 20.0304 18.7893 20.5391 18.4142 20.9142C18.0391 21.2893 17.5304 21.5 17 21.5H7C6.46957 21.5 5.96086 21.2893 5.58579 20.9142C5.21071 20.5391 5 20.0304 5 19.5V13.5Z"
                      stroke="#9C9C9C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 11.5V7.5C8 6.43913 8.42143 5.42172 9.17157 4.67157C9.92172 3.92143 10.9391 3.5 12 3.5C13.0609 3.5 14.0783 3.92143 14.8284 4.67157C15.5786 5.42172 16 6.43913 16 7.5V11.5M11 16.5C11 16.7652 11.1054 17.0196 11.2929 17.2071C11.4804 17.3946 11.7348 17.5 12 17.5C12.2652 17.5 12.5196 17.3946 12.7071 17.2071C12.8946 17.0196 13 16.7652 13 16.5C13 16.2348 12.8946 15.9804 12.7071 15.7929C12.5196 15.6054 12.2652 15.5 12 15.5C11.7348 15.5 11.4804 15.6054 11.2929 15.7929C11.1054 15.9804 11 16.2348 11 16.5Z"
                      stroke="#9C9C9C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  تأكيد كلمة المرور
                </span>
              )}

              {/* أيقونة العين على اليسار */}
              <img
                src={assets.eye}
                alt="show password"
                className="eye-icon-left"
              />
            </div>

            <div className="col-12">
              <Link
                to="/freelance"
                className="btn col-12"
                style={{ textDecoration: "none" }}
              >
                تغيير كلمة المرور
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPass;
