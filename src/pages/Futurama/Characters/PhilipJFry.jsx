import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const PhilipJFry = () =>
{
  useEffect(() =>
  {
    document.title = "Philip J. Fry - Pop Culture Wiki";
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
          <li><Link to="/futurama">Futurama</Link></li>
          <li>Philip J. Fry</li>
        </ul>
        <div>
          <h1 className="article-heading">Philip J. Fry</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Philip J. Fry</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/enfuturama/images/4/4c/Character_Fry.png" alt="Philip J. Fry" />
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

export default PhilipJFry;