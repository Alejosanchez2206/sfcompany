import React from 'react'
import './home.css'
import LogoMangos from '../../assets/mangos.png'

function index() {
  return (
    <div className='container_home'>
      <div className='contenido_info'>
        <h1>Mango's Company</h1>
        <p>
          Mango's Company, fundada en 2024, es una startup de desarrollo web y software.
          
        </p>
        <p>
          Nos especializamos en soluciones a medida que abarcan desde sistemas ERP complejos hasta aplicaciones móviles
          innovadoras y sitios web dinámicos. Nuestra misión es ofrecer productos que no solo cumplen con las expectativas
          de nuestros clientes, sino que también los ayudan a alcanzar nuevos niveles de eficiencia y crecimiento.
        </p>
       
        <a href='#contact'>Contact Me</a>
      </div>
      <div className='contenido_img'>
        <img className='logo_mangos' src={LogoMangos} alt="mangos_logo" />
      </div>
    </div>
  )
}

export default index