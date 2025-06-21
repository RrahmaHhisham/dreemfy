// import React, { useState, useRef } from "react";
// import "./styles/styles.css";
// import Footer from "../../layouts/footer/footer";
// import { useNavigate } from "react-router-dom";

// function Form() {
//   const navigate = useNavigate();

//   // State variables
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [bio, setBio] = useState("");
//   const [educationLevel, setEducationLevel] = useState("");

//   const [selectedSpecialty, setSelectedSpecialty] = useState("اختر التخصص");
//   const [selectedEducation, setSelectedEducation] = useState("اختر التعليم");
//   const [selectedCountry, setSelectedCountry] = useState("اختر البلد");
//   const [selectedCity, setSelectedCity] = useState("اختر المدينة");

//   const [skills, setSkills] = useState(["Figma", "Photoshop", "Illustrator"]);
//   const [newSkill, setNewSkill] = useState("");

//   const additionalInfoRef = useRef(null);

//   // Options
//   const specialties = ["تصميم UI/UX", "تطوير ويب", "ذكاء اصطناعي"];
//   const countries = ["مصر", "السعودية", "الإمارات"];
//   const cities = ["القاهرة", "الرياض", "دبي"];
//   const educationOptions = ["ثانوي", "جامعي", "دراسات عليا"];

//   // Handlers
//   const handleBasicSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email) {
//       alert("يرجى ملء الاسم والبريد الإلكتروني");
//       return;
//     }
//     additionalInfoRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleAddSkill = () => {
//     const trimmedSkill = newSkill.trim();
//     if (trimmedSkill) {
//       setSkills([...skills, trimmedSkill]);
//       setNewSkill("");
//     }
//   };

//   const handleFinalSubmit = () => {
//     if (
//       selectedSpecialty === "اختر التخصص" ||
//       selectedCountry === "اختر البلد" ||
//       selectedCity === "اختر المدينة" ||
//       selectedEducation === "اختر التعليم" ||
//       !educationLevel ||
//       !bio ||
//       skills.length === 0
//     ) {
//       alert("يرجى تعبئة جميع الحقول في قسم المعلومات الإضافية");
//       return;
//     }
//     navigate("/freelance");
//   };

//   return (
//     <>
//       <div className="form-container row m-0 p-0">
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
//                 <div className="form-group">
//                   <label htmlFor="name">الاسم</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     placeholder="ادخل الاسم"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">البريد الإلكتروني</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     placeholder="ادخل البريد الإلكتروني"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div className="d-flex justify-content-end mt-3">
//                   <div className="col-md-4 col-12">
//                     <button
//                       type="button"
//                       className="btn save col-12"
//                       onClick={handleBasicSubmit}
//                     >
//                       حفظ التغييرات
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             {/* Additional Info Form */}
//             <p className="form-title">معلومات اضافية</p>
//             <div className="card" ref={additionalInfoRef}>
//               <form>
//                 {/* Specialty Dropdown */}
//                 <div className="form-group">
//                   <label>التخصص</label>
//                   <div className="dropdown col-12">
//                     <button
//                       className="btn btn-secondary dropdown-toggle col-12 d-flex justify-content-between align-items-center"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                     >
//                       {selectedSpecialty}
//                     </button>
//                     <ul className="dropdown-menu col-12 text-end">
//                       {specialties.map((item, index) => (
//                         <li key={index}>
//                           <button
//                             type="button"
//                             className="dropdown-item"
//                             onClick={() => setSelectedSpecialty(item)}
//                           >
//                             {item}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Skills Section */}
//                 <div className="col-12 add-skill d-flex justify-content-between mt-3 align-items-center">
//                   <p>المهارات</p>
//                   <div className="d-flex gap-2 align-items-center">
//                     <input
//                       type="text"
//                       className="form-control"
//                       style={{ width: "150px" }}
//                       placeholder="اكتب المهارة"
//                       value={newSkill}
//                       onChange={(e) => setNewSkill(e.target.value)}
//                     />
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={handleAddSkill}
//                     >
//                       إضافة
//                     </button>
//                   </div>
//                 </div>

