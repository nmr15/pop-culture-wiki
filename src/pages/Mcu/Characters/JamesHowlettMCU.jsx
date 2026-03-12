import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const JamesHowlettMCU = () =>
{
  useEffect(() =>
  {
    document.title = "James Howlett (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Wolverine origins"},
                {id: "1.1.2", title: "Death of the X-Men"}
              ]},
              {id: "1.2", title: "Perservation of Earth-10005", sub2: [
                {id: "1.2.1", title: "Taken from his world"},
                {id: "1.2.2", title: "Fight in the Void"},
                {id: "1.2.3", title: "Escape from Cassandra Nova"},
                {id: "1.2.4", title: "Meeting the resistance"},
                {id: "1.2.5", title: "Escaping the Void"},
                {id: "1.2.6", title: "Fighting the Deadpool Corps"},
                {id: "1.2.7", title: "Saving all timelines"}
              ]},
              {id: "1.3", title: "New world, new life", sub2: [
                {id: "1.3.1", title: "Celebrating victory"}
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
          <li className="sidebar-list-item"><a href="#3">Equipment</a></li>
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>James Howlett (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">James Howlett (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>James Howlett</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/7c/Wolverine_Infobox.png" alt="James Howlett" />
                </span>
              </td>
            </tr>
           <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Hugh Jackman</Link></td>
            </tr>
            <tr>
              <td className="infobox-data">Appearances</td>
              <td className="infobox-data"><Link to="/mcu/deadpool_&_wolverine">Deadpool & Wolverine</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
        <div>
          <Heading2 id={1} title={"Biography"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Early life</h3>
            <h4 className="article-heading-4" id="1.1.1">Wolverine origins</h4>
            <h4 className="article-heading-4" id="1.1.2">Death of the X-Men</h4>
            
            <h3 className="article-heading-3" id="1.2">Perservation of Earth-10005</h3>
            <h4 className="article-heading-4" id="1.2.1">Taken from his world</h4>
            <h4 className="article-heading-4" id="1.2.2">Fight in the Void</h4>
            <h4 className="article-heading-4" id="1.2.3">Escape from Cassandra Nova</h4>
            <h4 className="article-heading-4" id="1.2.4">Meeting the resistance</h4>
            <h4 className="article-heading-4" id="1.2.5">Escaping the Void</h4>
            <h4 className="article-heading-4" id="1.2.6">Fighting the Deadpool Corps</h4>
            <h4 className="article-heading-4" id="1.2.7">Saving all timelines</h4>

            <h3 className="article-heading-3" id="1.3">New world, new life</h3>
            <h4 className="article-heading-4" id="1.3.1">Celebrating victory</h4>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Powers and abilities"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Powers</h3>
            <h3 className="article-heading-3" id="2.2">Abilities</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Equipment"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Facilities"} />
          <div>

          </div>
        </div>
      </main>
    </>
  )
}

export default JamesHowlettMCU;