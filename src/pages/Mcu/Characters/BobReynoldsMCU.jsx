import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const BobReynoldsMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Bob Reynolds (MCU) - Pop Culture Wiki";
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
                {id: "1.1.2", title: "Staying afloat"}
              ]},
              {id: "1.2", title: "Project Sentry", sub2: [
                {id: "1.2.1", title: "Volunteering for O.X.E."},
                {id: "1.2.2", title: "Waking up"},
                {id: "1.2.3", title: "Escaping the vault"},
                {id: "1.2.4", title: "Discovering his powers"}
              ]},
              {id: "1.3", title: "Becoming a hero", sub2: [
                {id: "1.3.1", title: "Meeting the Contessa"},
                {id: "1.3.2", title: "Fighting his friends"},
                {id: "1.3.3", title: "Attack on Manhattan"},
                {id: "1.3.4", title: "Comforted by Yelena Bolova"},
                {id: "1.3.5", title: "Facing Void"},
                {id: "1.3.6", title: "New team"}
              ]},
              {id: "1.4", title: "New Avengers", sub2: [
                {id: "1.4.1", title: "Witnessing a spaceship"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Personalities"
            sub={[
              {id: "2.1", title: "Bob Reynolds' personality"},
              {id: "2.2", title: "Void's personality"}
            ]}
          />
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", title: "Powers"},
              {id: "3.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="4"
            item="Equipment"
            sub={[
              {id: "4.1", title: "Other equipment"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Bob Reynolds (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Bob Reynolds (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Bob Reynolds</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/70/Sentry_Infobox.png" alt="Bob Reynolds" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Lewis Pullman</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data"><Link>Thunderbolts*</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default BobReynoldsMCU;