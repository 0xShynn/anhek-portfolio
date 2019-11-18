import React from 'react';
import Project from './project';
import { useStaticQuery, graphql } from 'gatsby';

const Work = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            url
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
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
  
  let projects = data.allMarkdownRemark.edges;

  return (
    <section id="work" className="mx-auto p-12 md:max-w-5xl md:py-20 lg:py-40 lg:max-w-6xl">
      <div className="flex flex-wrap -mx-3">
        {projects.map(({node})=>(
          <Project
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            url={node.frontmatter.url}
            img={node.frontmatter.featuredImage.childImageSharp.fluid}
            tags={node.frontmatter.tags}
            key={node.id}
          />
        ))}
      </div>
      
    </section>
  );
}

export default Work;