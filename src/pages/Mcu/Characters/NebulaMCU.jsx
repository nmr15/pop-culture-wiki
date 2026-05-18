import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const NebulaMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Nebula (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Early life", sub2: [
                {id: "1.1.1", title: "Trained for Thanos"}
              ]},
              {id: "1.2", title: "Quest for the Orb", sub2: [
                {id: "1.2.1", title: "Family conquests"},
                {id: "1.2.1", title: "Following Ronan's orders"},
                {id: "1.2.3", title: "Meeting with Thanos"},
                {id: "1.2.4", title: "Cleansing the Kyln"},
                {id: "1.2.5", title: "Skirmish on Knowhere"},
                {id: "1.2.6", title: "Betraying Thanos"},
                {id: "1.2.7", title: "Battle of Xandar"},
                {id: "1.2.8", title: "Dueling Gamora"}
              ]},
              {id: "1.3", title: "Finding acceptance"
              },
              {id: "1.4", title: "Keeping a Log"},
              {id: "1.5", title: "Infinity War"},
              {id: "1.6", title: "Aftermath"},
              {id: "1.7", title: "Time Heist"},
              {id: "1.8", title: "Member of the Guardians"},
              {id: "1.9", title: "Operating from Knowhere"},
              {id: "1.10", title: "Saving Rocket"},
              {id: "1.11", title: "Protector of Knowhere"}
            ]}
          />
          <Collapse 
            id="2"
            item="Poers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Cybernetic enhancements"},
              {id: "3.2", title: "Weapons"},
              {id: "3.3", title: "Other equipment"},
              {id: "3.4", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Nebula (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Nebula (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Nebula</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/37/Nebula_Vol._3.jpg" alt="Nebula" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">Karen Gillian</td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link> <br />
                <Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link> <br />
                <Link to="/mcu/the_guardians_of_the_galaxy_holiday_special">The Guardians of the Galaxy Holiday Special</Link>
                <Link to="/mcu/guardians_of_the_galaxy_vol_3">Guardians of the Galaxy Vol. 3</Link>
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

export default NebulaMCU;