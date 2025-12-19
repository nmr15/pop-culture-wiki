import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ObiWanKenobiSeries = () =>
{
  useEffect(() =>
  {
    document.title = "Obi-Wan Kenobi (series) - Pop Culture Wiki";
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
          <li>Obi-Wan Kenobi (series)</li>
        </ul>
        <div>
          <h1 className="article-heading">Obi-Wan Kenobi (series)</h1>
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
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Obi_Wan_Kenobi_series_logo_simplified.svg/640px-Obi_Wan_Kenobi_series_logo_simplified.svg.png" alt="Obi-Wan Kenobi poster" />
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

export default ObiWanKenobiSeries;