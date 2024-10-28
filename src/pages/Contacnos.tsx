import React from 'react';


const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-container">
      <h2>Contáctanos</h2>
      <form className="contact-form">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
