import React from "react";
import Image from "next/image";
import style from "../styles/Section.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../public/assets/hero/hero-2.png";
import Link from "next/link";
const Section = () => {
  return (
    <section className={style.hero_section}>
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <Image src={Burger} className="img-fluid" alt="hero" />
              <div className={style.price_badge}>
                <div className={style.badge_text}>
                  <h4 className={style.h4_xs}>Only</h4>
                  <h4 className={style.h3_lg}>$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={`${style.hero_text} text-center`}>
              <h1 className="text-white">New Burgers</h1>
              <h2 className="text-white">with Onion</h2>
              <p className="text-white pt-2 pb-4">
                it is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here
              </p>
              <Link href="/" className="btn order_now">
                Order now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section;
