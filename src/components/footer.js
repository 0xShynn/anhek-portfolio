import React from 'react';
import Social from './social';
import { FormattedMessage, injectIntl } from 'react-intl';
import { IoIosArrowUp } from "react-icons/io"
import { TiHeart } from "react-icons/ti"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <footer className="px-10 py-20 text-center border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900">
      <h3 className="text-xl font-bold dark:text-white"><FormattedMessage id="footer.socialconnect" /></h3>
      <div className="flex justify-center py-5 mb-4">
        <Social value="light dark"/>
      </div>
      <p className="text-base text-gray-700 dark:text-gray-200">
        <FormattedMessage id="footer.info" /> <TiHeart className="inline align-baseline"/> Antonin Nhek © {new Date().getFullYear()} <br/>
        <FormattedMessage id="footer.powered" />{` `}<a className="light dark" href="https://reactjs.org/" title="ReactJS">React</a>,{` `} 
        <a className="light dark" href="https://www.gatsbyjs.org">Gatsby</a> &{` `}
        <a className="light dark" href="https://tailwindcss.com">Tailwind CSS</a>
      </p>
      <div className="flex justify-center mt-8">
        <AnchorLink href="#top" className="light dark">
          <FormattedMessage id="footer.back_to_top" />{` `}
          <IoIosArrowUp className="inline text-xl mb-1 align-middle"/>
        </AnchorLink>
      </div>
    </footer>
  );
}
 
export default injectIntl(Footer);