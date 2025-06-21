
import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup newpass row m-0 p-0">
      <div className="card col-md-12 col-12 d-flex justify-content-center align-items-center flex-column p-4 my-5">
        <div className="card col-md-5 col-12">
          <p className="card-title">إعادة تعيين كلمة المرور</p>
          <p className="card-text">أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور واستعادة الوصول إلى حسابك بسهولة وأمان</p>
          
          <form className="col-md-12 col-12">
            <div className="mb-3 input-wrapper">
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formData.email === "" && (
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z" stroke="#9C9C9C" stroke-width="1.5"/>
  <path d="M19.998 18C19.9993 17.836 20 17.6693 20 17.5C20 15.015 16.418 13 12 13C7.582 13 4 15.015 4 17.5C4 19.985 4 22 12 22C14.231 22 15.84 21.843 17 21.563" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round"/>
</svg>
                  اسم المستخدم او البريد الالكتروني
                </span>
              )}
            </div>
            
            <div className="col-12"> 
              <Link to="/check-email" className="btn col-12" style={{ textDecoration: "none"}}>
                 التالي 
              </Link>
            </div>
            <div className="signup">
                <Link to="/LogIn">العودة للخلف</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;