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
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/02/Sam_Wilson_Infobox.jpg" alt="Susan Storm" />
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
          
        </div>
      </main>
    </>
  )
}

export default SueStormMCU;