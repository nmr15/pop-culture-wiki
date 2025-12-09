import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGta from '../../../components/TableGta'

const ToniCipriani = () =>
{
  useEffect(() =>
  {
    document.title = "Toni Cipriani - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "Background"},
              {id: "1.2", title: "Events of Grand Theft Auto: Liberty City Stories"},
              {id: "1.3", title: "Events of Grand Theft Auto III"}
            ]}
          />
          <Collapse 
            id="2"
            item="Character"
            sub={[
              {id: "2.1", title: "Personality"},
              {id: "2.2", title: "Appearance"},
              {id: "2.3", title: "Influence"},
              {id: "2.4", title: "Murders commited by Toni Cipriani"}
            ]}
          />
          <Collapse 
            id="3"
            item="Prominent appearances in gameplay"
            sub={[
              {id: "3.1", title: "Grand Theft Auto III"},
              {id: "3.2", title: "Grand Theft Auto: Liberty City Stories"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Trivia</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
            <li>Toni Cipriani</li>
          </ul>
          <div>
            <h1 className="article-heading">Toni Cipriani</h1>
          </div>
          <table className="infobox">
            <tbody>
              <tr>
                <th colspan="2" className="infobox-heading">
                  <span>Toni Cipriani</span>
                </th>
              </tr>
              <tr>
                <td colspan="2">
                  <span>
                    <img src="https://static.wikia.nocookie.net/gtawiki/images/7/7c/ToniCipriani-GTALCS.png" alt="Toni Cipriani GTA Liberty City Stories" />
                  </span>
                </td>
              </tr>
              <tr>
                <th className="infobox-data">Appears in</th>
                <td className="infobox-data">
                  <Link to="/gta/grand_theft_auto_iii">Grand Theft Auto III</Link> <br />
                  <Link to="/gta/grand_theft_auto_liberty_city_stories">Grand Theft Auto: Liberty City Stories</Link>
                </td>
              </tr>
              <tr>
                <th className="infobox-data">Voiced by</th>
                <td className="infobox-data">
                  Michael Madsen (GTA III) <br />
                  Danny Mastrogiorgo (GTA Liberty City Stories)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="div-top">
            <p>
              <b>Antonio "Toni" Cipriani</b> is a main character in <Link to="/gta/grand_theft_auto_iii">Grand Theft Auto III</Link> and the protagonist of
              <Link to="/gta/grand_theft_auto_liberty_city_stories"> Grand Theft Auto: Liberty City Stories</Link>.
            </p>
            <p>
              He is voiced by the late Michael Madsen in GTA III and Danny Mastrogiorgo in GTA Liberty City Stories.
            </p>
          </div>
          <div>
            <Heading2 id={1} title={"History"} />
            <div>
              <h3 className="article-heading-3" id="1.1">Background</h3>
              <h3 className="article-heading-3" id="1.2">Events of Grand Theft Auto: Liberty City Stories</h3>
              <h3 className="article-heading-3" id="1.3">Events of Grand Theft Auto III</h3>
            </div>
          </div>
          <div>
            <Heading2 id={2} title={"Character"} />
            <div>
              <h3 className="article-heading-3" id="2.1">Personality</h3>
              <h3 className="article-heading-3" id="2.2">Appearance</h3>
              <h3 className="article-heading-3" id="2.3">Influence</h3>
              <h3 className="article-heading-3" id="2.4">Murders commited by Toni Cipriani</h3>
            </div>
          </div>
          <div>
            <Heading2 id={3} title={"Prominent appearances in gameplay"} />
            <div>
              <h3 className="article-heading-3" id="3.1">Grand Theft Auto III</h3>
              <h3 className="article-heading-3" id="3.2">Grand Theft Auto: Liberty City Stories</h3>
            </div>
          </div>
          <div>
            <Heading2 id={4} title={"Trivia"} />
            <div>
              
            </div>
          </div>
      </main>
    </>
  )
}

export default ToniCipriani;