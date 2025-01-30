import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="bleu">Soungalo Salam Dembele </span>
            from <span className="bleu"> Bamako, Mali.</span>
            <br />
            I am currently Work as Freelancer 
            <br />
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "upgrade, yes upgrade the the whole truth "{" "}
          </p>
          <footer className="blockquote-footer">Soungalo</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
