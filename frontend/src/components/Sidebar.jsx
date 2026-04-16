import React from 'react'
import { useState } from 'react'
import styles from '../styles/sidebar.module.css'
import SidebarContentItem from './SidebarContentItem'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  const [sidebar,setSidebar]=useState([{
    name:<Link className='link' to={'/dashboard'}><i className="ri-route-fill"></i> Live Tracking </Link>,
    icon:""
  },{
    name:<Link className='link' to={'/dashboard/platform'}><i className="ri-box-3-fill"></i> Platform Allocation </Link>,
    icon:""
  },
{
  name:<Link className='link' to={'/'}><i className="ri-logout-box-line"></i> Logout </Link>,
  icon:""
}])
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <i className="ri-train-fill"></i> Rail DSS
      </div>
      <ul className={styles.contentList}>
        {sidebar.map(ele=>(
          <SidebarContentItem key={ele.name} ele={ele}/>
        ))}
      </ul>
    </div>
  )
}
