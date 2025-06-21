import React, { useState, useEffect } from "react";
import "./styles.css";
import Footer from "../../../layouts/footer/footer";
import assets from "../../../assets/assets";
function DetailsCards() {
  const [card, setCard] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedCard = localStorage.getItem("selectedCard");
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (storedCard) {
      const parsedCard = JSON.parse(storedCard);
      setCard(parsedCard);

      // ✅ تحقق إن الكارد موجود بالمفضلة
      const exists = storedFavorites.some((fav) => fav.id === parsedCard.id);
      setIsFavorite(exists);
    }
  }, []);

  const handleAddToFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = storedFavorites.some((fav) => fav.id === card.id);

    if (exists) {
      // إزالة الكارد
      const updatedFavorites = storedFavorites.filter(
        (fav) => fav.id !== card.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // إضافة الكارد
      const updatedFavorites = [...storedFavorites, card];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  if (!card) return <p>جارٍ تحميل البيانات...</p>;

  return (
    <>
      <div className="details-cards row m-0 p-0">
        <div class="card col-11 my-5">
          <div class="card-body col-md-10 col-lg-8 col-xl-9 col-12">
            <p className="card-title">{card.title}</p>
            <p className="time">{card.time}</p>
            <p className="card-text">{card.description}</p>
            <hr></hr>
            <div>
              <p>المهارات المطلوبة:</p>
              <div className="skills-person d-flex flex-wrap gap-2 mt-2">
                {card.skills.map((skill, index) => (
                  <div key={index}>
                    <p className="m-0 p-0">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 goals">
              <p className="m-0 p-0">أهداف المشروع</p>
              <ol className="p-3">
                <li className="head-point">
                   هذا مثال علي النص الموجود
                  <ul>
                    <li>
                      تمكين العملاء من طلب الطعام بسهولة عبر واجهة مستخدم بسيطة
                      ومريحة.
                    </li>
                  </ul>
                </li>
                <li>
                   توفير خدمات تخصيص الطلبات:
                  <ul>
                    <li>
                      تمكين العملاء من تعديل طلباتهم بما يناسب احتياجاتهم
                      الغذائية أو تفضيلاتهم.
                    </li>
                  </ul>
                </li>
                <li>
                   هذا مثال علي النص الموجود
                  <ul>
                    <li>
                      تمكين العملاء من طلب الطعام بسهولة عبر واجهة مستخدم بسيطة
                      ومريحة.
                    </li>
                  </ul>
                </li>
                <li>
                   توفير خدمات تخصيص الطلبات:
                  <ul>
                    <li>
                      تمكين العملاء من تعديل طلباتهم بما يناسب احتياجاتهم
                      الغذائية أو تفضيلاتهم.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div className="card card-add-fav col-md-5 col-lg-4 col-xl-3 col-12">
            <div class="card-body col-12">
              <button className="apply col-md-12 col-12">قدم الان</button>
              <button
                className="save col-md-12 col-12"
                onClick={handleAddToFavorites}
              >
                {isFavorite ? "تمت الإضافة" : "حفظ للمفضلة"}
                {isFavorite ? (
                  <img
                    src={assets.heartfav}
                    alt="Favorite"
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "8px",
                    }}
                  />
                ) : (
                  <img
                    src={assets.heart}
                    alt="Not Favorite"
                    style={{
                      width: "25px",
                      height: "25px",
                      marginRight: "8px",
                    }}
                  />
                )}
              </button>

              <div className="rate d-flex justify-content-start align-items-center mt-3 gap-3">
                <p>الفرق المتقدمة</p>
                <p>اقل من 5</p>
              </div>

              <div className="user">
                <div className="user-img">
                  <img src={assets.User} alt="user" />
                </div>
                <div className="user-stars d-flex gap-1">
                  <p className="m-0 p-0">محمد أحمد</p>
                  <div>
                    <img src={assets.Star} alt="star" />
                    <img src={assets.Star} alt="star" />
                    <img src={assets.Star} alt="star" />
                    <img src={assets.LineStar} alt="line-star" />
                    <img src={assets.LineStar} alt="line-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailsCards;
