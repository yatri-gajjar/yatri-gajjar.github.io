import {
  ArrowRight,
  Briefcase,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const handleDownload = (url: string, filename: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="relative py-32 px-6 lg:px-12" ref={ref}>
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
                Downloads
              </span>
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Get My Work
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Download my complete portfolio and resume to explore my creative
            journey
          </p>
        </motion.div>

        {/* Download Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Portfolio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative"
          >
            <div className="relative p-10 lg:p-12 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-yellow-500/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden h-full flex flex-col">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-5 mb-8 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300"
                >
                  <Briefcase className="w-full h-full text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Portfolio
                </h3>

                {/* Description */}
                <p className="text-lg text-white/70 mb-6 leading-relaxed flex-grow">
                  A comprehensive showcase of my best design work including
                  branding, packaging, digital campaigns, and creative projects.
                </p>

                {/* File Info */}
                <div className="flex items-center gap-4 mb-8 text-white/60">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">PDF Format</span>
                  </div>
                  <div className="w-1 h-1 bg-white/30 rounded-full" />
                  <span className="text-sm">12.5 MB</span>
                </div>

                {/* Download Button */}
                <button
                  onClick={() =>
                    handleDownload(
                      "/yatri-portfolio.pdf",
                      "Yatri-Gajjar-Portfolio.pdf"
                    )
                  }
                  className="group/btn w-full px-8 py-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <Download className="w-5 h-5" />
                  <span className="text-lg">Download Portfolio</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute top-8 right-8 px-4 py-2 bg-yellow-500/20 backdrop-blur-xl rounded-full border border-yellow-500/30 flex items-center gap-2"
                >
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                  <span className="text-xs text-yellow-300">Featured</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group relative"
          >
            <div className="relative p-10 lg:p-12 bg-gradient-to-br from-pink-500/10 via-yellow-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden h-full flex flex-col">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-yellow-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-yellow-500 p-5 mb-8 group-hover:shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-300"
                >
                  <FileText className="w-full h-full text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                  Resume
                </h3>

                {/* Description */}
                <p className="text-lg text-white/70 mb-6 leading-relaxed flex-grow">
                  Detailed overview of my professional experience, skills,
                  education, and achievements in the design industry.
                </p>

                {/* File Info */}
                <div className="flex items-center gap-4 mb-8 text-white/60">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">PDF Format</span>
                  </div>
                  <div className="w-1 h-1 bg-white/30 rounded-full" />
                  <span className="text-sm">2.3 MB</span>
                </div>

                {/* Download Button */}
                <button
                  onClick={() =>
                    handleDownload(
                      "/yatri-resume.pdf",
                      "Yatri-Gajjar-Resume.pdf"
                    )
                  }
                  className="group/btn w-full px-8 py-5 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
                >
                  <Download className="w-5 h-5" />
                  <span className="text-lg">Download Resume</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-white/70">Updated January 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
