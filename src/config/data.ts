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
    isTbd?: boolean;
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
    id: 0,
    image: "1984_Hat_Front.png",
    backImage: "1984_Hat_Back.png",
    name: "1984 Hat",
    sizes: ["One Size"],
    amount: 40.00,
  },
  {
    id: 1,
    image: "Rvr_Shirt_01_Front.png",
    backImage: "Rvr_Shirt_01_Back.png",
    name: "Mascot Camo Tee - Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 2,
    image: "Rvr_Shirt_02_Front.png",
    backImage: "Rvr_Shirt_02_Back.png",
    name: "Mascot Camo Tee - Beige",
    sizes: ["S", "M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 3,
    image: "Rvr_Shirt_03_Front.png",
    backImage: "Rvr_Shirt_03_Back.png",
    name: "Moonwalk Tee - Brown",
    sizes: ["S", "M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 4,
    image: "Rvr_Shirt_04_Front.png",
    backImage: "Rvr_Shirt_04_Back.png",
    name: "Moonwalk Tee - Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 5,
    image: "Rvr_Shirt_05_Front.png",
    backImage: "Rvr_Shirt_05_Back.png",
    name: "A Rover Project - White",
    sizes: ["S", "M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 6,
    image: "Rvr_Shirt_06_Front.png",
    backImage: "Rvr_Shirt_06_Back.png",
    name: "A Rover Project - Blue",
    sizes: ["S", "M", "L", "XL", "XXL"],
    amount: 60.00,
  },
  {
    id: 7,
    image: "Deep_Blue_Sea.jpeg",
    backImage: "Deep_Blue_Sea.jpeg",
    name: "Deep Blue Sea - Custom",
    sizes: ["S", "M", "L", "XL", "XXL"],
    isTbd: true,
    amount: 0.00,
  },
  {
    id: 8,
    image: "Rvr_Hoodie_Black_Front.png",
    backImage: "Rvr_Hoodie_Black_Back.png",
    name: "Classic Rover Hoodie - Black",
    sizes: ["S", "M", "L", "XL", "XXL"],
    amount: 100.00,
  },
  {
    id: 10,
    image: "Rvr_Hoodie_Tan_Front.png",
    backImage: "Rvr_Hoodie_Tan_Back.png",
    name: "Classic Rover Hoodie - Tan",
    sizes: ["S", "M", "L", "XL", "XXL"],
    amount: 100.00,
  },
];

