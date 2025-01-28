import React from 'react'
import './ProjectsCard.css'

export const ProjectsCard = ({details}) => {
  return (
    <section className='projects_card'>
        <h6>{details.title}</h6>

        <div className='info'>{details.features}</div>

    </section>
  )
}
