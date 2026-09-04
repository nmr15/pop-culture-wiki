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
          <Collapse 
            id="7"
            item="Other versions"
            sub={[
              {id: "7.1", title: "Age of Apocalypse"},
              {id: "7.2", title: "Apocalypse Wars"},
              {id: "7.3", title: "Captain America: Who Won't Wield the Shield"},
              {id: "7.4", title: "Deadpool Corps"},
              {id: "7.5", title: "Deadpool Killology", sub2: [
                {id: "7.5.1", title: "Deadpool Kills the Marvel Universe"},
                {Id: "7.5.2", title: "Deadpool Killustrated"},
                {id: "7.5.3", title: "Deadpool Kills Deadpool"},
                {id: "7.5.4", title: "Deadpool Kills the Marvel Universe Again"}
              ]},
              {id: "7.6", title: "Deadpool: Merc with a Mouth"},
              {id: "7.7", title: "Deadpool Pulp"},
              {id: "7.8", title: "Deadpool Samurai"},
              {id: "7.9", title: "Heroes Reborn"},
              {id: "7.10", title: "House of M"},
              {id: "7.11", title: "Hulked-Out Heroes"},
              {id: "7.12", title: "Identity Wars"},
              {id: "7.13", title: "Marvel 2099"},
              {id: "7.14", title: "Marvel 2997"},
              {id: "7.15", title: "Marvel Zombies"},
              {id: "7.16", title: "Spider-Man & Deadpool"},
              {id: "7.17", title: "Ultimate Marvel"},
              {id: "7.18", title: "Venomverse"},
              {id: "7.19", title: "Weapon X: Days of Future Now"},
              {id: "7.20", title: "What If...?"},
              {id: "7.21", title: "X-Men '92"}
            ]}
          />
          <Collapse 
            id="8"
            item="Reception"
            sub={[
              {id: "8.1", title: "Critical reception"}
              {id: "8.2", title: "Impact"}
            ]}
          />
          <Collapse 
            id="9"
            item="In other medias"
            sub={[
              {id: "9.1", title: "Television"},
              {id: "9.2", title: "Film", sub2: [
                {id: "9.2.1", title: "Animation"},
                {id: "9.2.2", title: "Live-action"}
              ]},
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