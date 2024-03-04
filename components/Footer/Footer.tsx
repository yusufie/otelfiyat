import Image from 'next/image';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { SlLocationPin } from "react-icons/sl";
import { BiMessageDetail } from 'react-icons/bi';

const Footer: React.FC = () => {
  return (
    <footer className='my-8'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <div className='flex items-center'>
              <SlLocationPin />
              <p className='ml-2'>123 Road</p>
            </div>
            <div className='flex items-center py-4'>
              <BsFillSendFill />
              <p className='ml-2'>HotelFiyat</p>
            </div>
            <div className='flex items-center'>
              <BsTelephoneOutbound />
              <p className='ml-2'>999-999-99</p>
            </div>
            <div className='flex items-center pt-4'>
              <BiMessageDetail />
              <p className='ml-2'>HotelFiyat</p>
            </div>

            <div className='flex flex-row items-center pt-4 gap-4'>
              <Image src="/icons/facebook.svg" alt='facebook' width={24} height={24} 
                className='cursor-pointer hover:opacity-90 transition duration-300 ease-in-out'
              />
              <Image src="/icons/twitter.svg" alt='twitter' width={24} height={24} 
                className='cursor-pointer hover:opacity-90 transition duration-300 ease-in-out'
              />
              <Image src="/icons/instagram.svg" alt='instagram' width={24} height={24} 
                className='cursor-pointer hover:opacity-90 transition duration-300 ease-in-out'
              />
              <Image src="/icons/linkedin.svg" alt='linkedin' width={24} height={24} 
                className='cursor-pointer hover:opacity-90 transition duration-300 ease-in-out'
              />
            </div>
            
          </div>

          <div className='flex-1'>
            <p className='pb-4 hover:underline cursor-pointer'>Our Story</p>
            <p className='pb-4 hover:underline cursor-pointer'>Get in Touch</p>
            <p className='pb-4 hover:underline cursor-pointer'>Our Privacy Commitment</p>
            <p className='pb-4 hover:underline cursor-pointer'>Terms of service</p>
            <p className='hover:underline cursor-pointer'>Customer Assistance</p>
          </div>

          <div className='flex-1'>
            <p className='pb-4 hover:underline cursor-pointer'>Dining Experience</p>
            <p className='pb-4 hover:underline cursor-pointer'>Wellness</p>
            <p className='pb-4 hover:underline cursor-pointer'>Fitness</p>
            <p className='pb-4 hover:underline cursor-pointer'>Sports</p>
            <p className='hover:underline cursor-pointer'>Events</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;