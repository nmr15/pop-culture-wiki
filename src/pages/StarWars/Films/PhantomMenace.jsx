import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const PhantomMenace = () =>
{
  useEffect(() =>
  {
    document.title = "Episode I: The Phantom Menace - Pop Culture Wiki";
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
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Pre-production and design"},
              {id: "3.3", title: "Casting"},
              {id: "3.4", title: "Filming"},
              {id: "3.5", title: "Effects"}
            ]}
          />
          <Collapse 
            id="4"
            item="Themes and analysis"
            sub={[
              {id: "4.1", title: "References: Cinematic and literary allusions"},
              {id: "4.2", title: "Dramatic irony"},
              {id: "4.3", title: "Parallels"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Music</a></li>
          <Collapse 
            id="6"
            item="Marketing"
            sub={[
              {id: "6.1", title: "Promotion"},
              {id: "6.2", title: "Adaptations"}
            ]}
          />
          <Collapse 
            id="7"
            item="Release"
            sub={[
              {id: "7.1", title: "Theatrical"},
              {id: "7.2", title: "Home media"},
              {id: "7.3", title: "Theatrical re-releases"}
            ]}
          />
          <Collapse 
            id="8"
            item="Reception"
            sub={[
              {id: "8.1", title: "Critical response"},
              {id: "8.2", title: "Box office"},
              {id: "8.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="9"
            item="Legacy"
            sub={[
              {id: "9.1", title: "Sequels"},
              {id: "9.2", title: "Cast and crew responses"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Episode I: The Phantom Menace</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode I: The Phantom Menace</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode I: The Phantom Menace</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg" alt="Episode I: The Phantom Menace poster" />
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

export default PhantomMenace;