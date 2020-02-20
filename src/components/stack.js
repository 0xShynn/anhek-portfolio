import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReactTooltip from 'react-tooltip'

const Stack = () => {

  const data = useStaticQuery(graphql`
    query stack {
      allMarkdownRemark(filter: {frontmatter: {featuredImage: {relativeDirectory: {eq: "stack"}}}}, sort: {order: ASC, fields: frontmatter___order}) {
        edges {
          node {
            id
            frontmatter {
              title
              featuredImage {
                publicURL
              }
              order
            }
          }
        }
      }
    }
  `)

  const Logos = data.allMarkdownRemark.edges;

  return (
      <div className="flex flex-wrap justify-center mx-auto mb-24 lg:max-w-3xl">
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
        />
      </div>
  );
}

export default Stack;