import React, { PropTypes } from 'react';
import { pure, compose, setPropTypes } from 'recompose';
import { AutoSizer, Table, Column } from 'react-virtualized';
import 'react-virtualized/styles.css';
import MeasurementsColumn from './MeasurementsColumn';

function getRowHeight(rows) {
  return ({ index }) => {
    const mCount = rows[index].measurements.length;
    return 30 * mCount;
  };
}

export default compose(
  setPropTypes({
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  pure,
)(({ rows }) => (
  <AutoSizer disableHeight>
    {
      ({ width }) => (
        <Table
          headerHeight={40}
          height={400}
          width={width}
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          rowHeight={getRowHeight(rows)}
          scrollToIndex={rows.length - 1}
        >
          <Column
            width={200}
            label="name"
            dataKey="name"
          />
          <Column
            width={200}
            label="unit"
            dataKey="unit"
          />
          <Column
            width={400}
            label="Measurements"
            dataKey="measurements"
            cellRenderer={MeasurementsColumn}
          />
        </Table>
      )
    }
  </AutoSizer>
));
