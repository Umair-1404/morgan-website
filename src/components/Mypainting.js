import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';
import styles from './MyPainting.module.css';   

const MyPaintings = () => {
  return (
    <section className={`${styles['My-painting']} py-5`}>
      <Container>
        <Row>
          <h2 className="text-center mb-5">My Paintings</h2>
        </Row>

        <Row>
          <Col lg="4" className="mb-3">
            <Card className={`${styles['painting-card']}`}>
              <Card.Img variant="top" src={project1} alt="Sea Storm"  className={styles['painting-img']} />
              <Card.Body>
                <Card.Title className={styles['painting-title']}>Sea Storm</Card.Title>
                <Card.Text>
                  This painting is one of my latest works on sea and ocean topics.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="4" className="mb-3">
            <Card className={styles['painting-card']}>
              <Card.Img variant="top" src={project2} alt="Ruins of Ancient Fortress" className={styles['painting-img']} />
              <Card.Body>
                <Card.Title className={styles['painting-title']}>Ruins of Ancient Fortress</Card.Title>
                <Card.Text>
                  When I’ve been to Scotland, I made this painting just in a day.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="4" className="mb-1">
            <Card className={styles['painting-card']}>
              <Card.Img variant="top" src={project3} alt="Two Lovers" className={styles['painting-img']} />
              <Card.Body>
                <Card.Title className={styles['painting-title']}>Two Lovers</Card.Title>
                <Card.Text>
                  This work was finished in two days for my customers from San Diego, CA, who needed something special.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="4" className="mb-4">
            <Card className={styles['painting-card']}>
              <Card.Img variant="top" src={project4} alt="Watercolor Portrait"  className={styles['painting-img']}/>
              <Card.Body>
                <Card.Title className={styles['painting-title']}>Watercolor Portrait</Card.Title>
                <Card.Text>
                  Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="4" className="mb-4">
            <Card className={styles['painting-card']}>
              <Card.Img variant="top" src={project5} alt="Birches in Autumn" className={styles['painting-img']} />
              <Card.Body>
                <Card.Title className={styles['painting-title']}>Birches in Autumn</Card.Title>
                <Card.Text>
                  I love painting autumn trees and this work is a perfect example.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="4" className="mb-4">
            <Card className={styles['painting-card']}>
              <Card.Img variant="top" src={project6} alt="Green Landscape" className={styles['painting-img']} />
              <Card.Body>
                <Card.Title className={styles['painting-title']}>Green Landscape</Card.Title>
                <Card.Text>
                  Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyPaintings;
