import React from "react";
import "./DreamfyFeatures.css"; // هنحتاج نضيف CSS للتنسيق
import assets from "../../../assets/assets";
function DreamfyFeatures() {
  return (
    <div className="dreamfyfeatures container-fluid row m-0 p-0">
      <div class="card col-md-11 bg-transparent">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1280 335"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          className="responsive-svg"
        >
          <foreignObject x="-100" y="-99.0771" width="1480" height="534">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(50px)",
                clipPath: "url(#bgblur_0_680_633_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1055 19.2582C1055 9.13185 1046.79 0.922852 1036.66 0.922852H243.335C233.209 0.922852 225 9.13185 225 19.2582C225 29.3845 216.791 37.5935 206.665 37.5935H20C8.95431 37.5935 0 46.5478 0 57.5935V314.923C0 325.969 8.95431 334.923 20 334.923H1260C1271.05 334.923 1280 325.969 1280 314.923V57.5935C1280 46.5478 1271.05 37.5935 1260 37.5935H1073.34C1063.21 37.5935 1055 29.3845 1055 19.2582Z"
            fill="url(#paint0_linear_680_633)"
            fillOpacity="0.8"
          />
          <defs>
            <clipPath
              id="bgblur_0_680_633_clip_path"
              transform="translate(100 99.0771)"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1055 19.2582C1055 9.13185 1046.79 0.922852 1036.66 0.922852H243.335C233.209 0.922852 225 9.13185 225 19.2582C225 29.3845 216.791 37.5935 206.665 37.5935H20C8.95431 37.5935 0 46.5478 0 57.5935V314.923C0 325.969 8.95431 334.923 20 334.923H1260C1271.05 334.923 1280 325.969 1280 314.923V57.5935C1280 46.5478 1271.05 37.5935 1260 37.5935H1073.34C1063.21 37.5935 1055 29.3845 1055 19.2582Z"
              />
            </clipPath>
            <linearGradient
              id="paint0_linear_680_633"
              x1="1282.46"
              y1="315.837"
              x2="199.393"
              y2="-332.282"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#805AF5" />
              <stop offset="1" stopColor="#FA11FF" />
            </linearGradient>
          </defs>
        </svg>
        <div class="card-img-overlay d-flex justify-content-evenly align-items-center flex-wrap flex-row">
          <div class="card bg-transparent border-0">
            <div class="card-body col-12">
              <div className="border-icon">
                <div className="img-card">
                  <img src={assets.wallet} class="card-img" alt="..." />
                </div>
              </div>
              <h5 class="card-title">بدون تكاليف</h5>
            </div>
          </div>
          <div class="card bg-transparent border-0">
            <div class="card-body">
              <div className="border-icon">
                <div className="img-card">
                  <img src={assets.start} class="card-img" alt="..." />
                </div>
              </div>
              <h5 class="card-title">احترافية عالية</h5>
            </div>
          </div>
          <div class="card bg-transparent border-0">
            <div class="card-body">
              <div className="border-icon">
                <div className="img-card">
                  <img src={assets.profile} class="card-img" alt="..." />
                </div>
              </div>
              <h5 class="card-title">شفافية كاملة</h5>
            </div>
          </div>
          <div class="card bg-transparent border-0">
            <div class="card-body">
              <div className="border-icon">
                <div className="img-card">
                  <img src={assets.max} class="card-img" alt="..." />
                </div>
              </div>
              <h5 class="card-title">تعاون عالمي</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DreamfyFeatures;
