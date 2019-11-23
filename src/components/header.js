import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"
import PropTypes from 'prop-types';
import React from "react"
import Language from "./language"

const Header = () => (
  <header id="top" className="bg-white dark:bg-gray-900 text-center">
    <div className="mx-auto pb-0 pt-10 px-4 max-w-md sm:max-w-xl md:max-w-6xl lg:pt-12">
        <nav className="flex flex-wrap justify-center text-gray-800 dark:text-white uppercase font-bold text-md md:text-md md:justify-end">
          <Link to="/" className="link mx-3 sm:mx-4 md:mx-5 hover:text-secondary_dark"><FormattedMessage id="nav.work" /></Link>
          <Link to="/" className="link mx-3 sm:mx-4 md:mx-5 hover:text-secondary_dark"><FormattedMessage id="nav.about" /></Link>
          <Link to="/" className="link mx-3 sm:mx-4 md:mx-5 hover:text-secondary_dark">Contact</Link>
          <Language/>
        </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default injectIntl(Header)
