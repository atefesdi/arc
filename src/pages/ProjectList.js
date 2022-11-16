import React from 'react'
import SideBar from '../components/SideBar'
import TableContainer from '../components/TableContainer'

const ProjectList = () => {
  console.log("s")
  return (
    <SideBar>
      <div className=' flex flex-col w-[100%] justify-center items-center'>

        <TableContainer/>
      </div>
    </SideBar>
  )
}

export default ProjectList