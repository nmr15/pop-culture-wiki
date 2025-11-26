import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableGta from '../../components/TableGta'

const GtaLCS = () =>
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
              {id: "2.2", title: "Characters"},
              {id: "2.3", title: "Plot"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Development</a></li>
          <li className="sidebar-list-item"><a href="#4">Soundtrack</a></li>
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Sales"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto: Liberty City Stories</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto: Liberty City Stories</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Grand Theft Auto</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Grand_Theft_Auto_Liberty_City_Stories_box.jpg/250px-Grand_Theft_Auto_Liberty_City_Stories_box.jpg" 
                    alt="Grand Theft Auto: Liberty City Stories boxart" />
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
              <td className="infobox-data"><Link to="/gta/grand_theft_auto_san_andreas">Grand Theft Auto: San Andreas</Link></td>
            </tr>
             <tr>
              <th className="infobox-data">Next game</th>
              <td className="infobox-data"><Link to="/gta/grand_theft_auto_vice_city_stories">Grand Theft Auto: Vice City Stories</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            Grand Theft Auto: Liberty City Stories is a 2005 action-adventure game developed in a collaboration between <Link>Rockstar Leeds</Link> and
            <Link> Rockstar North</Link>, and published by <Link>Rockstar Games</Link>. The ninth installment in the <Link to="/gta">Grand Theft
            Auto series</Link>, it was initially released as a <Link>PlayStation Portable</Link> exclusive in October 2005. A port for the
            <Link> PlayStation 2</Link> was later released in June 2006. At the time of release, the recommended retail price of the PS2 port was
            around half the price of the PSP version, because the PS2 version does not feature the custom soundtrack ripping capabilties of the PSP
            version. Ports for iOS, Android, and Fire OS devices were also released in December 2015, February 2016, and March 2016, respectively.
          </p>
          <p>
            The game is the first 3D title in the series to be released for handheld devices, and acts as a prequel to 2001's
            <Link to="/gta/grand_theft_auto_iii"> Grand Theft Auto III</Link>, using the same setting of <Link>Liberty City</Link> (a fictional parody
            of New York City). The single-player story, set in 1998, follows mobster <Link>Toni Cipriani</Link>, a character first introduced in
            Grand Theft Auto III, and his efforts to rise through the ranks of the Leone crime family, while slowly becoming invlolved in a power
            struggle among the city's various Mafia organizations. The PSP version of the game also included a multiplayer mode through a wireless
            ad hoc network, which allows up to six players to engage in several different game modes.
          </p>
          <p>
            Liberty City Stories received generally positive reviews from critics, and was a commercial success, selling over 8 million copies as of
            March 2008 and becoming the best selling PSP game of all time. It was followed in October 2006 by 
            <Link to="/gta/grand_theft_auto_vice_city_stories"> Grand Theft Auto: Vice City Stories</Link>, a prequel to 2002's
            <Link to="/gta/grand_theft_auto_vice_city"> Grand Theft Auto: Vice City</Link>.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Gameplay"} />
          <div>
            <div className="img-left img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/c/c1/GTA_LCS_Staunton_Island_screenshot.png" 
                alt="GTA_LCS_Staunton_Island_screenshot" 
              />
              <p>
                Toni on Staunton Island riding a <Link>PCJ-600</Link> motorcycle with a sub-machine gun equipped and with a two-star
                <Link> wanted level</Link>.
              </p>
            </div>
            <p>
              Grand Theft Auto: Liberty City Stories is an action-adventure game set in an open world environment and played from a third-person
              perspective. <Link>Liberty City</Link>'s layout is largely similar to Grand Theft Auto III, but it also incorporates elements found in
              Grand Theft Auto III's successors, such as more indoor environments, clothing changes, and motorcycles. Though flyable aeroplanes and
              helicopters are available in Vice City and San Andreas, flyable aeroplanes cannot be found in Liberty City Stories, while helicopters are
              only accessible through certain exploits. In keeping with recent Grand Theft Auto games, the player has more flexibility in terms of moving
              the camera around for viewing surroundings (Grand Theft Auto III is noticeably limited in that respect). In contrast to the previous
              release in the "3D Universe", <Link to="/gta/grand_theft_auto_san_andreas">San Andreas</Link>, the Liberty City Stories protagonist lacks
              the ability to climb and the ability to swim, contact with deep bodies of water is instantly fatal. The overall game's open world, as it is
              based upon the original Liberty City layout, is considerably smaller than that of San Andreas.
            </p>
            <p>
              The PSP version of Liberty City Stories has a multiplayer mode, for up to six players through Wi-Fi ad-hoc mode (same area). The game
              features seven modes of wireless multiplayer gaming, in which various pedestrian and character models are from the single player mode
              avatars. These multiplayer modes were removed in the PS2 and mobile versions.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Synopsis"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Setting</h3>
            <p>
              Liberty City Stories takes place in early 1998 within the fictional Liberty City (based on the real life New York City), and forms part of
              the "3D Universe" canon of the Grand Theft Auto series. Set three years before the events of Grand Theft Auto III, the game's setting
              features several areas that are different from the 2001 version of Liberty City, including locations that are being constructed, or
              facilities and buildings that are demolished by 2001. For instance, the Callahan Bridge is unfinished in 1998 so a ferry service is the main
              link between Staunton Island and Portland. Another example is Fort Staunton, initially a "Little Italy" district in the game, until events
              later in the storyline lead to it being mostly destroyed and becoming a construction site by 2001.
            </p>
            <h3 className="article-heading-3" id="2.2">Characters</h3>
            <p>
              Like previous Grand Theft Auto games, Liberty City Stories features an array of notable actors in its cast. Several characters from Grand
              Theft Auto III make appearances in the game, receiving notable changes in appearance and lifestyles to reflect who they were in 1998.
              Although Frank Vincent, Guru, and Sondra James return to reprise their roles as <Link>Salvatore Leone</Link>, <Link>8-Ball</Link>, and
              <Link> Ma Cipriani</Link>, respectively, from Grand Theft Auto III (and, in Vincent's case, also Grand Theft Auto: San Andreas), other
              returning characters from Grand Theft Auto III were voiced by new actors. For instance, Danny Mastrogiorgio replaced Michael Madsen as
              Toni Cipriani, Fiona Gallagher replaced Debi Mazar as Maria Latore, Peter Appel replaced Robert Loggia as Ray Machowski, and Will Janowitz
              replaced Kyle MacLachlan as Donald Love.
            </p>
            <h3 className="article-heading-3" id="2.3">Plot</h3>
            <p>
              In 1998, Leone mobster Antonio "Tony" Cipriani (Danny Mastrogiorgio), returns home to Liberty City,living four years abroad for killing a
              made man. His boss, Don Salvatore Leone (Frank Vincent), welcomes him back and assigns him to work under another Leone mobster, Vicenzo
              "Lucky" Cilli (Joe Lo Truglio), who despises Toni. Meanwhile, Toni meets JD O'Toole (Greg Wilson), a member of the rival Sindacco family
              looking to switch allegiances, and works with him to take down the Sindaccos. Later, Toni is set up by Vincenzo to be arrested during a job,
              but escapes and cuts ties with Vincenzo.
            </p>
            <p>
              During these jobs, Toni discovers that Sicillian Mafia underboss Massimo Torini is orchestrating plans for other gangs to take territory
              from the Leones', as well as the Sindacco and Forelli families after their tributes dried up. After Toni helps him take over a Sindacco club,
              JD is invited to join the Leones as a made man. However, Salvatore has JD killed, believing he would betray them as well. Toni also learns
              his mother (Sondra James) disapproves of his low rank in the Leone family and attempts to impress her but is disowned when she eventually
              calls a hit on him. Soon, Salvatore begins giving Tony direct assignments, including looking after his trophy wife, Maria (Fiona Gallagher).
            </p>
            <p>
              Toni earns Salvatore's trust, becoming a made man within the Leone family, with his mother calling off the hit on him. Vincenzo soon
              becomes jealous of Toni's newfound position in the Leone family and lures him into an ambush to be killed, but Toni survives and kills
              Vincenzo. On Salvatore's orders, Toni kills the city's Forelli controlled mayor, and assists business tycoon, Donald Love (Will Janowitz)
              into getting elected as his replacement. However, Donald goes bankrupt after his ties to the Leone are discovered and loses the election to
              Miles O'Donovan (John Braden), who soon has Salvatore arrested. Toni remains loyal to Salvatore, working for him from prison, soon killing
              Don Paulie Sindacco (Jeff Gumer) for his involvement in Salvatore's arrest.
            </p>
            <p>
              Larer, Donald enlists Toni's help in rebuilding his fortune; having Toni kill his former mentor <Link>Avery Carrington</Link>, steal his
              city development plans, and destroy the Forelli-controlled district of Fort Staunton with explosives. Afterwards, Donald's company would
              receive funding to re-develop it. Meanwhile, Toni is manipulated into committing crimes to further the career of news reporter Ned Burns,
              whom Tony kills to prevent his and Donald's crimes from being exposed. Toni also works for Toshiko Kasen, the neglected wife of Yakuza
              leader Kazuki Kasen, to sabotage her husband's operations. After Toni kills Kazuki, a guilt-ridden Toshiko commits suicide.
            </p>
            <p>
              As the Leone mob family comes out on top over the Sindaccos and Forellis, Salvatore is targeted by the Sicillian Mafia, forcing Toni to
              protect him before his trial. Released on bail, Salvatore and Toni learn Torini orchestrated the mob war, rigged the mayoral elections, and
              Salvatore's arrest. Torini soon kidnaps O'Donovan to prevent him from dropping Salvatore's charges. Toni and Salvatore rescue O'Donovan,
              confronting and killing Torini at a lighthouse. Salvatore coerces O'Donovan into working under the Leones', before he and Toni confront his
              uncle, Don of the Sicillian Mafia and Torini's boss. Uncle Leone feigns ignorance of Torini's action but returns to Sicily, swearing off
              the Sicillians' invasion. The Leones' controlling Liberty City, Salvatore has Toni promoted to caporegime as repayment for his assistance.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Development"} />
          <div>
            <p>
              As stated in an IGN preview, "Rockstar dropped Renderware in favor of a brand new in-house engine to best utilize the resolution, texture
              density, and particle effects of the PSP". Until the release of Liberty City Stories, RenderWare had been the game engine behind every 3D
              game in the Grand Theft Auto III era. Liberty City Stories used Image Metrics for the game's facial animation.
            </p>
            <p>
              In April 2013, the game was released on <Link>PlayStation 3</Link> via the PlayStation Network using the <Link>PlayStation 2</Link>
              backward compatibility.
            </p>
            <p>
              An enhanced port of the game, with touchscreen controls, real-time lighting, high-defintion textures and draw distance, was released in
              December 2015 for iOS, February 2016 for Android, and March 2016 for Fire OS.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Soundtrack"} />
          <div>
            <p>
              Liberty City Stories features ten radio stations, which consist of a mix of both licensed music and tracks created specifically for the game,
              and talk radio stations. A feature for the PSP version of the game is the ability to listen to custom soundtracks.
            </p>
            <p>
              To implement the custom soundtrack feature, Rockstar placed the application called "Rockstar Custom Track v1.0" on the official site under
              the "Downloads" section. This then gave people the chance to use the custom soundtrack feature. The application is based on Exact Audio
              Copy.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Reception"} />
          <div>
            <p>
              Grand Theft Auto: Liberty City Stories received "generally favorable reviews" on both platforms from critics, according to review
              aggregator website Metacritic.
            </p>
            <p>
              During the 9th Annual Interactive Achievement Awards, the Academy of Interactive Arts & Sciences nominated Liberty City Stories for
              "Handheld Game of the Year", which was ultimately awarded to Nintendogs.
            </p>
            <h3 className="article-heading-3" id="5.1">Sales</h3>
            <p>
              In the United States, the PlayStation 2 version of Liberty City Stories had sold 1 million copies by February 2007. In the United States
              alone, Liberty City Stories' PSP release sold 980,000 copies and earned $48 million by August 2006. During the period between January 2000
              and August 2006, it was the 16th highest-selling handheld game across all platforms in that country. As of March 26, 2008, Liberty City
              Stories sold 8 million copies according to Take-Two Interactive, The PlayStaion Portable version of Liberty City Stories received a
              "Double Platinum" sales award from the Entertainment and Leisure Software Publishers Association (ELSPA), indicating sales of at least
              600,000 copies in the United Kingdom. ELSPA gave the game's PlayStation 2 version a "Platinum" certification, for sales of at least
              300,000 copies in the region.
            </p>
          </div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default GtaLCS;