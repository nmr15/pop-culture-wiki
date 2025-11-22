import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaIVLaD = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <Collapse 
            id="2"
            item="Synopsis"
            sub={[
              {id: "2.1", title: "Setting"},
              {id: "2.2", title: "Plot"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Soundtrack</a></li>
          <li className="sidebar-list-item"><a href="#4">Development</a></li>
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Controversy"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto IV: The Lost and Damned</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto IV: The Lost and Damned</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Grand_Theft_Auto_IV_coverart.jpg/250px-Grand_Theft_Auto_IV_coverart.jpg" 
            alt="Grand Theft Auto IV: The Lost and Damned logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto IV: The Lost and Damned is the first of two episodic expansion packs of the 2008 video game
            <Link to="/gta/grand_theft_auto_iv">Grand Theft Auto IV</Link>, developed by <Link>Rockstar North</Link> and published by
            <Link> Rockstar Games</Link>. The game was released individually for the <Link>Xbox 360</Link> on February 17, 2009, and as
            part of the disc-based package Grand Theft Auto: Episodes from Liberty City for <Link>PlayStation 3</Link> and Windows on
            April 13, 2010. The package also included the second Grand Theft Auto IV expansion, 
            <Link to="/gta/grand_theft_auto_iv_the_ballad_of_gay_tony">The Ballad of Gay Tony</Link>, and does not require the base game to
            be played. Microsoft added Episodes from Liberty City to its backwards compatible list for Xbox One platforms in February 2017.
          </p>
          <p>
            Set concurrently with the events of Grand Theft Auto IV and The Ballad of Gay Tony, The Lost and Damned follows the exploits of
            <Link> Johnny Klebitz</Link>, vice president of the Liberty City chapter of The Lost MC, a motorcycle club which, along with
            himeself, feature in a number of missions in both games. The main storyline of the episode focuses on Johnny's efforts to keep
            the chapter running, while dealing with internal confilcts, gang warfare, drug running, and various enemies. The episode
            portrays Johnny's perspective in the storylines of the blood diamonds and heroin, which are depicted from the other protagonists'
            perspectives in Grand Theft Auto IV and The Ballad of Gay Tony.
          </p>
          <p>
            The game received highly positive reviews upon release.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Gameplay</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Synopsis</h2>
          <div>
            <h3 className="article-heading-3" id="2.1">Setting</h3>
            <h3 className="article-heading-3" id="2.2">Plot</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Soundtrack</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Development</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Controversy</h3>
          </div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default GtaIVLaD;