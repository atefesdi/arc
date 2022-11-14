import React from 'react'
import SideBar from './SideBar'

const SidebarContainer = (props) => {
  return (
    <>
    <SideBar />
    <div>
        {props.children}
    </div>
    </>
  )
}

export default SidebarContainer