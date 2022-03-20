import React, {useState} from 'react'
import Slider from "react-slick"
import FeatureCard from './FeatureCard'
import clsx from 'clsx'

const SectionFeatures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    swipe: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    appendDots: dots => (
      <ul className="dotsList" style={{ marginTop: "0px", transform: "translateY(10px)" }}>
        {dots}
      </ul>
    ),
    customPaging: (i) => (
      <div className={clsx(
        "w-[10px] h-[10px] border rounded-full transition-all duration-300",
        currentSlide === i ? "bg-background border-background" : "border-background"
      )}></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          swipe: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          swipe: true,
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          swipe: true,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ]
  }

  return (
    <section className="w-full px-4 md:px-6 bg-background-2" id="impacto">
      <div className="w-full max-w-[1200px] mx-auto pt-[92px] lg:pt-[118px] md:pt-[105px] pb-[80px] md:pb-[100px] lg:pb-[113px]">
        <h2 className="font-primary text-[#182449] text-[24px] max-w-[360px] mx-auto xs:text-[30px] text-center font-extrabold md:text-[36px] md:max-w-[500px] lg:max-w-[850px] lg:text-[48px] mb-[94px] md:mb-[115px] lg:mb-[137px]">
          Características<br /><span className="text-primary">billetera Web3</span>
        </h2>
        <div className="w-full mb-[80px] md:mb-[90px] lg:mb-[120px]">
          <Slider {...settings}>
            <div className="px-[10px]">
              <FeatureCard
                src="/img/wallet.png"
                alt="Ícono Web3"
                title="Monedero todo en uno"
                features={[
                  "Finanzas",
                  "Marketplace", 
                  "Criptomonedas",
                  "Interoperabilidad"
                ]}
              />
            </div>
            <div className="px-[10px]">
              <FeatureCard
                src="/img/telegram.png"
                alt="Ícono Telegram"
                title="Intercambio de activos"
                features={[
                  "Bitcoin",
                  "Ethereum",
                  "Stablecoin",
                  "NFT´s y más"
                ]}
              />
            </div>
            <div className="px-[10px]">
              <FeatureCard
                src="/img/blockchain.png"
                alt="Ícono Blockchain"
                title="Soluciones y oportunidades"
                features={[
                  "DeFi",
                  "Desafios",
                  "Metaverso",
                  "Comunidad"
                ]}
              />
            </div>
            <div className="px-[10px]">
              <FeatureCard
                src="/img/heart.png"
                alt="Ícono Corazón"
                title="Módulos de bienestar"
                features={[
                  "Salud",
                  "Trabajo",
                  "Educación",
                  "Sustentabilidad y más."
                ]}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default SectionFeatures