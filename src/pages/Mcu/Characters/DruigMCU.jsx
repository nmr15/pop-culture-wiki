import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const DruigMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Druig (MCU) - Pop Culture Wiki";
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
                {id: "1.2.2", title: "Battle of Helen-Kyo"},
                {id: "1.2.3", title: "Hide and seek"},
                {id: "1.2.4", title: "Defeating Kapa"},
                {id: "1.2.5", title: "Retelling Helen-Kyo"},
                {id: "1.2.6", title: "Fall of Tenochtitian"},
                {id: "1.2.7", title: "Starting a community"}
              ]},
              {id: "1.3", title: "The Emergence", sub2: [
                {id: "1.3.1", title: "Reuniting with the Eternals"},
                {id: "1.3.2", title: "Ambush at the compound"},
                {id: "1.3.3", title: "Returning to the Domo"},
                {id: "1.3.4", title: "Stopping the Emergence"}
              ]},
              {id: "1.4", title: "Finding other Eternals", sub2: [
                {id: "1.4.1", title: "Meeting Starfox"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Former powers"},
              {id: "2.3", title: "Abilities"}
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
          <li>Druig (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Druig (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Druig</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6d/Druig_Character_Poster.jpg" alt="Druig" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Barry Keoghan</Link></td>
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

export default DruigMCU;