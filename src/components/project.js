import React from 'react';
import Img from "gatsby-image"
import { FaExternalLinkAlt } from "react-icons/fa"
import { useIntl } from "gatsby-plugin-intl"

const Projet = ({ title, title_fr, description, description_fr, img, tags, tags_fr, url }) => {
    
  const tagList = tags.length ? (
    tags.map((tag) => {
      return (
        <span className="text-sm mr-2 mb-2 py-1 px-2 rounded border-gray-400 border dark:border-gray-800 text-gray-800 dark:bg-gray-800 dark:text-gray-400" key={tag}>{tag}</span>
      )
    })
  ) : (
    <div>No tags</div>
  );

  const intl = useIntl();
  const lang = intl.locale;  

  return (
    <div className="px-6 mb-12 md:mb-20 w-full md:w-1/2" key={(lang === 'fr' ? (`${title_fr}`) : (`${title}`))}>
      <div className="text-gray-800 dark:text-white">
        <a className="" href={url} title={(lang === 'fr' ? (`${title_fr}`) : (`${title}`))}>
          <Img fluid={img} className="rounded shadow-lg"/>
        </a>
        <div className="info py-3 mt-2 flex justify-between items-end">
          <div>
            <div className="align-middle">
              <a href={url} className="link text-primary hover:text-tertiary dark:text-secondary_dark inline-block mb-1 font-bold text-2xl md:text-2xl dark:hover:text-secondary_dark">
                {(lang === 'fr' ? (`${title_fr}`) : (`${title}`))}
                <FaExternalLinkAlt className="react-icons inline mb-2 ml-1"/>
              </a>
            </div>
            <p className="text-gray-700 dark:text-gray-500 mb-4 block">
              {(lang === 'fr' ? (`${description_fr}`) : (`${description}`))}
            </p>
            <div className="flex flex-wrap">{tagList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Projet;