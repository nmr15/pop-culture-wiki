import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card';
import Collapse from '../../components/Collapse';
import Heading2 from '../../components/Heading2';

const Pixar = () =>
{
  useEffect(() =>
  {
    document.title = "Pixar - Pop Culture Wiki";
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
              {id: "1.1", title: "Early history"},
              {id: "1.2", title: "Independent company (1986-1999)"},
              {id: "1.3", title: "Collaboration with Disney (1999-2006)"},
              {id: "1.4", title: "Walt Disney Studios subsidiary (2006-present)", sub2: [
                {id: "1.4.1", title: "Expansion and John Lasseter's exit (2010-2018)"},
                {id: "1.4.2", title: "Sequels and financial success (2018-2019)"},
                {id: "1.4.3", title: "COVID-19, Disney+ releases, and some financial struggles (2020-present)"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Campus</a></li>
          <Collapse 
            id="3"
            item="Filmography"
            sub={[
              {id: "3.1", title: "Traditions"},
              {id: "3.2", title: "Sequels and prequels"},
              {id: "3.3", title: "Adaptation to television"},
              {id: "3.4", title: "2D animation and live-action"},
              {id: "3.5", title: "Upcoming films"},
              {id: "3.6", title: "Franchises"},
              {id: "3.7", title: "Highest-grossing films"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Co-op Program</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Pixar</li>
        </ul>
        <div>
          <h1 className="article-heading">Pixar</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Pixar</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://1000logos.net/wp-content/uploads/2023/01/Pixar-logo-1536x864.png" alt="Pixar logo" />
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
          <p>
            <b>Pixar</b>, doing business as <b>Pixar Animation Studios</b>, is an American animation studio based in Emeryville, California, known for
            its critically and commercially successful computer-animated feature films. Pixar is a subsidiary of Walt Disney Studios, a division of
            Disney Entertainment segment of the Walt Disney Company.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"History"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Early history</h3>
            <h3 className="article-heading-3" id="1.2">Independent company (1986-1999)</h3>
            <h3 className="article-heading-3" id="1.3">Collaboration with Disney (1999-2006)</h3>
            <h3 className="article-heading-3" id="1.4">Walt Disney Studios subsidiary (2006-present)</h3>
            <h4 className="article-heading-4" id="1.4.1">Expansion and John Lasseter's exit (2010-2018)</h4>
            <h4 className="article-heading-4" id="1.4.2">Sequels and financial success (2018-2019)</h4>
            <h4 className="article-heading-4" id="1.4.3">COVID-19, Disney+ releases, and some financial struggles (2020-present)</h4>
          </div>
        </div>
         <div>
          <Heading2 id={2} title={"Campus"} />
          <div>
            
          </div>
        </div>
         <div>
          <Heading2 id={3} title={"Filmography"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Traditions</h3>
            <h3 className="article-heading-3" id="3.2">Sequels and prequels</h3>
            <h3 className="article-heading-3" id="3.3">Adaptation to television</h3>
            <h3 className="article-heading-3" id="3.4">2D animation and live-action</h3>
            <h3 className="article-heading-3" id="3.5">Upcoming films</h3>
            <h3 className="article-heading-3" id="3.6">Franchises</h3>
            <h3 className="article-heading-3" id="3.7">Highest-grossing films</h3>
          </div>
        </div>
         <div>
          <Heading2 id={4} title={"Co-op Program"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Pixar;