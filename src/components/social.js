import React from 'react';
import { FaGithubAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import ReactTooltip from 'react-tooltip'

const Social = ({value}) => {
  return (
    <div className="text-4xl w-44 md:w-48 lg:w-64 md:text-4xl lg:text-5xl">
      <ul className="flex items-center justify-between">
        <li className="flex">
          <span data-tip="LinkedIn" data-offset="{'top': -10}" data-class="tooly">
            <a className={value} href="https://www.linkedin.com/in/anhek" title="Let's connect on LinkedIn">
              <FaLinkedinIn/>
            </a>
          </span>
        </li>
        <li className="flex">
          <span data-tip="Github" data-offset="{'top': -10}" data-class="tooly">
            <a className={value} href="http://github.com/anhek" title="Check my work on GitHub">
              <FaGithubAlt/>
            </a>
          </span>
        </li>
        <li className="flex">
          <span data-tip="Twitter" data-offset="{'top': -10}" data-class="tooly">
            <a className={value} href="http://twitter.com/anhek_" title="Follow me on Twitter">
              <FaTwitter/>
            </a>
          </span>
        </li>
      </ul>
      <ReactTooltip
          place="bottom"
          effect="solid"
      />
    </div>
  );
}

export default Social;