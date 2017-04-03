import React from 'react';
import { map } from 'lodash';
import DateTime from './DateTime';

/* eslint-disable react/prop-types */
export default ({ cellData }) => (
  <div>
    {
      map(cellData, (item) => (
        <div key={item[0]}>
          <DateTime timestamp={item[0]} />
          <span>&nbsp;{item[1]}</span>
        </div>
      ))
    }
  </div>
);
/* eslint-enable react/prop-types */
