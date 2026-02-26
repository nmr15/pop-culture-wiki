import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedIII = () =>
{
  useEffect(() =>
  {
    document.title = "Assassin's Creed III - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list"></ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed III</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed III</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Assassin's Creed III</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/29/Assassin%27s_Creed_III_Game_Cover.jpg" alt="Assassin's Creed III cover" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developers</th>
              <td className="infobox-data"><Link>Ubisoft Montreal</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data">Ubisoft</td>
            </tr>
            <tr>
              <th className="infobox-data">Previous Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_revelations">Assassin's Creed Revelations</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_iv_black_flag">Assassin's Creed IV: Black Flag</Link></td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default AssassinsCreedIII;