import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const BlackWidow = () =>
{
  useEffect(() =>
  {
    document.title = "Black Widow (Natasha Romanova) - Pop Culture Wiki";
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
              {id: "1.2", title: "1970s"},
              {id: "1.3", title: "1980s"},
              {id: "1.4", title: "1990s"},
              {id: "1.5", title: "2000s"},
              {id: "1.6", title: "2010s"},
              {id: "1.7", title: "2020s"}
            ]}
          />
          <Collapse 
            id="2"
            item="Fictional history"
            sub={[
              {id: "2.1", title: "The early years"},
              {id: "2.2", title: "Raised by a foster father"},
              {id: "2.3", title: "The Red Room"},
              {id: "2.4", title: "The KGB"},
              {id: "2.5", title: "Early clashes with Iron Man"},
              {id: "2.6", title: "Association with the Avengers"},
              {id: "2.7", title: "Going solo"},
              {id: "2.8", title: "Partners with Daredevil"},
              {id: "2.9", title: "Nancy Rushman"},
              {id: "2.10", title: "The Champions of Los Angeles"},
              {id: "2.11", title: "Back in the U.S.S.R."},
              {id: "2.12", title: "An Avenger"},
              {id: "2.13", title: "Post-Onslaught"},
              {id: "2.14", title: "Widow's hunt"},
              {id: "2.15", title: "Nick Fury's secret war"},
              {id: "2.16", title: "Daredevil goes to jail"},
              {id: "2.17", title: "Civil War and Initiative"},
              {id: "2.18", title: "The Thunderbolts"},
              {id: "2.19", title: "Widowmaker"},
              {id: "2.20", title: "Again an Avenger"},
              {id: "2.21", title: "Secret Empire"},
              {id: "2.22", title: "The Red Ledger"},
              {id: "2.23", title: "Infinity countdown"},
              {id: "2.24", title: "Missing memories"},
              {id: "2.25", title: "The ties that bind"},
              {id: "2.26", title: "Venomized"}
            ]}
          />
          <Collapse 
            id="3"
            item="Personality"
            sub={[
              {id: "3.1", title: "Relationships"}
            ]}
          />
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
          <Collapse 
            id="6"
            item="Themes and motifs"
            sub={[
              {id: "6.1", title: "Communism and Russophobia"},
              {id: "6.2", title: "Feminism and sexuality"}
            ]}
          />
          <Collapse 
            id="7"
            item="Supporting characters"
            sub={[
              {id: "7.1", title: "Daredevil"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Reception</a></li>
          <li className="sidebar-list-item"><a href="#9">In other media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Black Widow (Natasha Romanova)</li>
        </ul>
        <div>
          <h1 className="article-heading">Black Widow (Natasha Romanova)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Black Widow</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/37/Natasha_Romanova_incarnations.jpg" alt="Black Widow" />
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
                <Link>Stan Lee</Link> (editor/plotter) <br />
                Don Rico (writer) <br />
                Don Heck (artist)
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Natalia Alianovna Romanova</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default BlackWidow;