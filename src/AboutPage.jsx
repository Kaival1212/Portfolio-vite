import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function AboutPage(props) {
    const text = "I’m Kaival Patel, a passionate developer and creator with a deep love for technology and innovation. I thrive on solving complex problems and bringing ideas to life through code and design. I’m always eager to learn and grow, constantly exploring new tools and trends to stay ahead in the ever-evolving tech world. Whether I’m working on a solo project or collaborating with a team, I bring energy, dedication, and a relentless pursuit of excellence to everything I do. For me, technology is more than just a career—it's a way to shape a better future, one line of code at a time.".split(" ");

    const { ref: headingRef, inView: isHeadingInView } = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0 // 20% of the element must be in view to trigger
    });

    const { ref: buttonTextRef, inView: isbuttonTextInView } = useInView({
        triggerOnce: false, // Trigger animation only once
        threshold: 0 // 20% of the element must be in view to trigger
    });

    return (
        <div className="flex flex-col items-center justify-center md:pt-60 md:pb-60 " id='about'>
            <motion.div className="w-full max-w-3xl text-center">
                <motion.span
                    className="block text-3xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-10 h-auto "
                    initial={{ opacity: 0, y: 50, scale: 0.5, }}
                    animate={{ opacity: 1, y: 0, scale: 1, }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 1, delay: 0.5 }}
                >
                    About Me
                </motion.span>

                <div className="text-white text-sm px-2 md:text-2xl leading-relaxed mb-10">
                    {text.map((el, i) => {
                        return (
                            <motion.span
                                ref={headingRef}
                                className="inline-block px-1 md:px-2 md:py-1 animate-text"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: isHeadingInView ? 1 : 0, y: isHeadingInView ? 0 : 10, textShadow: '0px 0px 5px rgba(255, 255, 255, 0.8)', }}
                                transition={{
                                    duration: 0.3,
                                    delay: i * 0.05,
                                    ease: 'linear'
                                }}
                                key={i}
                            >
                                {el}{" "}
                            </motion.span>
                        );
                    })}
                </div>

                <motion.a
                    ref={buttonTextRef}
                    className='hover:text-white hover:bg-transparent mb-6 text-sm md:text-xl border px-4 py-2 md:p-4 rounded-3xl text-black bg-slate-50'
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isbuttonTextInView ? 1 : 0, scale: isbuttonTextInView ? 1 : 0 }}
                    transition={{ delay: 0.3, duration: 1.0, ease: 'easeOut' }}
                    whileHover={{ scale: 1.2 }}
                    href='/Final.pdf'
                    download="Kaival_CV"
                >
                    Get My CV!!!!
                </motion.a>

            </motion.div>
        </div>
    );
}

export default AboutPage;
