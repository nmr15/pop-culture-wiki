import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const AbedNadir = () =>
{
  useEffect(() =>
  {
    document.title = "Abed Nadir - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Concept and development</a></li>
          <li className="sidebar-list-item"><a href="#2">Biography</a></li>
          <li className="sidebar-list-item"><a href="#3">Personality</a></li>
          <Collapse 
            id="4"
            item="History"
            sub={[
              {id: "4.1", title: "Season 1"},
              {id: "4.2", title: "Season 2"},
              {id: "4.3", title: "Season 3"},
              {id: "4.4", title: "Season 4"},
              {id: "4.5", title: "Season 5"},
              {id: "4.6", title: "Season 6"}
            ]}
          />
          <Collapse 
            id="5"
            item="Relationships"
            sub={[
              {id: "5.1", title: "In the study group", sub2: [
                {id: "5.1.1", title: "Troy Barnes"},
                {id: "5.1.2", title: "Jeff Winger"},
                {id: "5.1.3", title: "Annie Edison"},
                {id: "5.1.4", title: "Britta Perry"},
                {id: "5.1.5", title: "Shirley Bennett"},
                {id: "5.1.6", title: "Pierce Hawthorne"}
              ]},
              {id: "5.2", title: "Other notable relationships", sub2: [
                {id: "5.2.1", title: "Gobi Nadir"},
                {id: "5.2.2", title: "Ben Chang"},
                {id: "5.2.3", title: "Agent Robin Vohlers"},
                {id: "5.2.4", title: "Pavel Iwaszkiewicz"},
                {id: "5.2.5", title: "Toby Weeks"},
                {id: "5.2.6", title: "Rachel"}
              ]}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Awards and nominations"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Abed Nadir</li>
        </ul>
        <div>
          <h1 className="article-heading">Abed Nadir</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Abed Nadir</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/28/Abed_Nadir.png" alt="Abed Nadir" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Danny Pudi</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>

          </p>
        </div>
      </main>
    </>
  )
}

export default AbedNadir;