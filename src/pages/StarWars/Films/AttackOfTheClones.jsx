import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const AttackOfTheClones = () =>
{
  useEffect(() =>
  {
    document.title = "Episode II: Attack of the Clones - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Writing"},
              {id: "3.2", title: "Filming"},
              {id: "3.3", title: "Visual effects"},
              {id: "3.4", title: "Music"}
            ]}
          />
          <Collapse 
            id="4"
            item="Themes"
            sub={[
              {id: "4.1", title: "References"},
              {id: "4.2", title: "Parallels"}
            ]}
          />
          <Collapse 
            id="5"
            item="Release"
            sub={[
              {id: "5.1", title: "Marketing"},
              {id: "5.2", title: "Theatrical"},
              {id: "5.3", title: "Home media"},
              {id: "5.4", title: "Canceled 3D re-release"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Box office"},
              {id: "6.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Legacy</a></li>
          <li className="sidebar-list-item"><a href="#8">Novelization</a></li>
          <li className="sidebar-list-item"><a href="#9">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Episode II: Attack of the Clones</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode II: Attack of the Clones</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode II: Attack of the Clones</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg" alt="Episode II: Attack of the Clones poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>George Lucas</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Films and series</th>
              <td className="infobox-data"><Link>List of Star Wars films and series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Star Wars characters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default AttackOfTheClones;