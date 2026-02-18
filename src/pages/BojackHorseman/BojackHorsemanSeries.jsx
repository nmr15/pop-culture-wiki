import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse';
import Heading2 from '../../components/Heading2';

const BojackHorsemanSeries = () =>
{
  useEffect(() =>
  {
    document.title = "Bojack Horseman - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast and characters</a></li>
          <li className="sidebar-list-item"><a href="#3">Episodes</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Conception"},
              {id: "4.2", title: "Development history"},
              {id: "4.3", title: "Casting"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Influences</a></li>
          <Collapse 
            id="6"
            item="Themes"
            sub={[
              {id: "6.1", title: "Absurdism"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Music</a></li>
          <Collapse 
            id="7"
            item="Critical reception"
            sub={[
              {id: "7.1", title: "Season 1"},
              {id: "7.2", title: "Season 2"},
              {id: "7.3", title: "Season 3"},
              {id: "7.4", title: "Season 4"},
              {id: "7.5", title: "Season 5"},
              {id: "7.6", title: "Season 6"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Legacy</a></li>
          <li className="sidebar-list-item"><a href="#9">Syndication</a></li>
          <li className="sidebar-list-item"><a href="#10">Home media</a></li>
          <li className="sidebar-list-item"><a href="#11">Awards and nominations</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Bojack Horseman</li>
        </ul>
        <div>
          <h1 className="article-heading">Bojack Horseman</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Bojack Horseman</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BoJack_Horseman_Logo.svg/500px-BoJack_Horseman_Logo.svg.png" alt="Bojack Horseman logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>Raphael Bob-Waksberg</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><Link>List of Bojack Horseman episodes</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Bojack Horseman character</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default BojackHorsemanSeries;