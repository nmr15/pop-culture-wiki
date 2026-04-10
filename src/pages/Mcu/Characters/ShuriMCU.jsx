import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ShuriMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Shuri (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Building technologies"}
              ]},
              {id: "1.2", title: "T'Challa's rule", sub2: [
                {id: "1.2.1", title: "The return of T'Challa"},
                {id: "1.2.2", title: "Coronation of T'Challa"},
                {id: "1.2.3", title: "Mission in Busan"},
                {id: "1.2.4", title: "Healing Everett Ross"},
                {id: "1.2.5", title: "Killmonger's takeover"},
                {id: "1.2.6", title: "Battle of Mount Bashenga"},
                {id: "1.2.7", title: "Sharing resources"},
                {id: "1.2.8", title: "Helping Bucky Barnes"}
              ]},
              {id: "1.3", title: "Infinity War", sub2: [
                {id: "1.3.1", title: "Extracting the Mind Stone"}
              ]},
              {id: "1.4", title: "Restored to life", sub2: [
                {id: "1.4.1", title: "Battle of Earth"},
                {id: "1.4.2", title: "Reunion in Wakanda"},
                {id: "1.4.3", title: "Tony Stark's funeral"},
                {id: "1.4.4", title: "The Wakanda Files"},
                {id: "1.4.5", title: "Teaching Assata"}
              ]},
              {id: "1.5", title: "Losing her brother", sub2: [
                {id: "1.5.1", title: "Attempting to recreate the herb"},
                {id: "1.5.2", title: "T'Challa's funeral"}
              ]},
              {id: "1.6", title: "Visiting Assata"},
              {id: "1.7", title: "Talokanil-Wakandan War", sub2: [
                {id: "1.7.1", title: "Meeting Namor"},
                {id: "1.7.2", title: "Meeting Riri Williams"},
                {id: "1.7.3", title: "Chase in Cambridge"},
                {id: "1.7.4", title: "Taken to Talokan"},
                {id: "1.7.5", title: "The last of royal blood"},
                {id: "1.7.6", title: "Ramonda's funeral"}
              ]},
              {id: "1.8", title: "Becoming Black Panther", sub2: [
                {id: "1.8.1", title: "Taking the herb"},
                {id: "1.8.2", title: "Wanting vengeance"},
                {id: "1.8.3", title: "Ending the conflict"}
              ]},
              {id: "1.9", title: "Leaving Wakanda", sub2: [
                {id: "1.9.1", title: "Meeting her nephew"}
              ]}
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
              {id: "3.1", title: "Panther habit"},
              {id: "3.2", title: "Weapons"},
              {id: "3.3", title: "Other equipment"},
              {id: "3.4", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Designs</a></li>
          <Collapse 
            id="5"
            item="Facilities"
            sub={[
              {id: "5.1", title: "Prisons"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Shuri (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Shuri (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Shuri</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/8/88/BlackPantherWFInfobox.jpg" alt="Shuri" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Leticia Wright</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/black_panther">Black Panther</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/black_panther_wakanda_forever">Black Panther: Wakanda Forever</Link>
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

export default ShuriMCU;