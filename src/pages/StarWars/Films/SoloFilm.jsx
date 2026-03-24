import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const SoloFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Solo: A Star Wars Story - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Prologue</a></li>
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "Defying Lady Proxima"},
              {id: "2.2", title: "Escaping Corellia"},
              {id: "2.3", title: "Ordeals on Mimban"},
              {id: "2.4", title: "Meeting Chewbacca"},
              {id: "2.5", title: "Beckett's gamble"},
              {id: "2.6", title: "Heist on Vandor"},
              {id: "2.7", title: "An audience with Dryden Vos"},
              {id: "2.8", title: "Finding a ship"},
              {id: "2.9", title: "Voyage to Kessel"},
              {id: "2.10", title: "Infiltrating Kessel"},
              {id: "2.11", title: "Heist and the slave uprising"},
              {id: "2.12", title: "Completing the Kessel run"},
              {id: "2.13", title: "Landing on Savareen"},
              {id: "2.14", title: "Confronting the Cloud-Riders"},
              {id: "2.15", title: "Beckett's betrayal"},
              {id: "2.16", title: "Han's triple-cross"},
              {id: "2.17", title: "Separate paths"},
              {id: "2.18", title: "Rematch with Lando Calrissian"},
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
              {id: "4.4", title: "Visual effects"},
              {id: "4.5", title: "Music"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office", sub2: [
                {id: "7.1.1", title: "United States and Canada"},
                {id: "7.1.2", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical response"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Adaptations</a></li>
          <li className="sidebar-list-item"><a href="#9">Future</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Solo: A Star Wars Story</li>
        </ul>
        <div>
          <h1 className="article-heading">Solo: A Star Wars Story</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Solo: A Star Wars Story</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/5/54/Solo_A_Star_Wars_Story_poster.jpg" alt="Solo: A Star Wars Story poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Ron Howard</Link></td>
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

export default SoloFilm;