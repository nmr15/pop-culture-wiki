import { Link } from 'react-router-dom'
import { topics } from '../data';
import { mcu, marveltv, mcuChar } from '../data/dataMcu';
import { starwarsFilms, starwarsSeries } from '../data/dataStarWars';
import { communitychars, communityS1, communitys2, communitys3, communitys4, communitys5, communitys6 } from '../data/dataCommunity';
import { beatles, beatlesAlbums, beatlesPPM, beatlesWTB, beatlesAHDN } from '../data/dataBeatles';
import { HimymChar } from '../data/dataHimym';
import { gta } from '../data/dataGta';
import { assassinscreed } from '../data/dataAssassinsCreed';
import { asoue } from '../data/dataAsoue';
import { spidermanFilms } from '../data/dataSpidermanFilms';

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
                {communityS1.map((commS1) => (
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
            <div>
                <h4 className="article-heading-4">Please Please Me</h4>
                <ul className="allArticles-list">
                {beatlesPPM.map((btlsPPM) => (
                    <li key={btlsPPM.id}>
                    <Link to={btlsPPM.route}>{btlsPPM.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">With the Beatles</h4>
                <ul className="allArticles-list">
                {beatlesWTB.map((btlsWTB) => (
                    <li key={btlsWTB.id}>
                    <Link to={btlsWTB.route}>{btlsWTB.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="article-heading-4">A Hard Day's Night</h4>
                <ul className="allArticles-list">
                {beatlesAHDN.map((btlsAHDN) => (
                    <li key={btlsAHDN.id}>
                    <Link to={btlsAHDN.route}>{btlsAHDN.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>

        <div className="allArticles-section">
          <h3 className="article-heading-3" id="Himym" >How I Met Your Mother</h3>
          <div>
            <h4 className="article-heading-4">Characters</h4>
            <ul className="allArticles-list">
              {HimymChar.map((HimymChar) => (
                <li key={HimymChar.id}>
                  <Link to={HimymChar.route}>{HimymChar.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="allArticles-section">
            <h3 className="article-heading-3" id="Gta">Grand Theft Auto</h3>
            <ul className="allArticles-list">
            {gta.map((gta) => (
                <li key={gta.id}>
                <Link to={gta.route}>{gta.title}</Link>
                </li>
            ))}
            </ul>
        </div>

        <div className="allArticles-section">
            <h3 className="article-heading-3" id="AssassinsCreed">Assassin's Creed</h3>
            <ul className="allArticles-list">
            {assassinscreed.map((ac) => (
                <li key={ac.id}>
                <Link to={ac.route}>{ac.title}</Link>
                </li>
            ))}
            </ul>
        </div>

        <div className="allArticles-section">
          <h3 className="article-heading-3" id="GravityFalls">Gravity Falls</h3>
          <ul className="allArticles-list">
            <li>
              <Link to="/gravity_falls/dipper_pines">Dipper Pines</Link>
            </li>
          </ul>
        </div>

        <div className="allArticles-section">
            <h3 className="article-heading-3" id="Asoue">A Series of Unfortunate Events</h3>
            <ul className="allArticles-list">
            {asoue.map((asoue) => (
                <li key={asoue.id}>
                <Link to={asoue.route}>{asoue.title}</Link>
                </li>
            ))}
            </ul>
        </div>

        <div className="allArticles-section">
          <h3 className="article-heading-3" id="SpidermanFilms">Non-MCU Spider-Man films</h3>
          <ul className="allArticles-list">
            {spidermanFilms.map((spFilm) => (
              <li key={spFilm.id}>
                <Link to={spFilm.route}>{spFilm.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default AllArticles;