import Image from "next/image";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../public/assets/promotion/pro.png";
import style from "../styles/Section4.module.css";
const Section4 = () => {
  return (
    <>
      <section className={style.promotionSection}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className={`text-center mb-5 mb-lg-0`}>
              <Image
                src={PromotionImage}
                alt="promotion"
                className={` img-fluid ${style.imgFluid}`}
              ></Image>
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Semper lacus cursus porta primis ligula risus tempus and
                sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida
              </p>
              <ul>
                <li>
                  <p>
                    Fringilla risus, luctus mauris orci auctor purus euismod
                    pretium purus pretium ligula rutrum tempor sapien
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Quaerat sodales sapien euismod purus blandit</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>
                    Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                    sodales sapien undo pretium a purus mauris
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={style.gbParalletScroll}></section>
    </>
  );
};

export default Section4;
