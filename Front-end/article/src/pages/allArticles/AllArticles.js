import React from 'react'
import style from './AllArticles.module.css'
import { useNavigate } from 'react-router-dom'

const AllArticles = () => {

  const articles = [
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem...........',
      author: 'someone'
    },
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem...........',
      author: 'someone'
    },
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem...........',
      author: 'someone'
    },
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem...........',
      author: 'someone'
    },
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem...........',
      author: 'someone'
    },
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem...........',
      author: 'someone'
    },
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem...........',
      author: 'someone'
    },
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem...........',
      author: 'someone'
    },
    {
      image: 'https://source.unsplash.com/PNbDkQ2DDgM',
      title: 'first',
      category: 'any',
      body: 'lorem................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................',
      author: 'someone'
    }
  ]

  const navigate = useNavigate()

  const handleShowButtonClick = (article, i) => {
    navigate(`/oneArticle/${i}`, { state: { article } })
  }

  return (
    <main className={style.articlesContainer}>
      <h1 className={style.articlesTitle}>All Articles</h1>
      <section className={style.articlesCards}>
        {
          articles.map((item, i) => (
            <article className={style.articleCard} key={i}>
              <div className={style.articleCardImage}>
                <img className={style.articleCardImageItem} src={item.image} alt='article' />
              </div>
              <div className={style.articleCardBody}>
                <h2 className={style.articleCardTitle}>{item.title}</h2>
                <div className={style.articleCardSubTitle}>
                  <h3 className={style.articleCardAuthor}>{item.author}</h3>
                  <button className={style.button} type='button' onClick={() => handleShowButtonClick(item, i)}>SHOW</button>
                </div>
              </div>
            </article>
          ))
        }
      </section>
    </main>
  )
}

export default AllArticles