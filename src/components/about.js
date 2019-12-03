import React from 'react';
import { FormattedMessage } from 'react-intl';
import Portrait from './portrait';
import Obfuscate from "react-obfuscate"
import { MdKeyboardArrowRight } from "react-icons/md"


const About = () => {
  return (
    <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 md:px-6 sm:max-w-2xl sm:py-20 md:py-24 lg:py-32">
      <div className="w-48 mx-auto mb-6 overflow-hidden rounded-full md:w-56 md:mb-8">
        <Portrait/>
      </div>    
      <div className="text-gray-800 dark:text-white">
        <p className="mb-6 text-2xl text-gray-600 md:text-3xl dark:text-secondary_light">
          <FormattedMessage id="about.title" />
        </p>
        <p className="font-bold leading-snug text-1xl sm:text-2xl font-header">
          <FormattedMessage id="about.intro" /><br /><br /><br />
        </p>
        <p className="">
          <FormattedMessage id="about.text1" /><br /><br /><br />
          <FormattedMessage id="about.text2" /><br /><br /><br />
        </p>
        <div className="flex flex-col sm:flex-row">
          <ul className="mr-10 text-lg list">
            <li className="mb-4 text-xl font-bold text-gray-700 uppercase font-header dark:text-secondary_light">
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
            <li className="mb-4 text-xl font-bold text-gray-700 uppercase font-header dark:text-secondary_light">
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
        <br /><br />
        <p className="pb-10 md:pb-16">
          <FormattedMessage id="about.text3" />
        </p>
        <p className="pt-10 text-xl border-t border-gray-400 md:text-2xl dark:text-secondary_light dark:border-gray-700 md:pt-16">
          <FormattedMessage id="about.text4" />
        </p>
        <br /><br />
        <div className="flex justify-center">
          <div className="inline-block px-6 py-3 text-center border border-gray-400 rounded md:py-4 md:px-8 dark:border-gray-700">
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-xl">
              <FormattedMessage id="about.dropamail" />
            </p>
            <Obfuscate email="hello@anhek.dev" className="text-2xl text-center md:text-3xl text-primary dark:text-secondary dark:hover:text-secondary_light"/>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default About;