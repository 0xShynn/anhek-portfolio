import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactTooltip from 'react-tooltip'

const Stack = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: {absolutePath: {regex: "/(stack-logos)/"}}, sort: {fields: name, order: ASC}) {
  //       edges {
  //         node {
  //           id
  //           name
  //           publicURL
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
  query stack {
    allMarkdownRemark(filter: {frontmatter: {featuredImage: {relativeDirectory: {eq: "stack"}}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            featuredImage {
              relativePath
              publicURL
              name
            }
          }
        }
      }
    }
  }
  `)

  const Logos = data.allMarkdownRemark.edges;
  // const svgLogos = data.allFile.edges;

  return (
    <div>
      <h3 className="mb-8 text-2xl font-bold text-center uppercase font-header text-primary dark:text-secondary">Ma Stack actuelle</h3>
      <div className="flex flex-wrap justify-center mx-auto mb-24 lg:max-w-3xl">
        {/* {
          svgLogos.map(({node})=>(
            <span data-tip={node.name} data-offset="{'top': 20}">
              <img src={node.publicURL} key={node.id} alt={node.name} className="w-16 m-4 transition duration-500 ease-in-out transform md:w-20 hover:scale-110 md:m-8"/>
            </span>
          ))
        } */}

        {
          Logos.map(({node})=>(
            <div className="flex p-4 md:p-8">
              <span data-tip={node.frontmatter.title} data-offset="{'top': -10}" data-class="tooly">
                <img
                  src={node.frontmatter.featuredImage.publicURL}
                  className="w-16 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
                  alt={node.frontmatter.title}
                />
              </span>
            </div>
          ))
        }
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          className="extraClass"
        />
      </div>
    </div>
  );
}

export default Stack;