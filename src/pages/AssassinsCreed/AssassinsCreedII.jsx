import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedII = () =>
{
  useEffect(() =>
  {
    document.title = "Assassin's Creed II - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "The Battle of Forli"},
              {id: "2.2", title: "Bonfire of the Vanities"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Development</a></li>
          <Collapse 
            id="4"
            item="Marketing"
            sub={[
              {id: "4.1", title: "Promotions"},
              {id: "4.2", title: "Editions"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Music</a></li>
          <Collapse 
            id="6"
            item="Downloadable content"
            sub={[
              {id: "6.1", title: "Expansion packs"},
              {id: "6.2", title: "Uplay content"},
              {id: "6.3", title: "Templar Lairs"},
              {id: "6.4", title: "Bonus skin"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Critical reception"},
              {id: "7.2", title: "DRM-related criticism"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed II</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed II</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Assassin's Creed</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG" alt="Assassin's Creed II cover" />
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
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_game">Assassin's Creed</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_brotherhood">Assassin's Creed: Brotherhood</Link></td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default AssassinsCreedII;