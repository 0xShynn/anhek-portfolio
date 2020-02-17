import React from 'react';
import Form from './form';

const Contact = () => {
  return (
    <section id="contact" className="max-w-3xl px-6 py-6 mx-auto sm:px-10 lg:px-0 sm:py-10 md:py-20 lg:py-40">
      <header className="mb-20">
        <h2 className="mb-2 text-5xl text-white font-header">Prendre contact</h2>
        <p className="text-2xl text-white">N'hésitez pas à m'écrire pour toutes propositions de missions ou d'opportunités, je vous répondrais dans les plus brefs délais.</p>
      </header>
      <Form/>
    </section>
  );
}

export default Contact;