import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Obfuscate from "react-obfuscate"
import { GoMail } from "react-icons/go"

const Header = () => {
      
  return (
    <header id="top" className="text-center bg-white dark:bg-gray-900">
      <div className="max-w-md px-2 pt-10 pb-0 mx-auto md:px-10 lg:pt-12 sm:max-w-xl md:max-w-6xl">
          <nav className="flex flex-wrap justify-center font-bold text-gray-800 uppercase font-header dark:text-white md:justify-end">
            <AnchorLink href="#work" className="mr-3 sm:mr-4 md:mr-4 hover:text-primary dark:hover:text-secondary">
              <FormattedMessage id="nav.work" />
            </AnchorLink>
            <AnchorLink href="#about" className="mx-3 sm:mx-4 md:mx-4 hover:text-primary dark:hover:text-secondary">
              <FormattedMessage id="nav.about" />
            </AnchorLink>
            <Obfuscate className="relative inline-block mx-3 text-2xl sm:mx-4 md:mx-4 hover:text-primary dark:hover:text-secondary" title="Drop me a message ! :)" email="hello@anhek.dev">
              <GoMail />
            </Obfuscate>
            <Language/>
          </nav>
      </div>
    </header>
  )
}
export default injectIntl(Header)
