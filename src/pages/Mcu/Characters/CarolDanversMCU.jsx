import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const CarolDanversMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Carol Danvers (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Difficult childhood"},
                {id: "1.1.2", title: "Determination"}
              ]},
              {id: "1.2", title: "Air Force training", sub2: [
                {id: "1.2.1", title: "Joining the Air Force"},
                {id: "1.2.2", title: "Meeting Maria Rambeau"},
                {id: "1.2.3", title: "First day"},
                {id: "1.2.4", title: "Making up with Bianchi"},
                {id: "1.2.5", title: "Field day"},
                {id: "1.2.6", title: "Second beast"},
                {id: "1.2.7", title: "Acceptance day"}
              ]},
              {id: "1.3", title: "Learning to fly", sub2: [
                {id: "1.3.1", title: "Meeting Bonnie and Jack Thompson"},
                {id: "1.3.2", title: "First day of classes"},
                {id: "1.3.3", title: "First flight"},
                {id: "1.3.4", title: "Air show"},
                {id: "1.3.5", title: "Power-off stall"},
                {id: "1.3.6", title: "Choosing a new path"},
                {id: "1.3.7", title: "Flying Falcons tryouts"},
                {id: "1.3.8", title: "Celebratory meal"}
              ]},
              {id: "1.4", title: "replace"},
              {id: "1.5", title: "replace"},
              {id: "1.6", title: "replace"},
              {id: "1.7", title: "replace"},
              {id: "1.8", title: "replace"},
              {id: "1.9", title: "replace"},
              {id: "1.10", title: "replace"},
              {id: "1.11", title: "replace"},
              {id: "1.12", title: "replace"},
              {id: "1.13", title: "replace"},
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
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Carol Danvers (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Carol Danvers (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Carol Danvers</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/3d/Captain_Marvel_Profile.png" alt="Carol Danvers" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Brie Larson</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/captain_marvel_film">Captain Marvel</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/shangchi_and_the_legends_of_the_ten_rings">Shang-Chi and the Legend of the Ten Rings</Link> (post-credits-scene) <br />
                <Link to="/mcu/the_marvels">The Marvels</Link>
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

export default CarolDanversMCU;