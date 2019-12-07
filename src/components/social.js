import React from 'react';
import { FaGithubAlt, FaLinkedinIn, FaTwitter, FaCodepen } from "react-icons/fa"

const Social = ({value}) => {  
  return (
    <div className="w-56 text-3xl">
      <ul className="flex justify-between">
        <li>
          <a className={value} href="http://twitter.com/anhek_" title="Follow me on Twitter"><FaTwitter/></a>
        </li>
        <li>
          <a className={value} href="http://github.com/anhek" title="Check my work on GitHub"><FaGithubAlt/></a>
        </li>
        <li>
          <a className={value} href="https://codepen.io/anhek" title="Let's connect on LinkedIn"><FaCodepen/></a>
        </li>
        <li>
          <a className={value} href="https://www.linkedin.com/in/anhek" title="Let's connect on LinkedIn"><FaLinkedinIn/></a>
        </li>
      </ul>
    </div>
  );
}
 
export default Social;