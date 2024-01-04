import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
export default function NavBarMobile() {
  return (
    <div className='block sm:hidden'>
      <div className='px-1 py-2 flex justify-between items-center'>
        <div className='bg-[#00000073] w-7 h-7 flex justify-center items-center rounded-full'>
          <FaAngleLeft className='text-white' />
        </div>
        <div className='bg-[#00000073] flex items-center pl-2 py-1 rounded-2xl gap-1'>
          <CiSearch className='text-white font-bold h-[14px] w-[14px]' />
          <input
            className='bg-transparent placeholder:text-white placeholder:text-[9px] focus:border-none focus:outline-none mb-[3px]'
            type='text'
            placeholder='Search Product'
          />
        </div>

        <div className='flex justify-center items-center gap-2'>
          <div className='bg-[#00000073] w-7 h-7 flex justify-center items-center rounded-full'>
            <CiShoppingCart className='text-white' />
          </div>
          <div className='bg-[#00000073] w-7 h-7 flex justify-center items-center rounded-full'>
            <BsThreeDotsVertical className='text-white' />
          </div>
        </div>
      </div>
    </div>
  );
}
