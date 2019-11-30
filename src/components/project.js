import React from 'react';
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"
import { IoIosCode, IoIosArrowRoundForward } from "react-icons/io"

const Projet = ({ title, title_fr, description, description_fr, img, tags, url, source_url }) => {
    
  const tagList = tags.length ? (
    tags.map((tag) => {
      return (
        <span className="px-2 py-1 mb-2 mr-2 text-sm text-gray-800 border border-gray-400 rounded dark:border-gray-700 dark:text-gray-400" key={tag}>{tag}</span>
      )
    })
  ) : (
    <div>No tags</div>
  );

  const intl = useIntl();
  const lang = intl.locale;  
  const selectedTitle = (lang === 'fr' ? (`${title_fr}`) : (`${title}`));
  const selectedDescription = (lang === 'fr' ? (`${description_fr}`) : (`${description}`));  

  return (
    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-20 lg:mb-32" key={selectedTitle}>
      <div className="text-gray-800 dark:text-white">
        <a href={url} title={selectedTitle}>
          <Img 
            fluid={img} 
            className="rounded shadow-lg" 
            alt={selectedTitle} 
          />
        </a>
        <div className="py-3 mt-2 info">
          <h4 className="mb-2 text-2xl font-bold align-text-top light dark font-header md:text-2xl">
            <a href={url} className="">
              {selectedTitle} <IoIosArrowRoundForward className="inline" />
            </a>
          </h4>
          <p className="block mb-5 text-gray-700 dark:text-white">
            {selectedDescription}{` `}
            { source_url ? (
              <a href={source_url} className="break-words light dark"><IoIosCode className="inline"/> Source</a>
            ) : ("")}
          </p>
          <div className="flex flex-wrap">{tagList}</div>
        </div>
      </div>
    </div>
  );
}
 
export default Projet;