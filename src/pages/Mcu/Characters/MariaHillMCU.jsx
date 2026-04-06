import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const MariaHillMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Maria Hill (MCU) - Pop Culture Wiki";
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
              {id: "1.1", title: "S.H.I.E.L.D. Agent", sub2: [
                {id: "1.1.1", title: "Recruited by Director Fury"}
              ]},
              {id: "1.2", title: "Chitauri invasion", sub2: [
                {id: "1.2.1", title: "Destruction of P.E.G.A.S.U.S."},
                {id: "1.2.2", title: "Assembling the Avengers"},
                {id: "1.2.3", title: "Attack on the Helicarrier"},
                {id: "1.2.4", title: "Losing Phil Coulson"},
                {id: "1.2.5", title: "Battle of New York"},
                {id: "1.2.6", title: "Invasion aftermath"},
                {id: "1.2.7", title: "Resurrection of Phil Coulson"}
              ]},
              {id: "1.3", title: "Fall of S.H.I.E.L.D.", sub2: [
                {id: "1.3.1", title: "Attack on Nick Fury"},
                {id: "1.3.2", title: "Saving Captain America"},
                {id: "1.3.3", title: "Battle at the Triskelion"},
                {id: "1.3.4", title: "Stark Industries"},
              ]},
              {id: "1.4", title: "Assisting Phil Coulson", sub2: [
                {id: "1.4.1", title: "Confronted by Melinda May"},
                {id: "1.4.2", title: "Attack on Providence"},
                {id: "1.4.3", title: "Confronting Grant Ward"}
              ]},
              {id: "1.5", title: "Working with the Avengers", sub2: [
                {id: "1.5.1", title: "Avengers Reassembled"},
                {id: "1.5.2", title: "Finding the Scepter"},
                {id: "1.5.3", title: "Debriefing Captain America"},
                {id: "1.5.4", title: "Avengers' celebration"},
                {id: "1.5.5", title: "Attack on Avengers Tower"},
                {id: "1.5.6", title: "Avengers over Ultron"},
                {id: "1.5.7", title: "Hiding the Avengers"},
                {id: "1.5.8", title: "Battle of Sokovia"}
              ]},
              {id: "1.6", title: "Nick Fury's crew", sub: [
                {id: "1.6.1", title: "Avengers Compound"},
                {id: "1.6.2", title: "Thanos victory"},
                {id: "1.6.3", title: "The Blip"}
              ]},
              {id: "1.7", title: "Secret Invasion", sub2: [
                {id: "1.7.1", title: "Fighting back"},
                {id: "1.7.2", title: "Nick Fury's return"},
                {id: "1.7.3", title: "Pursuing G'iah"},
                {id: "1.7.4", title: "Chat with Nick Fury"},
                {id: "1.7.5", title: "Unity Day bombing"}
              ]},
              {id: "1.8", title: "Legacy", sub2: [
                {id: "1.8.1", title: "Mother's grief"},
                {id: "1.8.2", title: "Death footage leaked"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Abilities</a></li>
          <Collapse 
            id="3"
            item="Equipment"
            sub={[
              {id: "3.1", title: "Weapons"},
              {id: "3.2", title: "Other equipment"},
              {id: "3.3", title: "Vehicles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Facilities</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Maria Hill (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Maria Hill (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Maria Hill</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/f/f4/Maria_Hill_Infobox.jpg" alt="Maria Hill" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data"><Link>Cobie Smulders</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="mcu/the_avengers_film">The Avengers</Link> <br />
                <Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link> <br />
                <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> (post-credits scene) <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/spiderman_far_from_home">Spider-Man: Far From Home</Link> <br />
                <Link to="/mcu/secret_invasion">Secret Invasion</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Maria Hill</b> was a former Commander and Deputy Director of <Link>S.H.I.E.L.D.</Link> who was appointed by <Link to="/mcu/nick_fury">Nick Fury</Link>
            as his right-hand. In 2012, she oversaw the Avengers Initirative and the resurrection of <Link to="/mcu/phil_coulson">Phil Coulson</Link>. Two years
            later, Hill helped fake Fury's death when he was attacked by <Link>Hydra</Link>, and worked alongside <Link to="/mcu/steve_rogers">Captain America</Link>,
            <Link to="/mcu/natasha_romanoff"> Black Widow</Link>, and <Link to="/mcu/sam_wilson">Falcon</Link> to expose Hydra's existence and terminate Project
            Insight.
          </p>
          <p>
            In the immediate aftermath of the fall of S.H.I.E.L.D., Hill joined Stark Industries to protect hersel from legal prosecution. However, she stayed in
            touch with Phil Coulson and aided him in his mission to hunt <Link>Grant Ward</Link> and <Link>John Garrett</Link>. The following year, she was informed
            by Coulson that <Link>Loki</Link>'s Scepter was taken by List to Sokovia, and passed the information on to the <Link>Avengers</Link>. Following an attack
            by <Link>Ultron</Link>, Hill rejoined Fury as his second-in-command and assisted during the Battle of Sokovia to thwart Ultron's plan to destroy humanity.
          </p>
          <p>
            Following the Avengers civil war, Hill left Stark Industries and joined Fury's new crew. In 2018, Hill and Fury were among those killed during Thanos'
            snap. Five years later, Hill was resurrected by <Link to="/mcu/bruce_banner">Bruce Banner</Link> and attended <Link to="/mcu/tony_stark">Tony
            Stark</Link>'s funeral. While Fury relocated to space, Hill chose to resume her spy career on Earth and became acquainted with Fury's <Link>Skrull</Link>
            friend <Link>Talos</Link>, who informed her of the secret invasion of humanity by the Skrull Resistance, led by <Link>Gravik</Link>, shich caused her to
            summon Fury to Eath. Hill worked Fury and Talos to prevent the Unity Day bombing in Moscow intended by Gravik to spark World War III, although they failed.
            In the midst of the bombings, Hill was killed by Gravik, who shot her while having shapeshifted as Fury.
          </p>
        </div>
      </main>
    </>
  )
}

export default MariaHillMCU;