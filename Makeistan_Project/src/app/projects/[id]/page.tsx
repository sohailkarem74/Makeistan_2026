"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import { MapPin, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const ReadMore = ({ text, maxLength = 150 }: { text: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (text.length <= maxLength) return <span>{text}</span>;
  return (
    <span>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="ml-2 text-sm font-medium text-foreground hover:text-muted underline transition-colors"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </span>
  );
};

interface Project {
  id: string;
  title: string;
  subtitle?: string;
  location?: string;
  executiveSummary?: string;
  description: string;
  approach?: string;
  toolsIntroduced?: string;
  methodology?: string;
  achievements?: string;
  futureVision?: string;
  background?: string;
  mainGoal?: string;
  objectives?: string[];
  trainingAreas?: string[];
  projects?: ProjectItem[];
  process?: string[];
  selectionProcess?: {
    overview: string;
    steps: ProjectStep[];
    diversity: string;
  };
  impact: string[];
  keyFeatures: string[];
  [key: string]:
    | string
    | string[]
    | ProjectItem[]
    | ProjectStep[]
    | { overview: string; steps: ProjectStep[]; diversity: string }
    | undefined;
}

interface ProjectStep {
  title?: string;
  step?: string;
  description: string;
}

interface ProjectItem {
  title: string;
  challenge?: string;
  description: string;
  focus?: string;
}

