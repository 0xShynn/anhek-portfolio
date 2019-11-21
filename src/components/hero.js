import React from 'react';

import nenderoid from '../svg/anhek-nenderoid.svg'
import Social from './social';


const Hero = () => {
  return ( 
    <section className="flex flex-wrap mx-auto px-12 pb-20 pt-20 max-w-md sm:max-w-xl md:max-w-4xl md:py-20 lg:py-40">
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img src={nenderoid} className="w-40 md:w-48 lg:w-56" alt="Antonin Nhek Nenderoid version" />
      </div>
      <div className="md:w-2/3 flex items-center mt-4 md:mt-0 md:pl-3">
        <div className="flex items-center flex-col text-white md:items-start">
          <h2 className="mb-4 font-semibold text-center text-2xl md:text-left sm:text-3xl lg:text-3xl xl:text-4xl"><span className="text-xl md:text-2xl text-secondary mb-2 inline-block">Antonin Nhek</span><br/> Visual Designer &<br/> Junior Front-End Developer</h2>
          <h3 className="w-full text-gray-100 text-center mb-8 md:text-left text-xl sm:text-1xl md:max-w-md lg:max-w-lg">I enjoy crafting meaningful and intuitive solutions with pixels and code.</h3>
          <Social value="text-white hover:text-secondary link"/>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;