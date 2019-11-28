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


function SEO({ meta, lang, title }) {

  const intl = useIntl();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${intl.formatMessage({ id: "title" })}`}
      meta={[
        {
          name: `description`,
          content: `${intl.formatMessage({ id: "description" })}`,
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
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `${intl.formatMessage({ id: "author" })}`,
        },
        {
          name: `twitter:title`,
          content: `${intl.formatMessage({ id: "title" })}`,
        },
        {
          name: `twitter:description`,
          content:`${intl.formatMessage({ id: "description" })}`,
        },
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
