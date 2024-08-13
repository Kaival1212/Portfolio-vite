import React from 'react';
import { motion } from 'framer-motion';

function FrontPage(props) {
    return (
        <div
            {...props}
        //className="min-h-screen flex flex-col justify-center items-center p-8"
        >
            <motion.div className='flex flex-col items-center justify-center '>
                <motion.h1
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 cursor-pointer font-extrabold md:text-7xl text-4xl leading-tight text-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.05 }}
                >
                    Kaival Patel <br />
                </motion.h1>
                <MotionSubDiv text={'Passionate Developer & Creator'} />
                <motion.p>

                </motion.p>

            </motion.div>

            <motion.div
                className='flex w-[15rem] mt-4 h-[15rem] md:w-[35rem] md:h-[35rem] border-4 border-red-500 rounded-full justify-center items-center'
                initial={{ opacity: 1, y: 0, scale: 1 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    boxShadow: [
                        '0px 0px 300px 20px rgba(255, 0, 0, 0.6)',  // Start position
                        '100px 0px 300px 20px rgba(255, 0, 0, 0.6)', // Right
                        '0px 100px 300px 20px rgba(255, 0, 0, 0.6)', // Bottom
                        '-100px 0px 300px 20px rgba(255, 0, 0, 0.6)',// Left
                        '0px -100px 300px 20px rgba(255, 0, 0, 0.6)',// Top
                        '0px 0px 300px 20px rgba(255, 0, 0, 0.6)'    // Back to start
                    ],
                }}
                transition={{
                    delay: 0.2,
                    duration: 1, 
                    ease: 'linear',
                    repeat: Infinity, 
                }}
                whileHover={{

                }}
            >
                <motion.img
                    src='/memoji.png'
                    className="w-[15rem] h-[15rem] md:w-[35rem] md:h-[35rem] rounded-full bg-transparent bg-clip-content shadow-2xl"
                    initial={{ scale: 3 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
            </motion.div>


        </div>
    );
}

export default FrontPage;


function MotionSubDiv({ text }) {
    return (

        <motion.span
            className="block text-2xl md:text-5xl font-bold text-white text-center cursor-pointer"
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 15px rgba(255, 255, 255, 0.8)',
            }}
        >
            {text}
        </motion.span>


    );
}