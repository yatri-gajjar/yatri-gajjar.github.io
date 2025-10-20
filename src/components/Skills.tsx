import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      category: "Brand Design",
      items: [
        "Brand Identity",
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
      ],
      color: "from-purple-500 to-pink-500",
      position: "top-0 left-0",
    },
    {
      category: "Graphic Design",
      items: ["Print Design", "Poster Design", "Typography", "Layout Design"],
      color: "from-pink-500 to-yellow-500",
      position: "top-0 right-0",
    },
    {
      category: "Digital Design",
      items: ["UI/UX Design", "Web Design", "Social Media", "Motion Graphics"],
      color: "from-yellow-500 to-purple-500",
      position: "bottom-0 left-0",
    },
    {
      category: "Creative Direction",
      items: [
        "Art Direction",
        "Concept Development",
        "Campaign Design",
        "Illustration",
      ],
      color: "from-purple-500 to-pink-500",
      position: "bottom-0 right-0",
    },
  ];

  const tools = [
    { name: "Photoshop", level: 95 },
    { name: "Illustrator", level: 98 },
    { name: "InDesign", level: 90 },
    { name: "After Effects", level: 80 },
    { name: "XD", level: 85 },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 lg:px-12" ref={ref}>
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
                Expertise
              </span>
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <h3
                  className={`text-2xl md:text-3xl mb-6 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                >
                  {skill.category}
                </h3>
                <div className="space-y-3">
                  {skill.items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + i * 0.05,
                      }}
                      className="flex items-center gap-3 text-white/80 group-hover:text-white transition-colors"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                      <span className="text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"
        >
          <h3 className="text-3xl md:text-4xl mb-12 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Professional Tools
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg text-white">{tool.name}</span>
                  <span className="text-sm text-white/60">{tool.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tool.level}%` } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
