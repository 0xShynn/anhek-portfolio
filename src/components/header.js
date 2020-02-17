import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HeaderLayout from "./headerLayout"

const Header = () => {
      
  return (
    <HeaderLayout>
      <AnchorLink href="#work" className="mr-3 sm:mr-4 md:mr-4 hover:text-primary dark:hover:text-secondary">
        <FormattedMessage id="nav.work" />
      </AnchorLink>
      <AnchorLink href="#services" className="mx-3 sm:mx-4 md:mx-4 hover:text-primary dark:hover:text-secondary">
        <FormattedMessage id="nav.services" />
      </AnchorLink>            
      <AnchorLink href="#about" className="mx-3 sm:mx-4 md:mx-4 hover:text-primary dark:hover:text-secondary">
        <FormattedMessage id="nav.about" />
      </AnchorLink>
      <AnchorLink href="#contact" className="mx-3 sm:mx-4 md:mx-4 hover:text-primary dark:hover:text-secondary">
        <FormattedMessage id="nav.contact" />
      </AnchorLink>            
      <Language/>
    </HeaderLayout>
  )
}
export default injectIntl(Header)
