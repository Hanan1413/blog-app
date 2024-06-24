import React from "react";
import "./Contact.css";
import Nav from "../../components/NavBar/Nav";

function Contact() {
  return (
    <div>
      <Nav />
    <div className="contact-page">
    <h1 className="contact-header">This is how you can reach me </h1>
      <h3 className="city">Saudi Arabia, Riyadh</h3>
      <h2 className="contact-info">Email: ihanan977@gmail.com</h2>
      <h2 className="contact-info">Cellphone: 0569382756</h2>
    </div>
      
    </div>
  );
}

export default Contact;
