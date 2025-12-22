"use client"
import React,{useState,useRef} from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView} from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
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
    <h2>My Projects</h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6' >
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>

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