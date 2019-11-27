import React from 'react';
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl"

const Projet = ({ title, title_fr, description, description_fr, img, tags, tags_fr, url }) => {
    
  const tagList = tags.length ? (
    tags.map((tag) => {
      return (
        <span className="text-sm mr-2 mb-2 py-1 px-2 rounded border-gray-400 border text-gray-800 dark:border-gray-700 dark:text-gray-400" key={tag}>{tag}</span>
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
    <div className="px-6 mb-12 sm:mb-16 md:mb-20 lg:mb-32 w-full md:w-1/2" key={selectedTitle}>
      <div className="text-gray-800 dark:text-white">
        <a className="" href={url} title={selectedTitle}>
          <Img fluid={img} className="rounded shadow-lg" alt={selectedTitle} />
        </a>
        <div className="info py-3 mt-2">
          <h4>
            <a href={url} className="light dark font-header inline-block mb-2 font-bold text-2xl md:text-2xl">
              {selectedTitle}
            </a>
          </h4>
          <p className="text-gray-700 dark:text-white mb-5 block">
            {selectedDescription}
          </p>
          <div className="flex flex-wrap">{tagList}</div>
        </div>
      </div>
    </div>
  );
}
 
export default Projet;