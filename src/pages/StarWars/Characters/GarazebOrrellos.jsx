import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const GarazebOrrellos = () =>
{
  useEffect(() =>
  {
    document.title = "Garazeb Orrellos - Pop Culture Wiki";
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
          <li>Garazeb Orrellos</li>
        </ul>
        <div>
          <h1 className="article-heading">Garazeb Orrellos</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Garazeb Orrellos</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/5/5c/GarazebSeasonOnePromo.jpg" alt="Garazeb Orrellos" />
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

export default GarazebOrrellos;