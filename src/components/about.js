import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useIntl } from "gatsby-plugin-intl"
import Portrait from './portrait';
import Obfuscate from "react-obfuscate"
import { MdKeyboardArrowRight, MdFileDownload } from "react-icons/md"
import { GoMail } from "react-icons/go"


const About = () => {
  const intl = useIntl();

  return (
    <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 md:px-6 sm:max-w-2xl md:max-w-2xl lg:max-w-3xl sm:py-20 md:py-24 lg:py-32">
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
        <div className="flex flex-col p-6 mb-1 bg-gray-200 rounded-lg sm:p-8 sm:flex-row dark:bg-gray-800">
          <ul className="w-full mr-10 text-lg list lg:w-1/2">
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
          <ul className="w-full text-lg list lg:w-1/2">
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
        <p className="pt-10 text-xl font-semibold text-center text-gray-700 border-t border-gray-400 md:text-2xl dark:text-secondary_light dark:border-gray-700 md:pt-16">
          <FormattedMessage id="about.text4" />
        </p>
        <div className="flex flex-wrap justify-center mt-6 text-xl md:mt-10">
          <a className="px-5 py-3 mb-4 mr-0 border rounded-lg sm:mb-0 sm:mr-4 border-primary dark:border-secondary md:py-4 md:px-8 md:text-2xl text-primary hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-secondary" href={intl.formatMessage({ id: "about.resume" })}>
            <MdFileDownload className="inline"/> <FormattedMessage id="about.downloadResume" />
          </a>
          <Obfuscate email="hello@anhek.dev" obfuscate={false}>
            <button className="px-5 py-3 border rounded-lg border-primary dark:border-secondary md:py-4 md:px-8 md:text-2xl text-primary hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-secondary">
              <GoMail className="inline mb-1 mr-1"/> <FormattedMessage id="about.sendMail" />
            </button>
          </Obfuscate>
        </div>
      </div>
    </section>
  );
}
 
export default About;