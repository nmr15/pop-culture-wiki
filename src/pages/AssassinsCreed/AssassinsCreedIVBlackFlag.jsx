import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedIVBlackFlag = () =>
{
  useEffect(() =>
  {
    document.title = "Assassin's Creed IV: Black Flag - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <Collapse 
            id="2"
            item="Synopsis"
            sub={[
              {id: "2.1", title: "Characters"},
              {id: "2.2", title: "Setting"},
              {id: "2.3", title: "Plot"}
            ]}
          />
          <Collapse 
            id="3"
            item="Development"
            sub={[
              {id: "3.1", title: "Music"}
            ]}
          />
          <Collapse 
            id="4"
            item="Marketing and release"
            sub={[
              {id: "4.1", title: "Downloadable content"}
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Sales"},
              {id: "5.2", title: "Awards"},
              {id: "5.3", title: "PETA criticism"}
            ]}
          />
          <Collapse 
            id="6"
            item="Future"
            sub={[
              {id: "6.1", title: "Series continuation"},
              {id: "6.2", title: "Remake"}
            ]}
          />
          <Collapse 
            id={"7"}
            item="Trivia"
            sub={[
              {id: "7.1", title: "What Could Have Been"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed IV: Black Flag</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed IV: Black Flag</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Assassin's Creed IV: Black Flag</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/28/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg" alt="Assassin's Creed IV: Black Flag cover" />
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
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_iii">Assassin's Creed III</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_rogue">Assassin's Creed Rogue</Link></td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default AssassinsCreedIVBlackFlag;