import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const DeathlyHallowsBook = () =>
{
  useEffect(() =>
  {
    document.title = "Harry Potter and the Deathly Hallows (book) - Pop Culture Wiki";
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
          <li><Link to="/hpbooks">Harry Potter</Link></li>
          <li>Harry Potter and the Deathly Hallows (book)</li>
        </ul>
        <div>
          <h1 className="article-heading">Harry Potter and the Deathly Hallows (book)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Harry Potter and the Deathly Hallows</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/harrypotter/images/1/14/Harry_Potter_and_the_Deathly_Hallows_US_cover.jpg" alt="Harry Potter and the Deathly Hallows cover" />
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

export default DeathlyHallowsBook;