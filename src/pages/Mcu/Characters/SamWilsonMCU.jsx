import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const SamWilsonMCU = () =>
{
  useEffect(() =>
  {
    document.title = "Sam Wilson (MCU) - Pop Culture Wiki";
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
                {id: "1.1.1", title: "Wilson Family Seafood"}
              ]},
              {id: "1.2", title: "Military career", sub2: [
                {id: "1.2.1", title: "Serving two tours"},
                {id: "1.2.2", title: "Losing Riley"}
              ]},
              {id: "1.3", title: "Meeting Captain America", sub2: [
                {id: "1.3.1", title: "Surprise running companion"},
                {id: "1.3.2", title: "Advising Steve Rogers"},
                {id: "1.3.3", title: "Helping the fugitives"},
                {id: "1.3.4", title: "Kidnapping Agent Sitwell"},
                {id: "1.3.5", title: "Encounter the Winter Soldier"},
                {id: "1.3.6", title: "Meeting Nick Fury"},
                {id: "1.3.7", title: "Battle at the Triskelion"},
                {id: "1.3.8", title: "Facing Brock Rumlow"}
              ]},
              {id: "1.4", title: "New Avengers", sub2: [
                {id: "1.4.1", title: "Search for Bucky Barnes"},
                {id: "1.4.2", title: "Avengers party"},
                {id: "1.4.3", title: "Joining the Avengers"},
                {id: "1.4.4", title: "Attack of Ultron"},
                {id: "1.4.5", title: "Duel at the Avengers compound"},
                {id: "1.4.6", title: "Search for Ant-Man"},
                {id: "1.4.7", title: "Attack in Lagos"}
              ]},
              {id: "1.5", title: "Avengers Civil War", sub2: [
                {id: "1.5.1", title: "Sokovia Accords"},
                {id: "1.5.2", title: "Peggy Carter's funeral"},
                {id: "1.5.3", title: "Finding Bucky Barnes"},
                {id: "1.5.4", title: "Held by Everett Ross"},
                {id: "1.5.5", title: "The Winter Soldier's escape"},
                {id: "1.5.6", title: "Going on the run"},
                {id: "1.5.7", title: "Building the team"},
                {id: "1.5.8", title: "Battle at Leipzig-Halle airport"},
                {id: "1.5.9", title: "Winning a losing battle"},
                {id: "1.5.10", title: "Imprisoned in the Raft"}
              ]},
              {id: "1.6", title: "On the run", sub2: [
                {id: "1.6.1", title: "Fighting the needle"},
                {id: "1.6.2", title: "Infilitrating terrorists"}
              ]},
              {id: "1.7", title: "Infinity War", sub2: [
                {id: "1.7.1", title: "Rescuing Vision"},
                {id: "1.7.2", title: "Reunited with friends"},
                {id: "1.7.3", title: "Arriving in Wakanda"},
                {id: "1.7.4", title: "Battle of Wakanda"},
                {id: "1.7.5", title: "Thanos' victory"},
                {id: "1.7.6", title: "Battle of Earth"},
                {id: "1.7.7", title: "Receiving the shield"}
              ]},
              {id: "1.8", title: "Return to the military"},
              {id: "1.9", title: "Chasing super soldiers"},
              {id: "1.10", title: "Tough decisions"},
              {id: "1.11", title: "Becoming Captain America"},
              {id: "1.12", title: "Fighting SERPENT"},
              {id: "1.13", title: "Ruination of Thaddeus Ross' legacy"},
              {id: "1.14", title: "Reassembling the Avengers"}
            ]}
          />
          <Collapse 
            id="2"
            item="Poers and abilities"
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
          <li>Sam Wilson (MCU)</li>
        </ul>
        <div>
          <h1 className="article-heading">Sam Wilson (MCU)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Sam Wilson</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/02/Sam_Wilson_Infobox.jpg" alt="Sam Wilson" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Samuel Thomas "Sam" Wilson</b> is a former United States Air Force pararescue airman who wielded an experimental military wingsuit,
            operating under the callsign Falcon. Wilson decided to leave active duty when his wingman Ronald Riley was killed in action, instead choosing
            to help other veterans suffering from post-traumatic stress disorder. At this time, Wilson met <Link to="/mcu/steve_rogers">Steve Rogers</Link>
            and was drawn to his conflict with <Link to="/mcu/hydra">Hydra</Link>, as Rogers needed help from anyone not associated with
            <Link to="/mcu/shield"> S.H.I.E.L.D.</Link> since they had been infiltrated by Hydra. Retaking his old wings, Wilson had then assisted with
            destroying all of <Link to="/mcu/alexander_pierce">Alexander Pierce</Link>'s schemes of world domination. Following their victory against
            Pierce's Hydra units, Falcon then agreed to assist Rogers in tracking down the Winter Soldier, who was in fact Rogers' close friend who had
            been brainwashed by Hydra.
          </p>
        </div>
      </main>
    </>
  )
}

export default SamWilsonMCU;