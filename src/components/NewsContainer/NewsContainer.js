import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = ({ localNews }) => {
  const localNewsCards = localNews.map(localNewsItem => {
    return <NewsArticle
              image={localNewsItem.img}
              headline={localNewsItem.headline}
              description={localNewsItem.description}
              url={localNewsItem.url}
              id={localNewsItem.id}
              key={localNewsItem.id}
            />
  })

  return (
    <section className='news-container'>
      {localNewsCards}
    </section>
  )
}

export default NewsContainer;
