import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Nenderoidos from '../components/nenderoidos';
import { IoIosArrowRoundForward } from "react-icons/io"

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={`${intl.formatMessage({ id: "pages.404" })}`}
    />
    <div className="flex flex-col mx-auto text-gray-900 dark:text-white px-12 py-20 md:px-32 max-w-md sm:max-w-xl md:max-w-4xl">
      <div className="text-center bg-gray-300 max-w-md mx-auto dark:bg-white dark:text-gray-800 rounded-lg p-4 sm:p-6">
        <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl">
          <FormattedMessage id="notfound.header" />
        </h1>
        <p className="text-xl mb-4">
          <FormattedMessage id="notfound.description" className="inline"/>
        </p>
        <Link to="/" className="text-lg hover:text-primary dark:hover:text-primary">
          <IoIosArrowRoundForward className="inline text-2xl mr-1 align-middle"/>
          <FormattedMessage id="notfound.backtohome" />
        </Link>
      </div>
      <div id="triangle-code" className="inline-block mx-auto mb-4"></div>
      <div className="flex justify-center block mx-auto mb-4 w-full">
        <Nenderoidos className="w-40 md:w-48 lg:w-56" alt="Antonin Nhek Nenderoid version"/>
      </div>
    </div>
  </Layout>
)

export default injectIntl(NotFoundPage)
