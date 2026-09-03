import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const Deadpool = () =>
{
  useEffect(() =>
  {
    document.title = "Deadpool (Wade Wilson) - Pop Culture Wiki";
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
              {id: "1.1", title: "Early appearance and miniseries (1991-1996)"},
              {id: "1.2", title: "First ongoing series (1997-2002)"},
              {id: "1.3", title: "Cable & Deadpool and commercial stagnation (2004-2008)"},
              {id: "1.4", title: "Resurgence (2008-2012)"},
              {id: "1.5", title: "Marvel Now! (2012-2015)"},
              {id: "1.6", title: "All-New, All-Different Marvel and Despicable Deadpool (2015-2018)"},
              {id: "1.7", title: "Skottle Young and Kelly Thompson (2018-2021)"},
              {id: "1.8", title: "Alyssa Wong (2022-2023)"},
              {id: "1.9", title: "Cody Ziglar and Benjamin Percy (2024-present)"}
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
              {id: "5.3", title: "Speech bubbles"},
              {id: "5.4", title: "Transportation"}
            ]}
          />
          <Collapse 
            id="6"
            item="Supporting characters"
            sub={[
              {id: "6.1", title: "Romantic interests"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Deadpool (Wade Wilson)</li>
        </ul>
        <div>
          <h1 className="article-heading">Deadpool (Wade Wilson)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Deadpool</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/c/ca/Deadpool.png" alt="Deadpool" />
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
                <Link>Rob Liefeld</Link> <br />
                Fabian Nicieza
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Wade Winston Wilson</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default Deadpool;