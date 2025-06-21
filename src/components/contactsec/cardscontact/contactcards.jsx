import React from "react";
import "./contact.css";
function ContactCards() {
  return (
    <div className="contact-cards row p-0 m-0">
      <div className="cards- col-md-11 col-11 my-5">
        <div class="card col-md-3 col-12">
          <div class="card-body">
            <p class="card-title">البريد الالكتروني</p>
            <p class="card-text">dreamfy@mail.com</p>
          </div>
        </div>
        <div class="card col-md-3 col-12">
          <div class="card-body">
            <p class="card-title">الهاتف</p>
            <p class="card-text">123456</p>
          </div>
        </div>
        <div class="card col-md-3 col-12">
          <div class="card-body">
            <p class="card-title">وسائل التواصل</p>
            <p class="card-text">dreamfy@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
