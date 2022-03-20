import React from 'react'
import BrandSlider from './BrandSlider'

const SectionCommunity = () => {
  return (
    <>
      <div className="bg-background-2 lg:hidden">
        <div className="relative w-full h-[79px]">
          <img
            className="w-full h-full absolute top-0 left-0"
            src="/svg/rounded-top-com.svg"
            alt="SVG de fondo | OPIS"
          />
        </div>
      </div>
      <section className="w-full lg:bg-white">
        <div className="w-full px-4 md:px-6 lg:pt-[147px] lg:pb-[170px]">
          <div className="relative w-full pt-[35px] pb-[70px] lg:pt-[31px] lg:pb-[50px] lg:rounded-[35px] px-[8px] max-w-[1185px] mx-auto lg:bg-background">
            <div className="absolute w-[68px] h-[68px] lg:w-[76px] lg:h-[76px] top-[80px] left-[-10px] lg:top-[69px] lg:left-[38px]">
              <img
                className="w-full h-full absolute top-0 left-0 opacity-[0.28] lg:opacity-[0.75]"
                src="/img/com-1.png"
              />
            </div>
            <div className="absolute w-[68px] h-[68px] lg:w-[76px] lg:h-[76px] bottom-[90px] left-[20px] lg:bottom-[186px] lg:left-[106px]">
              <img
                className="w-full h-full absolute top-0 left-0 opacity-[0.23] lg:opacity-[0.7]"
                src="/img/com-2.png"
              />
            </div>
            <div className="absolute hidden lg:block w-[68px] h-[68px] lg:w-[76px] lg:h-[76px] bottom-[62px] left-[42px]">
              <img
                className="w-full h-full absolute top-0 left-0 opacity-[0.5]"
                src="/img/com-3.png"
              />
            </div>
            <div className="absolute w-[68px] h-[68px] lg:w-[76px] lg:h-[76px] top-[10px] right-[-10px] lg:top-[69px] lg:right-[42px]">
              <img
                className="w-full h-full absolute top-0 left-0 opacity-[0.30] lg:opacity-[0.6]"
                src="/img/com-4.png"
              />
            </div>
            <div className="absolute w-[68px] h-[68px] lg:w-[76px] lg:h-[76px] bottom-[0px] right-[-10px] lg:bottom-[186px] lg:right-[142px]">
              <img
                className="w-full h-full absolute top-0 left-0 opacity-[0.23] lg:opacity-[0.7]"
                src="/img/com-5.png"
              />
            </div>
            <div className="absolute hidden lg:block w-[68px] h-[68px] lg:w-[76px] lg:h-[76px] bottom-[62px] right-[46px]">
              <img
                className="w-full h-full absolute top-0 left-0 opacity-[0.3]"
                src="/img/com-6.png"
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-primary text-primary font-extrabold text-center text-[24px] xs:text-[30px] md:text-[36px] lg:text-[48px]">
                Únete a la comunidad<br />
                <span className="font-black text-white">OPIS</span>
              </h3>
              <p className="mt-[40px] xs:mt-[60px] md:mt-[40px] lg:mt-[35.5px] font-primary text-[#B5B3C4] text-center text-[15px] max-w-[600px] mx-auto">
                Descentralización y democratización del acceso a información de valor, productos responsables y servicios de calidad.
              </p>
              <div className="w-full mt-[58px] h-[50px] lg:h-[62px] md:h-[55px] border border-white rounded-[12px] grid grid-cols-[1fr_117px] lg:grid-cols-[1fr_137px] md:grid-cols-[1fr_127px] overflow-hidden max-w-[433px] mx-auto">
                <input
                  placeholder="Ingrese su correo"
                  type="text"
                  className="w-full h-full bg-[transparent] border-r border-r-white px-[26px] text-[14px] md:text-[16px] outline-none text-white"
                />
                <button className="w-full h-full bg-[#182D8B] text-[14px] md:text-[16px] text-white font-semibold cursor-pointer">
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-background-2 lg:hidden">
        <div className="relative w-full h-[79px]">
          <img
            className="w-full h-full absolute top-0 left-0"
            src="/svg/rounded-bottom-com.svg"
            alt="SVG de fondo | OPIS"
          />
        </div>
      </div>
      <section className="w-full px-4 md:px-6 bg-background-2 lg:bg-white py-[37px] lg:pt-[0px] lg:pb-[120px]">
        <div className="w-[calc(100%_-_50px)] max-w-[1100px] mx-auto">
          <BrandSlider />
        </div>
      </section>
      <div className="bg-background-2 lg:bg-white">
        <div className="relative w-full h-[79px] lg:h-[280px]">
          <img
            className="w-full h-full absolute top-0 left-0"
            src="/svg/rounded-top-com.svg"
            alt="SVG de fondo | OPIS"
          />
        </div>
      </div>
    </>
  )
}

export default SectionCommunity