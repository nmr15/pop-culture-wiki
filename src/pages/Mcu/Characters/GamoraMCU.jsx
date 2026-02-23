import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const GamoraMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Gamora (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Raised by Thanos", sub2: [
                {id: "1.1.1", title: "Growing up on Zen-Whoberi"},
                {id: "1.1.2", title: "Deadliest woman in the galaxy"}
              ]},
              {id: "1.2", title: "Quest for the Orb", sub2: [
                {id: "1.2.1", title: "Family conquests"},
                {id: "1.2.2", title: "Betraying Ronan"},
                {id: "1.2.3", title: "Meeting Star-Lord"},
                {id: "1.2.4", title: "Imprisoned in the Kyln"},
                {id: "1.2.5", title: "Escape from the Kyln"},
                {id: "1.2.6", title: "Trouble on Knowhere"},
                {id: "1.2.7", title: "Meeting the Collector"},
                {id: "1.2.8", title: "Skirmish on Knowhere"},
                {id: "1.2.9", title: "Joining forces"}
              ]},
              {id: "1.3", title: "Battle of Xandar", sub2: [
                {id: "1.3.1", title: "Flying into the battle"},
                {id: "1.3.2", title: "Sister vs. Sister"},
                {id: "1.3.3", title: "Crashing on Xandar"},
                {id: "1.3.4", title: "Killing Ronan"}
              ]},
              {id: "1.4", title: "Guardians of the Galaxy", sub2: [
                {id: "1.4.1", title: "Aftermath"},
                {id: "1.4.2", title: "Battle on Sovereign"},
                {id: "1.4.3", title: "Family reunion"}
              ]},
              {id: "1.5", title: "Encounter with Ego", sub2: [
                {id: "1.5.1", title: "Meeting Star-Lord's father"},
                {id: "1.5.2", title: "Exploring Ego's planet"},
                {id: "1.5.3", title: "Showdown with Nebula"},
                {id: "1.5.4", title: "Battle on Ego's planet"},
                {id: "1.5.5", title: "Yondu's funeral"}
              ]},
              {id: "1.6", title: "Traveling in the galaxy"},
              {id: "1.7", title: "Infinity War", sub2: [
                {id: "1.7.1", title: "Meeting Thor"},
                {id: "1.7.2", title: "Return to Knowhere"},
                {id: "1.7.3", title: "Sisters reunited"},
                {id: "1.7.4", title: "Unwilling sacrifice"}
              ]},
              {id: "1.8", title: "Legacy", sub2: [
                {id: "1.8.1", title: "Star-Lord's rage"},
                {id: "1.8.2", title: "Soulworld"},
                {id: "1.8.3", title: "Younger variant"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Abilities"}
            ]]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other equipment"},
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
          <li>Gamora (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Gamora (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Gamora</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/70/Gamora_Infobox.jpg" alt="Gamora" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Zoe Saldaña</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link> <br />
                <Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
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

export default GamoraMCU;