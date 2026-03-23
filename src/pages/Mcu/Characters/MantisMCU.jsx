import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const MantisMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Mantis (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Serving Ego"}
              ]},
              {id: "1.2", title: "Meeting the Guardians", sub2: [
                {id: "1.2.1", title: "Father and son reunion"},
                {id: "1.2.2", title: "Demonstrating her powers"},
                {id: "1.2.3", title: "Bonding with Drax"},
                {id: "1.2.4", title: "Turning against Ego"},
                {id: "1.2.5", title: "Battle on Ego's planet"}
              ]},
              {id: "1.3", title: "Joining the Guardians", sub2: [
                {id: "1.3.1", title: "Revealing her secret"},
                {id: "1.3.2", title: "Traveling in the galaxy"}
              ]},
              {id: "1.4", title: "Infinity War", sub2: [
                {id: "1.4.1", title: "Meeting Thor"},
                {id: "1.4.2", title: "Ambush in Knowhere"},
                {id: "1.4.3", title: "Searching for Gamora"},
                {id: "1.4.4", title: "Battle of Titan"},
                {id: "1.4.5", title: "Thanos' victory"},
                {id: "1.4.6", title: "Battle of Earth"}
              ]},
              {id: "1.5", title: "Return to space", sub2: [
                {id: "1.5.1", title: "Guardians reassembled"},
                {id: "1.5.2", title: "Adventures in the galaxy"},
                {id: "1.5.3", title: "Battle of Indigarr"},
                {id: "1.5.4", title: "Answering distress calls"}
              ]},
              {id: "1.6", title: "Operating from Knowhere", sub2: [
                {id: "1.6.1", title: "Buying Knowhere"},
                {id: "1.6.2", title: "Return to Earth"},
                {id: "1.6.3", title: "Visiting Hollywood"},
                {id: "1.6.4", title: "Kidnapping Kevin Bacon"},
                {id: "1.6.5", title: "Celebrating Christmas"},
                {id: "1.6.6", title: "Worrying about her brother"},
                {id: "1.6.7", title: "Adam Warlock's attack"}
              ]},
              {id: "1.7", title: "Saving Rocket", sub2: [
                {id: "1.7.1", title: "Infiltrating the Orgoscope"},
                {id: "1.7.2", title: "Trying to give advice"},
                {id: "1.7.3", title: "Visiting Counter-Earth"},
                {id: "1.7.4", title: "Captured by the High Evolutionary"},
                {id: "1.7.5", title: "Fighting the High Evolutionary"}
              ]},
              {id: "1.8", title: "Journey of self discovery", sub2: [
                {id: "1.8.1", title: "Leaving the Guardians"}
              ]}
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
              {id: "3.2", titie: "Other equipment"},
              {id: "3.3", titie: "Vehicles"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Mantis (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Mantis (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Mantis</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/27/Mantis_Infobox.jpg" alt="Mantis" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Pom Klementieff</Link></td>
            </tr>
            <tr>
              <td className="infobox-data">Appearances</td>
              <td className="infobox-data">
                <Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link> <br />
                <Link to="/mcu/the_guardians_of_the_galaxy_holiday_special">The Guardians of the Galaxy Holiday Special</Link> <br />
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

export default MantisMCU;