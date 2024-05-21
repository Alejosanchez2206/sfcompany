import React from 'react'
import './contact.css'
function Home() {
  return (
    <div className='containercontact'>
      <h1>Contactanos</h1>
      <form  className="formcontac" accept-charset="UTF-8" action="https://www.formbackend.com/f/664decaabbf1c319" method="POST">
        <div className="fieldset">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="fieldset">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <button className='btn-contact' type="submit">Enviar</button>
      </form>
    </div>


  )
}

export default Home