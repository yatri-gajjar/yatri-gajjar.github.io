import { Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      fill="currentColor"
      d="M20.07 6.35H15V7.76h5.09ZM19 16.05a2.23 2.23 0 0 1-1.3.37A2.23 2.23 0 0 1 16 15.88a2.49 2.49 0 0 1-.62-1.76H22a6.47 6.47 0 0 0-.17-2 5.08 5.08 0 0 0-.8-1.73 4.17 4.17 0 0 0-1.42-1.21 4.37 4.37 0 0 0-2-.45 4.88 4.88 0 0 0-1.9.37 4.51 4.51 0 0 0-1.47 1 4.4 4.4 0 0 0-.95 1.52 5.4 5.4 0 0 0-.33 1.91 5.52 5.52 0 0 0 .32 1.94A4.46 4.46 0 0 0 14.16 17a4 4 0 0 0 1.46 1 5.2 5.2 0 0 0 1.94.34 4.77 4.77 0 0 0 2.64-.7 4.21 4.21 0 0 0 1.63-2.35H19.62A1.54 1.54 0 0 1 19 16.05Zm-3.43-4.12a1.87 1.87 0 0 1 1-1.14 2.28 2.28 0 0 1 1-.2 1.73 1.73 0 0 1 1.36.49 2.91 2.91 0 0 1 .63 1.45H15.41A3 3 0 0 1 15.52 11.93Zm-5.29-.48a3.06 3.06 0 0 0 1.28-1 2.72 2.72 0 0 0 .43-1.58 3.28 3.28 0 0 0-.29-1.48 2.4 2.4 0 0 0-.82-1 3.24 3.24 0 0 0-1.27-.52 7.54 7.54 0 0 0-1.64-.16H2V18.29H8.1a6.55 6.55 0 0 0 1.65-.21 4.55 4.55 0 0 0 1.43-.65 3.13 3.13 0 0 0 1-1.14 3.41 3.41 0 0 0 .37-1.65 3.47 3.47 0 0 0-.57-2A3 3 0 0 0 10.23 11.45ZM4.77 7.86H7.36a4.17 4.17 0 0 1 .71.06 1.64 1.64 0 0 1 .61.22 1.05 1.05 0 0 1 .42.44 1.42 1.42 0 0 1 .16.72 1.36 1.36 0 0 1-.47 1.15 2 2 0 0 1-1.22.35H4.77ZM9.61 15.3a1.28 1.28 0 0 1-.45.5 2 2 0 0 1-.65.26 3.33 3.33 0 0 1-.78.08h-3V12.69h3a2.4 2.4 0 0 1 1.45.41 1.65 1.65 0 0 1 .54 1.39A1.77 1.77 0 0 1 9.61 15.3Z"
    />
  </svg>
);

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { URLS } from "../constants/contstants";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gajjaryatri91@gmail.com",
      link: URLS.EMAIL,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      link: null,
      gradient: "from-pink-500 to-yellow-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "Linkedin",
      url: URLS.LINKED_IN,
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: URLS.INSTAGRAM,
      color: "hover:text-pink-400",
    },
    {
      icon: BehanceIcon,
      label: "Behance",
      url: URLS.BEHANCE,
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-12" ref={ref}>
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
                Get In Touch
              </span>
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something
            amazing!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/60 mb-2">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 group-hover:bg-clip-text transition-all"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-xl text-white">{info.value}</div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"
            >
              <h3 className="text-xl mb-6 text-white/90">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 text-white ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="hidden lg:block p-8 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-yellow-500/10 backdrop-blur-xl rounded-3xl border border-white/20"
            >
              <p className="text-lg text-white/80 italic leading-relaxed">
                "I'm always excited to collaborate on creative projects and
                bring innovative ideas to life. Let's connect!"
              </p>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-white/80 mb-3">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 focus:border-purple-500/50 rounded-2xl text-white placeholder:text-white/30 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/80 mb-3">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 focus:border-pink-500/50 rounded-2xl text-white placeholder:text-white/30 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/80 mb-3">
                    Your Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 focus:border-yellow-500/50 rounded-2xl text-white placeholder:text-white/30 resize-none transition-all duration-300"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="group w-full px-8 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
                >
                  <Send className="w-5 h-5" />
                  <span className="text-lg">Send Message</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </form>
            </div>

            {/* Floating decoration */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl border border-white/20 -z-10"
            />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-white/60 mb-4">
            © 2025 Yatri Gajjar. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Designed with ❤️ and creativity
          </p>
        </motion.div>
      </div>
    </section>
  );
}
