import React from 'react';

import { FormattedMessage, injectIntl } from 'react-intl';
import { useIntl } from "gatsby-plugin-intl"

import Nenderoidos from './nenderoidos';
import Button from './button';


const Hero = () => {
  const intl = useIntl();

  return (
    <section className="flex flex-wrap max-w-md px-6 py-10 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl md:py-20 lg:py-40">
      <div className="flex items-center justify-center w-full md:w-1/3">
        <Nenderoidos className="w-40 transition duration-500 ease-in-out transform md:w-48 lg:w-56 hover:scale-110" alt="Antonin Nhek Nenderoid version"/>
      </div>
      <div className="flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-3 lg:pl-6">
        <div className="flex flex-col items-center text-primary dark:text-secondary md:items-start">
          <h1 className="mb-2 text-xl text-center text-gray-800 font-body md:text-2xl lg:text-3xl dark:text-secondary_light">
          <FormattedMessage id="hero.job_hi" /> <span className="font-bold"><FormattedMessage id="author" /></span>
          </h1>
          <h2 className="mb-4 text-2.5xl font-bold leading-tight text-center md:text-left sm:text-3xl md:text-4xl lg:text-5xl">
            <FormattedMessage id="hero.job_design" /> &<br/> <FormattedMessage id="hero.job_dev" />
          </h2>
          <h3 className="w-full mb-6 text-xl text-center text-gray-800 font-body dark:text-gray-100 md:text-left sm:text-1xl md:text-2xl md:max-w-md lg:max-w-xl">
            <FormattedMessage id="hero.job_description" /> <span className=""><FormattedMessage id="hero.job_availability" /></span>
          </h3>
          <div className="flex flex-col items-center md:flex-row">
            <Button
              link="#contact"
              style={ `mb-4 md:mb-0 md:mr-4` }
              text={<FormattedMessage id="global.sendMail" />}
            />
            <Button
              link={intl.formatMessage({ id: "global.resume" })}
              style={ `mb-4 md:mb-0 md:mr-4` }
              text={<FormattedMessage id="global.downloadResume" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default injectIntl(Hero);