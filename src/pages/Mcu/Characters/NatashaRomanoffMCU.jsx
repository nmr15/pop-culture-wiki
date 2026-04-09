import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const NatashaRomanoffMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Natasha Romanoff (MCU) - Pop Culture Wiki";
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
          <li>Natasha Romanoff (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Natasha Romanoff (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Natasha Romanoff</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/3f/Black_Widow_Infobox.jpg" alt="Natasha Romanoff" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">
                <Link>Scarlett Johanson</Link> <br />
                Ever Anderson (young)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/iron_man_2">Iron Man 2</Link> <br />
                <Link to="mcu/the_avengers_film">The Avengers</Link> <br />
                <Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link> <br />
                <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> <br />
                <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/captain_marvel_film">Captain Marvel</Link> (mid-credits scene) <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/black_widow_film">Black Widow</Link>
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

export default NatashaRomanoffMCU;