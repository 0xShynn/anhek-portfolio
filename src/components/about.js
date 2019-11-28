import React from 'react';
import { FormattedMessage } from 'react-intl';
import Portrait from './portrait';
import Obfuscate from "react-obfuscate"
import { FiSend } from "react-icons/fi"


const About = () => {
  return (
    <section id="about" className="flex flex-col mx-auto px-6 py-12 max-w-md sm:max-w-lg md:max-w-2xl sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto w-48 md:w-56 mb-6 md:mb-8 rounded-full overflow-hidden">
        <Portrait/>
      </div>    
      <div className="text-gray-800 dark:text-white">
        <FormattedMessage id="about.title">
          {txt => <p className="text-2xl mb-6 md:text-3xl text-gray-600 dark:text-secondary_light">{txt}</p>}
        </FormattedMessage>
        <FormattedMessage id="about.intro">
          {txt => <p className="text-xl font-semibold leading-relaxed">{txt}</p>}
        </FormattedMessage><br />
        <p className="mb-6 md:mb-10">
          <FormattedMessage id="about.text1" /><br /><br />
          <FormattedMessage id="about.text2" /><br /><br />
          {/* <FormattedMessage id="about.text3" /><br /><br /> */}
          <FormattedMessage id="about.text4" />
        </p>
        <p className="text-lg md:text-xl font-semibold mb-8 md:mb-12 dark:text-secondary_light">
          <FormattedMessage id="about.text5" />
        </p> 
        <div className="flex justify-center">
          <div className="text-center py-3 px-6 md:py-4 md:px-8 rounded dark:bg-gray-800 bg-gray-200 inline-block">
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-xl">
              <FormattedMessage id="about.dropamail" />
            </p>
            <Obfuscate email="hello@anhek.dev" className="text-center text-2xl md:text-3xl text-primary dark:text-secondary dark:hover:text-secondary_light"/>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default About;