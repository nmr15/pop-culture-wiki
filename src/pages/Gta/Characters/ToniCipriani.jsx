import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGta from '../../../components/TableGta'

const ToniCipriani = () =>
{
  <>
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list-item"><a href="#top">Top</a></li>
        <Collapse 
          id="1"
          item="History"
          sub={[
            {id: "1.1", title: "Background"},
            {id: "1.2", title: "Events of Grand Theft Auto: Liberty City Stories"},
            {id: "1.3", title: "Events of Grand Theft Auto III"}
          ]}
        />
        <Collapse 
          id="2"
          item="Character"
          sub={[
            {id: "2.1", title: "Personality"},
            {id: "2.2", title: "Appearance"},
            {id: "2.3", title: "Influence"},
            {id: "2.4", title: "Murders commited by Toni Cipriani"}
          ]}
        />
        <Collapse 
          id="3"
          item="Prominent appearances in gameplay"
          sub={[
            {id: "3.1", title: "Grand Theft Auto III"},
            {id: "3.2", title: "Grand Theft Auto: Liberty City Stories"}
          ]}
        />
        <li className="sidebar-list-item"><a href="#top">Top</a></li>
      </ul>
    </aside>
    <main className="main" id="top">
       <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Toni Cipriani</li>
        </ul>
        <div>
          <h1 className="article-heading">Toni Cipriani</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2" className="infobox-heading">
                <span>Toni Cipriani</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/gtawiki/images/7/7c/ToniCipriani-GTALCS.png/revision/latest?cb=20230308121254" alt="Toni Cipriani GTA Liberty City Stories" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Appears in</th>
              <td className="infobox-data">
                <Link to="/gta/grand_theft_auto_iii">Grand Theft Auto III</Link> <br />
                <Link to="/gta/grand_theft_auto_liberty_city_stories">Grand Theft Auto: Liberty City Stories</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data">
                Michael Madsen (GTA III) <br />
                Danny Mastrogiorgo (GTA Liberty City Stories)
              </td>
            </tr>
          </tbody>
        </table>
    </main>
  </>
}

export default ToniCipriani;