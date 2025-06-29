import React from "react";
import "./DreamfyFeatures.css"; // هنحتاج نضيف CSS للتنسيق
import assets from "../../../assets/assets";
function DreamfyFeatures() {
  return (
    <div className="dreamfyfeatures row m-0 p-0">
      {/* <div class="card col-md-11 p-0">
        <svg
  width="100%"
  viewBox="0 0 1280 335"
  preserveAspectRatio="xMidYMid slice"
  fill="none"
  className="responsive-svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M1055 19.2582C1055 9.13185 1046.79 0.922852 1036.66 0.922852H243.335C233.209 0.922852 225 9.13185 225 19.2582C225 29.3845 216.791 37.5935 206.665 37.5935H20C8.95431 37.5935 0 46.5478 0 57.5935V314.923C0 325.969 8.95431 334.923 20 334.923H1260C1271.05 334.923 1280 325.969 1280 314.923V57.5935C1280 46.5478 1271.05 37.5935 1260 37.5935H1073.34C1063.21 37.5935 1055 29.3845 1055 19.2582Z"
    fill="url(#dreamfyGradient)"
    fillOpacity="1"
  />

  <defs>
    <linearGradient
      id="dreamfyGradient"
      gradientTransform="rotate(279)"
    >
      <stop offset="0.0061" stopColor="rgba(153, 71, 213, 0.8)" />
      <stop offset="1" stopColor="rgba(198, 38, 155, 0.8)" />
    </linearGradient>
  </defs>
</svg>



        <div class="card-img-overlay">
          <p>مميزات التعاون مع Dreamfy</p>
          <div className="content-dreemfy col-12">
            <div class="card bg-transparent col-lg-3 col-md-5 col-12 border-0">
              <div class="card-body col-12">
                <div className="border-icon">
                  <div className="img-card">
                    <img src={assets.wallet} class="card-img" alt="..." />
                  </div>
                </div>
                <p class="card-title">بدون تكاليف</p>
              </div>
            </div>
            <div class="card bg-transparent col-lg-3 col-md-5 col-12 border-0">
              <div class="card-body">
                <div className="border-icon">
                  <div className="img-card">
                    <img src={assets.start} class="card-img" alt="..." />
                  </div>
                </div>
                <p class="card-title">احترافية عالية</p>
              </div>
            </div>
            <div class="card bg-transparent col-lg-3 col-md-5 col-12 border-0">
              <div class="card-body">
                <div className="border-icon">
                  <div className="img-card">
                    <img src={assets.profile} class="card-img" alt="..." />
                  </div>
                </div>
                <p class="card-title">شفافية كاملة</p>
              </div>
            </div>
            <div class="card bg-transparent col-lg-3 col-md-5 col-12 border-0">
              <div class="card-body">
                <div className="border-icon">
                  <div className="img-card">
                    <img src={assets.max} class="card-img" alt="..." />
                  </div>
                </div>
                <p class="card-title">تعاون عالمي</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="card col-md-11 p-0 bg-transparent">
  <svg
    width="100%"
    viewBox="0 0 1280 335"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    className="responsive-svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1055 19.2582C1055 9.13185 1046.79 0.922852 1036.66 0.922852H243.335C233.209 0.922852 225 9.13185 225 19.2582C225 29.3845 216.791 37.5935 206.665 37.5935H20C8.95431 37.5935 0 46.5478 0 57.5935V314.923C0 325.969 8.95431 334.923 20 334.923H1260C1271.05 334.923 1280 325.969 1280 314.923V57.5935C1280 46.5478 1271.05 37.5935 1260 37.5935H1073.34C1063.21 37.5935 1055 29.3845 1055 19.2582Z"
      fill="url(#dreamfyGradient)"
      fillOpacity="0.8"
    />

    <defs>
      <linearGradient
        id="dreamfyGradient"
        x1="1282.46"
        y1="314.914"
        x2="199.393"
        y2="-333.205"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#9947D5"/>
        <stop offset="1" stop-color="#C6269B"/>
      </linearGradient>
    </defs>
  </svg>

  <div class="card-img-overlay">
    <p>مميزات التعاون مع Dreamfy</p>
    <div className="content-dreemfy col-12">
      <div class="card bg-transparent col-lg-3 col-md-5 col-12 border-0">
        <div class="card-body col-12">
          <div className="border-icon">
            <div className="img-card">
              <img src={assets.wallet} class="card-img" alt="..." />
            </div>
          </div>
          <p class="card-title">بدون تكاليف</p>
        </div>
      </div>
      <div class="card bg-transparent col-lg-3 col-md-5 col-12 border-0">
        <div class="card-body">
          <div className="border-icon">
            <div className="img-card">
              <img src={assets.start} class="card-img" alt="..." />
            </div>
          </div>
          <p class="card-title">احترافية عالية</p>
        </div>
      </div>
      <div class="card bg-transparent col-lg-3 col-md-5 col-12 border-0">
        <div class="card-body">
          <div className="border-icon">
            <div className="img-card">
              <img src={assets.profile} class="card-img" alt="..." />
            </div>
          </div>
          <p class="card-title">شفافية كاملة</p>
        </div>
      </div>
      <div class="card bg-transparent col-lg-3 col-md-5 col-12 border-0">
        <div class="card-body">
          <div className="border-icon">
            <div className="img-card">
              <img src={assets.max} class="card-img" alt="..." />
            </div>
          </div>
          <p class="card-title">تعاون عالمي</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default DreamfyFeatures;
