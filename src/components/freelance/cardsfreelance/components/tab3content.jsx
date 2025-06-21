// import "../styles/styles.css";
// function Tab3Content({ favorites = [], onToggleFavorite }) {
//   return (
//     <div className="tab3-content">
//       {favorites.length === 0 ? (
//         <p>لا توجد عناصر في المفضلة</p>
//       ) : (
//         favorites.map((card) =>
//           card && card.skills ? (
//             <div key={card.id} className="card my-2">
//               <div className="card-body">
//                 <div className="header-card d-flex justify-content-between">
//                   <div className="right-card">
//                     <p className="time">{card.time}</p>
//                     <p className="card-title">{card.title}</p>
//                   </div>
//                 </div>
//                 <p className="card-text col-md-8 col-12">{card.description}</p>

//                 <div className="skills-person d-flex flex-wrap gap-2 mt-2">
//                   {card.skills.map((skill, index) => (
//                     <div key={index}>
//                       <p className="m-0 p-0">{skill}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="rate d-flex justify-content-start align-items-center mt-3 gap-3">
//                   <p>الفرق المتقدمة</p>
//                   <p>اقل من 5</p>
//                 </div>
//               </div>
//             </div>
//           ) : null
//         )
//       )}
//     </div>
//   );
// }

// export default Tab3Content;











import "../styles/styles.css";
import assets from "../../../../assets/assets"; // ← تأكدي من المسار

function Tab3Content({ favorites = [], onToggleFavorite }) {
  return (
    <div className="tab3-content">
      {favorites.length === 0 ? (
        <p>لا توجد عناصر في المفضلة</p>
      ) : (
        favorites.map((card) =>
          card && card.skills ? (
            <div key={card.id} className="card my-2">
              <div className="card-body">
                <div className="header-card d-flex justify-content-between">
                  <div className="right-card">
                    <p className="time">{card.time}</p>
                    <p className="card-title">{card.title}</p>
                  </div>

                  <div
                    className="left-card"
                    onClick={() => onToggleFavorite(card)}
                    style={{ cursor: "pointer" }}
                    title="إزالة من المفضلة"
                  >
                    <img
                      src={assets.heartfav}
                      alt="Favorite"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </div>
                </div>

                <p className="card-text col-md-8 col-12">{card.description}</p>

                <div className="skills-person d-flex flex-wrap gap-2 mt-2">
                  {card.skills.map((skill, index) => (
                    <div key={index}>
                      <p className="m-0 p-0">{skill}</p>
                    </div>
                  ))}
                </div>

                <div className="rate d-flex justify-content-start align-items-center mt-3 gap-3">
                  <p>الفرق المتقدمة</p>
                  <p>اقل من 5</p>
                </div>
              </div>
            </div>
          ) : null
        )
      )}
    </div>
  );
}

export default Tab3Content;
