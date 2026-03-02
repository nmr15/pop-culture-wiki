import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableBattlefield from '../../components/TableBattlefield'

const Battlefield = () =>
{
  useEffect(() =>
  {
    document.title = "Battlefield (franchise) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <li className="sidebar-list-item"><a href="#2">Games</a></li>
          <li className="sidebar-list-item"><a href="#3">Development History</a></li>
          <li className="sidebar-list-item"><a href="#4">TV series</a></li>
        </ul>
      </aside>
      <main className="main" id="to">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Battlefield (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Battlefield (franchise)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Battlefield</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BattlefieldLogo.svg/500px-BattlefieldLogo.svg.png" alt="Battlefield logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developers</th>
              <td className="infobox-data">
                Battlefield Studios: <br />
                <Link>DICE</Link> <br />
                <Link>Criterion Games</Link> (2025-) <br />
                Ripple Effect Studios (2025-) <br />
                Motive Studio (2025-)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link>Electronic Arts</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Games</th>
              <td className="infobox-data"><Link>List of Battlefield games</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Battlefield</b> is a military first-person shooter video game franchise developed by Battlefield Studios, primarily led by Swedish company
            <Link> DICE</Link>, and published by American company <Link>Electronic Arts</Link>. The series mainly focuses on online multiplayer, with
            gameplay taking place across large maps, and emphasizes teamwork and combined arms warfare.
          </p>
          <p>
            The first installment of the franchise, <Link to="/battlefield/battlefield_1942">Battlefield 1942</Link>, was released for Microsoft Windows
            and OS X computers in 2002. Since then, the series' installments have sold 88.7 million copies worldwide as of November 2022.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Gameplay"} />
          <div>
            <p>
              The Battlefield games usually focus on large-sale, online multiplayer battles between two conflicting military forces; in Battlefield
              Hardline, the military setting is replaced with a "war on crime" between the police Special Response Units and the criminals. Playing in
              squads has become a major element of games in the series. Apart from infantry, tanks, airplanes, and other vehicles may participate in
              these battles. Since <Link to="/battlefield/battlefield_2">Battlefield 2</Link>, the series centrally recorded online stats for each player,
              allowing users to receive rank promotions and weapon unlocks based on their performance as well as awards such as medals, ribbons, and pins.
              While continuing to focus on large, online multiplayer battles, 2006's <Link to="/battlefield/bad_company">Battlefield: Bad
              Company</Link> intoduced full single-player campaigns with more fleshed-out storylines. It was also the first game to use th
              studio-developed game engine, <Link>Frostbite</Link>, which introduced almost fully destructible environments; a feature that has since
              become one of the most well-known staples of the series.
            </p>
            <p>
              The series' flagship game mode is "Conquest", where two teams of players attempt to gain control of the most control points until the
              other team's tickets (respawns) run out. To capture a control point, players must stand within the capture area until their team captures
              it. Should a control point be captured already by the enemy team, or should any enemy players contest it, players must eliminate all
              enemy players and/or neutralize the control point first by standing within the capture area. Captured control points may act as respawn
              points for players, though they can also respawn on a squad member who are not in combat and specialized equipment carried by certain
              classes. Vehicles cannot spawn at a command post and must be obtained from the team's "headquarters", which act as the team's main spawn
              point. <Link to="/battlefield/battlefield_v">Battlefield V</Link> introduced the battle royale game mode to the Battlefield series, which
              marges the francise's "core pillars of destruction, team play, and vehicles" with common elements seen in traditional battle royales, and
              <Link to="/battlefield/battlefield_6"> Battlefield 6</Link> introduces a knockout elimination mode titled "Gauntlet" where eight squads of
              four players seek to complete four sets of objectives while trying not to fall into the bottom two teams.
            </p>
            <p>
              Outside of early version of <Link to="/battlefield/battlefield_2042">Battlefield 2042</Link>, the Battlefield series features a class
              system. Different classes are suited to different roles in combat. Historically, the series featured the Anti-tank, Demolition, Medic,
              Specialist, and Special Forces classes, before these were merged into other classes in later games. The classes as seen in modern titles
              was first introduced in <Link to="/battlefield/bad_company_2">Battlefield: Bad Company 2</Link>: the Assault, who specializes in all-round
              combat, Engineer, who carries out in-field repairs to vehicles while being equipped with anti-vehicular weapons, Medic (later Support), who
              resupplies and revives fallen allies, and Recon, who specializes in spotting enemies using a sniper rifle to engage in long-distance combat.
              The ability to engage other players in melee combat with a knife has been present in Battlefield games, but since Battlefield 2142, the
              series has included an award of dog tags for each player killed using a knife.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Games"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Development History"} />
          <div>
            <p>
              Battlefield 1942 was released on September 10, 2002, using the Refracture game engine, and set in World War II. It introduced the "Conquest"
              gameplay mode, in which players fought for "control points" throughout the map. Two expansion packs were released.
            </p>
            <p>
              <Link to="/battlefield/battlefield_vietnam"> Battlefield Vietnam</Link>, released in 2004, moved the setting to the Vietnam War, and was
              built on an updated Refractor engine with various gameplay improvements, such as the ability to fire personal weapons while seated in
              vehicles, and visualizing dense foliage.
            </p>
            <p>
              The 2005 release <Link to="/battlefield/battlefield_2">Battlefield 2</Link> takes place in the modern day, depicting a war between the
              United States and China and the fictional Middle Eastern Coalition (MEC). Despite requiring numerous patches due to a large number of bugs
              and glitches in the game upon its release, it was a large commercial success, selling more than 2,250,000 copies worldwide, by July 2006.
              One expansion pack, Special Forces, which added Russia, exclusive missions, and new weapons and gadgets, and two booster packs, Armored
              Fury (adding three new battles in the USA) and Euro Force (adding the European Union), were also released. A similar game called Battlefield
              2: Modern Combat was released for consoles, with a larger single player mode but limited online play.
            </p>
            <p>
              <Link to="/battlefield/battlefield_2142">Battlefield 2142</Link> was released in 2006, taking place during a global ice age in the 22nd
              century. While most of it is graphically similar to Battlefield 2, it introduces a variety of equipment to unlock and battles between two
              giant "Titan" airships. The Northern Strike expansion pack was later releeased, adding new maps, vehicles, and a new game mode. Its use
              of in-game advertising was controversial among players and not well received.
            </p>
            <p>
              <Link to="/battlefield/bad_company">Battlefield: Bad Company</Link>, released in 2008, is set in a near-future war between the United
              States and Russia, and follows a US Army company's escapades and their search for hidden gold. This new Battlefield game had a variety of
              vehicles for land, air, and sea. It had a new destruction system that allowed the player to break and destroy environments, based on a new
              game engine named <Link>Frostbite</Link>, which replaced the Regractor engine used in earlier releases (with the exception of Battleifeld
              2: Modern Combat, which used RenderWare).
            </p>
            <p>
              In 2009, EA released two download-only games, Battlefield Heroes, a free-to-play Refractor 2 engine game, supported by advertising and
              microtransactions and Battlefield 1943, a Frostbite engine game, released in July 2009, for the <Link>Xbox 360</Link> and
              <Link> PlayStation 3</Link>, and was scheduled for release in Q1 2010, for PCs, but was cancelled.
            </p>
            <p>
              In 2010, a sequel to Battlefield: Bad Company, <Link to="/battlefield/bad_company_2">Battlefield: Bad Company 2</Link>, was released,
              involving "B" Company's search for an electromagnetic pulse weapon. It features a larger multiplayer than its predecessor Bad Company, with
              updated graphics and realistic effects (e.g. bullet-drop). The game introduced the rush game mode and brought in weapons. It features a
              "VIP" system of content distribution where players with VIP codes gain early access to new maps. DICE also released an expansion for Bad
              Company 2, Battlefield: Bad Company 2: Vietnam, setting the game in the Vietnam War.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"TV series"} />
          <div>
            
          </div>
        </div>
        <div>
          <TableBattlefield />
        </div>
      </main>
    </>
  )
}

export default Battlefield;