import React from 'react';

interface Props {
  headers: string[];
  data: any;
}

const Table: React.FC<Props> = ({ headers, data }) => (
  <table>
    <thead>
      {headers.map((header: string) => (
        <th key={header}>
          {header}
        </th>
      ))}
    </thead>
    <tbody>
      {data.map((entry: any) => (
        <tr key={entry.id}>
          {
             headers.map((property: string) => (
              <td key={`${entry.id}-${property}`}>{entry[property]}</td>
            ))
          }
        </tr>
      ))}
    </tbody>
  </table>
)


export default Table;
