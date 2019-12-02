import React from 'react';
import Img from "gatsby-image"
import { injectIntl } from "gatsby-plugin-intl"

const ProjectVisual = ({ title, img}) => {
  
  return (
    <div className="w-full px-6 mb-12 md:px-3 lg:px-6 sm:mb-16">
      <Img
        fluid={img}
        className="rounded shadow-md"
        alt={title}
      />
    </div>
  );
}
 
export default injectIntl(ProjectVisual)