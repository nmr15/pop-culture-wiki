import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const CaptainAmerica = () =>
{
  useEffect(() =>
  {
    document.title = "Captain America (Steve Rogers) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Publication history"
            sub={[
              {id: "1.1", title: "Creation and development"},
              {id: "1.2", title: "Debut and early success (early 1940s)"},
              {id: "1.3", title: "Decline in popularity (mid-1940s and 1950s)"},
              {id: "1.4", title: "Return to comics (1960s)"},
              {id: "1.5", title: "Political shifts (1970s)"},
              {id: "1.6", title: "Post-Vietnam and 'Heroes Reborn' (1980s and 1990s)"},
              {id: "1.7", title: "Modern era (2000s to present)"}
            ]}
          />

          <li className="sidebar-list-item"><a href="#3">Personality</a></li>
          <Collapse 
            id="4"
            item="Attributes"
            sub={[
              {id: "4.1", title: "Powers"},
              {id: "4.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="5"
            item="Paraphernalia"
            sub={[
              {id: "5.1", title: "Equipment"},
              {id: "5.2", title: "Weapons"},
              {id: "5.3", title: "Transportation"}
            ]}
          />
          <Collapse 
            id="6"
            item="Supporting cast"
            sub={[
              {id: "6.1", title: "Sidekicks and partners"},
              {id: "6.2", title: "Enemies"},
              {id: "6.3", title: "Romantic interests"},
              {id: "6.4", title: "Alternate versions of Captain America"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Cultural influence and legacy</a></li>
          <li className="sidebar-list-item"><a href="#8">In other media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Captain America (Steve Rogers)</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain America (Steve Rogers)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain America</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/CaptainAmericaHughes.jpg/220px-CaptainAmericaHughes.jpg" alt="Captain America" />
                </span>
              </td>
            </tr>
            <tr>
              <th colspan="2">Publication information</th>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link to="/marvelcomics">Marvel Comics</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data">
                <Link to="/people/joe_simon">Joe Simon</Link> <br />
                <Link to="/people/jack_kirby">Jack Kirby</Link>
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Steven Rogers</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default CaptainAmerica;