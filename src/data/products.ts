export type ProductCategory = "RC Cars" | "Sensors";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  image: string;
  detailSections?: { title: string; items: string[] }[];
}

export const categories = ["All", "RC Cars", "Sensors"] as const;

export const products: Product[] = [
  {
    id: 2,
    name: "Makeistan 37 Sensor Kit",
    price: 3000,
    category: "Sensors",
    description: "A complete 37-piece sensor kit for learning electronics, robotics, and Arduino projects.",
    image: "/images/Makeistan_shop/pro-4Xj9CpTb.jpeg",
    detailSections: [
      {
        title: "Switches & Buttons",
        items: [
          "KY-004 Button",
          "KY-021 Mini Switch",
          "KY-025 Reed Switch",
          "KY-020 Ball Switch",
          "KY-017 Tilt Switch",
          "KY-002 Shock Sensor",
          "KY-031 Tap Sensor",
          "KY-036 Touch Sensor",
          "KY-010 Light Blocking Module",
        ],
      },
      {
        title: "Sound Modules",
        items: [
          "KY-037 Big Sound Sensor",
          "KY-038 Small Sound Sensor",
          "KY-006 Passive Buzzer",
          "KY-012 Active Buzzer",
        ],
      },
      {
        title: "Light & Color",
        items: [
          "KY-018 Photoresistor",
          "KY-027 Magic Light Cup ×2",
          "KY-009 SMD RGB LED",
          "KY-016 RGB LED",
          "KY-011 Two-Color LED",
          "KY-029 Mini Two-Color LED",
          "KY-034 7-Color Flash LED",
          "KY-008 Laser Emitter",
        ],
      },
      {
        title: "Temperature & Environment",
        items: [
          "KY-028 Digital Temperature Sensor",
          "KY-013 Analog Temperature Sensor",
          "KY-001 DS18B20 Temperature Sensor",
          "KY-015 Temperature & Humidity Sensor (DHT11)",
        ],
      },
      {
        title: "Magnetic & Motion",
        items: [
          "KY-003 Hall Magnetic Sensor",
          "KY-024 Linear Hall Sensor",
          "KY-035 Analog Hall Sensor",
          "KY-040 Rotary Encoder",
        ],
      },
      {
        title: "Infrared & Detection",
        items: [
          "KY-005 IR Emission Sensor",
          "KY-022 IR Receiver",
          "KY-032 Obstacle Avoidance Sensor",
          "KY-033 Line Tracking Sensor",
          "KY-026 Flame Sensor",
          "KY-039 Heartbeat Sensor",
        ],
      },
      {
        title: "Control & Interface",
        items: ["KY-019 5V Relay Module", "KY-023 Joystick Module (PS2-style)"],
      },
    ],
  },
];
