import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"; 
import Button from "react-bootstrap/Button";
import styles from './Services.module.css';  
import MyPaintings from "../components/Mypainting";
function Services() {
  return (
    <>
      <section className={styles.bannerImg}>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center pt-5 mt-5">SERVICES</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <MyPaintings />  {/* Display custom paintings */}

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

export default Services;
