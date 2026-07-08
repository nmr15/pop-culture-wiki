import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const SersiMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Sersi (MCU) - Pop Culture Wiki";
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
                {id: "1.2.1", title: "Arriving in Mesopotamia"},
                {id: "1.2.2", title: "Marrying Ikaris"},
                {id: "1.2.3", title: "Battle of Beijing"},
                {id: "1.2.4", title: "Retelling"},
                {id: "1.2.5", title: "Defeating the Deviants"},
                {id: "1.2.6", title: "Playing speed"},
                {id: "1.2.7", title: "Life on Earth"}
              ]},
              {id: "1.3", title: "The Emergence", sub2: [
                {id: "1.3.1", title: "Return of the Deviants"},
                {id: "1.3.2", title: "Chosen by Ajak"},
                {id: "1.3.3", title: "Reuniting the Eternals"},
                {id: "1.3.4", title: "Learning the truth"},
                {id: "1.3.5", title: "Ambush at Druig's compound"},
                {id: "1.3.6", title: "Returning to the Domo"},
                {id: "1.3.7", title: "Ikaris' betrayal"},
                {id: "1.3.8", title: "Stopping the Emergence"},
                {id: "1.3.9", title: "Taken by Arishem the Judge"}
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
              {id: "3.2", title: "Other Equipment"},
              {id: "3.3", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Sersi (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Sersi (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Sersi</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/cc/Sersi_Character_Poster.jpg" alt="Sersi" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">Gemma Chan</td>
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

export default SersiMCU;