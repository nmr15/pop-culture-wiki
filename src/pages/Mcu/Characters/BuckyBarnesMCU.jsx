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
          <Collapse 
            id="1"
            item="Biography"
            sub={[
              {id: "1.1", title: "Early life", sub2: [
                {id: "1.1.1", title: "Meeting Steve Rogers"}
              ]},
              {id: "1.2", title: "World War II", sub2: [
                {id: "1.2.1", title: "Sarah Rogers' funeral"},
                {id: "1.2.2", title: "1943 Stark Expo"},
                {id: "1.2.3", title: "Prisoner of war"},
                {id: "1.2.4", title: "Saved by Captain America"},
                {id: "1.2.5", title: "Return to camp"},
                {id: "1.2.6", title: "Howling Commandos"},
                {id: "1.2.7", title: "Final mission"}
              ]},
              {id: "1.3", title: "Hydra's greatest soldier", sub2: [
                {id: "1.3.1", title: "Captured by Hydra"},
                {id: "1.3.2", title: "A mysterious assassin"},
                {id: "1.3.3", title: "Assassination of the Starks"},
                {id: "1.3.4", title: "Training Winter Soldiers"},
                {id: "1.3.5", title: "Massacre at the Hotel Inessa"},
                {id: "1.3.6", title: "Encounter with Black Widow"}
              ]},
              {id: "1.4", title: "Hydra uprising", sub2: [
                {id: "1.4.1", title: "Attack on Nick Fury"},
                {id: "1.4.2", title: "Alexander Pierce's orders"},
                {id: "1.4.3", title: "Battle of Washington, D.C."},
                {id: "1.4.4", title: "Forgotten memories"},
                {id: "1.4.5", title: "Battle at the Triskelion"},
                {id: "1.4.6", title: "Regaining memories"},
              ]},
              {id: "1.5", title: "End of the line", sub2: [
                {id: "1.5.1", title: "Found by Captain America"},
                {id: "1.5.2", title: "Captured by Everett Ross"},
                {id: "1.5.3", title: "Escape from the JCTC"},
                {id: "1.5.4", title: "Helmut Zemo's plan"},
                {id: "1.5.5", title: "Building the team"},
                {id: "1.5.6", title: "Battle at Leipzig-Hall airport"},
                {id: "1.5.7", title: "Fighting off Iron Man"}
              ]},
              {id: "1.6", title: "Healing his mind", sub2: [
                {id: "1.6.1", title: "Treatment in Wakanda"},
                {id: "1.6.2", title: "Freedom from brainwashing"},
                {id: "1.6.3", title: "Speaking with Shuri"}
              ]},
              {id: "1.7", title: "Infinity War", sub2[
                {id: "1.7.1", title: "Recruited to fight"},
                {id: "1.7.2", title: "Battle of Wakanda"},
                {id: "1.7.3", title: "Thanos' victory"},
                {id: "1.7.4", title: "Battle of Earth"},
                {id: "1.7.5", title: "Steve Rogers' retirement"}
              ]},
              {id: "1.8", title: "Making amends", sub2: [
                {id: "1.8.1", title: "Confronting L. Atwood"},
                {id: "1.8.2", title: "Therapy sessions"},
                {id: "1.8.3", title: "Lunch with Yori Nakajima"},
                {id: "1.8.4", title: "Date with Leah"},
                {id: "1.8.5", title: "New Captain America"}
              ]},
              {id: "1.9", title: "Partnership with Falcon"},
              {id: "1.10", title: "Tensions increasing"},
              {id: "1.11", title: "Being at peace"},
              {id: "1.12", title: "Entering politics"},
              {id: "1.13", title: "New Avengers"}
            ]}
          />
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