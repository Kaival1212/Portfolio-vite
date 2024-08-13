import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
    {
        id: 1,
        name: 'React.js',
        description: 'A JavaScript library for building dynamic and responsive user interfaces, widely used for single-page applications.',
        level: 90,
        logo: '⚛️',
    },
    {
        id: 2,
        name: 'Laravel + Inertia.js',
        description: 'A powerful PHP framework combined with Inertia.js to build modern, full-stack web applications with a seamless user experience.',
        level: 80,
        logo: '🚀',
    },
    {
        id: 3,
        name: 'Python',
        description: 'A high-level programming language known for its readability, versatility, and extensive use in data science, AI, and web development.',
        level: 85,
        logo: '🐍',
    },
    {
        id: 4,
        name: 'PHP',
        description: 'A server-side scripting language that powers a significant portion of the web, ideal for building robust back-end services.',
        level: 85,
        logo: '🐘',
    },
    {
        id: 5,
        name: 'Java',
        description: 'A versatile and widely-used programming language, known for its portability across platforms and strong object-oriented principles.',
        level: 70,
        logo: '☕',
    },
    {
        id: 6,
        name: 'Swift',
        description: 'A powerful and intuitive programming language for macOS, iOS, watchOS, and tvOS development, known for its performance and safety.',
        level: 75,
        logo: '🕊️',
    },
    {
        id: 7,
        name: 'TensorFlow',
        description: 'An open-source library for machine learning and AI, widely used for building and deploying neural networks and other machine learning models.',
        level: 60,
        logo: '🧠',
    },
    {
        id: 8,
        name: 'More Learning Coming...',
        description: 'Always eager to expand my skill set! Currently diving into cloud technologies and DevOps practices. Stay tuned for more updates!',
        level: 20,
        logo: '🚧',
    },
];



function SkillsPage() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [titleref, intitleView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });


    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const gridVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.7,
                delay: 0.2,
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <div id="skills" className="py-20 px-4 md:px-8 lg:px-16 md:pb-60">
            <motion.h2
            ref={titleref}
                className="text-4xl md:text-6xl font-extrabold text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: intitleView ? 1 : 0 , y: intitleView ?  0 : 50}}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                    My Skills
                </span>
            </motion.h2>

            <motion.div
                ref={ref}
                variants={gridVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {skillsData.map(skill => (
                    <motion.div
                        key={skill.id}
                        variants={itemVariants}
                        className="bg-gray-800 rounded-xl p-6 h-full m-6"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
                            background: 'linear-gradient(145deg, #2d3748, #1a202c)'
                        }}
                    >
                        <div className='flex flex-col text-slate-50 justify-between items-center text-center h-full'>
                            <div className="text-4xl mb-4">{skill.logo}</div>
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-sm text-gray-300 mb-4">{skill.description}</p>
                            <div className="w-full">
                                <div className="flex justify-between text-sm mb-1">
                                    <span>Skill level:</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5">
                                    <motion.div
                                        className="bg-gradient-to-r from-green-400 via-yellow-300 to-red-500 h-2.5 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: inView ? `${skill.level}%` : 0}}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7, delay: 0.8 }}
            >
                <p className="text-gray-400 text-lg">Explore my skill set as I continue to grow and learn new technologies.</p>
            </motion.div>
        </div>
    );
}

export default SkillsPage;
