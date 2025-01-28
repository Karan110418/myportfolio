import React from 'react'
import './Projects.css'
import { PROJECTS } from '../../Data/Data1'
import { ProjectsCard } from './ProjectsCard/ProjectsCard'


export const Projects = () => {
  return (
    <section className='projects-container'>
        <h5>Projects</h5>

        <div className='projects-content'>
                {PROJECTS.map((item)=>(
                    <ProjectsCard key={item.title} details={item}/>
                ))}
        </div>
    </section>
  )
}
