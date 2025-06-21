import React, { useState, useEffect } from "react";
import Tab1Content from "./components/tab1content";
import Tab3Content from "./components/tab3content";
import "./styles/styles.css"

function CardsFreelance() {
  const [activeTab, setActiveTab] = useState("tab1");
  // const [favorites, setFavorites] = useState([]);
const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
});

  const toggleFavorite = (card) => {
    const exists = favorites.find((fav) => fav.id === card.id);
    if (exists) {
      // إزالة من المفضلة
      setFavorites(favorites.filter((fav) => fav.id !== card.id));
    } else {
      // إضافة للمفضلة
      setFavorites([...favorites, card]);
    }
  };
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);






  return (
    <div className="container">
      <p className="section-title">المشاريع المقترحة</p>

      <ul className="nav nav-tabs mb-3 p-0">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => setActiveTab("tab1")}
          >
            واجهات الاستخدام
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => setActiveTab("tab2")}
          >
            الاخيره
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => setActiveTab("tab3")}
          >
            المفضلة
          </button>
        </li>
      </ul>

      <div className="tab-content border-0 rounded p-3 bg-transparent">
        {activeTab === "tab1" && (
          <Tab1Content
            onToggleFavorite={toggleFavorite}
            favorites={favorites}
          />
        )}
        {activeTab === "tab2" && <p style={{ color: "white" }}>محتوى تبويب  </p>}
        {activeTab === "tab3" && (
  <Tab3Content
    favorites={favorites}
    onToggleFavorite={toggleFavorite}
  />
)}
      </div>
    </div>
  );
}

export default CardsFreelance;
