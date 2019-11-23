import React from 'react';
import { injectIntl } from 'react-intl';
import SEO from './seo';

const Redirect = ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: "title" })}`} />;
}
 
export default injectIntl(Redirect)