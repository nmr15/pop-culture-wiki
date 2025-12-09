import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGta from '../../../components/TableGta'

const Claude = () =>
{
  useEffect(() =>
  {
    document.title = "Claude - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "Background"},
              {id: "1.2", title: "Events of Grand Theft Auto: San Andreas", sub2: [
                {id: "1.2.1", title: "Racing with Carl Johnson"}
              ]},
              {id: "1.3", title: "Before the events of Grand Theft Auto III"},
              {id: "1.4", title: "Events of Grand Theft Auto III", sub2: [
                {id: "1.4.1", title: "Bank Heist and Jailbreak"},
                {id: "1.4.2", title: "The Leone Family"},
                {id: "1.4.3", title: "The Yakuza"},
                {id: "1.4.4", title: "Later Jobs and The Exchange"}
              ]},
              {id: "1.5", title: "After Grand Theft Auto III"}
            ]}
          />
          <Collapse 
            id="2"
            item="Character"
            sub={[
              {id: "2.1", title: "Personality"},
              {id: "2.2", title: "Appearance"},
              {id: "2.3", title: "Characters murdered by Claude", sub2:[
                {id: "2.3.1", title: "Optional murders"},
                {id: "2.3.2", title: "Possible murders"}
              ]}
            ]}
          />
          <Collapse 
            id="3"
            item="Mission appearances"
            sub={[
              {id: "3.1", title: "Grand Theft Auto III"},
              {id: "3.2", title: "Grand Theft Auto: San Andreas"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Trivia</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Claude</li>
        </ul>
        <div>
          <h1 className="article-heading">Claude</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2" className="infobox-heading">
                <span>Claude</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/gtawiki/images/3/34/Claude-GTA3.png/revision/latest?cb=20230412193939" alt="Claude GTA III" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Appears in</th>
              <td className="infobox-data">
                <Link>Grand Theft Auto III</Link> <br />
                <Link>Grand Theft Auto: San Andreas</Link> <br />
                Grand Theft Auto Online (Parent character model)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data">
                None (officially) <br />
                Hunter Platin (grunts)
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default Claude;