import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const Hawkeye = () =>
{
  useEffect(() =>
  {
    document.title = "Hawkeye (Clint Barton) - Pop Culture Wiki";
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
              {id: "1.1", title: "1960s"},
              {id: "1.2", title: "1980s"},
              {id: "1.3", title: "1990s"},
              {id: "1.4", title: "2000s"},
              {id: "1.5", title: "2010s"}
            ]}
          />

          <li className="sidebar-list-item"><a href="#3">Personality</a></li>
          <Collapse 
            id="4"
            item="Attributes"
            sub={[
              {id: "4.1", title: "Powers"},
              {id: "4.2", title: "Abilities"},
              {id: "4.3", title: "Additional attributes"}
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
          <li className="sidebar-list-item"><a href="#6">Supporting characters</a></li>
          <li className="sidebar-list-item"><a href="#7">Other versions</a></li>
          <Collapse 
            id="8"
            item="In other media"
            sub={[
              {id: "8.1", title: "Television"},
              {id: "8.2", title: "Film"},
              {id: "8.3", title: "Marvel Cinematic Universe"},
              {id: "8.4", title: "Video games"},
              {id: "8.5", title: "Miscellaneous"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Reception</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Hawkeye (Clint Barton)</li>
        </ul>
        <div>
          <h1 className="article-heading">Hawkeye (Clint Barton)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Hawkeye</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/9/99/Hawkeye_%28Clinton_Barton%29.png" alt="Hawkeye" />
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
                <Link to="/people/stan_lee">Stan Lee</Link> (writer) <br />
                Don Heck (artist)
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Clinton Francis Barton</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default Hawkeye;