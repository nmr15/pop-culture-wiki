import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaIVBoGT = () =>
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
          <li className="sidebar-list-item"><a href="#3">Reception</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto IV: The Ballad of Gay Tony</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto IV: The Ballad of Gay Tony</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/The_Ballad_of_Gay_Tony_cover.jpg/250px-The_Ballad_of_Gay_Tony_cover.jpg" 
            alt="Grand Theft Auto IV: The Ballad of Gay Tony logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto IV: The Ballad of Gay Tony is the second of two episodic expansion packs for the 2008 video game
            <Link to="/gta/grand_theft_auto_iv">Grand Theft Auto IV</Link>, developed by <Link>Rockstar North</Link> and published by
            <Link> Rockstar Games</Link>. It was first released for the <Link>Xbox 360</Link> on October 29, 2009 as a downloadble add-on
            for owners of Grand Theft Auto IV, and simultaneously on disc alongside <Link to="/gta/grand_theft_auto_iv_the_lost_and_damned">
            Grand Theft Auto: The Lost and Damned</Link> in the standalone compilation Grand Theft Auto: Episodes from Liberty City, which
            does not require the base game. Both the downloadable version and the compilation were relased for <Link>PlayStation 3</Link>
            and Windows on April 13, 2020 in North America, and on April 16 in PAL regions. Microsoft added the compilation to the Xbox One
            backward-compatibllity program in February 2017.
          </p>
          <p>
            Set concurrently with the events of Grand Theft Auto IV and The Lost and Damned, the game follows Luis Fernandez Lopez, a
            Domonican-American former drug dealer who now works as bodyguard and business partner to nightclub impressario Anthony "Gay Tony"
            Prince. The narrative centers on Luis's efforts to help Tony survive drug abuse, mounting debt, conflicts with Mafia families,
            and repeated assassination attempts, while also conducting the trilogy's "diamond" subplot. The game received generally favorable
            reviews from critics, with particular praise for the depiction of its titular LGBT character.
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
          <h2 className="article-heading-2" id="3">Reception</h2>
          <div>

          </div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default GtaIVBoGT;