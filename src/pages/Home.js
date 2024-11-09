import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import styles from './Home.module.css';  
import hero from '../assets/brand-inverse.png';
import home from "../assets/home.jpg";
import MyPaintings from "../components/Mypainting.js";

function Home() {
  return (
    <>
      <section className={styles.heroPart}>
        <Container>
          <Row>
            <Col lg="12">
              <img src={hero} />
            </Col>
          </Row>
        </Container>
      </section>

      <section >
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
              <img src={home} className={styles.aboutImg} />
            </Col>
          </Row>
        </Container>
      </section>
      <MyPaintings />
      <section className={`${styles.servicePart} mt-5 text-center`}>
      <Container>
          <Row>
            <Col xs={12}>
              <h2>Services</h2>
              <p>
                If you are looking for custom paintings that will decorate your
                home or office, consider booking one or several of my services
                listed below. They will add more colors and emotions to
                your daily life.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="3" className="border p-5 text-center" id={styles.serviceBorder}>
              <i className="fa-solid fa-user fa-3x mb-3"></i>
              <h4>Portrait</h4>
            </Col>
            <Col lg="3" className="border p-5 text-center" id={styles.serviceBorder}>
              <i className="fa-solid fa-leaf fa-3x mb-3"></i>
              <h4>Landscape</h4>
            </Col>
            <Col lg="3" className="border p-5 text-center" id={styles.serviceBorder}>
              <i className="fa-brands fa-apple fa-3x mb-3"></i>
              <h4>Still Life</h4>
            </Col>
            <Col lg="3" className="border p-5 text-center" id={styles.serviceBorder}>
              <i className="fa-solid fa-house fa-3x mb-3"></i>
              <h4>Urban</h4>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} className="text-center mb-5">
              <Button variant="outline-warning btn-lg" className={styles.btn}>
                View All Services
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
