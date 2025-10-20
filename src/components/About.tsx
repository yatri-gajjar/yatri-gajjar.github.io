import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Palette, Zap, Heart } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Palette,
      title: "Creativity",
      description: "Pushing boundaries with innovative design solutions",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Staying ahead with cutting-edge design trends",
      gradient: "from-pink-500 to-yellow-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality in every project",
      gradient: "from-yellow-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Loving what I do and it shows in my work",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 lg:px-12" ref={ref}>
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
                About Me
              </span>
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Crafting Visual Magic
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <h3 className="text-3xl mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Hello, I'm Yatri!
              </h3>
              <p className="text-lg text-white/70 leading-relaxed mb-4">
                A passionate graphic designer with a keen eye for aesthetics and a love for creating visual experiences that tell compelling stories. With over 5 years of experience, I specialize in brand identity, creative campaigns, and visual communication.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-4">
                My design philosophy centers around understanding the client's vision and translating it into stunning visual solutions that not only look beautiful but solve real problems.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                From branding and packaging to digital design and poster art, I bring creativity, professionalism, and attention to detail to every project.
              </p>
            </div>
          </motion.div>

          {/* Right - Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1699568542323-ff98aca8ea6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwYXJ0fGVufDF8fHx8MTc2MDk0MzE3OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative abstract"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/50 to-transparent" />
              
              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <p className="text-xl italic text-white/90">
                    "Design is not just what it looks like. Design is how it works."
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl text-center mb-12 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-full h-full text-white" />
                </div>
                <h4 className="text-xl mb-3 text-white">{value.title}</h4>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
