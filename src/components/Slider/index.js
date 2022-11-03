import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './dataSlider'
import { dataImg } from './dataSlider';
import { AiOutlinePlayCircle } from "react-icons/ai";
import './index.css';
import SliderTrailer from './SliderTrailer';
export default function SliderComponent() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Carousel >
      {dataImg.map((img) => {
        return <Carousel.Item interval={3000} key={img.maPhim}>
          <img
            className="d-block w-100"
            src={img.hinhAnh}
            alt={img.biDanh}
          />
          <div className="icon-play d-none d-sm-block">
            <AiOutlinePlayCircle onClick={() => setModalShow(true)} />
            <SliderTrailer
              show={modalShow}
              onHide={() => setModalShow(false)} />
          </div>
        </Carousel.Item>
      })}

    </Carousel>
  )
}
