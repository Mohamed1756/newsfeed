import React from 'react';
import '../styles/newsCard.css'

function NewsCard({ headline, source, summary, imageUrl }) {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={headline} className="news-image" />
      <div className="news-details">
        <h3 className="news-headline">{headline}</h3>
        <p className="news-source">{source}</p>
        <p className="news-summary">{summary}</p>
      </div>
    </div>
  );
}

export default NewsCard;
