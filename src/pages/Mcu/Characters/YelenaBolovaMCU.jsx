import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const YelenaBolovaMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Yelena Bolova (MCU) - Pop Culture Wiki";
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
          <li>Yelena Bolova (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Yelena Bolova (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Yelena Bolova</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/8e/Yelena_Belova_Infobox.jpg" alt="Yelena Bolova" />
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

export default YelenaBolovaMCU;