import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllArticles from '../pages/allArticles/AllArticles'
import OneArticle from '../pages/oneArticle/OneArticle'
import CreateArticle from '../pages/dashboard/CreateArticle'
import UpdateArticle from '../pages/dashboard/UpdateArticle'
import DeleteArticle from '../pages/dashboard/DeleteArticle'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/allArticles' element={<AllArticles />} />
      <Route path='/oneArticle/:id' element={<OneArticle />} />
      <Route path='/createArticle' element={<CreateArticle />} />
      <Route path='/updateArticle' element={<UpdateArticle />} />
      <Route path='/deleteArticle' element={<DeleteArticle />} />
    </Routes>
  )
}

export default AppRoutes