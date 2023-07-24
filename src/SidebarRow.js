
import { Avatar } from '@mui/material';
//import { IconButton } from '@mui/material';
import React from 'react';
import "./SidebarRow.css";

function SidebarRow({src,Icon,title}) {
  return (
    <div classsName="sidebarRow">
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
        <h4>{title}</h4>
      
    </div>
  )
}

export default SidebarRow
