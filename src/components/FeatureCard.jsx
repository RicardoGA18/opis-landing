import React from 'react'

const FeatureCard = ({ src, alt, title, features=[] }) => {
  return (
    <div className={`card px-[20px] py-[36px] md:px-[25px] md:py-[40px] lg:py-[45px] lg:px-[30px] rounded-[36px] bg-transparent border-[rgba(0,0,0,.3)] border w-full`}>
      <div className="flex justify-start mb-[14px] md:mb-[17px] lg:mb-[21px]">
        <div className="icon w-[58px] h-[58px] lg:w-[72px] lg:h-[72px] md:w-[65px] md:h-[65px] flex justify-center items-center bg-[#D8EBFF] rounded-[50%]">
          <div className="w-[44px] h-[44px] lg:w-[57px] lg:h-[57px] md:w-[52px] md:h-[52px] relative">
            <img
              className="w-full h-full absolute top-0 left-0"
              src={src}
              alt={alt}
            />
          </div>
        </div>
      </div>
      <span className="text block font-primary text-[#182449] font-black text-[15px] md:text-[18px] lg:text-[26px] max-w-[140px] md:max-w-[160px] lg:max-w-[100%]">
        {title}
      </span>
      <ul className="mt-[15px] md:mt-[10px] lg:mt-[10px]">
        {features.map((feature, idx) => (
          <li key={idx} className="text font-primary text-[#182449] text-[13px] lg:text-[15px] font-medium">{feature}</li>
        ))}
      </ul>
      <style jsx scoped>{/*css*/`
        .text-shadow {
          text-shadow: #38A0C5 2px 3px 8px;
        }
        .card {
          transition: .3s all;
          overflow: hidden;
          position: relative;
        }
        .card::before {
          position: absolute;
          content: "";
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-image: linear-gradient(
            to bottom,
            rgba(37,64,187,1),
            rgba(37,64,187,.85)
          );
          z-index: -1;
          transition: opacity 0.3s linear;
          opacity: 0;
        }
        .card:hover {
          border-color: rgba(48,74,191,0.3);
        }
        .card:hover::before {
          opacity: 1;
        }
        .card .text {
          transition: .3s all;
        }
        .card:hover .text {
          color: #FFFFFF;
        }
        .card .icon {
          transition: .3s all;
        }
        .card:hover .icon {
          background-color: #FFFFFF;
        }
      `}</style>
    </div>
  )
}

export default FeatureCard
