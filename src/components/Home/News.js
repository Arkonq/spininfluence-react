const News = ({ newsItem, news, setNews }) => {
  const changeData = () => {
    let newNews = news.concat();
    newNews[news.indexOf(newsItem)] = { ...newNews[news.indexOf(newsItem)],
      title: Math.random().toString(),
    };
    setNews(newNews);
  }

  return (
    <div className="news__item">
      <div className="news__img">
        <img src={newsItem.img} alt="" />
        <p className="news__branch">{newsItem.branch}</p>
      </div>
      <p className="news__name">{newsItem.title}</p>
      <div className="news__by">
        <div className="news__by-img">
          <img src="img/news/author.png" alt="" />
        </div>
        <span className="news__by-author">{newsItem.author}</span>
        <span className="news__by-date">{newsItem.date}</span>
      </div>
      <button onClick={() => changeData()}>Change data of {news.indexOf(newsItem)} index</button>
    </div>
  );
}

export default News;