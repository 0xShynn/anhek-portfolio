import React from 'react';

import Social from './social';
import { FormattedMessage, injectIntl } from 'react-intl';
import Nenderoidos from './nenderoidos';


const Hero = () => {
  return ( 
    <section className="flex flex-wrap max-w-md px-12 pt-20 pb-20 mx-auto sm:max-w-xl md:max-w-4xl md:py-20 lg:py-40">
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Nenderoidos className="w-40 md:w-48 lg:w-56" alt="Antonin Nhek Nenderoid version"/>
      </div>
      <div className="md:w-2/3 flex items-center mt-6 md:mt-0 md:pl-3">
        <div className="flex flex-col items-center text-primary dark:text-secondary md:items-start">
          <h2 className="mb-2 font-body text-xl text-gray-800 md:text-2xl dark:text-white">Antonin Nhek</h2>
          <h2 className="mb-4 text-2xl font-bold leading-snug text-center md:text-left sm:text-3xl md:text-4xl">
            <FormattedMessage id="hero.job_design" /> &<br/> <FormattedMessage id="hero.job_dev" />
          </h2>
          <h3 className="w-full mb-8 text-xl font-body text-gray-800 dark:text-gray-100 text-center md:text-left sm:text-1xl md:max-w-md lg:max-w-lg">
            <FormattedMessage id="hero.job_description" />
          </h3>
          <Social value="text-gray-800 hover:text-primary dark:text-white dark:hover:text-secondary"/>
        </div>
      </div>
    </section>
  );
}
 
export default injectIntl(Hero);