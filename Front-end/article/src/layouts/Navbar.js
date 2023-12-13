import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import style from './Navbar.module.css'
import NavItems from '../components/navItems/NavItems'

const Navbar = () => {

  const [isOneHomepage, setIsOnHomepage] = useState('false')
  const [isOnDashboard, setIsOnDashboard] = useState('false')
  const [isOnSingleArticle, setIsOnSingleArticle] = useState('false')
  const location = useLocation()

  useEffect(() => {
    setIsOnHomepage(location.pathname === '/allArticles')
    setIsOnDashboard(location.pathname === '/createArticle' || location.pathname === '/updateArticle' || location.pathname === '/deleteArticle')
    setIsOnSingleArticle(location.pathname === '/oneArticle')
  }, [location.pathname])

  return (
    <header className={ isOnDashboard ? style.headerOnDashboard : style.header}>
      <NavItems isOnDashboard={isOnDashboard} isOnSingleArticle={isOnSingleArticle} />
    </header>
  )
}

export default Navbar