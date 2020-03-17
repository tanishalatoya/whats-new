import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ headline, image, description, url, id }) => {
  return (
    <article className='news-article'>
      <img src={image} alt={headline}/>
      <h3>{headline}</h3>
      <p>{description}</p>
      <div>Link to article<a href={url}> →</a></div>
    </article>
  )
}

export default NewsArticle;
