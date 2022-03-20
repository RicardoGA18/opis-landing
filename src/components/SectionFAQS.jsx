import React from 'react'
import FAQ from './FAQ'

const SectionFAQS = () => {
  return (
    <section className="w-full px-10 relative z-10">
      <div className="absolute w-[165px] h-[165px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] bottom-[-200px] left-[-105px] md:left-[-130px] lg:left-[-160px] lg:bottom-[100px] bg-primary rounded-full flex justify-center items-center">
        <div className="w-[38.57%] h-[38.57%] rounded-full bg-white"></div>
      </div>
      <div className="w-full max-w-[576px] mx-auto pt-[35px] md:pt-[20px] lg:pt-[0px]">
        <h2 id="faqs" className="font-primary text-center font-bold text-[24px] xs:text-[30px] md:text-[36px] lg:text-[48px] text-[white] mb-[70px] md:mb-[80px] lg:mb-[100px] wow animate__animated animate__fadeInLeft">
          FAQ’S
        </h2>
        <div>
          <FAQ
            question="¿Cómo se puede formar parte de Metablock?"
            answer="Cada persona que quiera formar parte de Metablock, primero, deberá adquirir un token, nft y/o metanauta. De esa manera podrá jugar, vender, comprar, invertir y realizar transacciones en Metablock."
          />
          <FAQ
            question="¿Cómo se podrá acceder a Metablock?"
            answer="Los usuarios podrán acceder al Marketplace de Metablock una vez lanzado el mismo, a través de su página web. Y además contarán con una aplicación para ordenadores y telefonos, que tiene fecha de lanzamiento programada para diciembre de 2023."
          />
          <FAQ
            question="¿Qué es un Terreno Virtual?"
            answer="Un Terreno Virtual es un NFT, el primer bien de inversión de Metablock, que les permitirá a sus usuarios establecer sus espacios como tiendas, aulas, auditorios, stand, etc. Dicho eso cabe decir que las ciudades de Metablock, están conformadas por Terrenos Digitales, únicos y limitados."
          />
          <FAQ
            question="¿Qué es un NFT?"
            answer="NFT corresponde a las siglas «non fungible token», traducido, «token no fungible» o «activo no fungible». Se trata de un activo digital único, que es verificable, indivisible, inmodificable e indestructible. Esto lo convierte en objeto de inversión, y en algunos casos, de colección."
          />
          <FAQ
            question="¿Cómo y a través de que medios se pueden comprar los Terrenos Virtuales?"
            answer="Una vez en la plataforma de Metablock, los usuarios podrán acceder a la compra de los espacios virtuales, dentro de la misma. Los medios de compra son únicamente, con el token Metablock."
          />
        </div>
      </div>
      <style jsx scoped>{/*css*/`
        .active {
          box-shadow: 0px 1px 30px rgba(255,255,255,.47);
        }
      `}</style>
    </section>
  )
}

export default SectionFAQS