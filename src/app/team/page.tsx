import BackButton from "@/components/BackButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/ui/team";

const members = [
  { name: "Sohail Karim", role: "Data Science Student at GIKI", image: "/images/team/sohail.jpg", imagePosition: "object-[center_60%]" as const, href: "https://www.linkedin.com/in/sohail-karim-a7902a200", email: "info@makeistan.com" },
  { name: "Ajmal Yaqoob", role: "Electrical Engineer", image: "/images/team/ajmal.jpeg", imagePosition: "object-center" as const, href: "https://www.linkedin.com/in/ajmal-yaqoob-47485b267", email: "info@makeistan.com" },
  { name: "Yazdan Ali Khan", role: "Electrical Engineering Student at GIKI", image: "/images/team/yazdan.jpg", href: "https://www.linkedin.com/in/yazdan-ali-khan-9525742ba/", email: "info@makeistan.com" },
  { name: "Malaika Mashroof Khan", role: "Electrical Engineering Student at GIKI", image: "/images/team/malaika.jpg", href: "https://www.linkedin.com/in/malayika-mashroof-a5917029b", email: "info@makeistan.com" },
  { name: "Natasha Mehmood", role: "Entrepreneurship Lead at Makeistan", image: "/images/team/natasha.jpg", href: "https://www.linkedin.com/in/natasha-m-36279892", email: "info@makeistan.com" },
  { name: "Nisha", role: "Mechanical Engineering Graduate at GIKI", image: "/images/team/nishajpg.jpg", href: "https://www.linkedin.com/in/nisha-sher-675865187", email: "info@makeistan.com" },
  { name: "Mohsin", role: "Computer Engineering Graduate at COMSATS Islamabad", image: "/images/team/mohsin.jpg", href: "https://www.linkedin.com/in/mohsin-aziz-41a805290", email: "info@makeistan.com" },
];

const ceo = {
  name: "Ehsam Ullah Baig",
  role: "CEO & Founder at Makeistan",
  image: "/images/team/ehsam.jpg",
  href: "https://www.linkedin.com/in/ehsamullahbaig",
  email: "info@makeistan.com",
  bio: "I've never believed that innovation belongs only in labs or big tech hubs. I believe it starts wherever someone dares to ask, 'What if we built something better?' That belief sparked Makeistan not as a typical startup, but as a space for young minds to explore, build, and create solutions that truly matter. Over the years, this journey has taken me into clean energy, climate tech, smart agriculture, and real world education across Pakistan. I'm still learning every step of the way. But I'm driven by the idea that meaningful change doesn't need to be massive it just needs to be made.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <BackButton />
      <main className="bg-background pt-20 text-foreground sm:pt-24">
        <TeamSection
          title="Our Team"
          description="A collective of educators, engineers, and makers helping young people turn curiosity into the confidence to build meaningful solutions."
          featuredMember={ceo}
          members={members}
        />
      </main>
      <Footer />
    </>
  );
}
