import { useEffect } from "react"
import { Link } from 'react-router-dom'
import Collapse from "../../../components/Collapse"
import Heading2 from "../../../components/Heading2"

const Battlefield1942 = () =>
{
  useEffect(() =>
  {
    document.title = "Battlefield 1942 - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Gameplay"
            sub={[
              {id: "1.1", title: "Roles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Development</a></li>
          <li className="sidebar-list-item"><a href="#3">Classes</a></li>
          <li className="sidebar-list-item"><a href="#4">Factions</a></li>
          <li className="sidebar-list-item"><a href="#5">Maps and Gamemodes</a></li>
          <li className="sidebar-list-item"><a href="#6">Weapons and Vehicles</a></li>
          <Collapse 
            id="7"
            item="Expansions"
            sub={[
              {id: "7.1", title: "The Road to Rome"},
              {id: "7.2", title: "Secret Weapons of WWII"}
            ]}
          />
          <Collapse 
            id="8"
            item="Special Editions"
            sub={[
              {id: "8.1", title: "Deluxe Edition"},
              {id: "8.2", title: "World War II Anthology"},
              {id: "8.3", title: "Complete Collection"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Soundtrack</a></li>
          <li className="sidebar-list-item"><a href="#10">Reception</a></li>
          <li className="sidebar-list-item"><a href="#11">Franchise</a></li>
          <li className="sidebar-list-item"><a href="#12">Mods</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/battlefield">Battlefield (franchise)</Link></li>
          <li>Battlefield 1942</li>
        </ul>
        <div>
          <h1 className="article-heading">Battlefield 1942</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Battlefield 1942</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/27/Battlefield_1942_Box_Art.jpg" alt="Battlefield 1942 cover art" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developer</th>
              <td className="infobox-data"><Link>DICE</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link>Electronic Arts</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next game</th>
              <td className="infobox-data"><Link to="/battlefield/battlefield_vietnam">Battlefield Vietnam</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Battlefield 1942</b> is a 2002 <Link to="first_person_shooter">first-person shooter</Link> game developed by <Link to="/dice">DICE</Link> and
            published by <Link to="/electronic_arts">Electronic Arts</Link> for Microsoft Windows and MAC OS X. It is the first installment in the
            <Link to="/battlefield"> Battlefield</Link> series. The game can be played in single-player mode against the video game AI or in multiplayer mode
            against players on the internet or in local area network. It is a popular platform for mod developers, with many released modifications that
            alter the gameplay and theme.
          </p>
          <p>
            In-game, players assume the role of one of five classes of infantry: <Link to="/battlefield/scout">Scout</Link>,
            <Link to="/battlefield/assault"> Assault</Link>, <Link to="/battlefield/anti-tank">Anti-Tank</Link>, <Link to="/battlefield/medic">Medic</Link>,
            and <Link to="/battlefield/engineer">Engineer</Link>. Players can also have the ability to fly various World War II fighter aircarft and
            bombers, navigate capital ships, submarines, and aircraft carriers, man coastal artillery defenses, drive tanks, APCs, and jeeps, and take
            control of anti-aircraft guns and mounted machine guns.
          </p>
          <p>
            Each battle takes place on one of several maps located in a variety of places and famous battlefields in all of the major theaters of World
            War II: the Pacific, European, North African, Eastern, and Italian Fronts. Combat is between the Axis powers and the Allies. The location
            determines which nation-specific armies are used (for example, on the Wake Island map, it is Japan versus the United States, while on the El
            Alamein map, it is Germany versus the United Kingdom). The maps in Battlefield 1942 are based on real battles are somewhat realistically
            portrayed.
          </p>
          <p>
            Upon release, Battlefield 1942 received generally favorable reviews, with particular praise directed toward the innovative gameplay,
            multiplayer, and World War II theme. The game went on to perform well commercially, with over 3 million copies sold by 2004. Since its
            release, the game has spawned numerous sequels and spin-offs, which ultimately turned into the Battlefield series. Battlefield 1942 is
            retrospectively considered to be one the best video games of all time.
          </p>
        </div>
      </main>
    </>
  )
}

export default Battlefield1942;