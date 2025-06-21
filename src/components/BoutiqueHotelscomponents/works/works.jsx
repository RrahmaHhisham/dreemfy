// import React from "react";
// import "./works.css";

// function Works({ data }) {
//   return (
//     <div className="works p-4">
//       <p className="text-center mb-4">{data.title}</p>
//       <p className="text-center mb-4">{data.paragraph}</p>

//       <div className="flex-wrap flex-row d-flex justify-content-center align-items-center gap-3">
//         {Array.isArray(data.steps) && data.steps.map((step, index) => (
//           <div key={index} className="card col-md-2 col-12">
//             <div className="card-body d-flex flex-column align-items-center">
//               <div className="point my-3">
//                 <p className="card-title p-0 m-0">{String(index + 1).padStart(2, '0')}</p>
//               </div>
//               <p className="card-subtitle mb-2">{step}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Works;













import React, { useState } from "react";
import "./works.css";

function Works({ data }) {
  const [activeIndex, setActiveIndex] = useState(0); // أول كارد هو النشط

  return (
    <div className="works p-4">
      <p className="text-center mb-4">{data.title}</p>
      <p className="text-center mb-4">{data.paragraph}</p>

      <div className="flex-wrap flex-row d-flex justify-content-center align-items-center gap-3">
        {Array.isArray(data.steps) && data.steps.map((step, index) => (
          <div
            key={index}
            className={`card col-md-2 col-12 ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            style={{ cursor: "pointer" }}
          >
            <div className="card-body d-flex flex-column align-items-center">
              <div className="point my-3">
                <p className="card-title p-0 m-0">{String(index + 1).padStart(2, '0')}</p>
              </div>
              <p className="card-subtitle mb-2">{step}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
