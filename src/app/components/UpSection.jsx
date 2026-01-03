"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const UpSection = () => {
  return (
    <section className="lg:py-16">
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 items-center'>
        
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-6xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Aashutosh', 1000,
                'Python Developer', 1000,
                'Web Developer', 1000,
                'Django Developer', 1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          
          <p className='text-[#ECEFF4] text-base mb-6 lg:text-xl max-w-2xl'>
                                    I a motivated and skilled developer with expertise in Python, Django, and web development. I am passionate about creating efficient and scalable solutions to complex problems. With a strong foundation in programming and a keen eye for detail, I strive to deliver high-quality code and innovative applications.

          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-6 py-3 w-full sm:w-fit rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors'
            >
              Hire Me
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3 sm:mt-0'
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* IMAGE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='
          rounded-full bg-[#181818] 
        w-[250px] h-[250px] 
        lg:w-[400px] lg:h-[400px] 
        /* Margin logic: */
        ml-30         /* No margin on mobile */
        lg:ml-[30px]    /* Specific margin only on large screens */
        relative overflow-hidden border-4 border-slate-800'>
            <Image 
              src="/images/profile2.jpg" 
              alt="Aashutosh Profile" 
              fill
              className='object-cover'
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default UpSection;