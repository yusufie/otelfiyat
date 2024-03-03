
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Header = () => {

  return (
    <header className='flex flex-wrap md:flex-nowrap items-center justify-between w-full py-4 px-8 text-xl  fixed top-0 text-white z-50'>
      <div className='flex items-center w-full md:2/3'>
        <Link href='/' className='font-black'>
          HotelFiyat
        </Link>
        <ul className='flex items-center ml-5'>
          <li className='flex items-center'>
              <Link href='/'>
                <FaUserCircle className='cursor-pointer' />
              </Link>
          </li>
          <li className='ml-2'>
            <MdOutlineLightMode className='cursor-pointer' />
          </li>
        </ul>
      </div>

      <ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/rooms'>Rooms</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/about'>About</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;