'use client'
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import logo from '../../public/assets/logo/logo.png'
import {Navbar,Container,Nav} from 'react-bootstrap'
import style from '../../styles/Header.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link'
const Header = () => {
  const[nav,setNav]=useState();
  const changeValueOnScroll=()=>{
    const scrollValue=document?.documentElement?.scrollTop;
    scrollValue>100?setNav(true):setNav(false)
  }
  useEffect(() => {
    // Check if window is defined before adding the event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeValueOnScroll);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', changeValueOnScroll);
      };
    }
  }, []); //
  return (
    <header>
 <Navbar expand="lg" className={`${style.navbar} ${nav?style.sticky:''}`}>
        <Container>
          <Navbar.Brand href="#home">
           <Image alt="logo" className={`img-fluid ${style.logo}`} src={logo}></Image>
          </Navbar.Brand>
          <Navbar.Toggle className={style.navbartoggler} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link  className={style.navlink} href ="/">Home</Nav.Link>
            <Nav.Link  className={style.navlink} href="/about">About</Nav.Link>
            <Nav.Link  className={style.navlink} href="/menu">Menu</Nav.Link>
            <Nav.Link  className={style.navlink} href="/shop">Shop</Nav.Link>
            <Nav.Link  className={style.navlink} href="/blog">Blog</Nav.Link>
            <Nav.Link   className={style.navlink} href="/contact">Contact</Nav.Link>
            <Nav.Link  className={style.navlink} >
            <div className={style.cart}>
            <i className="bi bi-bag-check fs-5"></i>
            <em className={style.roundpoint}>2</em>
            
            </div>
            </Nav.Link>
          

          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </header>
  )
}

export default Header
