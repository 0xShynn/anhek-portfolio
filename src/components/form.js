import React from 'react';

const Form = () => {

  const blockStyle = "mb-8 ";
  const labelStyle = "text-white text-2xl font-header ";
  const inputStyle = "w-full px-3 py-3 mt-2 text-lg text-gray-800 bg-white border rounded-sm border-primary_light focus:border focus:border-primary focus:outline-none font-body ";

  return (
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="contact" value="contact" />

      <div className="flex flex-col md:flex-row">
        <div className={blockStyle + "w-full md:w-1/2 mr-6"}>
          <label className={labelStyle}>Prénom*
          <input type="text" name="firstname" className={inputStyle} placeholder="Camille" required/>
          </label>
        </div>

        <div className={blockStyle + "w-full md:w-1/2"}>
          <label className={labelStyle}>Nom*
          <input type="text" name="name" className={inputStyle} placeholder="Camille" required/>
          </label>
        </div>
      </div>

      <div className={blockStyle}>
        <label className={labelStyle}>Email*
          <input type="email" name="email" className={inputStyle} placeholder="mail@icloud.com" required/>
        </label>
      </div>

      <div className={blockStyle}>
        <label className={labelStyle}>Message*
          <textarea name="message" className={inputStyle} rows="4" placeholder="Bonjour, j'aurais aimé avoir un renseignement concernant..." required></textarea>
        </label>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="px-12 py-2 mt-6 text-xl text-center text-white rounded-full bg-primary hover:bg-primary_medium hover hover:text-white md:text-1xl dark:border-secondary_light dark:text-secondary_light dark:hover:bg-secondary dark:hover:border-secondary dark:hover:text-secondary_dark">Envoyer</button>
      </div>

    </form>
  );
}

export default Form;