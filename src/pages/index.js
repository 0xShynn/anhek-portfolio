import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Work from "../components/work"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
        <Hero/>
      </div>
      <div className="bg-gray-200 dark:bg-gray-900 border-b dark:border-gray-800">
        <Work/>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <About/>
      </div>
    </Layout>
  )
}

export default IndexPage
