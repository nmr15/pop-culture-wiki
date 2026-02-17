import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const IkarisMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Ikaris (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Creation", sub2: [
                {id: "1.1.1", title: "Arriving on Earth"},
                {id: "1.1.2", title: "Learning the truth"},
                {id: "1.1.3", title: "Marrying Sersi"},
                {id: "1.1.4", title: "Becoming a Greek legend"}
              ]},
              {id: "1.2", title: "500 Year War", sub2: [
                {id: "1.2.1", title: "Battle of Beijing"},
                {id: "1.2.2", title: "Retelling the war"}
              ]},
              {id: "1.3", title: "Leaving the Eternals", sub2: [
                {id: "1.3.1", title: "Defeating the Deviants"},
                {id: "1.3.2", title: "Playing speed"},
                {id: "1.3.3", title: "Leaving Sersi"}
              ]},
              {id: "1.4", title: "The Emergence", sub2: [
                {id: "1.4.1", title: "Killing Ajak"},
                {id: "1.4.2", title: "Helping Sersi and Sprite"},
                {id: "1.4.3", title: "Reuniting the Eternals"},
                {id: "1.4.4", title: "Ambush at Druig's compound"},
                {id: "1.4.5", title: "Returning to the Domo"},
                {id: "1.4.6", title: "Battling the Eternals"},
                {id: "1.4.7", title: "Suicide"}
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
              {id: "3.1", title: "Other equipment"},
              {id: "3.2", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Ikaris (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ikaris (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ikaris</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Ikaris_Character_Poster.jpg" alt="Ikaris" />
                </span>
              </td>
            </tr>
           <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Richard Madden</Link></td>
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

export default IkarisMCU;