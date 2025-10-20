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
          <li className="sidebar-list-item"><a href="#5">Reception</a></li>
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
            <p>
              Most Grand Theft Auto games are set in fictional parodies of well-known United States cities, in a number of different time periods. The
              games are split into three different universes (2D, 3D, and HD), each with their own reinterpretations of previously established settings.
              The universes share the names of cities, several brands, and background characters who never make physical appearances in the games (with
              a few exceptions), but are otherwise considered to be separate continuities.
            </p>
            <h4 className="article-heading-4" id="3.2.1">Liberty City</h4>
            <p>
              Liberty City, based on New York City, is one of the three original cities introduced in Grand Theft Auto. It is the first setting available
              to the player. The city encompasses two landmasses (a large one in the southeast and a smaller one in the northeast) and a Manhattan-like
              central island; two smaller islands are featured along the river that separates the three main islands. This setting also incorporates the
              neighbouring state of New Guernsey (a parody of New Jersey), which occupies the northwest portion of the map. All four major islands are
              divided into multiple districts, inspired by New York and New Jersey's boroughs.
            </p>
            <p>
              A redesigned version of Liberty City was introduced in Grand Theft Auto III (set in 2001). This iteration is only loosely based on New York,
              and incorporates elements from other U.S. cities, such as Philadelphia, Detroit, Boston, Chicago, and Baltimore. The city encompasses three
              main islands, which are gradually unlocked as the game's storyline progresses: Portland (based on the industrial areas of Brooklyn and
              Queens, with additional elements from Manhattan and Long Island), Staunton Island (based mostly on Manhattan), and Shoreside Vale (loosely
              based on North Jersey, The Bronx, Staten Island, and Upstate New York). The islands are connected by road bridges and an underground
              tunnel system. A tunnel leading out of Liberty City can be found in Shoreside Vale, but it is impassable by the player. This particular
              version of Liberty City returned in the prequels Grand Theft Auto Advance (set in 2000) and Grand Theft Auto: Liberty City Stories (set in
              1998), albeit with several changes to reflect the different time periods. The city was also mentioned in Grand Theft Auto: Vice City and
              Grand Theft Auto: San Andreas, and was the setting of a mission in the latter.
            </p>
            <p>
              A third version of Liberty City was featured in Grand Theft Auto IV, its expansion packs The Lost and Damned and The Ballad of Gay Tony
              (all three set in 2008), and the handheld game Grand Theft Auto: Chinatown Wars (set in 2009). This iteration closely resembles New York,
              and consists of four main boroughs, which become available to explore as the story progresses: Broker (based on Brooklyn), Dukes (Queens),
              Bohan (The Bronx), and Algonquin (Manhattan). The placement of these boroughs mirrors that of their real-life counterparts: Broker and
              Dukes occupy a large landmass in the southeast, while Bohan forms its own, smaller island in the northeast, and Algonquin acts as the
              city's central island. The setting also incorporates three smaller islands, Charge Island (Randall's Island), Colony Island (Roosevelt
              Island), and Happiness Island (Liberty Island), and a fourth landmass, Alderney, which is located west of Algonquin and regarded as its
              own idependent state (similar to New Jersey). Alderney is absent in Chinatown Wars. All islands, barring Happiness Island, are connected
              by road bridges, underground tunnels, and a subway system; none of which lead out of the city.
            </p>
            <h4 className="article-heading-4" id="3.2.2">San Andreas</h4>
            <p>
              San Andreas, based on San Francisco, is one of the three original cities introduced in Grand Theft Auto. It is the second setting
              available to the player. The locale encompasses two landmasses: a large northern portion, which is divided into fifteen districts and
              generally considered to be the city's core, and a smaller island in the southeast, consisting of only one district, which acts as the
              city's docks area. The northern landmass is further divided by Aye Valley, which cuts through the heart of the area from the east to the
              west.
            </p>
            <p>
              A reimagined version of San Andreas was featured in Grand Theft Auto: San Andreas (set in 1992), as a state rather than a city. Based on
              California and Nevada, the state encompasees two landmasses, separated by a river and surrounded by a large body of water. The southern
              portion of the map features the cities of Los Santos (based on Los Angeles) and San Fierro (San Francisco), separated by vast forest
              and mountain areas. By contrast, the northern portion is one large desert region and incorporates only one city, Las Venturas
              (Las Vegas). Both landmasses feature additional rural settlements, which are less inhabited than the three major cities. The cities are
              connected by a train track system, and each one features an airport, which can be used to fast travel from a city to another. At the
              beginning of the game, players only have access to Los Santos, with the rest of the map being gradually unlcoked as the story progresses.
            </p>
            <p>
              A third version of San Andreas appeared in Grand Theft Auto V (set in 2013), again imagined as a state. The game features only the
              southern portion of the state, which is depicted as a large island. The southern portion of the island is occupied mostly by the city of
              Los Santos (which resembles Los Angeles much more closely than its San Andreas counterpart), while the northern portion, known as Blaine
              County, is less inhabited, featuring vast areas of desert, forest, and mountain, and only a few small towns. This version of San Andreas
              is currently the only setting in the series that does not feature any map limitations, allowing players to explore the entire island at
              the beginning of the game. Los Angeles was extensively researched for Grand Theft Auto V. The team organized field research trips with
              tour guides and architectural historians and capture around 250,000 photos and hours of video footage during these visits. Since the
              release of the game, hundreds of in-game buildings have been identified as being based on real-world landmarks. The New Yorker's Sam
              Sweet noted that, with sales of the game reaching thirteen million copies, "there will be more people living in the imaginary state of
              Los Santos than in the real city on which it was modelled."
            </p>
            <h4 className="article-heading-4" id="3.2.3">Vice City</h4>
            <p>
              Vice City, based on Miami, is one of the three original cities introduced in Grand Theft Auto. It is the third setting available to the
              player. The city encopasses one large landmass divided into eight districts which form the city's core, and a smaller island, Vice Beach,
              in the northeast. Like its real-life counterpart, Vice City is depicted as a tropical city, easily distinguished from the other two in
              the game by its beaches and palm trees.
            </p>
            <p>
              A redesigned version of Vice City, located in the state of Florida, was introduced in Grand Theft Auto: Vice City (set in 1986). The
              city consists of two main landmasses, Vice City Beach and Vice City Mainland, separated by a large body of water and connected to each
              other and to two smaller islands, Starfish Island and Prawn Island, by a series of road bridges. At the beginning of the game, the
              player only has access to Vice City Beach, with the rest of the city being gradually unlocked as the story progresses. The same setting
              would be later used in the prequel Grand Theft Auto: Vice City Stories (set in 1984), albeit with several changes to reflect the
              earlier time period.
            </p>
            <p>
              A third version of Vice City will be featured as a main setting of the upcoming Grand Theft Auto VI (set in the present) and will again
              be based on Miami. It is also being re-imagine as a major city in the fictional state of Leonidas, based on Florida, and as the county
              seat of Vice-Dale County, based on Miami-Dade County. In addition, unlike previous iterations of the city, Vice Beach (known as Vice
              City Beach in the 3D universe's depiction of Vice City) will be its own separate city complete with its own police force, much like
              the real world Miami Beach.
            </p>
            <h4 className="article-heading-4" id="3.2.4">Other settings</h4>
            <p>
              The London 1969 and London 1961 expansion packs for Grand Theft Auto take place within a fictionalized version of London during the
              1960s. As such, they are the only games in the series to be set outside of the United States. The portion of the city used in the games
              is based on Central London, although heavily condensed and mostly geographically inaccurate. It consists of two landmasses, separated
              by the River Thames and connected by several road bridges. A fictionalized version of Manchester is also featured in the games.
            </p>
            <p>
              Grand Theft Auto 2 is set in Anywhere City, a fictional US retro futuristic metropolis with no apparent inspiration from any
              real-life city. The setting consists of three areas, which the player will switch between as the story progresses: the Downtown
              District, the Residential District, and the Industrial District. Each district is depicted as its own individual island. The game is
              set in an unspecified time period, conflicting sources suggest anything from "three weeks into the future", toe the year 2013, while
              the game itself features several references to the "new millennium" that is coming, implying that the year is 1999.
            </p>
            <p>
              Grand Theft Auto V features the fictional town of Ludendorff in the state of North Yankton, which is the setting of two missions and
              is inaccessible outside of the storyline. The 2020 update for <Link>Grand Theft Auto Online</Link>, The Cayo Perico Heist, introduced
              the eponymous fictional island, a "tropical paradise" off the Caribbean coast of Colombia privately owned by notorious drug lord
              Juan "El Rubio" Strickler. The island is used as both a transshipment base and a partying place by El Rubio, and draws inspiration
              from Norman's Cay and Hacienda Napoles. Cayo Perico is the first setting in the series not located in the United States since London.
            </p>
            <h3 className="article-heading-3" id="3.3">Voice acting</h3>
            <p>
              The series has included a wide variety of voice actors. The original Grand Theft Auto, its mission packs and its sequel, as well as
              Grand Theft Auto Advance and Chinatown Wars did not feature any voice credited to specific roles. The first game in the series to do
              so was Grand Theft Auto III which, despite a limited budget and the series' low profile at the time, featured several notable actors
              from film and television. These include Frank Vincent, Michael Madsen, and Kyle MacLachlan, who all had prominent roles. At the time
              it was rare for a video game to use such high-profile actors, and Grand Theft Auto III is considered a pioneer in doing so. The
              next game, Grand Theft Auto: Vice City, featured more film actors, including Ray Liotta as the player character. Althoug the
              following title, Grand Theft Auto: San Andreas, also featured many notable film actors, such as Samuel L. Jackson, Peter Fonda, and
              James Woods, it has been decided that the use of such actors should be reduced, particularly for leading roles. As a result, many
              of the prominent roles in San Andreas were voiced by lower profile actors or rappers.
            </p>
            <p>
              From Liberty City Stories through to Grand Theft Auto V, the series has continued using lesser known actors to voice main
              characters, but still use celebrities and real-life radio personalities to voice the DJs of the many radio stations featured in
              each game. Some games also feature celebrities portraying themselves, such as Lazlow Jones, <Link>Phil Collins</Link>, Ricky
              Gervais, Katt Williams, and Dr. Dre.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Controversies</h2>
          <div>
            <p>
              According to The Guinness World Records 2008 and 2009 Gamer's Edition, it is the most controversial video game series in history,
              with over 4,000 articles published about it, which include accusations of glamorizing violence, corrupting gamers, and connection
              to real life crimes.
            </p>
            <h3 className="article-heading-3" id="4.1">Grand Theft Auto</h3>
            <p>
              The game was controversial from the first incarnation of the series. Grand Theft Auto was condemned in Britain, Germany, and
              France due to its "extreme violence", and Brazil banned it outright. Publicisit Max Clifford planted sensational stories in
              tabloids in order to help sell the first game.
            </p>
            <h3 className="article-heading-3" id="4.2">Grand Theft Auto III</h3>
            <p>
              The controversies flared up again Grand Theft Auto III, for various reasons. First, the 3D graphics made the violence more realistic.
              Also, players could restore their health by paying for the services of prostitutes, and if they wished, kill them to get some of
              their money back.
            </p>
            <p>
              There was also criticism of the focus on illegal activities in comparison with traditional "heroic" roles that other games offer. The
              main character can commit crimes and violent acts, including the killing of policemen and military personnel, while suffering only
              temporary consequences.
            </p>
            <h3 className="article-heading-3" id="4.3">Vice City</h3>
            <p>
              The sixth game in the series, Grand Theft Auto: Vice City, also came under criticism. One mission in particular, in which the player
              must instigate a gang war between Haitian and Cuban gangs, has been controversial. Haitian and Cuban anti-defamation groups
              criticized the game.
            </p>
            <p>
              Jean-Robert Lafortune of the Haitian American Grassroots Coalition in quoted as saying that "The game shouldn't be designed to
              destroy human life, it shouldn't be designed to destroy an ethnic group," for this and similar scenarios, including lines in the
              game's script such as "kill the Haitian dickheads" said by character "Diaz" during an altercation between the player and a Haitian
              gang. After the threat of a lawsuit by the Haitian-American Grassroots Coalition, Rockstar removed the word "Haitian" from the
              phrase in the game's subtitles.
            </p>
            <h3 className="article-heading-3" id="4.4">San Andreas</h3>
            <p>
              San Andreas was criticized initially for its "gangster" elements, which include drugs, prostitution, and murder. It received additional
              criticism after the discovery of an interactive sex minigame, nicknamed Hot Coffee. Although it had been out from the game, it remained
              in the code, and was discovered in both the console and Windows version.
            </p>
            <p>
              After the release of San Andreas, modders managed to fin the unused code in the game and released unofficial patches for the Windows
              and Xbox (with a modchip) versions as well as a PlayStation 2 version through the use of an Action Replay code enabling the player to
              engage in these sexual mini-games (dubbed "Hot Coffee" in reference to a euphemism for sex used in the game). These mini-games were
              left partially intact in the game's code. This prompted application of an AO (Adults Only) <Link>ESRB</Link> raitng to the version of
              the game containing the leftover code. Take-Two Interactive was forced to re-release the game in order to restore the M (Mature)
              rating. A class action lawsuit against Take-Two was also filed as a result of the "Hot Coffee" code.
            </p>
            <h3 className="article-heading-3" id="4.5">Grand Theft Auto IV</h3>
            <p>
              One of the controversies invlived with this game was Mothers Against Drunk Driving's (MADD) criticism of the ability to drink and
              drive as a new feature. MADD had even requested the ESRB to change the rating of the game from "M" for ages seventeen and up to "AO",
              for adults only, because they felt it was inappropriate for children, even at the age of seventeen, to experience drunk driving in
              such a manner. In the final game, drunk driving is a playable event, but it is a crime that automatically generates a wanted rating
              and main playable character <Link>Niko Bellic</Link> loudly (and drunkenly) proclaims that it is a "bad idea" and that he "should
              know better".
            </p>
            <p>
              Notably, it is impossible to drive while drunk in the GTA IV expansions, The Lost and Damned and The Ballad of Gay Tony. These were
              released after the criticism. It is, however, possible to drunk drive again the successor, Grand Theft Auto V.
            </p>
            <h3 className="article-heading-3" id="4.6">The Lost and Damned</h3>
            <p>
              The Lost and Damned expansion pack for Grand Theft Auto IV was condemened by US parents group Common Sense Media who issued a public
              warning against the pack's content due to a full-frontal nudity scene during one of the cutscenes. They claimed the game was "more
              controversial than its predecessors" because it featured "full frontal male nudity".
            </p>
            <h3 className="article-heading-3" id="4.7">Chinatown Wars</h3>
            <p>
              There has been some controversy over a drug dealing minigame along with comments that some Nintendo games are being aimed at children
              (despite the fact that the game was rated Mature). The drug dealing minigame allows players to peddle six types of drugs around the
              city, but the profit the player makes depends on market conditions, which will be based on the area in which they deal, and the
              level of regular service this area receives from them.
            </p>
            <h3 className="article-heading-3" id="4.8">Grand Theft Auto V</h3>
            <p>
              A segment in the this installment caused controversy for scenes containing player-initiated torture. The mission "By The Book"
              features graphic depictions of kneecapping, electrocution, dental extraction, and waterboarding, and the player is required to
              perform an act of torture in order to progress in the game.
            </p>
            <p>
              UK-based charity Freedrom from Torture publicly condemned the use of torture scenes in Grand Theft Auto V. The organization, who
              works to rehabilitate survivors of torture, joined other human rights charities who were outraged at a torture scene in the game
              in which the players have to pull teeth and electrocute an unarmed man in order to extract information. The charity's CEO Keith
              Best stated "Rockstar North has crossed a line by effectively forcing people to take on the role of a torturer and perform a
              series of unspeakable acts if they want to achieve success in the game."
            </p>
            <p>
              The game has also been accused of sexism. The Los Angeles Times considered the game's satirical portrayals of women uncreative,
              and added that violent and sexist themes hurt the game experience. Edge noted that while "every female in the game exists solely
              to be sneered, leered, or laughed at", it treated its all-men lead characters in a similar vein through their stereotyped
              tendencies towards violence. Sam Houser, Rockstar Games co-founder, felt that the development team sometimes overlooked their
              portrayal of women in Grand Theft Auto games, but that the weight towards male characters "fit with the story we wanted to tell".
            </p>
            <h3 className="article-heading-3" id="4.9">Lawsuits</h3>
            <p>
              Several celebrities have sued Rockstar Games and/or Take-Two Interactive for puportedly violating their intellectual property or
              personality rights, including hip-hop artitst Daz Dillinger, Karen Graveno of Mob Wives, and actress Lindsay Lohan.
            </p>
            <h4 className="article-heading-4" id="4.9.1">Lawsuits invloving Jack Thompson</h4>
            <p>
              Former lawyer Jack Thompson has been involved in a number of attempts to get families or murder victims to hold the Grand Theft Auto
              series accountable for the death of their loved ones. Due to his conduct in this and related cases, Thompson was disbarred in 2008
              and was fined more than $100,000 by the Florida Bar Association.
            </p>
            <p>
              On October 20, 2003, the families of Aaron Hamel and Kimberly Bede, two young people shot by teens William and Josh Buckner (who in
              statements to investigators claimed their actions were inspired by Grand Theft Auto III) file a US$246 million lawsuit against
              publisher Rockstar Games, Take-Two Interactive Software, retailer Walmart, and PlayStation 2 manufacturer <Link>Sony Computer
              Entertainment America</Link>. Rockstar and its parent company, Take-Two, filed for dismissal of the lawsuite, stating in US District
              Court on October 29, 2003 that the "ideas and concepts as well as the 'purported psychological effects' on the Buckners are protected
              by the First Amenment's free-speech clause". The lawyer of the victims, Jack Thompson, denied that, but failed in his attempt to move
              the lawsuit into a state court and under Tennessee's consumer protection act. Two days later, the plaintiff filed a Notion of
              Voluntary Dismissal, and the case was closed.
            </p>
            <p>
              In February 2005, a lawsuit was brought upon the makers and distributers of the Grand Theft Auto series claiming the games caused a
              teenager to shoot and kill three members of the Alabama police force. The shooting took place in June 2003 when Devin Moore, 17 years
              old at the time, was taken in for questioning by police in Fayette, Alabama, regarding a stolen vehicle. Moore then grabbed a pistol
              from one of the police officers and shot and killed him along with another officer and dispatcher before fleeing in a police car.
              One of Moore's attorneys, Jack Thompson, claimed it was Grand Theft Auto's graphic nature, with his constant playing time, that
              caused Moore to commit the murders, and Moore's family agreed. Damages were being sought from branches of GameStop and Walmart in
              Jasper, Alabama, the stores from which Grand Theft Auto III and Grand Theft Auto: Vice City, respectively, were purchased and also
              from the games' publisher Take-Two Interactive, and the PlayStation 2 manufacturer Sony Computer Entertainment. On March 29, 2006
              the case was dismissed and permission to appeal was denied.
            </p>
            <p>
              In May 2005, Jack Thompson appeared via satellite on the Glenn Beck program on CNN's Headline News. Thompson mentioned Devin Moore
              and said, regarding Grand Theft Auto III and Grand Theft Auto: Vice City, "There's no doubt in my mind [...] that but for Devin
              Moore's training on this cop killing simulator, he would not have been able to kill three cops in Fayette, Alabama, who are now dead
              and in the ground. We are suing Take-Two, Sony, Walmart, and Gamestop for having trained Devin Moore to kill. He had no history of
              violence. No criminal record."
            </p>
            <p>
              In September 2006, Thompson brought another lawsuit, claiming that Cody Posey played the game obsessively before murdering his
              Delbert Paul Posey, stepmother Tyrone Schmid, and stepsister Marliea Schmid on a ranch in Albuquerque, New Mexico. The suit was filed
              on behalf of the victims' families. The suit alleged that were if not for his obsessive playing of Grand Theft Auto: Vice City, the
              murders would not have taken place. Named in the suit ware Cody Posey, Rockstar Games, Take-Two Interactive, and Sony. The suit asked
              for US$600 million in damages. During the criminal trial, Posey's defense team argued he was abused by his father, and tormented by
              his stepmother. Posey was also taking Zoloft at the time of the killings. The lawsuit was dismissed in December 2007.
            </p>
            <h3 className="article-heading-3" id="4.10">Modding and fan recreation</h3>
            <p>
              Modding of Grand Theft Auto content, either within Grand Theft Auto games or recreation via other software, has been generally performed
              by the player community since around the early 2000s, with one of the first major conversions being the recreation of Grand Theft Auto
              III's Liberty City within the game engine running Vice City. Around 2017, Take-Two began taking action against these mods, specifically
              issuing a cease and desist letter to the makers of OpenIV, a piece of software that allowed players to alter content from Grand Theft
              Auto IV and V. Take-Two said at the time that its issue was not directly with the mod itself, but that it "enables recent malicious mods
              that allow harassment of players and interfere with the GTA Online experience for everybody", and that it was working with OpenIV to find
              an amenable solution. OpenIV developers opted to remove the mod from circulation after several rounds of discussion with Take-Two. Take-Two
              issued a statement to clarify that it would not take action against single-player mods; this statement was updated in 2019 to exclude
              moders from including other Take-Two intellectual property or from "making new games, stories, missions, or maps".
            </p>
            <p>
              The Grand Theft Auto modding community worked under this response to continue to build mods and other content within the bounds set by
              Take-Two. In February 2021, Take-Two, under the Digital Millennium Copyright Act (DMC), issued a takedown request for two projects
              hosted on <Link>Github</Link> that had reverse-engineered the game engine for Grand Theft Auto III and Vice City, asserting that such
              reverse engineering was disallowed by the game's end-user license agreement. One June 10, 2021, the project developers file a
              counter-notice; per DMCA rules regarding disputes, the source code was restored after two weeks. Take-Two CEO Strauss Zeinick stated the
              company had a "pretty flexible" view on user mods, asserting that "if the economy is threatened, or if there's bad behavior, and we know
              how to define that, tneh we would issue a takedown notice". However, the company proceeded to continue to file a lawsuit in California
              against the programmers behind this effor in September 2021, asserting that the programmers "are well aware that they do not possess the
              right to copy, adapt, or distribute derivative GTA source code, or the audiovisual elements of the games, and that doing so constitutes
              copyright infringment." As part of the lawshuit, Take-Two issued another takedown notice to Github to remove the mods in October 2021.
              The modders, in their legal reply, asserted that use of the assets were within fair use, as the reverse-engineered versions were
              transformative in nature and as neither Rockstar nor Take-Two had issued any updates for years, did not hoarm the commercial prospects
              of the games.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Reception</h2>
          <div>
            <p>
              Ever since the release of Grand Theft Auto III in 2001, the Grand Theft Auto series has been a major success, both critically and
              financially. It has shipped almost 450 million units, making it one of the best-selling video game franchises of all time.
            </p>
            <p>
              In 2006, Grand Theft Auto was voted one of Britain's top 10 designs in the Great British Design Quest organized by the BBC and the Design
              Museum. The game appeared in a list of British design icons which included Concord, Jaguar E-Type, Aston Martin DB5, Mini, World Wide
              Web, <Link>Tomb Raider</Link>, K2 telephone box, London tube map, AEC Routemaster bus, and the Supermarine Spitfire.
            </p>
            <p>
              The series had broken several records, resulting in Guinness World Records awarding the series 10 world records in the Gamer's Edition
              2008. These records include Most Guest Stars in a Video Game Series, Largest Voice Cast in a Video Game (Grand Theft Auto: San Andreas),
              Largest In-Game Soundtrack (Grand Theft Auto San Andreas) as well as Most Successful Entertainment Launch of All Time (Grand Theft Auto
              V). Guinness World Records also ranked Grand Theft Auto in third place on their list of top 50 console games of all time based on initial
              impact and lasting legacy. Grand Theft Auto: San Andreas is listed as the most successful game on the PlayStation 2 according to The
              Guinness World Records 2009 Gamer's Edition.
            </p>
            <p>
              Grand Theft Auto III, Sand Andreas, and Vice City currently lie at the 2nd, 5th, and 6th highest rated PlayStation 2 games on Metacritic,
              respectively, while Chinatown Wars is rated the best game on the Nintendo DS and the second best on the PlayStation Portable, and Grand
              Theft Auto IV is currently rated the second best game ever, with a score of 98, only trailing behind The Legend of Zelda: Ocarina of Time.
              Also, Vice City and Grand Theft Auto V lie at 11th and 2nd best PC games of all time, on Metacritic. Along with this, The Lost and Damned
              and The Ballad of Gay Tony are currently placed 35th and 59th in the top Xbox 360 games.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Similar games</h2>
          <div>
            <p>
              The release of Grand Theft Auto III is treated as a major event in the history of video games, considered a revolutionary title in the
              medium, much like the release of Doom nearly a decade earlier.
            </p>
            <p>
              During interviews to mark the 10th anniversary of the release of Grand Theft Auto III, producer of the Street Fighter series, Yoshinori
              Ono, said "it would be no exaggeration to say that Grand Theft Auto III changed the industry, and we can bascially separate the time
              before and after its emergence as distinct eras." In the same article <Link>Bethesda Game Studios</Link> director, Todd Howard, said
              "The mark of a truly great game is how many people try to recapture or emulate it and fail. There's a long line behind this one."
            </p>
            <p>
              Subsequent games that followed this formula of driving and shooting have been called "Grand Theft Auto clones". Some reviewers even
              extended this label to the Driver series, even though this series began years before the release of Grand Theft Auto III. Grand Theft
              Auto clones are a type of 3D action-adventure game, where players are given the ability to drive any vehicle or fire any weapon as they
              explore an open world. These games often incorporate violent and criminal themes. Notable games that are comparable to Grand Theft Auto
              are <Link>Saints Row</Link>, Scarface: The World Is Yours, True Crime: Streets of LA, <Link>Watch Dogs</Link>, <Link>Sleeping Dogs</Link>,
              <Link to="/just_cause">Just Cause</Link>, <Link>Mafia</Link>, and <Link>The Godfather</Link>.
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

export default Gta
