import React from 'react';

import nenderoid from '../svg/anhek-nenderoid.svg'
import nenderoiddark from '../svg/anhek-nenderoid-dark.svg'
import Social from './social';


const Hero = () => {
  return ( 
    <section className="flex flex-wrap max-w-md px-12 pt-20 pb-20 mx-auto sm:max-w-xl md:max-w-4xl md:py-20 lg:py-40">
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <img src={nenderoid} className="w-40 dark:hidden md:w-48 lg:w-56" alt="Antonin Nhek Nenderoid version" />
        <img src={nenderoiddark} className="w-40 dark:inline hidden md:w-48 lg:w-56" alt="Antonin Nhek Nenderoid version" />
      </div>
      <div className="md:w-2/3 flex items-center mt-4 md:mt-0 md:pl-3">
        <div className="flex flex-col items-center text-primary dark:text-secondary_dark md:items-start">
          <h2 className="mb-4 text-2xl font-semibold text-center md:text-left sm:text-3xl lg:text-3xl xl:text-4xl"><span className="inline-block mb-2 text-xl text-gray-800 md:text-2xl dark:text-white">Antonin Nhek</span><br/> Visual Designer &<br/> Junior Front-End Developer</h2>
          <h3 className="w-full mb-8 text-xl text-gray-800 dark:text-gray-100 text-center md:text-left sm:text-1xl md:max-w-md lg:max-w-lg">I enjoy crafting meaningful and intuitive solutions with pixels and code.</h3>
          <Social value="text-gray-800 dark:text-white dark:hover:text-secondary_dark link"/>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;