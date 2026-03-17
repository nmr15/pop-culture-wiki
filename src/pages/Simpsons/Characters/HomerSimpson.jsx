import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const HomerSimpson = () =>
{
  useEffect(() =>
  {
    document.title = "Homer Simpson - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Role in The Simpsons</a></li>
          <Collapse 
            id="2"
            item="Character"
            sub={[
              {id: "2.1", title: "Creation"},
              {id: "2.2", title: "Design"},
              {id: "2.3", title: "Voice"},
              {id: "2.4", title: "Character development"},
              {id: "2.5", title: "Personality"}
            ]}
          />
          <Collapse 
            id="3"
            item="Biography"
            sub={[
              {id: "3.1", title: "Childhood summary"},
              {id: "3.2", title: "Jobs"},
              {id: "3.3", title: "Criminal record"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Appearance</a></li>
          <Collapse 
            id="5"
            item="Personality"
            sub={[
              {id: "5.1", title: "Religious beliefs"},
              {id: "5.2", title: "Alter-egos"}
            ]}
          />
          <Collapse 
            id="6"
            item="Skills and abilities"
            sub={[
              {id: "6.1", title: "Physical prowess"},
              {id: "6.2", title: "Endurance"},
              {id: "6.3", title: "Music"},
              {id: "6.4", title: "Hand-to-hand combat skills, fighting prowess, and superhuman strength"},
              {id: "6.5", title: "Language"},
              {id: "6.6", title: "Defying the Laws of Science"},
              {id: "6.7", title: "Leadership"},
              {id: "6.8", title: "Appetite"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/simpsons">The Simpsons</Link></li>
          <li>Homer Simpson</li>
        </ul>
        <div>
          <h1 className="article-heading">Homer Simpson</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Homer Simpson</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" alt="Homer Simpson" />
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

export default HomerSimpson;