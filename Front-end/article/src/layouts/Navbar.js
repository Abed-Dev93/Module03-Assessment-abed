import React from 'react'
import style from './Navbar.module.css'
import NavItems from '../components/navItems/NavItems'

const Navbar = ({ isOnDashboard }) => {
  {
    isOnDashboard ?
      <header className={style.headerOnDashboard}>
        <NavItems />
      </header> :
      <header className={style.header}>
        <NavItems />
      </header>
  }
}

export default Navbar