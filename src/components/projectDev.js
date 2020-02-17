import React from 'react';
import Img from "gatsby-image"
import { useIntl, injectIntl, Link } from "gatsby-plugin-intl"
import { FiExternalLink, FiArrowRight } from "react-icons/fi"
import { FaGithubAlt } from "react-icons/fa"

const ProjectDev = ({ title, title_fr, description, description_fr, img, tags, tags_fr, url, source_url }) => {

  const intl = useIntl();
  const lang = intl.locale;

  const selectedTitle = (lang === 'fr' ? (`${title_fr}`) : (`${title}`));
  const selectedDescription = (lang === 'fr' ? (`${description_fr}`) : (`${description}`));

  const handleImageStyle = "transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1 ";
  const handleImageLink = (
    url === '/graphic-design' ? (
      <Link to={url}>
        <Img
          fluid={img}
          className={handleImageStyle}
          alt={selectedTitle}
        />
      </Link>
    ) : (
      <a href={url} title={selectedTitle}>
        <Img
          fluid={img}
          className={handleImageStyle}
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

  const tagsList = () => {
    const tagsSpace = "mx-1"
    const tagsStyle = "px-2 pt-1 pb-0 mb-2 text-gray-500 bg-gray-800 rounded dark:text-gray-400";

    if (lang === 'fr') {
      return tags_fr.map((tag, i) => [
        i > 0 && <span className={tagsSpace}/>,
        <span className={tagsStyle} key={i}>{tag} </span>
      ])
    } else {
      return tags.map((tag, i) => [
        i > 0 && <span className={tagsSpace}/>,
        <span className={tagsStyle} key={i}>{tag} </span>
      ])
    }
  }

  return (
    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-20" key={selectedTitle}>
      <div className="text-gray-800 dark:text-white">
        <div className="mb-6">
          {handleImageLink}
        </div>
        <div>
          <h4 className="mb-2 text-2xl font-bold md:text-2.5xl font-header">
            {handleTitleLink}
            {handleSourceUrl}
          </h4>
          <p className="block mb-6 dark:text-white">
            {selectedDescription}{` `}
          </p>
          <div className="flex flex-wrap">{tagsList()}</div>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(ProjectDev)