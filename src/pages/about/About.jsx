import React from "react";
import  "./About.css"
import Nav from "../../components/NavBar/Nav";


function About() {
  return (
    <div>
      <Nav />
      <div className="container">
      <h1 className="headline"> About Dream Big</h1>
      <p className="summery">
        Whether you're a tech enthusiast, a professional in the field, or
        someone looking to stay updated on the techology world ,Dream Big
        Blog is your one-resource for all  techoloy articles. Join me on this exciting
        journey as we unravel the complexities of the tech universe and make
        sense of the digital revolution. Stay connected, stay informed, and stay
        inspired with Dream Big Blog Blog .
      </p>
      </div>
    </div>
  );
}

export default About;
