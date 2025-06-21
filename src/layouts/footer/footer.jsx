import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    // <!-- Footer -->
    <footer class="text-center text-lg-start text-muted">
     

      {/* <!-- Section: Links  --> */}
      <section class="">
        <div class="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div class="row mt-3">
            {/* <!-- Grid column --> */}
            <div class="col-md-3 mt-0 col-lg-4 col-xl-3 mx-auto mb-4 d-flex align-items-end flex-column text-end">
              <p class="text-uppercase fw-bold mb-4 text-end w-100">DREAMFY</p>
              <p>
                Dreamfy هي منصة مبتكرة تهدف إلى مساعدة أصحاب الأفكار التقنية في
                تحويل أفكارهم إلى مشاريع ناجحة دون أي تكاليف مسبقة. تربط المنصة
                بين أصحاب الأفكار الإبداعية وفرق التطوير، مع ضمان التعاون الشفاف
                وتوزيع الأرباح العادل. Dreamfy هي بيئتك المثالية لتحويل الإبداع
                إلى واقع.
              </p>
            </div>

            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">الروابط</h6>
              <p>
                <Link to="/" class="text-reset">
                  الرئيسية
                </Link>
              </p>
              <p>
                <Link to="#!" class="text-reset">
                  خدماتنا
                </Link>
              </p>
              <p>
                <Link to="/aboutUs" class="text-reset">
                  عن الشركة
                </Link>
              </p>
              <p>
                <Link to="#!" class="text-reset">
                  المشاريع
                </Link>
              </p>
              <p>
                <Link to="/contact" class="text-reset">
                  تواصل معنا
                </Link>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">الدعم</h6>
              <p>
                <a href="#!" class="text-reset">
                  الأسئلة الشائعة
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  سياسة الاستخدام
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  الخصوصية
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Help
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}
            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">تابعنا</h6>
              <p>
                <a href="#!" class="text-reset">
                  لينكد ان 
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  تويتر
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  انستجرام
                </a>
              </p>
             
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div
        class="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
      >
        Copyright ©:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
           2025 by Dreamfy. All rights reserved
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
}

export default Footer;
