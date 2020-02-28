import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HeaderLayout from "./headerLayout"

const Header = () => {

  return (
    <HeaderLayout>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <nav className="mb-1 sm:mb-0">
          <AnchorLink href="#work" className="cursor-pointer hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.work" />
          </AnchorLink>
          <AnchorLink href="#about" className="mx-6 cursor-pointer md:mx-8 hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.about" />
          </AnchorLink>
          <AnchorLink href="#contact" className="cursor-pointer hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.contact" />
          </AnchorLink>
        </nav>
        <div>
          <Language/>
        </div>
      </div>
    </HeaderLayout>
  )
}
export default injectIntl(Header)
