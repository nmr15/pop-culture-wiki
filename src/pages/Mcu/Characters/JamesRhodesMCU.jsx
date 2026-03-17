import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const JamesRhodesMCU = () =>
{
  useEffect(() =>
  {
    document.title = "James Rhodes (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Liaison to Stark Industries"}
              ]},
              {id: "1.2", title: "Dispute with Tony Stark", sub2: [
                {id: "1.2.1", title: "Presenting Tony Stark's award"},
                {id: "1.2.2", title: "Private plane ride"}
              ]},
              {id: "1.3", title: "Tony Stark kidnapped", sub2: [
                {id: "1.3.1", title: "Weapons presentation"},
                {id: "1.3.2", title: "Rescuing Tony Stark"},
                {id: "1.3.3", title: "Tony Stark's new direction"},
                {id: "1.3.4", title: "Visied by Tony Stark"},
                {id: "1.3.5", title: "Creation of Iron Man"},
                {id: "1.3.6", title: "Obadiah Stane's betrayal"},
                {id: "1.3.7", title: "Iron Man's speech"}
              ]},
              {id: "1.4", title: "Stark's publicity", sub2: [
                {id: "1.4.1", title: "Uneasy alliance with Hammer"}
              ]},
              {id: "1.5", title: "Questioning Iron Man", sub2: [
                {id: "1.5.1", title: "Meeting with Congress"},
                {id: "1.5.2", title: "Plane ride home"},
                {id: "1.5.3", title: "Helping Tony Stark"},
                {id: "1.5.4", title: "Tony Stark's birthday party"}
              ]},
              {id: "1.6", title: "War Machine", sub2: [
                {id: "1.6.1", title: "Return to the military"},
                {id: "1.6.2", title: "Becoming War Machine"},
                {id: "1.6.3", title: "Chasing Iron Man"},
                {id: "1.6.4", title: "Battle at Stark Expo"},
                {id: "1.6.5", title: "Honored by Stern"},
                {id: "1.6.6", title: "Hunting the Ten Rings"},
                {id: "1.6.7", title: "Battle of Hong Kong"}
              ]},
              {id: "1.7", title: "Iron Patriot", sub2: [
                {id: "1.7.1", title: "Rebranding"},
                {id: "1.7.2", title: "Lunch with Tony Stark"},
                {id: "1.7.3", title: "Search for Mandarin"},
                {id: "1.7.4", title: "Captured by A.I.M."},
                {id: "1.7.5", title: "Tortured by Aldrich Killian"},
                {id: "1.7.6", title: "Finding Mandarin"},
                {id: "1.7.7", title: "Stopping Aldrich Killian"},
                {id: "1.7.8", title: "Battle on the Norco"},
                {id: "1.7.9", title: "Conflict aftermath"}
              ]},
              {id: "1.8", title: "Ultron offensive", sub2: [
                {id: "1.8.1", title: "Party at Avengers Tower"},
                {id: "1.8.2", title: "Attack on Avengers Tower"},
                {id: "1.8.3", title: "Avengers argument"},
                {id: "1.8.4", title: "Battle of Sokovia"}
              ]},
              {id: "1.9", title: "Avengers member", sub2: [
                {id : "1.9.1", title: "Joining the team"},
                {id : "1.9.2", title: "Attack on Ultron"}
              ]},
              {id: "1.10", title: "Avengers civil war", sub2: [
                {id: "1.10.1", title: "Sokovia Accords"},
                {id: "1.10.2", title: "Arresting Captain America"},
                {id: "1.10.3", title: "Battle at Leipzig-Halle airport"},
                {id: "1.10.4", title: "Spinal paralysis"},
                {id: "1.10.5", title: "Injury recovery"}
              ]},
              {id: "1.11", title: "Infinity War", sub2: [
                {id: "1.11.1", title: "Reuniting the Avengers"},
                {id: "1.11.2", title: "Arrival in Wakanda"},
                {id: "1.11.3", title: "Battle of Wakanda"},
                {id: "1.11.4", title: "Thanos' Victory"},
                {id: "1.11.5", title: "Meeting Captain Marvel"},
                {id: "1.11.6", title: "Rescue of Tony Stark"},
                {id: "1.11.7", title: "Ambush on Thanos"},
                {id: "1.11.8", title: "Searching for Clint Barton"}
              ]},
              {id: "1.12", title: "Time Heist", sub2: [
                {id:"1.12.1", title: "Time travel"},
                {id:"1.12.2", title: "Creating the plan"},
                {id:"1.12.3", title: "Theft of the Power Stone"},
                {id:"1.12.4", title: "Blip"},
                {id:"1.12.5", title: "Attack by Thanos"},
                {id:"1.12.6", title: "Battle of Earth"}
              ]},
              {id: "1.13", title: "Life goes on", sub2: [
                {id: "1.13.1", title: "Captain America tribute"}
              ]},
              {id: "1.14", title: "Secret Invasion", sub2: [
                {id: "1.14.1", title: "Replaced"}
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
              {id: "3.1", titie: "War Machine armor"},
              {id: "3.2", titie: "Weapons"},
              {id: "3.3", titie: "Other equipment"},
              {id: "3.4", titie: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>James Rhodes (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">James Rhodes (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>James Rhodes</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/77/WarMachine-EndgameProfile.jpg" alt="James Rhodes" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">
                Terrence Howard <br />
                <Link>Don Cheadle</Link>
              </td>
            </tr>
            <tr>
              <td className="infobox-data">Appearances</td>
              <td className="infobox-data">
                <Link to="/mcu/iron_man_film">Iron Man</Link> <br />
                <Link to="/mcu/iron_man_2">Iron Man 2</Link> <br />
                <Link to="/mcu/iron_man_3">Iron Man 3</Link> <br />
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

export default JamesRhodesMCU;