const ProjectSlideshow = ({ project }: { project: Project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectId = project?.id;

  const getSlides = () => {
    if (projectId === "1") {
      return [
        { image: "/images/projects/E1.jpeg", description: "Digital skills training for youth empowerment" },
        { image: "/images/projects/E2.jpeg", description: "Creating sustainable employment opportunities" },
        { image: "/images/projects/E3.jpeg", description: "Freelancing and entrepreneurship development" },
        { image: "/images/projects/E4.jpeg", description: "Community tech centers and innovation hubs" },
      ];
    } else if (projectId === "2") {
      return [
        { image: "/images/projects/housing1.jpg", description: "Sustainable housing solutions for flood-affected communities" },
        { image: "/images/projects/hosuing2.gif", description: "Resilient construction techniques for disaster-prone areas" },
      ];
    } else if (projectId === "3") {
      return [
        { image: "/images/projects/solar-water-installation-1.jpg", description: "Bringing clean water to remote villages through solar-powered solutions" },
        { image: "/images/projects/solar-water-installation-2.jpg", description: "Professional installation of solar-powered water systems in rural communities" },
      ];
    } else if (projectId === "4") {
      return [
        { image: "/images/projects/st1.jpeg", description: "Traditional stove design with modern efficiency improvements" },
        { image: "/images/projects/st2.jpeg", description: "Prototyping and testing fuel-efficient heating solutions" },
        { image: "/images/projects/st1.jpeg", description: "Community engagement and feedback on stove designs" },
      ];
    } else if (projectId === "5") {
      return [
        { image: "/images/projects/Robotics1.jpeg", description: "Advanced robotics training for community development" },
        { image: "/images/projects/Robotics2.jpeg", description: "Hands-on robotics workshops for students" },
        { image: "/images/projects/Robotics3.jpeg", description: "Building innovative robotics solutions" },
        { image: "/images/projects/Robotics4.jpeg", description: "Community robotics program achievements" },
        { image: "/images/projects/Robotics5.jpeg", description: "Collaborative robotics learning environment" },
        { image: "/images/projects/Robotics6.jpeg", description: "Robotics innovation and creativity showcase" },
        { image: "/images/projects/Robotics7.jpeg", description: "Technical skills development in robotics" },
        { image: "/images/projects/Robotics8.jpeg", description: "Community engagement through robotics" },
        { image: "/images/projects/Robotics9.jpeg", description: "Future leaders in robotics and technology" },
      ];
    }
    return [];
  };

  const slides = getSlides();

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!projectId) return null;

  if (slides.length === 0) {
    return (
      <div className="relative h-[560px] w-full bg-foreground flex items-center justify-center">
        <div className="text-center text-background max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">{project.title}</h1>
          <p className="text-lg opacity-80">{project.subtitle}</p>
        </div>
      </div>
    );
  }

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[560px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={95}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 transition-colors z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={20} strokeWidth={1.75} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 transition-colors z-10"
        aria-label="Next"
      >
        <ChevronRight size={20} strokeWidth={1.75} />
      </button>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg opacity-90 mb-2">{project.subtitle}</p>
          <p className="text-sm opacity-80">{slides[currentSlide].description}</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const FellowshipSlideshow = ({ project }: { project: Project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const fellowshipImages =
    project.id === "4"
      ? ["/images/projects/st1.jpeg", "/images/projects/st2.jpeg"]
      : [
          "/images/fellowship/f1.JPG",
          "/images/fellowship/f2.JPG",
          "/images/fellowship/f3.JPG",
          "/images/fellowship/f4.JPG",
          "/images/fellowship/f5.JPG",
          "/images/fellowship/f6.JPG",
          "/images/fellowship/f7.JPG",
        ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % fellowshipImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, fellowshipImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % fellowshipImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + fellowshipImages.length) % fellowshipImages.length);

  return (
    <div
      className="relative h-[560px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {fellowshipImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Fellowship image ${index + 1}`}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={95}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 transition-colors z-10"
        aria-label="Previous"
      >
        <ChevronLeft size={20} strokeWidth={1.75} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 transition-colors z-10"
        aria-label="Next"
      >
        <ChevronRight size={20} strokeWidth={1.75} />
      </button>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg opacity-90">{project.subtitle}</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {fellowshipImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

const projectData: { [key: string]: Project } = {
  "1": {
    id: "1",
    title: "E-Rozgar Program Gilgit Baltistan",
    subtitle: "Powered by Makeistan",
    location: "Gilgit Baltistan, Pakistan",
    beneficiaries: "180+ Youth",
    status: "Completed",
    description:
      "The E-Rozgar Program Gilgit-Baltistan is an initiative originally proposed by Makeistan platform, modeled after successful e-Rozgar initiatives in Punjab and Khyber Pakhtunkhwa. This program aims at combating youth unemployment by equipping the region's young people with market-relevant digital and freelancing skills. Despite being one of the most literate regions in Pakistan, Gilgit-Baltistan has historically lacked a structured employment strategy. With Pakistan emerging as the 4th fastest-growing freelance market globally, this program bridges the gap by offering digital skills training and pathways to economic empowerment.",
    executiveSummary:
      "Strategic response to youth unemployment in Gilgit-Baltistan through digital skills training and freelancing opportunities, leveraging Pakistan's position as the 4th fastest-growing freelance market globally.",
    background:
      "Youth unemployment is a pressing issue worldwide, and Gilgit-Baltistan is no exception—despite being one of the most literate regions in Pakistan, it has historically lacked a structured employment strategy. Meanwhile, Pakistan has emerged as the 4th fastest-growing freelance market globally, presenting a tremendous opportunity for young people to engage in online work.",
    mainGoal:
      "To equip youth in Gilgit-Baltistan with soft skills and online employability skills, enabling them to participate in the global digital economy and reduce regional unemployment.",
    objectives: [
      "To provide high-impact freelancing and digital skills training",
      "To promote self-employment through online work platforms",
      "To open new economic opportunities for youth through remote and freelance jobs",
    ],
    trainingAreas: [
      "Graphic Designing",
      "Web Development",
      "Accounting & Finance",
      "Technical Content Writing",
      "Machine Learning & Artificial Intelligence",
      "Freelancing Techniques & Marketplaces",
    ],
    impact: [
      "60 participants per cohort (Phase 1)",
      "120 trained youth (Phase 2)",
      "Increased online employment and freelance income among graduates",
      "Greater digital inclusion and economic participation from underrepresented communities",
    ],
    keyFeatures: [
      "Market-relevant digital skills curriculum",
      "Freelancing and online work platform training",
      "Soft skills and employability development",
      "Economic empowerment through remote work opportunities",
    ],
  },
  "2": {
    id: "2",
    title: "Sustainable Housing for Flood-Affected Communities - Sindh",
    subtitle: "Creating climate-resilient, affordable housing solutions rooted in local context and culture",
    location: "Sindh Province, Pakistan",
    beneficiaries: "300+ Families",
    status: "In Progress",
    description:
      "In response to the devastating floods in Sindh, Makeistan has successfully completed its first low-cost, sustainable housing unit designed specifically for displaced and vulnerable communities. This initiative reflects our commitment to creating climate-resilient, affordable housing solutions that are deeply rooted in local context and culture. But our work goes beyond construction—we believe that empowering communities with knowledge is just as important as providing infrastructure. As part of this initiative, we are engaging with local residents to educate and train them in sustainable building practices, helping them understand the long-term benefits of eco-friendly living and how to replicate these models in their own communities.",
    approach:
      "Our approach combines locally sourced materials, passive design principles, and renewable energy technologies to ensure these homes are not only cost-effective but also environmentally friendly and resilient to future climate-related disasters. The pilot house integrates natural ventilation, thermal insulation, and rain-resilient construction techniques tailored to the unique environmental challenges of Sindh.",
    communityEngagement:
      "But our work goes beyond construction—we believe that empowering communities with knowledge is just as important as providing infrastructure. As part of this initiative, we are engaging with local residents to educate and train them in sustainable building practices, helping them understand the long-term benefits of eco-friendly living and how to replicate these models in their own communities.",
    futureVision:
      "This project is a step toward scalable, community-led solutions for climate adaptation. With the success of our first prototype, we aim to expand this work to reach more families, ensuring that sustainable housing becomes a reality—not a privilege—for those who need it most.",
    goals: [
      "Construct 200 flood-resistant homes",
      "Train local builders in sustainable construction",
      "Establish community-led maintenance programs",
      "Create replicable housing models",
    ],
    impact: [
      "150 flood-resistant homes completed",
      "Local construction skills training",
      "Sustainable material sourcing",
      "Community-led implementation",
    ],
    keyFeatures: [
      "Climate-resilient design with passive cooling",
      "Locally sourced sustainable materials",
      "Natural ventilation and thermal insulation",
      "Rain-resilient construction techniques",
      "Community education and training programs",
      "Renewable energy integration",
    ],
  },
  "3": {
    id: "3",
    title: "Project Water - Solar-Powered Clean Water Access in Sindh",
    subtitle: "Harnessing renewable energy to provide safe, reliable, and sustainable access to drinking water",
    location: "Sindh Province, Pakistan",
    beneficiaries: "Multiple Villages",
    status: "Active",
    description:
      "Access to clean drinking water remains one of the most pressing challenges in rural Sindh, particularly in flood-affected and drought-prone communities. In response, Makeistan launched Project Water—a community-driven initiative that harnesses the power of renewable energy to provide safe, reliable, and sustainable access to drinking water. Through the installation of solar-powered water tubewells, Project Water brings clean groundwater to remote villages that have long struggled with water scarcity and contamination. These systems eliminate the need for expensive and polluting fuel-powered pumps, making clean water accessible in an eco-friendly and cost-efficient way. Each solar water unit is designed to serve an entire village, improving health outcomes, reducing the burden on women and children who often travel long distances to fetch water, and fostering resilience in the face of climate-induced water challenges. Project Water isn't just about infrastructure—it's about dignity, health, and sustainability. As we continue to scale this project across Sindh, our goal is to create a replicable model for clean water access that empowers communities and protects the environment.",
    goals: [
      "Install solar-powered water tubewells in remote villages",
      "Eliminate dependency on expensive fuel-powered pumps",
      "Improve health outcomes through clean water access",
      "Reduce burden on women and children for water collection",
      "Create replicable models for sustainable water access",
    ],
    impact: [
      "Clean groundwater access for multiple villages",
      "Reduced water-related health issues",
      "Environmental protection through renewable energy use",
      "Enhanced community resilience to climate challenges",
      "Improved quality of life for rural families",
    ],
    keyFeatures: [
      "Solar-powered water extraction systems",
      "Community-driven implementation approach",
      "Eco-friendly and cost-efficient technology",
      "Village-scale water access solutions",
      "Climate-resilient infrastructure",
    ],
  },
  "4": {
    id: "4",
    title: "Smart Traditional Stove - Reimagining Heating for Mountain Communities",
    subtitle: "Reimagining the Traditional Stove for a Warmer, Greener Future",
    location: "Gilgit-Baltistan and Chitral",
    beneficiaries: "Mountain Communities",
    status: "In Development",
    description:
      "At Makeistan, we're re-engineering the traditional stoves used in Gilgit-Baltistan and Chitral to meet the needs of today — without losing touch with the wisdom of the past. Our redesigned stove is more fuel-efficient, helping reduce firewood consumption and environmental impact in the high mountain regions where winters are long and harsh.",
    approach:
      "By integrating a repurposed car radiator, we're turning this stove into a smart heat distribution system — capable of transferring warmth from one room to another, making homes warmer, healthier, and more energy-efficient. This innovation not only cuts fuel use and heating costs but also contributes to cleaner indoor air and a more sustainable future for mountain communities.",
    methodology:
      "We're currently prototyping and testing this system with local families, incorporating their feedback to make it practical, durable, and easy to maintain. The goal is to scale this solution across remote areas, reducing the burden on women who collect firewood and helping protect our fragile mountain forests.",
    futureVision:
      "Innovation meets tradition — only at Makeistan. Our vision is to create a sustainable heating solution that respects traditional practices while introducing modern efficiency improvements for mountain communities.",
    goals: [
      "Reduce firewood consumption by 40%",
      "Improve heat distribution efficiency",
      "Create cleaner indoor air quality",
      "Reduce burden on women collecting firewood",
      "Protect mountain forest ecosystems",
    ],
    impact: [
      "More fuel-efficient heating systems",
      "Reduced environmental impact",
      "Improved indoor air quality",
      "Enhanced home warmth distribution",
      "Sustainable mountain community development",
    ],
    keyFeatures: [
      "Fuel-efficient stove design",
      "Repurposed car radiator integration",
      "Smart heat distribution system",
      "Community-tested prototypes",
      "Traditional wisdom meets modern innovation",
    ],
  },
  "5": {
    id: "5",
    title: "Community Robotics Program",
    subtitle: "Taking Innovation to Every Corner of Gilgit-Baltistan",
    location: "Across Gilgit-Baltistan",
    beneficiaries: "Hundreds of Students",
    status: "Active",
    description:
      "At Makeistan, we believe that access to cutting-edge technology and hands-on learning shouldn't be limited to big cities or elite schools. Our Community Robotics Program brings the future of learning directly to students across Gilgit-Baltistan—no matter how remote.",
    approach:
      "Through this mobile initiative, our team travels with all the necessary equipment, tools, and tech kits to organize on-site Robotics and AI Camps for school and college students. From learning the basics of electronics and programming to building their own robots, students get a chance to explore, experiment, and create—many for the first time in their lives.",
    methodology:
      "We organize hands-on robotics camps in schools and communities, teach students about sensors, coding, AI, and real-world applications, empower local youth with skills in problem-solving and innovation, and create exposure to STEM careers and emerging technologies.",
    achievements:
      "Our reach so far includes 10 successful camps across Gilgit-Baltistan, hundreds of students trained, and dozens of student-built robots and prototypes. By making tech education mobile, inclusive, and exciting, the Community Robotics Program is helping raise a new generation of makers, coders, and changemakers in the mountains of Pakistan.",
    goals: [
      "Introduce robotics education to 200+ students",
      "Develop technical and problem-solving skills",
      "Foster innovation and creativity in STEM fields",
      "Build a foundation for future technology careers",
    ],
    impact: [
      "Multiple robotics workshops successfully conducted",
      "Enhanced STEM education in the region",
      "Improved technical skill development among participants",
      "Cultivated innovation mindset in local youth",
    ],
    keyFeatures: [
      "Hands-on robotics workshops",
      "STEM curriculum integration",
      "Technical skill development programs",
      "Innovation and creativity training",
    ],
  },
  "6": {
    id: "6",
    title: "Gilgit-Baltistan Climate Fellowship",
    subtitle: "A 10-day human-centered design program in Gilgit-Baltistan",
    location: "Various valleys of Gilgit-Baltistan",
    beneficiaries: "30 international + 10 local participants",
    status: "Active",
    description:
      "The Gilgit-Baltistan Design Fellowship is a 10-day human-centered design program that aims to bring together people from diverse backgrounds and experiences to participate in a hands-on experience in Gilgit-Baltistan. The goal of the fellowship is to upskill and connect changemakers, innovators, artists, students, and teachers with the local communities of Gilgit-Baltistan. Participants will collaborate to co-design and co-create solutions to some of the serious challenges faced by the residents of the region.",
    approach:
      "This hands-on fellowship will teach design thinking and local innovation to the participants. Participants will have the opportunity to work in a makerspace, where they will build functional prototypes. They will engage directly with the community, staying with local families to gain a better understanding of user needs and challenges. The fellowship brings together 30 international and national participants, as well as 10 local participants from the communities of Gilgit-Baltistan working together as a team on six different projects.",
    methodology:
      "We use community-centered design thinking with participatory research. Our process includes iterative prototyping, local knowledge integration, and sustainable impact measurement.",
    goals: [
      "Upskill and connect changemakers, innovators, artists, students, and teachers",
      "Collaborate with local communities of Gilgit-Baltistan",
      "Co-design and co-create solutions to serious regional challenges",
      "Teach design thinking and local innovation",
      "Build functional prototypes in makerspace",
      "Engage directly with community through homestays",
    ],
    projects: [
      {
        title: "Gulmit Carpet Centre",
        challenge: "How might we improve the efficiency of the carpet-making unit in Gulmit?",
        description:
          "Korgah is a women-run carpet weaving center located in Gulmit, Gojal, Upper Hunza. Established in 2005, it began with the efforts of around 18 women who sought to create a space for weaving traditional, pure handmade carpets, rugs, and handcrafting embroidered purses and wallets.",
        focus:
          "The team will collaborate with the artisans to research trends in Pakistan, assist in setting up an online store and help scale up their business using local resources, incorporating local designs, culture, and the most in-demand styles in the market.",
      },
      {
        title: "Al-Amin Model School Gulmit",
        challenge:
          "How might we integrate a modern practical learning system into the education system of Al-Amin Model School Gulmit?",
        description:
          "Al-Amin Model School & College in Gulmit was established on September 21, 1991. It is an initiative of the Gulmit Educational and Social Welfare Society (GESWS), a registered community-based organization dedicated to improving the quality of life through educational and developmental activities.",
        focus:
          "The team will work with teachers and students to assess their current models and collaboratively design a curriculum focused on STEM, hands-on activities, and new learning methods, working on prototypes with students and teachers.",
      },
      {
        title: "Fruit Jam Centre Nagar",
        challenge:
          "How might we improve the jam-making process to ensure that the new methods are both efficient and hygienic?",
        description:
          "Nestled in the picturesque Nagar Valley, Mamobar Organics is a charming small business operated by dedicated community members. This venture crafts jams, fragrant oils, and soothing green teas using organic methods and local fruits.",
        focus:
          "The team will collaborate to improve the jam-making process, ensuring new methods are efficient and hygienic while maintaining the organic nature of products and supporting community food preservation.",
      },
      {
        title: "Women Artisans",
        challenge:
          "How might we enhance the local handicraft projects of Hunza, helping local women artisans build products that are viable, scalable, eco-friendly, and profitable?",
        description:
          "In Hunza Valley, women artisans and entrepreneurs play a crucial role in economic activities. These women have strong command of the handicraft industry, creating exceptional designs with international recognition, boosted by tourism and online business.",
        focus:
          "Co-design products, introduce new flavors and colors, conduct user research for market needs and demands, enabling artisans to boost sales and enhance local handicraft projects.",
      },
      {
        title: "Glaciers",
        challenge: "What steps can we take to save the melting glaciers?",
        description:
          "Glaciers in Gilgit-Baltistan are melting rapidly due to climate change, raising concerns about glacial lake outburst floods (GLOFs) as new lakes form from meltwater, posing threats to inhabitants and ecosystem.",
        focus:
          "Work with the local Passu community to find solutions to decrease glacier melting and suggest ways for community collaboration in efforts to save glaciers and prevent accelerated melting.",
      },
    ],
    process: [
      "Information gathering",
      "Problem framing",
      "Field and community visits",
      "Idea generation",
      "Sketch modeling",
      "Field and community review",
      "Prototype",
      "Solution refinement",
      "Community showcase",
      "Continuity planning",
    ],
    selectionProcess: {
      overview:
        "Individuals who wish to participate in this program must undergo a thorough selection process designed to ensure the best candidates are chosen.",
      steps: [
        {
          step: "Application Form",
          description:
            "Applicants complete a comprehensive application form, providing detailed information about their backgrounds, skills, and aspirations.",
        },
        {
          step: "Interview",
          description:
            "Successful candidates are invited to attend an interview to showcase their unique qualities and potential contributions to the program.",
        },
        {
          step: "Final Selection",
          description:
            "A panel of independent jurors, consisting of experts in various fields, evaluates candidates to create a diverse and well-rounded team.",
        },
      ],
      diversity:
        "The committee aims to gather a harmonious mix of designers, innovators, artists, engineers, changemakers, educators, students, and teachers, ensuring that a variety of perspectives and expertise are represented. This approach enhances the program's collaborative environment and maximizes its potential for innovation and impact.",
    },
    impact: [
      "Cross-cultural collaboration and knowledge exchange",
      "Community-driven innovation solutions",
      "Capacity building in design thinking methodologies",
      "Sustainable development through local engagement",
      "Enhanced problem-solving skills for participants",
    ],
    keyFeatures: [
      "Human-centered design methodology",
      "Community homestay experiences",
      "Makerspace prototype development",
      "Cross-sector collaboration framework",
      "Local innovation and design thinking training",
    ],
  },
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = React.use(params);
  const project = projectData[id];

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <BackButton />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-foreground mb-3">Project Not Found</h1>
            <Link href="/" className="text-sm text-foreground hover:text-muted">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <BackButton />

      {/* Hero */}
      {(id === "1" || id === "2" || id === "3" || id === "4" || id === "5") ? (
        <ProjectSlideshow project={project} />
      ) : id === "6" ? (
        <FellowshipSlideshow project={project} />
      ) : (
        <div className="relative h-[400px] w-full bg-foreground">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-semibold mb-3">{project.title}</h1>
              <p className="text-lg opacity-80">{project.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Project Details */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Location */}
        <div className="mb-10 max-w-md">
          <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-4">
            <MapPin className="h-4 w-4 text-foreground" strokeWidth={1.75} />
            <div>
              <p className="text-xs font-medium text-foreground">Location</p>
              <p className="text-sm text-muted">{project.location}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {project.executiveSummary && (
              <section data-tone="blue">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Executive Summary
                </h2>
                <div className="rounded-xl surface border tone-border p-6">
                  <p className="text-sm leading-relaxed text-foreground">
                    {project.executiveSummary}
                  </p>
                </div>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Project Overview
              </h2>
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-sm leading-relaxed text-foreground">
                  <ReadMore text={project.description} maxLength={300} />
                </p>
              </div>
            </section>

            {project.approach && (
              <section data-tone="blue">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Approach
                </h2>
                <div className="rounded-xl surface border tone-border p-6">
                  <p className="text-sm leading-relaxed text-foreground">
                    <ReadMore text={project.approach} maxLength={180} />
                  </p>
                </div>
              </section>
            )}

            {project.toolsIntroduced && (
              <section data-tone="orange">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Tools & Technologies
                </h2>
                <div className="rounded-xl surface border tone-border p-6">
                  <p className="text-sm leading-relaxed text-foreground">
                    <ReadMore text={project.toolsIntroduced} maxLength={180} />
                  </p>
                </div>
              </section>
            )}

            {project.methodology && (
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Methodology
                </h2>
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="text-sm leading-relaxed text-foreground">
                    <ReadMore text={project.methodology} maxLength={180} />
                  </p>
                </div>
              </section>
            )}

            {project.achievements && (
              <section data-tone="green">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Achievements
                </h2>
                <div className="rounded-xl surface border tone-border p-6">
                  <p className="text-sm leading-relaxed text-foreground">
                    <ReadMore text={project.achievements} maxLength={180} />
                  </p>
                </div>
              </section>
            )}

            {project.futureVision && (
              <section data-tone="purple">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Future Vision
                </h2>
                <div className="rounded-xl surface border tone-border p-6">
                  <p className="text-sm leading-relaxed text-foreground">
                    <ReadMore text={project.futureVision} maxLength={150} />
                  </p>
                </div>
              </section>
            )}

            {project.background && (
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Background</h2>
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="text-sm leading-relaxed text-foreground">
                    {project.background}
                  </p>
                </div>
              </section>
            )}

            {project.mainGoal && (
              <section data-tone="green">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Goal</h2>
                <div className="rounded-xl surface border tone-border p-6">
                  <p className="text-sm leading-relaxed text-foreground font-medium">
                    {project.mainGoal}
                  </p>
                </div>
              </section>
            )}

            {project.objectives && (
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Objectives</h2>
                <div className="space-y-3">
                  {project.objectives.map((objective: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-lg border border-border bg-background p-4"
                    >
                      <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-semibold">
                        {index + 1}
                      </span>
                      <p className="text-sm text-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.trainingAreas && (
              <section data-tone="orange">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Training Areas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.trainingAreas.map((area: string) => (
                    <div
                      key={area}
                      className="rounded-lg surface border tone-border p-3"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">📚</span>
                        <p className="text-sm font-medium text-foreground">{area}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.projects && (
              <section data-tone="blue">
                <div className="rounded-2xl surface border tone-border p-6 mb-6 text-center">
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    Fellowship Projects
                  </h2>
                  <p className="text-sm text-muted">
                    Six transformative projects addressing real community challenges
                  </p>
                </div>

                <div className="space-y-4">
                  {project.projects.map((proj: ProjectItem, index: number) => (
                    <div
                      key={proj.title}
                      className="rounded-xl border border-border bg-background p-6"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background text-sm font-semibold">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            {proj.title}
                          </h3>
                          <div className="rounded-lg border tone-border surface p-3 mb-3">
                            <p className="text-sm text-foreground italic">
                              {proj.challenge}
                            </p>
                          </div>
                          <p className="text-sm text-muted leading-relaxed mb-3">
                            {proj.description}
                          </p>
                          <div className="rounded-lg surface p-3">
                            <p className="text-sm text-foreground">
                              <span className="font-semibold">Focus:</span> {proj.focus}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.process && (
              <section data-tone="blue">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Fellowship Process
                </h2>
                <div className="rounded-xl surface border tone-border p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {project.process.map((step: string, index: number) => (
                      <div
                        key={step}
                        className="rounded-lg border border-border bg-background p-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-semibold">
                            {index + 1}
                          </span>
                          <p className="text-sm font-medium text-foreground">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {project.selectionProcess && (
              <section data-tone="green">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Selection Process
                </h2>
                <div className="space-y-4">
                  <div className="rounded-xl surface border tone-border p-6">
                    <p className="text-sm leading-relaxed text-foreground">
                      {project.selectionProcess.overview}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {project.selectionProcess.steps.map((step: ProjectStep, index: number) => (
                      <div
                        key={`${step.title ?? step.step ?? "step"}-${index}`}
                        className="rounded-xl border border-border bg-background p-5"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-semibold">
                            {index + 1}
                          </span>
                          <h3 className="text-base font-semibold text-foreground">
                            {step.title ?? step.step}
                          </h3>
                        </div>
                        <p className="text-sm text-muted leading-relaxed ml-10">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl surface border tone-border p-6">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      Diversity & Team Composition
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {project.selectionProcess.diversity}
                    </p>
                  </div>
                </div>
              </section>
            )}

            <section data-tone="green">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Impact & Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.impact.map((item: string) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-lg surface border tone-border p-3"
                  >
                    <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs">
                      ✓
                    </span>
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <div className="space-y-2">
                {project.keyFeatures.map((feature: string) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 rounded-lg border border-border bg-background p-3"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                    <p className="text-sm text-foreground font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* CTA */}
        <section data-tone="blue" className="text-center mt-16">
          <div className="rounded-2xl border border-border surface p-10">
            <h2 className="text-3xl font-semibold text-foreground mb-3">
              Want to Collaborate?
            </h2>
            <p className="text-sm text-muted mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for partners, volunteers, and supporters
              to help us expand our impact. Join us in creating positive change
              in communities across Pakistan.
            </p>
            <a
              href="mailto:Info@makeistan.com?subject=Inquiry about Makeistan Projects&body=Hello Makeistan team,%0D%0A%0D%0AI am interested in learning more about your projects and would like to get in touch.%0D%0A%0D%0AThank you!"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[var(--accent-hover)]"
            >
              Get In Touch
              <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
