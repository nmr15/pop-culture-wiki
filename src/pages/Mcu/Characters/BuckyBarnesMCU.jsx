import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const BuckyBarnesMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Bucky Barnes (MCU) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>

          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", title: "Powers"},
              {id: "3.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="4"
            item="Equipment"
            sub={[
              {id: "4.1", title: "World War II weapons"},
              {id: "4.2", title: "Winter Soldier's arsenal"},
              {id: "4.3", title: "Other equipment"},
              {id: "4.4", title: "Vehicles"}
            ]}
          />
          <Collapse 
            id="5"
            item="Facilities"
            sub={[
              {id: "5.1", title: "Prisons"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Bucky Barnes (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Bucky Barnes (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Bucky Barnes</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/21/Winter_Soldier_Infobox.jpg" alt="Bucky Barnes" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Sebastian Stan</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances by</th>
              <td className="infobox-data">
                <Link to="/mcu/captain_america_the_first_avenger">Captain America: The First Avenger</Link> <br />
                <Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link> <br />
                <Link to="/mcu/antman_film">Ant-Man</Link> (post-credits-scene) <br />
                <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> <br />
                <Link to="/mcu/black_panther">Black Panther</Link> (post-credits-scene) <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/the_falcon_and_the_winter_soldier">The Falcon and the Winter Soldier</Link> (6 episodes) <br />
                <Link to="/mcu/captain_america_brave_new_world">Captain America: Brave New World</Link> <br />
                <Link to="/mcu/thunderbolts">Thunderbolts*</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default BuckyBarnesMCU;