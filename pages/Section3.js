import React from "react";
import style from "../styles/Section3.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../public/assets/menu/burger-11.jpg";
import Image2 from "../public/assets/menu/burger-12.jpg";
import Image3 from "../public/assets/menu/burger-13.jpg";
import Image4 from "../public/assets/menu/burger-14.jpg";
import Image5 from "../public/assets/menu/burger-15.jpg";
import Image6 from "../public/assets/menu/burger-16.jpg";
import Image7 from "../public/assets/menu/burger-17.jpg";
import Image8 from "../public/assets/menu/burger-18.jpg";
import Card from "../Components/Card";
import Link from "next/link";

const Section3 = () => {
  const renderRatingIcons = (rating) => {
    const stars = [];

    for (let j = 0; j < 5; j++) {
      if (rating > 0.5) {
        stars.push(<i key={j} className="bi bi-star-fill"></i>);
        rating--;
      } else if (rating > 0 && rating < 1) {
        stars.push(<i key={"half"} className="bi bi-star-half"></i>);
        rating--;
      } else {
        stars.push(<i key={`empty${j}`} className="bi bi-star"></i>);
      }
    }
    return stars;
  };
  // Mock Data Cards
  const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Crispy Chicken",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
      rating: 5,
      price: 99.15,
    },
    {
      id: "0002",
      image: Image2,
      title: "Ultimate Bacon",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 4.5,
      price: 99.32,
    },
    {
      id: "0003",
      image: Image3,
      title: "Black Sheep",
      paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
      rating: 4,
      price: 69.15,
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Burger",
      paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
      rating: 3.5,
      price: 99.25,
    },
    {
      id: "0005",
      image: Image5,
      title: "Double Burger",
      paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
      rating: 3.0,
      price: 59.25,
    },
    {
      id: "0006",
      image: Image6,
      title: "Turkey Burger",
      paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 3,
      price: 79.18,
    },
    {
      id: "0007",
      image: Image7,
      title: "Smokey House",
      paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
      rating: 2.5,
      price: 99.19,
    },
    {
      id: "0008",
      image: Image8,
      title: "Classic Burger",
      paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
      rating: 2.0,
      price: 89.12,
    },
    // Add more mock data objects as needed
  ];
  return (
    <>
      <section className={style.menuSection}>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>Our Crazy Burgers</h2>
              <p className={style.para}>
                Loreum ipsum doloar dgd dfdf dffsd cvfcvd fdfdgv
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((item, index) => (
              <Card
                key={index}
                image={item.image}
                rating={item.rating}
                title={item.title}
                paragraph={item.paragraph}
                renderRatingIcons={renderRatingIcons}
                price={item.price}
              />
            ))}
          </Row>
          <Row className="pt-5">
            <Col sm={6} lg={5}>
              <div className={`${style.ads_img2} mb-5 mb-md-0`}>
                <h4 className="mb-0">Get your Free</h4>
                <h5>Cheese Fries</h5>
                <Link href="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col sm={6} lg={7}>
              <div className={`${style.ads_img1} mb-5 mb-md-0`}>
                <h4 className="mb-0">Get your Free</h4>
                <h5>Cheese Fries</h5>
                <Link href="/" className="btn btn_red px-4 rounded-0">
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section3;
