import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "gatsby-plugin-intl"


const Button = ({ link, style, text }) => {

  const isAnchor = /^[#]/g.test(link);
  const isURL = /^[http]/g.test(link);
  const baseStyle = "px-6 py-2 text-xl border-2 rounded-full text-primary border-primary text-center hover:bg-primary_light hover:border-primary_light hover:text-primary md:text-1xl dark:border-secondary_light dark:text-secondary_light dark:hover:bg-secondary dark:hover:border-secondary dark:hover:text-secondary_dark "

  if (isAnchor === true) {
    /* Return an Anchor */
    return (
      <AnchorLink href={link} className={baseStyle + style}>
        {text}
      </AnchorLink>
    )
  } else if (isURL === true) {
    /* Return an URL */
    return (
      <a href={link} className={baseStyle + style}>
        {text}
      </a>
    );
  } else {
    /* Return a Link component */
    return (
      <Link to={link} className={baseStyle + style}>
        {text}
      </Link>
    );
  }
}

export default Button;