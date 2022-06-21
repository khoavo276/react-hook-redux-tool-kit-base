import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import placeHodel from "../../assets/images/item-holder.svg";
import DefaultLayout from "layouts/DefaultLayout";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Row xs={1} md={3} xl={4} className="g-4">
          {Array.from({ length: 16 }).map((_, idx) => (
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
      </DefaultLayout>
    </>
  );
};

export default Home;
