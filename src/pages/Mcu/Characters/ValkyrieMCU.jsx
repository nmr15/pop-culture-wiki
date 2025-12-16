import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ValkyrieMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Valkyrie (MCU) - Pop Culture Wiki";
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
          <li>Valkyrie (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Valkyrie (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Valkyrie</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d8/Valkyrie_in_LoveAndThunder_Poster.png" alt="Valkyrie" />
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

export default ValkyrieMCU;