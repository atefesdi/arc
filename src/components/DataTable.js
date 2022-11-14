import React from "react";
import { tblHeader } from "../data/tableData";

const DataTable = (props) => {
  return (
    <div className="bg-yellow-100 " >
      <table  className="w-[800px]">
        <thead>
          <tr className="bg-neutral-200 h-[45px]">
            {tblHeader.map((item) => (
              <th className={`${item.class}`} key={Math.random()}>
                {item.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
