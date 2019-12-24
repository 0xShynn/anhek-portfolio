/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useIntl } from "gatsby-plugin-intl"


function SEO({ meta, lang, title, image }) {

  const intl = useIntl();
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={`%s | ${intl.formatMessage({ id: "title" })}`}
      titleTemplate={`${intl.formatMessage({ id: "title" })}`}
      meta={[
        {
          name: `description`,
          content: `${intl.formatMessage({ id: "description" })}`,
        },
        {
          name: `author`,
          content: `${intl.formatMessage({ id: "author" })}`,
        },
        {
          property: `og:title`,
          content: `${intl.formatMessage({ id: "title" })}`,
        },
        {
          property: `og:description`,
          content: `${intl.formatMessage({ id: "description" })}`,
        },
        {
          property: `og:image`,
          content: `${image}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `@anhek_`,
        },
        {
          name: `twitter:title`,
          content: `${intl.formatMessage({ id: "title" })}`,
        },
        {
          name: `twitter:description`,
          content:`${intl.formatMessage({ id: "description" })}`,
        },
        {
          name: `twitter:image`,
          content: `${image}`, 
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
