import Image1 from "../assets/images/toy2.jpeg";
import Image2 from "../assets/images/toy11.1.jpeg";
import Image3 from "../assets/images/toy3.jpeg";
import Image4 from "../assets/images/toy4.jpeg";
import Image5 from "../assets/images/toy5.jpeg";
import Image6 from "../assets/images/toy6.1.jpeg";
import Image7 from "../assets/images/toy7.jpeg";
import Image8 from "../assets/images/toy8.1.jpeg";
import Image9 from "../assets/images/toy9.jpeg";
import { mock } from "node:test";

// Correct paths to the images for anime categories
//export const animeCategories = [
  //{ name: 'Toys', image: Image3 }, // Use the imported Image variables
  //{ name: 'Kitchen', image: 'images/kitchen.jpg' }, // Replace with actual imported image if available
  //{ name: 'Poster', image: 'images/poster.jpg' }, // Same as above
  //{ name: 'Cards', image: 'images/cards.jpg' },
  //{ name: 'Sword', image: 'images/sword.jpg' },
  //{ name: 'T-shirt', image: 'images/tshirt.jpg' },
//];

// Corrected mockdata array with unique IDs and image references
export const mockdata = [
  {
    id: 1,
    image: Image8, // Refer to imported images directly
    name: "Product 1",
    price: 200,
  },
  {
    id: 2,
    image: Image1,
    name: "Product 2",
    price: 220,
  },
  {
    id: 3,
    image: Image2,
    name: "Product 3",
    price: 230,
  },
  {
    id: 4,
    image: Image3,
    name: "Product 4",
    price: 240,
  },
  {
    id: 5,
    image: Image4,
    name: "Product 5",
    price: 250,
  },
  {
    id: 6,
    image: Image5,
    name: "Product 6",
    price: 260,
  },
  {
    id: 7,
    image: Image6,
    name: "Product 7",
    price: 270,
  },
  {
    id: 8,
    image: Image7,
    name: "Product 8",
    price: 280,
  },
  {
    id: 9,
    image: Image9,
    name: "Product 9",
    price: 290,
  },
];
export default mockdata;
