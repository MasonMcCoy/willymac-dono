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
          src={yacht}
          alt='Second slide'
        />
        <Carousel.Caption>
          <h1 className='caro-text'>Help me relocate to a safer spot</h1>
          <p className='caro-text'>I am in grave and immediate danger</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className='d-block w-100 caro-background'
          src={ski}
          alt='Third slide'
        />
        <Carousel.Caption>
          <h1 className='caro-text'>On my way to be demonitized!</h1>
          <p className='caro-text'>...or have my channel deleted.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className='d-block w-100 caro-background'
          src={jet}
          alt='First slide'
        />
        <Carousel.Caption>
          <h1 className='caro-text'>Thanks for the donations!</h1>
          <p className='caro-text'>Later, nerds.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}