'use client';
import { useState } from 'react';

import Search from '../Search/Search';
import RoomCard from "@/components/RoomCard/RoomCard";
import { Room } from "@/models/room";
import roomsData from "@/lib/rooms.json";

const Filterbox: React.FC = () => {

  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [rooms, setRooms] = useState<Room[]>(roomsData);

  // Function to filter rooms based on room type and search query
  const filterRooms = (room: Room) => {
    const typeMatch = roomTypeFilter === '' || room.type.toLowerCase().includes(roomTypeFilter.toLowerCase()) || roomTypeFilter === 'All';
    const searchMatch = searchQuery === '' || room.description.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && searchMatch;
  };

  // Filtered rooms based on room type and search query
  const filteredRooms = rooms.filter(filterRooms) ;

  return (
    <>

      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />

      <section className="flex flex-wrap flex-row justify-around gap-8 m-12 ">
        {filteredRooms.map((room: Room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </section>
      
    </>
  );
};

export default Filterbox;
