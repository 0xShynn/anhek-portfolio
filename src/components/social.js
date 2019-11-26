import React from 'react';
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Obfuscate from "react-obfuscate"

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
          <a className={value} href="http://linkedin.com/anhek" title="Let's connect on LinkedIn"><FaLinkedinIn/></a>
        </li>
        <li>
          <Obfuscate className={value} title="Drop me a message ! :)" email="hello@anhek.dev">
            <MdEmail/>
          </Obfuscate>
        </li>
      </ul>
    </div>
  );
}
 
export default Social;