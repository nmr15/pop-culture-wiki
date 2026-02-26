import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
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
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <Collapse 
            id="2"
            item="Synopsis"
            sub={[
              {id: "2.1", title: "Setting"},
              {id: "2.2", title: "Characters"},
              {id: "2.3", title: "Plot"}
            ]}
          />
          <Collapse 
            id="3"
            item="Development"
            sub={[
              {id: "3.1", title: "Origins"},
              {id: "3.2", title: "Pre-announcement", sub2: [
                {id: "3.2.1", title: "Internet leaks"}
              ]},
              {id: "3.3", title: "Post-announcement"},
              {id: "3.4", title: "Mohawk collaboration"},
              {id: "3.5", title: "Technical issues"},
              {id: "3.6", title: "Music"}
            ]}
          />
          <Collapse 
            id="4"
            item="Marketing"
            sub={[
              {id: "4.1", title: "Retail edition"},
              {id: "4.2", title: "Remastered"}
            ]}
          />
          <Collapse 
            id="5"
            item="Downloadable content"
            sub={[
              {id: "5.1", title: "Uplay content"},
              {id: "5.2", title: "The Hidden Secrets Pack"},
              {id: "5.3", title: "The Battle Hardened Pack"},
              {id: "5.4", title: "The Tyranny of King Washington"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical reception", sub2: [
                {id: "6.1.1", title: "Remastered"}
              ]},
              {id: "6.2", title: "Native depiction"},
              {id: "6.3", title: "Accolades"},
              {id: "6.4", title: "Sales"},
              {id: "6.5", title: "Controversy"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Series continuity</a></li>
        </ul>
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