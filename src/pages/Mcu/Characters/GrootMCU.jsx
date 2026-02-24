import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const GrootMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Groot (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Newborn days"},
                {id: "1.1.2", title: "Groot's first steps"},
                {id: "1.1.3", title: "Battle on Sovereign"},
                {id: "1.1.4", title: "Left on Berhert"},
                {id: "1.1.5", title: "Abused by Ravagers"},
                {id: "1.1.6", title: "Escape from the Eclector"}
              ]},
              {id: "1.2", title: "Ego's expansion", sub2: [
                {id: "1.2.1", title: "Rescuing the Guardians"},
                {id: "1.2.2", title: "Battle on Ego's planet"},
                {id: "1.2.3", title: "Yondu Udonta's funeral"}
              ]},
              {id: "1.3", title: "Adventures in space", sub2: [
                {id: "1.3.1", title: "Visiting Grundar"},
                {id: "1.3.2", title: "Protecting his home"},
                {id: "1.3.3", title: "Taking a bath"},
                {id: "1.3.4", title: "Making a family portrait"},
                {id: "1.3.5", title: "Finding a Terma bird"},
                {id: "1.3.6", title: "A new nose for a new battery"},
                {id: "1.3.7", title: "Snow day"},
                {id: "1.3.8", title: "Screaming for ice cream"},
                {id: "1.3.9", title: "The great prophecy"},
                {id: "1.3.10", title: "Cleaning his room"}
              ]},
              {id: "1.4", title: "Infinity War", sub2: [
                {id: "1.4.1", title: "Distress call"},
                {id: "1.4.2", title: "Forging Stormbreaker"},
                {id: "1.4.3", title: "Battle of Wakanda"},
                {id: "1.4.4", title: "Thanos' Victory"},
                {id: "1.4.5", title: "Battle of Earth"}
              ]},
              {id: "1.5", title: "Return to space", sub2: [
                {id: "1.5.1", title: "Guardians reassembled"},
                {id: "1.5.2", title: "Adventures in the galaxy"},
                {id: "1.5.3", title: "Battle of Indigarr"},
                {id: "1.5.4", title: "Answering distress calls"}
              ]},
              {id: "1.6", title: "Operating from Knowhere", sub2: [
                {id: "1.6.1", title: "Buying Knowhere"},
                {id: "1.6.2", title: "Celebrating Christmas"},
                {id: "1.6.3", title: "Attack on Rocket"}
              ]},
              {id: "1.7", title: "Saving Rocket", sub2: [
                {id: "1.7.1", title: "Infiltrating Orgoscope"},
                {id: "1.7.2", title: "Visiting Counter-Earth"},
                {id: "1.7.3", title: "Battle of Counter-Earth"},
                {id: "1.7.4", title: "Attack on Arête Laboratories"},
                {id: "1.7.5", title: "Disbandment"}
              ]},
              {id: "1.8", title: "New Guardians of the Galaxy", sub2: [
                {id: "1.8.1", title: "Battle of Krylor"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Abilities"}
            ]]}
          />
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Vehicles"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Groot (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Groot (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Groot</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/cf/Old_Groot.png" alt="Groot" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">
                <Link>James Gunn</Link> (motion capture) <br />
                <Link>Sean Gunn</Link> (motion capture) <br />
                Terry Notary (motion capture) <br />
                Austin Freeman (motion capture)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Voiced by</th>
              <td className="infobox-data"><Link>Vin Diesel</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link> <br />
                <Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link> <br />
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

export default GrootMCU;