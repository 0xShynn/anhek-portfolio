import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderSecondary from "../components/headerSecondary"
import ProjectVisual from "../components/projectVisual"
import { injectIntl, useIntl, FormattedMessage } from "gatsby-plugin-intl"
import Button from "../components/button"


const GraphicDesign = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(graphicdesign)/"}},
        sort: {fields: frontmatter___order, order: ASC}) {
        edges {
          node {
            id
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1032) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  let graphicDesignProjects = data.allMarkdownRemark.edges;
  const intl = useIntl();

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "pages.graphicdesign" })}
        keywords={[`developer`, `front-end developer`, `graphic designer`]}
      />
      <HeaderSecondary/>
      <header className="mx-5 my-12 text-center sm:my-20 sm:mx-32 lg:my-24">
        <h1 className="text-2xl font-bold text-primary md:text-4xl dark:text-secondary font-header">
          <FormattedMessage id="pages.graphicdesign"/>
        </h1>
        <h2 className="text-lg text-gray-800 md:text-xl font-body dark:text-white">
          <FormattedMessage id="graphicdesign.intro"/>
        </h2>
      </header>
      <section className="px-3 pt-10 pb-10 bg-gray-200 border-t sm:pt-12 md:pt-20 dark:border-gray-800 sm:px-6 dark:bg-gray-900">
        <div className="flex flex-col mx-auto md:max-w-4xl lg:max-w-4xl">
          {
            graphicDesignProjects.map(({node}) => (
              <ProjectVisual
                title={node.frontmatter.title}
                img={node.frontmatter.featuredImage.childImageSharp.fluid}
                key={node.id}
              />
            ))
          }
        </div>
        <div className="mb-12 text-center sm:mb-16 md:mb-20">
          <Button
            link="/"
            style={ `py-3` }
            text={<FormattedMessage id="global.backtohome" />}
          />
        </div>
      </section>
    </Layout>
  )
}

export default injectIntl(GraphicDesign)