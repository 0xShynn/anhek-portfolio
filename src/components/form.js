import React from 'react';
import { FormattedMessage } from 'react-intl';

const Form = () => {

  const blockStyle = "mb-6 md:mb-10";
  const labelStyle = "text-white dark:text-gray-700 font-bold text-xl md:text-2xl font-header ";
  const inputStyle = "w-full px-3 py-3 mt-2 text-lg text-gray-800 bg-white border rounded border-primary_light focus:border focus:border-primary focus:outline-none font-body dark:bg-gray-100";

  return (
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="contact" value="contact" />

      <div className="flex flex-col md:flex-row">
        <div className={blockStyle + "w-full md:w-1/2 md:mr-6"}>
          <label className={labelStyle}>
            <FormattedMessage id="form.firstname"/>
            <input type="text" name="firstname" className={inputStyle} placeholder="Sena" required/>
          </label>
        </div>

        <div className={blockStyle + "w-full md:w-1/2"}>
          <label className={labelStyle}>
            <FormattedMessage id="form.lastname"/>
            <input type="text" name="name" className={inputStyle} placeholder="Kobayakawa" required/>
          </label>
        </div>
      </div>

      <div className={blockStyle}>
        <label className={labelStyle}>
          <FormattedMessage id="form.email"/>
          <input type="email" name="email" className={inputStyle} placeholder="s.kobayakawa@devilbats.jp" required/>
        </label>
      </div>

      <div className={blockStyle}>
        <label className={labelStyle}>
          <FormattedMessage id="form.message"/>
          <textarea name="message" className={inputStyle} rows="8" required></textarea>
        </label>
      </div>

      <div className="flex justify-center">
        <button type="submit" className="px-12 py-2 mt-6 text-xl text-center text-white rounded-full cursor-pointer bg-primary hover:bg-primary_medium md:text-1xl">
          <FormattedMessage id="form.send"/>
        </button>
      </div>

    </form>
  );
}

export default Form;