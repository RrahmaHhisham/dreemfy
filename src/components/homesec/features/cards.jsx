import React from "react";
import "./cards.css";
import assets from "../../../assets/assets";
function Cards() {
  const cardsData = [
    {
      title: "فنادق بوتيكية",
      text: `نقدم لكم مشروعًا فريدًا يمزج بين عبق التاريخ وفرص الاستثمار المعاصر:
“تحويل المنازل الدمشقية القديمة إلى فنادق بوتيكية راقية"`,
      image: assets.categoreyicon,
    },
    {
      title: "التطبيقات والمنصات الرقمية",
      text: " نساعدك في تحويل أفكارك إلى تطبيقات ومنصات رقمية مبتكرة تتميز بتجربة مستخدم سلسة، أداءٍ عالٍ، وتصميم عصري يواكب أحدث الاتجاهات في السوق، مما يضمن لك التفوق في مجالك",
      image: assets.categoreyicon2,
    },
    {
      title: " الذكاء الاصطناعي و Web3",
      text: "استفد من تقنيات الذكاء الاصطناعي والبلوك تشين (Web3) لإنشاء حلول مستقبلية تعزز من كفاءة عملياتك، توفر لك تحليلات دقيقة، وتفتح لك أبوابًا جديدة في عالم الأعمال الرقمية.",
      image: assets.categoreyicon3,
    },
    {
      title: "التقنيات والخدمات المالية",
      text: "نطوّر لك حلول الدفع الإلكتروني، المحافظ الرقمية، والخدمات المالية التي تجعل المعاملات أسهل وأكثر أمانًا، مع التركيز على تجربة المستخدم وسهولة الوصول إلى خدماتك المالية",
      image: assets.categoreyicon4,
    },
    {
      title: "الألعاب والتجارب التفاعلية",
      text: " سواء كنت ترغب في تطوير لعبة رقمية مشوقة أو تجربة تفاعلية مبتكرة، نحن نوفر لك التقنيات اللازمة لإنشاء بيئات غامرة تدمج بين الإبداع والتكنولوجيا لإبهار جمهورك.",
      image: assets.categoreyicon5,
    },
    {
      title: "المشاريع التقنية والتسويقية ",
      text: " نجمع بين الخبرة التقنية والاستراتيجيات التسويقية لمساعدتك في إطلاق مشاريعك الرقمية بنجاح، من بناء الهوية الرقمية إلى تطوير الحملات التسويقية التي تضمن لك الوصول إلى جمهورك .",
      image: assets.categoreyicon6,
    },
  ];

  return (
    <div className="fetatures-cards row m-0 p-0">
      <div className="cards col-md-10 d-flex flex-wrap gap-3">
        {cardsData.map((card, index) => (
          <div className="card col-md-3" key={index}>
            <div className="card-body">
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: "40px", marginBottom: "10px" }}
                />
              )}
              <h5 className="card-title">{card.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {card.subtitle}
              </h6>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
