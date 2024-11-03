import React from 'react';
import { motion, useScroll } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import FrontPage from './frontPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import Projects from './Projects';
import { Helmet } from 'react-helmet';
import WorkingOn from './WorkingOn';


const App = () => {

  // const { ref: headingRef, inView: isHeadingInView } = useInView({
  //   triggerOnce: false, // Trigger animation only once
  //   threshold: 0.2, // 20% of the element must be in view to trigger
  // });





  return (

    <div className=" animate-gradient  h-auto  relative">


      <head>
        <title>Kaival's Portfolio</title>
        <meta name="description" content="I'm Kaival Patel, a passionate developer..." />
        <meta property="og:url" content="https://kaival.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kaival's Portfolio" />
        <meta property="og:description" content="I'm Kaival Patel, a passionate developer..." />
        <meta property="og:image" content="https://kaival.co.uk/memoji.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaival's Portfolio" />
        <meta name="twitter:description" content="I'm Kaival Patel, a passionate developer..." />
        <meta name="twitter:image" content="https://kaival.co.uk/memoji.png" />
      </head>



      <nav className='flex justify-around w-full items-center p-6 z-50 md:flex-row flex-col fixed backdrop-blur-xl	overflow-x-hidden'>

        <div className='flex  items-center gap-4 '>
          <motion.img
            src="/KLogo.png"
            alt="Kaival Logo"
            className="w-16 h-16 rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <motion.h1
            className="font-['Montserrat',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-extralight text-4xl tracking-widest cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Kaival
          </motion.h1>
        </div>

        <motion.ul
          className="flex text-slate-50 gap-8 p-4 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg mt-4 md:mt-0 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* <motion.a
            href='#about'
            whileHover={{
              scale: 1.2,
              color: "#32cd32",
              textShadow: "0px 0px 8px rgba(50, 205, 50, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer transition ease-in-out duration-200"
          >
            About Me
          </motion.a> */}
          <motion.a
            whileHover={{
              scale: 1.2,
              color: "#5c8aa9",
              textShadow: "0px 0px 8px rgba(55, 255, 70, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer transition ease-in-out duration-200"
            href='#skills'
          >
            Skills
          </motion.a>
          <motion.a
            href='#workingon'
            whileHover={{
              scale: 1.2,
              color: "#ff6347",
              textShadow: "0px 0px 8px rgba(255, 99, 71, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer transition ease-in-out duration-200"
          >
            Working On
          </motion.a>

          <motion.a
            href='#projects'
            whileHover={{
              scale: 1.2,
              color: "#1e90ff",
              textShadow: "0px 0px 8px rgba(30, 144, 255, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer transition ease-in-out duration-200"
          >
            Projects
          </motion.a>
        </motion.ul>


      </nav>

      <FrontPage className="text-green-100 flex flex-col md:flex-row justify-around pt-72 p-10  items-center " />
      <AboutPage />
      <SkillsPage />
      <WorkingOn />
      <Projects />

    </div>

  );
};

export default App;
