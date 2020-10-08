import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../utils/CardComponent";
import "./GridComponent.css";

const GridComponent = (props) => {
  const cardData = props.cardData.cards;

  return (
    <Container className="gridContainer">
      <Row className="gridRow">
        {cardData.map((card) => (
          <Col xs={6} md={4} key={card.id}>
            <CardComponent cardData={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridComponent;
