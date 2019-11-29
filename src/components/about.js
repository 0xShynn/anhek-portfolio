import React from 'react';
import { FormattedMessage } from 'react-intl';
import Portrait from './portrait';
import Obfuscate from "react-obfuscate"
import { MdKeyboardArrowRight } from "react-icons/md"


const About = () => {
  return (
    <section id="about" className="flex flex-col mx-auto px-6 sm:px-10 md:px-6 py-12 max-w-md sm:max-w-2xl sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto w-48 md:w-56 mb-6 md:mb-8 rounded-full overflow-hidden">
        <Portrait/>
      </div>    
      <div className="text-gray-800 dark:text-white">
        <p className="text-2xl mb-6 md:text-3xl text-gray-600 dark:text-secondary_light">
          <FormattedMessage id="about.title" />
        </p>
        <p className="text-1xl sm:text-2xl font-header font-bold leading-snug">
          <FormattedMessage id="about.intro" /><br /><br /><br />
        </p>
        <p className="">
          <FormattedMessage id="about.text1" /><br /><br /><br />
          <FormattedMessage id="about.text2" /><br /><br /><br />
        </p>
        <div className="flex flex-col sm:flex-row">
          <ul className="text-lg mr-10 list">
            <li className="text-xl font-bold uppercase font-header text-gray-700 dark:text-secondary_light mb-4">
              <FormattedMessage id="about.interests.title" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.interests.1" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.interests.2" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.interests.3" />            
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.interests.4" />
            </li>
            <li className="mb-6 sm:mb-0">
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.interests.5" />
            </li>
          </ul>
          <ul className="text-lg list">
            <li className="text-xl font-bold uppercase font-header text-gray-700 dark:text-secondary_light mb-4">
              <FormattedMessage id="about.personality.title" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.personality.1" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.personality.2" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.personality.3" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.personality.4" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.personality.5" />
            </li>
          </ul>  
        </div>
        <br /><br /><br />
        <p className="pb-10 md:pb-16">
          <FormattedMessage id="about.text3" />
        </p>
        <p className="text-xl md:text-2xl dark:text-secondary_light border-t border-gray-400 dark:border-gray-700 pt-10 md:pt-16">
          <FormattedMessage id="about.text4" />
        </p>
        <br /><br />
        <div className="flex justify-center">
          <div className="text-center py-3 px-6 md:py-4 md:px-8 rounded border border-gray-400 dark:border-gray-700 inline-block">
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