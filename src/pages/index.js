import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"

import Hero from "../components/hero"
import Header from "../components/header"
import Work from "../components/work"
import About from "../components/about"
import SEO from "../components/seo"
import Contact from "../components/contact"


const IndexPage = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "anhek-screenshot.png"}) {
        id
        childImageSharp {
          fixed(width: 1040) {
            src
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "pages.index" })}
        keywords={[`developer`, `front-end developer`, `graphic designer`]}
        image={data.file.childImageSharp.fixed.src}
      />
      <Header siteTitle={intl.formatMessage({ id: "title" })}/>
      <div className="bg-white dark:bg-gray-900">
        <Hero/>
      </div>
      <div className="bg-white border-t border-gray-300 dark:border-gray-800 dark:bg-gray-900">
        <Work/>
      </div>
      <div className="bg-white border-t border-gray-300 dark:border-gray-800 dark:bg-gray-900">
        <About/>
      </div>
      <div className="bg-white border-t border-gray-300 dark:border-gray-800 dark:bg-gray-900">
        <Contact/>
      </div>
    </Layout>
  )
}

export default IndexPage
