import { Link } from 'react-router-dom'
import { topics } from '../data';
import { mcu, marveltv, mcuChar } from '../data/dataMcu';
import { starwarsFilms, starwarsSeries } from '../data/dataStarWars';
import { communitychars, communitys1, communitys2, communitys3, communitys4, communitys5, communitys6 } from '../data/dataCommunity';
import { beatles, beatlesAlbums } from '../data/dataBeatles';

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
                <h4 className="article-heading-4">Star Wars series</h4>
                <ul className="allArticles-list">
                {starwarsSeries.map((swSeries) => (
                    <li key={swSeries.id}>
                    <Link to={swSeries.route}>{swSeries.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="Community">Community</h3>
            <div>
                <h4 className="article-heading-4">Community characters</h4>
                <ul className="allArticles-list">
                {communitychars.map((commChar) => (
                    <li key={commChar.id}>
                    <Link to={commChar.route}>{commChar.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">Community Season 1</h4>
                <ul className="allArticles-list">
                {communitys1.map((commS1) => (
                    <li key={commS1.id}>
                    <Link to={commS1.route}>{commS1.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">Community Season 2</h4>
                <ul className="allArticles-list">
                {communitys2.map((commS2) => (
                    <li key={commS2.id}>
                    <Link to={commS2.route}>{commS2.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">Community Season 3</h4>
                <ul className="allArticles-list">
                {communitys3.map((commS3) => (
                    <li key={commS3.id}>
                    <Link to={commS3.route}>{commS3.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">Community Season 4</h4>
                <ul className="allArticles-list">
                {communitys4.map((commS4) => (
                    <li key={commS4.id}>
                    <Link to={commS4.route}>{commS4.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">Community Season 5</h4>
                <ul className="allArticles-list">
                {communitys5.map((commS5) => (
                    <li key={commS5.id}>
                    <Link to={commS5.route}>{commS5.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">Community Season 6</h4>
                <ul className="allArticles-list">
                {communitys6.map((commS6) => (
                    <li key={commS6.id}>
                    <Link to={commS6.route}>{commS6.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="Beatles">The Beatles</h3>
            <div>
                <h4 className="article-heading-4">Members</h4>
                <ul className="allArticles-list">
                {beatles.map((beatle) => (
                    <li key={beatle.id}>
                    <Link to={beatle.route}>{beatle.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">Albums</h4>
                <ul className="allArticles-list">
                {beatlesAlbums.map((btlsAlbm) => (
                    <li key={btlsAlbm.id}>
                    <Link to={btlsAlbm.route}>{btlsAlbm.title}</Link>
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