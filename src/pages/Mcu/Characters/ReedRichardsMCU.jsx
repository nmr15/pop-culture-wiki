import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ReedRichardsMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Reed Richards (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Teaching science"},
                {id: "1.1.2", title: "Construction of the Baxter Building"}
              ]},
              {id: "1.2", title: "Founding the Fantastic Four", sub2: [
                {id: "1.2.1", title: "Gaining abilities"},
                {id: "1.2.2", title: "Isolation"},
                {id: "1.2.3", title: "Revolt of Subterranea"},
                {id: "1.3.4", title: "Establishing peace"}
              ]},
              {id: "1.3", title: "Fame", sub2: [
                {id: "1.3.1", title: "Interviews"},
                {id: "1.3.2", title: "Fighting Mad Thinker"},
                {id: "1.3.3", title: "Advancing scientific study"},
                {id: "1.3.4", title: "Expecting a new member"}
              ]},
              {id: "1.4", title: "Advent of Galactus", sub2: [
                {id: "1.4.1", title: "Encountering the Silver Surfer"},
                {id: "1.4.2", title: "Preparing for launch"},
                {id: "1.4.3", title: "Visitng LHS-275"},
                {id: "1.4.4", title: "Escape from the Silver Surfer"},
                {id: "1.4.5", title: "Breakers of bad news"},
                {id: "1.4.6", title: "Encouraging the world"},
                {id: "1.4.7", title: "Battle of New York"}
              ]},
              {id: "1.5", title: "Continuing to change", sub2: [
                {id: "1.5.1", title: "New adventure"}
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
              {id: "3.1", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Reed Richards (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Reed Richards (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Reed Richards</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9f/Mister_Fantastic_Infobox.png" alt="Reed Richards" />
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

export default ReedRichardsMCU;