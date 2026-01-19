"use client"
import React,{useState,useRef} from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView} from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Portfolio website built using React.js and Tailwind CSS.",
    image: "/images/projects/1.png",
    tag: ["All", "Next js"],
    gitUrl: "https://github.com/samarpanpdl/portfolio",
    previewUrl: "https://portfolio-orcin-theta-65.vercel.app/",
  },
  
  {
    id: 3,
    title: "E-commerce Application",
    description: "E-commerce web application built with React, Django and TailwindCSS stack.",
    image: "/images/projects/3.png",
    tag: ["All", "Django"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Blogging Website",
    description: "Blogging website built with React and Tailwind CSS.",
    image: "/images/projects/4.png",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isinView = useInView(ref,{once:true});
    const[tag,setTag] = useState("All");

    const handleTagChange = (newTag) =>{
        setTag(newTag)
    }
    const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
    const cardVariants = {
      initial: {y:50,opacity:0},
      animate: {y:0,opacity:1}
    }
  return (
    <> 
    <h2 className='text:4xl font-bold text-[#ECEFF4]'>My Projects</h2>
    <div className='text-[#ECEFF4] flex flex-row justify-center items-center gap-2 py-6' >
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
        <ProjectTag onClick={handleTagChange} name="React" isSelected={tag === "React"}/>
        <ProjectTag onClick={handleTagChange} name="Next js" isSelected={tag === "Next js"}/>
        <ProjectTag onClick={handleTagChange} name="Django" isSelected={tag === "Django"}/>

    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12" id="projects">
        {
        filteredProjects.map((project,index)=>(
          <motion.li
          key={index}
            variants={cardVariants} initial="initial" animate={isinView ? "animate" : "initial"} transition={{duration:0.5, delay: project.id * 0.2}}
          >
        <ProjectCard key={project.id}
        title={project.title} 
        description={project.description} 
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        />
        </motion.li>
        ))
        }
        </ul>
    </>
    
  )
}

export default ProjectsSection