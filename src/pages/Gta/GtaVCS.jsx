import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableGta from '../../components/TableGta'

const GtaVCS = () =>
{
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
              {id: "3.1", title: "PlayStation 2 port"}
            ]}
          />
          <Collapse 
            id="4"
            item="Reception"
            sub={[
              {id: "4.1", title: "Accolades"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto: Vice City Stories</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: Vice City Stories</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Grand Theft Auto: Vice City Stories</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/GTA_Vice_City_Stories_PSP_boxart.jpg/250px-GTA_Vice_City_Stories_PSP_boxart.jpg"
                    alt="Grand Theft Auto: Vice City Stories boxart" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developers</th>
              <td className="infobox-data">
                <Link>Rockstar Leeds</Link> <br />
                <Link>Rockstar North</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link>Rockstar Games</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous game</th>
              <td className="infobox-data"><Link to="/gta/grand_theft_auto_liberty_city_stories">Grand Theft Auto: Liberty City Stories</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next game</th>
              <td className="infobox-data"><Link to="/gta/grand_theft_auto_iv">Grand Theft Auto IV</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            Grand Theft Auto: Vice City Stories is a 2006 action-adventure game developed by <Link>Rockstar Leeds</Link> and <Link>Rockstar
            North</Link>, and published by <Link>Rockstar Games</Link>. The tenth entry in the <Link to="/gta">Grand Theft Auto series</Link>,
            the game was initially released as a <Link>PlayStation Portable</Link> exclusive in October 2006. A <Link>PlayStation 2</Link> port
            was released in March 2007. Set within the fictional <Link>Vice City</Link> (based on Miami) in 1984, the game is a prequel to 2002's
            <Link to="/gta/grand_theft_auto_vice_city"> Grand Theft Auto: Vice City</Link> (set in 1986) and follows the exploits of ex-soldier
            <Link> Victor "Vic" Vance</Link>, a minor character originally featured in said game. The story centers around Vic's attempts to build
            up a criminal empire alongside his brother <Link>Lance</Link>. With the initial intention of raising money for his sick brother Pete's
            medication, Vic comes into conflict with rival gangs, drug lords, and other enemies.
          </p>
          <p>
            In addition to the traditional gameplay elements and side missions of the series, the game features a unique empire building system, in
            which players must expand their criminal syndicate from the ground-up by taking over businesses from rival organizations, and completing
            missions specific for each of them to increase their income and unlock additional rewards. Like its predecessor,
            <Link to="/gta/grand_theft_auto_liberty_city_stories"> Grand Theft Auto: Liberty City Stories</Link>, the PSP version of the game
            included a multiplayer mode through a wireless ad hoc network, which allowed up to six players to engage in several different game
            modes.
          </p>
          <p>
            Vice City Stories received generally positive reviews from critics, and has sold over 4.5 million copies as of March 2008, making it
            the fourth best-selling PSP game of all time. The next game in the series was <Link to="/gta/grand_theft_auto_iv">Grand Theft
            Auto IV</Link>, which was released in April 2008.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Gameplay"} />
          <div>
            <p>
              Grand Theft Auto: Vice City Stories is an action-adventure game set in an open world environment and played from a
              third-person perspective, structured similarly to other releases from the Grand Theft Auto series. The core gameplay consists of
              elements of a third-person shooter and a driving game, affording the player a large environment in which to move around. On foot,
              the player's character is capable of walking, running, swimming, jumping, as well as using weapons and basic hand-to-hand combat.
              The player can drive a variety of vehicles, including automobiles, boats, planes, helicopters, jet-skis and motorcycles.
            </p>
            <p>
              The open, non-linear environment allows the player to explore and choose how they wish to play the game. Although storyline
              missions are necessary to progress through the game and unlock certain areas and content, they are not required, as the player
              can complete them at their own leisure. When not taking on a storyline mission, the player can freely roam the game's world. The
              player can partake in a variety of optional side missions. The traditional side missions of the past games are included, but have
              been moderately upgraded and enhanced compared to previous titles. An addition to the game is "Beach Patrol", in which the player's
              character Victor must deal with bikers on the beach by beach buggy (by ramming or shooting to knock them off their bikes) or
              throwing life preservers to drowning swimmers by boat or by taking a paramedic around to injured people on the beach.
            </p>
            <p>
              The combat system was overhauled in Vice City Stories. The targeting mechanism has been tweaked to "intelligently target";
              enemies posing a threat or attacking the player will be targeted over pedestrians. The biggest changes concern the hand-to-
              hand combat system, as the player can perform grappling moves and throws, and stand on top of enemies lying on the ground.
              The player is able to bribe policement or hospital staff when "Wasted" (killed) or "Busted" (arrested) to lower their wanted
              level, and keep weapons that ordinarily would have been lost.
            </p>
            <p>
              One of the key gameplay elements in Vice City Stories is "empire building". New to the Grand Theft Auto series, it borrows a
              few ideas from Vice City's "properties" and San Andreas' "gang wars" systems. To make money, the player must open and operate
              various businesses on property taken over from enemy gangs, these can range from protection rackets to brothels or smuggling
              compounds. Once a player removes a gang from a specific business, it becomes available for purchase. There are several
              different types of business, and each comes in different sizes, which can later be changed to adapt to the player's needs.
              Each business comes with unique missions which, upon completion, reward the player with various bonuses, as well as an
              increased income for said business. The player will occasionally have to defend their owned businesses from attacks by gangs
              looking to take them back, until all businesses in the city have been acquired, at which point the attacks will cease.
            </p>
            <p>
              The hidden package system from previous Grand Theft Auto games returns in the form of 99 red balloons scattered around the city.
              This is a reference to Nana's 1984 hit "99 Luftballoons", which was featured in Grand Theft Auto: Vice City. Improvements to the
              graphics since the release of Grand Theft Auto: Liberty City Stories include new animations, faster load times, a longer draw
              distance, reduction in clumping of pedestrians and vehicles, more complex explosions, and increases in the density of objects,
              vehicles, and non-playable characters.
            </p>
            <p>
              Like its predecessor, the PSP version of Vice City Stories features a multiplayer mode, for up to 6 players through WiFi ad-hoc
              mode (local area). The game features 10 different modes of wireless multiplayer gaming, which incorporate the use of automobiles,
              aircraft, and water-based vehicles. Various pedestrian and character models from the single-player mode are available as playable
              characters. These multiplayer modes are not included in the PS2 version.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Synopsis"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Setting</h3>
            <p>
              Vice City Stories takes place in 1984 within Vice City, and forms part of the "3D Universe" canon of the Grand Theft Auto series.
              Set two years before the events of Grand Theft Auto: Vice City, the game's setting features several areas that are different from
              the 1986 version of Vice City, including locations being constructed or whose plot used to house something different. An example of
              this is the site of a car showroom completed in 1986 still being under construction in 1984, while the business is located in a
              smaller building down the road.
            </p>
            <h3 className="article-heading-3" id="2.2">Plot</h3>
            <p>
              In 1984, Corporal Victor "Vic" Vance (Dorian Missick) is stationed in Vice City's army base, Fort Baxter. To raise money for his
              sick asthmatic brother Pete's medication, Vic agrees to help his corrupt supervisor, Sergeant Jerry Martinez (Felix Solis),
              finding himself involved in the city's drug trade. After a deal goes awry, Martinez frames Vic for hiding drugs under his bed and
              bringing a prostitute to the base, resulting in Vic being charged with high treason and dishonorably discharged from the army.
            </p>
            <p>
              Forced onto the streets, Vic assists eccentric gunrunner and self-proclaimed Vietnam War veteran <Link>Phil Cassidy</Link>
              (Gary Busey), whom he met during his work for Martinez, in exchange for a place to stay to rebuild his life. Martinez hires Vic
              and Phil to do more jobs for him, only to betray and try to have them killed, leading to the pair cutting ties with him after
              escaping the trap. Meanwhile, Vic works for Phil's brother-in-law <Link>Marty Jay Williams</Link> (Jim Burke), leader of a street
              gang called the Trailer Park Mafia, who frequently abuses his wife Louise Cassidy-Williams (Chelsey Rives). Angered over Vic's
              growing relationship with his wife, Marty eventually attempts to kidnap her, forcing Vic to kill him and save Louise.
            </p>
            <p>
              With Marty dead, Vic takes over his gang and renames it the Vance Crime Family. Aided by his recently arrived brother
              <Link> Lance</Link> (Philip Michael Thomas), he slowly begins to take over rackets from rival gangs to increase his power and
              convert them into his business assets. In the process, he earns the respect of Los Cabrones, a Cuban street gang led by
              <Link> Umberto Robina</Link> (Danny Trejo), for taking out their rivals, and deals with a corrupt DEA agent <Link>Bryan
              Forbes</Link> (Daniel Oreskes) who was posing as a drug dealer to steal the Vance brothers' money.
            </p>
            <p>
              Upon stealing a major drug shipment, Vic and Lance find themselves kidnapped by the Mendez brothers, <Link>Armando</Link>
              (Yul Vasquez) and <Link>Diego</Link> (Riben Trujillo), Vice City's biggest drug lords and the shipment's owners. Lance lies to
              them that Martinez, who regularly deals with the Mendezes, is an undercover DEA agent and stole the drugs as evidence. After
              being released, Vic and Lance begin working with the Mendez brothers, who intoduces the former to transexual film director
              <Link> Reni Wassulmaier</Link> (Barbara Rosenblat). While assisting Reni and their friend <Link>Barry Mickelthwalte</Link>
              (<Link>Timothy Spall</Link>), the talent manager of <Link>Phil Collins</Link> (himself), Vic finds himself tasked with
              protecting Phil from Mafia hitmen, to whom Barry is indebted, before and during his concert in Vice City.
            </p>
            <p>
              Reni introduces Vic to <Link>Ricardo Diaz</Link> (<Link>Luis Guzman</Link>), a drug baron who seeks to take over the
              Mendez brothers' operations and employs Vic and Lance for several jobs. However, Armando and Diego grow distrustful of them,
              and eventually make an attempt on their lives after Martinez exposes their lie. After escaping the Mendezes' trap, Vic works
              with Diaz to bankrupt them as revenge. The Mendez brothers retaliate by kidnapping Louise and Lance, leading to Vic
              assaulting their mansion and killing Armando, though he fails to rescue Louise, who dies from injuries she received while
              in captivity.
            </p>
            <p>
              Swearing revenge against both Diego and Martinez, Vic works alongside Diaz and Phil one final time to track them down
              and steal an army chopper from Fort Baxter. Using the chopper, Vic assaults Martinez and Diego's hideout, taking down their
              henchmen and killing both men on the rooftop. After Lance arrives too late to assist, he tries to persuade Vic into taking
              part in another drug deal that he plans to set up. Vic firmly stands his ground and states that he has no interest in drugs
              anymore. Lance accepts Vic's choice and the two brothers leave Vice City to give Pete money for his medication.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Development"} />
          <div>
            <p>
              Take-Two Interactive originally announced the title was to be released in North America on October 17, 2006 and in
              Europe on October 20, 2006, but an announcement in early September stated that the game's North American release had
              been delayed until October 31. It was announced that the game would be released on November 10, 2006 in Australia.
              Moreover, in Europe (excluding the United Kingdom and Republic of Ireland) the game suffered another delay, from
              November 3, 2006, to November 10, 2006, the same as Australia.
            </p>
            <h3 className="article-heading-3" id="3.1">PlayStation 2 port</h3>
            <p>
              On February 7, 2007, Rockstar Games announced plans for a PlayStation 2 port, released on March 6. It was
              confirmed by Rockstar Games that the PlayStation 2 version of the game would be an almost straight port.
              The port had improvements such as enhanced graphics (including the addition of bloom effects, enabled via
              a "trails" option), draw distance, and performance as expected, and includes a few new side activities that were
              not in the PSP release, such as five new odd jobs, six additional unique jumps, five more rampages, and a new
              Easter egg.
            </p>
            <p>
              While other Grand Theft Auto ports have had extra features added (such as replays or custom soundtracks), this
              is the first port of any Grand Theft Auto game to include extra in-game content.
            </p>
            <p>
              The PS2 version of Vice City Stories was announced as a digital release for the <Link>PlayStation 3</Link> in
              2012, as a PlayStation 2 Classics title, and was released in April 2013 via the PlayStation Network. It would
              later be removed on July 24, 2017.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Reception"} />
          <div>
            <p>
              Grand Theft Auto: Vice City Stories has received "generally favorable" reviews from critics, according to
              review aggregator website Metacritic.
            </p>
            <p>
              The PlayStation 2 port of the game was criticized for having the same coding as the PSP version and for
              fixing very few issues and removing some things, but was praised for better lighting. As of March 26, 2008,
              Vice City Stories had sold 4.5 million copies according to Take-Two Interactive. Hyper's Eliot Fish
              commended the game for using "the slick veneer of the 1980s [and that] story is well integrated into
              missions".
            </p>
            <p>
              The game's PlayStation Portable version received a "Platinum" sales award from the Entertainment and
              Leisure Software Publishers Association (ELSPA), indicating sales of at least 300,000 copies in the
              United Kingdom.
            </p>
            <h3 className="article-heading-3" id="4.1">Accolades</h3>
            <ul className="article-list">
              <li>
                Received <Link>IGN</Link>'s award for the best licensed soundtrack on PlayStation Portable in
                2006.
              </li>
              <li>
                Best Handheld Game - Golden Joystick Awards 2007.
              </li>
              <li>
                Several publications have listed the game retrospectively among the best PSP games.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default GtaVCS;