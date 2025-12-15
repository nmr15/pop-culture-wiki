import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const TonyStarkMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Tony Stark (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "replace"},
              {id: "1.2", title: "replace"},
              {id: "1.3", title: "replace"},
              {id: "1.4", title: "replace"},
              {id: "1.5", title: "replace"},
              {id: "1.6", title: "replace"},
              {id: "1.7", title: "replace"},
              {id: "1.8", title: "replace"},
              {id: "1.9", title: "replace"},
              {id: "1.10", title: "replace"},
              {id: "1.11", title: "Mandarin threat", sub2: [
                {id: "1.11.1", title: "Armor obsession"},
                {id: "1.11.2", title: "Mental struggle"},
                {id: "1.11.3", title: "Anxiety confession"},
                {id: "1.11.4", title: "Threatening Mandarin"},
                {id: "1.11.5", title: "Mandarin research"},
                {id: "1.11.6", title: "Attacked by the Mandarin"},
                {id: "1.11.7", title: "Stranded in Tennessee"},
                {id: "1.11.81", title: "Meeting Harley Keene"},
                {id: "1.11.9", title: "Battle of Rose Hill"},
                {id: "1.11.10", title: "Locating Mandarin"},
                {id: "1.11.11", title: "Learning the truth"},
                {id: "1.11.12", title: "Aldrich Killian's hostage"},
                {id: "1.11.13", title: "Break out"},
                {id: "1.11.14", title: "Saving the Air Force One crew"},
                {id: "1.11.15", title: "Battle on the Norco"},
                {id: "1.11.16", title: "Showdown with Aldrich Killian"},
                {id: "1.11.17", title: "Clean Slate Protocol"},
              ]},
              {id: "1.12", title: "Temporary Retirement", sub2: [
                {id: "1.12.1", title: "A step further"},
                {id: "1.12.2", title: "Therapy session"}
              ]},
              {id: "1.13", title: "War on Hydra", sub2: [
                {id: "1.13.1", title: "Project Insight"}
              ]},
              {id: "1.14", title: "Avengers Reassembled", sub2: [
                {id: "1.14.1", title: "Battle of Sudan"},
                {id: "1.14.2", title: "Attack on the Hydra research base"},
                {id: "1.14.3", title: "Creation of Ultron"},
                {id: "1.14.4", title: "The Avengers party"}
              ]},
              {id: "1.15", title: "Ultron offensive", sub2: [
                {id: "1.15.1", title: "The birth of Ultron"},
                {id: "1.15.2", title: "Team Arguement"},
                {id: "1.15.3", title: "Hunting Ultron"},
                {id: "1.15.4", title: "Duel of Johannesburg"},
                {id: "1.15.5", title: "The Barton home"},
                {id: "1.15.6", title: "Hacking the NEXUS"},
                {id: "1.15.7", title: "Birth of Vision"},
                {id: "1.15.8", title: "Battle of Sokovia"},
                {id: "1.15.9", title: "Protecting the drill"}
              ]},
              {id: "1.16", title: "Leaving the Avengers", sub2: [
                {id: "1.16.1", title: "Saying his goodbyes"},
                {id: "1.16.2", title: "Investigating Spider-Man"},
                {id: "1.16.3", title: "Facing the consequences"}
              ]},
              {id: "1.17", title: "Avengers Civil War", sub2: [
                {id: "1.17.1", title: "Sokovia Accords"},
                {id: "1.17.2", title: "Fighting with a friend"},
                {id: "1.17.3", title: "Winter Soldier's escape"},
                {id: "1.17.4", title: "Recruiting Peter Parker"},
                {id: "1.17.5", title: "Failed negotiations"},
                {id: "1.17.6", title: "Battle of Leipzig-Halle airport"},
                {id: "1.17.7", title: "Clash aftermath"},
                {id: "1.17.8", title: "The Raft"},
                {id: "1.17.9", title: "Helmut Zemo's secret"},
                {id: "1.17.10", title: "Final clash with Captain America"},
                {id: "1.17.11", title: "Final showdown"},
                {id: "1.17.12", title: "Spider-Man's beginning"},
                {id: "1.17.13", title: "Picking up the pieces"}
              ]},
              {id: "1.18", title: "Launching a satellite"},
              {id: "1.19", title: "Advising Spider-Man", sub2: [
                {id: "1.19.1", title: "Encounter with Vulture"},
                {id: "1.19.2", title: "Staten Island ferry incident"},
                {id: "1.19.3", title: "Spider-Man's offer"}
              ]},
              {id: "1.20", title: "Return to Stark Industries"},
              {id: "1.21", title: "Infinity War", sub2: [
                {id: "1.21.1", title: "Meeting Doctor Strange"},
                {id: "1.21.2", title: "Convening at the Sanctum Sanctorum"},
                {id: "1.21.3", title: "Protecting Doctor Strange"},
                {id: "1.21.4", title: "Ascent to space"},
                {id: "1.21.5", title: "Rescue of Doctor Strange"},
                {id: "1.21.6", title: "Encountering the Guardians"},
                {id: "1.21.7", title: "Making a plan"},
                {id: "1.21.8", title: "Battle of Titan"},
                {id: "1.21.9", title: "Last man standing"},
                {id: "1.21.10", title: "Thanos' victory"},
                {id: "1.21.11", title: "Returning to Earth"}
              ]},
              {id: "1.22", title: "A normal life", sub2: [
                {id: "1.22.1", title: "In Mexico with Bruce Banner"},
                {id: "1.22.2", title: "Reunited again"},
                {id: "1.22.3", title: "Solving time travel"}
              ]},
              {id: "1.23", title: "Time Heist", sub2: [
                {id: "1.23.1", title: "Returning to the Avengers"},
                {id: "1.23.2", title: "Infiltrating Stark Tower"},
                {id: "1.23.3", title: "Infiltrating Camp Lehigh"},
                {id: "1.23.4", title: "Death of Natasha Romanoff"},
                {id: "1.23.5", title: "Assembling the Infinity Stones"},
                {id: "1.23.6", title: "Thanos' offensive"},
                {id: "1.23.7", title: "Battle of Earth"},
                {id: "1.23.8", title: "Self-sacrifice"}
              ]},
              {id: "1.24", title: "Legacy", sub2: [
                {id: "1.24.1", title: "Funeral and tributes"},
                {id: "1.24.2", title: "Worldwide impact"}
              ]}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Tony Stark (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Tony Stark (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Tony Stark</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9d/Iron_Man_Infobox.jpg" alt="Tony Stark" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default TonyStarkMCU;