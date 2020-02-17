import React from 'react';
import Img from "gatsby-image"
import { useIntl, injectIntl, Link } from "gatsby-plugin-intl"
import { FiExternalLink, FiArrowRight } from "react-icons/fi"
import { FaGithubAlt } from "react-icons/fa"

const ProjectDev = ({ title, title_fr, description, description_fr, img, tags, url, source_url }) => {

  const tagList = tags.length ? (
    tags.map((tag) => {
      return (
        <span className="px-2 py-1 mb-2 mr-2 text-base text-gray-700 border border-gray-400 rounded dark:border-gray-700 dark:text-gray-400" key={tag}>{tag}</span>
      )
    })
  ) : (
    <div>No tags</div>
  );

  const intl = useIntl();
  const lang = intl.locale;

  const selectedTitle = (lang === 'fr' ? (`${title_fr}`) : (`${title}`));
  const selectedDescription = (lang === 'fr' ? (`${description_fr}`) : (`${description}`));

  const handleImageLink = (
    url === '/graphic-design' ? (
      <Link to={url}>
        <Img
          fluid={img}
          className="rounded shadow-lg"
          alt={selectedTitle}
        />
      </Link>
    ) : (
      <a href={url} title={selectedTitle}>
        <Img
          fluid={img}
          className="transition duration-500 ease-in-out transform rounded shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
          alt={selectedTitle}
        />
      </a>
    )
  );

  const handleTitleLink = (
    url === '/graphic-design' ? (
      <Link to={url} className="light dark">
        {selectedTitle} <FiArrowRight className="inline mb-1"/>
      </Link>
    ) : (
      <>
      <a href={url} className="light dark">
        {selectedTitle} 
      </a>
      <a href={url} className="light dark">
        <FiExternalLink className="inline mb-1 ml-4"/>
      </a>
      </>
    )
  )

  const handleSourceUrl = (
    source_url ? (
      <>
        <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-600 font-body">•</span>
        <a href={source_url} className="inline light dark">
          <FaGithubAlt className="inline mb-0 ml-1"/>
        </a>
      </>
    ) : ("")
  )

  return (
    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-20" key={selectedTitle}>
      <div className="text-gray-800 dark:text-white">
        {handleImageLink}
        <div className="py-3 mt-2 info">
          <h4 className="mb-2 text-2.5xl font-bold font-header">
            {handleTitleLink} 
            {handleSourceUrl}
          </h4>
          
          <p className="block mb-5 text-gray-700 dark:text-white">
            {selectedDescription}{` `}
          </p>
          <div className="flex flex-wrap">{tagList}</div>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(ProjectDev)