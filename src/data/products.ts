export type ProductCategory = "RC Cars" | "Sensors" | "Arduino" | "3D Prints";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  image: string;
}

export const categories = ["All", "RC Cars", "Sensors", "Arduino", "3D Prints"] as const;

export const products: Product[] = [
  {
    id: 1,
    name: "Rally Drift RC Car",
    price: 129.99,
    category: "RC Cars",
    description: "Compact, durable, and tuned for smooth indoor drifting practice.",
    image: "/images/main1.jpg",
  },
  {
    id: 2,
    name: "Environmental Sensor Kit",
    price: 89.5,
    category: "Sensors",
    description: "A starter pack for air quality, humidity, and temperature sensing.",
    image: "/images/main2.jpg",
  },
  {
    id: 3,
    name: "Arduino Starter Bundle",
    price: 64.0,
    category: "Arduino",
    description: "Breadboard, cables, sensors, and a beginner-friendly Arduino board.",
    image: "/images/main3.jpg",
  },
  {
    id: 4,
    name: "Solar-Powered 3D Print Lamp",
    price: 45.0,
    category: "3D Prints",
    description: "A lightweight desk lamp designed for prototyping and maker spaces.",
    image: "/images/main4.jpg",
  },
  {
    id: 5,
    name: "Off-Road RC Buggy",
    price: 179.0,
    category: "RC Cars",
    description: "Built to handle rough terrain and educational robotics demos.",
    image: "/images/climate-lab.jpg",
  },
  {
    id: 6,
    name: "Motion Detection Sensor",
    price: 24.99,
    category: "Sensors",
    description: "Fast, precise sensing for smart prototypes and classroom projects.",
    image: "/images/robotics-lab.jpg",
  },
  {
    id: 7,
    name: "Nano Arduino Controller",
    price: 34.5,
    category: "Arduino",
    description: "A compact controller for lightweight automation and IoT experiments.",
    image: "/images/logo/llogo.png",
  },
  {
    id: 8,
    name: "Maker Tool Organizer",
    price: 29.0,
    category: "3D Prints",
    description: "A practical organizer for screws, tools, and small components.",
    image: "/images/logo/llogo.png",
  },
];
