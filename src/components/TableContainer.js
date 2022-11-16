import React from 'react'
import { Link } from 'react-router-dom'
import { datatbl } from '../data/tableData'
import DataTable from './DataTable'
import EditIcon from '@mui/icons-material/Edit';

const TableContainer = () => {

  const selectRow=()=>{
    console.log("first")
  }
  return (
    <div className="flex items-center justify-center w-[100%] ">

    <DataTable >

        {datatbl.map((item , index)=>(
         
          <tr className=' table-row child:px-4 child:py-2 hover:bg-blue-100' key={index} onClick={selectRow}>
            
                <td >{item.pname}</td>
                <td>{item.city}</td>
                <td>{item.province}</td>
                <td>{item.state}</td>
                <td>{item.id}</td>
                <td><Link to={`/project-details/${item.id}`} ><EditIcon className=' text-blue-600' /></Link></td>
           
            </tr>
          
        ))}
    </DataTable>
    </div>
  )
}

export default TableContainer