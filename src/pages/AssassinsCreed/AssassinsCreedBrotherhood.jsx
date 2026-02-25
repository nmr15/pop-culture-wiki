import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedBrotherhood = () =>
{
  useEffect(() =>
  {
    document.title = "Assassin's Creed Brotherhood - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Gameplay"
            sub={[
              {id: "1.1", title: "Multiplayer", sub2: [
                {id: "1.1.1", title: "Game modes"},
                {id: "1.1.2", title: "Characters"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "The Da Vinci Disappearance"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Development</a></li>
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Retail editions</a></li>
          <Collapse 
            id="6"
            item="Downloadable content"
            sub={[
              {id: "6.1", title: "Uplay content"},
              {id: "6.2", title: "Copernicus Conspiracy"},
              {id: "6.3", title: "Animus Project Update 1.0"},
              {id: "6.4", title: "Animus Project Update 2.0"},
              {id: "6.5", title: "The Da Vinci Disappearance"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Sales"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed Brotherhood</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed Brotherhood</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Assassin's Creed Brotherhood</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/2a/Assassins_Creed_brotherhood_cover.jpg" alt="Assassin's Creed Brotherhood logo logo" />
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
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_ii">Assassin's Creed II</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_revelations">Assassin's Creed Revelations</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">

        </div>
        <div>
          <Heading2 id={1} title={"Gameplay"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Plot"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Development"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Retail editions"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Downloadable content"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequel"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedBrotherhood;