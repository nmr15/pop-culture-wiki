import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const AntMan = () =>
{
  useEffect(() =>
  {
    document.title = "Ant-Man (Hank Pym) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Publication history</a></li>
          <Collapse 
            id="2"
            item="Biography"
            sub={[
              {id: "2.1", title: "Early life"},
              {id: "2.2", title: "The discovery of Pym Particles"},
              {id: "2.3", title: "Becoming a giant"},
              {id: "2.4", title: "Ulron, Yellowjacket, and the beginning of the fall of Hank Pym"},
              {id: "2.5", title: "A crumbling marriage"},
              {id: "2.6", title: "Framed"},
              {id: "2.7", title: "Redemption and return to the Avengers"},
              {id: "2.8", title: "The Secret Invasion and the Mighty Avengers"},
              {id: "2.9", title: "Avengers Academy"},
              {id: "2.10", title: "Finding Janet Van Dyne"},
              {id: "2.11", title: "Age of Ultron"},
              {id: "2.12", title: "Avengers A.I."},
              {id: "2.13", title: "Time runs out"},
              {id: "2.14", title: "Rage of Ultron"},
              {id: "2.15", title: "Restoration"}
            ]}
          />
          <Collapse 
            id="3"
            item="Attributes"
            sub={[
              {id: "3.1", title: "Powers"},
              {id: "3.2", title: "Abilities"},
              {id: "3.3", title: "Additional attributes"}
            ]}
          />
          <Collapse 
            id="4"
            item="Paraphernalia"
            sub={[
              {id: "4.1", title: "Equipment"},
              {id: "4.2", title: "Weapons"},
              {id: "4.3", title: "Transportation"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Successors</a></li>
          <li className="sidebar-list-item"><a href="#6">Enemies</a></li>
          <Collapse 
            id="7"
            item="Other versions"
            sub={[
              {id: "7.1", title: "Earth-5012"},
              {id: "7.2", title: "Heroes Reborn (2021)"},
              {id: "7.3", title: "Marvel 1602"},
              {id: "7.4", title: "Marvel Adventures"},
              {id: "7.5", title: "Marvel Apes"},
              {id: "7.6", title: "Marvel Zombies"},
              {id: "7.7", title: "MC2"},
              {id: "7.8", title: "Old Man Logan"},
              {id: "7.9", title: "The Last Avengers Story"},
              {id: "7.10", title: "Ultimate Marvel"},
              {id: "7.11", title: "Ultimate Universe"}
            ]}
          />
          <Collapse 
            id="8"
            item="In othe media"
            sub={[
              {id: "8.1", title: "Television"},
              {id: "8.2", title: "Film"},
              {id: "8.3", title: "Marvel Cinematic Universe"},
              {id: "8.4", title: "Video games"},
              {id: "8.5", title: "Miscellaneous"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Ant-Man (Hank Pym)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ant-Man (Hank Pym)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ant-Man</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Hank_pym_1.jpg/220px-Hank_pym_1.jpg" alt="Ant-Man" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default AntMan;