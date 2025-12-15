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
              {id: "1.1", title: "Early life", sub2: [
                {id: "1.1.1", title: "Troubled childhood"},
                {id: "1.1.2", title: "Losing his parents"}
              ]},
              {id: "1.2", title: "CEO of Stark Industries", sub2: [
                {id: "1.2.1", title: "Rebuilding the company"},
                {id: "1.2.2", title: "Creating demons"},
                {id: "1.2.3", title: "Testing weapons in Arizona"},
                {id: "1.2.4", title: "Apogee award"},
                {id: "1.2.5", title: "Interview with Christine Everhart"},
                {id: "1.2.6", title: "Final hours of freedom"},
                {id: "1.2.7", title: "Presenting the Jericho"}
              ]},
              {id: "1.3", title: "Becoming Iron Man", sub2: [
                {id: "1.3.1", title: "Kidnapped by the Ten Rings"},
                {id: "1.3.2", title: "Building the first armor"},
                {id: "1.3.3", title: "Escaping the Ten Rings"},
                {id: "1.3.4", title: "No more weapons"},
                {id: "1.3.5", title: "Suit upgrades"},
                {id: "1.3.6", title: "Outdoor test flight"},
                {id: "1.3.7", title: "Obadiah Stane's betrayal"},
                {id: "1.3.8", title: "Battle of Guimira"},
                {id: "1.3.9", title: "Next mission"},
                {id: "1.3.10", title: "Duel of Los Angeles"},
                {id: "1.3.11", title: "I am Iron Man"},
                {id: "1.3.12", title: "Meeting Nick Fury"}
              ]},
              {id: "1.4", title: "Armored adventures", sub2: [
                {id: "1.4.1", title: "Testing his armor"},
                {id: "1.4.2", title: "Aerial assault training"},
                {id: "1.4.3", title: "Smartbomb"},
                {id: "1.4.4", title: "Dealing with a public identity"},
                {id: "1.4.5", title: "Dating Lina"},
                {id: "1.4.6", title: "Liberating an island"},
                {id: "1.4.7", title: "Partnership with Gorani Insurance"},
                {id: "1.4.8", title: "Person of the Year"},
              ]},
              {id: "1.5", title: "Facing health problems", sub2: [
                {id: "1.5.1", title: "Palladium poisoning"},
                {id: "1.5.2", title: "Starting the Stark Expo"},
                {id: "1.5.3", title: "Meeting with Senator Stern"},
                {id: "1.5.4", title: "Making Pepper Potts CEO"},
                {id: "1.5.5", title: "Monacco Grand Prix"},
                {id: "1.5.6", title: "Dual of Monacco"},
                {id: "1.5.7", title: "Meeting with Ivan Vanko"},
                {id: "1.5.8", title: "Ivan Vanko's attack aftermath"},
                {id: "1.5.9", title: "40th birthday party"}
              ]},
              {id: "1.6", title: "Rediscovering the element", sub2: [
                {id: "1.6.1", title: "Nick Fury's help"},
                {id: "1.6.2", title: "Researching his family"},
                {id: "1.6.3", title: "A new element"},
                {id: "1.6.4", title: "Battle at Stark Expo"},
                {id: "1.6.5", title: "Showdown with Ivan Vanko"}
              ]},
              {id: "1.7", title: "Making the new War Machine armor"},
              {id: "1.8", title: "Not a suitable candidate", sub2: [
                {id: "1.8.1", title: "Consultant for S.H.I.E.L.D."},
                {id: "1.8.2", title: "Public superhero"}
              ]},
              {id: "1.9", title: "Chitauri invasion", sub2: [
                {id: "1.9.1", title: "Avengers Initiative"},
                {id: "1.9.2", title: "Capturign Loki"},
                {id: "1.9.3", title: "Meeting the Avengers"},
                {id: "1.9.4", title: "Team tension"},
                {id: "1.9.5", title: "Defending the Helicarrier"},
                {id: "1.9.6", title: "Something to avenge"},
                {id: "1.9.7", title: "Confronting Loki"},
                {id: "1.9.8", title: "Battle of New York"},
                {id: "1.9.9", title: "Stopping the nuke"},
                {id: "1.9.10", title: "Battle aftermath"}
              ]},
              {id: "1.10", title: "After New York", sub2: [
                {id: "1.10.1", title: "Damage Control"},
                {id: "1.10.2", title: "Stealing B.A.R.F."},
                {id: "1.10.3", title: "The Iron Legion"}
              ]},
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
                {id: "1.11.17", title: "Clean Slate Protocol"}
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
          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
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
              {id: "4.1", title: "Iron Man armors"},
              {id: "4.2", title: "Weapons"},
              {id: "4.3", title: "Other equipment"},
              {id: "4.4", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Design</a></li>
          <Collapse 
            id="6"
            item="Facilities"
            sub={[
              {id: "6.1", title: "Prisons"}
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
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Roberty Downey Jr.</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/iron_man_film">Iron Man</Link> <br />
                <Link to="/mcu/iron_man_2">Iron Man 2</Link> <br />
                <Link to="mcu/the_avengers_film">The Avengers</Link> <br />
                <Link to="/mcu/iron_man_3">Iron Man 3</Link> <br />
                <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> <br />
                <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> <br />
                <Link to="/mcu/spiderman_homecoming">Spider-Man: Homecoming</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
        <div>
          <Heading2 id={1} title={"Biography"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Personality"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Powers and abilities"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Equipment"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Design"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Facilities"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default TonyStarkMCU;