import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaSA = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list"></ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto: San Andreas</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: San Andreas</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/GTASABOX.jpg/250px-GTASABOX.jpg" 
            alt="Grand Theft Auto: San Andreas logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by <Link>Rockstar North</Link> and published by
            <Link> Rockstar Games</Link>. It is the fifth main game in the <Link to="/gta">Grand Theft Auto series</Link>, following 2002's
            <Link to="/gta/grand_theft_auto_vice_city">Grand Theft Auto: Vice City</Link>, and the seventh entry overall. Set within the fictional
            U.S. state of <Link>San Andreas</Link>, the game follows <Link>Carl "CJ" Johnson</Link>, who returns home in 1992 after his mother's murder
            and finds his old street gang has lost much of their territory. Over the course of the game, he attempts to rebuild the gang, clashes with
            corrupt authorities and powerful criminals, and gradually unravels the truth behind his mother's murder.
          </p>
          <p>
            The game is played from a third-person perspective and its world is navigated on foot or by vehicle. The open world design lets the player
            freely roam San Andreas, consisting of three major metropolitan cities: <Link>Los Santos</Link>, <Link>San Fierro</Link>, and
            <Link> Las Venturas</Link>, based on Los Angeles, San Francisco, and Las Vegas, respectively. Rockstar conducted on-site research in each
            city and consulted Los Angeles natives DJ Pooh, Estevan Oriol, and Mister Cartoon for help imitating the city's culture. The narrative is
            based on multiple real-life events in Los Angeles, including the Bloods and Crips street gang rivalry, the 1990s crack epidemic, the 1992
            Los Angeles riots, and the Rampart scandal. The 75-person development team spent nearly two years creating the game. San Andreas was
            released in October 2004 for the <Link>PlayStation 2</Link>.
          </p>
          <p>
            The game received critical acclaim for its characters, narrative, open world design, and visual fidelity, but mixed response towards its
            mission design, technical issues, and portrayal of race. It generated controversy when the hidden "<Link>Hot Coffee</Link>" sex minigame
            was discovered, briefly requiring the game to be re-rated Adults Only. San Andreas received year-end accolades from several gaming
            publications, and it is considered one of the <Link>sixth generation of console gaming</Link>'s most significant titles and among the
            best video games ever made. It was released for Windows and the <Link>Xbox</Link> in 2005, followed by enhanced versions and mobile ports
            in the 2010s, and <Link>a remastered version</Link> in 2021. San Andreas is the best-selling PlayStation 2 game with over 17.3 million
            copies sold, and one of the best-selling games of all time with 27.5 million copies sold overall. Its successor, 
            <Link to="/gta/grand_theft_auto_iv"> Grand Theft Auto IV</Link>, was released in April 2008.
          </p>
        </div>
      </main>
    </>
  )
}

export default GtaSA;