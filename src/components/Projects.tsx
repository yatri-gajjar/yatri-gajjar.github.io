/* eslint-disable react-refresh/only-export-components */
import imgImg1 from "figma:asset/2708ceed1e185653ec603e5500c4e12238c4585c.png";
import imgImg5 from "figma:asset/2e587861ddb3b29b9ca0227987878177c415b691.png";
import imgImg4 from "figma:asset/464687f2ef8122c9b68b436bb940828ffbb375dc.png";
import imgImg7 from "figma:asset/5419bac9e59af9f9d80ab06d5593ddacab6f42f7.png";
import imgImg6 from "figma:asset/66ef7249bd8da8ad17371e49a8fa23bd82361fc9.png";
import imgImg8 from "figma:asset/7af03dbca4f8118b7d616d4406a5fd884af76a74.png";
import imgImg2 from "figma:asset/8955d99489e3e5de9c1dc8e30f6ee02a54810c9d.png";
import imgImg3 from "figma:asset/e98e25db6c0336d40907bcdf5df878e47b997c52.png";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  client?: string;
  duration?: string;
  role: string;
  challenges?: string;
  solution?: string;
  results?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "jewellery-brand",
    title: "Luxury Jewellery Brand",
    category: "Brand Identity",
    year: "2024",
    description: "Complete brand identity design for a luxury jewellery brand",
    fullDescription:
      "Created a sophisticated and elegant brand identity for a luxury jewellery brand that reflects exclusivity and timeless beauty. The project included logo design, brand guidelines, packaging, and marketing materials.",
    image: imgImg2,
    tags: ["Branding", "Luxury", "Print Design", "Packaging"],
    client: "Jewellery Co.",
    duration: "3 months",
    role: "Lead Designer",
    challenges:
      "Creating a brand that stands out in a saturated luxury market while maintaining timeless appeal.",
    solution:
      "Developed a minimalist yet elegant visual language using premium materials, refined typography, and a sophisticated color palette.",
    results:
      "Successfully launched brand with 40% increase in customer engagement and recognition.",
    featured: true,
  },
  {
    id: "creative-posters",
    title: "Creative Poster Series",
    category: "Poster Design",
    year: "2024",
    description: "A collection of experimental and artistic poster designs",
    fullDescription:
      "An experimental poster series exploring bold typography, vibrant colors, and contemporary design aesthetics. Each poster tells a unique story through visual elements.",
    image: imgImg3,
    tags: ["Poster Design", "Typography", "Experimental", "Art"],
    duration: "2 months",
    role: "Designer & Art Director",
    challenges:
      "Balancing artistic expression with visual communication effectiveness.",
    solution:
      "Created a cohesive series that pushes creative boundaries while maintaining strong visual impact.",
    results:
      "Featured in multiple design publications and social media with 50K+ impressions.",
    featured: true,
  },
  {
    id: "southern-beans",
    title: "Southern Beans Campaign",
    category: "Brand Campaign",
    year: "2023",
    description: "Complete branding and marketing campaign for coffee brand",
    fullDescription:
      "Developed a comprehensive brand campaign for Southern Beans, a premium coffee brand. The project encompassed brand strategy, visual identity, packaging design, and multi-channel marketing materials.",
    image: imgImg5,
    tags: ["Branding", "Campaign", "Packaging", "Marketing"],
    client: "Southern Beans Co.",
    duration: "4 months",
    role: "Creative Director",
    challenges:
      "Differentiating the brand in a competitive coffee market while appealing to both traditional and modern consumers.",
    solution:
      "Created a warm, authentic brand experience combining rustic charm with contemporary design elements.",
    results:
      "20% increase in brand awareness and 35% sales growth in first quarter.",
    featured: true,
  },
  {
    id: "nutritionights",
    title: "Nutritionights Brand",
    category: "Brand Identity",
    year: "2023",
    description: "Health-focused brand identity and packaging design",
    fullDescription:
      "Comprehensive brand identity for Nutritionights, a health and wellness brand. Created a fresh, modern visual system that communicates trust, vitality, and premium quality.",
    image: imgImg7,
    tags: ["Branding", "Health", "Packaging", "Digital"],
    client: "Nutritionights",
    duration: "3 months",
    role: "Brand Designer",
    challenges:
      "Creating a brand that feels both scientific and approachable in the wellness space.",
    solution:
      "Developed a clean, vibrant identity with educational infographics and user-friendly packaging.",
    results: "Brand successfully launched across 50+ retail locations.",
  },
  {
    id: "graphic-designs",
    title: "Graphic Design Collection",
    category: "Graphic Design",
    year: "2024",
    description:
      "Diverse collection of graphic design projects and explorations",
    fullDescription:
      "A curated collection showcasing various graphic design projects including editorial layouts, social media graphics, and promotional materials for different clients.",
    image: imgImg4,
    tags: ["Graphic Design", "Editorial", "Social Media", "Print"],
    duration: "Ongoing",
    role: "Graphic Designer",
  },
  {
    id: "brand-stationery",
    title: "Brand Stationery Design",
    category: "Print Design",
    year: "2023",
    description: "Complete stationery system for corporate brand",
    fullDescription:
      "Designed a comprehensive stationery system including business cards, letterheads, envelopes, and branded materials that reflect the company's professional image.",
    image: imgImg8,
    tags: ["Print Design", "Branding", "Corporate", "Stationery"],
    client: "Corporate Client",
    duration: "1 month",
    role: "Print Designer",
  },
  {
    id: "portfolio-showcase",
    title: "Portfolio Website Design",
    category: "Digital Design",
    year: "2024",
    description: "Modern portfolio website design with interactive elements",
    fullDescription:
      "Created a modern, interactive portfolio website design featuring smooth animations, contemporary layouts, and engaging user experience.",
    image: imgImg1,
    tags: ["Web Design", "UI/UX", "Portfolio", "Interactive"],
    duration: "2 months",
    role: "UI/UX Designer",
  },
  {
    id: "coffee-campaign",
    title: "Coffee Brand Campaign",
    category: "Campaign Design",
    year: "2023",
    description: "Multi-channel marketing campaign for artisan coffee brand",
    fullDescription:
      "Developed a complete marketing campaign for an artisan coffee brand including social media, print ads, and in-store materials with a focus on craftsmanship and quality.",
    image: imgImg6,
    tags: ["Campaign", "Marketing", "Coffee", "Branding"],
    client: "Artisan Coffee Co.",
    duration: "2 months",
    role: "Campaign Designer",
  },
];

interface ProjectsProps {
  onProjectClick: (projectId: string) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-32 px-6 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <span className="text-sm bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                My Work
              </span>
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A selection of my recent work across branding, design, and creative
            campaigns
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => onProjectClick(project.id)}
              className="group relative cursor-pointer"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500">
                {/* Project Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1 bg-white/10 backdrop-blur-xl rounded-full text-sm border border-white/20">
                        {project.category}
                      </span>
                      <span className="text-white/60 text-sm">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-white group-hover:text-yellow-300 transition-colors">
                      <span className="text-sm">View Project</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>

                {/* Hover Effect Badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Grid */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-3xl md:text-4xl mb-12 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
            >
              More Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  onClick={() => onProjectClick(project.id)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative h-80 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500">
                    {/* Project Image */}
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-xs border border-white/20">
                          {project.category}
                        </span>
                      </div>
                      <h4 className="text-xl mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
