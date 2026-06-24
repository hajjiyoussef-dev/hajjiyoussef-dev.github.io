import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Code2, Zap, Target, Award } from 'lucide-react';


export function ProjectDetail({ project, onClose }) {
    if (!project) return null;
    const Icon = project.icon;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar glass-card border-2 border-cyan-500/30"
          onClick={(e) => e.stopPropagation()}
        >

          {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan pointer-events-none" /> */}
          
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`} />

          <div className="relative z-10 p-8 ">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-900/80 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 group"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-start gap-6 mb-8">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 shadow-[0_0_30px_rgba(6,182,212,0.2)]`}>
                <Icon className="w-12 h-12 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl mb-3 neon-text">
                  {project.title}<span className="text-purple-400">_</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-1.5 bg-gray-800/50 text-cyan-400 border border-cyan-500/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
                
            <div className="flex gap-4 mb-8">
              <a
                href={project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
              <a
                href={project.demoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <h3 className="text-2xl text-white">Overview</h3>
              </div>
              <p className="text-gray-400 leading-relaxed pl-9">
                {project.fullDescription}
              </p>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl text-white">Key Features</h3>
              </div>
              <ul className="space-y-2 pl-9">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-gray-400 flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-pink-400" />
                <h3 className="text-2xl text-white">Technical Challenges</h3>
              </div>
              <ul className="space-y-2 pl-9">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-400 flex items-start gap-3">
                    <span className="text-purple-400 mt-1">▹</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl text-white">Key Learnings</h3>
              </div>
              <ul className="space-y-2 pl-9">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="text-gray-400 flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">▹</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-cyan-500/30 text-cyan-300 rounded-lg`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24">
              <div className={`absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l ${project.gradient}`} />
              <div className={`absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t ${project.gradient}`} />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-24 h-24">
            <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${project.gradient}`} />
            <div className={`absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b ${project.gradient}`} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}