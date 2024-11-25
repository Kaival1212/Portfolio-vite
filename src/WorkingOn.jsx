import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function WorkingOn() {
    const currentProjects = [
        {
            id: 1,
            name: 'Link Up',
            status: 'Initial Development',
            progress: 15,
            description: 'An AI-based dating platform that connects users based on their interests and preferences. without any subscription fees.',
            tech: 'Laravel + React.js',
            github: 'https://github.com/Kaival1212/LinkUP',
            preview: 'https://letslinkup.uk',
            emoji: '💘'
        },
        {
            id: 2,
            name: 'FitLogz',
            status: 'Planning Phase',
            progress: 5,
            description: 'A fitness tracking app that helps track their form, progress, and goals with ease.',
            tech: 'React Native + laravel',
            github: null,
            preview: null,
            emoji: '🏋️'
        },
    ];

    const isMobileOrTablet = window.innerWidth < 768;

    const [titleRef, inTitleView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref, inView] = useInView({
        triggerOnce: isMobileOrTablet ? true : false,
        threshold: 0.1,
    });

    function ProjectCard({ project, index }) {
        return (
            <motion.div
                className="bg-gray-900 p-6 rounded-lg shadow-lg m-4 w-full sm:w-80 md:w-96"
                initial={{
                    opacity: 0,
                    scale: 0,
                    x: index % 2 === 0 ? 100 : -100,
                }}
                animate={{
                    opacity: inView || isMobileOrTablet ? 1 : 0,
                    scale: inView || isMobileOrTablet ? 1 : 0,
                    x: inView || isMobileOrTablet ? 0 : index % 2 === 0 ? 100 : -100,
                    transition: {
                        duration: 0.8,
                        delay: index * 0.1,
                    },
                }}
                whileHover={{ scale: 1.05 }}
            >
                <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{project.emoji}</span>
                    <div>
                        <h3 className="text-xl font-bold text-white">{project.name}</h3>
                        <span className="text-sm text-gray-400">{project.status}</span>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <motion.div
                            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>
                    <span className="text-sm text-gray-400">{project.progress}% Complete</span>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-4">Tech: {project.tech}</p>

                <div className="flex space-x-4">
                    {project.github &&
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <FaGithub size={20} />
                        </a>
                    }
                    {project.preview && (
                        <a
                            href={project.preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                            <FaExternalLinkAlt size={20} />
                        </a>
                    )}
                </div>
            </motion.div>
        );
    }

    return (
        <div className="py-16" ref={ref} id='workingon' >
            <motion.div
                ref={titleRef}
                id="working-on"
                className="text-4xl md:text-6xl font-extrabold text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inTitleView || isMobileOrTablet ? 1 : 0, y: inTitleView || isMobileOrTablet ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
                    Currently Working On
                </span>
            </motion.div>

            <div className="flex flex-wrap justify-center items-stretch w-full">
                {currentProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}

export default WorkingOn;