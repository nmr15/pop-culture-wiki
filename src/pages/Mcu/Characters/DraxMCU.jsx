import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const DraxMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Drax (MCU) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Biography"
            sub={[
              {id: "1.1", title: "Early life", sub2: [
                {id: "1.1.1", title: "Forming a family"}
              ]},
              {id: "1.2", title: "Quest for vengeance", sub2: [
                {id: "1.2.1", title: "Hunting Ronan the Accuser"},
                {id: "1.2.2", title: "Meeting the Guardians"},
                {id: "1.2.3", title: "Prison break"},
                {id: "1.2.4", title: "Joining the team"}
              ]},
              {id: "1.3", title: "Showdown with Ronan", sub2: [
                {id: "1.3.1", title: "Skirmish on Knowhere"},
                {id: "1.3.2", title: "Rescuing Peter Quill"},
                {id: "1.3.3", title: "Battle of Xandar"},
                {id: "1.3.4", title: "Skirmish with Korrath"},
                {id: "1.3.5", title: "Destroying Ronan"}
              ]},
              {id: "1.4", title: "replace"},
              {id: "1.5", title: "replace"},
              {id: "1.6", title: "replace"},
              {id: "1.7", title: "replace"},
              {id: "1.8", title: "replace"},
              {id: "1.9", title: "replace"}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Abilities"}
            ]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other Equipment"},
              {id: "3.3", title: "Vehicles"}
            ]}
          />
          <Collapse 
            id="4"
            item="Facilities"
            sub={[
              {id: "4.1", title: "Prisons"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Drax (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Drax (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Drax</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/cd/Drax_Vol._3.jpg" alt="Drax" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Dave Bautistia</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances by</th>
              <td className="infobox-data">
                <Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link> <br />
                <Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link> <br />
                <Link>I am Groot</Link> (1 episode) <br />
                <Link to="/mcu/the_guardians_of_the_galaxy_holiday_special">The Guardians of the Galaxy Holiday Special</Link>
                <Link to="/mcu/guardians_of_the_galaxy_vol_3">Guardians of the Galaxy Vol. 3</Link>
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

export default DraxMCU;