import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const MakkariMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Makari (MCU) - Pop Culture Wiki";
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
                {id: "1.2.2", title: "Battle of Babylon"},
                {id: "1.2.3", title: "Hide and seek"},
                {id: "1.2.4", title: "Battle of Helen-Kyo"},
                {id: "1.2.5", title: "Defeating Kappa"},
                {id: "1.2.6", title: "Recounting the war"},
                {id: "1.2.7", title: "Defeating the Deviants"},
                {id: "1.2.8", title: "Living in the Domo"}
              ]},
              {id: "1.3", title: "The Emergence", sub2: [
                {id: "1.3.1", title: "Reuniting with the Eternals"},
                {id: "1.3.2", title: "Ikaris' betrayal"},
                {id: "1.3.2", title: "Stopping the Emergence"}
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
              {id: "3.2", titie: "Other equipment"},
              {id: "3.3", titie: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Makari (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Makari (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Makari</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/78/Makkari_infobox.jpg" alt="Makari" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Lauren Ridloff</Link></td>
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

export default MakkariMCU;