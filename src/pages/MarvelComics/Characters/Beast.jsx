import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const Beast = () =>
{
  useEffect(() =>
  {
    document.title = "Beast (Hank McCoy) - Pop Culture Wiki";
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
              {id: "1.2", title: "1970s, 1980s, and 1990s"},
              {id: "1.3", title: "2000s"},
              {id: "1.4", title: "2010s and 2020s"}
            ]}
          />
          <Collapse 
            id="2"
            item="Biography"
            sub={[
              {id: "2.1", title: "Early years"},
              {id: "2.2", title: "Education"},
              {id: "2.3", title: "Time-displacement"},
              {id: "2.4", title: "X-Men"},
              {id: "2.5", title: "Bouncing, Blue Beast"},
              {id: "2.6", title: "Avengers"},
              {id: "2.7", title: "Defenders"},
              {id: "2.8", title: "Beauty and the Beast"},
              {id: "2.9", title: "X-Factor"},
              {id: "2.10", title: "Return to the X-Men & The Legacy Virus"},
              {id: "2.11", title: "Onslaught"},
              {id: "2.12", title: "X-Treme X-Men"},
              {id: "2.13", title: "New X-Men"},
              {id: "2.14", title: "Decimation"},
              {id: "2.15", title: "Endangered species"},
              {id: "2.16", title: "X-Club"},
              {id: "2.17", title: "Utopia"},
              {id: "2.18", title: "Fall of the Hulks/World War Hulks"},
              {id: "2.19", title: "S.W.O.R.D./Second Coming"},
              {id: "2.20", title: "Secret Avengers"},
              {id: "2.21", title: "Avengers vs. X-Men"},
              {id: "2.22", title: "New mutation and joining the Illuminati"},
              {id: "2.23", title: "Time runs out"},
              {id: "2.24", title: "M-Pox"},
              {id: "2.25", title: "Inhumans vs. X-Men"},
              {id: "2.26", title: "Return to the X-Men"},
              {id: "2.27", title: "Age of X-Men"},
              {id: "2.28", title: "Krakoa"},
              {id: "2.29", title: "Going mad"},
              {id: "2.30", title: "3K"}
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
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Beast (Hank McCoy)</li>
        </ul>
        <div>
          <h1 className="article-heading">Beast (Hank McCoy)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Beast</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/0/0b/Beast_%28Hank_McCoy_-_circa_2019%29.png" alt="Beast" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default Beast;