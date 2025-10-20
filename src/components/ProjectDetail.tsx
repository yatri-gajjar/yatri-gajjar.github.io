import { motion, AnimatePresence } from "motion/react";
import { X, ArrowLeft, ExternalLink, Calendar, User, Clock } from "lucide-react";
import { Project } from "./Projects";
import { Button } from "./ui/button";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl overflow-y-auto"
      >
        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          onClick={onClose}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
        >
          <X className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={onClose}
          className="fixed top-6 left-6 z-50 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 rounded-full transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
          <span className="text-white text-sm">Back to Projects</span>
        </motion.button>

        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-32">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[60vh] rounded-3xl overflow-hidden mb-16"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1 bg-white/10 backdrop-blur-xl rounded-full text-sm border border-white/20">
                    {project.category}
                  </span>
                  <span className="text-white/60">{project.year}</span>
                </div>
                <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </motion.div>

          {/* Project Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {project.client && (
              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-sm text-white/60 mb-1">Client</div>
                <div className="text-white">{project.client}</div>
              </div>
            )}
            
            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-yellow-500 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-sm text-white/60 mb-1">Year</div>
              <div className="text-white">{project.year}</div>
            </div>

            {project.duration && (
              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-purple-500 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-sm text-white/60 mb-1">Duration</div>
                <div className="text-white">{project.duration}</div>
              </div>
            )}

            <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-sm text-white/60 mb-1">Role</div>
              <div className="text-white">{project.role}</div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-3xl mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Challenge */}
              {project.challenges && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                >
                  <h3 className="text-2xl mb-4 text-white">The Challenge</h3>
                  <p className="text-white/70 leading-relaxed">
                    {project.challenges}
                  </p>
                </motion.div>
              )}

              {/* Solution */}
              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                >
                  <h3 className="text-2xl mb-4 text-white">The Solution</h3>
                  <p className="text-white/70 leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              )}

              {/* Results */}
              {project.results && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="p-8 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-yellow-500/10 backdrop-blur-xl rounded-2xl border border-white/20"
                >
                  <h3 className="text-2xl mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Results & Impact
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {project.results}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <h3 className="text-xl mb-6 text-white">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm border border-white/20 text-white/80 hover:bg-white/20 transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-8 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-yellow-500/10 backdrop-blur-xl rounded-2xl border border-white/20"
              >
                <h3 className="text-xl mb-4 text-white">Interested in working together?</h3>
                <p className="text-white/70 mb-6 text-sm leading-relaxed">
                  Let's create something amazing for your brand.
                </p>
                <Button
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl"
                >
                  Get In Touch
                </Button>
              </motion.div>

              {/* Share (Optional) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
              >
                <h3 className="text-xl mb-4 text-white">Share Project</h3>
                <p className="text-white/60 text-sm mb-4">
                  Love this project? Share it with others!
                </p>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all text-sm text-white/80">
                    Share
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20 pt-12 border-t border-white/10 flex justify-center"
          >
            <Button
              onClick={onClose}
              variant="outline"
              className="px-8 py-6 border-2 border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white rounded-full"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to All Projects
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
