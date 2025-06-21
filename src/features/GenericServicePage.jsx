import React from "react";
import HeroBH from "../components/BoutiqueHotelscomponents/hero/heroBH";
import Solves from "../components/BoutiqueHotelscomponents/solves/solves";
import Fintech from "../components/BoutiqueHotelscomponents/fintech/fintech";
import Works from "../components/BoutiqueHotelscomponents/works/works";

function GenericServicePage({ content }) {
  return (
    <div>
      <HeroBH data={content.hero} />
      <Solves data={content.solves} />
      <Fintech data={content.fintech} />
      <Works data={content.works} />
    </div>
  );
}

export default GenericServicePage;
