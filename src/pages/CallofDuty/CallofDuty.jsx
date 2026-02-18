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
                {id: "1.3.1", title: "Call of Duty: World at War"},
                {id: "1.3.2", title: "Call of Duty: Black Ops"},
                {id: "1.3.3", title: "Call of Duty: Black Ops II"},
                {id: "1.3.4", title: "Call of Duty: Black Ops III"},
                {id: "1.3.5", title: "Call of Duty: Black Ops 4"},
                {id: "1.3.6", title: "Call of Duty: Black Ops Cold War"},
                {id: "1.3.7", title: "Call of Duty: Black Ops 6"},
                {id: "1.3.8", title: "Call of Duty: Black Ops 7"}
              ]},
              {id: "1.4", title: "Standalone games", sub2: [
                {id: "1.4.1", title: "Call of Duty: Ghosts"},
                {id: "1.4.2", title: "Call of Duty: Advanced Warfare"},
                {id: "1.4.3", title: "Call of Duty: Infinite Warfare"}
              ]}
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
          <Collapse 
            id="4"
            item="Spin-off games"
            sub={[
              {id: "4.1", title: "Console titles", sub2: [
                {id: "4.1.1", title: "Call of Duty: Finest Hour"},
                {id: "4.1.2", title: "Call of Duty 2: Big Red One"},
                {id: "4.1.3", title: "Call of Duty: World at War - Final Fronts"}
              ]},
              {id: "4.2", title: "Handheld titles", sub2: [
                {id: "4.2.1", title: "Call of Duty (for N-Gage)"},
                {id: "4.2.2", title: "Call of Duty: Roads to Victory"},
                {id: "4.2.3", title: "Call of Duty 4: Modern Warfare (for Nintendo DS)"},
                {id: "4.2.4", title: "Call of Duty: World at War (for Nintendo DS)"},
                {id: "4.2.5", title: "Call of Duty: Modern Warfare: Mobilized"},
                {id: "4.2.6", title: "Call of Duty: Black Ops (for Nintendo DS)"},
                {id: "4.2.7", title: "Call of Duty: Modern Warfare 3 - Defiance"},
                {id: "4.2.8", title: "Call of Duty: Black Ops: Declassified"}
              ]},
              {id: "4.3", title: "Mobile titles", sub2: [
                {id: "4.3.1", title: "Call of Duty (for mobile)"},
                {id: "4.3.2", title: "Call of Duty 2 (for mobile)"},
                {id: "4.3.3", title: "Call of Duty 2 (for mobile)"},
                {id: "4.3.4", title: "Call of Duty 2 Pocket PC Edition"},
                {id: "4.3.5", title: "Call of Duty 4: Modern Warfare (for mobile)"},
                {id: "4.3.6", title: "Call of Duty: World at War (for mobile)"},
                {id: "4.3.7", title: "Call of Duty: Modern Warfare 2: Force Recon"},
                {id: "4.3.8", title: "Call of Duty: World at War - Zombies"},
                {id: "4.3.9", title: "Call of Duty: Black Ops Mobile"},
                {id: "4.3.10", title: "Call of Duty: Black Ops - Zombies"},
                {id: "4.3.11", title: "Call of Duty: Strike Team"}
              ]}
            ]}
          />
          <Collapse 
            id="5"
            item="Compilations"
            sub={[
              {id: "5.1", title: "Call of Duty: The War Collection"}
            ]}
          />
          <Collapse 
           id="6"
           item="Canceled titles"
           sub={[
            {id: "6.1", title: "Call of Duty: Combined Forces"},
            {id: "6.2", title: "Call of Duty: Devil's Brigade"},
            {id: "6.3", title: "Call of Duty: Future Warfare/NX1"},
            {id: "6.4", title: "Call of Duty: Vietnam"},
            {id: "6.5", title: "Call of Duty: Roman Warfare"},
            {id: "6.6", title: "Untitled Call of Duty Zombie game "}
           ]}
          />
          <Collapse 
            id="7"
            item="Other media"
            sub={[
              {id: "7.1", title: "Comic books"},
              {id: "7.2", title: "Merchandise"},
              {id: "7.3", title: "Short films"},
              {id: "7.4", title: "Films"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Esports</a></li>
          <li className="sidebar-list-item"><a href="#9">Call of Duty Endowment</a></li>
          <Collapse 
            id="10"
            item="Criticisms, controversies, and legal actions"
            sub={[
              {id: "10.1", title: "Accusations of stereotyping and Western bias"},
              {id: "10.2", title: "Fallout with Infinity Ward leadership"},
              {id: "10.3", title: "No Russian"},
              {id: "10.4", title: "Trademark infringement claims by AM General"}
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