import React from 'react'
import './project.css'
import LogoMangos from '../../assets/mangos.png'
import project from '../../Component/Project/projec.json'
function Project() {
  return (
    <div className='containerProyectos'>  
      <ul class="cards">
        {project.map((project) => (
          <li>
            <a class="card">
              <img src={project.image} class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <img class="card__thumb" src="https://i.imgur.com/avatar.png" alt="" />
                  <div class="card__header-text">
                    <h3 class="card__title">{project.name}</h3>
                  </div>
                </div>
                <p class="card__description">{project.description}</p>
                <button className='btn-project'>View</button>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Project