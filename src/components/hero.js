import React from 'react';

import nenderoid from '../svg/anhek-nenderoid.svg'


const Hero = () => {
  return ( 
    <section className="flex flex-wrap mx-auto px-6 py-12 max-w-md sm:max-w-xl md:max-w-6xl md:py-20 lg:py-40">
      <div className="w-full md:w-1/3 mx-auto flex items-center justify-center">
        <img src={nenderoid} className="w-40 md:w-48 lg:w-56" alt="Antonin Nhek Nenderoid version" />
      </div>
      <div className="md:w-2/3 flex items-center mt-4 md:mt-0 md:pr-6">
        <div className="flex items-center flex-col text-white md:items-start">
          <h2 className="mb-4 font-semibold text-center text-xl md:text-left md:text-xl lg:text-3xl xl:text-4xl">Bonjour! I'm <span className="text-secondary">Antonin Nhek</span>, a visual designer & junior front-end developer based in Lyon, France.</h2>
          <h3 className="w-full text-gray-100 text-center md:text-left md:text-lg lg:text-2xl md:max-w-md lg:max-w-lg">I enjoy crafting meaningful and intuitive solutions with pixels and code.</h3>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;