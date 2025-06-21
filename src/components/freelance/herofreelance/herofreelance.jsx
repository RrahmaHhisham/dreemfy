
import React, { useEffect, useState } from "react";
import assets from "../../../assets/assets";
import "./styles.css";
import { Link } from "react-router-dom";

function HeroFreelance() {
  const [isProfileCompleted, setIsProfileCompleted] = useState(false);

  useEffect(() => {
    const isCompleted =
      localStorage.getItem("freelancerProfileCompleted") === "true";
    setIsProfileCompleted(isCompleted);
  }, []);

  const [isTeamProfileCompleted, setIsTeamProfileCompleted] = useState(false);

  useEffect(() => {
    const isCompleted =
      localStorage.getItem("freelancerProfileCompleted") === "true";
    const isTeamCompleted =
      localStorage.getItem("teamProfileCompleted") === "true";

    setIsProfileCompleted(isCompleted);
    setIsTeamProfileCompleted(isTeamCompleted);
  }, []);

  return (
    <div className="herofreelance row mb-4 mx-0 p-0">
      <div className="card banner col-12 p-0 border-0">
        <img src={assets.freelancehero} className="card-img" alt="Page Hero" />
        <div
          className="card-img-overlay d-flex align-items-center justify-content-start text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <p>مرحبا بك بلال</p>
        </div>
      </div>

      <div className="info-data col-12">
        {!isTeamProfileCompleted && (
          <div className="card col-12 col-md-10 col-lg-5 col-xl-4">
            <div className="card-body d-flex align-items-center gap-3 flex-row justify-content-center col-12 col-md-7 col-lg-6 col-xl-6">
              <div><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M6.66667 25.3333V6.66667H16V16H25.3333V17.3333C26.2667 17.3333 27.16 17.5067 28 17.8V12L20 4H6.66667C5.18667 4 4 5.18667 4 6.66667V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H17.8C17.5067 27.16 17.3333 26.2667 17.3333 25.3333H6.66667ZM18.6667 6L26 13.3333H18.6667V6ZM30.6667 24V26.6667H26.6667V30.6667H24V26.6667H20V24H24V20H26.6667V24H30.6667Z" fill="url(#paint0_linear_286_2461)"/>
  <defs>
    <linearGradient id="paint0_linear_286_2461" x1="17.3333" y1="4" x2="17.3333" y2="30.6667" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9947D5"/>
      <stop offset="1" stop-color="#C6269B"/>
    </linearGradient>
  </defs>
</svg></div>
              <div>
                <p className="card-title">إنشاء فريق تطوير</p>
                <p className="card-subtitle mb-2">
                  قم بانشاء فريق التطوير الخاص بك
                </p>
              </div>
            </div>
            <div className="card-body d-flex align-items-center gap-3 flex-row justify-content-center col-12 col-md-7 col-lg-6 col-xl-6">
              <Link to="/freelance/FormTeemFree">استكمال معلومات الفريق</Link>
            </div>
          </div>
        )}

        {/* كرت الملف الشخصي */}
        {!isProfileCompleted && (
          <div className="card col-12 col-md-10 col-lg-4">
            <>
              <div className="card-body d-flex align-items-center gap-3 flex-row justify-content-center col-12 col-md-7 col-lg-6 col-xl-6">
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16 20V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V20" stroke="url(#paint0_linear_282_824)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 6H4C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6Z" stroke="url(#paint1_linear_282_824)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_282_824" x1="12" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9947D5"/>
      <stop offset="1" stop-color="#C6269B"/>
    </linearGradient>
    <linearGradient id="paint1_linear_282_824" x1="12" y1="6" x2="12" y2="20" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9947D5"/>
      <stop offset="1" stop-color="#C6269B"/>
    </linearGradient>
  </defs>
</svg></div>
                <div>
                  <p className="card-title">استكمال الملف الشخصي</p>
                  <p className="card-subtitle mb-2">
                    اكمل الملف الشخصي لسهولة الاستخدام
                  </p>
                </div>
              </div>

              <div className="card-body d-flex align-items-center gap-3 flex-row justify-content-center col-12 col-md-7 col-lg-6 col-xl-6">
                <Link to="/freelance/FormFreelance">استكمال الملف الشخصي</Link>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroFreelance;
