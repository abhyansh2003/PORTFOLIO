import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import decisionTreeImg from "../../Assets/Projects/decision-tree-design.jpg";

// import bitsOfCode from "../../Assets/Projects/blog.png";
import weatherImg from "../../Assets/Projects/weatherImg.jpg"
import CustomerSeg from "../../Assets/Projects/CustomerSegmentation.png"
import SuperstoreImg from "../../Assets/Projects/Superstore.png"
import OlympicsImg from "../../Assets/Projects/Olympics.jpg"
import Hospital from "../../Assets/Projects/HospitalImg.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={decisionTreeImg}
              isBlog={false}
              title="Decision Tree Classifier"
              description="Implemented a decision tree classifier entirely from scratch using Python, without ML libraries."
              ghLink="https://github.com/abhyansh2003/DecisionTreesFoundations"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherImg}
              isBlog={false}
              title="Weather Prediction (Logistic Regression)"
              description="Performed EDA with graphs and boxplots, handled outliers and missing values.Applied one-hot encoding, feature engineering and scaling.Logistic Regression achieved 85.36% accuracy (train and test), showing no overfitting."
              demoLink="https://colab.research.google.com/drive/1YOzal8zw04I9z0-5G1ckfVEWzfO8Loj4?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CustomerSeg}
              isBlog={false}
              title="Customer Segmentation & Recommendation System (K-Means Clustering)"
              description="In this project, we delve deep into the thriving sector of online retail by analyzing a transactional dataset from a UK-based retailer, available at the UCI Machine Learning Repository. This dataset documents all transactions between 2010 and 2011."
              ghLink="https://github.com/abhyansh2003"
              demoLink="https://colab.research.google.com/drive/1qXBT8D8MzQGtp34Ayo9CP8QKpZGU86F6?usp=sharing"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SuperstoreImg}
              isBlog={false}
              title="Whatapp Chat Analyzer"
              description="This project is based on Streamlit & you've to just upload .txt file on this web application & you can get full analysis based on your file."
              ghLink="https://github.com/abhyansh2003/EDA-Supermarket-DA"
              demoLink="https://abhyansh2003-wca-app-n0nsen.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SuperstoreImg}
              isBlog={false}
              title="Supermarket Data Analysis (Streamlit-Python)"
              description="This project involves analyzing supermarket data with a data of above 100000+ users with 1000+ products using Python. Download the data from my GitHub and start the analysis."
              ghLink="https://github.com/abhyansh2003/EDA-Supermarket-DA"
              demoLink="https://eda-supermarket-da-ekqhmhbpkqgaueb2y2a4up.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OlympicsImg}
              isBlog={false}
              title="Olympics Data Analysis (Streamlit-Python)"
              description="Analyzed 120 years of Olympics data (1896-2016) for insights on medal tallies, countryspecific performance, and athlete statistics"
              ghLink="https://github.com/abhyansh2003/OLyDA"
              demoLink="https://abhyansh2003-olyda-app-5q45jv.streamlit.app/"
            />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hospital}
              isBlog={false}
              title="Hospital Emergency Room Dashboard (Power BI)"
              description="This project analyzes Emergency Room (ER) hospital data to uncover insights about patient admissions, demographics, and referral patterns. The dataset was cleaned, preprocessed, and modeled in Power BI to create interactive dashboards for decision-making."
              ghLink="https://github.com/abhyansh2003/Hospital-Emergency-Room-Dashboard"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
