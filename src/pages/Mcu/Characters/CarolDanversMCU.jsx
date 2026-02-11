import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const CarolDanversMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Carol Danvers (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Difficult childhood"},
                {id: "1.1.2", title: "Determination"}
              ]},
              {id: "1.2", title: "Air Force training", sub2: [
                {id: "1.2.1", title: "Joining the Air Force"},
                {id: "1.2.2", title: "Meeting Maria Rambeau"},
                {id: "1.2.3", title: "First day"},
                {id: "1.2.4", title: "Making up with Bianchi"},
                {id: "1.2.5", title: "Field day"},
                {id: "1.2.6", title: "Second beast"},
                {id: "1.2.7", title: "Acceptance day"}
              ]},
              {id: "1.3", title: "Learning to fly", sub2: [
                {id: "1.3.1", title: "Meeting Bonnie and Jack Thompson"},
                {id: "1.3.2", title: "First day of classes"},
                {id: "1.3.3", title: "First flight"},
                {id: "1.3.4", title: "Air show"},
                {id: "1.3.5", title: "Power-off stall"},
                {id: "1.3.6", title: "Choosing a new path"},
                {id: "1.3.7", title: "Flying Falcons tryouts"},
                {id: "1.3.8", title: "Celebratory meal"}
              ]},
              {id: "1.4", title: "Test pilot career", sub2: [
                {id: "1.4.1", title: "Recognition"},
                {id: "1.4.2", title: "Leaving for the summer"},
                {id: "1.4.3", title: "Friendship with Maria Rambeau"},
                {id: "1.4.4", title: "Working with Wendy Lawson"},
                {id: "1.4.5", title: "Assassination of Mar-Vell"}
              ]},
              {id: "1.5", title: "Infiltration on Aphos Prime", sub2: [
                {id: "1.5.1", title: "Crash-landing"},
                {id: "1.5.2", title: "Dragged into the mud"},
                {id: "1.5.3", title: "Escaping"}
              ]},
              {id: "1.6", title: "Infiltration into the Sy'gyl research base", sub2: [
                {id: "1.6.1", title: "Preparation"},
                {id: "1.6.2", title: "Infiltrating Sy'gyl"},
                {id: "1.6.3", title: "Meeting Rhomann Dey"},
                {id: "1.6.4", title: "Leaving Sy'gyl"}
              ]},
              {id: "1.7", title: "Kree-Skrull war", sub2: [
                {id: "1.7.1", title: "Meeting the Supreme Intelligence"},
                {id: "1.7.2", title: "Ambush in Torfa"},
                {id: "1.7.3", title: "Escape from the Skrulls' ship"},
                {id: "1.7.4", title: "Returning to Earth"},
                {id: "1.7.5", title: "Chase of the Skrulls"},
                {id: "1.7.6", title: "Alliance with Nick Fury"},
                {id: "1.7.7", title: "Ambush at the Joint Dark Energy Mission Facility"},
                {id: "1.7.8", title: "Rambeau family reunion"},
                {id: "1.7.9", title: "Finding out the truth"}
              ]},
              {id: "1.8", title: "Aiding the Skrulls", sub2: [
                {id: "1.8.1", title: "Journey to Mar-Vell's lab"},
                {id: "1.8.2", title: "Confronting the Supreme Intelligence"},
                {id: "1.8.3", title: "Battle at Mar-Vell's laboratory"},
                {id: "1.8.4", title: "Final showdown"},
                {id: "1.8.5", title: "Finding the Skrulls a home"}
              ]},
              {id: "1.9", title: "Solo adventures", sub2: [
                {id: "1.9.1", title: "Destroying the Supreme Intellgence"},
                {id: "1.9.2", title: "Hero across the universe"}
              ]},
              {id: "1.10", title: "Infinity War", sub2: [
                {id: "1.10.1", title: "Thanos' victory"},
                {id: "1.10.2", title: "Rescue of Tony Stark"},
                {id: "1.10.3", title: "Ambush on Thanos"}
              ]},
              {id: "1.11", title: "Member of the Avengers", sub2: [
                {id: "1.11.1", title: "Visiting Maria Rambeau"},
                {id: "1.11.2", title: "Marrying Prince Yan"},
                {id: "1.11.3", title: "Universal responsibilities"},
                {id: "1.11.4", title: "Battle of Earth"},
                {id: "1.11.5", title: "Tony Stark's funeral"},
                {id: "1.11.6", title: "Honored on Earth"}
              ]},
              {id: "1.12", title: "Check-ins with Earth", sub2: [
                {id: "1.12.1", title: "Meeting Shang-Chi"},
                {id: "1.12.2", title: "Trips"}
              ]},
              {id: "1.13", title: "Entangled", sub2: [
                {id: "1.13.1", title: "Investigating a jump point"},
                {id: "1.13.2", title: "Uncontrollably teleported"},
                {id: "1.13.3", title: "Destruction of Tarmax IV"},
                {id: "1.13.4", title: "Team bonding"},
                {id: "1.13.5", title: "Return to Aladna"},
                {id: "1.13.6", title: "Attack on Aladna"},
                {id: "1.13.7", title: "Opening up"},
                {id: "1.13.8", title: "Attack on the sun"},
                {id: "1.13.9", title: "Losing Monica Rambeau"},
                {id: "1.13.10", title: "Fulfilling a promise"},
                {id: "1.13.11", title: "Back on Earth"}
              ]},
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
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Carol Danvers (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Carol Danvers (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Carol Danvers</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/3d/Captain_Marvel_Profile.png" alt="Carol Danvers" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Brie Larson</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/captain_marvel_film">Captain Marvel</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/shangchi_and_the_legends_of_the_ten_rings">Shang-Chi and the Legend of the Ten Rings</Link> (post-credits-scene) <br />
                <Link to="/mcu/the_marvels">The Marvels</Link>
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

export default CarolDanversMCU;