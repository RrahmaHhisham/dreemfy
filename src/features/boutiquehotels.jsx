import React from "react";
import HeroBH from "../components/BoutiqueHotelscomponents/hero/heroBH";
import Solves from "../components/BoutiqueHotelscomponents/solves/solves";
import Fintech from "../components/BoutiqueHotelscomponents/fintech/fintech";
import Works from "../components/BoutiqueHotelscomponents/works/works";
import Asks from "../components/homesec/asks/asks";

import pageContent from "../components/data/pageContent"; // أو المسار الصحيح لمكان الملف

function BoutiqueHotels() {
  const content = pageContent.boutiquehotels;
  return (
    <div>
      {/* <HeroBH />
    <Solves />
    <Fintech />
    <Works /> */}
      <HeroBH data={content.hero} />
      <Solves data={content.solves} />
      <Fintech data={content.fintech} />
      <Works data={content.works} />
      <Asks />
    </div>
  );
}

export default BoutiqueHotels;
