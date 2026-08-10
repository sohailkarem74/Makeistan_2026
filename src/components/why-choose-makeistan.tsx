"use client"

import {
  ParallaxScrollFeatureSection,
  type ParallaxFeature,
} from "@/components/ui/parallax-feature-section"

const features: ParallaxFeature[] = [
  {
    id: 1,
    title: "Hands-On Learning",
    description:
      "Students learn by building real projects in AI, robotics, and engineering instead of only theory-based instruction.",
    imageUrl: "/images/features/hands-on-learning.jpg",
    reverse: false,
  },
  {
    id: 2,
    title: "Expert Mentorship",
    description:
      "Our specialists guide teachers and students with practical support, implementation advice, and classroom best practices.",
    imageUrl: "/images/features/expert-mentorship.JPG",
    reverse: true,
  },
  {
    id: 3,
    title: "Proven Curriculum",
    description:
      "A structured, age-appropriate curriculum aligned with future-ready skills and measurable learning outcomes.",
    imageUrl: "/images/features/proven-curriculum.jpg",
    reverse: false,
  },
  {
    id: 4,
    title: "Flexible School Packages",
    description:
      "Customizable plans tailored to school size, budget, infrastructure, and academic goals for sustainable adoption.",
    imageUrl: "/images/features/flexible-school-packages.jpeg",
    reverse: true,
  },
]

export function WhyChooseMakeistan() {
  return (
    <section
      className="bg-background text-foreground"
      id="why-choose-makeistan"
    >
      <ParallaxScrollFeatureSection
        features={features}
        openerTitle="Why Makesitan?"
        openerKicker="What Makes Us Different"
        openerSubtitle="Makeistan goes beyond supplying robotics kits. We work with schools to bring AI, robotics, and coding into everyday learning through the right tools, curriculum, teacher training, and continued support. We want students across Pakistan to have the chance to experiment, build, solve problems, and turn their ideas into something they can create themselves."
      />
    </section>
  )
}

export default WhyChooseMakeistan
