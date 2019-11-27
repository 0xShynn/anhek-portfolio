import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Obfuscate from "react-obfuscate"
import { GoMail } from "react-icons/go"

const Header = () => (
  <header id="top" className="bg-white dark:bg-gray-900 text-center">
    <div className="mx-auto pb-0 pt-10 px-2 md:px-8 lg:pt-12 max-w-md sm:max-w-xl md:max-w-6xl">
        <nav className="flex flex-wrap justify-center font-header font-bold text-gray-800 dark:text-white uppercase md:justify-end">
          <AnchorLink href="#work" className="mr-2 sm:mr-4 md:mr-4 hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.work" />
          </AnchorLink>
          <AnchorLink href="#about" className="mx-2 sm:mx-4 md:mx-4 hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.about" />
          </AnchorLink>
          <Obfuscate className="relative mx-2 sm:mx-4 md:mx-4 inline-block text-2xl hover:text-primary dark:hover:text-secondary" title="Drop me a message ! :)" email="hello@anhek.dev">
            <GoMail />
          </Obfuscate>
          <Language/>
        </nav>
    </div>
  </header>
)

export default injectIntl(Header)
