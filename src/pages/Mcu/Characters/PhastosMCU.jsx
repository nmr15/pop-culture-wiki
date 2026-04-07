import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const PhastosMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Phastos (MCU) - Pop Culture Wiki";
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
                {id: "1.2.2", title: "Furthuring human development"}
              ]},
              {id: "1.3", title: "500 Year War", sub2: [
                {id: "1.3.1", title: "Mission in Spain"},
                {id: "1.3.2", title: "Ending the war"},
                {id: "1.3.3", title: "Recounting the 500 Year War"}
              ]},
              {id: "1.4", title: "Building a Hover Pad"},
              {id: "1.5", title: "Life on Earth", sub2: [
                {id: "1.5.1", title: "Defeating the Deviants"},
                {id: "1.5.2", title: "Giving up on humanity"},
                {id: "1.5.3", title: "Starting a family"}
              ]},
              {id: "1.6", title: "Emergence", sub2: [
                {id: "1.6.1", title: "Reuniting with the Eternals"},
                {id: "1.6.2", title: "Returning to the Domo"},
                {id: "1.6.3", title: "Ikaris' betrayal"},
                {id: "1.6.4", title: "Stopping the Emergence"},
                {id: "1.6.5", title: "Judged by Arishem"}
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
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Phastos (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Phastos (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Phastos</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/39/Phastos_Character_Poster.jpg" alt="Phastos" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Brian Tyree Henry</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
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

export default PhastosMCU;