import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => (
  <header id="top" className="bg-white dark:bg-gray-900 text-center">
    <div className="mx-auto pb-0 pt-10 px-0 md:px-8 lg:pt-12 max-w-md sm:max-w-xl md:max-w-6xl">
        <nav className="flex flex-wrap justify-center text-gray-800 dark:text-white uppercase font-bold text-md md:text-md md:justify-end">
          <AnchorLink href="#work" className="mr-2 sm:mr-4 md:mr-5 hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.work" />
          </AnchorLink>
          <AnchorLink href="#about" className="mx-2 sm:mx-4 md:mx-5 hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.about" />
          </AnchorLink>
          <AnchorLink className="mx-2 sm:mx-4 md:mx-5 hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.contact"/>
          </AnchorLink>
          <Language/>
        </nav>
    </div>
  </header>
)

export default injectIntl(Header)
