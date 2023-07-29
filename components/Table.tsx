import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { FC, useEffect, useState } from "react";
import { SessionHistory } from "./session-history/SessionHistoryTable";

interface TableProps {
  columns: ColumnDef<SessionHistory, string>[];
  defaultData: SessionHistory[];
}

const Table: FC<TableProps> = ({ columns, defaultData }) => {
  const [data, setData] = useState<SessionHistory[]>([]);

  useEffect(() => {
    setData(defaultData);
  }, [defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!table || !data) return null;

  return (
    <div className="w-full text-textGray">
      <table className="w-full">
        <thead className="bg-customGray p-2">
          {table?.getHeaderGroups()?.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup?.headers?.map((header) => (
                <th
                  key={header.id}
                  className=" text-start p-4 text-sm text-headerText"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="p-2">
          {table?.getRowModel()?.rows?.map((row) => (
            <tr key={row.id}>
              {row?.getVisibleCells()?.map((cell) => (
                <td
                  key={cell.id}
                  className=" text-start p-4 text-sm border-b-2 border-borderColor"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table?.getFooterGroups()?.map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup?.headers?.map((header) => (
                <th key={header.id} className=" text-start p-4 text-sm">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default React.memo(Table);
