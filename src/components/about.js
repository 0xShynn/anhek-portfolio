import React from 'react';
import { FormattedMessage } from 'react-intl';
import Portrait from './portrait';
import { MdKeyboardArrowRight } from "react-icons/md"


const About = () => {

  return (
    <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 md:px-6 sm:max-w-2xl md:max-w-2xl lg:max-w-4xl sm:py-20 md:py-24 lg:py-32">
      <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full md:w-56 md:h-56 md:mb-12">
        <Portrait/>
      </div>
      <div className="text-gray-800 dark:text-white">
        <p className="font-bold leading-snug text-1xl sm:text-2xl md:text-3xl font-header">
          <FormattedMessage id="about.intro" /><br /><br /><br />
        </p>
        <p className="">
          <FormattedMessage id="about.text2" /><br /><br /><br />
        </p>
        <div className="flex flex-col p-6 mb-1 bg-gray-200 rounded-lg sm:p-10 md:flex-row dark:bg-gray-800">
          <ul className="w-full mr-10 text-xl list lg:w-1/2">
            <li className="mb-4 text-xl font-bold text-gray-700 uppercase font-header dark:text-secondary">
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
            <li className="mb-6 md:mb-0">
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.interests.5" />
            </li>
          </ul>
          <ul className="w-full text-xl list lg:w-1/2">
            <li className="mb-4 text-xl font-bold text-gray-700 uppercase font-header dark:text-secondary">
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
        <p>
          <FormattedMessage id="about.text3" />
        </p>

      </div>
    </section>
  );
}

export default About;