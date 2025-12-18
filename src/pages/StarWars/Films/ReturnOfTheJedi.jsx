import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ReturnOfTheJedi = () =>
{
  useEffect(() =>
  {
    document.title = "Episode VI: Return of the Jedi - Pop Culture Wiki";
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
          <li>Episode VI: Return of the Jedi</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode VI: Return of the Jedi</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode VI: Return of the Jedi</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg" alt="Episode VI: Return of the Jedi poster" />
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

export default ReturnOfTheJedi;