import React from 'react';
import Social from './social';

const Footer = () => {
  return (
    <footer className="px-10 py-20 text-center border-t border-gray-300">
      <h3 className="text-xl font-bold">Antonin Nhek</h3>
      <div className="flex justify-center mb-3">
        <Social value="text-primary hover:text-gray-800 link"/>
      </div>
      <p className="text-base text-gray-700">Designed and built by Antonin Nhek © {new Date().getFullYear()} <br/>
      {` `}
      Powered by <a className="text-primary hover:underline" href="https://reactjs.org/" title="ReactJS">React</a>, <a className="text-primary hover:underline" href="https://www.gatsbyjs.org">Gatsby</a> & <a className="text-primary hover:underline" href="https://tailwindcss.com">Tailwind CSS</a></p>
    </footer>
  );
}
 
export default Footer;