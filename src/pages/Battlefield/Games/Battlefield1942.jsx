import { useEffect } from "react"
import { Link } from 'react-router-dom'
import Collapse from "../../../components/Collapse"
import Heading2 from "../../../components/Heading2"

const Battlefield1942 = () =>
{
  useEffect(() =>
  {
    document.title = "Battlefield 1942 - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Gameplay"
            sub={[
              {id: "1.1", title: "Roles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Development</a></li>
          <li className="sidebar-list-item"><a href="#3">Classes</a></li>
          <li className="sidebar-list-item"><a href="#4">Factions</a></li>
          <li className="sidebar-list-item"><a href="#5">Maps and Gamemodes</a></li>
          <li className="sidebar-list-item"><a href="#6">Weapons and Vehicles</a></li>
          <Collapse 
            id="7"
            item="Expansions"
            sub={[
              {id: "7.1", title: "The Road to Rome"},
              {id: "7.2", title: "Secret Weapons of WWII"}
            ]}
          />
          <Collapse 
            id="8"
            item="Special Editions"
            sub={[
              {id: "8.1", title: "Deluxe Edition"},
              {id: "8.2", title: "World War II Anthology"},
              {id: "8.3", title: "Complete Collection"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Soundtrack</a></li>
          <li className="sidebar-list-item"><a href="#10">Reception</a></li>
          <li className="sidebar-list-item"><a href="#11">Franchise</a></li>
          <li className="sidebar-list-item"><a href="#12">Mods</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/battlefield">Battlefield (franchise)</Link></li>
          <li>Battlefield 1942</li>
        </ul>
        <div>
          <h1 className="article-heading">Battlefield 1942</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Battlefield 1942</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/27/Battlefield_1942_Box_Art.jpg" alt="Battlefield 1942 cover art" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developer</th>
              <td className="infobox-data"><Link>DICE</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link>Electronic Arts</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next game</th>
              <td className="infobox-data"><Link to="/battlefield/battlefield_vietnam">Battlefield Vietnam</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Battlefield 1942</b> is a 2002 <Link to="first_person_shooter">first-person shooter</Link> game developed by <Link to="/dice">DICE</Link> and
            published by <Link to="/electronic_arts">Electronic Arts</Link> for Microsoft Windows and MAC OS X. It is the first installment in the
            <Link to="/battlefield"> Battlefield</Link> series. The game can be played in single-player mode against the video game AI or in multiplayer mode
            against players on the internet or in local area network. It is a popular platform for mod developers, with many released modifications that
            alter the gameplay and theme.
          </p>
          <p>
            In-game, players assume the role of one of five classes of infantry: <Link to="/battlefield/scout">Scout</Link>,
            <Link to="/battlefield/assault"> Assault</Link>, <Link to="/battlefield/anti-tank">Anti-Tank</Link>, <Link to="/battlefield/medic">Medic</Link>,
            and <Link to="/battlefield/engineer">Engineer</Link>. Players can also have the ability to fly various World War II fighter aircarft and
            bombers, navigate capital ships, submarines, and aircraft carriers, man coastal artillery defenses, drive tanks, APCs, and jeeps, and take
            control of anti-aircraft guns and mounted machine guns.
          </p>
          <p>
            Each battle takes place on one of several maps located in a variety of places and famous battlefields in all of the major theaters of World
            War II: the Pacific, European, North African, Eastern, and Italian Fronts. Combat is between the Axis powers and the Allies. The location
            determines which nation-specific armies are used (for example, on the Wake Island map, it is Japan versus the United States, while on the El
            Alamein map, it is Germany versus the United Kingdom). The maps in Battlefield 1942 are based on real battles are somewhat realistically
            portrayed.
          </p>
          <p>
            Upon release, Battlefield 1942 received generally favorable reviews, with particular praise directed toward the innovative gameplay,
            multiplayer, and World War II theme. The game went on to perform well commercially, with over 3 million copies sold by 2004. Since its
            release, the game has spawned numerous sequels and spin-offs, which ultimately turned into the Battlefield series. Battlefield 1942 is
            retrospectively considered to be one the best video games of all time.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Gameplay"} />
          <div>
            <div className="img-left img-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/00/BF1942_screencap2.jpg/250px-BF1942_screencap2.jpg" alt="Gameplay screenshot" />
              <p>Battlefield 1942 features combat both as infantry and in vehicles.</p>
            </div>
            <p>
              The gameplay of Battlefield 1942 generally has a more co-operative focus than previous games of this nature, as it is not only
              important to kill the opposition but to also hold certain "control points" around the map. Capturing control points allows the team to
              reinforce itself by enabling players and vehicles to spawn in a given area. Additionally, capturing and controlling control points also
              reduces enemy reinforcements. Battlefield 1942 was one of the first mainstream FPS games to actively encourage teamwork and coordination
              over individual "lone wolf" style gameplay.
            </p>
            <p>
              The default gameplay mode, <Link to="/battlefield/conquest">Conquest</Link>, centers on capturing "control points" which serve as
              locations for respawning, often referred to as "spawn points." Rounds have a time limit and each team stats the round with a set number
              of tickets which are consumed when members of that team respawn. If a team does not control and spawn oints, members cannot spawn unless the
              remaining living members capture one. If a team reaches zero tickets, members of that team cannot respawn for the rest of the match.
            </p>
            <p>
              A team loses tickets when its members are killed, but also at a fixed rate when the other team holds a greater number of capture points;
              the greater the disparity in held capture points, the greater the rate of ticket loss to the disadvantaged side, which encourages teams
              to focus on taking and defending control points. A match is won by killing all members of the opposing team when they either have no
              remaining tickets, or no available spawn points. Sometimes, players on a losing team may hide instead of fight when their team's tickets
              and respawn points are reduced to zero, forcing the winning team to methodically search for them in order to end the round before the
              round timer expires.
            </p>

            <h3 className="article-heading-3" id="1.1">Roles</h3>
            <p>
              The player can choose to play as wither the Allied team or the Axis team. The Allies consist of the United States, the United Kingdom,
              Canda, and the Soviet Union, while the Axis consists of Nazi Germany and Imperial Japan. Regardless of which nation is chosen by the
              player, there are five different infrantry roles the player can select from: Scout, Assault, Medic, Anti-Tank, and Engineer.
            </p>
            <p>
              Each roles has its own strength and weakness. For example, the scout role has long-range surveillance, high stopping power and the
              ability to provide spotting for artillery shelling by another player. Assault is the primary anti-infantry role, focused on directly
              engaging other players at short and medium range. The Anti-tank role specializes in attacking tanks and other vehicles, but their main
              weapon is inaccurate against moving enemy infantry. The Medic role has the ability to heal players including themselves, but their
              sub-machine gun has less stopping power than the Assault class's rifle. The Engineer has the ability to repair damanged vehicles and
              stationary weapons, and they also have the ability to deploy explosives, which are highly effective against both enemy infantry and
              vehicles, and land mines, which destroy enemy vehicles on contact.
            </p>
          </div>

          <div>
            <Heading2 id={2} title={"Development"} />
            <div>
              <p>
                In 2000, DICE acquired Refraction Games (developers of Codename Eagle) and inherited the in-development Battlefield 1942. The game was
                originally proposed by DICE as a GameCube exclusive. Though satisfied with the proposal, negotiations never made it further because
                Nintendo had no online strategy. Thegame was developed by a team of 14 people at Digital Illusions. Battlefield 1942 was built on the formula
                of the less well-known and successful Codename Eagle video game, set in an alternate history World War I. It featured single and
                multiplayer modes. The earlier Refractor 1 engine had more arcade-style physics and a less realistic focus than its successor,
                Refractor 2, which was used in Battlefield 2. A Macintosh-compatible version of Battlefield 1942 was made and reelased by Aspyr Media in
                mid-2004. An Xbox version of the game was also announced in early 2001 but was cancelled almost two years later so Electronic Arts could
                more closely work on an expansion pack for the PC.
              </p>
            </div>
          </div>

          <div>
            <Heading2 id={3} title={"Classes"} />
            <div>
              <p>
                Battlefield 1942 features a class-based system, with a total of five classes. Each class has their respective role on the battlefield.
              </p>
              <ul className="article-list">
                <li><Link to="/battlefield/scout">Scout</Link></li>
                <li><Link to="/battlefield/assault">Assault</Link></li>
                <li><Link to="/battlefield/anti-tank">Anti-Tank</Link></li>
                <li><Link to="/battlefield/medic">Medic</Link></li>
                <li><Link to="/battlefield/engineer">Engineer</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <Heading2 id={4} title={"Factions"} />
            <div>
              <p>
                Different Allies and Axis forces are always pitted against each other, with specific factions facing each other based on the location
                of the map. On <Link to="/battlefield/wake_island">Wake Island</Link>, for instance, US forces always engage with Japanese forces as it
                takes place in the Pacific Theater.
              </p>

              <ul className="article-list article-list__column">
                <li>
                  Allies
                  <ul className="article-sublist">
                    <li><Link to="/battlefield/british_army">British Army</Link></li>
                    <li><Link to="/battlefield/red_army">Red Army</Link></li>
                    <li><Link to="/battlefield/united_states_army">United States Army</Link></li>
                    <li><Link to="/battlefield/united_states_marine_corps">United States Marine Corps</Link></li>
                    <li><Link to="/battlefield/canadian_army">Canadian Army</Link></li>
                    <li><Link to="/battlefield/free_french_forces">Free French Forces</Link></li>
                    <li><Link to="/battlefield/british_commandos">British Commandos</Link></li>
                  </ul>
                </li>
                <li>
                  Axis
                  <ul className="article-sublist">
                    <li><Link to="/battlefield/german_army">German Army</Link></li>
                    <li><Link to="/battlefield/imperial_japanese_navy">Imperial Japanese Navy</Link></li>
                    <li><Link to="/battlefield/royal_italian_army">Royal Italian Army</Link></li>
                    <li><Link to="/battlefield/german_elite_forces">German Elite Forces</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <Heading2 id={5} title={"Maps and Gamemodes"} />
            <div>
              <p>
                All maps are based on the actual battles of the war. The base game originally featured a total of sixteen maps, but this was later
                expanded to twenty-one through later patches. The game features a total of five game types, all of which promote the use of teamwork
                to complete objectives.
              </p>

              <ul className="article-list">
                <li>
                  Battlefield 1942
                  <ul className="article-sublist">
                    <li>
                      Pacific:
                      <ul className="article-sublist-2">
                        <li><Link to="/battlefield/wake_island">Wake Island</Link></li>
                        <li><Link to="/battlefield/battle_of_midway">Battle of Midway</Link></li>
                        <li><Link to="/battlefield/guadalcanal">Guadalcanal</Link></li>
                        <li><Link to="/battlefield/iwo_jima">Iwo Jima</Link></li>
                        <li><Link to="/battlefield/coral_sea">Coral Sea</Link></li>
                        <li><Link to="/battlefield/invasion_of_the_philippines">Invasion of the Philippines</Link></li>
                      </ul>
                    </li>
                    <li>
                      Western Europe
                      <ul className="article-sublist-2">
                        <li><Link to="/battlefield/omaha_beach">Omaha Beach</Link></li>
                        <li><Link to="/battlefield/bocage">Bocage</Link></li>
                        <li><Link to="/battlefield/operation_market_garden">Operation Market Garden</Link></li>
                        <li><Link to="/battlefield/battle_of_the_bulge">Battle of the Bulge</Link></li>
                        <li><Link to="/battlefield/battle_of_britain">Battle of Britain</Link></li>
                        <li><Link to="/battlefield/liberation_of_coen">Liberation of Coen</Link></li>
                      </ul>
                    </li>
                    <li>
                      Eastern Europe
                      <ul className="article-sublist-2">
                        <li><Link to="/battlefield/kursk">Kursk</Link></li>
                        <li><Link to="/battlefield/stalingrad">Stalingrad</Link></li>
                        <li><Link to="/battlefield/kharkov">Kharkov</Link></li>
                        <li><Link to="/battlefield/berlin">Berlin</Link></li>
                      </ul>
                    </li>
                    <li>
                      North Africa
                      <ul className="article-sublist-2">
                        <li><Link to="/battlefield/operation_battleaxe">Operation Battleaxe</Link></li>
                        <li><Link to="/battlefield/gazala">Gazala</Link></li>
                        <li><Link to="/battlefield/tobruk">Tobruk</Link></li>
                        <li><Link to="/battlefield/el_alamein">El Alamein</Link></li>
                        <li><Link to="/battlefield/operation_aberdeen">Operation Aberdeen</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Battlefield1942;