import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"
import React from "react"
import Language from "./language"
import HeaderLayout from "./headerLayout"

const HeaderSecondary = () => {

  return (
    <HeaderLayout>
      <nav>
        <Link to="/" className="mr-3 sm:mr-4 md:mr-4 hover:text-primary dark:hover:text-secondary">
          <FormattedMessage id="pages.index" />
        </Link>
        <Language/>
      </nav>
    </HeaderLayout>
  )
}
export default injectIntl(HeaderSecondary)
