import React from 'react';
import { FaGithubAlt, FaLinkedinIn, FaTwitter, FaCodepen } from "react-icons/fa"


const Social = ({value}) => {  
  return (
    <div className="mx-auto w-56 text-3xl p-5 md:mx-0 md:pl-0">
      <ul className="flex justify-between">
        <li><a className={value} href="http://twitter.com/anhek_" title="Follow me on Twitter"><FaTwitter/></a></li>
        <li><a className={value} href="http://github.com/anhek" title="Find me on GitHub"><FaGithubAlt/></a></li>
        <li><a className={value} href="http://linkedin.com/anhek" title="Antonin Nhek on LinkedIn"><FaCodepen/></a></li>
        <li><a className={value} href="http://linkedin.com/anhek" title="Antonin Nhek on LinkedIn"><FaLinkedinIn/></a></li>
      </ul>
    </div>
  );
}
 
export default Social;