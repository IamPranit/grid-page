import React from "react";
import { Container } from "react-bootstrap";
import cardImage from "../../images/card-image.jpg";
import "./CardComponent.css";

const styles = {
  card: {
    width: "250px",
    height: "320px",
    textAlign: "justify",
  },
};
const CardComponent = (props) => {
  const { title, date, comments, body } = props.cardData;
  return (
    <Container style={styles.card}>
      <div className="card">
        <img
          src={cardImage}
          className="card-img-top"
          alt="Card"
          style={{ width: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title cardTitle">{title}</h5>
          <h6 class="card-subtitle mb-2 text-muted cardSubtitle">
            {`Date ${date} / Comments ${comments}`}
          </h6>
          <hr />
          <div className="cardActions">
            <p className="card-text">{body}</p>
            <a href="/">
              Read More<sub>-{">"}</sub>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardComponent;
