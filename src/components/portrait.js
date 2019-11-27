import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "anhek-portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
 
export default Portrait;