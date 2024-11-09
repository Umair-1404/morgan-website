import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from './Contact.module.css';  

function Contact() {
  return (
    <>
      <section className={styles.bannerImg}>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center pt-5 mt-5">CONTACT US</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.contactPart}>
        <Container>
          <Row>
            <Col lg="6">
              <h2>Get in Touch</h2>
              <br />
              <Form.Control type="text" placeholder="Your Name" />
              <br />
              <Form.Control type="email" placeholder="Your Email Address" />
              <br />
              <Form.Control type="tel" placeholder="Your Mobile Number" />
              <br />
              <Form.Control type="text" placeholder="Your City" />
              <br />
              <Form.Group className="mb-3">
                <Form.Control as="textarea" placeholder="Your Message" rows={3} />
              </Form.Group>
              <p>
                Verify you're a human - Please enter the following code in the
                box below- 7102
              </p>
              <Form.Control type="text" />
              <br />
              <Button variant="outline-warning btn-lg">Send Message</Button>
            </Col>
            <Col lg="6">
              <h2>Our Address</h2>
              <i className="fa-solid fa-mobile px-3 py-4 pt-5"></i>
              <span>2130 Fulton Street, San Diego, CA 94117-1080 USA</span>
              <br />
              <i className="fa-solid fa-phone px-3 py-4"></i>
              <span>1-800-1234-567</span>
              <br />
              <i className="fa-solid fa-envelope px-3 py-4"></i>
              <span>info@demolink.org</span>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
