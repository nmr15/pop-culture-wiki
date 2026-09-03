import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const Daredevil = () =>
{
  useEffect(() =>
  {
    document.title = "Daredevil (Matt Murdock) - Pop Culture Wiki";
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
              {id: "1.1", title: "Creation"},
              {id: "1.2", title: "1960s"},
              {id: "1.3", title: "1970s"},
              {id: "1.4", title: "1980s"},
              {id: "1.5", title: "1990s"},
              {id: "1.6", title: "2000s"},
              {id: "1.7", title: "2010s and 2020s"}
            ]}
          />

          <li className="sidebar-list-item"><a href="#3">Personality</a></li>
          <Collapse 
            id="4"
            item="Attributes"
            sub={[
              {id: "4.1", title: "Powers"},
              {id: "4.2", title: "Abilities"},
              {id: "4.3", title: "Weaknesses"},
              {id: "4.4", title: "Additional attributes"}
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
            item="Themes and motifs"
            sub={[
              {id: "6.1", title: "Political corruption and moral ambiguity"},
              {id: "6.2", title: "Irish Catholic identity and culture"},
              {id: "6.3", title: "Blindness"},
              {id: "8.4", title: "Violence and trauma"}
            ]}
          />
          <Collapse 
            id="7"
            item="Supporting characters"
            sub={[
              {id: "7.1", title: "Elektra"},
              {id: "7.2", title: "Allies"},
              {id: "7.3", title: "Romantic interests"},
              {id: "7.4", title: "Enemies"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Reception</a></li>
          <Collapse 
            id="9"
            item="In other media"
            sub={[
              {id: "9.1", title: "Marvel Cinematic Universe"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Daredevil (Matt Murdock)</li>
        </ul>
        <div>
          <h1 className="article-heading">Daredevil (Matt Murdock)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Daredevil</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Daredevil_65.jpg" alt="Daredevil" />
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
                <Link>Stan Lee</Link> (writer) <br />
                Bill Everett (artist)
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Matthew Michael Murdock</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default Daredevil;