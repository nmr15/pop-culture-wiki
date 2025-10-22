import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaVC = () =>
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
          <li>Grand Theft Auto: Vice City</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: Vice City</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Vice-city-cover.jpg/250px-Vice-city-cover.jpg" 
            alt="Grand Theft Auto: Vice City logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto: Vice City is a 2002 action-adventure game developed by <Link>Rockstar North</Link> and published by 
            <Link> Rockstar Games</Link>. It is the fourth main game in the <Link to='/gta'>Grand Theft Auto series</Link>, following
            2001's <Link to='"/gta/grand_theft_auto_iii"'>Grand Theft Auto III</Link>, and the sixth entry overall. Set in 1986 within the
            fictional <Link>Vice City</Link> (based on Miami), the single-player story follows gangster <Link>Tommy Vercetti</Link>'s rise
            to power after being released from prison and becoming caught up in an ambushed drug deal. While seeking out those responsible,
            Tommy gradually builds a criminal empire byi seizing power from other criminal organizations.
          </p>
          <p>
            The game is played  from a third-person perspective and its world is navigated on foot or by vehicle. The open world design lets
            the player freely roam Vice City, consisting of two main islands. The game's plot is based on multiple real-world people and
            events in Miami such as Cubans, Haitians, and biker gangs, the 1980s crack epidemic, the Mafioso drug lords of Miami, and the
            dominance of glam metal. The game was also influenced by the films and television of the era, most notably Scarface (1983) and
            Miami Vice (1984-1990). Much of the development work constituted creating the game world to fit the inspiration and time period;
            the development team conducted extensive field research in Miami while creating the world. The game was released in October 2002
            for the <Link>PlayStation 2</Link>.
          </p>
          <p>
            Vice City received critical acclaim, with praise directed at its music, gameplay, story, and open world design, though it
            generated controversy over its depiction of violence and racial groups. It received year-end accolades from several gaming
            publications, and it is considered one of the <Link>sixth generation of console gaming</Link>'s most significant titles and
            among the best video games ever made. Vice City became the best-selling game of 2002 and one of the best-selling PlayStation
            2 games with over 14.2 million copies sold; it has sold over 17.5 million copies overall. It was released for Windows and the
            <Link> Xbox</Link> in 2003, followed by enchanced versions and mobile ports in the 2010s and a <Link>a remastered version</Link>
            in 2021. It was followed by <Link to='/gta/grand_theft_auto_san_andreas'>Grand Theft Auto: San Andreas</Link> (2004) and a prequel,
            <Link to="/gta/grand_theft_auto_vice_city_stories"> Vice City Stories</Link> (2006).
          </p>
        </div>
      </main>
    </>
  )
}

export default GtaVC;