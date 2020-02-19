import React from 'react';
import { FormattedMessage } from 'react-intl';
import Portrait from './portrait';
import { MdKeyboardArrowRight } from "react-icons/md"
import Stack from './stack';
import Integration from './icons/integration';
import Design from './icons/design';
import Development from './icons/development';

const About = () => {

  return (
    <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-2xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32">
      <div className="w-48 h-48 mx-auto mb-10 overflow-hidden rounded-full md:w-56 md:h-56 md:mb-12">
        <Portrait/>
      </div>
      <div className="text-gray-800 dark:text-white">
        <p className="mx-auto mb-16 text-2xl font-bold leading-snug text-left md:text-center md:mb-24 sm:text-2_5xl md:text-3xl lg:text-4xl font-header">
          {/* <FormattedMessage id="about.intro" /><br /><br /><br /> */}
          Après des années de graphisme et une reconversion en programmation web, je propose mes services en tant que Développeur Front-end freelance.
        </p>
        <div className="flex flex-col mb-12 lg:-mx-6 lg:flex-row">
          <div className="w-full mx-auto mb-12 text-center lg:mx-6 lg:w-1/3">
            <Design className="w-16 mx-auto mb-6 sm:w-20"/>
            <h3 className="mb-2 font-semibold text-2_5xl lg:text-3xl font-header text-primary dark:text-secondary">Web Design</h3>
            <p className="text-1xl md:text-2xl">Je conçois le design de vos sites web et applications.</p>
          </div>
          <div className="w-full mx-auto mb-12 text-center lg:mx-6 lg:w-1/3">
            <Integration className="w-16 mx-auto mb-6 sm:w-20"/>
            <h3 className="mb-2 font-semibold text-2_5xl lg:text-3xl font-header text-primary dark:text-secondary">Intégration</h3>
            <p className="text-1xl md:text-2xl">Je réalise l'intégration web de vos maquettes en Responsive Design.</p>
          </div>
          <div className="w-full mx-auto mb-12 text-center lg:mx-6 lg:w-1/3">
            <Development className="w-16 mx-auto mb-6 sm:w-20"/>
            <h3 className="mb-2 font-semibold text-2_5xl lg:text-3xl font-header text-primary dark:text-secondary">Développement</h3>
            <p className="text-1xl md:text-2xl">Je développe la partie Front-end de vos projets (JAMstack).</p>
          </div>
        </div>
        <div>
          <Stack/>
        </div>
        <div className="flex flex-col md:flex-row">
          <ul className="w-full mb-8 text-xl list lg:w-1/2 lg:mx-auto md:mb-0 md:mr-8">
            <li className="mb-4 font-bold uppercase text-1xl md:text-2xl text-primary font-header dark:text-secondary">
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
          <ul className="w-full mb-8 text-xl list lg:w-1/2 lg:mx-auto md:mb-0">
            <li className="mb-4 font-bold uppercase text-1xl md:text-2xl text-primary font-header dark:text-secondary">
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
        </div>
      </div>
    </section>
  );
}

export default About;