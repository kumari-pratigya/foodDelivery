import React from "react";
import style from "../styles/Section4.module.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import User1 from "../public/assets/blog/review-author-1.jpg";
import User2 from "../public/assets/blog/review-author-2.jpg";
import User3 from "../public/assets/blog/review-author-3.jpg";
import User4 from "../public/assets/blog/review-author-5.jpg";
import Image from "next/image";
const Section6 = () => {
  return (
    <>
      <section className={style.blogSection}>
        <Container>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <Carousel.Caption>
                    <div className={style.userImg}>
                      <Image src={User1} className="img-fluid" alt="brand1" />
                    </div>
                    <p>
                       Etiam sapien sem at sagittis congue augue massa varius
                      sodales sapien undo tempus dolor egestas magna suscipit
                      magna tempus aliquet porta sodales augue suscipit luctus
                      neque 
                    </p>
                    <div className={`mb-2 ${style.itemRating}`}>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <h5>BY AMELIE NEWLOVE</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <div className={style.userImg}>
                      <Image src={User2} className="img-fluid" alt="brand1" />
                    </div>
                    <p>
                       Etiam sapien sem at sagittis congue augue massa varius
                      sodales sapien undo tempus dolor egestas magna suscipit
                      magna tempus aliquet porta sodales augue suscipit luctus
                      neque 
                    </p>
                    <div className={`mb-2 ${style.itemRating}`}>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <h5>BY AMELIE NEWLOVE</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <div className={style.userImg}>
                      <Image src={User3} className="img-fluid" alt="brand1" />
                    </div>
                    <p>
                       Etiam sapien sem at sagittis congue augue massa varius
                      sodales sapien undo tempus dolor egestas magna suscipit
                      magna tempus aliquet porta sodales augue suscipit luctus
                      neque 
                    </p>
                    <div className={`mb-2 ${style.itemRating}`}>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <h5>BY AMELIE NEWLOVE</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                    <div className={style.userImg}>
                      <Image src={User4} className="img-fluid" alt="brand1" />
                    </div>
                    <p>
                       Etiam sapien sem at sagittis congue augue massa varius
                      sodales sapien undo tempus dolor egestas magna suscipit
                      magna tempus aliquet porta sodales augue suscipit luctus
                      neque 
                    </p>
                    <div className={`mb-2 ${style.itemRating}`}>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <h5>BY AMELIE NEWLOVE</h5>
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

export default Section6;
