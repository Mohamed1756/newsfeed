import React from 'react';
import '../styles/newsCard.css';

function NewsCard({ headline, source, summary, imageUrl }) {
  return (
    <div className="news-card">
    <div className="news-image-container">
      <img src={imageUrl} alt={headline} className="news-image" />
   
    <div className="news-details">
      <h3 className="news-headline">{headline}</h3>
      <p className="news-source">{source}</p>
      <p className="news-summary">{summary}</p>
    </div>
    </div>
    <div className="news-right-side">
      {/* Right side content */}
      <div className="news-right-row">Content 1</div>
      <div className="news-right-row">Content 2</div>
      <div className="news-right-row">Content 3</div>
    </div>
  </div>
  );
}

export default NewsCard;
