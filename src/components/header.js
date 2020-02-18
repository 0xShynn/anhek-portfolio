import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import HeaderLayout from "./headerLayout"

const Header = () => {

  return (
    <HeaderLayout>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div>
          <AnchorLink href="#work" className="hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.work" />
          </AnchorLink>
          <AnchorLink href="#about" className="mx-4 sm:mx-6 md:mx-8 hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.about" />
          </AnchorLink>
          <AnchorLink href="#contact" className="hover:text-primary dark:hover:text-secondary">
            <FormattedMessage id="nav.contact" />
          </AnchorLink>
        </div>
        <div>
          <Language/>
        </div>
      </div>
    </HeaderLayout>
  )
}
export default injectIntl(Header)
