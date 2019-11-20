import React, { Component } from 'react'
import Img from "gatsby-image"
import { FaExternalLinkAlt } from "react-icons/fa"

class Project extends Component {
  render() {
    const { title, description, img, tags, url} = this.props;
    
    const tagList = tags.length ? (
      tags.map((tag) => {
        return (
          <span className="text-sm mr-2 mb-2 py-1 px-2 rounded bg-gray-800 text-gray-500 hover:bg-gray-700 hover:text-gray-400" key={tag}>{tag}</span>
        )
      })
    ) : (
      <div>No tags</div>
    );
    
    return (
      <div className="px-6 mb-10 md:mb-20 w-full md:w-1/2" key={title}>
        <div className="text-white">
          <Img fluid={img} className="h-64 rounded"/>
          <div className="info py-3 mt-2 flex justify-between items-end">
            <div className="">
            <div className="align-middle">
              <a href={url} className="text-white mb-1 font-bold text-xl md:text-2xl cursor-pointer hover:text-secondary">{title} <FaExternalLinkAlt className="react-icons inline align-middle pb-1 pl-1"/></a>
            </div>              
              <p className="text-gray-500 mb-3 block">{description}</p>
              <div className="flex flex-wrap">{tagList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Project;