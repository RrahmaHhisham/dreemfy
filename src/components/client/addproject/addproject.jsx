

// import React, { useState, useRef } from "react";
// import "./style.css";
// import Footer from "../../../layouts/footer/footer";

// function AddProjuct() {

//   const additionalInfoRef = useRef(null);
//   // Handlers
//   const handleBasicSubmit = (e) => {
//     e.preventDefault();
   
//     additionalInfoRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <div className="form-container form-pass row m-0 p-0">
//         <div className="form-content col-md-10 col-12">
//           {/* Sidebar */}
//           <div className="left-form col-md-3 col-12">
//             <p>الحساب</p>
//             <p>الحماية</p>
//             <p>الإشعارات</p>
//           </div>

//           <div className="right-form col-md-9 col-12">
//             {/* Basic Info Form */}
//             <div className="card">
//               <form>
//                 <p className="card-title">تغيير كلمة المرور</p>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="كلمة المرور القديمة"
//                   />
//                 </div>
//                 <p className="import-">يجب أن تتكون كلمة المرور من 8 أحرف على الأقل، وتتضمن رقمًا واحدًا أو رمزًا واحدًا.</p>
//                  <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control secound-form"
//                     id="name"
//                     placeholder="كلمة المرور الجديدة"
//                   />
//                 </div>
//                 <div className="d-flex justify-content-end mt-3">
//                   <div className="col-md-4 col-12">
//                     <button
//                       type="button"
//                       className="btn save col-12"
//                       onClick={handleBasicSubmit}
//                     >
//                      تغيير كلمة المرور
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default AddProjuct;
import React, { useState, useRef } from "react";
import "./style.css";
import Footer from "../../../layouts/footer/footer";
import { useNavigate } from "react-router-dom";

function AddProjuct() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const additionalInfoRef = useRef(null);

  const handleBasicSubmit = (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || newPassword.length < 8) {
      alert("يرجى إدخال كلمات مرور صحيحة (8 أحرف على الأقل)");
      return;
    }

    // حفظ البيانات في localStorage
    const passwordData = {
      oldPassword,
      newPassword,
    };
    localStorage.setItem("clientPasswordData", JSON.stringify(passwordData));

    // نحدد أن البروفايل مكتمل
    localStorage.setItem("clientProfileCompleted", "true");
localStorage.setItem("projectSummaryCompleted", "true");

    // ننتقل إلى صفحة العميل
    navigate("/client");
  };

  return (
    <>
      <div className="form-container form-pass row m-0 p-0">
        <div className="form-content col-md-10 col-12">
          <div className="left-form col-md-3 col-12">
            <p>الحساب</p>
            <p>الحماية</p>
            <p>الإشعارات</p>
          </div>

          <div className="right-form col-md-9 col-12">
            <div className="card">
              <form>
                <p className="card-title">تغيير كلمة المرور</p>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="كلمة المرور القديمة"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <p className="import-">
                  يجب أن تتكون كلمة المرور من 8 أحرف على الأقل، وتتضمن رقمًا واحدًا أو رمزًا واحدًا.
                </p>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control secound-form"
                    placeholder="كلمة المرور الجديدة"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <div className="col-md-4 col-12">
                    <button
                      type="button"
                      className="btn save col-12"
                      onClick={handleBasicSubmit}
                    >
                      تغيير كلمة المرور
                    </button>
                  </div>
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

export default AddProjuct;
