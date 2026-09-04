import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const Gambit = () =>
{
  useEffect(() =>
  {
    document.title = "Gambit (Remy LeBeau) - Pop Culture Wiki";
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
              {id: "1.1", title: "1990s"},
              {id: "1.2", title: "200s and 2010s"}
            ]}
          />

          <li className="sidebar-list-item"><a href="#3">Personality</a></li>
          <Collapse 
            id="4"
            item="Attributes"
            sub={[
              {id: "4.1", title: "Powers"},
              {id: "4.2", title: "Abilities"},
              {id: "4.3", title: "Weaknesses"}
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
          <li className="sidebar-list-item"><a href="#6">Reception</a></li>
          <Collapse 
            id="7"
            item="Literary reception"
            sub={[
              {id: "7.1", title: "X-Men: Curse of the Mutants - Storm and Gambit - 2010"},
              {id: "7.2", title: "Other comic books"}
            ]}
          />
          <Collapse 
            id="8"
            item="Other versions"
            sub={[
              {id: "8.1", title: "Age of Apocalypse"},
              {id: "8.2", title: "Bishop's future"},
              {id: "8.3", title: "Ultimate Marvel"}
            ]}
          />
          <Collapse 
            id="9"
            item="In other media"
            sub={[
              {id: "9.1", title: "Television"},
              {id: "9.2", title: "Films"},
              {id: "9.3", title: "Video games"},
              {id: "9.4", title: "Miscellaneous"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Gambit (Remy LeBeau)</li>
        </ul>
        <div>
          <h1 className="article-heading">Gambit (Remy LeBeau)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Gambit</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/9/94/Gambit_%28Marvel_Comics%29.png" alt="Gambit" />
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
                Chris Claremont (writer) <br />
                <Link>Jim Lee</Link> (artist)
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Remy Etienne LeBeau</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default Gambit;