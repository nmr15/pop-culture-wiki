import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const BruceBannerMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Bruce Banner (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "Early life"},
              {id: "1.2", title: "Scientist", sub2: [
                {id: "1.2.1", title: "Specializing in gamma radiation"},
                {id: "1.2.2", title: "Recreating the super soldier serum"},
                {id: "1.2.3", title: "Becoming Hulk"}
              ]},
              {id: "1.3", title: "On the run", sub2: [
                {id: "1.3.1", title: "Hunted by Thaddeus Ross"},
                {id: "1.3.2", title: "Bar evalutation"},
                {id: "1.3.3", title: "American-Canadian border incident"},
                {id: "1.3.4", title: "Monitored by S.H.I.E.L.D."},
                {id: "1.3.5", title: "Failed suicide attempt"},
                {id: "1.3.6", title: "Hope in South America"},
                {id: "1.3.7", title: "Attack on Espinoza's cartel"},
                {id: "1.3.8", title: "Life within Brazil"},
                {id: "1.3.9", title: "Search for a cure"},
                {id: "1.3.10", title: "Ambush in Porto Verde"},
                {id: "1.3.11", title: "Returning home"},
                {id: "1.3.12", title: "Reunion with Betty Ross"},
                {id: "1.3.13", title: "Battle at Culver University"}
              ]},
              {id: "1.4", title: "Hunting for a cure", sub2: [
                {id: "1.4.1", title: "Heading to New York"},
                {id: "1.4.2", title: "Meeting Mr. Blue"},
                {id: "1.4.3", title: "Captured"},
                {id: "1.4.4", title: "Duel of Harlem"},
                {id: "1.4.5", title: "Learning to control Hulk"}
              ]},
              {id: "1.5", title: "Chitauri invasion", sub2: [
                {id: "1.5.1", title: "Recruited by Black Widow"},
                {id: "1.5.2", title: "Working with S.H.I.E.L.D."},
                {id: "1.5.3", title: "Attack on the Helicarrier"},
                {id: "1.5.4", title: "Battle of New York"},
                {id: "1.5.5", title: "Battle aftermath"}
              ]},
              {id: "1.6", title: "Living as a free man", sub2: [
                {id: "1.6.1", title: "Therapy session"},
                {id: "1.6.2", title: "World renowned scientist"}
              ]},
              {id: "1.7", title: "Avengers reassembled", sub2: [
                {id: "1.7.1", title: "War on Hydra"},
                {id: "1.7.2", title: "Battle of Sudan"},
                {id: "1.7.3", title: "Attack on the Hydra research base"}
              ]},
              {id: "1.8", title: "Ultron offensive", sub2: [
                {id: "1.8.1", title: "Designing Ultron"},
                {id: "1.8.2", title: "Celebration"},
                {id: "1.8.3", title: "Attack on Avengers Tower"},
                {id: "1.8.4", title: "Argument"},
                {id: "1.8.5", title: "Duel of Johannesburg"},
                {id: "1.8.6", title: "The farm"},
                {id: "1.8.7", title: "Birth of Vision"},
                {id: "1.8.8", title: "Rescuing Black Widow"},
                {id: "1.8.9", title: "Battle of Sokovia"},
                {id: "1.8.10", title: "Champion of Sakaar"}
              ]},
              {id: "1.9", title: "Ragnarök", sub2: [
                {id: "1.9.1", title: "Duel in the Grand Arena"},
                {id: "1.9.2", title: "Relaxing with Thor"},
                {id: "1.9.3", title: "Return to Banner"},
                {id: "1.9.4", title: "Hunted by the Grandmaster"},
                {id: "1.9.5", title: "Sakaar revolution"},
                {id: "1.9.6", title: "Turning back into Hulk"},
                {id: "1.9.7", title: "Journey back to Earth"}
              ]},
              {id: "1.10", title: "Infinity War", sub2: [
                {id: "1.10.1", title: "Attack on the Statesman"},
                {id: "1.10.2", title: "Crashing landing"},
                {id: "1.10.3", title: "Attack on Greenwich Village"},
                {id: "1.10.4", title: "Reunion with the Avengers"},
                {id: "1.10.5", title: "Battle of Wakanda"},
                {id: "1.10.6", title: "Thanos' victory"},
                {id: "1.10.7", title: "Meeting Captain Marvel"},
                {id: "1.10.8", title: "Ambush on Thanos"}
              ]},
              {id: "1.11", title: "Becoming Smart Hulk", sub2: [
                {id: "1.11.1", title: "Merging with Hulk's body"},
                {id: "1.11.2", title: "Rejoining the Avengers"},
                {id: "1.11.3", title: "Testing time travel"},
                {id: "1.11.4", title: "Finding an old friend"},
                {id: "1.11.5", title: "Testing the time suit"},
                {id: "1.11.6", title: "Locating the Infinity Stones"}
              ]},
              {id: "1.12", title: "Time heist", sub2: [
                {id: "1.12.1", title: "Meeting the Ancient One"},
                {id: "1.12.2", title: "Creating the Nano Gauntlet"},
                {id: "1.12.3", title: "Blip"},
                {id: "1.12.4", title: "Ambushed by Thanos"},
                {id: "1.12.5", title: "Battle of Earth"},
                {id: "1.12.6", title: "Returning the Stones"},
                {id: "1.12.7", title: "Lunch with Scott Lang"}
              ]},
              {id: "1.13", title: "Reverting to human", sub2: [
                {id: "1.13.1", title: "Healing his arm"},
                {id: "1.13.2", title: "Meeting Shang-Chi"},
                {id: "1.13.3", title: "Car accident"}
              ]},
              {id: "1.14", title: "Return to Smart Hulk", sub2: [
                {id: "1.14.1", title: "Training She-Hulk"},
                {id: "1.14.2", title: "Cousins quarrel"}
              ]},
              {id: "1.15", title: "Returning to Sakaar", sub2: [
                {id: "1.15.1", title: "Discussing Emil Blonsky"}
              ]},
              {id: "1.16", title: "Meeting his son", sub2: [
                {id: "1.16.1", title: "Original plot"},
                {id: "1.16.2", title: "Revised plot"}
              ]}              
            ]}
          />
          <Collapse 
            id="2"
            item="Personalities"
            sub={[
              {id: "2.1", title: "Bruce Banner's personality"},
              {id: "2.2", title: "Hulk's personality"}
            ]}
          />
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", title: "Powers"},
              {id: "3.2", title: "Former powers"},
              {id: "3.3", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="4"
            item="Equipment"
            sub={[
              {id: "4.1", title: "Weapons"},
              {id: "4.2", title: "Other equipment"},
              {id: "4.3", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Bruce Banner (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Bruce Banner (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Bruce Banner</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/79/Hulk_in_the_She-Hulk_series_-_Infobox.jpg" alt="Bruce Banner" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">
                <Link>Edward Norton</Link> <br />
                <Link>Mark Ruffalo</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/the_incredible_hulk_film">The Incredible Hulk</Link> <br />
                <Link to="mcu/the_avengers_film">The Avengers</Link> <br />
                <Link to="/mcu/iron_man_3">Iron Man 3</Link> (post-credits-scene) <br />
                <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> <br />
                <Link to="/mcu/thor_ragnarok">Thor: Ragnarok</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/captain_marvel_film">Captain Marvel</Link> (mid-credits-scene) <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/shangchi_and_the_legends_of_the_ten_rings">Shang-Chi and the Legend of the Ten Rings</Link> (mid-credits-scene) <br />
                <Link to="/mcu/shehulk_attorney_at_law">She-Hulk: Attorney at Law</Link> (3 episodes)
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

export default BruceBannerMCU;