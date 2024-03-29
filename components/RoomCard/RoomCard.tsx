import { FC } from 'react';
import Image from 'next/image';

import { Room } from '@/models/room';
import Link from 'next/link';

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = props => {
  const {
    room: { coverImage, name, price, type, description, slug, isBooked },
  } = props;

  return (
    <Link href={`/rooms/${slug}`}
      className='rounded-xl w-72 mb-10 mx-auto md:mx-0 overflow-hidden text-black'
    >
      <div className='h-60 overflow-hidden'>
        <Image
          src={coverImage}
          alt={name}
          width={250}
          height={250}
          className='object-cover w-full h-full hover:scale-125 transition-all duration-700'
        />
      </div>

      <div className='p-4 bg-gray-100'>
        <div className='flex justify-between text-xl font-semibold'>
          <p>{name}</p>
          <p>$ {price}</p>
        </div>

        <p className='pt-2 text-xs'>{type} Room</p>

        <p className='pt-3 pb-6'>{description.slice(1, 100)}...</p>

        <button
          className='bg-indigo-900 inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500'
        >
          {isBooked ? 'Rezerve' : 'Rezerve Edin'}
        </button>
      </div>
    </Link>
  );
};

export default RoomCard;