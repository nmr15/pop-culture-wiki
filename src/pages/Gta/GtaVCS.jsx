import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaVCS = () =>
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
          <li>Grand Theft Auto: Vice City Stories</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: Vice City Stories</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/GTA_Vice_City_Stories_PSP_boxart.jpg/250px-GTA_Vice_City_Stories_PSP_boxart.jpg" 
            alt="Grand Theft Auto: Vice City Stories logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto: Vice City Stories is a 2006 action-adventure game developed by <Link>Rockstar Leeds</Link> and <Link>Rockstar
            North</Link>, and published by <Link>Rockstar Games</Link>. The tenth entry in the <Link to="/gta">Grand Theft Auto series</Link>,
            the game was initially released as a <Link>PlayStation Portable</Link> exclusive in October 2006. A <Link>PlayStation 2</Link> port
            was released in March 2007. Set within the fictional <Link>Vice City</Link> (based on Miami) in 1984, the game is a prequel to 2002's
            <Link to="/gta/grand_theft_auto_vice_city"> Grand Theft Auto: Vice City</Link> (set in 1986) and follows the exploits of ex-soldier
            <Link> Victor "Vic" Vance</Link>, a minor character originally featured in said game. The story centers around Vic's attempts to build
            up a criminal empire alongside his brother <Link>Lance</Link>. With the initial intention of raising money for his sick brother Pete's
            medication, Vic comes into conflict with rival gangs, drug lords, and other enemies.
          </p>
          <p>
            In addition to the traditional gameplay elements and side missions of the series, the game features a unique empire building system, in
            which players must expand their criminal syndicate from the ground-up by taking over businesses from rival organizations, and completing
            missions specific for each of them to increase their income and unlock additional rewards. Like its predecessor,
            <Link to="/gta/grand_theft_auto_liberty_city_stories"> Grand Theft Auto: Liberty City Stories</Link>, the PSP version of the game
            included a multiplayer mode through a wireless ad hoc network, which allowed up to six players to engage in several different game
            modes.
          </p>
          <p>
            Vice City Stories received generally positive reviews from critics, and has sold over 4.5 million copies as of March 2008, making it
            the fourth best-selling PSP game of all time. The next game in the series was <Link to="/gta/grand_theft_auto_iv">Grand Theft
            Auto IV</Link>, which was released in April 2008.
          </p>
        </div>
      </main>
    </>
  )
}

export default GtaVCS;