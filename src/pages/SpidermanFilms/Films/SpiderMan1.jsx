import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const SpiderMan1 = () =>
{
  useEffect(() =>
  {
    document.title = "Spider-Man (2002 film) - Pop Culture Wiki";
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
          <li><Link to="/spiderman_films">Spider-Man films</Link></li>
          <li>Spider-Man (2002 film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Spider-Man (2002 film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Spider-Man</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg" alt="Spider-Man poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Sam Raimi</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Films</th>
              <td className="infobox-data">List of Spider-Man films</td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data">List of Spider-Man film characters</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default SpiderMan1;