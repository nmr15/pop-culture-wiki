import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const Battlefield = () =>
{
  useEffect(() =>
  {
    document.title = "Battlefield (franchise) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <li className="sidebar-list-item"><a href="#2">Games</a></li>
          <li className="sidebar-list-item"><a href="#3">Development History</a></li>
          <li className="sidebar-list-item"><a href="#4">TV series</a></li>
        </ul>
      </aside>
      <main className="main" id="to">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Battlefield (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Battlefield (franchise)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Battlefield</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BattlefieldLogo.svg/500px-BattlefieldLogo.svg.png" alt="Battlefield logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default Battlefield;