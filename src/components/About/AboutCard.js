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
            from <span className="purple">Noida, India</span>.
            <br />
            Result-driven **Associate Data Scientist** with 2+ years of experience in designing, building, and deploying end-to-end Machine Learning and Deep Learning solutions. Passionate about feature engineering, predictive modeling, and transforming raw data into actionable business outcomes. {" "}
            {/* <span className="purple">Data Science & Analytics.</span> */}
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
