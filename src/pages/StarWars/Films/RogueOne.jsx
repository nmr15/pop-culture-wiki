import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const RogueOne = () =>
{
  useEffect(() =>
  {
    document.title = "Rogue One: A Star Wars Story - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Plot"
            sub={[
              {id: "1.1", title: "Capture of Galen Erso"},
              {id: "1.2", title: "Jyn's imprisonment"},
              {id: "1.3", title: "Mission to the Ring of Kafrene"},
              {id: "1.4", title: "An urgent message"},
              {id: "1.5", title: "Freeing Jyn Erso"},
              {id: "1.6", title: "When has become now"},
              {id: "1.7", title: "Battle on Jeddha"},
              {id: "1.8", title: "Galen's message"},
              {id: "1.9", title: "Destruction of Jeddha City"},
              {id: "1.10", title: "Mission to Eadu"},
              {id: "1.11", title: "Krennic's groveling on Mustafar"},
              {id: "1.12", title: "Rebel council meeting"},
              {id: "1.13", title: "Rogue One departs for Scarif"},
              {id: "1.14", title: "The Battle of Scarif"},
              {id: "1.15", title: "Secret mission to Tatooine"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Casting"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "5.1", title: "Promotion"},
              {id: "5.2", title: "Tie-in novels"},
              {id: "5.3", title: "Comics"},
              {id: "5.4", title: "Video games"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Release</a></li>
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.", title: "Box office"},
              {id: "7.", title: "Critical response"},
              {id: "7.", title: "Digital recreation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">TV series</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Rogue One: A Star Wars Story</li>
        </ul>
        <div>
          <h1 className="article-heading">Rogue One: A Star Wars Story</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Rogue One: A Star Wars Story</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png" alt="Rogue One: A Star Wars Story poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Gareth Edwards</Link></td>
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

export default RogueOne;