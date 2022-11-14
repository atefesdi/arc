import React from 'react'
import { datatbl } from '../data/tableData'
import DataTable from './DataTable'

const TableContainer = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">

    <DataTable >

        {datatbl.map((item , index)=>(
            <tr className='h-[40px]' key={index}>
                <td>{item.pname}</td>
                <td>{item.city}</td>
                <td>{item.province}</td>
                <td>{item.state}</td>
                <td>{item.id}</td>
            </tr>
        ))}
    </DataTable>
    </div>
  )
}

export default TableContainer