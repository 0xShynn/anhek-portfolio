import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import HeaderLayout from "./headerLayout"

const HeaderSecondary = () => {

  return (
    <HeaderLayout>
      <nav className="flex flex-row">
        <Link to="/" className="mr-4 hover:text-primary dark:hover:text-secondary sm:mr-0">
          <FormattedMessage id="pages.index" />
        </Link>
        <Language/>
      </nav>
    </HeaderLayout>
  )
}
export default injectIntl(HeaderSecondary)
