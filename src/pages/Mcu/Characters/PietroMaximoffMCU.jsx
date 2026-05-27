import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const PietroMaximoffMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Pietro Maximoff (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Losing their parents"},
                {id: "1.1.2", title: "Protesting against heroes"}
              ]},
              {id: "1.2", title: "Avengers conflict", sub2: [
                {id: "1.2.1", title: "Recruited by Baron Strucker"},
                {id: "1.2.2", title: "Attack on the reasearch base"},
                {id: "1.2.3", title: "Joining Ultron"},
                {id: "1.2.4", title: "Battle at the salvage yard"},
                {id: "1.2.5", title: "Ultron's true intentions"},
                {id: "1.2.6", title: "Battle of Seoul"}
              ]},
              {id: "1.3", title: "Changing sides", sub2: [
                {id: "1.3.1", title: "Birth of Vision"},
                {id: "1.3.2", title: "Battle of Sokovia"},
                {id: "1.3.3", title: "Reinforcements"},
                {id: "1.3.4", title: "Protecting the Key"},
                {id: "1.3.5", title: "Self-sacrifice"}
              ]},
              {id: "1.4", title: "Legacy", sub2:[
                {id: "1.4.1", title: "Hawkeye's tribute"},
                {id: "1.4.2", title: "Remembered by Wanda"},
                {id: "1.4.3", title: "Westview impersonator"}
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
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other equipment"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Pietro Maximoff (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Pietro Maximoff (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Pietro Maximoff</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/1/1e/Quicksilver_Infobox.jpg" alt="Pietro Maximoff" />
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

export default PietroMaximoffMCU;