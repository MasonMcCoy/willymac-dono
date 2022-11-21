import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import jet from '../images/private_jet_final.png'
import yacht from '../images/yacht_final.png'
import ski from '../images/jet_ski_final.png'

export default function ImageCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className='d-block w-100 caro-background'
          src={jet}
          alt='First slide'
        />
        <Carousel.Caption>
          <h1 className='caro-text'>First Slide</h1>
          <p className='caro-text'>First Caption</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className='d-block w-100 caro-background'
          src={yacht}
          alt='Second slide'
        />
        <Carousel.Caption>
          <h1 className='caro-text'>Second Slide</h1>
          <p className='caro-text'>Second Caption</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className='d-block w-100 caro-background'
          src={ski}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3 className='caro-text'>Third Slide</h3>
          <p className='caro-text'>Third Caption</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}