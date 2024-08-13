import React from 'react';
import { motion, useScroll } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import FrontPage from './frontPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import Projects from './Projects';
import { Helmet } from 'react-helmet';


const App = () => {

  // const { ref: headingRef, inView: isHeadingInView } = useInView({
  //   triggerOnce: false, // Trigger animation only once
  //   threshold: 0.2, // 20% of the element must be in view to trigger
  // });





  return (

    <div className=" animate-gradient  h-auto  relative">


      <Helmet>
        <title>Kaival's Portfolio</title>
        <meta name="description" content="Explore Kaival's portfolio, showcasing innovative projects, advanced skills, and a deep passion for computer science. Discover a blend of creativity and technical expertise in web development, programming, and problem-solving. Learn more about Kaival's journey, skills, and featured projects." />
        <meta name="keywords" content="Kaival, portfolio, web development, programming, computer science, projects, skills, frontend, backend, React, JavaScript" />
        <meta name="author" content="Kaival" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Kaival's Portfolio - Web Development and Programming Expertise" />
        <meta property="og:description" content="Explore Kaival's journey in computer science, featuring innovative projects, skills, and passion for coding." />
        <meta property="og:image" content="/vite.svg" />
        <meta property="og:url" content="https://www.kaival.co.uk" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaival's Portfolio - Web Development and Programming Expertise" />
        <meta name="twitter:description" content="Discover Kaival's innovative projects and deep passion for computer science, showcased in this portfolio." />
        <meta name="twitter:image" content="/vite.svg" />
      </Helmet>

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
          <motion.a
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
          </motion.a>
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
      <Projects />

    </div>

  );
};

export default App;



{/* <div className='flex items-center justify-around gap-4'>
<motion.img
  src="src/assets/KLogo.png"
  alt="Kaival Logo"
  className="w-16 h-16 rounded-full shadow-lg"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
/>
<motion.h1
  className="font-['Montserrat',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-800 font-extralight text-4xl tracking-widest cursor-pointer"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  whileHover={{ scale: 1.05 }}
>
  Kaival
</motion.h1>
</div> */}



{/* <motion.div
className='absolute flex justify-center items-center w-[15rem] h-[15rem] md:w-[45rem] md:h-[45rem] bottom-20 md:-bottom-36  -right-52 border-4 border-red-500 rounded-full bg-transparent -z-10'
initial={{ opacity: 0, y: -20, scale: 3, boxShadow: '0 0 1000px 100px rgba(255, 0, 0, 0.6)' }}
animate={{ opacity: 1, y: 100, scale: 1, boxShadow: '0 0 300px 20px rgba(255, 0, 0, 0.6)' }}
transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
whileHover={{ boxShadow: '0 0 400px 40px rgba(255, 0, 0, 0.6)' }}
>

<motion.img
  src='src/assets/memoji.png'
  className="w-80 h-80 rounded-full bg-transparent bg-clip-content"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
/>

</motion.div> */}



// <motion.div
// ref={headingRef}
// className="text-white font-bold text-6xl md:text-8xl lg:text-9xl uppercase tracking-wide text-center mb-6"
// initial={{ opacity: 0, y: 500 }}
// animate={{ opacity: isHeadingInView ? 1 : 0, y: isHeadingInView ? 0 : 50, textShadow: '0px 0px 15px rgba(255, 255, 255, 0.8)', }}
// transition={{ duration: 1.0, ease: 'easeOut' }}
// whileHover={{
//   scale: 1.1,
//   textShadow: '0px 0px 15px rgba(255, 255, 255, 0.8)',
// }}
// >
// About Me
// </motion.div>

// {/* Body Text */}
// <motion.p
// ref={bodyTextRef}
// className="text-gray-300 text-lg md:text-xl lg:text-2xl text-center max-w-3xl"
// initial={{ opacity: 0, y: 20 }}
// animate={{ opacity: isBodyTextInView ? 1 : 0, y: isBodyTextInView ? 0 : 20 }}
// transition={{ delay: 0.5, duration: 1.0, ease: 'easeOut' }}
// >
// I’m a passionate computer science student with a love for coding, problem-solving, and building innovative projects. My journey through programming has been driven by curiosity and a desire to create impactful solutions. Whether it's developing new applications, experimenting with cutting-edge technologies, or collaborating on exciting projects, I’m always eager to learn and grow in the tech world.
// </motion.p>

// <motion.button
// ref={buttonTextRef}
// className='hover:text-white hover:bg-transparent mt-10 text-2xl border p-4 rounded-3xl text-black bg-slate-50'
// initial={{ opacity: 0, y: 20 }}
// animate={{ opacity: isbuttonTextInView ? 1 : 0, y: isbuttonTextInView ? 0 : 50 }}
// transition={{ delay: 0.5, duration: 1.0, ease: 'easeOut' }}
// whileHover={{ scale: 1.2 }}
// >
// Get My CV!!!!
// </motion.button>