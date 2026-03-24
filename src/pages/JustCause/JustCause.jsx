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
      </main>
    </>
  )
}

export default JustCause;