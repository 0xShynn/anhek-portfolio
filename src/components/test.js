import React from 'react';
import { FormattedDate } from 'react-intl';

const Test = ({importantDate}) => {
  return (
    <div>
      <FormattedDate
        value={importantDate}
        year="numeric"
        month="long"
        day="numeric"
        weekday="long"
      />
    </div>
  );
}
 
export default Test;