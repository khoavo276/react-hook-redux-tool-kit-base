import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Row, Col, Card, Button } from "react-bootstrap";
import placeHodel from "../../assets/images/item-holder.svg";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home-body">
        <div className="container pt-5">
          <Row xs={1} md={3} xl={4} className="g-4">
            {Array.from({ length: 18 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src={placeHodel} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
