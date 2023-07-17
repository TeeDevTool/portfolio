import React, { memo } from "react";

const DEFAULT_VALUE = "-";

export enum CellType {
  Header = "th",
  Cell = "td",
}

type TableCell = { value: string | React.ReactNode; type: CellType.Header | CellType.Cell };

export type TableRow = TableCell[];

interface TableProps {
  rows: TableRow[];
  component: string;
}

const Table: React.FC<TableProps> = ({ rows, component }) => {
  const header = rows.filter((row) => row.every((cell) => cell.type === CellType.Header));
  const body = rows.filter((row) => row.every((cell) => cell.type === CellType.Cell));

  return (
    <table>
      <thead>
        {header.map((row, x) => (
          <tr key={`table-header-row-${component}-${x}`}>
            {row.map((cell, y) => (
              <cell.type key={`table-body-cell-${component}-${y}`}>
                {cell.value || DEFAULT_VALUE}
              </cell.type>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {body.map((row, x) => (
          <tr key={`table-body-row-${component}-${x}`}>
            {row.map((cell, y) => (
              <cell.type key={`table-body-cell-${component}-${y}`}>
                {cell.value || DEFAULT_VALUE}
              </cell.type>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
