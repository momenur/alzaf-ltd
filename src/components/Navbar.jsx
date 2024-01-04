import { IoIosArrowDown } from "react-icons/io";
import NavbarBottom from "./NavbarBottom";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className='hidden md:block'>
      <div className='md:flex justify-between text-xs text-[#434343] p-2 hidden'>
        <ul className='flex gap-6'>
          <li className='flex items-center'>
            Language <IoIosArrowDown />{" "}
          </li>
          <li>Help Center</li>
          <li>Helpline: 0964781656</li>
        </ul>
        <ul className='flex gap-6'>
          <li>Become a Seller</li>
          <li>Order Track</li>
          <li className='text-[#F97316]'>Sign up / Login</li>
        </ul>
      </div>

      <div className='bg-[#FFFFFF] flex justify-between items-center py-3 '>
        <img
          className='w-[129px] h-[37.88px] hidden lg:block'
          src={"./assets/images/alzafLogo.png"}
          alt=''
        />
        <form className='relative w-full gap-[1px] lg:flex'>
          <input
            className='lg:w-[704px] w-4/5  h-[44px] bg-[#EFF0F5] px-4 lg:mx-0 mx-auto'
            type='text'
            placeholder='Search Product'
          />
          <button className='bg-[#F97316] w-[47px] h-[44px] lg:flex justify-center items-center text-white text-lg font-bold rounded-md'>
            <CiSearch />
          </button>
        </form>
        <div className='hidden gap-4 text-lg lg:flex'>
          <span className='bg-[#F5F5F5] p-2 rounded-md text-black'>
            <CiUser />
          </span>
          <span className='bg-[#F5F5F5] p-2 rounded-md text-black'>
            <CiHeart />
          </span>
          <span className='bg-[#F5F5F5] p-2 rounded-md text-black'>
            <CiShoppingCart />
          </span>
        </div>
        <img
          className='w-[177px] h-[54px] hidden lg:block'
          src={"/assets/images/cloud_service.png"}
          alt=''
        />
      </div>

      <NavbarBottom />
    </div>
  );
};

export default Navbar;
