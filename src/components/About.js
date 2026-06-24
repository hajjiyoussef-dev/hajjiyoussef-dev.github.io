import { motion } from 'motion/react';
import { Code2, Terminal, Server, Network, Container, Coffee, MousePointerClick, Mail, MapPin, Calendar, Github, Linkedin, Database,  } from 'lucide-react';
// import { Code2 } from 'lucide-react';
import { useState } from 'react';
// import { useEffect } from 'react';

import { ImageWithFallback } from './ImageWithFallback';
import  Marquee  from "react-fast-marquee";
// import { GetSkillsFromGithub } from '../api/Skills';

// import { Code2, Terminal, Server, Network, Container, Coffee } from 'lucide-react';

const skills = [
  { name: 'C', icon: Code2, level: 95, color: 'cyan' },
  { name: 'C++', icon: Code2, level: 90, color: 'blue' },
  { name: 'Java', icon: Coffee, level: 88, color: 'purple' },
  { name: 'Linux', icon: Terminal, level: 92, color: 'cyan' },
  { name: 'Docker', icon: Container, level: 85, color: 'blue' },
  { name: 'Networking', icon: Network, level: 87, color: 'purple' },
  { name: 'Spring Boot', icon: Server, level: 83, color: 'cyan' },
];






export function About() {

    // const [skills, setSkills] = useState([]);


    // useEffect(() =>{
    //     GetSkillsFromGithub().then(setSkills).catch(console.error);
    // }, []);
    const [isProfileFlipped, setIsProfileFlipped] = useState(false);

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-16 neon-text">
            ABOUT<span className="text-cyan-400">_</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[650px] md:h-[650px] cursor-pointer"
            onClick={() => setIsProfileFlipped(!isProfileFlipped)}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: isProfileFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
             
              <div
                className="absolute w-full h-full"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="glass-card p-4 md:p-8 h-full relative group border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
  
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 flex flex-col items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity z-20">
                    <MousePointerClick className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 animate-bounce" />
                    <span className="text-xs text-cyan-400">Click me</span>
                  </div>

                  <div className="relative">

                    <div className="mb-4 md:mb-6 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
                        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                          <ImageWithFallback 
                            src="/IMG_20250816_021754_364.webp"
                            alt="Yhajji Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center mb-4 md:mb-7">
                      <h3 className="text-xl md:text-2xl mb-2 text-cyan-400">Yhajji</h3>
                      <p className="text-sm md:text-base text-gray-400">Software Engineer</p>
                      <p className="text-xs md:text-sm text-purple-400 mt-1">1337/42 Network</p>
                    </div>

                    <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center px-1">
                      Passionate about low-level programming, system architecture, and backend development.
                      Experienced in building robust applications ranging from UNIX-based systems to modern web platforms using Java and Spring Boot.
                      Skilled in designing efficient backend services and full stack web solutions, with a strong focus on clean, maintainable, and high-performance code.
                    </p>
                      
                  </div>

                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan" />
                  </div>
                </div>
              </div>
              <div
                className="absolute w-full h-full"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="glass-card p-4 md:p-8 h-full relative border-2 border-purple-500/60 overflow-hidden">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20" />

                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="text-center mb-4 md:mb-6">
                      <h3 className="text-xl md:text-2xl mb-2 text-purple-400 neon-text">
                        YHAJJI<span className="text-cyan-400">_</span>
                      </h3>
                      <p className="text-xs md:text-sm text-cyan-400">Full Stack Developer</p>
                    </div>

                    
                    <div className="flex-1 space-y-3 md:space-y-4 text-sm">
                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-gray-900/50 rounded-lg border border-cyan-500/30">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-gray-400 text-xs">Location</p>
                          <p className="text-gray-200 text-sm break-words">Morocco</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-gray-900/50 rounded-lg border border-purple-500/30">
                        <Calendar className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-gray-400 text-xs">Experience</p>
                          <p className="text-gray-200 text-sm break-words">3+ Years in Development</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-gray-900/50 rounded-lg border border-cyan-500/30">
                        <Code2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-gray-400 text-xs">Specialization</p>
                          <p className="text-gray-200 text-sm break-words">System Programming & Backend</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 md:gap-3 p-2 md:p-3 bg-gray-900/50 rounded-lg border border-purple-500/30">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <p className="text-gray-400 text-xs">Contact</p>
                          <p className="text-gray-200 text-xs md:text-sm break-all">yhajji@student.1337.ma && hajjiyoussef016@gmail.com </p>
                        </div>
                      </div>
                      

                    </div>

                    <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 justify-center">
                      <a 
                        href="https://github.com/yhajji" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 md:p-3 bg-gray-900/50 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                      <a 
                        href="https://linkedin.com/in/yhajji" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 md:p-3 bg-gray-900/50 border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    </div>

                    <p className="text-xs text-cyan-500 mt-3 md:mt-4 text-center">
                      Click to flip back
                    </p>
                  </div>

                  <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-purple-500 to-cyan-500" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20">
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-500 to-cyan-500" />
                    <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-purple-500 to-cyan-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl mb-8 text-purple-400">
              &lt;SKILLS /&gt;
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className={`w-5 h-5 text-${skill.color}-400`} />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${
                        skill.color === 'cyan'
                          ? 'from-cyan-500 to-cyan-400'
                          : skill.color === 'blue'
                          ? 'from-blue-500 to-blue-400'
                          : 'from-purple-500 to-purple-400'
                      } relative group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-shadow duration-300`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
        <div className="mt-8 pt-6 border-t border-cyan-500/20"> 
          <p className="text-xs text-gray-500 mb-4 text-center">TECH STACK</p>
            <Marquee
              autoFill
              pauseOnHover
              speed={40}
              gradient={false}
            >
              <div className="mt-3 pl-2 flex flex-wrap gap-3 justify-center">
                <div className="tech-badge group/tech">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs">C</span>
                </div>

                <div className="tech-badge group/tech">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span className="text-xs">C++</span>
                </div>

                <div className="tech-badge group/tech">
                  <Coffee className="w-5 h-5 text-orange-400" />
                  <span className="text-xs">Java</span>
                </div>

                <div className="tech-badge group/tech">
                  <div className="w-5 h-5 text-cyan-400 flex items-center justify-center">⚛</div>
                  <span className="text-xs">React</span>
                </div>

                <div className="tech-badge group/tech">
                  <div className="w-5 h-5 text-red-500 font-bold flex items-center justify-center">A</div>
                  <span className="text-xs">Angular</span>
                </div>

                <div className="tech-badge group/tech">
                  <Server className="w-5 h-5 text-red-400" />
                  <span className="text-xs">Laravel</span>
                </div>

                <div className="tech-badge group/tech">
                  <Server className="w-5 h-5 text-green-400" />
                  <span className="text-xs">Spring</span>
                </div>
                
                <div className="tech-badge group/tech">
                  <Database className="w-5 h-5 text-blue-400" />
                  <span className="text-xs">MySQL</span>
                </div>
                
                <div className="tech-badge group/tech">
                  <Terminal className="w-5 h-5 text-yellow-400" />
                  <span className="text-xs">Linux</span>
                </div>
                
                <div className="tech-badge group/tech">
                  <div className="w-5 h-5 text-orange-500 font-bold flex items-center justify-center text-sm">{'<>'}</div>
                  <span className="text-xs">HTML/CSS</span>
                </div>
                
                <div className="tech-badge group/tech">
                  <div className="w-5 h-5 text-purple-500 font-bold flex items-center justify-center">B</div>
                  <span className="text-xs">Bootstrap</span>
                </div>
                
                <div className="tech-badge group/tech">
                  <div className="w-5 h-5 text-cyan-400 font-bold flex items-center justify-center text-sm">T</div>
                  <span className="text-xs">Tailwind</span>
                </div>
                <div className="tech-badge group/tech">
                  {/* <div className="w-5 h-5 text-cyan-400 font-bold flex items-center justify-center text-sm">T</div> */}
                  <Container className='w-5 h-5 text-blue-400' />
                  <span className="text-xs">Docker</span>
                </div>
                <div className="tech-badge group/tech">
                  <div className="w-5 h-5 text-purple-500 font-bold flex items-center justify-center text-sm">P</div>
                  <span className="text-xs">Php</span>
                </div>
              </div>
            </Marquee>
            
        </div>
      </div>
    </section>
  );

}