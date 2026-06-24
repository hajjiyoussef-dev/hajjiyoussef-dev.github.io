import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, Terminal, Users, ArrowLeftRight, Gamepad2, Box, GitBranch, Coffee } from 'lucide-react';
import { useState } from "react";
import { ProjectDetail } from './ProjectDetail';



 export const projects = [
    {
        title: 'Minishell',
        description: 'A Unix shell implementation with pipe handling, redirections, and built-in commands. Deep dive into process management and system calls.',
        tags: ['C', 'Unix', 'Processes'],
        icon: Terminal,
        gradient: 'from-cyan-500 to-blue-500',
        fullDescription: 'Minishell is a comprehensive recreation of a Unix shell that handles complex command parsing, execution, and process management. Built entirely in C, this project demonstrates mastery of low-level system programming and Unix fundamentals.',
        features: [
        'Command parsing with quote handling (single and double)',
        'Environment variable expansion and management',
        'Multiple pipe support with proper file descriptor handling',
        'Input/output redirections (>, <, >>, <<)',
        'Built-in commands: echo, cd, pwd, export, unset, env, exit',
        'Signal handling (Ctrl-C, Ctrl-D, Ctrl-\\)',
        'Command history navigation'
        ],
        challenges: [
        'Implementing proper pipe chaining with multiple processes',
        'Managing file descriptors to prevent leaks',
        'Handling edge cases in command parsing (nested quotes, escaped characters)',
        'Proper signal handling without affecting child processes',
        'Memory management in complex parsing scenarios'
        ],
        learnings: [
        'Deep understanding of Unix process creation and management',
        'Advanced file descriptor manipulation',
        'Parser design and tokenization strategies',
        'Inter-process communication mechanisms',
        'System call mastery (fork, execve, wait, pipe, dup2)'
        ],
        technologies: ['C', 'Unix System Calls', 'Readline Library', 'Makefile'],
        githubUrl: 'https://github.com/hajjiyoussef-dev',
        demoUrl: '#'
    },
    {
        title: 'Philosophers',
        description: 'Dining philosophers problem solved with threads and mutexes. Explores synchronization, deadlock prevention, and concurrent programming.',
        tags: ['C', 'Threads', 'Mutexes'],
        icon: Users,
        gradient: 'from-purple-500 to-pink-500',
        fullDescription: 'An implementation of the classic dining philosophers problem using threads and mutexes. This project explores concurrent programming, race conditions, and deadlock prevention strategies in a multi-threaded environment.',
        features: [
        'Multiple philosophers eating, thinking, and sleeping concurrently',
        'Mutex-based fork synchronization',
        'Precise timing using microsecond precision',
        'Death detection and simulation termination',
        'Configurable number of philosophers and timing parameters',
        'Thread-safe state logging',
        'No data races or deadlocks'
        ],
        challenges: [
        'Preventing deadlocks in resource allocation',
        'Ensuring fair fork distribution among philosophers',
        'Precise timing control with usleep and gettimeofday',
        'Thread-safe printing without garbled output',
        'Detecting philosopher death quickly and reliably'
        ],
        learnings: [
        'Advanced threading concepts and pthread library',
        'Mutex synchronization and critical sections',
        'Race condition prevention techniques',
        'Deadlock detection and avoidance strategies',
        'Time-sensitive concurrent programming'
        ],
        technologies: ['C', 'POSIX Threads', 'Mutexes', 'Time Functions'],
        githubUrl: 'https://github.com/hajjiyoussef-dev',
        demoUrl: '#'
    },
    {
        title: 'push_swap',
        description: 'Efficient sorting algorithm using two stacks and limited operations. Optimized for performance with minimal moves.',
        tags: ['C', 'Algorithms', 'Optimization'],
        icon: ArrowLeftRight,
        gradient: 'from-blue-500 to-cyan-500',
        fullDescription: 'Push_swap challenges you to sort a stack of integers using only two stacks and a limited set of operations. The goal is to find the most efficient sorting algorithm with the minimum number of moves.',
        features: [
        'Efficient sorting with minimal operations',
        'Custom algorithm combining different sorting strategies',
        'Optimization for different input sizes (3, 5, 100, 500 numbers)',
        'Chunk-based sorting for large datasets',
        'Visual checker program to verify sorting',
        'Performance benchmarking tools',
        'Edge case handling (duplicates, already sorted, reverse sorted)'
        ],
        challenges: [
        'Designing an efficient algorithm with limited operations',
        'Optimizing for different input sizes',
        'Balancing between code complexity and performance',
        'Finding optimal chunk sizes for large datasets',
        'Minimizing worst-case scenario moves'
        ],
        learnings: [
        'Algorithm design and complexity analysis',
        'Stack data structure manipulation',
        'Optimization techniques and trade-offs',
        'Benchmarking and performance testing',
        'Problem decomposition strategies'
        ],
        technologies: ['C', 'Algorithm Design', 'Data Structures', 'Makefile'],
        githubUrl: 'https://github.com/hajjiyoussef-dev',
        demoUrl: '#'
    },
    {
        title: 'so_long',
        description: 'A 2D game engine built from scratch using MiniLibX. Features sprite rendering, collision detection, and map parsing.',
        tags: ['C', 'Graphics', 'Game Dev'],
        icon: Gamepad2,
        gradient: 'from-pink-500 to-purple-500',
        fullDescription: 'So_long is a 2D game where the player must collect all collectibles and escape. Built from scratch using the MiniLibX graphics library, it demonstrates fundamental game development concepts including rendering, collision detection, and game state management.',
        features: [
        'Custom 2D rendering engine',
        'Sprite-based graphics with texture mapping',
        'Smooth player movement with WASD/Arrow keys',
        'Collision detection system',
        'Map parsing and validation from .ber files',
        'Collectible tracking and win condition',
        'Move counter display',
        'Enemy patrol patterns (bonus)',
        'Animations for player and collectibles (bonus)'
        ],
        challenges: [
        'Working with the low-level MiniLibX library',
        'Implementing efficient rendering without flickering',
        'Map validation with flood fill algorithm',
        'Managing game state and event handling',
        'Creating smooth animations at 60 FPS'
        ],
        learnings: [
        'Graphics programming fundamentals',
        'Event-driven programming',
        'Game loop architecture',
        'Sprite management and rendering',
        'Map parsing and pathfinding algorithms'
        ],
        technologies: ['C', 'MiniLibX', 'Graphics Programming', 'Game Development'],
        githubUrl: 'https://github.com/hajjiyoussef-dev',
        demoUrl: '#'
    },
    {
        title: 'cub3d',
        description: 'Raycasting game engine inspired by Wolfenstein 3D. Implements 3D perspective rendering using 2D maps.',
        tags: ['C', 'Raycasting', '3D Graphics'],
        icon: Box,
        gradient: 'from-cyan-500 to-purple-500',
        fullDescription: 'Cub3D is a 3D game engine inspired by the legendary Wolfenstein 3D. Using raycasting techniques, it renders a 3D perspective from a 2D map, demonstrating advanced graphics programming and mathematical concepts.',
        features: [
        'Raycasting engine for 3D rendering',
        'Textured walls with different textures per direction',
        'Smooth player movement and rotation',
        'Collision detection with walls',
        'Minimap display',
        'Floor and ceiling rendering',
        'Door mechanics (bonus)',
        'Sprite rendering for objects (bonus)',
        'Mouse look controls (bonus)'
        ],
        challenges: [
        'Implementing the raycasting algorithm from scratch',
        'Texture mapping and avoiding distortion',
        'Performance optimization for real-time rendering',
        'Handling edge cases in ray-wall intersections',
        'Creating a convincing 3D illusion from 2D data'
        ],
        learnings: [
        'Raycasting algorithm and 3D projection',
        'Vector mathematics and trigonometry',
        'Texture sampling and interpolation',
        'Real-time rendering optimization',
        'Game engine architecture'
        ],
        technologies: ['C', 'MiniLibX', 'Raycasting', 'Linear Algebra', 'Graphics Programming'],
        githubUrl: 'https://github.com/hajjiyoussef-dev',
        demoUrl: '#'
    },
    {
        title: 'pipex',
        description: 'Recreation of shell pipe behavior. Handles multiple pipes and file redirections with proper process management.',
        tags: ['C', 'Pipes', 'I/O'],
        icon: GitBranch,
        gradient: 'from-blue-500 to-purple-500',
        fullDescription: 'Pipex recreates the behavior of shell pipes, allowing you to chain commands together. This project deepens understanding of process management, file descriptors, and inter-process communication.',
        features: [
        'Command piping between two processes',
        'Input and output file redirection',
        'Support for absolute and relative command paths',
        'Environment variable PATH parsing',
        'Multiple pipe support (bonus)',
        'Here_doc support with << delimiter (bonus)',
        'Proper error handling and memory management'
        ],
        challenges: [
        'Understanding and implementing pipe() system call',
        'Managing multiple file descriptors correctly',
        'Proper process synchronization with wait()',
        'Handling various error cases gracefully',
        'Avoiding file descriptor leaks'
        ],
        learnings: [
        'Inter-process communication via pipes',
        'File descriptor manipulation and redirection',
        'Process creation and management',
        'Command execution and PATH resolution',
        'System programming best practices'
        ],
        technologies: ['C', 'Unix System Calls', 'Process Management', 'File I/O'],
        githubUrl: 'https://github.com/hajjiyoussef-dev',
        demoUrl: '#'
    },
    {
        title: 'Java So_Long',
        description: 'Modern reimplementation of so_long using Java and Spring Boot. Features RESTful API, WebSocket support, and multiplayer capabilities.',
        tags: ['Java', 'Spring Boot', 'WebSocket'],
        icon: Coffee,
        gradient: 'from-purple-500 to-cyan-500',
        fullDescription: 'A modern, web-based reimplementation of the classic so_long game using Java and Spring Boot. This project brings the 2D game to the web with real-time multiplayer capabilities, RESTful APIs, and a responsive frontend.',
        features: [
        'RESTful API for game state management',
        'Real-time multiplayer using WebSocket',
        'Player authentication and session management',
        'Leaderboard system with persistent storage',
        'Responsive web interface',
        'Game replay functionality',
        'Admin dashboard for game monitoring',
        'Docker containerization'
        ],
        challenges: [
        'Implementing real-time game state synchronization',
        'Managing concurrent player connections',
        'Designing efficient game state updates',
        'Ensuring fair gameplay in multiplayer mode',
        'Scaling WebSocket connections'
        ],
        learnings: [
        'Spring Boot framework and dependency injection',
        'WebSocket programming and STOMP protocol',
        'RESTful API design principles',
        'Database integration with JPA/Hibernate',
        'Full-stack web development',
        'Containerization with Docker'
        ],
        technologies: ['Java', 'Spring Boot', 'WebSocket', 'STOMP', 'PostgreSQL', 'Docker', 'Maven'],
        githubUrl: 'https://github.com/hajjiyoussef-dev',
        demoUrl: '#'
    },
];
export function Projects() {
    const [SelectedProject, setSelectedProject] = useState(null);


    return (

        <section id="projects"  className="relative py-20 px-4">
            <div className="max-w-7xl mx-auto" >
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 30}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                >
                    <h2 className="text-4xl md:text-5xl text-center mb-4 neon-text">
                        PROJECTS <span className="text-cyan-400">_</span>
                    </h2>
                    <p className="text-center text-gray-400 mb-16">
                        &lt; Building the future, one commit at a time /&gt;
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                        key={project.title}
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                        viewport={{once: true}}
                        className=" group relative "
                        onClick={() => setSelectedProject(project)}
                        >
                        <div className=" glass-card p-6 h-full flex flex-col  retative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] border-2 border-transparent hover:border-cyan-500/50 cursor-pointer ">
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                            <div className=" absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                <div className={`absolute right-0 top-0 w-full h-0.5 bg-gradient-to-l ${project.gradient}`}/>
                                <div className={`absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b ${project.gradient}`} />
                            </div>
                            <div className=" relative z-10">
                                <div className="mb-4">
                                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-shadow duration-300`}>
                                        <project.icon className="w-8 h-8 text-cyan-400" />
                                    </div>
                                </div>

                                <h3 className=" text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300"> {project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) =>(
                                        
                                        <span 
                                        className="text-xs px-3 py-1 bg-gray-800/50 text-cyan-400 border border-cyan-500/30 rounded-full"
                                        key={tag}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 group/btn">
                                        <Github className="w-4 h-4"/>
                                        <span className="text-sm">Code</span>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-transparent border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-black transition-all duration-300">
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="text-sm">Demo</span>
                                    </button>
                                </div>
                            </div>

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan" />
                            </div>
                        </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* <ProjectDetail 
            project={SelectedProject} 
            onClose={() => setSelectedProject(null)} 
            /> */}
                <AnimatePresence>
                    {SelectedProject && (
                    <ProjectDetail
                    project={SelectedProject}
                    onClose={() => setSelectedProject(null)}
                />
                )}
                </AnimatePresence>
        </section>
     


    );

}