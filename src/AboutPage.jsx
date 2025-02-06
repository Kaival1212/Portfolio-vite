import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaUser, FaCode, FaLightbulb } from 'react-icons/fa';

function AboutPage() {
    const highlights = [
        { icon: FaUser, text: "Full Stack Developer" },
        { icon: FaLightbulb, text: "Innovative Thinker" },
        {text: 'Mobile App Developer', icon: FaUser},
    ];

    const text = "I'm Kaival Patel, a passionate developer and creator with a deep love for technology and innovation. I thrive on solving complex problems and bringing ideas to life through code and design. I'm always eager to learn and grow, constantly exploring new tools and trends to stay ahead in the ever-evolving tech world. Whether I'm working on a solo project or collaborating with a team, I bring energy, dedication, and a relentless pursuit of excellence to everything I do. For me, technology is more than just a career—it's a way to shape a better future, one line of code at a time.".split(" ");

    const { ref: headingRef, inView: isHeadingInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const { ref: highlightsRef, inView: isHighlightsInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const { ref: cvRef, inView: isCvInView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-20 px-4" id="about">
            <div className="w-full max-w-4xl">
                {/* Title Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl md:text-7xl font-extrabold"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                            About Me
                        </span>
                    </motion.h1>
                </motion.div>

                {/* Highlights Section */}
                <motion.div
                    ref={highlightsRef}
                    className="flex flex-wrap justify-center gap-6 mb-12"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-3 bg-gray-800/50 px-6 py-3 rounded-full"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ 
                                opacity: isHighlightsInView ? 1 : 0, 
                                x: isHighlightsInView ? 0 : -50 
                            }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <item.icon className="text-gradient-primary text-xl" />
                            <span className="text-white font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Text Content */}
                <div 
                    ref={headingRef}
                    className="text-white text-lg md:text-xl leading-relaxed mb-12 text-center  p-8 rounded-2xl backdrop-blur-sm"
                >
                    {text.map((el, i) => (
                        <motion.span
                            className="inline-block px-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                                opacity: isHeadingInView ? 1 : 0, 
                                y: isHeadingInView ? 0 : 20 
                            }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.02,
                                ease: 'easeOut'
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
                </div>

                {/* CV Download Button */}
                <motion.div
                    ref={cvRef}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                        opacity: isCvInView ? 1 : 0, 
                        y: isCvInView ? 0 : 30 
                    }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.a
                        href="/KaivalPatelCV.doc"
                        download="Kaival_CV"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload className="text-xl" />
                        Download My CV
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutPage;