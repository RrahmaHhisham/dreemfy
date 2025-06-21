
import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function CheckEmail() {

  return (
    <div className="signup checkemail row m-0 p-0">
      <div className="card col-md-12 col-12 d-flex justify-content-center align-items-center flex-column p-4 my-5">
        <div className="card col-md-5 col-12">
          <p className="card-title">تحقق من بريدك الإلكتروني</p>
          <p className="card-text">لقد أرسلنا إليك بريدًا إلكترونيًا يحتوي على تعليمات لإعادة تعيين كلمة المرور. يرجى التحقق من صندوق الوارد لديك واتباع الخطوات المذكورة.</p>
          <p className="card-text">إذا لم تطلب تغيير كلمة المرور أو كنت ترغب في تسجيل الدخول إلى حساب آخر، اختر 'العودة إلى تسجيل الدخول</p>
          <form className="col-md-12 col-12">
           
            
            <div className="col-12"> 
              <Link to="/check-email" className="btn col-12" style={{ textDecoration: "none"}}>
                 العودة لتسجيل الدخول 
              </Link>
            </div>
            <div>
                <Link to="/newpass">تغيير كلمة المرور</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckEmail;