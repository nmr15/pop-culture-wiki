import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const ClintBartonMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Clint Barton (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "The son of a thief"},
                {id: "1.1.2", title: "Day out at the fair"},
                {id: "1.1.3", title: "Separated from his mother"}
              ]},
              {id: "1.2", title: "Joining S.H.I.E.L.D.", sub2: [
                {id: "1.2.1", title: "Recruited by Nick Fury"},
                {id: "1.2.2", title: "Recruiting Black Widow"},
                {id: "1.2.3", title: "New Mexico mission"},
                {id: "1.2.4", title: "Security check"}
              ]},
              {id: "1.3", title: "Chitauri invasion", sub2: [
                {id: "1.3.1", title: "Destruction of P.E.G.A.S.U.S."},
                {id: "1.3.2", title: "Controlled by Loki"},
                {id: "1.3.3", title: "Attack on the Helicarrier"},
                {id: "1.3.4", title: "Regaining control"},
                {id: "1.3.5", title: "Battle of New York"},
                {id: "1.3.6", title: "Avengers Assembled"},
                {id: "1.3.7", title: "Eyes on Everything"},
                {id: "1.3.8", title: "Last stand"},
                {id: "1.3.9", title: "Invasion aftermath"}
              ]},
              {id: "1.4", title: "War on Hydra", sub2: [
                {id: "1.4.1", title: "Fall of S.H.I.E.L.D."},
                {id: "1.4.2", title: "Battle of Sudan"},
                {id: "1.4.3", title: "Attack on the Hydra research base"},
                {id: "1.4.4", title: "Treated by Doctor Cho"},
                {id: "1.4.5", title: "The Avengers celebration"}
              ]},
              {id: "1.5", title: "Ultron Offensive", sub2: [
                {id: "1.5.1", title: "Attack on Avengers Tower"},
                {id: "1.5.2", title: "Avengers argument"},
                {id: "1.5.3", title: "Looking for Ultron"},
                {id: "1.5.4", title: "Battle at the Salvage Yard"},
                {id: "1.5.5", title: "Returning home"},
                {id: "1.5.6", title: "Place on the Avengers"},
                {id: "1.5.7", title: "Nick Fury's return"},
                {id: "1.5.8", title: "One last project"}
              ]},
              {id: "1.6", title: "Striking back", sub2: [
                {id: "1.6.1", title: "Battle of Seoul"},
                {id: "1.6.2", title: "Birth of Vision"},
                {id: "1.6.3", title: "Battle of Sokovia"},
                {id: "1.6.4", title: "Helping Wanda Maximoff"},
                {id: "1.6.5", title: "Reinforcements"},
                {id: "1.6.6", title: "Protecting the key"},
                {id: "1.6.7", title: "Rival turned savior"},
                {id: "1.6.8", title: "Retirement with family"}
              ]},
              {id: "1.7", title: "replace"},
              {id: "1.8", title: "replace"},
              {id: "1.9", title: "replace"},
              {id: "1.10", title: "replace"},
              {id: "1.11", title: "replace"},
              {id: "1.12", title: "replace"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Abilities</a></li>
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Uniforms"},
              {id: "3.2", title: "Weapons"},
              {id: "3.3", title: "Other equipment"},
              {id: "3.4", title: "Vehicles"}
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
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Clint Barton (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Clint Barton (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Clint Barton</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/5b/Hawkeye_Infobox.jpg" alt="Clint Barton" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Jeremy Renner</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/thor_film">Thor</Link> <br />
                <Link to="mcu/the_avengers_film">The Avengers</Link> <br />
                <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> <br />
                <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/black_widow_film">Black Widow</Link> (voice & photo) <br />
                <Link to="/mcu/hawkeye_series">Hawkeye</Link> (6 episodes)
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Clinton Francis "Clint" Barton</b> is an extremely skilled marksman, a former special agent of <Link>S.H.I.E.L.D.</Link> and one of the
            founding members of the <Link>Avengers</Link>. Known for his use of the <Link>bow and arrow</Link> as his primary weapon and his extremely
            keen eyesight and accuracy, which earned him the codename <b>Hawkeye</b>, Clint had become one of the best S.H.I.E.L.D. agents, responsible
            for the recruitment of <Link to="/mcu/natasha_romanoff">Black Widow</Link>, with whom he developed a strong friendship. Assigned by
            <Link to="/mcu/nick_fury"> Nick Fury</Link> into watching over the <Link>Tesseract</Link>, he was brainwashed by <Link>Loki</Link> and
            used as his pawn in his attempt to become king of Midgard. However, after the attack on the Helicarrier, Natasha freed him from Loki's mind
            control, and he joined the Avengers in the Battle of New York, helping to defeat Loki and the <Link>Chitauri</Link> army before returning
            to his work at S.H.I.E.L.D.
          </p>
        </div>
      </main>
    </>
  )
}

export default ClintBartonMCU;