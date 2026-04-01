import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const LastJedi = () =>
{
  useEffect(() =>
  {
    document.title = "Episode VIII: The Last Jedi - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Opening crawl</a></li>
          {/* <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "Evacutation of D'Qar"},
              {id: "2.2", title: "Bomber run"},
              {id: "2.3", title: ""},
              {id: "2.4", title: ""},
              {id: "2.5", title: ""},
              {id: "2.6", title: ""},
              {id: "2.7", title: ""},
              {id: "2.8", title: ""},
              {id: "2.9", title: ""},
              {id: "2.10", title: ""},
              {id: "2.11", title: ""},
              {id: "2.12", title: ""},
              {id: "2.13", title: ""},
              {id: "2.14", title: ""},
              {id: "2.15", title: ""},
              {id: "2.16", title: ""},
              {id: "2.17", title: ""},
              {id: "2.18", title: ""},
              {id: "2.19", title: ""},
              {id: "2.20", title: ""},
              {id: "2.21", title: ""},
              {id: "2.22", title: ""},
              {id: "2.23", title: ""},
              {id: "2.24", title: ""}
            ]}
          /> */}
          <li className="sidebar-list-item"><a href="#3">Cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Writing"},
              {id: "4.3", title: "Casting"},
              {id: "4.4", title: "Filming"},
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
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office", sub2: [
                {id: "7.1.1", title: "United States and Canada"},
                {id: "7.1.2", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Audience reception", sub2: [
                {id: "7.3.1", title: "Harassment"}
              ]},
              {id: "7.4", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Episode VIII: The Last Jedi</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode VIII: The Last Jedi</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode VIII: The Last Jedi</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg" alt="Episode VIII: The Last Jedi" poster />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Rian Johnson</Link></td>
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

export default LastJedi;