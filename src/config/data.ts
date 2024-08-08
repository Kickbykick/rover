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
    image: "Rvr_Shirt_01_Front.png",
    backImage: "Rvr_Shirt_01_Back.png",
    name: "Mascot Camo Tee - Black",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 2,
    image: "Rvr_Shirt_02_Front.png",
    backImage: "Rvr_Shirt_02_Back.png",
    name: "Mascot Camo Tee - Brown",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 3,
    image: "Rvr_Shirt_03_Front.png",
    backImage: "Rvr_Shirt_03_Back.png",
    name: "Moonwalk Tee - Brown",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 4,
    image: "Rvr_Shirt_04_Front.png",
    backImage: "Rvr_Shirt_04_Back.png",
    name: "Moonwalk Tee - Black",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 5,
    image: "Rvr_Shirt_05_Front.png",
    backImage: "Rvr_Shirt_05_Back.png",
    name: "A Rover Project - White",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 6,
    image: "Rvr_Shirt_06_Front.png",
    backImage: "Rvr_Shirt_06_Back.png",
    name: "A Rover Project - Blue",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 7,
    image: "Rvr_Hoodie_Front.png",
    backImage: "Rvr_Hoodie_Back.png",
    name: "Classic Rover Hoodie - Black",
    sizes: ["M", "L", "XL", "XXL"],
    amount: 120.00,
  },
];

