import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const AlexeiShostakov = () =>
{
  useEffect(() =>
  {
    document.title = "Alexei Shostakov (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Childhood in Soviet Russia"}
              ]},
              {id: "1.2", title: "Russian agent", sub2: [
                {id: "1.2.1", title: "Becoming a super soldier"},
                {id: "1.2.2", title: "Undercover in America"},
                {id: "1.2.3", title: "Family separation"},
                {id: "1.2.4", title: "Betrayal and imprisonment"}
              ]},
              {id: "1.3", title: "Family reunion", sub2: [
                {id: "1.3.1", title: "Escape from prison"},
                {id: "1.3.2", title: "Visiting Melina Vostokoff"},
                {id: "1.3.3", title: "Showdown at the Red Room"},
                {id: "1.3.4", title: "Family split apart"}
              ]},
              {id: "1.4", title: "Search for glory", sub2: [
                {id: "1.4.1", title: "Living in America"},
                {id: "1.4.2", title: "Yelena Bolova's visit"},
                {id: "1.4.3", title: "Helping the Thunderbolts"},
                {id: "1.4.4", title: "Fighting Sentry"},
                {id: "1.4.5", title: "Confronting his daughter"},
                {id: "1.4.6", title: "Stopping the Void"},
                {id: "1.4.7", title: "Member of the New Avengers"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Personality</a></li>
          <Collapse 
            id="3"
            item="Powers and abilities"
            sub={[
              {id: "3.1", ttle: "Powers"},
              {id: "3.2", ttle: "Abilities"}
            ]}
          />
          <Collapse 
            id="4"
            item="Equipment"
            sub={[
              {id: "4.1", title: "Weapons"},
              {id: "4.2", title: "Other equipment"},
              {id: "4.3", title: "Vehicles"}
            ]}
          />
          <Collapse 
            id="5"
            item="Facilities"
            sub={[
              {id: "5.1", title: "Prisons"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Trivia</a></li>
          <li className="sidebar-list-item"><a href="#76">Behind the scenes</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Alexei Shostakov (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Alexei Shostakov (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Alexei Shostakov</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a0/Red_Guardian_Infobox.jpg" alt="Alexei Shostakov" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>David Harbour</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/black_widow_film">Eternals</Link> <br />
                <Link to="/mcu/thunderbolts">Thunderbolts</Link>
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

export default AlexeiShostakov;