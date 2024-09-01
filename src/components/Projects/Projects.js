import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/1.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/1.jpg";
import suicide from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Research paper:Integrating Deep Learning Techniques for Cyclone Prediction and its Impact on AQI Utilizing Satellite Imagery"
              description=""
              ghLink= "https://github.com/vishnudeep14/Satellite-Based-Tropical-Cyclone-Intensity-Prediction-and-it-s-Effect-on-AQI"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Simulation of Physics particles with Graph Networks"
              description=""
              ghLink="https://github.com/vishnudeep14/Simulation-Physics-particles-GNN"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Modelling Klein Gordon Equation using PINN(Physics informed nueral network)"
              description=""
              ghLink="https://github.com/vishnudeep14/PINN_KG"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Research paper:YOLOv8 for Accurate Skin Lesion Segmentation"
              description=""
              ghLink="https://ieeexplore.ieee.org/document/10425934"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Talk to Doc (LLMs,OpenAI,Langchain)"
              description=""
              ghLink="https://github.com/vishnudeep14/TalkToDoc"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Consumer Sentiment Analysis"
              description=""
              ghLink="https://github.com/vishnudeep14/consumer_sentiment"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
