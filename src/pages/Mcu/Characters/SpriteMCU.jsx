import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const SpriteMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Sprite (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Protecting humanity", sub2: [
                {id: "1.1.1", title: "Arriving on Earth"},
                {id: "1.1.2", title: "Shaping Earth's mythology"},
                {id: "1.1.3", title: "Eternal wedding"}
              ]},
              {id: "1.1", title: "500 Year War"},
              {id: "1.1", title: "Splitting up"},
              {id: "1.1", title: "The Emergence"}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Former powers"},
              {id: "2.2", title: "Abilities"}
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
          <li>Sprite (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Sprite (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Sprite</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d8/Sprite_Character_Poster.jpg" alt="Sprite" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">Lia McHugh</td>
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

export default SpriteMCU;