import React, { useState } from "react";
import "./asks.css";
import assets from "../../../assets/assets";

function Asks() {
  const [activeIndex, setActiveIndex] = useState(0); // العنصر الأول مفتوح افتراضياً

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const PlusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const MinusIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const accordionItems = [
    {
      id: "collapseOne",
      question: "ما هي منصة Dreamfy؟",
      answer:
        "منصة Dreamfy هي منصة رقمية تهدف إلى ربط أصحاب الأفكار الإبداعية بفرق تطوير من مختلف أنحاء العالم لتنفيذ المشاريع بشكل تعاوني ودون تكاليف مسبقة.",
    },
    {
      id: "collapseTwo",
      question: "كيف يمكنني التسجيل في منصة Dreamfy؟",
      answer:
        "<strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
    {
      id: "collapseThree",
      question: "هل يجب علي دفع أي تكاليف مسبقة لاستخدام المنصة؟",
      answer:
        "<strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
    {
      id: "collapseFour",
      question: "كيف يتم توزيع الأرباح بعد نجاح المشروع؟",
      answer:
        "<strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
  ];
  return (
    <div className="commenask row m-0 p-0">
      <div className="card text-cente col-md-11 col-11 d-flex flex-row align-items-center justify-content-center flex-wrap p-0">
        <div className="card-header col-md-6">
          <p className="card-title">الأسئلة الشائعة</p>
          <p className="card-text d-flex justify-content-center">
            كوكالة رائدة في التطوير الرقمي، نحن ملتزمون بتوفير موارد تعليمية
            شاملة والإجابة على الأسئلة الشائعة لمساعدة عملائنا.
          </p>
          <button className="btn">
            لديك استفسار
            <img
              src={assets.arrowright}
              alt="سهم"
              style={{ marginRight: "8px" }}
            />
          </button>
        </div>
        <div className="card-body col-md-6">
          <div
            className="accordion"
            style={{ border: "none" }}
            id="accordionExample"
          >
            {accordionItems.map((item, index) => (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex === index ? "" : "collapsed"
                    } d-flex justify-content-between align-items-center`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={item.id}
                  >
                    {item.question}
                    <span className="ms-2">
                      {activeIndex === index ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                </h2>
                <div
                  id={item.id}
                  className={`accordion-collapse collapse ${
                    activeIndex === index ? "show" : ""
                  }`}
                  style={{
                    transition: "height 0.3s ease, opacity 0.3s ease",
                  }}
                  aria-labelledby={`heading${index + 1}`}
                >
                  <div
                    className="accordion-body"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Asks;
