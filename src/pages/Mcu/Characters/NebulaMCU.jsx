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
              {id: "1.3", title: "Finding acceptance", sub2: [
                {id: "1.3.1", title: "Captured by the Sovereign"},
                {id: "1.3.2", title: "Escape from the Sovereign Fleet"},
                {id: "1.3.3", title: "Meeting Ego"},
                {id: "1.3.4", title: "Attack on Berhert"},
                {id: "1.3.5", title: "Ravager Mutiny"},
                {id: "1.3.6", title: "Fight with Gamora"},
                {id: "1.3.7", title: "Battle on Ego's Planet"},
                {id: "1.3.8", title: "Reconciling with Gamora"}
              ]},
              {id: "1.4", title: "Keeping a Log"},
              {id: "1.5", title: "Infinity War", sub2: [
                {id: "1.5.1", title: "Futile vengeance"},
                {id: "1.5.2", title: "Battle of Titan"},
                {id: "1.5.3", title: "Thanos' victory"}
              ]},
              {id: "1.6", title: "Aftermath", sub2: [
                {id: "1.6.1", title: "Trapped in Space"},
                {id: "1.6.2", title: "Locating Thanos"},
                {id: "1.6.3", title: "Ambush on Thanos"},
                {id: "1.6.4", title: "Joining the Avengers"}
              ]},
              {id: "1.7", title: "Time Heist", sub2: [
                {id: "1.7.1", title: "Discussing the Infinity Stones"},
                {id: "1.7.2", title: "Arriving on Morag"},
                {id: "1.7.3", title: "Theft of the Power Stone"},
                {id: "1.7.4", title: "Evil Nebula strikes"},
                {id: "1.7.5", title: "Freed by Gamora"},
                {id: "1.7.6", title: "Battle of Earth"}
                
              ]},
              {id: "1.8", title: "Member of the Guardians", sub2: [
                {id: "1.8.1", title: "Team reassembled"},
                {id: "1.8.2", title: "Adventures in the galaxy"},
                {id: "1.8.3", title: "Time on Indigarr"},
                {id: "1.8.4", title: "Answering distress calls"}
              ]},
              {id: "1.9", title: "Operating from Knowhere", sub2: [
                {id: "1.9.1", title: "Buying Knowhere"},
                {id: "1.9.2", title: "Celebrating Christmas"},
                {id: "1.9.3", title: "New upgrades"},
                {id: "1.9.4", title: "Taking charge"},
                {id: "1.9.5", title: "Adam Warlock's attack"}
              ]},
              {id: "1.10", title: "Saving Rocket", sub2: [
                {id: "1.10.1", title: "Reuniting with Gamora"},
                {id: "1.10.2", title: "Infiltrating the Orgoscope"},
                {id: "1.10.3", title: "Visiting Counter-Earth"},
                {id: "1.10.4", title: "Captured by the High Evolutionary"},
                {id: "1.10.5", title: "Fighting the High Evolutionary"}
              ]},
              {id: "1.11", title: "Protector of Knowhere", sub2: [
                {id: "1.11.1", title: "Leaving the Guardians"}
              ]}
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