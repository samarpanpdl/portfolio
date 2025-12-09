"use client"
import React,{useState,useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content:(
            <ul>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Python</li>
                <li>Django</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>SQL & NoSQL Databases</li>
                <li>Git & Version Control</li>
                <li>RESTful APIs</li>
                
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content:(
            <ul>
                <li>BSc. Computer Science</li>
                <li>Kathmandu University</li>
            </ul>
        )
    },
    {
        title: 'Certification',
        id: 'certification',
        content:(
            <ul>
                <li>Full Stack Web Development - Coursera</li>
                <li>Python for Everybody - edX</li>     
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab,setTab]=useState('skills');
    const [isPending,startTransition]=useTransition();

    const handleTabChange = (id) =>{
        startTransition(()=>{
            setTab(id);
        })

    }
  return (
    <section className='text-white'>
        <div className='md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.png" alt="about image" width={500} height={500} className='rounded-lg'/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium, vero pariatur ipsa necessitatibus eum! Necessitatibus libero, dolorum cupiditate temporibus officia atque quae, optio in minima sint magni facilis ullam, quis explicabo.</p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={()=> handleTabChange("skills")} active={tab==="skills"}>{" "}Skills{" "}</TabButton>
                <TabButton selectTab={()=> handleTabChange("education")} active={tab==="education"}>{" "}Education{" "}</TabButton>
                <TabButton selectTab={()=> handleTabChange("certification")} active={tab==="certification"}>{" "}Certification{" "}</TabButton>
            </div>
            <div className='mt-8'>
                {TAB_DATA.find((t)=> t.id.toLowerCase() === tab.toLowerCase())?.content}
            </div>
        </div>
        </div>
    </section>
  )
}

export default AboutSection