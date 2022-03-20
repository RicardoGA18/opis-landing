import React from 'react'

const Header = () => {
  return (
    <header className="w-full px-4 md:px-6">
      <div className="w-full max-w-[1200px] mx-auto pt-[50px] md:pt-[100px] lg:pt-[180px]">
        <div className="mb-[380px]">
          <h1 className="font-primary text-white font-extrabold text-[24px] xs:text-[30px] md:text-[36px] lg:text-[48px] mb-[30px] md:mb-[26px] lg:mb-[21px]">
            Simple y poderoso,<br />
            como  la Web3.
          </h1>
          <p className="font-primary text-white font-bold text-[15px] md:text-[18px] lg:text-[24px] mb-[35px] md:mb-[42px] lg:mb-[49px]">
            <span className="font-black">OPIS</span> es un monedero todo en uno.<br />
            Accede a beneficios, oportunidades e información de valor.
          </p>
          <div className="flex justify-start items-center mt-[55px] space-x-[14px] md:space-x-[25px] lg:space-x-[41px]">
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
        <div className="flex flex-col justify-center items-center pb-[50px] md:pb-[30px] lg:pb-[15px]">
          <h2 className="font-primary text-white font-extrabold text-[24px] xs:text-[30px] md:text-[36px] lg:text-[48px] mb-[30px] lg:mb-[26px] md:mb-[28px] text-center">
            Ecosistema OPIS
          </h2>
          <p className="font-primary text-white font-bold text-[13px] xs:text-[15px] md:text-[18px] lg:text-[24px] mb-[15px] lg:mb-[25px] md:mb-[20px] text-center">
            Descubre una nueva manera de vivir,<br />
            generar impacto y potenciar el desarrollo comunitario.
          </p>
          <img
            src="/img/illustration-ecosystem.png"
            alt="Ilustración OPIS"
            className="w-full max-w-[414px] md:max-w-[600px] lg:max-w-[800px]"
          />
        </div>
      </div>
    </header>
  )
}

export default Header