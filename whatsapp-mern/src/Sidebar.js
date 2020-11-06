import { Avatar, IconButton } from '@material-ui/core'
import { DonutLarge, MoreVert, Chat} from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          
        </div>
      </div>
    </div>
  )
}

export default Sidebar
