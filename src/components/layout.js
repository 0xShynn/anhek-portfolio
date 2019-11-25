/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "react-intl"

import Header from "./header"
import "../styles/main.css"
import Footer from "./footer"

const Layout = ({ children, intl }) => {
  return (
    <>
      <Header siteTitle={intl.formatMessage({ id: "title" })} />
      <div className="mx-auto bg-white dark:bg-gray-900">
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
