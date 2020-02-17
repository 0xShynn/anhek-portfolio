import React from 'react';
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Social = ({value}) => {  
  return (
    <div className="w-40 text-3xl md:w-48 md:text-4xl">
      <ul className="flex items-center justify-between">
        <li className="flex">
          <a className={value} href="https://www.linkedin.com/in/anhek" title="Let's connect on LinkedIn"><FaLinkedinIn/></a>
        </li>
        <li className="flex">
          <a className={value} href="http://github.com/anhek" title="Check my work on GitHub"><FaGithubAlt/></a>
        </li>
        <li className="flex">
          <a className={value} href="http://twitter.com/anhek_" title="Follow me on Twitter"><FaTwitter/></a>
        </li>
      </ul>
    </div>
  );
}
 
export default Social;