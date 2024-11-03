import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

function Projects() {
    const projects = [
        { id: 1, name: 'HolyFits (Laravel)', description: 'Elevate your e-commerce experience with this sleek Laravel-powered platform.', tech: 'PHP + Vite', link: 'http://holyfits.kaival.co.uk', emoji: '👚' },
        { id: 2, name: 'HolyFits', description: 'Revolutionizing fashion with a cutting-edge Print-on-Demand solution.', tech: 'Shopify', link: 'https://holyfits.com', emoji: '🛍️' },
        { id: 3, name: 'ChemFab Engineers', description: 'Showcasing engineering excellence through an immersive React-based website.', tech: 'React.js', link: 'https://chemfab.web.app/', emoji: '🏭' },
        { id: 4, name: 'Binary Decode', description: 'Transform binary data into captivating images for efficient storage and sharing.', tech: 'Python', link: 'https://github.com/Kaival1212/Binary-Decode', emoji: '🔢' },
        { id: 5, name: 'FitnessGPT', description: 'Your AI-powered fitness companion for personalized workout and diet advice.', tech: 'React.js', link: 'https://fitness-gptt.web.app/', emoji: '🏋️' },
        { id: 6, name: 'bet365-ai', description: 'Harness the power of AI to predict football match outcomes with precision.', tech: 'Tensorflow + Python', link: 'https://github.com/Kaival1212/bet365-ai', emoji: '⚽' },
        { id: 7, name: 'Music App', description: 'Immerse yourself in a harmonious iOS music experience with this sleek frontend.', tech: 'Swift', link: 'https://github.com/Kaival1212/MS-app', emoji: '🎵' },
        { id: 8, name: 'FitnessX App', description: 'Track your fitness journey and crush your goals with this intuitive iOS app.', tech: 'Swift', link: 'https://github.com/Kaival1212/FitnessX-APP', emoji: '🏃' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/kaival-patel-6a3614252', color: 'text-blue-400' },
        { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Kaival1212', color: 'text-gray-400' },
        { name: 'Email', icon: FaEnvelope, href: 'mailto:kaival225@gmail.com', color: 'text-yellow-400' },
        { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/kaival3074/', color: 'text-pink-400' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const isMobileOrTablet = window.innerWidth < 768;

    const [titleRef, inTitleView] = useInView({
        triggerOnce:  true ,
        threshold: 0.1,
    });

    const [ref, inView] = useInView({
        triggerOnce: isMobileOrTablet ? true : false,
        threshold: 0.1,
    });

    function Card({ project, index }) {
        return (
            <motion.div
                className="bg-gray-900 p-6 rounded-lg shadow-lg m-4 w-full sm:w-80 md:w-96 cursor-pointer"
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
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400 mb-2">Tech: {project.tech}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    View Project
                </a>
            </motion.div>
        );
    }

    return (
        <div className="py-16" ref={ref}>
            <motion.div
                ref={titleRef}
                id="projects"
                className="text-4xl md:text-6xl font-extrabold text-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inTitleView || isMobileOrTablet ? 1 : 0, y: inTitleView || isMobileOrTablet ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    My Projects
                </span>
            </motion.div>

            <div className="flex flex-wrap justify-center items-stretch w-full">
                {projects.map((project, index) => (
                    <Card key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* Cool Ending Section */}
            <motion.div
            className="text-center py-16 "
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h2 
                className="text-4xl font-bold text-white mb-6"
                variants={itemVariants}
            >
                Thank you for visiting!
            </motion.h2>
            <motion.p 
                className="text-gray-300 mb-12 max-w-2xl mx-auto"
                variants={itemVariants}
            >
                I'm constantly working on new and exciting projects. 
                Feel free to reach out or follow me on my journey!
            </motion.p>
            <motion.div 
                className="flex justify-center items-center space-x-8"
                variants={containerVariants}
            >
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${link.color} hover:text-white transition-colors duration-300`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <link.icon size={40} />
                        <span className="sr-only">{link.name}</span>
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>


        </div>
    );
}

export default Projects;
