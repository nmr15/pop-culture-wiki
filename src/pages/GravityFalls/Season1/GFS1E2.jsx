import { useEffect } from 'react'
import { Link } from "react-router-dom";
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGravityFalls from '../../../components/TableGravityFalls'

const Template = () =>
{
  useEffect(() =>
  {
    document.title = "The Legend of the Gobblewonker - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gravityfalls">Gravity Falls</Link></li>
          <li>The Legend of the Gobblewonker</li>
        </ul>
        <div>
          <h1 className="article-heading">The Legend of the Gobblewonker</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Legend of the Gobblewonker</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/gravityfalls/images/d/da/S1e2_dipper_pines_taking_picture.png" alt="The Legend of the Gobblewonker" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Episode no.</th>
              <td className="infobox-data">
                Season 1 <br />
                Episode 2
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Previous episode</th>
              <td className="infobox-data"><Link to="/gravityfalls/tourist_trapped">Tourist Trapped</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next episode</th>
              <td className="infobox-data"><Link to="/gravityfalls/headhunters">Headhunters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default Template;