import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

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
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Writing"},
              {id: "3.3", title: "Casting"},
              {id: "3.4", title: "Filming"},
              {id: "3.5", title: "Music"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Marketing</a></li>
          <Collapse 
            id="5"
            item="Release"
            sub={[
              {id: "5.1", title: "Theatrical"},
              {id: "5.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Box office", sub2: [
                {id: "6.1.1", title: "United States and Canada"},
                {id: "6.1.2", title: "Other territories"}
              ]},
              {id: "6.2", title: "Critical response"},
              {id: "6.3", title: "Audience reception", sub2: [
                {id: "6.3.1", title: "Harassment"}
              ]},
              {id: "6.4", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Sequel</a></li>
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