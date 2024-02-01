import { useEffect } from 'react';
import { useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e46ff67f0ede4a9d9f5b622a44c2cd3c`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, [category, country]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
