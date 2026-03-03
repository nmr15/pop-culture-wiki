import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const GuardiansOfTheGalaxyVol2 = () =>
{
  useEffect(() =>
  {
    document.title = "Guardians of the Galaxy Vol. 2 - Pop Culture Wiki";
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
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Guardians of the Galaxy Vol. 2</li>
        </ul>
        <div>
          <h1 className="article-heading">Guardians of the Galaxy Vol. 2</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Guardians of the Galaxy Vol. 2</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Guardians_of_the_Galaxy_Vol._2_poster.jpg" alt="Guardians of the Galaxy Vol. 2 poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>James Gunn</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of MCU projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link to="/mcu/characters">List of MCU character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous MCU project</th>
              <td className="infobox-data"><Link to="/mcu/doctor_strange_film">Doctor Strange</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/spiderman_homecoming">Spider-Man: Homecoming</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default GuardiansOfTheGalaxyVol2;