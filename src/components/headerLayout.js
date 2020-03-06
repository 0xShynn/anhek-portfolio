import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "gatsby-plugin-intl"

const HeaderLayout = ({ children }) => {
  return (
    <header
      id="top"
      className="text-center bg-white dark:bg-gray-900"
      role="banner"
    >
      <div className="flex flex-wrap justify-center max-w-md px-4 pt-8 pb-0 mx-auto text-lg font-bold text-gray-800 uppercase md:pt-12 md:px-8 lg:pt-12 sm:max-w-xl md:max-w-6xl md:text-xl font-header dark:text-white md:justify-end">
        {children}
      </div>
    </header>
  )
}

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(HeaderLayout)
