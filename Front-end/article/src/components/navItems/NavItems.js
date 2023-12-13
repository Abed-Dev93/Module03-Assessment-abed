import React from 'react'
import style from './NavItems.module.css'
import { MdOutlineDashboard } from "react-icons/md"

const NavItems = ({ isOnDashboard, isOnSingleArticle }) => {
  return (
    <>
      {isOnDashboard ?
        <div className={style.dashboardHeader}>
          <div className={style.dashLogo}>
            <MdOutlineDashboard className={style.dashLogoIcon} />
            <p className={style.dashTitle}>Dashboard</p>
          </div>
          <ul className={style.navList}>
            <li className={style.navListItem}>Add</li>
            <li className={style.navListItem}>Edit</li>
            <li className={style.navListItem}>Remove</li>
            <li className={style.navListItem}>Back To Articles</li>
          </ul> </div> :
        isOnSingleArticle ?
          <ul className={style.navList}>
            <li className={style.navListItem}>Back To Articles</li>
            <li className={style.navListItem}>Go To Dashboard</li>
          </ul> :
          <ul className={style.navList}>
            <li className={style.navListItem}>Go To Dashboard</li>
          </ul>
      }
    </>
  )
}

export default NavItems