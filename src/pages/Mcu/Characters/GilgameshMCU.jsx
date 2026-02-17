import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const GilgameshMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Gilgamesh (MCU) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Biography"
            sub={[
              {id: "1.1", title: "Creation"},
              {id: "1.2", title: "Protecting humanity", sub2: [
                {id: "1.2.1", title: "Arriving on Earth"},
                {id: "1.2.2", title: "Incorporated into mythology"},
                {id: "1.2.3", title: "500 Year War", sub3: [
                  {id: "1.2.3.1", title: "Battling the Kraken"},
                  {id: "1.2.3.2", title: "Ending the war"},
                  {id: "1.2.3.3", title: "Retelling the war"}
                ]}
              ]},
              {id: "1.3", title: "Exile", sub2: [
                {id: "1.3.1", title: "Defeating the Deviants"},
                {id: "1.3.2", title: "Protecting Thena"},
                {id: "1.3.3", title: "Duel in Antarctica"},
                {id: "1.3.4", title: "Life in Australia"}
              ]},
              {id: "1.4", title: "The Emergence", sub2: [
                {id: "1.4.1", title: "Reuniting with the Eternals"},
                {id: "1.4.2", title: "Ambush at Druig's compound"}
              ]},
              {id: "1.5", title: "Legacy"}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other equipment"},
              {id: "3.3", title: "Vehicles"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Gilgamesh (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Gilgamesh (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Gilgamesh</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/07/Gilgamesh_Character_Poster.jpg" alt="Gilgamesh" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Don Lee</Link></td>
            </tr>
            <tr>
              <td className="infobox-data">Appearances</td>
              <td className="infobox-data"><Link to="/mcu/eternals">Eternals</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default GilgameshMCU;