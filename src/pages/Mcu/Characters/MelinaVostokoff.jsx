import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MelinaVostokoff = () =>
{
  useEffect(() =>
  {
    document.title = "Melina Vostokoff (MCU) - Pop Culture Wiki";
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
          <li>Melina Vostokoff (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Melina Vostokoff (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Melina Vostokoff</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="ttps://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a4/MelinaVostokoffProfilePic.jpeg" alt="Melina Vostokoff" />
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

export default MelinaVostokoff;