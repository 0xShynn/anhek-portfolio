import React from "react"
import Img from "gatsby-image"
import { injectIntl } from "gatsby-plugin-intl"

const ProjectVisual = ({ title, img }) => {
  return (
    <div className="w-full px-3 mb-10 md:px-3 lg:px-6 sm:mb-12 md:mb-16 lg:mb-20">
      <Img fluid={img} className="rounded shadow-md" alt={title} />
    </div>
  )
}

export default injectIntl(ProjectVisual)
