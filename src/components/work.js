import React from 'react';
import ProjectDev from './projectDev';
import { useStaticQuery, graphql } from 'gatsby';

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(development)/"}},
        sort: {fields: frontmatter___order, order: ASC}) {
        edges {
          node {
            id
            frontmatter {
              title
              title_fr
              description
              description_fr
              tags
              tags_fr
              url
              source_url
              order
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

  let projects = data.allMarkdownRemark.edges;

  return (
    <section id="work" className="px-3 pt-12 pb-0 mx-auto sm:px-6 sm:pt-16 md:max-w-4xl md:pt-20 lg:pt-32 lg:max-w-6xl">
      <div className="flex flex-wrap -mx-3 md:px-3 xl:px-0 md:-mx-0 lg:-mx-3">
        {
          projects.map(({node})=>(
            <ProjectDev
              title={node.frontmatter.title}
              title_fr={node.frontmatter.title_fr}
              description={node.frontmatter.description}
              description_fr={node.frontmatter.description_fr}
              url={node.frontmatter.url}
              source_url={node.frontmatter.source_url}
              img={node.frontmatter.featuredImage.childImageSharp.fluid}
              tags={node.frontmatter.tags}
              tags_fr={node.frontmatter.tags_fr}
              key={node.id}
            />
          ))
        }
      </div>
    </section>
  );
}

export default Work;