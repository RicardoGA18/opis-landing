import React from 'react'

const SectionDemo = () => {
  return (
    <>
      <div>
        <img
          src="/svg/rounded-features.svg"
          className="w-full h-[7px] md:h-[45px] lg:h-[80px]"
        />
      </div>
      <section className="w-full px-4 md:px-6 bg-white">
        <div className="w-full max-w-[1200px] mx-auto pt-[60px] md:pt-[70px] lg:pt-[90px] pb-[75px] md:pb-[120px] lg:pb-[165px]">
          <div className="grid grid-cols-1 gap-[50px] md:gap-[40px] lg:gap-[57px] md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_444px]">
            <div className="flex flex-col justify-center items-center md:items-start">
              <span className="text-center md:text-left font-primary text-[#182449] font-bold text-[24px] xs:text-[30px] md:text-[36px] lg:text-[48px]">
                Busca y disfruta
              </span>
              <span className="text-center md:text-left font-primary text-[#D1D3DB] line-through font-bold text-[24px] xs:text-[30px] md:text-[36px] lg:text-[48px]">
                Soluciones
              </span>
              <span className="text-center md:text-left font-primary text-[#D1D3DB] line-through font-bold text-[24px] xs:text-[30px] md:text-[36px] lg:text-[48px]">
                Oportunidades
              </span>
              <span className="text-center md:text-left font-primary text-[#182449] font-bold text-[24px] xs:text-[30px] md:text-[36px] lg:text-[48px]">
                Blockchain y Web3
              </span>
              <p className="font-primary text-[#576580] lg:max-w-[588px] text-center md:text-left font-light text-[15px] lg:text-[24px] md:text-[18px] mt-[20px] lg:mt-[6px] md:mt-[12px]">
                Administra tus activos desde un <span className="text-[#182449] font-bold">único balance.</span> Accede a <span className="text-[#182449] font-bold">información de valor</span> y potencia tu calidad de vida.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/img/illustration-features.png"
                alt="Ilustración Opis"
                className="w-full max-w-[314px] md:max-w-[320px] lg:max-w-[444px]"
              />
              <div className="flex justify-center items-center mt-[15px] space-x-[14px] md:space-x-[20px]">
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
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionDemo