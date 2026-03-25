import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const AhsokaSeries = () =>
{
  useEffect(() =>
  {
    document.title = "Ahsoka (series) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <Collapse 
            id="2"
            item="Cast and characters"
            sub={[
              {id: "2.1", title: "Starring"},
              {id: "2.2", title: "Recurring"},
              {id: "2.3", title: "Guests"}
            ]}
          />
          <Collapse 
            id="3"
            item="Episodes"
            sub={[
              {id: "3.1", title: "Season 1 (2023)"},
              {id: "3.2", title: "Season 2"}
            ]}
          />
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Writing"},
              {id: "4.3", title: "Casting"},
              {id: "4.4", title: "Design"},
              {id: "4.5", title: "Filming"},
              {id: "4.6", title: "Music"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Release</a></li>
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Viewership"},
              {id: "5.2", title: "Critical response"},
              {id: "5.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Tie-in media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Ahsoka (series)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ahsoka (series)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ahsoka</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ahsoka.svg/500px-Ahsoka.svg.png" alt="Ahsoka poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>Dave Filoni</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><a href="#3">List of Ahsoka episodes</a></td>
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

export default AhsokaSeries;