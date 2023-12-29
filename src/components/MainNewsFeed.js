import React from 'react';
import NewsCard from './NewsCard';
import '../styles/newsCard.css';  

function MainNewsFeed() {
  const newsData = [
    {
      headline: 'Sample Headline 1',
      source: 'Sample Source 1',
      summary: 'This is a sample summary for the first news item.',
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      headline: 'Sample Headline 2',
      source: 'Sample Source 2',
      summary: 'This is a sample summary for the second news item.',
      imageUrl: 'https://example.com/image2.jpg',
    },
    {
      headline: 'Sample Headline 2',
      source: 'Sample Source 2',
      summary: 'This is a sample summary for the second news item.',
      imageUrl: 'https://example.com/image2.jpg',
    },
    {
      headline: 'Sample Headline 2',
      source: 'Sample Source 2',
      summary: 'This is a sample summary for the second news item.',
      imageUrl: 'https://example.com/image2.jpg',
    }
  
  ];

  return (
    <div className="news-container">
      {newsData.map((newsItem, index) => (
        <NewsCard
          key={index}
          headline={newsItem.headline}
          source={newsItem.source}
          summary={newsItem.summary}
          imageUrl={newsItem.imageUrl}
        />
      ))}
    </div>
  );
}

export default MainNewsFeed;
