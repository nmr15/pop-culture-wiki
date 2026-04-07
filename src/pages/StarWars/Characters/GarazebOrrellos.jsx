import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse2 from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

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
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data"><Link>Steve Blum</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/starwars/rebels_series">Star Wars Rebels</Link> <br />
                <Link to="/starwars/the_mandalorian">The Mandalorian</Link> (1 episode)
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

export default GarazebOrrellos;