//                 <div className="current-skills d-flex flex-wrap gap-2 mt-2">
//                   {skills.map((skill, index) => (
//                     <div
//                       key={index}
//                       className="skill-item d-flex align-items-center gap-2 p-2 rounded"
//                     >
//                       <p className="p-0 m-0">{skill}</p>
//                       <button
//                         type="button"
//                         className="btn border-0"
//                         onClick={() =>
//                           setSkills(skills.filter((_, i) => i !== index))
//                         }
//                       >
//                         &times;
//                       </button>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Bio */}
//                 <div className="my-3">
//                   <label htmlFor="bio">نبذة عنك</label>
//                   <textarea
//                     className="form-control"
//                     id="bio"
//                     rows="3"
//                     placeholder="اكتب نبذة عنك"
//                     value={bio}
//                     onChange={(e) => setBio(e.target.value)}
//                   ></textarea>
//                 </div>

//                 {/* Country and City */}
//                 <div className="live col-12">
//                   <div className="form-group col-lg-5 col-md-10">
//                     <label>بلد الاقامة</label>
//                     <div className="dropdown col-12">
//                       <button
//                         className="btn dropdown-toggle col-12 d-flex justify-content-between align-items-center"
//                         type="button"
//                         data-bs-toggle="dropdown"
//                       >
//                         {selectedCountry}
//                       </button>
//                       <ul className="dropdown-menu col-12 text-end">
//                         {countries.map((item, index) => (
//                           <li key={index}>
//                             <button
//                               type="button"
//                               className="dropdown-item"
//                               onClick={() => setSelectedCountry(item)}
//                             >
//                               {item}
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                   <div className="form-group col-lg-5 col-md-10">
//                     <label>المدينة</label>
//                     <div className="dropdown col-12">
//                       <button
//                         className="btn btn-secondary dropdown-toggle col-12 d-flex justify-content-between align-items-center"
//                         type="button"
//                         data-bs-toggle="dropdown"
//                       >
//                         {selectedCity}
//                       </button>
//                       <ul className="dropdown-menu col-12 text-end">
//                         {cities.map((item, index) => (
//                           <li key={index}>
//                             <button
//                               type="button"
//                               className="dropdown-item"
//                               onClick={() => setSelectedCity(item)}
//                             >
//                               {item}
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Education Dropdown */}
//                 <div className="form-group">
//                   <label>التعليم</label>
//                   <div className="dropdown col-12">
//                     <button
//                       className="btn btn-secondary dropdown-toggle col-12 d-flex justify-content-between align-items-center"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                     >
//                       {selectedEducation}
//                     </button>
//                     <ul className="dropdown-menu col-12 text-end">
//                       {educationOptions.map((item, index) => (
//                         <li key={index}>
//                           <button
//                             type="button"
//                             className="dropdown-item"
//                             onClick={() => setSelectedEducation(item)}
//                           >
//                             {item}
//                           </button>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Education Level Input */}
//                 <div className="form-group">
//                   <label htmlFor="phone">مستوي التعليم</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="phone"
//                     placeholder="ادخل مستوي التعليم"
//                     value={educationLevel}
//                     onChange={(e) => setEducationLevel(e.target.value)}
//                   />
//                 </div>

//                 {/* Final Submit */}
//                 <div className="col-md-4 col-12">
//                   <button
//                     type="button"
//                     className="btn save col-12"
//                     onClick={handleFinalSubmit}
//                   >
//                     حفظ التغييرات
//                   </button>
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

// export default Form;













