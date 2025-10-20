import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";

export default function App() {
  // const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
  //   null
  // );

  // const selectedProject = selectedProjectId
  //   ? projects.find((p) => p.id === selectedProjectId) || null
  //   : null;

  // const handleProjectClick = (projectId: string) => {
  //   setSelectedProjectId(projectId);
  //   // Prevent body scroll when project detail is open
  //   document.body.style.overflow = "hidden";
  // };

  // const handleCloseProject = () => {
  //   setSelectedProjectId(null);
  //   // Restore body scroll
  //   document.body.style.overflow = "unset";
  // };

  return (
    <div className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Navigation />
      <Hero />
      <About />
      <Skills />
      {/* <Projects onProjectClick={handleProjectClick} /> */}
      <Portfolio />
      <Contact />

      {/* Project Detail Modal */}
      {/* {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
      )} */}

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
