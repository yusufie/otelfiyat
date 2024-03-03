
export type Image = {
  _key: string;
  url: string;
};

type Amenity = {
  _key: string;
  amenity: string;
  icon: string;
};

export type Room = {
  _id: string;
  coverImage: string;
  description: string;
  dimension?: string;
  discount?: number;
  images?: Image[];
  isBooked: string;
  isFeatured?: boolean;
  name: string;
  numberOfBeds?: number;
  offeredAmenities?: Amenity[];
  price: string;
  slug: string;
  specialNote?: string;
  type: string;
};

export type CreateBookingDto = {
  user: string;
  hotelRoom: string;
  checkinDate: string;
  checkoutDate: string;
  numberOfDays: number;
  adults: number;
  children: number;
  totalPrice: number;
  discount: number;
};
