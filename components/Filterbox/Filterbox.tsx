import RoomCard from "@/components/RoomCard/RoomCard";
import { Room } from "@/models/room";
import rooms from "@/lib/rooms.json";

const Filterbox: React.FC = () => {
  return (
    <section className="flex mt-20 justify-between flex-wrap">
      {rooms.map((room: any) => (
        <RoomCard key={room._id} room={room} />
      ))}
    </section>
  );
};

export default Filterbox;
