import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LastJedi = () =>
{
  useEffect(() =>
  {
    document.title = "Episode VIII: The Last Jedi - Pop Culture Wiki";
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
          <li>Episode VIII: The Last Jedi</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode VIII: The Last Jedi</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode VIII: The Last Jedi</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg" alt="Episode VIII: The Last Jedi" poster />
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

export default LastJedi;