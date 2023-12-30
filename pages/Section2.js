import React from "react";
import Link from "next/link";
import Image from "next/image";
import Pizza from "../public/assets/about/pizza.png";
import Salad from "../public/assets/about/salad.png";
import Delivery from "../public/assets/about/delivery-bike.png";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/Section2.module.css";
const Section2 = () => {
  const mockData = [
    {
      image: Pizza,
      title: "Original",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Salad,
      title: "Qualty Foods",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    // Add more mock data objects as needed
  ];

  return (
    <>
      <section className={style.aboutSection}>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>
                {" "}
                The burger tastes better when you eat it with your family
              </h2>
              <p>
                Porta semper lacus cursus, feugiat primis ultrice a ligula risus
                auctor an tempus feugiat dolor lacinia cubilia curae integer
                orci congue and metus integer primis in integer metus
              </p>
              <Link href="/" className="btn order_now btn_red">
                Explore full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={style.aboutWrapper}>
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col key={index} md={6} lg={4} className="mb-4 mb-md-0">
                <div className={`${style.about_box} text-center`}>
                  <div className={style.aboutIcon}>
                    <Image
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
