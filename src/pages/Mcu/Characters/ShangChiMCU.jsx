import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ShangChiMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Shang-Chi (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Happy family"},
                {id: "1.1.2", title: "Death of Ying Li"},
                {id: "1.1.3", title: "Trained by the Ten Rings"},
                {id: "1.1.4", title: "Getting revenge"},
                {id: "1.1.5", title: "Moving on"}
              ]},
              {id: "1.2", title: "Facing the past", sub2: [
                {id: "1.2.1", title: "Bus fight"},
                {id: "1.2.2", title: "Trip to Macau"},
                {id: "1.2.3", title: "Fighting his sister"},
                {id: "1.2.4", title: "Attack on the Golden Daggers"},
                {id: "1.2.5", title: "Reunion with Wenwu"},
                {id: "1.2.6", title: "Escape from the Ten Rings"},
                {id: "1.2.7", title: "Journey to Ta Lo"},
                {id: "1.2.8", title: "Training with Ying Nan"},
                {id: "1.2.9", title: "Battle of Ta Lo"},
                {id: "1.2.10", title: "Aftermath of the battle"},
              ]},
              {id: "1.3", title: "Recruited by Wong"}
            ]}
          />
          <Collapse 
            id="2"
            item="Powers and abilities"
            sub={[
              {id: "2.1", title: "Powers"},
              {id: "2.2", title: "Former powers"},
              {id: "2.3", title: "Abilities"}
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
          <li>Shang-Chi (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Shang-Chi (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Shang-Chi</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/40/Shang-Chi_Profile.jpg" alt="Shang-Chi" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">Simu Liu</td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data"><Link to="/mcu/shangchi_and_the_legends_of_the_ten_rings">Shang-Chi and the Legend of the Ten Rings</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default ShangChiMCU;