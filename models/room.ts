
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
  images?: string[] | undefined;
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