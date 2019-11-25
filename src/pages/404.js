import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={`404: ${intl.formatMessage({ id: "title" })}`}
    />
    <div className="flex flex-col mx-auto text-gray-900 dark:text-white px-12 py-32 md:px-40 lg:py-56 max-w-md sm:max-w-xl md:max-w-4xl">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl">
        <FormattedMessage id="notfound.header" />
      </h1>
      <p className="text-center text-xl">
        <FormattedMessage id="notfound.description" />
      </p>
      <Link to="/">Retourner à la page d'accueil</Link>
    </div>
  </Layout>
)

export default injectIntl(NotFoundPage)
