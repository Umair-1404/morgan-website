import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import styles from './About.module.css';  
import home from "../assets/home.jpg";
import MyPaintings from "../components/Mypainting";

function About() {
  return (
    <>
      <section className={styles.bannerImg}>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center pt-5 mt-5">ABOUT</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.aboutPart}>
        <Container>
          <Row>
            <Col lg="6" className="mt-5">
              <h2>A Few Words About Me</h2>
              <p className="text-secondary pt-5">
                My name is Samantha Morgan, and I have been a fine artist since
                my youth. I find inspiration from the innovative styles of
                contemporary and urban art, such as graphic and graffiti
                illustrations. I strongly believe that art is a global form of
                communication. It educates visually by either moving you,
                pleasing you, or even inspiring you.
              </p>
              <br />
              <Button variant="outline-warning btn-lg">Learn More</Button>
            </Col>
            <Col lg="6" className="pt-5">
              <img src={home} />
            </Col>
          </Row>
        </Container>
      </section>

      <MyPaintings />
    </>
  );
}

export default About;
