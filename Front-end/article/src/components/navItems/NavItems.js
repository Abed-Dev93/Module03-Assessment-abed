import React from 'react'
import style from './NavItems.module.css'
import { MdOutlineDashboard } from "react-icons/md"

const NavItems = () => {
  return (
    <>
        <div className={style.dashLogo}>
            <MdOutlineDashboard style={{ color: 'white', height: '2.5rem', width: '2.5rem' }} />
            <p>Dashboard</p>
        </div>
    </>
  )
}

export default NavItems