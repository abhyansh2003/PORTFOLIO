import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Abhyansh.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Data Science enthusiast who loves turning raw data into meaningful
              insights and building solutions that solve real-world problems. Over time,
              I’ve explored various analytical and machine learning techniques and found
              my passion in extracting value from data.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, SQL, Data Analysis, Data Science{" "}
                </b>
              </i>
              — and I enjoy working with data pipelines, visualization tools, analytical workflows.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, Exploratory Data Analysis,{" "}
                </b>
              </i>
              and building end-to-end data-driven applications.
              <br />
              <br />
              Whenever possible, I love creating insightful dashboards and applications using
              <b className="purple"> Python </b> and modern frameworks like{" "}
              <i>
                <b className="purple">Pandas</b>,{" "}
                <b className="purple">NumPy</b>,{" "}
                <b className="purple">Matplotlib</b>, and{" "}
                <b className="purple">Streamlit</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
