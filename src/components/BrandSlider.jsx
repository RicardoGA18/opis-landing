import React from "react";
import Slider from "react-slick";
import clsx from 'clsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(className, "arrow")}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className="relative w-[23px] h-[23px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px] hover:scale-110 transition-all duration-300 translate-x-[2px] lg:translate-x-[8px]">
        <img
          className="absolute w-full h-full top-0 left-0"
          src="/img/arrow-right.png"
          alt="Flecha a la derecha"
        />
      </div>
      <style jsx scoped>{/*css*/`
        .arrow::before {
          content: "" !important;
          display: none !important;
        }
        .arrow {
          width: 27px;
          height: 60px;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={clsx(className, "arrow")}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className="relative w-[23px] h-[23px] md:w-[28px] md:h-[28px] lg:w-[36px] lg:h-[36px] hover:scale-110 transition-all duration-300 translate-x-[2px] lg:translate-x-[-8px]">
        <img
          className="absolute w-full h-full top-0 left-0"
          src="/img/arrow-left.png"
          alt="Flecha a la izquierda"
        />
      </div>
      <style jsx scoped>{/*css*/`
        .arrow::before {
          content: "" !important;
          display: none !important;
        }
        .arrow {
          width: 27px;
          height: 60px;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

const BrandSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipe: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      <div className="w-full">
        <div className="w-full max-w-[79px] mx-auto h-[44px] md:max-w-[100px] md:h-[55.5px] lg:max-w-[135px] lg:h-[75px] relative">
          <img src="/img/opis-list.png" alt="Opis" className="absolute top-0 left-0 w-full h-full" />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-[79px] mx-auto h-[44px] md:max-w-[100px] md:h-[55.5px] lg:max-w-[135px] lg:h-[75px] relative">
          <img src="/img/procreative-list.png" alt="Procreative" className="absolute top-0 left-0 w-full h-full" />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-[79px] mx-auto h-[44px] md:max-w-[100px] md:h-[55.5px] lg:max-w-[135px] lg:h-[75px] relative">
          <img src="/img/opis-list.png" alt="Opis" className="absolute top-0 left-0 w-full h-full" />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-[79px] mx-auto h-[44px] md:max-w-[100px] md:h-[55.5px] lg:max-w-[135px] lg:h-[75px] relative">
          <img src="/img/criptopos-list.png" alt="Criptopos" className="absolute top-0 left-0 w-full h-full" />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full max-w-[79px] mx-auto h-[44px] md:max-w-[100px] md:h-[55.5px] lg:max-w-[135px] lg:h-[75px] relative">
          <img src="/img/metablock-list.png" alt="Metablock" className="absolute top-0 left-0 w-full h-full" />
        </div>
      </div>
    </Slider>
  )
}

export default BrandSlider