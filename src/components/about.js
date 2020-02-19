import React from 'react';
import { FormattedMessage } from 'react-intl';
import Portrait from './portrait';
import { MdKeyboardArrowRight } from "react-icons/md"
import { useStaticQuery, graphql } from 'gatsby';

const About = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {absolutePath: {regex: "/(stack-logos)/"}}) {
        edges {
          node {
            name
            publicURL
            relativePath
            absolutePath
          }
        }
      }
    }
  `)
  const svgLogos = data.allFile.edges;
  console.log(svgLogos);

  return (
    <section id="about" className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 md:px-6 sm:max-w-2xl md:max-w-2xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32">
      <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full md:w-56 md:h-56 md:mb-12">
        <Portrait/>
      </div>
      <div className="text-gray-800 dark:text-white">
        <p className="mx-auto mb-24 font-bold leading-snug text-center text-2_5xl md:text-3xl lg:text-4xl font-header">
          {/* <FormattedMessage id="about.intro" /><br /><br /><br /> */}
          Après des années de graphisme et une reconversion en programmation web, je propose mes services en tant que Développeur Front-end freelance.
        </p>
        <div className="flex flex-col mb-12 -mx-4 lg:flex-row">
          <div className="w-full mx-4 mb-12 text-center lg:w-1/3">
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary">Web Design</h3>
            <p className="text-2xl">Je designe vos interfaces de sites web et apps.</p>
          </div>
          <div className="w-full mx-4 mb-10 text-center lg:w-1/3">
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary">Intégration</h3>
            <p className="text-2xl">J’intègre vos maquettes en responsive webdesign</p>
          </div>
          <div className="w-full mx-4 mb-10 text-center lg:w-1/3">
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary">Développement</h3>
            <p className="text-2xl">Je développe vos sites et interfaces via la JAMstack</p>
          </div>
        </div>
        <div>
          <h3 className="mb-8 text-2xl font-bold text-center uppercase font-header">Ma Stack actuelle</h3>
          <div className="flex flex-wrap justify-center mx-auto mb-24 lg:max-w-3xl">
            {
              svgLogos.map(({node})=>(
                <img src={node.publicURL} alt={node.name} className="w-20 m-8 transition duration-500 ease-in-out transform hover:scale-125"/>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col rounded-lg md:flex-row">
          <ul className="w-full mb-8 text-xl list lg:w-1/2 md:mb-0">
            <li className="mb-4 text-xl font-bold uppercase text-primary font-header dark:text-secondary">
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
          <ul className="w-full mr-10 text-xl list lg:w-1/2">
            <li className="mb-4 text-xl font-bold uppercase text-primary font-header dark:text-secondary">
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