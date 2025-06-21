import React from "react";
import HeroFreelance from "../../components/freelance/herofreelance/herofreelance";
import CardsFreelance from "../../components/freelance/cardsfreelance/cardsfreelance";
import Footer from "../../layouts/footer/footer";
function MainPage() {
  return (
    <div>
      <HeroFreelance />
      <CardsFreelance />
      <Footer />
    </div>
  );
}

export default MainPage;
