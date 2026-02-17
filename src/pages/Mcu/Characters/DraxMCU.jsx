import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const DraxMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Drax (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Forming a family"}
              ]},
              {id: "1.2", title: "Quest for vengeance", sub2: [
                {id: "1.2.1", title: "Hunting Ronan the Accuser"},
                {id: "1.2.2", title: "Meeting the Guardians"},
                {id: "1.2.3", title: "Prison break"},
                {id: "1.2.4", title: "Joining the team"}
              ]},
              {id: "1.3", title: "Showdown with Ronan", sub2: [
                {id: "1.3.1", title: "Skirmish on Knowhere"},
                {id: "1.3.2", title: "Rescuing Peter Quill"},
                {id: "1.3.3", title: "Battle of Xandar"},
                {id: "1.3.4", title: "Skirmish with Korrath"},
                {id: "1.3.5", title: "Destroying Ronan"}
              ]},
              {id: "1.4", title: "Guardian of the Galaxy", sub2: [
                {id: "1.4.1", title: "Joining the team"},
                {id: "1.4.2", title: "Battle on Sovereign"},
                {id: "1.4.3", title: "Escape from the Sovereign fleet"},
                {id: "1.4.4", title: "Meeting Ego"},
                {id: "1.4.5", title: "Exploring Ego's planet"},
                {id: "1.4.6", title: "Bonding with Mantis"},
                {id: "1.4.7", title: "Mantis' confession"},
                {id: "1.4.8", title: "Battle on Ego's planet"},
                {id: "1.4.9", title: "Yondu's funeral"},
                {id: "1.4.10", title: "Life on the Quadrant"}
              ]},
              {id: "1.5", title: "Infinity War", sub2: [
                {id: "1.5.1", title: "Meeting Thor"},
                {id: "1.5.2", title: "Ambush in Knowhere"},
                {id: "1.5.3", title: "Searching for Gamora"},
                {id: "1.5.4", title: "Battle of Titan"},
                {id: "1.5.5", title: "Thanos' victory"},
                {id: "1.5.6", title: "Battle of Earth"}
              ]},
              {id: "1.6", title: "Return to space", sub2: [
                {id: "1.6.1", title: "Guardians reunited"},
                {id: "1.6.2", title: "Adventures in the galaxy"},
                {id: "1.6.3", title: "Battle of Indigarr"},
                {id: "1.6.4", title: "Answering distress calls"}
              ]},
              {id: "1.7", title: "Operating from Knowhere", sub2: [
                {id: "1.7.1", title: "Learning about Christmas"},
                {id: "1.7.2", title: "Visiting Hollywood"},
                {id: "1.7.3", title: "Kidnapping Kevin Bacon"},
                {id: "1.7.4", title: "Learning about actors"},
                {id: "1.7.5", title: "Celebrating Christmas"},
                {id: "1.7.6", title: "Attacked by Adam Warlock"}
              ]},
              {id: "1.8", title: "Saving Rocket", sub2: [
                {id: "1.8.1", title: "Infiltrating the Orgoscope"},
                {id: "1.8.2", title: "Visiting Counter-Earth"},
                {id: "1.8.3", title: "Captured by the High Evolutionary"},
                {id: "1.8.4", title: "Fighting the High Evolutionary"}
              ]},
              {id: "1.9", title: "Leaving the Guardians", sub2: [
                {id: "1.9.1", title: "Raising the Star Children"}
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
              {id: "3.2", title: "Other Equipment"},
              {id: "3.3", title: "Vehicles"}
            ]}
          />
          <Collapse 
            id="4"
            item="Facilities"
            sub={[
              {id: "4.1", title: "Prisons"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Drax (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Drax (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Drax</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/cd/Drax_Vol._3.jpg" alt="Drax" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Dave Bautistia</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances by</th>
              <td className="infobox-data">
                <Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link> <br />
                <Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link> <br />
                <Link>I am Groot</Link> (1 episode) <br />
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

export default DraxMCU;