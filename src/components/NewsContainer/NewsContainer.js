import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = ({ currentNewsTopic }) => {
  const newsCards = currentNewsTopic.map(newsItem => {
    return <NewsArticle
              image={newsItem.img}
              headline={newsItem.headline}
              description={newsItem.description}
              url={newsItem.url}
              id={newsItem.id}
              key={newsItem.id}
            />
  })

  return (
    <section className='news-container'>
      {newsCards}
    </section>
  )
}

export default NewsContainer;
