import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CloneWarsSeries = () =>
{
  useEffect(() =>
  {
    document.title = "Star Wars: The Clone Wars (series) - Pop Culture Wiki";
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
          <li>Star Wars: The Clone Wars (series)</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars: The Clone Wars (series)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Star Wars: The Clone Wars</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Star_Wars_The_Clone_Wars.svg/640px-Star_Wars_The_Clone_Wars.svg.png" alt="Star Wars: The Clone Wars poster" />
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

export default CloneWarsSeries;