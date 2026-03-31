import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const RiseOfSkywalker = () =>
{
  useEffect(() =>
  {
    document.title = "Episode IX: Rise of Skywalker - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Opening crawl</a></li>
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "The hidden Emperor"},
              {id: "2.2", title: "A vital mission"},
              {id: "2.3", title: "A Jedi rises"},
              {id: "2.4", title: "Dark tidings"},
              {id: "2.5", title: "The Supreme Leader's court"},
              {id: "2.6", title: "Mission to Pasaana"},
              {id: "2.7", title: "Desert pursuit"},
              {id: "2.8", title: "Lair of the veis"},
              {id: "2.9", title: "A narrow escape"},
              {id: "2.10", title: "Setback for Rey's team"},
              {id: "2.11", title: "A new mission"},
              {id: "2.12", title: "C-3PO's sacrifice"},
              {id: "2.13", title: "Saving Chewbacca"},
              {id: "2.14", title: "Glimpses of Rey's past"},
              {id: "2.15", title: "A new revelation"},
              {id: "2.16", title: "Mission to Kef Bir"},
              {id: "2.17", title: "Light vs. darkness"},
              {id: "2.18", title: "Ben returns"},
              {id: "2.19", title: "A show of force"},
              {id: "2.20", title: "Passing the torch"},
              {id: "2.21", title: "Preparing for war"},
              {id: "2.22", title: "Into the thick of battle"},
              {id: "2.23", title: "Sith machinations"},
              {id: "2.24", title: "A dyad in the Force"},
              {id: "2.25", title: "Friends to the rescue"},
              {id: "2.26", title: "Victory and sacrifice"},
              {id: "2.27", title: "Triumph of the Resistance"},
              {id: "2.28", title: "Heir to the Skywalkers"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Casting"},
              {id: "4.3", title: "Filming"},
              {id: "4.4", title: "Post-production"},
              {id: "4.5", title: "Music"}
            ]}
          />
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "5.1", title: "Promotion"},
              {id: "5.2", title: "Tie-in literature and merchandise"},
              {id: "5.3", title: "Video games"}
            ]}
          />
          <Collapse 
            id="6"
            item="Release"
            xub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home meida"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Audience response"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Future</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Episode IX: Rise of Skywalker</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode IX: Rise of Skywalker</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode IX: Rise of Skywalker</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg" alt="Episode IX: Rise of Skywalker poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>J.J. Abrams</Link></td>
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

export default RiseOfSkywalker;