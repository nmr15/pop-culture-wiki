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
              {id: "1.8", title: "Return to the military", sub2: [
                {id: "1.8.1", title: "Rescue of Captain Vassant"},
                {id: "1.8.2", title: "Learning of the Flag Smashers"},
                {id: "1.8.3", title: "Donating the shield"},
                {id: "1.8.4", title: "Returning home"}
              ]},
              {id: "1.9", title: "Chasing super soldiers", sub2: [
                {id: "1.9.1", title: "Reunion with Bucky Barnes"},
                {id: "1.9.2", title: "Chase of the Flag Smashers"},
                {id: "1.9.3", title: "Introduced to John Walker"},
                {id: "1.9.4", title: "Meeting Isaiah Bradley"},
                {id: "1.9.5", title: "Session with Bucky Barnes"},
                {id: "1.9.6", title: "Freeing Helmut Zemo"},
                {id: "1.9.7", title: "Undercover in Madripoor"},
                {id: "1.9.8", title: "Deal with Sharon Carter"},
                {id: "1.9.9", title: "Ambush at Buccaneer Bay"},
                {id: "1.9.10", title: "Jorney to Latvia"},
                {id: "1.9.11", title: "Search for Donya Madani"},
                {id: "1.9.12", title: "Talks of peace"},
                {id: "1.9.13", title: "Skirmish with the Dora Milaje"},
                {id: "1.9.14", title: "Flag Smashers ambush"},
                {id: "1.9.15", title: "Battle for the shield"},
                {id: "1.9.16", title: "Passing the mantle"},
              ]},
              {id: "1.10", title: "Tough decisions", sub2: [
                {id: "1.10.1", title: "Reunion with Isaiah Bradley"},
                {id: "1.10.2", title: "Time with family"},
                {id: "1.10.3", title: "Training with Bucky Barnes"},
                {id: "1.10.4", title: "Accepting the mantle"}
              ]},
              {id: "1.11", title: "Becoming Captain America", sub2: [
                {id: "1.11.1", title: "Serving the GRC members"},
                {id: "1.11.2", title: "Final fight with the Flag Smashers"},
                {id: "1.11.3", title: "Public message"},
                {id: "1.11.4", title: "Isaiah Bradley's legacy"},
                {id: "1.11.5", title: "Louisiana cookout"},
                {id: "1.11.6", title: "Reviewing Scott Lang's book"}
              ]},
              {id: "1.12", title: "Fighting SERPENT", sub2: [
                {id: "1.12.1", title: "Theft of the solar-battery drones"},
                {id: "1.12.2", title: "Skirmish at Catedral de Santo Ramos"},
                {id: "1.12.3", title: "Training with Isaiah Bradley"}
              ]},
              {id: "1.13", title: "Ruination of Thaddeus Ross' legacy", sub2: [
                {id: "1.13.1", title: "President Ross' proposal"},
                {id: "1.13.2", title: "Celestial Island world summit"},
                {id: "1.13.3", title: "Questioning Isaiah Bradley"},
                {id: "1.13.4", title: "Attacked by Sidewinder"},
                {id: "1.13.5", title: "Going rogue"},
                {id: "1.13.6", title: "Infilitration into Camp Echo One"},
                {id: "1.13.7", title: "Interrogating Sidewinder"},
                {id: "1.13.8", title: "Confronting President Ross"},
                {id: "1.13.9", title: "Battle of Celestial Island"},
                {id: "1.13.10", title: "Doubting himself"},
                {id: "1.13.11", title: "Duel of Washington, D.C."},
                {id: "1.13.12", title: "Isaiah Brdley's release"},
                {id: "1.13.13", title: "Visiting Thaddeus Ross"}
              ]},
              {id: "1.14", title: "Reassembling the Avengers", sub2: [
                {id: "1.14.1", title: "Checking on Joaquin Torres"},
                {id: "1.14.2", title: "Leader's warning"},
                {id: "1.14.3", title: "Trademark dispute"}
              ]}
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
              <th className="infobox-data">Portrayed by</th>
              <td className="infobox-data">Anthony Mackie</td>
            </tr>
            <tr>
              <th className="infobox-data">Appearances</th>
              <td className="infobox-data">
                <Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link> <br />
                <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> <br />
                <Link to="/mcu/antman_film">Ant-Man</Link> <br />
                <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> <br />
                <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> <br />
                <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link> <br />
                <Link to="/mcu/the_falcon_and_the_winter_soldier">The Falcon and the Winter Soldier</Link> <br />
                <Link to="/mcu/captain_america_brave_new_world">Captain America: Brave New World</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Samuel Thomas "Sam" Wilson</b> is a fictional character portrayed by <Link to="/people/anthony_mackie">Anthony Mackie</Link> in the
            
          </p>


          <p>
            <b>Samuel Thomas "Sam" Wilson</b> is a former United States Air Force pararescue airman who wielded an experimental military wingsuit,
            operating under the callsign Falcon. Wilson decided to leave active duty when his wingman Ronald Riley was killed in action, instead choosing
            to help other veterans suffering from post-traumatic stress disorder. At this time, Wilson met <Link to="/mcu/steve_rogers">Steve Rogers</Link>
            and was drawn to his conflict with <Link to="/mcu/hydra">Hydra</Link>, as Steve needed help from anyone not associated with
            <Link to="/mcu/shield"> S.H.I.E.L.D.</Link> since they had been infiltrated by Hydra. Retaking his old wings, Wilson had then assisted with
            destroying all of <Link to="/mcu/alexander_pierce">Alexander Pierce</Link>'s schemes of world domination. Following their victory against
            Pierce's Hydra units, Falcon then agreed to assist Steve in tracking down the Winter Soldier, who was in fact Steve's close friend who had
            been brainwashed by Hydra.
          </p>
          <p>
            As Sam continued searching for the Winter Soldier, he was recruited into the <Link to="/mcu/avengers">Avengerse</Link>. During his time with
            them, Sam briefly encountered <Link to="/mcu/scott_lang">Ant-Man</Link> before assisting in defeating
            <Link to="/mcu/brock_rumlow">Crossbones</Link>. In the aftermath of several incidents that caused civilian casualties, the Avengers were then
            forced into following the <Link to="/mcu/sokovia_accords">Sokovia Accords</Link>, putting them all under the government's full control.
            However, as the Winter Soldier was blamed for terrorist attacks by <Link to="/mcu/baron_zemo">Helmut Zemo</Link>, Sam stood by Steve with
            protecting the Winter Soldier, which had then caused the Avengers civil war. In the wake of this clash, Sam, and several other Avengers who
            were loyal to Steve, were defeated by <Link to="/mcu/tony_stark">Iron Man</Link>, and locked into the Raft, until Steve freed them as they
            became fugitives.
          </p>
          <p>
            While the Avengers were still disbanded, Earth had come under attack by <Link to="/mcu/thanos">Thanos</Link> and his Black Order, bringing
            Sam and his allies out of hiding. Learning that Thanos intended to steal the <Link to="/mcu/mind_stone">Mind Stone</Link> from
            <Link to="/mcu/vision"> Vision</Link>, Sam joined the Avengers in taking Vision to <Link to="/mcu/wakanda">Wakanda</Link> for his
            protection. However, they were eventually defeated as Thanos claimed the Infinity Stones and used them to cause the Snap, killing
            trillions including Sam. Five years later, the victims of the Snap were resurrected by the surviving Avengers, and Sam rejoined the
            battle against Thanos. In the aftermath of the battle, Sam learned that Steve returned to the past and had lived a full life with 
            <Link to="/mcu/peggy_carter"> Peggy Carter</Link>, and seeing him return as an old man, was given the shield by Steve.
          </p>
          <p>
            Initially declining the shield and giving it up to the Smithsonian Institution under the impression that it would remain a display piece,
            Sam was disgusted when the government had then appointed <Link to="/mcu/john_walker">John Walker</Link> as their next Captain America.
            Sam instead refocused on fighting the <Link to="/mcu/flag_smashers">Flag Smashers</Link>, forming an unlikely alliance with Bucky and
            Zemo to track them down. However, as Walker began to lose control, due to taking the
            <Link to="/mcu/super_soldier_serum"> super soldier serum</Link>, and brutally murdered one of the Flag Smashers in public, Sam retook
            the shield. Following some soul searching and a discussion with Isaiah Bradley, Sam had finally taken up the mantle of Captain America
            in time to intervene with the Flag Smashers' attack on the GRC, stopping Karli Morgenthau, as he convinced the GRC to treat refugee
            communities created by the Blip fairly, inspiring a new generation of heroes.
          </p>
          <p>
            Three years later, Sam, now working with the government, was invited to the Celestial Island World Summit at the White House by
            newly elected U.S. President <Link to="/mcu/thaddeus_ross">Thaddeus Ross</Link>. Sam was wrapped up in a nefarious plot when Isaiah
            was mind-controlled to attack Ross and tensions continued to rise as an arms race between Japan and the United States began over the
            use of <Link to="/mcu/adamantium">adamantium</Link>. Sam, along with his partner
            <Link to="/mcu/joaquin_torres"> Joaquin Torres</Link>, who was the new Falcon, discovered the conspiracy was set in place by
            <Link to="/mcu/samuel_sterns"> Samuel Sterns</Link> as a way to destroy Ross' legacy, and were unable to stop his plans from
            coming to fruition when Ross turned into the Red Hulk at a press conference and had gone on a rampage. Sam battled against Ross and
            got him to calm down, after which, Ross chose to turn himself in. Motivated by Ross' idea to restart the Avengers, Sam began by
            recruiting Torres.
          </p>
        </div>
      </main>
    </>
  )
}

export default SamWilsonMCU;