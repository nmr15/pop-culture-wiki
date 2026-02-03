import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const BruceBannerMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Bruce Banner (MCU) - Pop Culture Wiki";
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
          <li>Bruce Banner (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Bruce Banner (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Bruce Banner</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/7/79/Hulk_in_the_She-Hulk_series_-_Infobox.jpg" alt="Bruce Banner" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">
                <Link>Edward Norton</Link> <br />
                <Link>Mark Ruffalo</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/the_incredible_hulk_film">The Incredible Hulk</Link> <br />
                <Link to="mcu/the_avengers_film">The Avengers</Link> <br />
                <Link to="/mcu/iron_man_3">Iron Man 3</Link> (post-credits-scene) <br />
                <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> <br />
                <Link to="/mcu/thor_ragnarok">Thor: Ragnarok</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/captain_marvel_film">Captain Marvel</Link> (mid-credits-scene) <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/shangchi_and_the_legends_of_the_ten_rings">Shang-Chi and the Legend of the Ten Rings</Link> (mid-credits-scene) <br />
                <Link to="/mcu/shehulk_attorney_at_law">She-Hulk: Attorney at Law</Link> (3 episodes)
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

export default BruceBannerMCU;