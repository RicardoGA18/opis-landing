import React, { useEffect } from 'react';
import $ from 'jquery'

const MainLayout = ({ children }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleScroll = () => {
        const distance = $(window).scrollTop();
        if (distance > 100) {
          $('#navbar').addClass('bg-background')
        } else {
          $('#navbar').removeClass('bg-background')
        }
      }

      $(window).on("scroll", handleScroll);
      handleScroll();
    }
  }, [])

  return (
    <>
      <nav id="navbar" className="fixed top-0 left-0 w-full transition-all duration-300 px-4 h-[70px] md:h-[80px] lg:h-[100px] md:px-6 z-50">
        <div className="w-full max-w-[1200px] mx-auto h-full flex justify-between items-center">
          <div className="relative w-[39px] h-[28px] lg:w-[83px] lg:h-[60px] md:w-[60px] md:h-[43px]">
            <img
              className="absolute w-full h-full top-0 left-0"
              src="/img/logo.png"
              alt="Logo OPIS"
            />
          </div>
          <div className="md:flex items-center space-x-[40px] lg:space-x-[50px]">
            <div className="w-[21px] h-[21px] relative md:hidden">
              <input
                type="checkbox"
                className="absolute top-0 left-0 w-full h-full z-20 opacity-0 menu"
              />
              <img
                className="absolute w-full h-full top-0 left-0 bars transition-all duration-300"
                src="/svg/bars.svg"
                alt="Menú de navegación"
              />
              <img
                className="absolute top-0 left-0 w-full h-full opacity-0 close transition-all duration-300"
                src="/svg/close.svg"
                alt="Ícono cerrar menú"
              />
              <div className="mob-nav fixed w-[235px] h-[100vh] bg-background top-[70px] right-[-235px] px-[35px] py-[30px] transition-all duration-300">
                <ul className="grid grid-cols-1 gap-[30px]">
                  <li className="font-primary text-white text-[16px]">
                    Inicio
                  </li>
                  <li className="font-primary text-white text-[16px]">
                    Contacto
                  </li>
                  <li className="font-primary text-white text-[16px]">
                    Blog
                  </li>
                </ul>
                <ul className="flex justify-center space-x-[5px] items-center mt-[50px]">
                  <img
                    src="/img/facebook.png"
                    alt="Facebook"
                  />
                  <img
                    src="/img/twitter.png"
                    alt="Twitter"
                  />
                  <img
                    src="/img/linkedin.png"
                    alt="LinkedIn"
                  />
                </ul>
              </div>
            </div>
            <ul className="hidden md:flex space-x-[30px] lg:space-x-[50px]">
              <li className="text-white font-bold font-primary text-[20px] lg:text-[25px] hover:text-primary transition-all duration-300 cursor-pointer">
                Inicio
              </li>
              <li className="text-white font-bold font-primary text-[20px] lg:text-[25px] hover:text-primary transition-all duration-300 cursor-pointer">
                Contacto
              </li>
              <li className="text-white font-bold font-primary text-[20px] lg:text-[25px] hover:text-primary transition-all duration-300 cursor-pointer">
                Blog
              </li>
            </ul>
            <ul className="hidden md:flex lg:space-x-[5px]">
              <img
                className="cursor-pointer"
                src="/img/facebook.png"
                alt="Facebook"
              />
              <img
                className="cursor-pointer"
                src="/img/twitter.png"
                alt="Twitter"
              />
              <img
                className="cursor-pointer"
                src="/img/linkedin.png"
                alt="LinkedIn"
              />
            </ul>
          </div>
        </div>
      </nav>
      <main className="w-full pt-[70px] md:pt-[80px] lg:pt-[100px] overflow-visible relative z-10">
        {children}
      </main>
      <footer className="w-full px-4 md:px-6 relative z-0">
        <div className="w-full max-w-[1200px] mx-auto pt-[120px]">
          <div className="flex flex-col items-center justify-center pb-[65px]">
            <img
              src="/img/logo-white.png"
              alt="Logo Opis"
              className="w-[93px] block md:w-[160px] lg:w-[237px] mb-[18px] md:mb-[24px] lg:mb-[30px]"
            />
            <span className="block font-primary text-white text-[13px] md:text-[16px] font-bold mb-[15px] md:mb-[19px] lg:mb-[24px] underline">
              hola@dreambox.lat
            </span>
            <span className="block font-primary text-white font-regular text-[13px] md:text-[16px] mb-[15px] md:mb-[19px] lg:mb-[24px]">
              +569 84787937
            </span>
            <span className="block font-primary text-white font-extrabold text-[13px] md:text-[18px] lg:text-[20px] mb-[22px] md:mb-[35px] lg:mb-[45px]">
              America Latina y el Caribe
            </span>
            <div className="flex space-x-[20px] lg:space-x-[40px]">
              <img
                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-contain lg:w-[70px] lg:h-[70px]"
                src="/img/linkedin.png"
                alt="LinkedIn"
              />
              <img
                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-contain lg:w-[70px] lg:h-[70px]"
                src="/img/linkedin.png"
                alt="LinkedIn"
              />
              <img
                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-contain lg:w-[70px] lg:h-[70px]"
                src="/img/twitter.png"
                alt="Twitter"
              />
              <img
                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-contain lg:w-[70px] lg:h-[70px]"
                src="/img/facebook.png"
                alt="Facebook"
              />
              <img
                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] object-contain lg:w-[70px] lg:h-[70px]"
                src="/img/facebook.png"
                alt="Facebook"
              />
            </div>
            <div className="flex justify-center items-center mt-[55px] space-x-[14px] md:space-x-[25px] lg:space-x-[41px]">
              <button className="h-[30px] md:h-[38px] lg:h-[48px] px-[14px] md:px-[19px] lg:px-[24px] bg-primary font-primary font-semibold text-white rounded-[8px] text-[13px] md:text-[16px] lg:text-[20px] shadow-[0_2px_10px_rgba(255,255,255,.32)] flex items-center">
                <img
                  src="/svg/app-store.svg"
                  alt="App Store"
                  className="block w-[13px] md:w-[16px] lg:w-[20px] mr-[12px]"
                />
                App Store
              </button>
              <button className="h-[30px] md:h-[38px] lg:h-[48px] px-[14px] md:px-[19px] lg:px-[24px] bg-primary font-primary font-semibold text-white rounded-[8px] text-[13px] md:text-[16px] lg:text-[20px] shadow-[0_2px_10px_rgba(255,255,255,.32)] flex items-center">
                <img
                  src="/svg/play-store.svg"
                  alt="Play Store"
                  className="block w-[13px] md:w-[16px] lg:w-[20px] mr-[12px]"
                />
                Play Store
              </button>
            </div>
          </div>
          <div className="w-full py-[22px] border-t border-t-white text-center font-primary text-white text-[13px] md:text-[15px] lg:text-[17px] md:text-left md:flex md:justify-between">
            <span className="block">
              © Copyright 2022 <strong>Opis Wallet</strong> All rights reserved.
            </span>
            <div className="hidden md:flex justify-center items-center">
              <span className="font-semibold mr-[25px] lg:mr-[40px] cursor-pointer">Contact Us</span>
              <span className="font-semibold cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </footer>
      <style jsx scoped>{/*css*/`
        .nav__item:hover span.nav__item__line {
          width: calc(100% - 16px);
        }
        .menu:checked ~ .bars {
          transform: rotate(180deg);
          opacity: 0;
        }
        .menu:checked ~ .close {
          transform: rotate(180deg);
          opacity: 1;
        }
        .menu:checked ~ .mob-nav {
          right: 0;
        }
      `}</style>
    </>
  )
}

export default MainLayout