import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FormattedMessage } from 'react-intl';

const About = () => {
  return (
    <section id="about" className="mx-auto px-6 py-12 max-w-md sm:max-w-lg md:max-w-2xl md:py-20 lg:py-32">
      <div className="text-gray-800 dark:text-white">
        <h3 className="text-4xl mb-2 dark:text-secondary">
          <FormattedMessage id="about.title" />
        </h3>
        <h4 className="intro font-bold text-2xl mb-10">
          <FormattedMessage id="about.intro" />
        </h4>
        <p className="mb-10">
          <FormattedMessage id="about.text1" /><br /><br />
          <FormattedMessage id="about.text2" /><br /><br />
          <FormattedMessage id="about.text3" />
        </p>
        <div className="flex flex-col sm:flex-row">
          <ul className="text-lg mb-4 mr-10 list">
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.1" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.2" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.3" />            
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.4" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.5" />
            </li>
          </ul>
          <ul className="text-lg list">
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.6" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.7" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.8" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.9" />
            </li>
            <li>
              <MdKeyboardArrowRight/>
              <FormattedMessage id="about.skills.10" />
            </li>
          </ul>          
        </div>       
      </div>
    </section>
  );
}
 
export default About;