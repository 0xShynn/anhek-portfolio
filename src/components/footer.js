import React from 'react';
import Social from './social';
import { FormattedMessage, injectIntl } from 'react-intl';
import { TiHeart } from "react-icons/ti"
import Button from './button';

const Footer = () => {

  return (
    <footer className="px-4 py-20 text-center bg-white border-t border-gray-300 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="font-bold text-gray-800 uppercase text-1xl dark:text-white">
        <FormattedMessage id="footer.socialconnect" />
      </h3>
      <div className="flex justify-center py-5 mb-4">
        <Social value="light dark"/>
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-200">
        <FormattedMessage id="footer.info" /> <TiHeart className="inline align-baseline"/> Antonin Nhek © {new Date().getFullYear()} <br/>
        <FormattedMessage id="footer.powered" />{` `}<a className="light dark" href="https://reactjs.org/" title="ReactJS">React</a>,{` `}
        <a className="light dark" href="https://www.gatsbyjs.org">Gatsby</a> &{` `}
        <a className="light dark" href="https://tailwindcss.com">Tailwind CSS</a> <br />
        <FormattedMessage id="footer.hosted" /> <a className="light dark" href="https://www.netlify.com">Netlify</a>
      </p>
      <div className="flex justify-center mt-8">
        <Button
          link="#top"
          style={ `text-lg` }
          text={<FormattedMessage id="footer.back_to_top" />}
        />
      </div>
    </footer>
  );
}

export default injectIntl(Footer);