import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const RevengeOfTheSith = () =>
{
  useEffect(() =>
  {
    document.title = "Episode III: Revenger for the Sith - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Opening crawl</a></li>

          <li className="sidebar-list-item"><a href="#3">Cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Writing"},
              {id: "4.2", title: "Art design"},
              {id: "4.3", title: "Filming"},
              {id: "4.4", title: "Visual effects"},
              {id: "4.5", title: "Deleted scenes"},
              {id: "4.6", title: "Music"}
            ]}
          />
          <Collapse 
            id="5"
            item="Themes and analysis"
            sub={[
              {id: "5.1", title: "References: Cinematic and literary allusions"},
              {id: "5.2", title: "Dramatic irony"},
              {id: "5.3", title: "Parallels"}
            ]}
          />
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Marketing"},
              {id: "6.2", title: "Thatrical"},
              {id: "6.3", title: "Leaked workprint"},
              {id: "6.4", title: "Rating"},
              {id: "6.5", title: "Home media"},
              {id: "6.6", title: "Canceled 3D re-release"},
              {id: "6.7", title: "2025 re-releas"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Critical response"},
              {id: "7.2", title: "Other responses"},
              {id: "7.3", title: "Box office"},
              {id: "7.4", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Legacy</a></li>
          <Collapse 
            id="9"
            item="Other media"
            sub={[
              {id: "9.1", title: "Novelization"},
              {id: "9.2", title: "Video game"},
              {id: "9.3", title: "The Clone Wars"},
              {id: "9.4", title: "The Bad Batch"},
              {id: "9.5", title: "Obi-Wan Kenobi"},
              {id: "9.6", title: "Backstroke of the West"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Episode III: Revenger for the Sith</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode III: Revenger for the Sith</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode III: Revenger for the Sith</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg" alt="Episode III: Revenger for the Sith poster" />
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

export default RevengeOfTheSith;