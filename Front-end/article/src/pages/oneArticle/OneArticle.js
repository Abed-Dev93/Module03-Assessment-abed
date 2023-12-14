import React from 'react'
import style from './OneArticle.module.css'
import { useLocation } from 'react-router-dom'

const OneArticle = () => {

  const location = useLocation()
  const article = location.state.article

  return (
    <main className={style.articleContainer}>
      <h1 className={style.articleTitle}>Article</h1>
      <section className={style.articleInfo}>
        <img className={style.articleImage} src={article.image} alt='article' />
        <article className={style.articleContent}>
          <p className={`${style.articleContentParagraph} ${style.firstParagraph}`}>
            Title: <span className={style.articleContentParagraphContent}>
              {article.title}
            </span>
          </p>
          <p className={style.articleContentParagraph}>
            Categories: <span className={style.articleContentParagraphContent}>
              {article.category}
            </span>
          </p>
          <p className={style.articleContentParagraph}>
            Author: <span className={style.articleContentParagraphContent}>
              {article.author}
            </span>
          </p>
          <p className={style.articleContentBigParagraph}>
            Body: <span className={style.articleContentParagraphContent}>
              {article.body}
            </span>
          </p>
        </article>
      </section>
    </main>
  )
}

export default OneArticle