import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const SueStormMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Susan Storm (MCU) - Pop Culture Wiki";
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
              {id: "1.2", title: "Founding the Fantastic Four", sub2: [
                {id: "1.2.1", title: "Gaining abilities"},
                {id: "1.2.2", title: "Isolation"},
                {id: "1.2.3", title: "Revolt of Subterranea"},
                {id: "1.2.4", title: "Establishing peace"}
              ]},
              {id: "1.3", title: "Fame", sub2: [
                {id: "1.3.1", title: "Interviewed"},
                {id: "1.3.2", title: "Teaching science"},
                {id: "1.3.3", title: "Fighting the Mad Thinker"},
                {id: "1.3.4", title: "Diplomatic career"},
                {id: "1.3.5", title: "Expecting a new member"}
              ]},
              {id: "1.4", title: "Advent of Galactus", sub2: [
                {id: "1.4.1", title: "Ecountering the Silver Surfer"}
              ]}
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
              {id: "3.1", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Susan Storm (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Susan Storm (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Susan Storm</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/69/Invisible_Woman_Infobox.png" alt="Susan Storm" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">Vanessa Kirby</td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data"><Link to="/mcu/the_fantastic_four_first_steps">The Fantastic Four: First Steps</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            Doctor Susan "Sue" Storm is the wife of <Link to="/mcu/reed_richards">Reed Richards</Link>, the older
            sister of <Link to="/mcu/johnny_storm">Johnny Storm</Link>, the leader of the Future Foundation and a
            founding member of the <Link to="/mcu/fantastic_four">Fantastic Four</Link> known as the Invisible Woman,
            having the ability to become invisible and generate powerful fields of invisible force. While she was
            pregnant, the <Link to="/mcu/silver_surfer">Silver Surfer</Link> arrived and announced that
            <Link to="/mcu/galactus">Galactus</Link> would consume Earth. Searching for a way to prevent this, the
            Fantastic Four traced her energy to LHS-275 where they met Galactus, who informed Susan that her son
            possessed the Power Cosmic and that Galactus sought to make him his successor. Refusing to give up
            her child, the team managed to escape, although Galactus forced Susan into premature labor, and she
            gave birth to <Link to="/mcu/franklin_richards">Franklin Richards</Link>.
          </p>
          <p>
            Upon returning to Earth, her decision to keep her child caused the general public to criticize the
            Fantastic Four. However, Susan managed to quell their anger and unrest by introducing them to her child
            publicly and assuring them that they would make it through this as a family. When their plan to teleport
            Earth away was thwarted by the Silver Surfer, Susan ultimately agreed to use Franklin as bait to lure
            Galactus into their Teleportation Bridge to teleport him across the universe. Unfortunately, Galactus saw
            through their trap, and captured Franklin. Susan pushed her powers to their limits and forced Galactus
            into the bridge, sacrificing herself so Reed could save their child. However, Franklin used his powers
            for the first time to resurrect her.
          </p>
        </div>
      </main>
    </>
  )
}

export default SueStormMCU;