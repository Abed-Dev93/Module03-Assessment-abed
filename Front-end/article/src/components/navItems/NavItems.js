import React from 'react'
import style from './NavItems.module.css'
import { MdOutlineDashboard } from "react-icons/md"
import { Link } from 'react-router-dom'

const NavItems = ({ isOnDashboard, isOnSingleArticle }) => {

  const navListItemStyle = { textDecoration: 'none', color: 'inherit', fontWeight: 'inherit' }

  return (
    <>
      {isOnDashboard ?
        <div className={style.dashboardHeader}>
          <div className={style.dashLogo}>
            <MdOutlineDashboard className={style.dashLogoIcon} />
            <p className={style.dashTitle}>Dashboard</p>
          </div>
          <ul className={style.navList}>
            <li className={style.navListItem}><Link to='/createArticle' style={navListItemStyle}>Add</Link></li>
            <li className={style.navListItem}><Link to='/updateArticle' style={navListItemStyle}>Edit</Link></li>
            <li className={style.navListItem}><Link to='/deleteArticle' style={navListItemStyle}>Remove</Link></li>
            <li className={style.navListItem}><Link to='/allArticles' style={navListItemStyle}>Back To Articles</Link></li>
          </ul> </div> :
        isOnSingleArticle ?
          <ul className={style.navList}>
            <li className={style.navListItem}><Link to='/allArticles' style={navListItemStyle}>Back To Articles</Link></li>
            <li className={style.navListItem}><Link to='/createArticle' style={navListItemStyle}>Go To Dashboard</Link></li>
          </ul> :
          <ul className={style.navList}>
            <li className={style.navListItem}><Link to='/createArticle' style={navListItemStyle}>Go To Dashboard</Link></li>
          </ul>
      }
    </>
  )
}

export default NavItems