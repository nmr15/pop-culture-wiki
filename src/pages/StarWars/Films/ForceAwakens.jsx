import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ForceAwakens = () =>
{
  useEffect(() =>
  {
    document.title = "Episode VII: The Force Awakens - Pop Culture Wiki";
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
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Casting"},
              {id: "3.4", title: "Filming"},
              {id: "3.5", title: "Post-production"},
              {id: "3.6", title: "Music"}
            ]}
          />
          <Collapse 
            id="4"
            item="Marketing"
            sub={[
              {id: "4.1", title: "Promotion"},
              {id: "4.2", title: "Tie-in literature and merchandise"},
              {id: "4.3", title: "Video games"}
            ]}
          />
          <Collapse 
            id="5"
            item="Release"
            sub={[
              {id: "5.1", title: "Theatrical"},
              {id: "5.2", title: "Home release"},
              {id: "5.3", title: "Broadcast syndication"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Box office", sub2: [
                {id: "6.1.1", title: "Commercial analysis"},
                {id: "6.1.2", title: "United States and Canada"},
                {id: "6.1.3", title: "Other territories"}
              ]},
              {id: "6.2", title: "Critical response", sub2: [
                {id: "6.2.1", title: "From George Lucas"}
              ]},
              {id: "6.3", title: "Accolades"},
              {id: "6.4", title: "Fan backlash"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Episode VII: The Force Awakens</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode VII: The Force Awakens</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode VII: The Force Awakens</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg" alt="Episode VII: The Force Awakens poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>J. J. Abrams</Link></td>
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

export default ForceAwakens;