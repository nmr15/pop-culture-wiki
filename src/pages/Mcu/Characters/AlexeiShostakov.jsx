import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AlexeiShostakov = () =>
{
  useEffect(() =>
  {
    document.title = "Alexei Shostakov (MCU) - Pop Culture Wiki";
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
          <li>Alexei Shostakov (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Alexei Shostakov (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Alexei Shostakov</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a0/Red_Guardian_Infobox.jpg" alt="Alexei Shostakov" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>David Harbour</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/black_widow_film">Eternals</Link> <br />
                <Link to="/mcu/thunderbolts">Thunderbolts</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default AlexeiShostakov;