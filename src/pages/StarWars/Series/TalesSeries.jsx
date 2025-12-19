import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TalesSeries = () =>
{
  useEffect(() =>
  {
    document.title = "Star Wars: Tales (TV anthology) - Pop Culture Wiki";
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
          <li>Star Wars: Tales (TV anthology)</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars: Tales (TV anthology)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Star Wars: Tales</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Tales_logo.png/640px-Tales_logo.png" alt="Star Wars: Tales poster" />
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

export default TalesSeries;