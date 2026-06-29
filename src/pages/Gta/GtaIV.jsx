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
              <p>Rockstar North's former studo in Edinburgh, Scotland, where Grand Theft Auto IV's development was overseen.</p>
            </div>
            <p>
              Preliminary work on Grand Theft Auto IV began in November 2004, a month after the release of Grand Theft Auto: San Andreas. Rockstar president
              <Link> Sam Houser</Link> felt that following up San Andreas was "a nightmare". <Link>Rockstar North</Link>, the core 220-person team behind the game,
              co-lpted studios owned by parent company Rockstar Games to facilitate development between a full team of over 1,000, including 50 employees at
              Rockstar NYC, 40 at Rockstar Lincoln, 10 at Rockstar San Diego, and around 600-700 working part-time internally and externally. Some key members of
              the development team worked 12-hour days during production, often without holidays. The team deided to continue the numbering scheme absent from the
              previous two games to represent the same leap in production as Grand Theft Auo 2 (1999) o Grand Theft Auto III (2001). Development of Grand Theft Auto
              IV ceased by April 21, 2008 when the game was submitted for manufacturing. Producer Leslie Benzies estimated that the budget of the development efforts
              exceeded $100 million, making Grand Theft Auto IV one of the most expensive video games ever made.
            </p>

            <h3 className="article-heading-3" id="3.1">Research and open world design</h3>
            <p>
              The game's setting, Liberty City, is based on New York City. The team did not look at the previous renditions of Liberty City as inspiration, wanting it
              to retain the "generation feel" but nothing else. The map is roughly three times the size of Grand Theft Auto III's. The developers originally considered
              using the entire state of New York, before restricting it to Manhattan, and then expanding it out again. They considered including more suburbs with
              woods, and would regularly vote on which areas to include. Art director Aaron Garbut said that the team chose the setting because of the detail and
              variety it provided, describing New York as "an amazing diverse, vibrant, cinematic city". Writer Dan Houser added that the team "wanted to be somewhere
              where we had a foothold" due to the amount of research required for the world; Rockstar Game's main headquarters are located in New York. The team
              consciously avoided a precise recreation of New York City to allow for more enjoyable game design, selecting the areas that they felt "characterized it
              the best". Garbut wanted to cature a caricature of the city as he felt that most people were familiar with "the highlights" from film or literature but
              did not need to know the areas precisely. The city was not built with specific missions in mind; the area was created first, and missions implemented
              later.
            </p>
            <p>
              To achieve a realistic environment, 60-70 employees from Rockstar North travelled to New York for research: first at the beginning of the project in
              March or April 2005 for a week and a half, and a smaller trip in 2007. Police officers who previously worked the beat drove the team around Washington
              Heights. A full-time research team based in New York handled further requests for information, such as the ethnic minority of a neighborhood or videos of
              traffic patterns. Videos shot in New York were played on televisions at the Rockstar North offices "so while they worked they could look up and there was
              New York". Benzies claimed that the team took over 100,000 photographs on location in New York, though Garbut estimates that they took around 250,000.
              They also studied architectural plans for apartments, used satellite images to determine city block layout, researched sales figures for models of cars,
              and read books that detailed the city's infrastructure, including its subway, sewers, and garbage disposal. Hove Beach is based on Brighton Beach, which
              Sam Houser found "pretty incredible" and unusual; the name is based on the English city Brighton and Hove, made up of the former neighboring towns
              Brighton and Hove. Houser appreciated that Brighton Beach was home to several Eastern Europeans due to the nature of the game's character.
            </p>
            <p>
              Dan Houser described Liberty City as "the biggest character" of the game. The Grand Theft Auto IV rendition of Liberty City is more detailed and larger
              in size than most earlier entries in the series; although smaller than San Andreas, the setting of the previous main game, the developers considered it
              comparable in scope due to the city's verticality, number of buildings, and level of detail. The team wanted less dead spots and irrelevant spaces, such
              as the wide open deserts in San Andreas. They wanted the game to be "a more focused experience" than San Andreas, and Dan Houser felt that the limited
              activities of New York allowed this. The team felt that the addition of Niko's mobile phone added to the immersion of the world and represented society's
              shifted focus on phones. The in-game brands and products are designed over several years; the billboards were implemented in the game around six months
              prior to release.
            </p>

            <h3 className="article-heading-3" id="3.2">Story and character development</h3>
            <p>
              The game's script, written by Dan Houser and Rupert Humphries, is about 1,000 pages. Approximately 680 actors provided voices for the game and 80,000
              lines of dialogue. After conceiving the character and setting, Dan House spoke with his brother Sam Houser and Leslie Benzies to bounce story ideas
              before writing a rough synopsis, a six-pae, detailed document. Once the synopsis was reworked, the designers broke it into missions, represented by a
              large flow document demonstrating each section. The writers then work on the inroductions to the missions; the gameplay dialogue comes much later.
              Unlike previous Grand Theft Auto games, Grand Theft Auto IV does not have cinematic influences. "We were consciously trying to go, well, if video games
              are going to develop into the next stage, then the thing isn't to try and do a loving tibute or reference other stuff," said Dan Houser. He said that the
              writers wanted something "fresh and new and not something that was obiously derived from [a] movie". Dan Houser felt that the quality of the writing had
              to improve alongside the advancements in graphics and technology. He noted that the improvmenets in facial animation allowed for slower-paced cutscenss.
              The unique dialogue that plays when a mission is retried was to ensure that the gameplay felt "less canned and less like Groundhog Day".
            </p>
            <p>
              Dan Houser described Niko Bellic as "a more rounded character" than those in previous games. He felt that his dual persoanlity, often saving innocent
              people, while also being a "cold-hearted killer", made him more relatable. He also felt that Niko's unfamiliarity with Liberty City allowed for the player
              to relate to him more, only driven by his vague past and relationship with Roman. When deciding on Niko's background, the writers felt that being an
              immigrant could lead to more dangerous situations, and therefore more enjoyable missions; after discussions with criminal experts, Dan Houser found that
              "the real scary characters are not born in America anymore". He felt that Niko's outside view of American culture was "fun". The team wanted Niko to be
              "more of an antihero than a hero, capable of making positive actions within his criminal world". They wanted his demeanor to reflect the weight of his
              past and choices.
            </p>
            <p>
              Niko's design underwent a few changes, but was finalized early in development. His outfit underwent several changes based on Eastern Europeans,
              particularly photographs of men fighting in winter wars in Yugoslavia and Chechnya. The primary motivation for the design was a face to convey the
              appropriate emotions and a body that could move nicely with the new animations. The in-game purchasable outfits were also designed to fit with the
              character. The team ensured that the gameplay choices presented to the player were not too extensive, as they still had to make sense to the character,
              who is driven by the people around him. Dan Houser felt that the missions in San Andreas had become too linear, and wanted to present choices to the
              player in Grand Theft Auto IV.
            </p>
            <p>
              The writers found that Niko neede a motivation to come to America, so they created his cousin, Roman. Dan Houser felt that the two could
              not be brothers as there would be a deeper level of familiarity than necessary. He described the two as a double act, with Roman's fantasist
              charm playing off Niko's tough cynicism. The team gave other non-playable characters (NPCs) more definable behavior and dialogue to make
              them feel more alive. The writers initially considered having a smaller group of characters, but found that the story became boring and that
              players were less likely to explore the world. The stranger characters found in the game world were based on the "crazy people" that
              populate New York, according to Dan Houser, which in previous games were only able to be captured through radio stations or mild pedestrian
              behavior. The team based the ethnicity, clothing, and behavior of the NPCs on the photographs and videos that they captured around New York,
              divided into different areas; they created mood boards for each location. The NPCs also converse in different languages.
            </p>
            <h3 className="article-heading-3" id="3.3">Art design</h3>
            <p>
              Grand Theft Auto IV sees a shift in the series to a more realistic and detailed style and tone, partly resulted of the transition to
              consoles which offered high-definition graphics and the new and improved capabilities of such consols. The development team worked to
              represent the upgrade in quality across all design aspects while maintaining the coherence of the previous games. The team ook the game's
              development as an opportunity to "strip things back and start again", refining the art style without losing the style of the series; they
              distanced the game from the "cartoon-like style" of its predecessors while creating a new style that was consistent across all aspects of
              the game. Garbut found the increased demand of detail brought on by the advanced technology daunting. A technique used to make the visuals
              look real was to avoid harsh edges, instead blending surfaces together to make the world look dirty and lived-in. The props department
              created multiple variations of different objects to make the world more interesting and unique. Grand Theft Auto IV was the first
              contemporary game in the series since 2001's Grand Theft Auto III; the team felt that enough time had passed to avoid feeling repetitive.
              The types of in-game vehicles were decided upon early in development, after which the vehicles department begin creating the design. The
              vehicles are not based on specific real-life counterparts, but take elements from several, with some original ideas by the developers.
            </p>

            <h3 className="article-heading-3" id="3.4">Technical and gameplay design</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/b/b5/Grand_Theft_Auto_IV_motion_capture.jpg" alt="GTA IV motion capture" />
              <p>
                The process that Grand Theft Auto IV's animation underwent: (top) actors performing on stage, raw motion capture data, (bottom) in-game characters, and the final
                scene in the game.
              </p>
            </div>
            <p>
              The proprietary <Link>Rockstar Advanced Game Engine</Link> was used for Grand Theft Auto IV. Garbut found the game's technical design similar to Grand Theft Auto
              III's, with both being the first in the series released on their respective platforms. He claimed an operable game engine was not finalised until late in
              development, at which point "there's still plenty of guesswork" until optimisation near release. The characters' physical performances were recorded using motion
              capture. Up to eight actors, dressed in full suits, could perform on the motion capture stage at one time. The camera included a teleprompter for actors to read
              their scripts. Over a hundred moves would be captured each day of production. The voice acting performance were often recorded months later alongside facial
              reference capture, and an actor's voice could be composited over a different actor's physical performance. The in-game animations were crafted similarly, using a
              combination of different motion capture performances.
            </p>
            <p>
              For the gameplay animations, the team redid a lot of the work from previous games, wanting Grand Theft Auto IV to "feel next-generation." The role-playing
              elements from San Andreas were removed fairly early in development, partly due to the animation work it would have required, and because consistently needing to
              visit the gym felt antithetical in Niko's motivations. The game's targeting system was one of the first focuses of development due to the advanced technology;
              the team wanted it to feel realistic without being too technical. The cover system was a "natural addition" to the targeting. Benzies described the multiplayer as
              the hardes part of the game's development. The team wanted the multiplayer to feel like an extension of the cinematic single-player experience. Dan Houser
              described it as "a section of a film rather than the whole narrative." The developers considered adding co-operative multiplayer to the main story campaign, but
              decided it worked better as a single-player experience.
            </p>
            <p>
              When Sam Houser first showed interest in using the <Link>Euphoria</Link> software in the game, he was told it would be impossible or only limited to cutscenes,
              but some members of the team were able to make it work. Engineers from NaturalMotion worked on-site at Rockstar North for several months at a time to
              incorporate Euphoria software into the game. Rockstar also worked with Image Metrics for the game's facial animations. The facial rigs had around 100 joints, with
              a total of 300 minutes of facial animation. The scale of the project caused some issues for the animators, forcing them to have rigs completed before animation
              began. They also faced difficulty in the direction of the actor's head, either straight on when looking at the teleprompter, or down when looking at a script.
              Image Metrics head of production David Barton noted that "having realistic eyes is 90 percent of the battle", as it allows the player to believe the
              character. SpeedTree was used for in-game environment rendering.
            </p>

            <h3 className="article-heading-3" id="3.5">Music production</h3>
            <p>
              When selecting music for the in-game radio stations, music supervisor Ivan Pavlovich said "we had to pick the songs that make New York
              today what it is, but make sure they won't feel dated by the time the game comes out." The developers contacted over 2,000 people to
              obtain recording and publishing rights; they hired a private investigator to locate the relatives of late Skatt Bros. member Sean
              Delaney to license the band's song, "Walk the Night." Billboard reported that Rockstar pad as much as $5,000 per composition and
              another $5,000 per master recording per track. Developers originally considered letting players purchase music in an in-gaame record
              shop and for Niko to have an MP3 player, but both ideas were cut. DJ Green Lantern produced tracks exclusively for the game's hip-hop
              readio station <Link to="/gta/the_bean_102.7">The Bean 102.7</Link>. Record producer Bobby Konders, who owns the record label Massive
              B and hosts the in-game radio station <Link to="/gta/massive_b_soundsystem_96.9">Massive B Soundsystem 96.9</Link>, flew to Jamaica
              to get dancehall artists to re-record tracks to make references toe the boroughs of Liberty City. The Housers' father, jazz musician
              Walter Houser, provided several classic music tracks for the game.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Release"} />
          <div className="img-right img-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Grand_Theft_Auto_IV_GameSpot_launch_%28Las_Vegas%29.jpg"
            alt="GTA IV Gamestop midnight release" />
            <p>Midniht launch of Grand Theft Auto IV at a Gamestop in Las Vegas.</p>
          </div>
          <p>
            <Link to="/microsoft">Microsoft</Link>'s Peter Moore announced Grand Theft Auto IV at E3 2006 by rolling up his sleeve to reveal a temporary tattoo
            of its logo. The game became widely anticipated. Wedbush Morgan analyst Michael Pachter suggested Take-Two may delay the game from its October 16, 2007
            release date to boost 2008 financial results and avoid competing with games like <Link to="/halo/halo_3">Halo 3</Link>; Rockstar responded it was still on
            track for "late October." In August 2007, Take-Two announced the game would miss its date, delayed to their second fiscal quarter (February-Aptil) of 2008,
            citing technical difficulties with the PlayStation 3 version. IGN predicted the delay would benefit other publishers, particularly
            <Link to="/activision"> Activision</Link> with <Link to="/call_of_duty/call_of_duty_4:_modern_warfare">Call of Duty 4: Modern Warfare</Link>. On
            January 24, 2008, Rockstar announced the April 29 release date. Some gameplay features were censored for the Australian and New Zealand versions but the
            restrictions were subsequently removed. Capcom published the game in Japan on October 30, 2008.
          </p>
          <p>
            In August 2008, Rockstar announced that the game would be coming to Windows on November 18, 2008 in North America and November 21 in Europe, with
            additional development work by Rockstar Toronto. Microsoft partered with Rockstar in a $50 million deal to bring two episodic downloadable content packs
            to the Xbox 360; <Link to="/gta/grand_theft_auto_iv_the_lost_and_damned">The Lost and Damned</Link> on February 17, 2009, and
            <Link to="/gta/grand_theft_auto_iv_the_ballad_of_gay_tony"> The Ballad of Gay Tony</Link> on October 29, 2009. Dan Houser wanted the episodes to show
            "a different side of Liberty City." In January 2010, Rockstar announced that the DLC would be bundled as Episodes from Liberty City, released for
            PlayStation 3 and Windows on April 13, 2010 in North America and April 16 in Europe. Episodes from Liberty City was also bundled with the main game in
            The Complete Edition, released on October 26, 2010 in North America and October 29 in Europe. The Xbox 360 version of the game and its DLC were made
            backwards compatible with the <Link to="/xbox/xbox_one">Xbox One</Link> on February 9, 2017. In 2026, a beta build from 2007 was acquired from an Xbox 360
            development kit for £5 at a car boot sale in Edinburgh. The files were posted online, revealing some unfinished, alternative, and cut content.
          </p>
          <div>
            <h3 className="article-heading-3" id="4.1">Promotion</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Mural_ad_GTA_IV_NYC.jpg/500px-Mural_ad_GTA_IV_NYC.jpg" alt="GTA IV mural" />
              <p>The game was promoted through posters and murals on billboards and buildings, including Chinatown, New York City.</p>
            </div>
            <p>
              Industry analysts found Grand Theft Auto IV's marketing more subtle than Microsoft's marketing of Halo 3, identifying Rockstar's interest in
              controlling the output at all times. The debut trailer was released on March 29, 2007. Narrated by Niko, it depicts the open world accompanied by the
              song "Pruit-lgoe" by Philip Glass, originally composed for Godfrey Reggio's documentary Koyaanisqatsi (1982). The trailer is credited for starting the
              Rickrolling meme; after the high viewrship crashed Rockstar's website, several users re-posted the trailer, but some misleadingly played the music video
              for Rick Astley's "Never Gonna Give You Up." The second trailer was released on June 28, showcasing the physical engine and featuring "Arm in Arm (Shy
              Child Remix)" by the Boggs. Dan Houser noted that the game was "still rough" when the first trailer was released but cutscenes were "coming on board" by the
              second trailer.
            </p>
            <p>
              To unveil the game's cover art, Rockstar contracted artists to paint a mural on a wall at a secluded warehouse location, showcasing the art in a video on
              November 28, 2007. A third trailer was released on December 6, introducing some of the game's characters, such as Roman and Michelle. The trailer features
              the song "King Ring" by Russian rap artist Seryoga, which Rockstar felt captured the "melting pot mentality" of Liberty City. Dan Houser wanted the third
              trailer to capture the "visceral qualities" of the game, but focus less on the story, as the first two trailers had done. On February 8, 2008, five
              teaser trailers for the game were released, each showcasing a particular character or service within the game. Similar teaser trailers for the game were
              later released in pairs on February 21, March 7, and April 11. Another trailer, relased on March 27, showcases some scenes from the game, such as a bank
              robbery and police chase. A television commercial from GameStop debuted on April 1, focusing on the activities in Liberty City.
            </p>
            <p>
              Viral marketing strategies were used to promote the game. Wanted posters were placed around New York City promoting the game's character and website;
              billboard versions were also posted throughout the city. Murals and posters advertising the game were placed on buildings and publi transport. The Chicago
              Transit Authority (CTA) removed advertisements promoting the game from their property in April 2008; Take-Two filed a lawsuit in response, claiming that the
              CTA had violated a contract. Visitors to the website of <Link to="/gta/wktt_talk_radio">WKTT Talk Radio</Link>, a fictional radio station within the game,
              wwere offered a chance to leave a voice mail message stating their problems. Prior to leaving the message, callers were asked to read the terms and
              conditions, which revealed that some of the voice mail messages would be selected for use in the game.
            </p>
            <p>
              In the month prior to launch, Rockstar and GameStop held a competition offering up to $10,000 and a trip to New York City for the game's launch event.
              Microsoft held a similar sweepstakes competition, offering consoles, games, Microsoft Points, a baseball bat, and an invitation to the launch event as
              rewards. The official Grand Theft Auto IV website was redesigned on February 8, 2008 to show a preview of activities and locales within the game's
              world. To encourage pre-order sales, Rockstar collaborated with several retail outlets to provide a special edition version of the game. It includes a
              metal safe deposit box, an art book, and the soundtrack CD. The publisher also collaborated with <Link to="/sony">Sony</Link> to release a 40 GB
              PlayStation 3 console with a copy of the game. GameStop hosted midnight launch events at over 3,500 of its American stores, with contests and giveaways.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Critical response</h3>
            <p>
              Grand Theft Auto IV received "universal acclaim" from critics, according to review aggregator Metacritic. It is the second-highest-rated game on the
              site, and highst-rated PlayStation 3 and Xbox 360 game. Reviewers praised the narrative, open world design, and combat system. Hilary Goldstein of IGN
              felt that the game "sets a new benchmark for open-world games", and Andrew Reiner of Game Informer wrote that the game "completely changes the
              landscape of gaming."
            </p>
            <p>
              Reviewers lauded the open world design, some further complimenting the freedom that it allows the player. Seth Schiesel of The New York Times named
              the city the "real star" of the game. Official Xbox Magazine's Jon Hicks was impressed by the city, attributing this to the game's artificial
              intelligence. Robinson of Computer and Video Games considered the environment believable, and felt that the world was "utterly unmatched." Goldsten of
              IGN felt that, although Liberty City is inspired by New York, it is not beholden to it. He wrote that the city "exists in its own universe and
              rightfully so." Crispin Boyer of 1UP.com directed praise at the city's "breathtaking vistas, incredibly varied scenery, and lived-in look."
              Conversely, Jesse Constantino of GameRevolution felt that the game lacked important features common in other open world games.
            </p>
            <p>
              Reviewers praised the narrative, IGN's Goldstein accepted that the darker tone to the story were a break from series tradition. Hicks of Official
              Xbox Magazine felt surprised by the amount of depth to the story. Reiner of Game Informer wrote that the level of freedom in the game contributed to
              his enjoyment of the story. The morality choices faced by players throughout the narrative were also welcomed. 1UP.com's Boyer felt that they gave the
              game an element of "replayability." Eurogamer's Tom Bramwell considered the morality choices a fair substitute over "bosses with large health bars."
            </p>
            <div className="img-left img-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/7/7b/GTAIV_Niko_and_Dimitri.jpg" alt="Niko Bellic with Dimitri Rascalov" />
              <p>
                The game's protagonist, Niko Bellic, with the main antagonist, Dimitri Rascalov. Reviewers praised the story and characters, commending the
                morality choices faced by players.
              </p>
            </div>
            <p>
              The game's characters, particularly Niko, received positive ractions from critics. Hicks of Official Xbox Magazine and Andy Robinson of Computer and
              Video Games both called Niko "charismatic" and "likeable", stating that they preer him over previous protagonists of the series. George Walter of
              GamesRadar praised the depth of the character, and IGN's Goldsein felt that the character of Niko feels relatable when faced with different
              decisions. Jeff Gerstmann of Giant Bomb felt that Niko was "the only thing that mattered to him" as he progresed through the story, with the
              character becoming one of his favorite features of the game. Schiessel of The New York Times named Niko one of the most realised video game
              characters attributing this to the game's script, while 1UP.com's Boyer commended the use of character bonding during missions.
            </p>
            <p>
              Many reviewers found the combat system was more responsive than in previous games, particularly praising the addition of the cover system. Justin
              Calvert of GameSpot wrote that the cover system makes the game's combat a "huge improvement" over previous games. Reiner of Game Informer agreed,
              writing that the targeting system makes players feel responsible for all deaths. IGN's Goldstein praised the fluidity of the cover system, and felt
              that the auto aim mechanic is a "great help in larger battles." GamesRadar's Walter wrote that the cover system has "paved the way to a new style of
              mission." David McComb of Empire called the combat "sharp and instinctive", and Hicks of Official Xbox Magazine felt that the cover system allows
              players to execute an attack plan. In addition to the combat system, most reviewers noted the vehicles handling was more realistic than in previous
              games. Robinson of Computer and Video Games felt that the vehicle handling echoed realism, while Hickas at Offical Xbox Magazine called the vehicle
              selection "excellent." Constantino of GameRevolution praised the improvement of the game's mechanics, particularly the physics engine's advanced
              vehicle and character animations.
            </p>

            <h4 className="article-heading-4" id="5.1.1">Windows version</h4>
            <p>
              The Windows version received "universal acclaim", according to Metacritic. Reviewers liked the enhanced visuals and the additional features,
              but criticized the port for its inferiority over the console versions.
            </p>
            <p>
              The in-game features added in the port were well received. The addition of the Video Editor was met with positive reactions; GameSpot's
              Calvert called it "a great way to get creative", while Kieron Gillen of Eurogamer criticised the unpredictability in its timing. Critics
              also praised the addition of the customizable radio station, which allows players to listen to their own choice of music; Tom Chick of
              1UP.com named it the best feature of the port, and Steven Hopper of GameZone called it a "great touch". The port's upgrade to 32 concurrent
              players in the online multiplayer mode, as opposed to the console version's 16 players, was also met with positive feedback; Eurogamer's
              Gillen said that the "possibility for mayhem... increases", while Will Tuttle of GameSpy felt that the player increase "changes the action
              significantly".
            </p>
            <p>
              The port's enhanced visuals were commended by many reviewers. GameZone's Hopper considered the visuals an improvement over the original
              versions. Andy Robinson of Computer and Video Games called the visuals "impressive", while Tom Orry of VideoGamer.com called them "superb".
              Conversely, the port's system requirements, considered difficult to run with advanced settings, received criticism. Eurogamer's Gillen said
              that, though the Windows version is "the most attractive version", it's "annoyingly fiddly to get there". GameSpy's Tuttle was able to
              overlook the demanding system requirements in exchange for the game's other features.
            </p>
            
            <h3 className="article-heading-3" id="5.2">Awards</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MichaelHollickCC08_%28cropped%29.jpg/500px-MichaelHollickCC08_%28cropped%29.jpg"
                alt="Michael Hollick"
              />
              <p>Michael Hollick won at the Spike Video Game Awards for his role as Niko Bellic.</p>
            </div>
            <p>
              Grand Theft Auto IV earned awards from several critics and publications. It received Game of the Year awards from Digital Spy, the
              Entertainment Merchants Association, GameTrailers, Giant Bomb, IGN Australia, Kotaku, Los Angeles Times, The New York Times, and Time. The
              game led the nominees at the 2008 Spike Video Game Awards with eight nominations; it led the winners (tying with Metal Gear Solid 4: Guns of
              the Patriots) with three awards: Game of the Year, Best Action Adventure Game, and Best Performance by a Human Male for Michael Hollick's
              role as Niko. The following year, The Ballad of Gay Tony won Best DLC.
            </p>
            <p>
              Grand Theft Auto IV was nominated for three awards at the 9th Game Developers Choice Awards including Game of the Year, four at the 12th
              Annual Interactive Achievement Awards including Overall Game of the Year, and seven at the 5th British Academy Games Awards, tying with
              Modern Warfare for the most nominations at the latter. At IGN's Best of 2008, it won eleven awards, including Best Voice Acting across
              all three platforms and overall, and Best Story for PlayStation 3 and Xbox 360. It was nominated for Choice Video Game at the 2009 Teen
              Choice Awards.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Sales"} />
          <div>
            <p>
              Within twenty-four hours of its release, Grand Theft Auto IV sold over 3.6 million copies, equating to approximately $310 million in
              revenue. Within a week, it generated more than $500 million in worldwide revenue, equating to approximately 6 million copies sold for Take
              Two. The numbers surpassed analysts' expectations for the title. After one month of availability, the game had sold over 8.5 million
              copies. It broke three Guinness World Records on May 13, 2008: highest grossing video game in 24 hours, highest revenue generated by an
              entertainment product in 24 hours, and fastest-selling video game in 24 hours. On 11 March 2011, Take-Two announced that the game had sold
              over 20 million copies, with the Grand Theft Auto series surpassing a collective total of 100 million copies. As of July 2013, the game has
              sold over 25 million copies, making it one of the best-selling video games, and one of the best-selling games on both PlayStation 3 and Xbox
              360. All sales records broken by Grand Theft Auto IV were beaten by its successor, Grand Theft Auto V.
            </p>
            <p>
              In the United Kingdom, the game became the fastest-selling game of all time, selling over 631,000 copies in twenty-four hours. This broke the
              record set by Grand Theft Auto: San Andreas at 501,000 copies over the same period. During the first five days of availability, the game sold
              over 927,000 copies in the United Kingdom. In the United States, Grand Theft Auto IV sold 2.85 million units in its first five days. By the
              end of 2008, the game had sold over 5.18 million copies in the US. In its first four days of availability in Japan, it sold 133,000 copie
               on the PlayStation 3 and 34,000 on the Xbox 360, according to Media Create. In its first week, the Windows version of Grand Theft Auto IV
               debuted at seventh place on the weekly charts; by the second week, it had left the top ten. Based on unique user counts, the game was the
               most played Games for Windows – Live game in 2009 and 2012, and the second-most played in 2011.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Controversies"} />
          <h2 className="article-heading-2" id="7">Controversies</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Pre-release</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/JackThompsonAttorney_crop.jpg/500px-JackThompsonAttorney_crop.jpg"
                alt="Jack Thompson"
              />
              <p>
                Former attorney Jack Thompson, known for campaigning against titles from Rockstar Games, heavily criticized Grand Theft Auto IV prior to
                its release.
              </p>
            </div>
            <p>
              In 2007, then-Florida lawyer Jack Thompson, known for his campaigns against the series, stated he would take measures to prevent the sale of
              Grand Theft Auto IV to minors. On March 14, Take-Two filed a lawsuit against Thompson to preemptively restrict his attempts to ban the game
              from sale. Thompson responded by filing a countersuit accusing Take-Two of violating federal RICO statutes, committing perjury and obstruction
              of justice, and conspiring to deprive him of his civil rights. On April 20, both parties reached a settlement agreeing to drop their lawsuits:
              Thompson was barred from suing to ban the sale or distribution of Take-Two's games but able to act as counsel in lawsuits by other parties,
              while Take-Two agreed to drop the contempt of court lawsuit against Thompson regarding alleged improper conduct during the court hearings for
              Rockstar's game Bully.
            </p>

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