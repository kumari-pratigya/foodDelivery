import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../styles/Section3.module.css";
import { Col, Card } from "react-bootstrap";
const Cards = ({
  image,
  renderRatingIcons,
  rating,
  title,
  paragraph,
  price,
}) => {
  console.log(image, "Image");
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className={`overflow-hidden ${style.card}`}>
        <div className="overflow-hidden">
          <Card.Img className={style.cardImage} variant="top" src={image.src} />
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <div className={style.itemRating}>
                {renderRatingIcons(rating)}
              </div>
              <div className={style.wishList}>
                <i className="bi bi-heart"></i>
              </div>
            </div>
            <Card.Title className={style.cardTitle}>{title}</Card.Title>
            <Card.Text className={style.cardText}>{paragraph}</Card.Text>
            <div className="d-flex align-items-center justify-content-between">
              <div className={style.menuPrice}>
                <h5 className={`mb-0 ${style.price}`}>Rs. {price}</h5>
              </div>
              <div className={style.addtoCard}>
                <Link href="/">
                  <i className="bi bi-bag me-2"></i>
                  Add to card{" "}
                </Link>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default Cards;