import React, { useState, useRef } from "react";
import "./styles/styles.css";
import Footer from "../../../layouts/footer/footer";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  // State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [educationLevel, setEducationLevel] = useState("");

  const [selectedSpecialty, setSelectedSpecialty] = useState("اختر التخصص");
  const [selectedEducation, setSelectedEducation] = useState("اختر التعليم");
  const [selectedCountry, setSelectedCountry] = useState("اختر البلد");
  const [selectedCity, setSelectedCity] = useState("اختر المدينة");

  const [skills, setSkills] = useState(["Figma", "Photoshop", "Illustrator"]);
  const [newSkill, setNewSkill] = useState("");

  const additionalInfoRef = useRef(null);

  // Options
  const specialties = ["تصميم UI/UX", "تطوير ويب", "ذكاء اصطناعي"];
  const countries = ["مصر", "السعودية", "الإمارات"];
  const cities = ["القاهرة", "الرياض", "دبي"];
  const educationOptions = ["ثانوي", "جامعي", "دراسات عليا"];

  // Handlers
  const handleBasicSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("يرجى ملء الاسم والبريد الإلكتروني");
      return;
    }
    additionalInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddSkill = () => {
    const trimmedSkill = newSkill.trim();
    if (trimmedSkill) {
      setSkills([...skills, trimmedSkill]);
      setNewSkill("");
    }
  };

const handleFinalSubmit = () => {
  if (
    selectedSpecialty === "اختر التخصص" ||
    selectedCountry === "اختر البلد" ||
    selectedCity === "اختر المدينة" ||
    selectedEducation === "اختر التعليم" ||
    !educationLevel ||
    !bio ||
    skills.length === 0
  ) {
    alert("يرجى تعبئة جميع الحقول في قسم المعلومات الإضافية");
    return;
  }

  // ✅ حفظ الحالة بأن البيانات مكتملة
  localStorage.setItem("freelancerProfileCompleted", "true");

  navigate("/freelance");
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
            <p className="form-title">معلومات اضافية</p>
            <div className="card" ref={additionalInfoRef}>
              <form>
                {/* Specialty Dropdown */}
                <div className="form-group">
                  <label>التخصص</label>
                  <div className="dropdown col-12">
                    <button
                      className="btn btn-secondary dropdown-toggle col-12 d-flex justify-content-between align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      {selectedSpecialty}
                    </button>
                    <ul className="dropdown-menu col-12 text-end">
                      {specialties.map((item, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() => setSelectedSpecialty(item)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
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

                {/* Bio */}
                <div className="my-3">
                  <label htmlFor="bio">نبذة عنك</label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows="3"
                    placeholder="اكتب نبذة عنك"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></textarea>
                </div>

                {/* Country and City */}
                <div className="live col-12">
                  <div className="form-group col-lg-5 col-md-10">
                    <label>بلد الاقامة</label>
                    <div className="dropdown col-12">
                      <button
                        className="btn dropdown-toggle col-12 d-flex justify-content-between align-items-center"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        {selectedCountry}
                      </button>
                      <ul className="dropdown-menu col-12 text-end">
                        {countries.map((item, index) => (
                          <li key={index}>
                            <button
                              type="button"
                              className="dropdown-item"
                              onClick={() => setSelectedCountry(item)}
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="form-group col-lg-5 col-md-10">
                    <label>المدينة</label>
                    <div className="dropdown col-12">
                      <button
                        className="btn btn-secondary dropdown-toggle col-12 d-flex justify-content-between align-items-center"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        {selectedCity}
                      </button>
                      <ul className="dropdown-menu col-12 text-end">
                        {cities.map((item, index) => (
                          <li key={index}>
                            <button
                              type="button"
                              className="dropdown-item"
                              onClick={() => setSelectedCity(item)}
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education Dropdown */}
                <div className="form-group">
                  <label>التعليم</label>
                  <div className="dropdown col-12">
                    <button
                      className="btn btn-secondary dropdown-toggle col-12 d-flex justify-content-between align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      {selectedEducation}
                    </button>
                    <ul className="dropdown-menu col-12 text-end">
                      {educationOptions.map((item, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() => setSelectedEducation(item)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Education Level Input */}
                <div className="form-group">
                  <label htmlFor="phone">مستوي التعليم</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="ادخل مستوي التعليم"
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                  />
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

export default Form;
