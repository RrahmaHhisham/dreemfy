import React from "react";
import HeroContact from "../components/contactsec/herocontact/herocontact";
import ContactCards from "../components/contactsec/cardscontact/contactcards";
import Form from "../components/contactsec/form/form";
function Contact() {
  return (
    <div>
      <HeroContact />
      <ContactCards />
      <Form />
    </div>
  );
}

export default Contact;
