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
          
        </div>
      </main>
    </>
  )
}

export default Battlefield1942;