import { Link } from 'react-router-dom'
import { topics } from '../data';
import { mcu, marveltv, mcuChar } from '../data/dataMcu';
import { marvel } from '../data/dataMarvel';
import { starwarsFilms, starwarsSeries } from '../data/dataStarWars';
import { communitychars, communityS1, communitys2, communitys3, communitys4, communitys5, communitys6 } from '../data/dataCommunity';
import { beatles, beatlesAlbums, beatlesPPM, beatlesWTB, beatlesAHDN } from '../data/dataBeatles';
import { spongebobMedia, spongebobS1 } from '../data/dataSpongebob';
import { HimymChar, himymS1, himymS2, himymS3, himymS4, himymS5, himymS6, himymS7, himymS8, himymS9 } from '../data/dataHimym';
import { gta } from '../data/dataGta';
import { assassinscreed } from '../data/dataAssassinsCreed';
import { gfEpisodes } from '../data/dataGravityFalls';
import { asoue } from '../data/dataAsoue';
import { spidermanFilms } from '../data/dataSpidermanFilms';
import { justcauseGames } from '../data/dataJustCause';

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

        {/* MARVEL CINEMATIC UNIVERSE */}
        <div className="allArticles-section">
          <h3 className="article-heading-3" id="Mcu">Marvel Cinematic Universe</h3>
          <p><Link to="/mcu">Main article</Link></p>
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

        {/* MARVEL COMICS */}
        <div className="allArticles-section">
          <h3 className="article-heading-3" id="MarvelComics">Marvel Comics</h3>
          <p><Link to="/marvelcomics">Main article</Link></p>
          <div>
            <h4 className="article-heading-4">Heroes</h4>
            <ul className="allArticles-list">
                {marvel.map((heroes) => (
                    <li key={heroes.id}>
                    <Link to={heroes.route}>{heroes.title}</Link>
                    </li>
                ))}
                </ul>
          </div>
        </div>

        {/* STAR WARS */}
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="StarWars">Star Wars</h3>
            <p><Link to="/starwars">Main article</Link></p>
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

        {/* COMMUNITY */}
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="Community">Community</h3>
            <p><Link to="/community">Main article</Link></p>
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

        {/* THE BEATLES */}
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="Beatles">The Beatles</h3>
            <p><Link to="/beatles">Main article</Link></p>
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

        {/* SPONGEBOB SQUAREPANTS */}
        <div className="allArticles-section">
          <h3 className="article-heading-3" id="Spongebob" >SpongeBob SquarePants</h3>
          <p><Link to="/spongebob">Main article</Link></p>
          <div>
            <h4 className="article-heading-4">Show and Film</h4>
            <ul className="allArticles-list">
              {spongebobMedia.map((sbMedia) => (
                <li key={sbMedia.id}>
                  <Link to={sbMedia.route}>{sbMedia.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <h4 className="article-heading-4">Season 1</h4>
            <ul className="allArticles-list">
              {spongebobS1.map((sbS1) => (
                <li key={sbS1.id}>
                  <Link to={sbS1.route}>{sbS1.title}</Link>
                </li>
              ))}
            </ul>
        </div>

        {/* HOW I MET YOUR MOTHER */}
        <div className="allArticles-section">
          <h3 className="article-heading-3" id="Himym" >How I Met Your Mother</h3>
          <p><Link to="/himym">Main article</Link></p>
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
          <div>
            <h4 className="article-heading-4">Season 1</h4>
            <ul className="allArticles-list">
              {himymS1.map((himymS1) => (
                <li key={himymS1.id}>
                  <Link to={himymS1.route}>{himymS1.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Season 2</h4>
            <ul className="allArticles-list">
              {himymS2.map((himymS2) => (
                <li key={himymS2.id}>
                  <Link to={himymS2.route}>{himymS2.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Season 3</h4>
            <ul className="allArticles-list">
              {himymS3.map((himymS3) => (
                <li key={himymS3.id}>
                  <Link to={himymS3.route}>{himymS3.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Season 4</h4>
            <ul className="allArticles-list">
              {himymS4.map((himymS4) => (
                <li key={himymS4.id}>
                  <Link to={himymS4.route}>{himymS4.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Season 5</h4>
            <ul className="allArticles-list">
              {himymS5.map((himymS5) => (
                <li key={himymS5.id}>
                  <Link to={himymS5.route}>{himymS5.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Season 6</h4>
            <ul className="allArticles-list">
              {himymS6.map((himymS6) => (
                <li key={himymS6.id}>
                  <Link to={himymS6.route}>{himymS6.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Season 7</h4>
            <ul className="allArticles-list">
              {himymS7.map((himymS7) => (
                <li key={himymS7.id}>
                  <Link to={himymS7.route}>{himymS7.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Season 8</h4>
            <ul className="allArticles-list">
              {himymS8.map((himymS8) => (
                <li key={himymS8.id}>
                  <Link to={himymS8.route}>{himymS8.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="article-heading-4">Season 9</h4>
            <ul className="allArticles-list">
              {himymS9.map((himymS9) => (
                <li key={himymS9.id}>
                  <Link to={himymS9.route}>{himymS9.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GRAND THEFT AUTO */}
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="Gta">Grand Theft Auto</h3>
            <p><Link to="/gta">Main article</Link></p>
            <div>
              <h4 className="article-heading-4">Games</h4>
              <ul className="allArticles-list">
              {gta.map((gta) => (
                  <li key={gta.id}>
                  <Link to={gta.route}>{gta.title}</Link>
                  </li>
              ))}
              </ul>
            </div>
        </div>

        {/* ASSASSIN'S CREED */}
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="AssassinsCreed">Assassin's Creed</h3>
            <p><Link to="/assassinscreed">Main article</Link></p>
            <div>
              <h4 className="article-heading-4">Games</h4>
              <ul className="allArticles-list">
              {assassinscreed.map((ac) => (
                  <li key={ac.id}>
                  <Link to={ac.route}>{ac.title}</Link>
                  </li>
              ))}
              </ul>
            </div>
        </div>

        {/* GRAVITY FALLS */}
        <div className="allArticles-section">
          <h3 className="article-heading-3" id="GravityFalls">Gravity Falls</h3>
          <p><Link to="/gravityfalls">Main article</Link></p>
          <div>
            <h4 className="article-heading-4">Characters</h4>
            <ul className="allArticles-list">
              <li>
                <Link to="/gravity_falls/dipper_pines">Dipper Pines</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* A SERIES OF UNFORTUNATE EVENTS */}
        <div className="allArticles-section">
            <h3 className="article-heading-3" id="Asoue">A Series of Unfortunate Events</h3>
            <p><Link to="/a_series_of_unfortunate_events">Main article</Link></p>
            <div>
              <h4 className="article-heading-4">Books</h4>
              <ul className="allArticles-list">
              {asoue.map((asoue) => (
                  <li key={asoue.id}>
                  <Link to={asoue.route}>{asoue.title}</Link>
                  </li>
              ))}
              </ul>
            </div>
        </div>

        {/* NON-MCU SPIDER-MAN MOVIES */}
        <div className="allArticles-section">
          <h3 className="article-heading-3" id="SpidermanFilms">Non-MCU Spider-Man films</h3>
          <p><Link to="/spiderman_films">Main article</Link></p>
          <ul className="allArticles-list">
            {spidermanFilms.map((spFilm) => (
              <li key={spFilm.id}>
                <Link to={spFilm.route}>{spFilm.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* JUST CAUSE */}
        <div className="allArticles-section">
          <h3 className="article-heading-3" id="JustCause">Just Cause</h3>
          <p><Link to="/just_cause">Main article</Link></p>
          <div>
              <h4 className="article-heading-4">Games</h4>
              <ul className="allArticles-list">
              {justcauseGames.map((jcGame) => (
                  <li key={jcGame.id}>
                  <Link to={jcGame.route}>{jcGame.title}</Link>
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