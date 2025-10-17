import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'
import { gta } from '../../data/dataGta'

const Gta = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Series history"
            sub={[
              {id: "1.1", title: "Main series"},
              {id: "1.2", title: "Other games"},
              {id: "1.3", title: "Compilations"},
              {id: "1.4", title: "Titles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Related media</a></li>
          <Collapse 
            id="3"
            item="Common elements"
            sub={[
              {id: "3.1", title: "Gameplay"},
              {id: "3.2", title: "Settings", sub2: [
                {id: "3.2.1", title: "Liberty City"},
                {id: "3.2.2", title: "San Andreas"},
                {id: "3.2.3", title: "Vice City"},
                {id: "3.2.4", title: "Other settings"}
              ]},
              {id: "3.3", title: "Voice acting"}
            ]}
          />
          <Collapse 
            id="4"
            item="Controversies"
            sub={[
              {id: "4.1", title: "Grand Theft Auto"},
              {id: "4.2", title: "Grand Theft Auto III"},
              {id: "4.3", title: "Vice City"},
              {id: "4.4", title: "San Andreas"},
              {id: "4.5", title: "Grand Theft Auto IV"},
              {id: "4.6", title: "The Lost and Damned"},
              {id: "4.7", title: "Chinatown Wars"},
              {id: "4.8", title: "Grand Theft Auto V"},
              {id: "4.9", title: "Lawsuits", sub2: [
                {id: "4.9.1", title: "Lawsuits invloving Jack Thompson"}
              ]},
              {id: "4.10", title: "Modding and fan recreation"},
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Sales"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Similar games</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Grand Theft Auto (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2018/03/GTA-Logo.png" 
            alt="Grand Theft Auto logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            <b>Grand Theft Auto</b> is an action-adventure video game series created by David Jones and Mike Dailly. Later titles were developed under the oversight
            of brothers Dan and Sam Houser, Leslie Benzies, and Aaron Garbut. It is primarily developed by British development house <a href="#">Rockstar North</a>
            (formerly DMA Design), and published by its American parent company, <a href="#">Rockstar Games</a>. The name of the series is a term for motor vehicle
            theft in the United States.
          </p>
          <p>
            Gameplay focuses on an open world where the player can complete missions to progress an overall story, as well as engage in various side
            activities. Most of the gameplay revolves around driving and shooting, with occasional role-playing and stealth elements. The series also
            has elements of the earlier beat 'em up games from the 16-bit era. The games in the Grand Theft Auto series are set in fictional locales
            modelled after real-life cities, at various points in time from the early 1960s to the 2010s. The original game's map encompassed three
            cities, Liberty City (based on New York City), San Andreas (based on San Francisco), and Vice City (based on Miami), but later titles
            tend to focus on a single setting and expand upon the original three locales. Each game in the series centers on different respective
            protagonist who attempts to rise through the criminal underworld due to various motives, often accompanying themes of betrayal. Several
            film and music veterans have voiced characters in the game, including <Link>Ray Liotta</Link>, Dennis Hopper, <Link>Sameul L.
            Jackson</Link>, William Fichtner, <Link>James Woods</Link>, Debbie Harry, <Link>Axl Rose</Link>, and Peter Fonda, while few others have
            appeared as themselves, including <Link>Lazlow</Link>, <Link>Phil Collins</Link>, Dr. Dre, and Anderson Paak.
          </p>
          <p>
            DMA Design began the series with 1997's Grand Theft Auto. As of 2020, the series consists of seven standalone titles and four expansion
            packs. The third main title, <Link>Grand Theft Auto III</Link>, released in 2001, is considered a landmark game, and brough the series
            into a three-dimensional environment for the first time. Subsequent titles have followed and built upon the format established by Grand
            Theft Auto III, receiving significant acclaim. The games influenced other open-world games, and led to the label <Link>Grand Theft
            Auto clone</Link> on similar titles.
          </p>
          <p>
            The series has been critically acclaimed, with all the main 3D entries in the franchise frequently ranked among the greatest and
            best-selling video games; it has shipped almost 450 million units, making it one of the best-selling video game franchises. In 2006,
            Grand Theft Auto was featured in a list of British design icon ins in the Great British Design Quest organised by the BBC and the
            Design Museum. In 2013, The Telegraph ranked Grand Theft Auto among Britain's most successful exports. The series has also been
            controversial for its adult nature and violent themes, as well as for cut content.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Series history</h2>
          <div>
            <h3 className="article-heading-3" id="1.1">Main series</h3>
            <p>
              The Grand Theft Auto series is split into separate fictional universes, named after the primary level of graphics capability used
              in each era. The original Grand Theft Auto, its expansions and its sequel are considered the "2D universe". Grand Theft Auto III
              and its sequels are considered the "3D universe". <Link>Grand Theft Auto IV</Link>, its expansions and <Link>Grand Theft Auto V</Link>
              are considered the "HD universe". Each universe is considered separate with only brands, place names, and background characters
              shared between them.
            </p>
            <p>
              Grand Theft Auto, the first game in the series, was released for <Link>MS-DOS</Link> and <Link>Windows</Link> in November 1997, ported
              to the <Link>PlayStation</Link> in 1998 and the <Link>Game Boy Color</Link> in 1999. Grand Theft Auto 2 was released in 1999 for
              Windows, later received ports on the PlayStation, Dreamcast, and Game Boy Color.
            </p>
            <p>
              The <Link>PlayStation 2</Link> also featured three installments of the main series, all of which have been re-released on several
              platforms; a deal between <Link>Take-Two Interactive</Link> and <Link>Sony Computer Entertainment</Link> resulted in their timed
              exclusivity on the PlayStation 2, before receiving ports to Windows and the <Link>Xbox</Link>. The 2001 title Grand Theft Auto III
              moved away from the two-dimension (2D) graphics used in the first two games to three-dimensional (3D) computer graphics.
              <Link> Grand Theft Auto: Vice City</Link> was published in 2002, and was the first to feature a speaking protagonst, voice by Ray
              Liotta. <Link>Grand Theft Auto: San Andreas</Link>, released in 2004, introduced various new elements, including character
              customization and a large map encompassing three cities and surrounding rural area.
            </p>
            <p>
              Two main installments were published for the <Link>PlayStation 3</Link> and <Link>Xbox 360</Link>. The 2008 title <Link>Grand
              Theft Auto IV</Link> focused on realism and detail, removing various customization features, while adding an online multiplayer mode.
              <Link> Grand Theft Auto V</Link>, published in 2013, featured three playable protagonists. It was released to massive financial
              success, breaking multiple records. It was later re-released with various enhancements, in 2014 for the <Link>PlayStation 4</Link> and
              <Link> Xbox One</Link>, and in 2015 for Windows; versions for <Link>PlayStation 5</Link> and <Link>Xbox Series X and S</Link> were
              released in 2022.
            </p>
            <p>
              On February 4, 2022, Rockstar confirmed that development of a new entry in the series was "well underway". In-development footage of
              the game leaked in September 2022; Rockstar noted that was "extremely dissapointed" by the manner in which the game was first 
              demonstrated, but that it did not anticipate long-term effects on development. In December 2023, the game was officially announed as
              <Link>Grand Theft Auto VI</Link>, with a projected relase date of 2025 for the PlayStation 5 and Xbox Series X/S. It was later delayed
              to May 26, 2026.
            </p>
            <h3 className="article-heading-3" id="1.2">Other games</h3>
            <p>
              Grand Theft Auto has spawned numerous additional games and expansion packs. In 1999, the original game received two expansion packs:
              Grand Theft Auto: London 1969 and Grand Theft Auto: London 1961, which, as their names suggest, featured a different setting, a
              fictional version of London, and new missions and characters. Grand Theft Auto Advance, released in 2004 exclusively for the
              <Link> Game Boy Advance</Link>, featured a top-down perspective, similarly to the first two main games in the series, and the same
              setting as Grand Theft Auto III, to which it served as a prequel. Three games were released for the <Link>PlayStation Portable</Link>:
              <Link> Grand Theft Auto: Liberty City Stores</Link> in 2005, which is also a prequel to Grand Theft Auto III; <Link>Grand Theft
              Auto: Vice City Stories</Link> in 2006, which is a prequel to Vice City; and <Link>Grand Theft Auto: Chinatown Wars</Link> in 2009,
              which features the same setting as Grand Theft Auto IV, but the two games are otherwise unrelated. Both Liberty City Stories and Vice
              City Stories were later ported to the PlayStation 2, while Chinatown Wars was originally released for the <Link>Nintendo DS</Link> and
              later ported to PlayStation Portable. In 2009, <Link>The Lost and Damned</Link> and <Link>The Ballad of Gay Tony</Link> were released
              for the Xbox 360 as expansion packs to Grand Theft Auto I; a "strategic alliance" between Rockstar and <Link>Microsoft</Link> resulted
              in the timed exclusivity. The expansions focus on characters who played a relatively minor role in the main game, and whose stories
              take place simultaneously with Grand Theft Auto IV's. Both were later released for the PlayStation 3 and Windows as part of a
              compilation, titled Grand Theft Auto: Episodes from Liberty City, also avaiable on Xbox 360.
            </p>
            <p>
              Numerous titles in the series have received ports to mobile devices. Chinatown Wars was released for iOS in 2010 and for Android and
              Fire OS in 2014. For their tenth anniversaries, Grand Theft Auto III and Vice City were both re-released for iOS and Android in 2011
              and 2012, respectively. In 2013, San Andreas was ported to iOS, Android, and Windows Phone and RT; the mobile port was later re-released
              for Xbox 360 in 2014, the year of the game's tenth anniversary, and the following year for PlayStation 3. In 2015, Liberty City Stories
              was ported to iOS, Android, and Fire OS.
            </p>
            <h3 className="article-heading-3" id="1.3">Compilations</h3>
            <p>
              Grand Theft Auto Double Pack was released in 2003 for the PlayStation 2 and Xbox, and includes both Grand Theft Auto III and Vice City.
              Grand Theft Auto: The Trilogy is a compilation of III, Vice City, and San Andreas, and was first released in 2005 for the Xbox. It was
              later re-released for the PlayStation 2, Windows, Mac OS X, and PlayStation 4. The Trilogy also served as the revised package for San
              Andreas, which had to be pulled from shelves due to the controversial <Link>Hot Coffee mod</Link>. A report in August 2021 suggested
              that Rockstar Dundee was leading development on a remastered version of the trilogy, using <Link>Unreal Engine</Link>; following some
              leaks, Rockstar officially announced <Link>Grand Theft Auto: The Trilogy - The Defintive Edition</Link> on October 8, 2021. The game
              features graphical and gameplay upgrades, and replaced existing versions on digital retailers. It was released for the <Link>Nintendo
              Switch</Link>, PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on November 11, 2021, and for Android and iOS on
              December 14, 2023.
            </p>
            <p>
              Grand Theft Auto: Episodes from Liberty City is a standalone compilation of the two episodes for Grand Theft Auto IV. It contains both
              The Lost and Damned and The Ballad of Gay Tony on one disc. It was released on October 29, 2009 for the Xbox 360 and on April 13, 2010
              for PlayStation 3 and Windows. Microsoft added Episodes from Liberty City to its backwards compatibility list for Xbox One platforms in
              February 2017. The standalone release of Episodes from Liberty City for Windows was discontinued and replaced by a single-player-only
              version of Grand Theft Auto IV: Complete Edition in 2020.
            </p>
            <h3 className="article-heading-3" id="1.4">Titles</h3>
            <div className="row">
              {gta.map((gta) => (
                <div className="col-4" key={gta.id}>
                  <Card 
                    route={gta.route}
                    img={gta.img}
                    alt={gta.title}
                    imgStyle="card-img-vertical"
                    title={gta.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Related media</h2>
          <div>
             <p>
              The series has been expanded into various other formats. Jacked: The Outlaw Story of Grand Theft Auto, a book written by David Kushner
              chronicling the development of the series, was published in 2012. In March 2015, BBC Two announced The Gamechangers, a 90-minute docudrama
              based on the creation of Grand Theft Auto. Directed by Owen Harris and written by James Wood, the drama stars <Link>Daniel Radcliffe</Link>
              as Rockstar president <Link>Sam Houser</Link> and <Link>Bill Paxton</Link> as disbarred attorney <Link>Jack Thompson</Link>. In May 2015,
              Rockstar filed a lawsuit against the BBC for trademark infringement, stating that they had no involvement with the development of the film
              and had unsuccessfully tried to contact the BBC to resolve the matter. It first aired on September 15, 2015 on BBC Two.
            </p>
            <p>
              In 2006, McFarland & Company published The Meaning and Culture of Grand Theft Auto. Compiled by Nate Garrelts, the 264-page book is a
              collection of essays regarding the Grand Theft Auto series, to help audiences better understand the games and to make a point about due
              diligence of game criticism. The book is divided into two parts: the first part discusses the controversies surrounding the series, while
              the second half takes a theoretical look at the games absent of the controversy.
            </p>
            <p>
              Roger Corman, who produced the unrelated 1977 film Grand Theft Auto, claimed that any attempted film adaptation of the video game series
              was unable to proceed. In 2017, he claimed that he sude the "video game manufacturer who flat-out stole the idea", and that they "settled
              out of court and they gave me some money". He said that he retains the rights, "but the way it was actually written in the contract is a
              little bit cloudy", and that his lawyers were analysing the contract to ensure that he can remake the film. Take-Two Interactive responded
              to Corman's claims, noting that the company "owns all rights for films related to the Grand Theft Auto video game series", and that it
              "can and will take appropriate legal action against anyone attempting to misuse our intellectual property by attempting to make a new film
              titled Grand Theft Auto"; it claimed to have successfully taken legal action against similar attempts in the past.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Common elements</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Gameplay</h3>
            <p>
              Each game in this series allows the player to take on the role of a criminal in the big city, typically an individual who ends up rising
              through the ranks of organized crime through the course of the game. The player is given various missions by kingpins and major idols in
              the city underworld which must be completed to progress through the storyline. Assassinations and other violent crimes are featured
              regularly. Occasionally, taxi driving, firefighting, street racing, bus driving, or learning to fly helicopters and fixed-wing aircraft
              are also involved in the game.
            </p>
            <p>
              In later titles, notably those released after Grand Theft Auto 2, the player is given a more developed storyline in which they are forced to
              overcome an unfortunate event (e.g., being betrayed and left for dead), which serves as motivation for the character to advance up the
              criminal ladder and ultimately leads to the triumph of the character by the end of the storyline.
            </p>
            <p>
              The Grand Theft Auto series belongs to a genre of free-roaming role-playing video games called open world games, and grants a large amount of
              freedom to the player. Traditional action games are structured as a single track series of levels with linear gameplay, but in Grand Theft
              Auto the player can determine the missions that they want to undertake, and their relationship with various characters are changed based on
              these choices, influenced by the earlier game Turbo Esprit, the cities of the games can be roamed freely at any point in the game, and are
              examples of open world video game environments which offer accessible buildings with minor missions in addition to the main storyline. There
              are exceptions; missions follow a linear, overarching plot. These missions are required to complete in order to unlock new areas in the game.
            </p>
            <p>
              Grand Theft Auto III and subsequent games have more voice acting and radio stations, which simulate driving to music with disc jockeys, radio
              personalities, commercials, talk radio, popular music, and American culture.
            </p>
            <p>
              The use of vehicles in an explorable urban environment provides a basic simulation of a working city, complete with pedestrians who generally
              obey traffic signals. Further details are used to flesh out an open-ended atmosphere that has been used in several other games, such as
              <Link> The Simpsons: Hit & Run</Link>, which has less emphasis on crime or violence, and Lego City Undercover, which reverses the roles of
              police officer and criminal, although the player goes undercover in gangs for a portion of the game.
            </p>
            <p>
              Criminal activities in Grand Theft Auto games do not go unnoticed by the police. As the player engages in these in-game illegal activities,
              they may gain a "wanted level", represented by a maximum of five or six stars. A small crime, such as running over a non-playable
              character, may create a one star wanted level situation, while shooting an officer may earn more stars. As the number of stars increase,
              the amount and strength of the response will increase; a single star might have a few police cars chase after the player, while at 5 or 6
              stars, tanks and attack helicopters will chase down the player. Many in-game missions will automatically give the player a wanted level
              after completing a certain event which they must then get rid of before the mission is complete. Often, trying to keep away from the police
              while wanted will cause the player to gain even higher wanted levels. The player can remove their character's wanted level by avoiding
              detection or spending in-game money at specific locations to elude the police (such as a mod shop to repair their car). Alternatively, if
              the player-character dies, they will respawn at a hospital and the wanted level will be removed, though the player may lose money, guns,
              and other benefits they had before being chased. The "wanted level" gameplay concept has become common in similar open world games.
            </p>
            <h3 className="article-heading-3" id="3.2">Settings</h3>
            <h4 className="article-heading-4" id="3.2.1">Liberty City</h4>
            <h4 className="article-heading-4" id="3.2.2">San Andreas</h4>
            <h4 className="article-heading-4" id="3.2.3">Vice City</h4>
            <h4 className="article-heading-4" id="3.2.4">Other settings</h4>
            <h3 className="article-heading-3" id="3.3">Voice acting</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Controversies</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Grand Theft Auto</h3>
            <h3 className="article-heading-3" id="4.2">Grand Theft Auto III</h3>
            <h3 className="article-heading-3" id="4.3">Vice City</h3>
            <h3 className="article-heading-3" id="4.4">San Andreas</h3>
            <h3 className="article-heading-3" id="4.5">Grand Theft Auto IV</h3>
            <h3 className="article-heading-3" id="4.6">The Lost and Damned</h3>
            <h3 className="article-heading-3" id="4.7">Chinatown Wars</h3>
            <h3 className="article-heading-3" id="4.8">Grand Theft Auto V</h3>
            <h3 className="article-heading-3" id="4.9">Lawsuits</h3>
            <h4 className="article-heading-4" id="4.9.1">Lawsuits invloving Jack Thompson</h4>
            <h3 className="article-heading-3" id="4.10">Modding and fan recreation</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Sales</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Similar games</h2>
          <div></div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default Gta
