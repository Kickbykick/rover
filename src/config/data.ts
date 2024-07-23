export const imageName = [
    "Web Product Page-01.jpg",
    "Web Product Page-02.jpg",
    "Web Product Page-03.jpg",
    "Web Product Page-04.jpg",
    "Web Product Page-05.jpg",
    "Web Product Page-06.jpg",
    "Web Product Page-07.jpg",
    "Web Product Page-08.jpg",
    "Web Product Page-09.jpg",
    "Web Product Page-10.jpg",
    "Web Product Page-11.jpg",
    "Web Product Page-12.jpg",
    "Web Product Page-13.jpg",
    "Web Product Page-14.jpg",
    "Web Product Page-15.jpg",
    "Web Product Page-16.jpg",
    "Web Product Page-17.jpg",
    "Web Product Page-18.jpg",
    "Web Product Page-19.jpg",
    "Web Product Page-20.jpg",
    "Web Product Page-21.jpg",
    "Web Product Page-22.jpg",
    "Web Product Page-23.jpg",
    "Web Product Page-24.jpg",
    "Web Product Page-25.jpg",
    "Web Product Page-26.jpg",
    "Web Product Page-27.jpg",
    "Web Product Page-28.jpg",
    "Web Product Page-29.jpg",
    "Web Product Page-30.jpg"
];

export interface ClothItem {
    id: number;
    image: string;
    backImage: string;
    name: string;
    sizes: string[];
    amount: number;
}

export const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Northwest Territories",
    "Nunavut",
    "Yukon"
];
  
export const clothItems: ClothItem[] = [
  {
    id: 1,
    image: "rvr2_shirt_1_front.png",
    backImage: "rvr2_shirt_1_back.png",
    name: "Classic Tee",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 29.99,
  },
  {
    id: 2,
    image: "rvr2_shirt_2_front.png",
    backImage: "rvr2_shirt_2_back.png",
    name: "Summer Polo",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 35.00,
  },
  {
    id: 3,
    image: "rvr2_shirt_3_front.png",
    backImage: "rvr2_shirt_3_back.png",
    name: "Casual Shirt",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 40.50,
  },
  {
    id: 4,
    image: "rvr2_shirt_4_front.png",
    backImage: "rvr2_shirt_4_back.png",
    name: "Formal Shirt",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 45.75,
  },
  {
    id: 5,
    image: "rvr2_shirt_5_front.png",
    backImage: "rvr2_shirt_5_back.png",
    name: "Denim Jacket",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 6,
    image: "rvr2_hoodie_1_front.png",
    backImage: "rvr2_hoodie_1_back.png",
    name: "Rover Hoodie",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 120.00,
  },
];

