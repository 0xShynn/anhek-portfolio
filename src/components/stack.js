import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Stack = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {absolutePath: {regex: "/(stack-logos)/"}}, sort: {fields: name, order: ASC}, limit: 7) {
        edges {
          node {
            id
            name
            publicURL
          }
        }
      }
      github_light:file(name: {eq: "8-github_light"}) {
        id
        publicURL
        name
      }
      github_dark:file(name: {eq: "9-github_dark"}) {
        id
        publicURL
        name
      }
    }
  `)
  const svgLogos = data.allFile.edges;
  const github_light = data.github_light;
  const github_dark = data.github_dark;

  return (
    <div>
      <h3 className="mb-8 text-2xl font-bold text-center uppercase font-header text-primary dark:text-secondary">Ma Stack actuelle</h3>
      <div className="flex flex-wrap justify-center mx-auto mb-24 lg:max-w-3xl">
        {
          svgLogos.map(({node})=>(
            <img src={node.publicURL} key={node.id} alt={node.name} className="w-16 m-4 transition duration-500 ease-in-out transform md:w-20 md:m-8 hover:scale-110"/>
          ))
        }
        <img src={github_light.publicURL} key={github_light.id} alt={github_light.name} className="w-16 m-4 transition duration-500 ease-in-out transform md:w-20 md:m-8 dark:hidden hover:scale-110"/>
        <img src={github_dark.publicURL} key={github_dark.id} alt={github_dark.name} className="hidden w-16 m-4 transition duration-500 ease-in-out transform md:w-20 md:m-8 dark:inline hover:scale-110"/>
      </div>
    </div>
  );
}

export default Stack;