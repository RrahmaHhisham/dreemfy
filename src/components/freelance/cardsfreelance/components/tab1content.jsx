import React from "react";
import "../styles/styles.css";
import assets from "../../../../assets/assets";
import { Link } from "react-router-dom";
function Tab1Content({ onToggleFavorite, favorites }) {
  const cardsData = [
    {
      id: 1,
      title: "تصميم تطبيق توصيل الطعام",
      description:
        'وجبتك الآن" هو تطبيق مبتكر لتوصيل الطعام يقدم تجربة سلسة وسريعة لتلبية احتياجاتك اليومية. يتميز التطبيق بتصميم أنيق وسهل الاستخدام، مع خيارات متعددة تناسب جميع الأذواق، من المطاعم المحلية إلى السلاسل العالمية.',
      skills: ["html", "css", "js", "Seo", "php", "python"],
      time: "منذ 2 ساعة",
    },
    {
      id: 2,
      title: "موقع لمتابعة المهام اليومية",
      description:
        "تطبيق ويب يساعد على تنظيم المهام بشكل مرن وقابل للتخصيص مع تذكيرات وتنبيهات ذكية.",
      skills: ["React", "Node.js", "MongoDB"],
      time: "منذ 4 ساعات",
    },
    {
      id: 3,
      title: "تطبيق للتمارين المنزلية",
      description:
        "تطبيق يقدم خطط تمارين مخصصة للمستخدمين وفقًا لأهدافهم ومستواهم البدني.",
      skills: ["Flutter", "Firebase", "UX"],
      time: "منذ 1 يوم",
    },
    {
      id: 4,
      title: "نظام إدارة مكتبة إلكترونية",
      description: "نظام متكامل لإدارة الكتب والإعارات وتسجيل بيانات الأعضاء.",
      skills: ["Laravel", "MySQL", "Bootstrap"],
      time: "منذ 3 أيام",
    },
    {
      id: 5,
      title: "منصة تعليمية للأطفال",
      description:
        "تطبيق تعليمي تفاعلي مخصص للأطفال يشمل ألعاب وأسئلة تعليمية في جو ممتع.",
      skills: ["Unity", "C#", "UI Design"],
      time: "منذ أسبوع",
    },
  ];

  const isFavorite = (cardId) => {
    return favorites.some((fav) => fav.id === cardId);
  };

  return (
    <div className="tab1-content">
      {cardsData.map((card) => (
        <div key={card.id} className="card mb-3">
          <div className="card-body">
            <div className="header-card d-flex justify-content-between">
              <div className="right-card">
                <p className="time">{card.time}</p>
                {/* <Link to={`/freelance/DetailsCardsbb`} className="card-title">{card.title}</Link> */}
                <Link
                  to={`/freelance/DetailsCards`}
                  className="card-title"
                  onClick={() =>
                    localStorage.setItem("selectedCard", JSON.stringify(card))
                  }
                >
                  {card.title}
                </Link>
              </div>
              <div
                className="left-card"
                onClick={() => onToggleFavorite(card)}
                style={{ cursor: "pointer" }}
              >
                {isFavorite(card.id) ? (
                  <img
                    src={assets.heartfav}
                    alt="Favorite"
                    style={{ width: "24px", height: "24px" }}
                  />
                ) : (
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
                )}
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
      ))}
    </div>
  );
}

export default Tab1Content;

// export default Tab1Content;
