import { Link } from 'react-router-dom'
import { topics } from '../data';
import { mcu, marveltv, mcuChar } from '../data/dataMcu';
import { starwarsFilms, starwarsSeries } from '../data/dataStarWars';

const AllArticles = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          {topics.map((topic) => (
            <li className="sidebar-list-item" key={topic.id}>
              <a href={"#" + topic.file}>{topic.title}</a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="main">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>All Articles</li>
        </ul>
        <div>
          <h1 className="article-heading">All Articles</h1>
        </div>
        <div className="allArticles-section">
          <h3 className="article-heading-3" id="Mcu">Marvel Cinematic Universe</h3>
          <div>
            <h4 className="article-heading-4">Marvel Studios films, series, and specials</h4>
            <ul className="allArticles-list">
              {mcu.map((mcu) => (
                <li key={mcu.id}>
                  <Link to={mcu.route}>{mcu.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Marvel TV series</h4>
            <ul className="allArticles-list">
              {marveltv.map((marveltv) => (
                <li key={marveltv.id}>
                  <Link to={marveltv.route}>{marveltv.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">MCU Characters</h4>
            <ul className="allArticles-list">
              {mcuChar.map((mcuChar) => (
                <li key={mcuChar.id}>
                  <Link to={mcuChar.route}>{mcuChar.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="StarWars">Star Wars</h3>
            <div>
                <h4 className="article-heading-4">Star Wars films</h4>
                <ul className="allArticles-list">
                {starwarsFilms.map((swFilm) => (
                    <li key={swFilm.id}>
                    <Link to={swFilm.route}>{swFilm.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">Star Wars films</h4>
                <ul className="allArticles-list">
                {starwarsSeries.map((swSeries) => (
                    <li key={swSeries.id}>
                    <Link to={swSeries.route}>{swSeries.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </main>
    </>
  )
}

export default AllArticles;