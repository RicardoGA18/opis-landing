import React, { useState } from 'react'

const FAQ = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const manageChange = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className="border-b border-primary border-dashed">
      <div className="w-full grid grid-cols-[1fr_20px] lg:grid-cols-[1fr_24px] gap-[15px] items-center py-[29px] md:py-[25px]">
        <span className="block font-primary text-white font-semibold text-[17px] md:text-[20px] lg:text-[24px]">
          {question}
        </span>
        <div className="relative w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer">
          <input
            className="menu absolute top-0 left-0 w-full h-full z-20 opacity-0 cursor-pointer"
            type="checkbox"
            value={open}
            onChange={manageChange}
          />
          <img
            src="/svg/plus.svg"
            alt="Ícono Más | MetaBlock"
            className="plus absolute top-0 left-0 w-full h-full transition-all duration-300"
          />
          <img
            src="/svg/minus.svg"
            alt="Ícono Menos | MetaBlock"
            className="minus absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-300"
          />
        </div>
      </div>
      <div className={`${open ? "pb-[29px] md:pb-[25px]" : "pb-0"} ${open ? "max-h-[400px]" : "max-h-0"} transition-all duration-300 overflow-hidden`}>
        <p className="text-white font-primary font-light text-[13px] md:text-[16px] lg:text-[20px]">
          {answer}
        </p>
      </div>
      <style jsx scoped>{/*css*/`
        .menu:checked ~ .plus {
          opacity: 0;
          transform: rotate(180deg);
        }
        .menu:checked ~ .minus {
          opacity: 1;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  )
}

export default FAQ
