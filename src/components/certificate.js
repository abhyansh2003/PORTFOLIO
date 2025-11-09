import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
import ProjectCard from "./Projects/ProjectCards";

// import Particle from "../Particle";

// import decisionTreeImg from "../../Assets/Projects/decision-tree-design.jpg";

// import bitsOfCode from "../../Assets/Projects/blog.png";
// import weatherImg from "../../Assets/Projects/weatherImg.jpg"
// import CustomerSeg from "../../Assets/Projects/CustomerSegmentation.png"
// import SuperstoreImg from "../../Assets/Projects/Superstore.png"
// import OlympicsImg from "../../Assets/Projects/Olympics.jpg"
// import Hospital from "../../Assets/Projects/HospitalImg.png"

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* ✅ Certificate 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Data Science Program (Apr 2025 - Present)"
              description="Topics covered: Data Analysis, Python, NumPy, Pandas, MS Excel, Machine Learning, SQL, Exploratory Data Analysis (EDA), Deep Learning, NLP, Statistics, and Generative AI."
              ghLink="#"
            />
          </Col>

          {/* ✅ Certificate 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Mastering MySQL: Database Creation, Management & SQL Queries"
              description="Hands-on experience with SQL queries, database creation, relational schema design, filtering, data retrieval, and full database management using MySQL."
              ghLink="https://www.udemy.com/certificate/UC-40562d44-8cf3-4770-940a-677ea69955a3/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Internshala Training in Data Science"
              description="Learned Python for Data Science, Statistics for DS, Predictive Modeling, Data Analysis, and Basics of Machine Learning."
              ghLink="https://drive.google.com/file/d/18L9bLzW_N59-dCZQxFZdgdJ-enqglV0t/view?usp=sharing/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
