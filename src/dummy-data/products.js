import Apples from "../assets/Apples.webp";
import BabySpinach from "../assets/BabySpinach.webp";
import Blueberries from "../assets/blueberries.webp";
import BrusselsSprouts from "../assets/BrusselsSprouts.webp";
import CelerySticks from "../assets/CelerySticks.webp";
import Clementines from "../assets/clementines.webp";
import Corn from "../assets/Corn.webp";
import Cucumber from "../assets/Cucumber.webp";

export const Categories = [
  {
    name: "Fruits & Vegetables",
    value: "fruits-vegetables",
    subCategories: [
      { name: "Fruits", value: "fruits" },
      { name: "Vegetables", value: "vegetables" },
    ],
  },
  {
    name: "Meat & Fish",
    value: "meat-fish",
    subCategories: [
      { name: "Meat", value: "meat" },
      { name: "Fish", value: "fish" },
    ],
  },
  {
    name: "Snacks",
    value: "snacks",
    subCategories: [
      { name: "Chips", value: "chips" },
      { name: "Biscuits", value: "biscuits" },
    ],
  },
  {
    name: "Pet Care",
    value: "pet-care",
    subCategories: [
      { name: "Cat Food", value: "cat-food" },
      { name: "Dog Food", value: "dog-food" },
    ],
  },
];

export const DummyProducts = [
  {
    id: 1,
    title: "Apples",
    weight: "1lb",
    price: 1.6,
    oldPrice: 2.0,
    discount: 20,
    image: Apples,
    tag: "fruits",
  },
  {
    id: 2,
    title: "Baby Spinach",
    weight: "2lb",
    price: 0.6,
    oldPrice: null,
    discount: null,
    image: BabySpinach,
    tag: "vegetables",
  },
  {
    id: 3,
    title: "Blueberries",
    weight: "1lb",
    price: 3.0,
    oldPrice: null,
    discount: null,
    image: Blueberries,
    tag: "fruits",
  },
  {
    id: 4,
    title: "Brussels Sprout",
    weight: "1lb",
    price: 3.0,
    oldPrice: 5.0,
    discount: 40,
    image: BrusselsSprouts,
    tag: "vegetables",
  },
  {
    id: 5,
    title: "Celery Stick",
    weight: "1lb",
    price: 5.0,
    oldPrice: 6.0,
    discount: 17,
    image: CelerySticks,
    tag: "vegetables",
  },
  {
    id: 6,
    title: "Clementines",
    weight: "1lb",
    price: 2.5,
    oldPrice: 3.0,
    discount: 17,
    image: Clementines,
    tag: "fruits",
  },
  {
    id: 7,
    title: "Sweet Corn",
    weight: "1lb",
    price: 4.0,
    oldPrice: 5.0,
    discount: 20,
    image: Corn,
    tag: "vegetables",
  },
  {
    id: 8,
    title: "Cucumber",
    weight: "2.5lb",
    price: 2.5,
    oldPrice: null,
    discount: null,
    image: Cucumber,
    tag: "vegetables",
  },
];