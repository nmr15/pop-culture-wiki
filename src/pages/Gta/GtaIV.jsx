import { useEffect } from "react"
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableGta from '../../components/TableGta'

const GtaIV = () =>
{
  useEffect(() =>
  {
    document.title = 'Grand Theft Auto IV - Pop Culture Wiki';
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <Collapse 
            id="2"
            item="Synopsis"
            sub={[
              {id: "2.1", title: "Setting"},
              {id: "2.2", title: "Plot"}
            ]}
          />
          <Collapse 
            id="3"
            item="Development"
            sub={[
              {id: "3.1", title: "Research and open world design"},
              {id: "3.2", title: "Story and character development"},
              {id: "3.3", title: "Art design"},
              {id: "3.4", title: "Technical and gameplay design"},
              {id: "3.5", title: "Music production"},
            ]}
          />
          <Collapse 
            id="4"
            item="Release"
            sub={[
              {id: "4.1", title: "Promotion"}
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Critical response", sub2: [
                {id: "5.1.1", title: "Windows version"}
              ]},
              {id: "5.2", title: "Awards"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Sales</a></li>
          <Collapse 
            id="7"
            item="Controversies"
            sub={[
              {id: "7.1", title: "Pre-release"},
              {id: "7.2", title: "Post-release"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto IV</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto IV</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Grand Theft Auto IV</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Grand_Theft_Auto_IV_cover.jpg/250px-Grand_Theft_Auto_IV_cover.jpg"
                    alt="Grand Theft Auto IV boxart" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developer</th>
              <td className="infobox-data"><Link>Rockstar North</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link>Rockstar Games</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous game</th>
              <td className="infobox-data"><Link to="/gta/grand_theft_auto_vice_city_stories">Grand Theft Auto: Vice City Stories</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next game</th>
              <td className="infobox-data"><Link to="/gta/grand_theft_auto_v">Grand Theft Auto V</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Grand Theft Auto IV</b> is a 2008 action-adventure game developed by <Link>Rockstar North</Link> and published by <Link>Rockstar
            Games</Link>. It is the sixth main entry in the <Link to='/gta'>Grand Theft Auto series</Link>, following 2004's
            <Link to="/gta/grand_theft_auto_san_andreas">Grand Theft Auto: San Andreas</Link>, and the eleventh entry overall. Set in the
            fictional <Link>Liberty City</Link>, based on New York City, the single-player story follows Eastern European war veteran
            <Link>Niko Bellic</Link> and his attempts to escape his past while under pressure from high-profile criminals. The open world
            design lets players freely roam Liberty City, consisting of four boroughs across three islands, and the neighboring state of
            Alderney, which is based on New Jersey.
          </p>
          <p>
            The game is played from a third-person perspective and its world is navigated on foot and by vehicle. Throught the single-player
            mode, players control Niko Bellic. An online multiplayer modes is also invluded with the game, allowing up to 32 players to
            engage in both cooperative and competitive gameplay in a recreation of the single-player setting. Two expansion packs were
            later released for the game, <Link to="/gta/grand_theft_auto_iv_the_lost_and_damned">The Lost and Damned</Link> and
            <Link to="/gta/grand_theft_auto_iv_the_ballad_of_gay_tony"> The Ballad of Gay Tony</Link>, which both featured new plots that
            are interconnected with the main Grand Theft Auto IV storyline, and follow new protagonists.
          </p>
          <p>
            Development of Grand Theft Auto IV began soon after the release of San Andreas and was shared between many of Rockstar's stuiods
            worldwide. The game introduced a shift to a more realistic and detailed style and tone for the series. Unlike previous entries,
            Grand Theft Auto IV lacked a strong cinematic influence, as the team attempted an original approach to the story. As part of
            their research for the open world, the development team conducted extensive field research in New York, capturing over 100,000
            photographs and several hours of video. The developers considered the world to be the most important element of the game; though
            not the largest map in the series, they considered it comparable in scope due to its verticality and level of detail. The budget
            climbed to over US$100 million, making it one of the most expensive video games to develop.
          </p>
          <p>
            Grand Theft Auto IV was released for the <Link>PlayStation 3</Link> and <Link>Xbox 360</Link> consoles in April 2008, and for
            Windows in December. It received critical acclaim, with praise directed at the narrative and open-world design. Grand Theft Auto
            IV broke industry sales records and became the fastest-selling entertainment product in history at the time, earning US$310
            million in its first day and US$500 million in its first week. Considered one of the most significant titles of the <Link>seventh
            generation</Link> of video games, and by many critics as one of the greatest video games of all time, it won year-end accolades,
            including Game of the Year awards from several gaming publications. It is among the best-selling video games with over 25 million
            copies sold by 2013. The game generated controversy, with criticism directed at the game's depiction of violence and players'
            ability to drive drunk. Its successor, <Link to="/gta/grand_theft_auto_v">Grand Theft Auto V</Link>, was released in 2013.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Gameplay"} />
           <div>
            <p>
              Grand Theft Auto IV is an action-adventure game played from a third-person perspective. Players complete missions, linear
              scenarios with set objectives, to progress through the story. It is possible to have several active missions running at one time,
              as some require players to wait for further instructions or events. Outside of missions, players can freely roam the game's open
              world and complete optional side missions. Composed of the fictional city of <Link>Liberty City</Link>, the world is larger in
              area than most earlier Grand Theft Auto series entries. At the beginning of the game, players can only explore a limited area,
              Bohan, Broker, and Dukes, with all other islands unlocking as the story progresses.
            </p>
            <p>
              Players use melee attacks, firearms, and explosives to fight enemies, and may run, jump, swim or use vehicles to navigate the game's world. There is a
              first-person perspective option when using vehicles. In combat, auto-aim and a cover system can be used as assistance against enemies. Should players
              take damage, their health meter can regenerate by consuming food or drinks, using medical kits, or calling for paramedics. If players commit crimes,
              law enforcement may respond as indicated by a "<Link>wanted</Link>" meter in the heads-up display (HUD). On the meter, a count of stars indicates the
              current wanted level. Gaining more stars will cause law enforcement to incapacitate players more aggressively and extends the wanted vicinity area, and
              is capped at six stars. The player can evade police by traveling outside the wanted vicinity area, after this the wanted meter enters a cool-down mode,
              law enforcement hunt for the player, and eventually recedes when they are hidden from the officers' line of sight.
            </p>
            <div className="img-left img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/3/32/Grand_Theft_Auto_IV_gameplay.jpg" 
                alt="Grand Theft Auto IV gameplay" 
              />
              <p>Combat in Grand Theft Auto IV was reworked to include a cover system.</p>
            </div>
            <p>
              The game's cover system allows the players to move between obstacles, to fire blindly, aim freely, and target a specific enemy. Individual body parts
              can also be targeted. Melee attacks include additional moves, such as dodging, blocking, disarming an opponent and counter-attacking. <Link>Body
              armor</Link> can be used to absorb gunshots and explosive damages, but is used up in the process. When health is entirely depleted, gameplay stops,
              and players respawn at the nearest hospital.
            </p>
            <p>
              The single-player mode lets players control an Eastern European war veteran, <Link>Niko Bellic</Link>. During the story, Niko meets and befriends
              various new characters. Whhile free roaming the game world, players may engage in conext-specific activities such as bowling or darts, either alone or
              with friends. Other available activities include a vigilante mini-game, an in-game television programming. Hanging out, answering calls, or completing
              missions of friends will increase that friend's respect. If their respect is high enough, the player can unlock favors; for example, Niko's cousin
              <Link>Roman</Link> owns a taxi service, and can send one of his cabs to take Niko to any destination without a fee. Cabs are always available during
              gameplay for quick travel to destinations. Throughout the course of the game, players are also faced with morality choices, which alter the storyline
              appropriately depending on the player's choice. Niko has a cell phone for contacting friends and hanging out with them through activities. The cell
              phone is also used to access the game's online multiplayer mode, and to enter cheat codes. To access the in-game Internet, which allows Niko to send
              and receive emails and set up prospecive dates with potential girlfriends, Niko can use Internet cafes located around the city. The game also features
              a subway system, allowing players to quickly traverse through the game's world.
            </p>
            <p>
              The online multiplayer mode for Grand Theft Auto IV allows up to 32 players to freely roam across the map. Players decide which game mode they wish to
              play, including deathmatches and street races. Both cooperative and competitive game modes are available, split into ranked and unranked matches. For
              players to level up through ranks, in-game money has to be earned. The game also features a Free Mode, in which players have the entire map open to
              explore, with no end goal or mission to complete. Hosts of the game can control many variables, such as police presence, traffic, and weapons. The
              multiplayer mode was discontinued on Windows in 2020.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Synopsis"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Setting</h3>
            <p>
              Grand Theft Auto IV takes place within an alternate version of Liberty City seen in Grand Theft Auto III. The design of the city focuses on a
              recreation of four of the boroughs of New York City: <Link>Broker</Link> (based on Brooklyn), <Link>Dukes</Link> (Queens), 
              <Link> Bohan</Link> (The Bronx), and <Link>Algonquin</Link> (Manhattan). The setting also includes the neighboring state of
              <Link> Alderney</Link> (based on New Jersey). In the story, it is explained that bridges are locked down due to a terrorist threat, and police constantly
              pursue players if the bridges are crossed. These barricades are lifed as the player progresses the story, allowing them to traverse uninterrupted between
              islands.
            </p>
            <p>
              Grand Theft Auto IV is set in the fictional "<Link>HD Universe</Link>", which mirrors and parodies the real world. The previous games formed fictional
              universes of their own, which despite having many similariries with the HD Universe, are considered to be different continuities. Hence, the Liberty City
              depicted in Grand Theft Auto IV is different from its previous rendition, and the game itself serves as a reboot for the series. The new timeline
              established by Grand Theft Auto IV continues with two expansion packs, The Lost and Damned and The Ballad of Gay Tony, and a sequel, Grand Theft Auto V,
              as well as its online component, Grand Theft Auto: Online. The handheld game Grand Theft Auto: Chinatown Wars is also considered part of the HD
              Universe because it features the same map as Grand Theft Auto IV, except for Alderney.
            </p>
            <h3 className="article-heading-3" id="2.2">Plot</h3>
            <p>
              Niko Bellic, an Eastern European ex-soldier, arrives in Liberty City aboard the cargo ship <Link>Platypus</Link> to escape his criminal past, pursue the
              American Dream, and search for a man who betrayed his unit to an ambush ten years prior. Reuniting with his cousin Roman, he discovers that the stories
              of riches and success he was told of were embellished. Instead of living a life of luxury with nice cars and pretty women, Roman lives in a small, dirty
              apartment, owns an unprofitable taxi company, has gambling debts, and often disputes with loan sharks. Niko begins assisting Roman with his problems and
              makes criminal contacts in the city. He befriends <Link>Yardies</Link> second-in-command Little Jacob and is forced to work for <Link>Vlad Giebov</Link>,
              Roman's Russian loan shark. Niko eventually kills Vlad upon learning he had slept with Roman's girlfriend, <Link>Mallorie</Link>.
            </p>
            <p>
              In retaliation, Niko and Roman are kidnapped by <Link>Russian mobsters</Link> on orders of their boss <Link>Mikhail Faustin</Link> and his lieutenant,
              <Link> Dimitri Rascalov</Link>. Indifferent to Vlad's murder, Faustin releases them and employs Niko as a hitman, ordering him to kill the son of
              Russian crime lord Kenny Petrović. When Petrović threatens retaliation, Dimitri persuades Niko to assassinate Faustin and satisfy Petrović. However,
              Dimitri betrays him after the killing and brings Niko to his former employer, <Link>Ray Bulgarin</Link>, who accuses him of stealing from him during a
              failed human trafficking job years earlier. Niko denies the allegation and a firefight ensues, allowing Dimitri and Bulgarin to escape.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Development"} />
          <div>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Former_Rockstar_North_building%2C_shot_from_hill.jpg/960px-Former_Rockstar_North_building%2C_shot_from_hill.jpg" 
                alt="Rockstar North building" 
              />
              <p></p>
            </div>
            <p>
              Preliminary work on Grand Theft Auto IV began in November 2004, a month after the release of Grand Theft Auto: San Andreas. Rockstar president
              <Link> Sam Houser</Link> felt that following up San Andreas was "a nightmare". <Link>Rockstar North</Link>, the core 220-person team behind the game,
              co-lpted studios owned by parent company Rockstar Games to facilitate development between a full team of over 1,000, including 50 employees at
              Rockstar NYC, 40 at Rockstar Lincoln, 10 at Rockstar San Diego, and around 600-700 working part-time internally and externally. Some key members of
              the development team worked 12-hour days during production, often without holidays.
            </p>
            <h3 className="article-heading-3" id="3.1">Research and open world design</h3>
            <h3 className="article-heading-3" id="3.2">Story and character development</h3>
            <h3 className="article-heading-3" id="3.3">Art design</h3>
            <h3 className="article-heading-3" id="3.4">Technical and gameplay design</h3>
            <h3 className="article-heading-3" id="3.5">Music production</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Promotion</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Critical response</h3>
            <h4 className="article-heading-4" id="5.1.1">Windows version</h4>
            <h3 className="article-heading-3" id="5.2">Awards</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Sales"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Controversies"} />
          <h2 className="article-heading-2" id="7">Controversies</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Pre-release</h3>
            <h3 className="article-heading-3" id="7.2">Post-release</h3>
          </div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default GtaIV;