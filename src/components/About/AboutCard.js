import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Abhyansh Shrivastava</span>{" "}
            from <span className="purple">Orai, India</span>.
            <br />
            I’m currently looking for a Job opportunity in {" "}
            <span className="purple">Data Science & Analytics.</span>
            <br />I hold an B.Tech in{" "}
            <span className="purple">Computer Science & Engineering</span> from{" "}
            <span className="purple">Jaypee University of Engineering & Technology, Guna</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminoton 🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing 🎤
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhyansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
