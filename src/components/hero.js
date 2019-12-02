import React from 'react';

import Social from './social';
import { FormattedMessage, injectIntl } from 'react-intl';
import Nenderoidos from './nenderoidos';


const Hero = () => {
  return ( 
    <section className="flex flex-wrap max-w-md px-12 pt-20 pb-20 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl md:py-20 lg:py-40">
      <div className="flex items-center justify-center w-full md:w-1/3">
        <Nenderoidos className="w-40 md:w-48 lg:w-56" alt="Antonin Nhek Nenderoid version"/>
      </div>
      <div className="flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-3 lg:pl-6">
        <div className="flex flex-col items-center text-primary dark:text-secondary md:items-start">
          <h1 className="mb-2 text-xl text-gray-800 font-body md:text-2xl dark:text-secondary_light">Antonin Nhek</h1>
          <h2 className="mb-4 text-2xl font-bold leading-tight text-center md:text-left sm:text-3xl md:text-4xl">
            <FormattedMessage id="hero.job_design" /> &<br/> <FormattedMessage id="hero.job_dev" />
          </h2>
          <h3 className="w-full mb-8 text-xl text-center text-gray-800 font-body dark:text-gray-100 md:text-left sm:text-1xl md:max-w-md lg:max-w-lg">
            <FormattedMessage id="hero.job_description" />
          </h3>
          <Social value="text-gray-800 hover:text-primary dark:text-white dark:hover:text-secondary"/>
        </div>
      </div>
    </section>
  );
}
 
export default injectIntl(Hero);