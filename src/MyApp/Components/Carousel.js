import React from 'react'
import { Carousel } from 'react-bootstrap'
import { CarouselItem } from 'react-bootstrap'
import SliderImage1 from '../Assests/Images/Image1.png'
import '../Assests/CSS/Carousel.css'
const Carousell = () => {
    const width = "100px !important"
  return (
    <div>
      <Carousel>
  <CarouselItem>
    <img
      className="d-block w-100"
      src={SliderImage1}
      alt="First slide"
      width = {width}
    />
    <div calssName='CarouselCaption'>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100"
      src={SliderImage1}
      alt="Second slide"
      width = {width}
    />

<div calssName='CarouselCaption'>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100"
      src={SliderImage1}
      alt="Third slide"
      width = {width}
    />

<div calssName='CarouselCaption'>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </CarouselItem>
</Carousel>
    </div>
  )
}

export default Carousell
