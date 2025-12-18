import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const RiseOfSkywalker = () =>
{
  useEffect(() =>
  {
    document.title = "Episode IX: Rise of Skywalker - Pop Culture Wiki";
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
          <li>Episode IX: Rise of Skywalker</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode IX: Rise of Skywalker</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode IX: Rise of Skywalker</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg" alt="Episode IX: Rise of Skywalker poster" />
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

export default RiseOfSkywalker;