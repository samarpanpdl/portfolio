"use client"
import React,{useState,useTransition,useRef} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import {motion,useInView} from "framer-motion";
const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content:(
            <ul>
                
                <li>Python</li>                
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                
                
            </ul>
        )
    },
    {
        title: 'Framework',
        id: 'framework',
        content:(
            <ul>
                <li>React</li>
                <li>Next js</li>
                <li>Django</li>

            </ul>
        )
    },
    {
        title: 'Others',
        id: 'others',
        content:(
            <ul>
                <li>SQL & NoSQL Databases</li>
                <li>Git & Version Control</li>
                <li>RESTful APIs</li>
                <li></li>   
            </ul>
        )
    }
]

const AboutSection = () => {
    const ref = useRef(null);
    const isinView = useInView(ref,{once:true});
    const [tab,setTab]=useState('skills');
    const [isPending,startTransition]=useTransition();

    const handleTabChange = (id) =>{
        startTransition(()=>{
            setTab(id);
        })

    }
    const cardVariants = {
      initial: {y:50,opacity:0},
      animate: {y:0,opacity:1}
    }
  return (
    
    <section ref={ref} className='text-white' id='about'>
        <motion.div 
            variants={cardVariants} initial="initial" animate={isinView ? "animate" : "initial"} transition={{duration:2.0}}
        className='md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.png" alt="about image" width={500} height={500} className='rounded-lg'/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>
                I am a passionate developer with a strong foundation in Python, Django, and web development. I enjoy creating efficient and scalable solutions to complex problems. With a keen eye for detail and a commitment to high-quality code, I strive to deliver innovative applications that meet user needs and exceed expectations.
                </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={()=> handleTabChange("skills")} active={tab==="skills"}>{" "}Skills{" "}</TabButton>
                <TabButton selectTab={()=> handleTabChange("framework")} active={tab==="framework"}>{" "}Framework{" "}</TabButton>
                <TabButton selectTab={()=> handleTabChange("others")} active={tab==="others"}>{" "}Others{" "}</TabButton>
            </div>
            <div className='mt-8'>
                {TAB_DATA.find((t)=> t.id.toLowerCase() === tab.toLowerCase())?.content}
            </div>
        </div>
        </motion.div>
    </section>
  )
}

export default AboutSection