import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaLCS = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">

        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto: Liberty City Stories</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: Liberty City Stories</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Grand_Theft_Auto_Liberty_City_Stories_box.jpg/250px-Grand_Theft_Auto_Liberty_City_Stories_box.jpg" 
            alt="Grand Theft Auto: Liberty City Stories logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto: Liberty City Stories is a 2005 action-adventure game developed in a collaboration between <Link>Rockstar Leeds</Link> and
            <Link> Rockstar North</Link>, and published by <Link>Rockstar Games</Link>. The ninth installment in the <Link to="/gta">Grand Theft
            Auto series</Link>, it was initially released as a <Link>PlayStation Portable</Link> exclusive in October 2005. A port for the
            <Link> PlayStation 2</Link> was later released in June 2006. At the time of release, the recommended retail price of the PS2 port was
            around half the price of the PSP version, because the PS2 version does not feature the custom soundtrack ripping capabilties of the PSP
            version. Ports for iOS, Android, and Fire OS devices were also released in December 2015, February 2016, and March 2016, respectively.
          </p>
          <p>
            The game is the first 3D title in the series to be released for handheld devices, and acts as a prequel to 2001's
            <Link to="/gta/grand_theft_auto_iii"> Grand Theft Auto III</Link>, using the same setting of <Link>Liberty City</Link> (a fictional parody
            of New York City). The single-player story, set in 1998, follows mobster <Link>Toni Cipriani</Link>, a character first introduced in
            Grand Theft Auto III, and his efforts to rise through the ranks of the Leone crime family, while slowly becoming invlolved in a power
            struggle among the city's various Mafia organizations. The PSP version of the game also included a multiplayer mode through a wireless
            ad hoc network, which allows up to six players to engage in several different game modes.
          </p>
          <p>
            Liberty City Stories received generally positive reviews from critics, and was a commercial success, selling over 8 million copies as of
            March 2008 and becoming the best selling PSP game of all time. It was followed in October 2006 by 
            <Link to="/gta/grand_theft_auto_vice_city_stories"> Grand Theft Auto: Vice City Stories</Link>, a prequel to 2002's
            <Link to="/gta/grand_theft_auto_vice_city"> Grand Theft Auto: Vice City</Link>.
          </p>
        </div>
      </main>
    </>
  )
}

export default GtaLCS;