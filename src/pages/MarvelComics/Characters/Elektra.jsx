import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const Elektra = () =>
{
  useEffect(() =>
  {
    document.title = "Elektra Natchios - Pop Culture Wiki";
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
              {id: "1.2", title: "1980s"},
              {id: "1.3", title: "1990s"},
              {id: "1.4", title: "2000s"},
              {id: "1.5", title: "2010s and 2020s"}
            ]}
          />
          <Collapse 
            id="2"
            item="Fictional history"
            sub={[
              {id: "2.1", title: "Early years"},
              {id: "2.2", title: "Matt Murdock"},
              {id: "2.3", title: "Tying loose ends"},
              {id: "2.4", title: "Daredevil"},
              {id: "2.5", title: "Death and resurrection"},
              {id: "2.6", title: "Fall from grace"},
              {id: "2.7", title: "Root of evil"},
              {id: "2.8", title: "Solo adventures"},
              {id: "2.9", title: "Replaced"},
              {id: "2.10", title: "Return"},
              {id: "2.11", title: "Heroes for Hire"},
              {id: "2.12", title: "Thunderbolts"},
              {id: "2.13", title: "Pleasant Hill"},
              {id: "2.14", title: "S.H.I.E.L.D."},
              {id: "2.15", title: "Keeping tabs with the Hand"},
              {id: "2.16", title: "Aways bet on red"},
              {id: "2.17", title: "A new devil in town"},
              {id: "2.18", title: "Fighting the Hand"},
              {id: "2.19", title: "Return to Hell's Kitchen"},
              {id: "2.20", title: "Dawn of a new gang"},
              {id: "2.21", title: "The Heat"},
              {id: "2.22", title: "The return of Muse"},
              {id: "2.23", title: "Saving K'un-Lun"}
            ]}
          />
          <Collapse 
            id="3"
            item="Attributes"
            sub={[
              {id: "3.1", title: "Powers"},
              {id: "3.2", title: "Abilities"},
              {id: "3.3", title: "Weaknesses"}
            ]}
          />
          <Collapse 
            id="4"
            item="Paraphernalia"
            sub={[
              {id: "4.1", title: "Equipment"},
              {id: "4.2", title: "Weapons"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Themes and motifs</a></li>
          <li className="sidebar-list-item"><a href="#6">Supporting characters</a></li>
          <li className="sidebar-list-item"><a href="#7">Reception</a></li>
          <li className="sidebar-list-item"><a href="#8">In other media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Elektra Natchios</li>
        </ul>
        <div>
          <h1 className="article-heading">Elektra Natchios</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Elektra</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/af/Elektra_3.jpg" alt="Elektra" />
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
                <Link>Frank Miller</Link>
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Elektra Natchios</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default Elektra;