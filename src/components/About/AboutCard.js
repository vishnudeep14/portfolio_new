import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishnudeep M R </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently employed as an IT developer at Hewlett Packard Enterprises (HPE)
            <br />
            I'm a B.Tech Computer Science Engineer Graduate from PES UNIVERSITY Bangalore
            <br />
            <br />
           
          </p>
          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
