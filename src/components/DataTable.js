import React from "react";
import { tblHeader } from "../data/tableData";

const DataTable = (props) => {
  return (
    <div className="bg-white w-[90%]" >
      <table  className="w-[100%] table">
        <thead>
          <tr className="bg-neutral-200 h-[45px] text-left ">
            {tblHeader.map((item) => (
              <th className={`p-4`} key={Math.random()}>
                {item.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody >{props.children}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
