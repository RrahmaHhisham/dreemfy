import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/styles.css";
import btnnav from "../assets/btn-nav.svg";

function TopNav() {
  const location = useLocation();
  const isFreelancePage = location.pathname.startsWith("/freelance");
  return (
    <>
      <div className="d-none d-md-none d-lg-block">
        <div class="topnav">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                DREAMFY
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      بحث عن فرق
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      تصفح المشاريع
                    </a>
                  </li>
                </ul>

                {!isFreelancePage && (
                  <div className="login-btns">
                    <Link to="/LogIn" className="login-btn">
                      تسجيل الدخول
                    </Link>
                    <Link to="/SignUp" className="signup-btn">
                      انشاء حساب
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
        <div class="bottomnav">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse d-flex"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row align-items-center justify-content-evenly col-12">
                  <li className="nav-item">
                    <Link
                      to="/boutiquehotels"
                      className={`nav-link ${
                        location.pathname === "/boutiquehotels"
                          ? "active-page"
                          : "inactive-page"
                      }`}
                    >
                      فنادق بوتيكية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/digital-platforms"
                      className={`nav-link ${
                        location.pathname === "/digital-platforms"
                          ? "active-page"
                          : "inactive-page"
                      }`}
                    >
                      التطبيقات والمنصات الرقمية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/interactive-games"
                      className={`nav-link ${
                        location.pathname === "/interactive-games"
                          ? "active-page"
                          : "inactive-page"
                      }`}
                    >
                      الألعاب والتجارب التفاعلية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/ai-web3"
                      className={`nav-link ${
                        location.pathname === "/ai-web3"
                          ? "active-page"
                          : "inactive-page"
                      }`}
                    >
                      الذكاء الاصطناعي و Web3
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      to="/interactive-games"
                      className={`nav-link ${
                        location.pathname === "/interactive-games"
                          ? "active-page"
                          : "inactive-page"
                      }`}
                    >
                      الألعاب والتجارب التفاعلية
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      to="/fintech"
                      className={`nav-link ${
                        location.pathname === "/fintech"
                          ? "active-page"
                          : "inactive-page"
                      }`}
                    >
                      التقنيات والخدمات المالية
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/marketing-projects"
                      className={`nav-link ${
                        location.pathname === "/marketing-projects"
                          ? "active-page"
                          : "inactive-page"
                      }`}
                    >
                      المشاريع التقنية والتسويقية
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <nav class="navbar navbar-mobile fixed-top d-lg-none d-block">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            DREAMFY
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <img src={btnnav} alt="" />
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header d-flex justify-content-between">
              <p class="offcanvas-title" id="offcanvasNavbarLabel">
                DREAMFY
              </p>
              <button
                type="button"
                class="btn-close m-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    بحث عن فرق
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    تصفح المشاريع
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" to="/boutiquehotels">
                    فنادق بوتيكية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/digital-platforms">
                    التطبيقات والمنصات الرقمية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ai-web3">
                    الذكاء الاصطناعي و Web3
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/interactive-games">
                    الألعاب والتجارب التفاعلية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fintech">
                    التقنيات والخدمات المالية
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/marketing-projects">
                    المشاريع التقنية والتسويقية
                  </Link>
                </li>
              </ul>

              <div className="login-btns justify-content-start flex-column align-items-start">
                <Link to="/login" className="login-btn">
                  تسجيل الدخول
                </Link>
                <Link to="/SignUp" className="signup-btn">
                  انشاء حساب
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNav;
