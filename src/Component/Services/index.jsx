import React from 'react'
import './servicio.css'
import project from './projec.json'
function Service() {
  return (
    <>
      <div className='containerservice'>
        <div className='services'>
          <h3>Servicios</h3>
          <h1>Que ofrecemos</h1>
          <label>El mercado de servicios informáticos en Cartagena es significativo porque no se cuenta con muchas empresas que se especialice en brindar los 3 servicios en una misma compañía que son Mantenimiento, Desarrollo y Redes, especialmente con el crecimiento constante de empresas de diversos sectores que requieren soluciones tecnológicas para mejorar sus operaciones.</label>
        </div>
      </div>
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
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Service