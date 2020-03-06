import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import HeaderSecondary from "../components/headerSecondary"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Nenderoidos from "../components/nenderoidos"
import { IoIosArrowRoundForward } from "react-icons/io"

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={`${intl.formatMessage({ id: "pages.404" })}`}
    />
    <HeaderSecondary siteTitle={intl.formatMessage({ id: "title" })} />
    <div className="flex flex-col max-w-md px-12 py-20 mx-auto text-gray-900 dark:text-white md:px-32 sm:max-w-xl md:max-w-4xl">
      <div className="max-w-md p-4 mx-auto text-center bg-gray-300 rounded-lg dark:bg-white dark:text-gray-800 sm:p-6">
        <h1 className="text-3xl font-bold md:text-3xl lg:text-4xl">
          <FormattedMessage id="notfound.header" />
        </h1>
        <p className="mb-4 text-xl">
          <FormattedMessage id="notfound.description" className="inline" />
        </p>
        <Link
          to="/"
          className="text-lg hover:text-primary dark:hover:text-primary"
        >
          <IoIosArrowRoundForward className="inline mr-1 text-2xl align-middle" />
          <FormattedMessage id="global.backtohome" />
        </Link>
      </div>
      <div id="triangle-code" className="inline-block mx-auto mb-4"></div>
      <div className="flex justify-center block w-full mx-auto mb-4">
        <Nenderoidos
          className="block w-40 md:w-48 lg:w-56"
          alt="Antonin Nhek Nenderoid version"
        />
      </div>
    </div>
  </Layout>
)

export default injectIntl(NotFoundPage)
