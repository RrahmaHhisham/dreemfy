import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import userlogin from "../../../assets/user-login.svg";
import btnnav from "../../../assets/btn-nav.svg";
function FreelanceNavbar() {
  return (
    <>
      <div className="d-none d-md-none d-lg-block">
        <div class="topnav">
          <nav class="navbar navbar-expand-lg ">
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
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="search-input col-md-6 col-lg-5">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="بحث "
                    />
                  </div>
                  <div className="icons-nav">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM20 8L12.525 12.675C12.4417 12.725 12.3543 12.7627 12.263 12.788C12.1717 12.8133 12.084 12.8257 12 12.825C11.916 12.8243 11.8287 12.812 11.738 12.788C11.6473 12.764 11.5597 12.7263 11.475 12.675L4 8V18H20V8ZM12 11L20 6H4L12 11ZM4 8.25V6.775V6.8V6.788V8.25Z"
                          fill="#EFEFEF"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 19V10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10V19M6 19H18M6 19H4M18 19H20M11 22H13"
                          stroke="#EFEFEF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4Z"
                          stroke="#EFEFEF"
                          stroke-width="2"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20.1603 5.00017C19.1002 3.93737 17.6951 3.28871 16.1986 3.17134C14.7021 3.05397 13.213 3.47563 12.0003 4.36017C10.7279 3.4138 9.14427 2.98468 7.5682 3.1592C5.99212 3.33373 4.54072 4.09894 3.50625 5.30075C2.47178 6.50256 1.9311 8.05169 1.99308 9.63618C2.05506 11.2207 2.71509 12.7228 3.84028 13.8402L10.0503 20.0602C10.5703 20.5719 11.2707 20.8588 12.0003 20.8588C12.7299 20.8588 13.4303 20.5719 13.9503 20.0602L20.1603 13.8402C21.3279 12.6654 21.9832 11.0764 21.9832 9.42017C21.9832 7.76389 21.3279 6.1749 20.1603 5.00017ZM18.7503 12.4602L12.5403 18.6702C12.4696 18.7415 12.3855 18.7982 12.2928 18.8368C12.2001 18.8755 12.1007 18.8954 12.0003 18.8954C11.8999 18.8954 11.8004 18.8755 11.7077 18.8368C11.615 18.7982 11.5309 18.7415 11.4603 18.6702L5.25028 12.4302C4.46603 11.6285 4.02689 10.5516 4.02689 9.43017C4.02689 8.3087 4.46603 7.23182 5.25028 6.43017C6.04943 5.64115 7.12725 5.19873 8.25028 5.19873C9.3733 5.19873 10.4511 5.64115 11.2503 6.43017C11.3432 6.52389 11.4538 6.59829 11.5757 6.64906C11.6976 6.69983 11.8283 6.72596 11.9603 6.72596C12.0923 6.72596 12.223 6.69983 12.3449 6.64906C12.4667 6.59829 12.5773 6.52389 12.6703 6.43017C13.4694 5.64115 14.5472 5.19873 15.6703 5.19873C16.7933 5.19873 17.8711 5.64115 18.6703 6.43017C19.4653 7.22132 19.9189 8.29236 19.9338 9.41385C19.9488 10.5353 19.5239 11.6181 18.7503 12.4302V12.4602Z"
                          fill="#EFEFEF"
                        />
                      </svg>
                    </div>

                    <div className="user-login">
                      <img src={userlogin} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div class="bottomnav">
          <nav class="navbar navbar-expand-lg">
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
                <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 d-flex flex-row align-items-center justify-content-evenly col-12">
                  <li className="nav-item">
                    <Link className="nav-link" to="/digital-platforms">
                      فنادق بوتيكية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/digital-platforms">
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
            <div class="offcanvas-header d-flex align-items-center justify-content-between">
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
              <div className="icons-nav">
                <div className="user-login">
                  <img src={userlogin} alt="" />
                </div>
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.19667 19.0217 2.00067 18.5507 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.98 4.19667 3.45067 4.00067 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.0217 19.805 20.5507 20.0007 20 20H4ZM20 8L12.525 12.675C12.4417 12.725 12.3543 12.7627 12.263 12.788C12.1717 12.8133 12.084 12.8257 12 12.825C11.916 12.8243 11.8287 12.812 11.738 12.788C11.6473 12.764 11.5597 12.7263 11.475 12.675L4 8V18H20V8ZM12 11L20 6H4L12 11ZM4 8.25V6.775V6.8V6.788V8.25Z"
                      fill="#EFEFEF"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 19V10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10V19M6 19H18M6 19H4M18 19H20M11 22H13"
                      stroke="#EFEFEF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4Z"
                      stroke="#EFEFEF"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20.1603 5.00017C19.1002 3.93737 17.6951 3.28871 16.1986 3.17134C14.7021 3.05397 13.213 3.47563 12.0003 4.36017C10.7279 3.4138 9.14427 2.98468 7.5682 3.1592C5.99212 3.33373 4.54072 4.09894 3.50625 5.30075C2.47178 6.50256 1.9311 8.05169 1.99308 9.63618C2.05506 11.2207 2.71509 12.7228 3.84028 13.8402L10.0503 20.0602C10.5703 20.5719 11.2707 20.8588 12.0003 20.8588C12.7299 20.8588 13.4303 20.5719 13.9503 20.0602L20.1603 13.8402C21.3279 12.6654 21.9832 11.0764 21.9832 9.42017C21.9832 7.76389 21.3279 6.1749 20.1603 5.00017ZM18.7503 12.4602L12.5403 18.6702C12.4696 18.7415 12.3855 18.7982 12.2928 18.8368C12.2001 18.8755 12.1007 18.8954 12.0003 18.8954C11.8999 18.8954 11.8004 18.8755 11.7077 18.8368C11.615 18.7982 11.5309 18.7415 11.4603 18.6702L5.25028 12.4302C4.46603 11.6285 4.02689 10.5516 4.02689 9.43017C4.02689 8.3087 4.46603 7.23182 5.25028 6.43017C6.04943 5.64115 7.12725 5.19873 8.25028 5.19873C9.3733 5.19873 10.4511 5.64115 11.2503 6.43017C11.3432 6.52389 11.4538 6.59829 11.5757 6.64906C11.6976 6.69983 11.8283 6.72596 11.9603 6.72596C12.0923 6.72596 12.223 6.69983 12.3449 6.64906C12.4667 6.59829 12.5773 6.52389 12.6703 6.43017C13.4694 5.64115 14.5472 5.19873 15.6703 5.19873C16.7933 5.19873 17.8711 5.64115 18.6703 6.43017C19.4653 7.22132 19.9189 8.29236 19.9338 9.41385C19.9488 10.5353 19.5239 11.6181 18.7503 12.4302V12.4602Z"
                      fill="#EFEFEF"
                    />
                  </svg>
                </div>
              </div>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" to="/boutiquehotels">
                    التطبيقات والمنصات الرقمية
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/digital-platforms">
                    البرمجيات والأنظمة المتكاملة
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
              <div className="col-10">
                <div className="search-input">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="بحث "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default FreelanceNavbar;
