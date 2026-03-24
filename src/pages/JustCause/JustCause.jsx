import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const JustCause = () =>
{
  useEffect(() =>
  {
    document.title = "Just Cause (video game series) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Overview</a></li>
          <Collapse 
            id="2"
            item="Games"
            sub={[
              {id: "2.1", title: "Just Cause (2006)"},
              {id: "2.2", title: "Just Cause 2 (2010)"},
              {id: "2.3", title: "Just Cause 3 (2015)"},
              {id: "2.4", title: "Just Cause 4 (2018)"},
              {id: "2.5", title: "Just Cause Mobile (Cancelled)"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Reception</a></li>
          <li className="sidebar-list-item"><a href="#4">Film adaptation</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Just Cause (video game series)</li>
        </ul>
        <div>
          <h1 className="article-heading">Just Cause (video game series)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Just Cause</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Just_Cause_logo.svg/580px-Just_Cause_logo.svg.png" alt="Just Cause logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developer</th>
              <td className="infobox-data"><Link>Avalanche Studios</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Publishers</th>
              <td className="infobox-data">
                <Link>Square Enix</Link> (2010-2018) <br />
                <Link>Eidos Interactive</Link> (2006-2009)
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Just Cause</b> is an action-adventure video game series created by <Link>Avalanche Studios</Link>. Originally published by <Link>Eidos Interactive</Link> and after
            2009 by <Link>Square Enix</Link>'s External Studios. The series consists of <Link to="/just_cause/just_cause_1">Just Cause</Link>,
            <Link to="/just_cause/just_cause_2"> Just Cause 2</Link>, <Link to="/just_cause/just_cause_3">Just Cause 3</Link>, and
            <Link to="/just_cause/just_cause_4"> Just Cause 4</Link>. The games are open world and take place in islands and archipelagos. Each game in the series tasks the player
            to overthrow the governing body of the game's setting. By May 2019, the series had shipped over 26 million copies worldwide.
          </p>
          <p>
            The series directly draws its name from the real-life United States Invasion of Panama, codenamed "Operation Just Cause".
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Overview"} />
          <div>
            <p>
              Each installment in the series takes place on a different fictional island nation, where the player plays the character
              <Link to="/just_cause/rico_rodriguez">Rico Rodriguez</Link>, a secret agent who originally hails from the fictional nation of
              <Link to="/just_cause/medici">Medici</Link> (featured in the third game). On foot, Rico can walk, swim, jump, and operate weapons. Players can also take control of
              vehicles found in the world and perform stunts while driving them. From the second game onwards, players can also utilize Rico's
              <Link to="/just_cause/parachute"> parachute</Link> and <Link to="/just_cause/grappling_hook">grappling hook</Link> to travel around the map, with the third game
              intoducing a <Link to="/just_cause/wingsuit">wingsuit</Link> for further movement options.
            </p>
            <p>
              During the game, the player is given a main storyline as well as several side missions. Side missions may include liberating a village or taking over a drug
              cartel's villa. In Just Cause, these side missions are repetitive but necessary to gain points with certain factions. In Just Cause 2, the side missions become
              unique and more complex.
            </p>
            <p>
              When not playing story or side missions, the player can roam freely in the open world. However, committing certain aggressive acts will attract a "heat" level
              (similar to <Link to="/gta">Grand Theft Auto's</Link> <Link>wanted level</Link>), which will then increase the strength and number of enemy NPC's spawned seeking to
              kill the player.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Games"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Just Cause (2006)</h3>
            <p>
              Just Cause is the first game in the Just Cause series, released on Septembe 22, 2006. It is set on the fictional island nation of San Esperito (inspired by the
              Caribbean) and follows the protagonist Rico Rodriguez as he attempts to overthrow the corrupt government. The game combines a third-person perspective with a large
              open-world environment, offering the player freedom to explore all 250K acres of the island and engage in both main and side missions.
            </p>
            <p>
              The gameplay involves Rico using a variety of weapons, equipment (grappling hook), vehicles (cars, boats, airplanes, helicopters, and motorcycles), and unique
              features like parasailing (where Rico grapples onto moving vehicles while using a parachute), and skydiving to help complete missions. Combat gameplay involves both
              firearm and melee combat mechanics, while stunt-based gameplay became a signature feature of side missions.
            </p>

            <h3 className="article-heading-3" id="2.2">Just Cause 2 (2010)</h3>
            <p>
              Released on March 23, 2010 (in Europe on March 26, 2010), Just Cause 2 builds on the foundation set by its predecessor, expanding both gameplay mechanics and the
              open world. Set in the fictional Southeast Asian archipelago of <Link>Panau</Link>, ruled by dictator <Link>Pandak "Baby" Panay</Link>, the game introduces more
              dynamic and varied mission structures, moving beyond the repetitive format of the first installment. Rico's grappling hook received significant upgrades, allowing
              for more creative uses like attaching enemies to objects or tethering vehicles together.
            </p>
            <p>
              The game received praise for its massive open-world map, covering over 1,085.70 square kilometers (400 square miles) of diverse environments, including deserts,
              tropical forests, and snowy mountains. Just Cause 2 was also well received for its explosive action and sandbox-style gameplay, encouraging player experimentation
              with destruction and traversal mechanics more than its predecessor. Just Cause 2 also featured a large modding community on PC.
            </p>
            <p>
              Initially set to be released in 2008, it was delayed multiple times unitl it was released in North America on March 23, 2010.
            </p>

            <h3 className="article-heading-3" id="2.3">Just Cause 3 (2015)</h3>
            <p>
              Released worldwide on December 1, 2015, Just Cause 3 takes place on the fictional Mediterranean island of Medici, where the protagonist Rico Rodriguez returns to
              overthrow the ruthless dictator <Link>General Di Ravello</Link>. The game offers a map almost the same size as Just Cause 2 but with less diverse terrains than its
              predecessor. Just Cause 3 also introduces a wingsuit, allowing players to traverse the landscape in new ways.
            </p>
            <p>
              The main storyline is shorter than that of Just Cause 2, but the game does not feature faction side missions, replacing them with 'random encounters' and a greater
              variety of races and other challenges.
            </p>
            
            <h3 className="article-heading-3" id="2.4">Just Cause 4 (2018)</h3>
            <h3 className="article-heading-3" id="2.5">Just Cause Mobile (Canceled)</h3>
          </div>
        </div>
         <div>
          <Heading2 id={3} title={"Reception"} />
          <div>
            
          </div>
        </div>
         <div>
          <Heading2 id={4} title={"Film adaptation"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default JustCause;