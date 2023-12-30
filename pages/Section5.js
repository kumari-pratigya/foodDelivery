import Image from "next/image";
import React from "react";
import Link from "next/link";
import style from "../styles/Section4.module.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import storeIOs from "../public/assets/shop/appstore.png";
import storeGoogle from "../public/assets/shop/googleplay.png";
import DownloadImage from "../public/assets/shop/e-shop.png";
import Brand1 from "../public/assets/brands/brand-11.png";
import Brand2 from "../public/assets/brands/brand-12.png";
import Brand3 from "../public/assets/brands/brand-13.png";
import Brand4 from "../public/assets/brands/brand-14.png";
import Brand5 from "../public/assets/brands/brand-15.png";
import Brand6 from "../public/assets/brands/brand-16.png";
import Brand7 from "../public/assets/brands/brand-17.png";
import Brand8 from "../public/assets/brands/brand-18.png";

const Section5 = () => {
  return (
    <>
      <section className={style.shop_Section}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
              </p>
              <Link href="/">
                <Image
                  src={storeIOs}
                  alt="IOS"
                  className={`img-fluid me-3 ${style.store}`}
                ></Image>
              </Link>
              <Link href="/">
                <Image
                  src={storeGoogle}
                  alt="android"
                  className={`img-fluid me-3 ${style.store}`}
                ></Image>
              </Link>
            </Col>
            <Col lg={6}>
              <Image src={DownloadImage} alt="e-shop" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={style.brandSection}>
        <Container>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <Carousel.Caption>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className={style.brandImage}>
                        <Image
                          src={Brand1}
                          className="img-fluid"
                          alt="brand1"
                        />
                      </div>
                      <div className={style.brandImage}>
                        <Image
                          src={Brand2}
                          className="img-fluid"
                          alt="brand2"
                        />
                      </div>
                      <div className={style.brandImage}>
                        <Image
                          src={Brand3}
                          className="img-fluid"
                          alt="brand3"
                        />
                      </div>
                      <div className={style.brandImage}>
                        <Image
                          src={Brand4}
                          className="img-fluid"
                          alt="brand4"
                        />
                      </div>
                      <div className={style.brandImage}>
                        <Image
                          src={Brand5}
                          className="img-fluid"
                          alt="brand5"
                        />
                      </div>
                      <div className={style.brandImage}>
                        <Image
                          src={Brand6}
                          className="img-fluid"
                          alt="brand6"
                        />
                      </div>
                      <div className={style.brandImage}>
                        <Image
                          src={Brand7}
                          className="img-fluid"
                          alt="brand7"
                        />
                      </div>
                      <div className={style.brandImage}>
                        <Image
                          src={Brand8}
                          className="img-fluid"
                          alt="brand8"
                        />
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section5;
