import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ headline, image, description, url, id }) => {
  return (
    <article className='news-article'>
      <img src={image} alt={headline}/>
      <h3>{headline}</h3>
      <p className='description'>{description}</p>
      <div><a href={url}>Link to article →</a></div>
    </article>
  )
}

export default NewsArticle;
