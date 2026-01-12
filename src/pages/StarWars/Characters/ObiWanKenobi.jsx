import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ObiWanKenobi = () =>
{
  useEffect(() =>
  {
    document.title = "Obi-Wan Kenobi - Pop Culture Wiki";
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
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Obi-Wan Kenobi</li>
        </ul>
        <div>
          <h1 className="article-heading">Obi-Wan Kenobi</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Obi-Wan Kenobi</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/c/c5/ObiSWC.png" alt="Obi-Wan Kenobi" />
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

export default ObiWanKenobi;