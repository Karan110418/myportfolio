import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../Data/Data.js'
import { SkillCard } from './SkillCard/SkillCard.js'
import { SkillsInfoCard } from './SkillsInfoCard/SkillsInfoCard.js'

export const Skills = () => {

    const[selectedskill,setselectedskill]=useState(SKILLS[0]);

    const HandleSelectedSkill=(data)=>
    {
        setselectedskill(data);
    };


  return (
   <section className='skills-container'>
    <h5>Technical Proficiency</h5>

    <div className='skills-content'>
        <div className='skills'>
            {SKILLS.map((item)=>(
                <SkillCard key={item} iconUrl={item.icon} title={item.title} isActive={selectedskill.title==item.title} onClick={()=>{HandleSelectedSkill(item)}} />
            ))}
        </div>
        <div className='skills-info'>
            <SkillsInfoCard heading={selectedskill.title} skills={selectedskill.skills} />
        </div>
    </div>
   </section>
  )
}
