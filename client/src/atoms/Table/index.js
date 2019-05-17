import React from 'react';
import styled from 'styled-components';

const Table = ({columns, data}) => (
  <table>
    <thead>
      <tr>{columns.map(({name}, index) => <th key={index}>{name}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {columns.map(({accessor, render}, index) => (
            <td key={index}>
              {render ? render(item[accessor]) : item[accessor]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
