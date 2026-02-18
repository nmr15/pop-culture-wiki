import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const CallofDuty = () =>
{
  useEffect(() =>
  {
    document.title = "Call of Duty (franchise) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Main series"
            sub={[
              {id: "1.1", title: "World War II games", sub2: [
                {id: "1.1.1", title: "Call of Duty"},
                {id: "1.1.2", title: "Call of Duty 2"},
                {id: "1.1.3", title: "Call of Duty 3"},
                {id: "1.1.4", title: "Call of Duty: WWII"},
                {id: "1.1.5", title: "Call of Duty: Vanguard"}
              ]},
              {id: "1.2", title: "Modern Warfare series", sub2: [
                {id: "1.2.1", title: "Original trilogy", sub3: [
                  {id: "1.2.1.1", title: "Call of Duty 4: Modern Warfare"},
                  {id: "1.2.1.2", title: "Call of Duty: Modern Warfare Remastered"},
                  {id: "1.2.1.3", title: "Call of Duty: Modern Warfare 2"},
                  {id: "1.2.1.4", title: "Call of Duty: Modern Warfare 2 Campaign Remastered"},
                  {id: "1.2.1.5", title: "Call of Duty: Modern Warfare 3"},
                ]},
                {id: "1.2.2", title: "Reboot", sub3: [
                  {id: "1.2.2.1", title: "Call of Duty: Modern Warfare"},
                  {id: "1.2.2.2", title: "Call of Duty: Modern Warfare II"},
                  {id: "1.2.2.3", title: "Call of Duty: Modern Warfare III"}
                ]}
              ]},
              {id: "1.3", title: "Black Ops series", sub2: [
                {id: "1.3."}
              ]},
              {id: "1.4", title: "Standalone games"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Primary developer rotation</a></li>
          <Collapse 
            id="3"
            item="Free-to-play games"
            sub={[
              {id: "3.", title: "Call of Duty: Online"},
              {id: "3.", title: "Call of Duty: Heroes"},
              {id: "3.", title: "Call of Duty: Mobile"},
              {id: "3.", title: "Call of Duty: Warzone (2020)"},
              {id: "3.", title: "Call of Duty: Warzone (2022)"},
              {id: "3.", title: "Call of Duty: Warzone Mobile"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Call of Duty (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Call of Duty (franchise)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Call of Duty</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Call_of_Duty_logo_2023.svg/960px-Call_of_Duty_logo_2023.svg.png" alt="Call of Duty logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developers</th>
              <td className="infobox-data">
                <Link>Infinity Ward</Link> (2003-present) <br />
                <Link>Treyarch</Link> (2005-present) <br />
                Sledgehammer Games (2011-present) <br />
                Raven Software (2015-present) <br />
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link>Activision</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Call of Duty (CoD)</b> is a first-person shooter military video game series and media franchise published by <Link>Activision</Link>,
            starting in 2003. The games were first developed by <Link>Infinity Ward</Link>, then by <Link>Treyarch</Link> and Sledgehammer Games.
            Several spin-off and handheld games were made by other developers. The most recent, <Link>Call of Dity: Black Ops 7</Link>, was released on
            November 14, 2025.
          </p>
        </div>
      </main>
    </>
  )
}

export default CallofDuty;