import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assassinscreed } from '../../data/dataAssassinsCreed'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreed = () => 
{
  useEffect(() =>
  {
    document.title = "Assassin's (franchise) - Pop Culture Wiki";
  }, []);

  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Development history"
            sub={[
              {id: "1.1", title: "Period one"},
              {id: "1.2", title: "Period two"},
              {id: "1.3", title: "Period three"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Gameplay</a></li>
          <Collapse 
            id="3"
            item="Storyline"
            sub={[
              {id: "3.1", title: "Premise"},
              {id: "3.2", title: "Story arcs"}
            ]}
          />
          <Collapse 
            id="4"
            item="Release history"
            sub={[
              {id: "4.1", title: "Main series", sub2: [
                {id: "4.1.1", title: "Assassin's Creed"},
                {id: "4.1.2", title: "Assassin's Creed II"},
                {id: "4.1.3", title: "Assassin's Creed: Brotherhood"},
                {id: "4.1.4", title: "Assassin's Creed Revelations"},
                {id: "4.1.5", title: "Assassin's Creed III"},
                {id: "4.1.6", title: "Assassin's Creed IV: Black Flag"},
                {id: "4.1.7", title: "Assassin's Creed Rogue"},
                {id: "4.1.8", title: "Assassin's Creed Unity"},
                {id: "4.1.9", title: "Assassin's Creed Syndicate"},
                {id: "4.1.10", title: "Assassin's Creed Origins"},
                {id: "4.1.11", title: "Assassin's Creed Odyssey"},
                {id: "4.1.12", title: "Assassin's Creed Valhalla"},
                {id: "4.1.13", title: "Assassin's Creed Mirage"},
                {id: "4.1.14", title: "Assassin's Creed Shadows"}
              ]},
              {id: "4.2", title: "Spin-offs", sub2: [
                {id: "4.2.1", title: "Assassin's Creed III: Liberation"},
                {id: "4.2.2", title: "Assassin's Creed: Freedom Cry"},
                {id: "4.2.3", title: "Assassin's Creed Chronicles"},
                {id: "4.2.4", title: "Assassin's Creed Nexus VR"}
              ]},
              {id: "4.3", title: "Handheld and mobile games", sub2: [
                {id: "4.3.1", title: "Assassin's Creed: Altaïr's Chronicles"},
                {id: "4.3.2", title: "Assassin's Creed: Bloodlines"},
                {id: "4.3.3", title: "Assassin's Creed II: Discovery"},
                {id: "4.3.4", title: "Assassin's Creed: Multiplayer Rearmed"},
                {id: "4.3.5", title: "Assassin's Creed: Recollection"},
                {id: "4.3.6", title: "Assassin's Creed: Pirates"},
                {id: "4.3.7", title: "Assassin's Creed: Memories"},
                {id: "4.3.8", title: "Assassin's Creed Unity: Arno's Chronicles"},
                {id: "4.3.9", title: "Assassin's Creed Rebellion"}
              ]},
              {id: "4.4", title: "Cancelled and defunct games", sub2: [
                {id: "4.4.1", title: "Assassin's Creed: Project Legacy"},
                {id: "4.4.2", title: "Assassin's Creed: Utopia"},
                {id: "4.4.3", title: "Assassin's Creed: Initiates"},
                {id: "4.4.4", title: "Assassin's Creed Identity"},
                {id: "4.4.5", title: "Untitled Civil War game"}
              ]},
              {id: "4.5", title: "Re-release compilations and collections"},
              {id: "4.6", title: "Future games", sub2: [
                {id: "4.6.1", title: "Assassin's Creed Jade"},
                {id: "4.6.2", title: "Assassin's Creed: Codename Hexe"}
              ]},
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Animus Hub</a></li>
          <Collapse 
            id="6"
            item="Other media"
            sub={[
              {id: "6.1", title: "Television"},
              {id: "6.2", title: "Film"},
              {id: "6.3", title: "Print publications"},
              {id: "6.4", title: "Audio drama"},
              {id: "6.5", title: "Board games"},
              {id: "6.6", title: "Concert"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Reception</a></li>
          <li className="sidebar-list-item"><a href="#8">Cultural impact</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Assassin's Creed (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Assassin's Creed</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://1000logos.net/wp-content/uploads/2017/08/Assassins-Creed-Logo-1536x966.png" alt="Assassin's Creed logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developers</th>
              <td className="infobox-data"><Link>Ubisoft Montreal</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data">Ubisoft</td>
            </tr>
            <tr>
              <th className="infobox-data">Games</th>
              <td className="infobox-data"><a href="#4">List of Assassin's Creed games</a></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Assassin's Creed</b> is a historical action-adventure video game series and media franchise published by <a href="#">Ubisoft</a> and developed mainly
            by its studio <a href="#">Ubisoft Montreal</a> using the game engine Anvil and its more advanced derivatives. Created by Patrice Désilets, Jade Raymond,
            and Corey May, the Assassin's Creed video game series depicts a fictional millennia-old struggle between the <a href="#">Order of Assassins</a>, who
            fight for peace and free will, and the <a href="#">Knights Templar</a>, who desire peace through order and control. The series features historical fiction,
            science fiction, and fictional characters interwined with real-world historical events and historical figures. In most games, players control a historical
            Assassin while also playing as an Assassin Initiative or someone caight in the Assassin-Templar conflict in the present day framing story. Considered
            a spirtial successor to the Prince of Persia series, Assassin's Creed took inspiration from the novel Alamut by the Slovenian writer Vladimir Bartol,
            based on the historical Hashashin sect of the medieval Iran (Persia).
          </p>
          <p>
            The first <Link to="/assassinscreed/assassins_creed_game">Assassin's Creed</Link> game was released in 2007, and the series has featured
            fourteen main installments in total, the most recent being <Link to="/assassinscreed/assassins_creed_shadows">Assassin's Creed
            Shadows</Link> in 2025. Main games in the Assassin's Creed series are set in an open world and played from the third-person view. Gameplay
            revolves around combat, stealth, and exploration, including the use of parkour to navigate the environment. The games feature both main and
            side missions, and some titles also include competitive and cooperative multiplayer game modes.
          </p>
          <p>
            A new story and occasionally new time periods are introduced in each entry, with the gameplay elements also evolving. There are three
            overarching story arcs in the series. The first five main games follow <Link>Desmond Miles</Link>, a descendant of several important
            Assassins throught history, who uses a machine called the Animus to relive his ancestors' memories and find powerful artifacts called
            Pieces of Eden in an attempt to prevent a catastrophic event, referencing the 2012 phenomenon. From
            <Link to="/assassinscreed/assassins_creed_iv_black_flag"> Assassin's Creed IV: Black Flag</Link> to
            <Link to="/assassinscreed/assassins_creed_syndicate"> Assassin's Creed Syndicate</Link>, Assassin initiates and employees of Abstergo
            Industries (a company used as a front by the modern-day Templars) record genetic memories using the Helix software, helping the Templars
            and Assassins find new Pieces of Eden in the modern world. The next three games, 
            <Link to="/assassinscreed/assassins_creed_origins"> Assassin's Creed Origins</Link>,
            <Link to="/assassinscreed/assassins_creed_odyssey"> Odyssey</Link>, and
            <Link to="/assassinscreed/assassins_creed_valhalla"> Valhalla</Link>, follow ex-Abstergo employee Layla Hassan on her own quest to save
            humanity from another disaster.
          </p>
          <p>
            The main games in the Assassin's Creed franchise have received generally positive reviews for their ambition in visuals, game design, and
            narrative, with criticism for the yearly release cycle and frequent bugs, as well as the prioritizing of role-playing mechanics in later
            titles. The series has received multiple awards and nominations, including multiple Game of the Year awards. It is commercially successful,
            selling over 200 million copies as of September 2022, becoming Ubisoft's best-selling franchise and one of the best selling video game
            franchises of all time. While main titles are produced for major consoles and desktop platforms, multiple spin-off games have been released
            for consoles, mobiles, and handheld platforms. A series of art books, encyclopedias, comics, and novels have also been published. A
            live-action film adaptation of the series was released in 2016.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Development history"} />
          <div>
            <p>
              While the games in the series have had several narrative arcs, Ubisoft views the series as currently having three periods of development
              and design philosophy. Until 2015's <Link to="/assassinscreed/assassins_creed_syndicate">Assassin's Creed Syndicate</Link>, the franchise
              was structured around single-player content, and while centering on open world spaces and incorporating several role-playing elements,
              were more action-adventure and stealth-oriented. Period two, covering from <Link to="/assassinscreed/assassins_creed_origins">Assassin's
              Creed Origins</Link> to <Link to="/assassinscreed/assassins_creed_mirage">Assassin's Creed Mirage</Link>, brought in more role-playing
              elements and live-service features to increase player engagement.
            </p>
            <p>
              Period three launched with <Link to="/assassinscreed/assassins_creed_shadows">Assassin's Creed Shadows</Link>, using lessons from the
              second perios of development to make engrossing single-player games similar to the original titles but with features to allow players to
              share achievements and content with others through a new Animus Hub system that will be integrated with all future and some earlier games.
            </p>
            <h3 className="article-heading-3" id="1.1">Period one</h3>
            <p>
              The first Assassin's Creed game originated out of ideas for a sequel for Ubisoft's video game Prince of Persia: The Sands of Time, aiming
              for the <Link>seventh generation of video game consoles</Link>. The Ubisoft Montreal team decided to take the gameplay from The Sands of
              Time into an open-world approach, taking advantage of the improved processing power to render larger spaces and crowds. Narratively, the
              team wanted to move away from the Prince being someone next in line for the throne but to have to work for it; combined with research into
              secret societies led them to focus on the Order of Assassins, based upon the historical Hashashin sect of Ismaili, who were followers of
              Shia Islam, heavily borrowing from the novel Alamut. Ubisoft developed a narrative where the player would control an Assassin escorting a
              non-playable Prince, leading them to call this game Prince of Persia: Assassin, or Prince of Persia: Assassins. Ubisoft was apprehensive to
              a Prince of Persia game without the Prince as the playable character, but this led the marketing division to suggest the name Assassin's
              Creed, playing off the creed of the Assassins, "nothing is true; everything is permitted". Ubisoft Montreal ran with this in creating a new
              intellectual property, eliminating the Prince, and basing it around the Assassins and the Knights Templar in the Holy Land during the 12th
              century. Additionally, in postulating what other assassinations they could account for throughout history, they came onto the idea of
              genetic memory and created the Animus device and modern storyline elements. This further allowed them to explain certain facets of
              gameplay, such as accounting for when the player character is killed, similiar to The Sands of Time.
            </p>
            <p>
              After Assassin's Creed was released in 2007, Ubisoft Montreal said they looked to "rework the global structure" in developing the sequel,
              <Link to="/assassinscreed/assassins_creed_ii"> Assassin's Creed II</Link>. They felt that parkour was underutilized in the first game and
              designed the world in the sequel to feature freerun highways to make it easier to enter into parkour moves, for example using rooftops to
              escape pursuits. The change in setting meant that the game would feature a new cast of characters, including a new protagonist,
              <Link> Ezio Auditore da Firenze</Link>. Assassin's Creed II also brought in more use of crowds to hide in plain sight that the developers
              had seen used in Hitman: Blood Money, adding more to the concept of social stealth as a gameplay option. Finally, Ubisoft Montreal
              completely reworked the repetitive mission structure from the first game through numerous side activities, collectibles, and secrets.
              These additions became a central part of the series going forward as well as other Ubisoft games like Watch Dogs, Far Cry, and Tom
              Clancy's Ghost Recon. Assassin's Creed II was followed by two direct sequels,
              <Link to="/assassinscreed/assassins_creed_brotherhood"> Assassin's Creed: Brotherhood</Link> and
              <Link to="/assassinscreed/assassins_creed_revelations"> Assassin's Creed: Revelations</Link>, which also featured Ezio as the main
              protagonist and introduced the ability for players to recruit NPCs as Assassins and manage them in missions.
            </p>
            <p>
              <Link to="/assassinscreed/assassins_creed_iii">Assassin's Creed III</Link> originated from both Ubisoft Montreal, who wanted to progress
              the series' narrative forward in time, and to an unattached project that had been developed at Ubisoft Singapore and featured naval ship
              combat. As the main team had settle into the American Revolution period for the game, they found the ship-to-ship combat system fitted
              with the story and redesigned the setting to incorporate it further. Another major change in Assassin's Creed III was transitioning the
              parkour and freerun systems to work in the natural woodlands of 18th century Massachusetts and New York. This further allowed the adding
              of trees and other vegetation within the city areas themselves, not just as part of the parkour systems, but to add more varied
              environments, which would continue as part of the series' ongoing design.
            </p>
            <p>
              For Assassin's Creed III's sequel, Assassin's Creed IV: Black Flag, the Ubisoft team built upon the foundation of its predecessor,
              particularly with regards to the naval gameplay, merging it seamlessly with the land-based gameplay. The team also used the game as a
              chance to address aspects of the series' storyline. Choosing to focus on an outsider's perspective to the Assassin-Templar conflict, they
              set the game around the Golden Age of Piracy, with the protagonist, <Link>Edward Kenway</Link>, starting out as a pirate who initially
              becomes involved in the conflict with the prospect of wealth. Similarly, after the conclusion of <Link>Desmond Miles</Link>' story arc in
              Assassin's Creed III, the modern day segments put players in the role of a nameless individual controlled from a first-person perspective.
              The team chose this approach because they believed it allowed players to more easily identify themselves in their character. This trend
              would continue in the series until Assassin's Creed Syndicate.
            </p>
            <p>
              Development of <Link to="/assassinscreed/assassins_creed_unity">Assassin's Creed Unity</Link> began shorly after the completion of =
              Brotherhood in 2010, with the core development team splitting off during the early stages of development on Assassin's Creed III. As the
              first game in the series to be released exclusively for the <Link>eighth generation of video game consoles</Link>, Unity featured a
              graphical and gameplay overhaul. The setting chosen for the game was Paris during the early years of the French Revolution, with players
              taking control of a new Assassin named <Link>Arno Dorian</Link>. After Unity, Ubisoft released Assassin's Creed Syndicate in 2015.
            </p>
            <h3 className="article-heading-3" id="1.2">Period two</h3>
            <p>
              Following Syndicate's release, Ubisoft decided that the series needed a major reinvention across both gameplay and narrative. It was decided
              to make the next game, Assassin's Creed Origins, closer to a role-playing video game than a stealth-action game, which would also bring a
              game with many more hours of play than previous titles. Some long-standing features of the series were eliminated for this purpose, such as
              the social stealth mechanic. This changed how missions were presented, rather than being linearly directed through the Animus, the player
              character could meet various quest givers in the game's world to receive missions. From the narrative side, Ubisoft placed the game before
              the formation of the Assassin Brotherhood in Ancient Egypt and made the player character, <Link>Bayek of Siwa</Link>, a medjay that people
              would respect and seek the help of. The modern-day storyline also shifted back to a single character, <Link>Layla Hassan</Link>. The
              developers limited the number of playable sequences for her character compared to previous games but gave them more meaning, such as
              allowing the player to explore Layla's laptop with background information on the games' universe.
            </p>
            <p>
              Origins was followed in 2018 by Assassin's Creed Odyssey, which shifted the setting to Classical Greece and followed a similar approach to
              its predecessor but with more emphasis on the role-playing elements. 2020's Assassin's Creed Valhalla, set in medieval England and Norway
              during the Viking Age, continued the same style as Origins and Odyssey. The developers recognized feedback from the previous two games and
              brought back the social stealth elements, as well as the concept of a customizable home base that was first introduced in Assassin's Creed
              II.
            </p>
            <p>
              In 2023, Ubisoft released Assassin's Creed Mirage, a smaller title which sought to pay tribute to the franchise's earlier installments by
              focusing on stealth and assassinations over its predecessor's role-playing elements. The game started development as an expansion for
              Valhalla before being turned into a standalone release, and was set in 9th century Baghdad during the Islamic Golden Age, a decade before
              the events of Valhalla, to which it served as a prequel.
            </p>
            <h3 className="article-heading-3" id="1.3">Period three</h3>
            <p>
              In 2022, Ubisoft announced several additional games for the series, including Assassin's Creed Shadows, set in Japan during the Sengoku
              period, and Assassin's Creed: Codename Hexe, rumored to be set in Central Europe during the 16th century.
            </p>
            <p>
              Alongside the release of Assassin's Creed Shadows, Ubisoft introduced the Animus Hub, intended to serve as a central hub for the
              Assassin's Creed games from Shadows onward. Originally teased as Assassin's Creed Infinity, the Animus Hub was described by its
              executive producer, Marc-Alexis Côté, as a "new design philosophy" for the series, as well as a hub that would provide the release of
              future games. According to Côté in 2024, the modern-day narrative of the series has become haphazard after the death of Desmond Miles in
              Assassin's Creed III through the introduction of Layla Hassan in Assassin's Creed Origins due to the lack of a main character and the
              number of studios involved, and Infinity aimed to re-establish the modern-day side of the series. The Animus Hub is not a launcher, but
              instead a feature integrated into Shdadows future games, and select games from period two which incorporates the modern-day storyline of
              the series.
            </p>
            <p>
              As part of Ubisoft's financial troubles in the early 2020s, Ubisoft and Tencent created a separate subsidiary, Vantage Studios, in 2025 for
              handling of Assassin's Creed and the other major Ubisoft franchises, Far Cry, and Rainbow Six. As part of this, Côté left Ubisoft in
              October 2025, which he claimed was due to the series lead being transferred from him to a new position within Vantage Studios.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Gameplay"} />
          <div>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/8/86/Assassins_Creed_3_Gameplay_segment.gif" 
                alt="Assassins_Creed_3_Gameplay_segment" 
              />
              <p>An Assassin's Creed III demo showing the parkour gameplay</p>
            </div>
            <p>
              The Assassin's Creed games are centered around one or more fictional members of the Order of the Assassins. Their memories are experienced by
              an in-game character in the modern-day period through a device called the Animus and its dervications. The Animus allows the user to explore
              these memories passed down via genetics. Within the context of the game, this provides a diegetic interface to the real-world player of the
              game, showing them elements like health bars, a mini-map, and target objectives as if presented by the Animus. Additionally, should the
              player cause the historical character to die or fail a mission, this is rectified as desynchronization of the genetic memory, allowing the
              player to try the mission again. Through the Animus interface, the player can retry any past mission already completed; for example, in
              Assassin's Creed: Brotherhood, the player achieves better synchronization results by performing the mission in a specific manner, such as by
              only killing the mission's target. The Animus also imparts special abilities to the modern-day character that helps them to see their target
              in a crowd or other unique points of interest.
            </p>
            <p>
              While playing as the Assassin characters, the games are generally presented from a third-person view in an open world environment,
              focusing on stealth and parkour. The games use a mission structure to follow the main story, assigning the player to complete an
              assassination of public figureheads or a covert mission. Alternatively, several side missions are available, such as mapping out the
              expansive cities from a high perch followed by performing a leap of faith into a haystack below, collecting treasures hidden across the
              cities, exploring ruins for relics, building a brotherhood of assassins to perform other tasks, or funding the rebuilding of a city
              through purchasing and upgrading of shops and other features. At times, the player is in direct control of the modern-day character who, by
              nature of the Animus use, has learned Assassin techniques through the bleeding effect, as well as their genetic ability of Eagle Vision,
              which separates friend, foe, and assassination targets by illuminating people in different colors.
            </p>
            <p>
              The games use the concept of active versus passive moves, with active moves, such as running, climbing the sides of buildings, or jumping
              between rooftops, more likely to alert the attention of nearby guards. When the guards become alerted, the player must either fight them or
              break their line of sight and locate a hiding place, such as a haystack or a well, and wait until the guards' alert is reduced. The combat
              system allows for a number of unique weapons, armor, and moves, including the use of a hidden blade set in a bracer attached at the
              Assassin's wrist with a blade ejected via-spring mechanism, which can be used to perform surreptitious assassinations.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Storyline"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Premise</h3>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Abstergo_2.png" 
                alt="Abstergo logo" 
              />
              <p>
                The logo of the fictional Abstergo Industries, whose slogan is "We change the world. Every day, in a hundred different ways."
              </p>
            </div>
            <p>
              The Assassin's Creed games primarily revolve around the rivalry and conflict between two ancient secret societies: the Order of Assassins,
              who represent freedom, and the Knights Templar, who represent order. Versions of these societies have existed for centuries, with the
              Assassins seeking to stop the Templars from gaining control of the Pieces of Eden, artifacts that can override free will to control
              people's minds.
            </p>
            <p>
              These artifacts are remnants of an ancient species pre-dating humanity called the Isu, or Precursors, which created humanity to live in
              peace alongside them. The Isu ensured humans could not rise against them by creating the Pieces of Eden to control them. When the first
              hybrid Isu-human beings emerged, named <Link>Adam</Link> and <Link>Eve</Link>, they were immune to the effects of the Pieces of Eden.
              They stole the Pieces of Eden, which led to a great war that ended when a massive solar flare devastated the surface of the Earth. The
              surviving Isu subsequently died out while humanity thrived. All that remained of the Isu were traces of their memories in the world's
              mythologies and religions, while the Piece of Eden became lost to time, many of them hidden within underground vaults known as Temples.
            </p>
            <p>
              Before their demise, three Isu, <Link>Minerva</Link>, <Link>Juno</Link>, and <Link>Jupiter</Link>, attempted to prepare humanity for
              another solar flare they knew would come millennia later. Using a device called the Eye, which allowed them to see into possible futures,
              Minerva and Jupiter left behind messages to guide humanity to the Grand Temple, which housed the global aurora borealis device that could
              activate a protective shield around the Earth. However, Juno saw humanity as a threat and attempted to sabotage Minerva and Jupiter's
              plan. Minerva and Jupiter were forced to destroy Juno and trapped her consiousness within the Grand Temple, unaware that Juno had
              modified the global aurora borealis device to release her consciousness upon activation.
            </p>
            <p>
              The series itself takes place in the modern era, in which the Templars have established the mega-corporation Abstergo Industries.
              Abstergo has ddeveloped a device, the Animus, whose users can relive the memories of their ancestors through their genetic material.
              Abstergo has kidnapped people who are descendants of past Assassins to locate hidden Pieces of Eden via the Animus. A user of the
              Animus can move about in simulated memories as their ancestor, but performing actions outside the bounds of what their ancestor did can
              lead to desynchronization of the memory. Extended use of the Animus creates a "bleeding effect" that gives users some of the skills and
              capabilities they experienced with their ancestor, but also affects their mental well-being, as the user begins to confuse their
              ancestor's memories with their own.
            </p>

            <h3 className="article-heading-3" id="3.2">Story arcs</h3>
            <p>
              The first five main games in the series focus on Desmond Miles, a bartender and former Assassin who learns he is a descendant of several
              important Assassins throughout history, including <Link>Altaïr Ibn-LaʼAhad</Link> from the Middle East during the Third Crusade; Ezio
              Auditore da Firenze from the Italian Renaissance; and <Link>Ratonhnhaké:ton</Link> (commonly known as Connor), a half-Mohawk, half-British
              Assassin during the American Revolution. Desmond is used by Abstergo to find Pieces of Eden but is rescued by <Link>Lucy Stillman</Link>, 
              an undercover agent for the Assassins. With the help of two other Assassins, <Link>Shaun Hastings</Link> and <Link>Rebecca Crane</Link>,
              and later <Link>William Miles</Link>, Desmond's father and the leader of the modern-day Assassins, the group continue to explore Desmond's
              genetic memories in the hopes of locating the Pieces of Eden before Abstergo. In the process, they learn about the Isu and come into
              contact with Juno, who forces Desmond to kill Lucy, revealed to be a double agent for the Templars. The group ultimately finds the Grand
              Temple, and Desmond activates the global aurora borealis device in time to block the solar flare, at the cost of his own life.
            </p>
            <p>
              Starting with Assassin's Crred IV: Black Flag, Abstergo has refined the Animus technology to allow anyone to experience memories from the
              genetic material of another person, allowing the Templars to continue their search for Pieces of Eden under the guise of creating
              entertainment products. In Black Flag, players assume the role of an unnamed Abstergo employee tasked with researching the memories of
              <Link>Edward Kenway</Link>, a pirate-turned-Assassin and Connor's grandfather. During their work, the player is blackmailed by a fellow
              employee, John Standish, into acquiring and delivering sensitive information on Abstergo's activities to the Assassins. John is later
              revealed to be a Sage, a human reincarnation of Juno's husband <Link>Aita</Link>, who is trying to resurrect her, though he is killed by
              Abstergo before he can succeed.
            </p>
            <p>
              By the time of Assassin's Creed Unity, Abstergo has begun distributing the Animus technology via a video game console called the Helix,
              tapping into an extensive, unaware player base to help them locate the remains of various Sages as part of the Phoenix Project, an attempt
              to recreate the genetic structure of the ISU. The player character is recruited into the Assassins and tasked with exploring the memories
              of <Link>Arno Dorian</Link>, an Assassin during the French Revolution, so that the modern-day Assassins can retrieve the body of a Sage and
              hide it from Abstergo. Despite the Assassins' efforts, by the start of Assassin's Creed Syndicate, Abstergo has collected enough DNA
              samples from other Sages to move forward with the Phoenix Project. The player character is again contacted by the Assassins and relives the
              memories of <Link>Jacob and Evie Frye</Link>, twin Assassins from Victorian England, to find a Piece of Eden that Abstergo requires for the
              next phase of the Phoenix Project. Although the Assassins beat the Templars to it, the latter manages to steal the Piece of Eden and escape
              with it, whereupon it is revealed that Juno is manipulating various Abstergo employees to further her plans of being resurrected.
            </p>
            <p>
              A new storyline is introduced in Assassin's Creed Origins focusing on Abstergo researcher <Link>Layla Hassan</Link>. While on an assignment
              to recover an artifact from Egypt, Layla stumbles upon the remains of the <Link>Medjay Bayek</Link> and his wife <Link>Aya</Link>,
              co-founders of the Hidden Ones, the Assassins' precursor. Against Abstergo's orders, Layla uses her personal Animus to relive Bayek's and
              Aya's memories, causing the Templars to mark her for death. She is rescued by William Miles, who then invites her to join the Assassins
              for her own protection. In Assassin's Creed Odyssey, Layla recovers the Spear of Leonidas, an Isu artifact from which she extracts the DNA
              of Leonidas' grandchildren, <Link>Alexios and Kassandra</Link>. Through their memories, Layla locates the Staff of Hermes Trismegistus,
              another Piece of Eden, which is guarded by one of the siblings (canonically Kassandra), still alive due to being sustained by the Staff.
              Kassandra relinquishes the Staff to Layla, who is prophesied to one day restore balance to the world, and passes away.
            </p>
            <p>
              In Assassin's Creed Valhalla, Earth is facing yet another disaster, as its magnetic field has been continually strengthening since
              Desomd's activation of the global aurora borealis device eight years prior. Layla exhumes the remains of Elvor Varinsdottir, a 9th-century
              Viking, and from her memories, she learns of an Isu temple in Norway. Layla travels to the temple and enters the Grey, a virtual world
              created by the Isu, where she meets both the Reader (implied to be Desmond's preserved consciousness) and Baslm Ibn Ishaq, a Hidden One
              and the reincarnation of the Isu <Link>Loki</Link>, who was trapped in the Grey by Elvor. Basim helped Layla stop the disaster but then
              abandons her in the Gray and escapes back to the real world, where he joins the modern-day Assassins. In Assassin's Creed Mirage, the
              Assassins use a sample of Bsalm's DNA to relive his memories of his time as a Hidden One during the Islamic Golden Age, in order to learn
              more about his nature as a reborn Isu.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Release history"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Main series</h3>
            <div className="row">
              {assassinscreed.map((ac) => (
                <div className="col-4" key={ac.id}>
                  <Card 
                    route={ac.route}
                    img={ac.img}
                    alt={ac.title}
                    imgStyle="card-img-vertical"
                    title={ac.title}
                  />
                </div>
              ))}
            </div>

            <h4 className="article-heading-4" id="4.1.1"><Link to="/assassinscreed/assassins_creed_game">Assassin's Creed</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Assassin%E2%80%99s_Creed.svg/400px-Assassin%E2%80%99s_Creed.svg.png" 
                alt="Assassin's Creed 1 logo" 
              />
              <p>Assassin's Creed logo</p>
            </div>
            <p>
              The first game in the series was released in November 2007 for the <Link>PlayStation 3</Link> and <Link>Xbox 360</Link>, and in April 2008
              for Microsoft Windows. It features a historical recreation of the Holy Land (primarily the cities of Masyaf, Jerusalem, Acre, and Damascus)
              in the late 12th century. Its narrative includes real historical figures and events from that time period. The storyline consists of two
              portions: one set during the modern-day, which follows Desmon Miles; and one set in 1191, which follows Desmond's ancestor,
              Altaïr Ibn-LaʼAhad, a member of the Assassin Order during the time of the Third Crusade. Desmond's story begins with his abduction by
              pharmaceutical company Abstergo Industries, whose lead scientist, <Link>Dr. Warren Vidic</Link>, forces him to explore Altaïr's memories
              through a machine called the Animus that allows him to connect with his ancestors' DNA. In doing so, Abstergo hopes to find powerful
              artifacts called Pieces of Eden, which the Assassins and their rivals, the Knights Templar, have fought over for centuries. Altaïr's story
              begins with his demotion to the rank of Novice Assassin after he botches an attempt by the Assassins to recover a Piece of Eden, the
              Apple of Eden, from the Templars. To redeem himself, Altaïr is tasked with assassinating nine Templar targets across the Holy Land.
            </p>
            <p>
              Assassin's Creed introduced core elements that remained in the rest of the series. Players can freely explore the game's open world,
              making use of Altaïr's parkour and climbing skills to navigate the environment. The game also features refined hack-and-slash combat,
              with players able to block and counter-attacks, and stealth mechanics, such as hiding in crowds of people, which allow players to
              aboid detection by enemies or lose pursuing foes. Although players can choose the order in which they kill their main targets, the mission
              design was seen as linear and repetitive because payers had to complete several side quests before each assassination. The side quest
              prerequisite was one of the most criticized aspects of the game, so it was abandoned in future games.
            </p>

            <h4 className="article-heading-4" id="4.1.2"><Link to="/assassinscreed/assassins_creed_ii">Assassin's Creed II</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Assassin%E2%80%99s_Creed_II_v1_logo.svg/500px-Assassin%E2%80%99s_Creed_II_v1_logo.svg.png" 
                alt="Assassin's Creed 2 logo" 
              />
              <p>Assassin's Creed II logo</p>
            </div>
            <p>
              Assassin's Creed II is a direct sequel to the first game and was released in November 2009 for the PlayStation 3 and Xbox 360, in March 2010
              for Windows, and in October 2010 for OS X. The modern-day narrative again follows Desmond, who escapes from Abstergo (revealed at the end of
              the previous game as a front for the modern-day Templars) with the aid of Assassin mole Lucy Stillman and is taken to her team's hideout.
              Hoping to train Desmond as an Assassin, they put him in the Animus 2.0, where he begins to suffer from the bleeding effect; this allows
              Desmond to gain his ancestors' skills, but it also damages his mind, as he begins to involuntarily experience flashes of his ancestors'
              memories outside of the Animus. Meanwhile, the main narrative takes place at the height of the the Italian Renaissance in the later 15th
              century and follows Desmond's Italian ancestor Ezio Auditore da Firenze, a young nobleman from <Link>Florence</Link> who is force to
              become an Assassin after his father and brothers are killed by the Templars. During his journey to avenge their deaths, Ezio makes allies
              such as <Link>Leonardo da Vinci</Link> and <Link>Caterina Sforza</Link> and combats enemies such as the <Link>Pazzi</Link> and
              <Link> Barbarigo</Link> families and <Link>Rodrigo Borgia</Link>. Ezio also comes into contact with technology left behind by the First
              Civilization, a race that created humanity and the Pieces of Eden and who were wiped out by a catastrophic event.
            </p>
            <p>
              Similar to the first game, Assassin's Creed II incorporates historical events into its narrative and features recreations of several cities
              from the time period it is set in (in this case, Florence, <Link>Venice</Link>, <Link>Forli</Link>, <Link>San Gimignano</Link>, and
              <Link> Monteriggioni</Link>). Missions are divided into main story missions, themselves into memory sequences reflecting points in Ezio's
              life, and side missions that can be accomplished at any time; this approach to mission structure remains consistent in the other games in
              the series. The <Link>Villa Auditore</Link> in Monteriggioni, which acts as the Assassins' headquarters for most of the game, provides
              several functions that can be expanded on by paying for upgrades of surrounding buildings, or by purchasing artwork, weapons, and armor for
              the villa; in turn, the villa will generate wealth for the player at a rate influenced by the upgrades and acquisition of these items.
            </p>

            <h4 className="article-heading-4" id="4.1.3"><Link to="/assassinscreed/assassins_creed_brotherhood">Assassin's Creed: Brotherhood</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Assassin%27s_Creed_Brotherhood_logo.svg/500px-Assassin%27s_Creed_Brotherhood_logo.svg.png" 
                alt="Assassin's Creed Brotherhood logo" 
              />
              <p>Assassin's Creed: Brotherhood logo</p>
            </div>
            <p>
              Assassin's Creed: Brotherhood is the sequel to Assassin's Creed II, and was released in November 2010 for the PlayStation 3 and Xbox 360, in
              March 2011 for Windows, and in May 2011 for OS X. The game begins immediately after the events of its predecessor, at the end of which
              Desmond was warned by Minerva, a member of the First Civilization, about a solar flare that will hit the Earth and kill most of humanity in
              a few months. Desmond and his team travel to Monteriggioni, where they set up a new base and use the Animus to find the Temple of Juno,
              another First Civilization member, which houses Ezio's own Apple of Eden and the key to stopping the solar flare. The main narrative
              continues the story of Ezio, who travels to <Link>Rome</Link>, the center of Templar power in Italy, to re-establish the Assassin
              Brotherhood there and defeat the Borgias, who have attacked Monteriggioni and stolen the Apple of Eden.
            </p>
            <p>
              Brotherhood shares many of the same features as the previous game though it takes place primarily in one city: Rome. Like the Villa
              Auditore, the player can spend money to buy and upgrade shops and other facilities throughout the city to increase the revenue they can
              collect from it; however, the player will be required to destroy Borgia towers that control various sections of the city before they can
              do so. The Brotherhood of Assassins is introduced, by which, after saving citizens from certain events, the player can recruit these
              citizens as Assassins; they cn then be dispatched to remote locations across Europe to gain experience and money or can be called in to
              help the player directly in a mission. For the first time in the series, the game features online multiplayer, in which players assume the
              role of Abstergo employees who, through the use of the Animus, relive the genetic memories of Renaissance Templars in various game modes.
              It was the last game to feature Assassin's Creed creator Patrice Désilets, as the creative director of the series.
            </p>

            <h4 className="article-heading-4" id="4.1.4"><Link to="/assassinscreed/assassins_creed_revelations">Assassin's Creed Revelations</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/d/d9/Assassins_Creed_Revelations_Cover.jpg" 
                alt="Assassin's Creed Revelations logo" 
              />
              <p>Assassin's Creed Revelations logo</p>
            </div>
            <p>
              Assassin's Creed Revelations is the final installment in the Ezio Trilogy and was released in November 2011 for the PlayStation 3, Xbox 360,
              and Windows. Following the events of Brotherhood, where he was forced by Juno to kill Lucy (who, unbeknownst to him, was a Templar double
              agent), Desmond has fallen into a coma and was put back into the Animus to save his mind. Within the computerzied core of the Animus,
              Desmond meets the preserved consciousness of Abstergo's previous test subject, <Link>Clay Kaczmarek</Link>, who explains that Desmond's
              mind must achieve full synchronization with Altaïr and Ezio, or else he will fall into dementia. Desmond continues exploring the memories
              of Ezio, who, a few years after the events of Brotherhood, travels to Constantiople to find five keys needed to open a library built by
              Altaïr, which is said to contain the power to end the Assassin-Templar conflict. In Constantinople, Ezio becomes caught in a war of
              succession between Sultan Bayezid II's sons, Selim and Ahmet, and must confont a conspiracy masterminded by the Byzantine Templars, who are
              taking advantage of the chaos to try and reclaim the city. 
            </p>
            <p>
              Originally, Revelations was announced as Assassin's Creed: Lost Legacy, and conceptualized as a Nintendo 3DS title focusing on Ezio
              traveling to Masyaf to explore Altaïr's legacy and uncover the origins of the Assassin Brotherhood. Lost Legacy was later announced as
              cancelled on July 15, 2011, after Ubisoft decided to expand the idea furher, cancel the 3DS development, and shift all development duties
              towards PlayStation 3, Xbox 360, and PC to release the game as a full-fledged main installment. The original premise remained and evolved
              into the plot seen in the final game. Included were many new systems and additional weaons such as bomb-crafting and an expanded
              Assassin recruitment system. The multiplayer mode returns in Revelations, with more characters, modes, and maps; players once again assume
              the role of Templars in training and, as they level up and rise in the ranks, they are told more about Abstergo's history.
            </p>

            <h4 className="article-heading-4" id="4.1.5"><Link to="/assassinscreed/assassins_creed_iii">Assassin's Creed III</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/2/29/Assassin%27s_Creed_III_Game_Cover.jpg" 
                alt="Assassin's Creed III logo" 
              />
              <p>Assassin's Creed III logo</p>
            </div>
            <p>
              Assassin's Creed III was released in October 2012 for the PlayStation 3 and Xbox 360 and in November 2012 for the Wii U and Windows. A
              remastered version of the game with enhanced visuals was released for Windows, <Link>PlayStation 4</Link>, and <Link>Xbox One</Link> in
              March 2019, and for Nintendo Switch in May 2019. This is the final game in the series to follow Desmond, who travels to the First
              Civilization's Grand Temple in New York in search of the technology needed to prevent the solar flare set to hit the Earth soon.
              Discovering he needs a key to access the Temple's inner chambers. Desmond uses the Animus to relive the memories of two of his ancestors
              who were in possession of the key at various points in time: <Link>Haytham Kenway</Link>, a British Templar from the 18th century who
              travels to the American colonies to find he Grand Temple; and <Link>Ratonhnhaké:ton</Link> (later known as Connor), Haytham's half-Mohawk
              son, who becomes an Assassin to exact revenger on the Templars, whom he blames for the destruction of his village and the death of his
              mother. To this end, Connor later becomes involved in the American Revolution, helping the Patriot cause while clashing with Haytham's
              faction of Templars, who hope to use the Revolution to further their own goals.
            </p>
            <p>
              Assassin's Creed III is structured similarly to the previous games, with missions taking place in an open-world map based on Colonial
              Boston and New York. The game offers a large wilderness area in the form of the Frontier and the Davenport Homestead, where the player
              can hunt animals for materials, which subsequently can be used to construct goods to be traded and sold throughout the colonies. Naval
              battles also debut in the series, wherein the player must steer a warship named the Aquila in dangerous waters and perform ship-to-ship
              combat with cannons and mounted guns. The multiplayer mode from the previous two games returns in Assassin's Creed III with new game modes,
              characters, and maps inspired by Colonial America, but this time no major narrative elements are included.
            </p>

            <h4 className="article-heading-4" id="4.1.6"><Link to="/assassinscreed/assassins_creed_iv_black_flag">Assassin's Creed IV: Black Flag</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/2/28/Assassin%27s_Creed_IV_-_Black_Flag_cover.jpg" 
                alt="Assassin's Creed IV: Black Flag logo" 
              />
              <p>Assassin's Creed IV: Black Flag logo</p>
            </div>
            <p>
              Assassin's Creed IV: Black Flag was released in October 2013 for the PlayStation 3, Xbox 360, and the Wii U and in November 2013 for the
              PlayStation 4, Xbox One, and Windows. Following the events of Assassin's Creed III, at the end of which Desmond sacrificed himself to save
              the Earth, Abstergo retrieved samples from his body to continue exploring the memories of his ancestors. The player character is an
              unnamed Abstergo employee tasked with analyzing the memories of <Link>Edward Kenway</Link>, an 18th-century pirate and Connor's grandfather,
              ostensibly to gather material for an Animus-powered interactive film; in reality, Abstergo are searching for the Observatory, a First
              Civilization structure that allows the user to see through the eyes of a subject to find them anywhere on the planet. As Edward, the
              player must unravel a conspiracy between high-ranking Templars to manipulate the British and Spanish empires into locating the Sage, later
              identified as <Link>Bartholomew Roberts</Link>, who is the only man that can lead them to the Observatory.
            </p>
            <p>
              Black Flag retains many gameplay mechanics from Assassin's Creed III, including the ship-based exploration and combat. For the first time in
              the series, naval exploration is a major part of the game; players can captain Edward's ship, the Jackdaw, and battle rival ships or hunt
              sea animals. The game includes a large open world spanning the <Link>West Indies</Link>, with players able to explore the cities of
              <Link> Havana</Link>, <Link>Nassau</Link>, and <Link>Kingston</Link>, as well as numerous islands, forts, and sunken ships. A multiplayer
              mode is once again included, although it is entirely land-based.
            </p>

            <h4 className="article-heading-4" id="4.1.7"><Link to="/assassinscreed/assassins_creed_rogue">Assassin's Creed Rogue</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Assassin%27s_Creed_Rogue.jpg" 
                alt="Assassin's Creed Rogue logo" 
              />
              <p>Assassin's Creed Rogue logo</p>
            </div>
            <p>
              Assassin's Creed Rogue is the final game in the series to be developed for the <Link>seventh generation of consoles</Link>, being released
              for the PlayStation 3 and Xbox 360 in November 2014, and for Windows in March 2015. A remastered version of the game was released for the
              PlayStation 4 and Xbox One in March 2018. In the present day, players again take on the role of an unnamed Abstergo employee, tasked with
              researching the memories of <Link>Shay Patrick Cormac</Link>, an 18th century Assassin who, for reasons unknown to Abstergo, defected to
              the Templars. During their investigation, the player accidentally trips a hidden memory file that infects the Animus servers. They must
              complete Shay's memories to clean the servers while Abstergo is put under lockdown. The main narrative takes place during the
              <Link> Seven Years' War</Link>, and follows Shay, who starts out as a talented, but insubordinate Assassin trainee. After witnessing the
              Assassins' hypocrisy and willingness to sacrifice civilians in their blind pursuit of Pieces of Eden, Shay betrays them and joins the
              Templars, helping his newfound allies hunt down members of his former Brotherhood to prevent them from endangering more innocent lives.
              Shay's story is set between the events of Assassin's Creed IV: Black Flag and Assassin's Creed III, and is meant to fill the gaps between
              their respective narratives, while also having "a crucial link to the Kenway saga" according to Ubisoft, as well as to Assassin's Creed
              Unity. Several major characters from Assassin's Creed III and Black Flag make appearances in the game, such as Haytham Kenway, Achilles
              Davenport, and Adéwalé.
            </p>
            <p>
              In March 2014, a new Assassin's Creed game code-named Comet was revealed to be in development for the PlayStation 3 and Xbox 360, set to
              release later that year alongside Unity. By the end of the month, additional reports indicated that Comet would be set around 1758 New
              York City, and would feature sailing on the Atlantic Ocean. The game would be a direct sequel to Black Flag, and would be the first to
              feature a Templar as the main protagonist. In May 2014, Guillemot stated that, "for the foreseeable future". Assassin's Creed games would
              continue releasing on the last generation PlayStation 3 and Xbox 360, despite the franchise moving to the current generation PlayStation 4
              and Xbox One with Unity. On August 5, Ubisoft officially announced the game as Assassin's Creed Rogue. While the game reuses many assets
              from Black Flag, a number of new systems and weapons were included, such as an air rifle and refined naval combat, and the multiplayer
              aspect has been removed.
            </p>

            <h4 className="article-heading-4" id="4.1.8"><Link to="/assassinscreed/assassins_creed_unity">Assassin's Creed Unity</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Assassin%27s_Creed_Unity_cover.jpg" 
                alt="Assassin's Creed Unity logo" 
              />
              <p>Assassin's Creed Unity logo</p>
            </div>
            <p>
              Assassin's Creed Unity was released concurrently with Rogue in November 2014 for the PlayStation 4, Xbox One, and Windows, and in
              December 2020 for Google Stadia. In the present-day, the player character is a player of Helix, an Animus-powered gaming device produced
              by Abstergo, who hope to use their unaware player base to locate more Pieces of Eden. While playing, the player is contacted by the
              modern-day Assassins and invited to join them as an Initiate and help them locate the body of an 18th-century Sage. The main story is set
              in <Link>Paris</Link> during the <Link>French Revolution</Link>, and follows the Assassin <Link>Arno Dorian</Link> as he embarks on a
              quest for redemption after his foster father's death, which leads him to discover an internal conflict between the Templars as a result of
              the Revolution.
            </p>
            <p>
              On March 19, 2014, images leaked for the next Assassin's Creed game, titled or code-named Unity, showing a new Assassin in Paris. On March
              21, Ubisoft confirmed the game's existence, having been in development for more than three years, by releasing pre-alpha game footage. The
              game features enhanced visuals compared to its predecessors, and several new gameplay mechanics, including a four player co-op mode, a
              first for the series.
            </p>

            <h4 className="article-heading-4" id="4.1.9"><Link to="/assassinscreed/assassins_creed_syndicate">Assassin's Creed Syndicate</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/f/f2/Assassin%27s_Creed_Syndicate_cover.jpg" 
                alt="Assassin's Creed Syndicate logo" 
              />
              <p>Assassin's Creed Syndicate logo</p>
            </div>
            <p>
              Assassin's Creed Syndicate was released in October 2015 for the PlayStation 4 and Xbox One, in November 2015 for Windows, and in December
              2020 for the Stadia. In the present day, players control the same unnamed Assassin Initiate from Assassin's Creed Unity, who this time must
              help the Assassins find a Shroud of Eden hidden in <Link>London</Link>. The main story is set in <Link>Victorian era</Link> London and
              follows twin Assassins <Link>Jacob</Link> and <Link>Evie Frye</Link> as they navigate the corridors of organized crime to take back the city
              from Templar control and prevent them from finding the Shroud. The narrative also includes segments set in war-torn London during
              <Link> World War I</Link>, which follows Jacob's granddaughter, Lydia Frye, as she battles German soldiers and Templar spies and searching
              for a Sage.
            </p>
            <p>
              In December 2014, images and information leaked for a new Assassin's Creed game, titled or code-named Victory, which was later confirmed by
              Ubisoft. In May 2015, Kotaku leaked that Victory had been renamed Syndicate. On May 12, 2015, the game was officially announced by Ubisoft.
              The game retains most gameplay elements from Unity, while introducing new travelling systems, such as carriages and a grappling hook, and
              refined combat mechanics. It is the first game in the series to feature multiple playable protagonists, whom the player can switch between
              both during outside missions.
            </p>

            <h4 className="article-heading-4" id="4.1.10"><Link to="/assassinscreed/assassins_creed_origins">Assassin's Creed Origins</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/4/4a/Assassin%27s_Creed_Origins_Cover_Art.png" 
                alt="Assassin's Creed Origins logo" 
              />
              <p>Assassin's Creed Origins logo</p>
            </div>

            <h4 className="article-heading-4" id="4.1.11"><Link to="/assassinscreed/assassins_creed_odyssey">Assassin's Creed Odyssey</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/9/99/ACOdysseyCoverArt.png" 
                alt="Assassin's Creed Odyssey logo" 
              />
              <p>Assassin's Creed Odyssey logo</p>
            </div>

            <h4 className="article-heading-4" id="4.1.12"><Link to="/assassinscreed/assassins_creed_valhalla">Assassin's Creed Valhalla</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg" 
                alt="Assassin's Creed Valhalla logo" 
              />
              <p>Assassin's Creed Valhalla logo</p>
            </div>

            <h4 className="article-heading-4" id="4.1.13"><Link to="/assassinscreed/assassins_creed_mirage">Assassin's Creed Mirage</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/2/23/Assassin%27s_Creed_Mirage_cover.jpeg" 
                alt="Assassin's Creed Mirage logo" 
              />
              <p>Assassin's Creed Mirage logo</p>
            </div>

            <h4 className="article-heading-4" id="4.1.14"><Link to="/assassinscreed/assassins_creed_shadows">Assassin's Creed Shadows</Link></h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/5/54/Assassin%27s_Creed_Shadows_cover.png" 
                alt="Assassin's Creed Shadows logo" 
              />
              <p>Assassin's Creed Shadows logo</p>
            </div>

            <h3 className="article-heading-3" id="4.2">Spin-offs</h3>
            <h4 className="article-heading-4" id="4.2.1">Assassin's Creed III: Liberation</h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Textlogo_Assassin%E2%80%99s_Creed_III_Liberation.svg/500px-Textlogo_Assassin%E2%80%99s_Creed_III_Liberation.svg.png" 
                alt="Assassin's Creed III Liberation logo" 
              />
              <p>Assassin's Creed: Liberation logo</p>
            </div>
            <p>
              Assassin's Creed III: Liberation is a spin-off to Assassin's Creed III, originally released for the <Link>PlayStation Vita</Link> in
              October 2012. The story takes place alongside the events of Assassin's Creed III and follows Aveline de Grandpré, a Louisiana Creole
              woman from New Orleans, the daughter of a French merchant father and an African mother. Aveline is recruited into the Assassin Brotherhood
              by a former slave and fights against slavery as well as the Templars, who plot to take over Louisiana after the end of the Seven Years'
              War. Aveline uses a variety of new weapons in combat, including a machete and a blowpipe for ranged attacks, and can disguise herself to
              deceive enemies, although certain disguises limit her movement and abilities. The entire game is presented as a product developed by the
              in-universe company Abstergo Entertainment, who have done a heavy amount of censoring in regards to the Assassin-Templar conflict. At
              various points during their playthrough, the player is contacted by the hacking collective Erudito, who helps them uncensor the game to
              learn the true nature of the events depicted.
            </p>
            <p>
              An original Assassin's Creed title for the PlayStation Vita was announced to be in development during Gamescom 2011 and would feature a
              new sotyr with new characters; on June 4, 2012, at E3, Liberation was officially announced. On September 10, 2012, it was announced that
              the game would be re-released as Assassin's Creed: Liberation HD for PlayStation 3, Xbox 360, and Microsoft Windows via the PlayStation
              Network, Xbox Live Arcade, and Steam, respectively. In March 2019, it was announced that a remastered version of Liberation would be
              bundled with Assassin's Creed III Remastered for Windows, PlayStation 4, Xbox One and later, for the Nintendo Switch. Ubisoft officially
              decommissioned Assassin's Creed: Liberation HD on October 1, 2022, with no additional copies being sold outside of the bundled
              Assassin's Creed III Remastered version.
            </p>

            <h4 className="article-heading-4" id="4.2.2">Assassin's Creed: Freedom Cry</h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Assassins_Creed_Freedom_Cry_Logo.png/500px-Assassins_Creed_Freedom_Cry_Logo.png" 
                alt="Assassin's Creed Freedom Cry logo" 
              />
              <p>Assassin's Creed Freedom Cry logo</p>
            </div>
            <p>
              Assassin's Creed Freedom Cry was originally released as downloadable content (DLC) for most versions of Assassin's Creed IV: Black Flag in
              December 2013. A standalone version was released in February 2014 for Microsoft Windows, PlayStation 3, and PlayStation 4. Set thirteen
              years after the ending of Black Flag, the game follows Adéwalé, a major supporting character from Black Flag, who served as the
              quartermaster to protagonist Edward Kenway before joining the Assassin Brotherhood towards the end of the main story. During the events of
              Freedom Cry, Adéwalé finds himself shipwrecked in the French colony of <Link>Saint-Domingue</Link> (present-day Haiti), where he
              encounters some of the most brutal slavery practices in the West Indies. Being a former slave, Adéwalé temporarily abandons his fight
              agains the Templars and joins a Maroon rebellion to help them rescue oppressed slaves.
            </p>
            <p>
              Being originally released as DLC for Black Flag, Freedom Cry's gameplay is virtually identical, though it does feature several new
              additions. Most notably, Adéwalé has the option to rescue slaves by raiding plantations, attacking slave ships, or simply killing their
              masters, with each freed slave serving as a resource for the player to accumulate to unlock upgrades for Adéwalé. Futhermore, some freed
              slaves join the Maroon rebellion and can become crew members aboard Adéwalé's ship, the Experto Crede, or help the player fight enemies.
            </p>

            <h4 className="article-heading-4" id="4.2.3">Assassin's Creed Chronicles</h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Textlogo_Assassin%E2%80%99s_Creed_Chronicles.svg/500px-Textlogo_Assassin%E2%80%99s_Creed_Chronicles.svg.png" 
                alt="Assassin's Creed Chronicles logo" 
              />
              <p>Assassin's Creed Chronicles logo</p>
            </div>
            <p>
              Assassin's Creed Chronicles is a sub-series of three 2.5D action and stealth games released for Microsoft Windows, PlayStation 4,
              PlayStation Vita, and Xbox One.
            </p>
            <div className="article-list">
              <ul>
                <li>
                  The first game, Assassin's Creed Chronicles: China, was originally released as part of Assassin's Creed Unity's season pass on April 21,
                  2015, but it was later made available for purchase separately. Set after the short film Assassin's Creed: Embers, the game follows
                  Shao Jun in Imperial China from 1526 to 1532, as she battles the Templar group, the Eight Tigers, and attempts to rebuild the Chinese
                  Assassin Brotherhood.
                </li>
                <li>
                  The second game, Assassin's Creed Chronicles: India, was released on January 12, 2016. It is set in British India in 1841, two years
                  after the events of the graphic novel Assassin's Creed: Brahman. The game follows Arbaaz Mir, who, while attempting to recover a
                  Precursor artifact from the Templars, becomes caught in a war between the Sikh Empire and the East India Company and must protect his
                  friends and lover.
                </li>
                <li>
                  The last game, Assassin's Creed Chronicles: Russia, was released on February 9, 2016. It is set in Soviet Russia in 1918, in the
                  aftermath of the October Revolution, and bridges the gap between the comic book Assassin's Creed: The Fall and its graphic novel
                  sequel, Assassin's Creed: The Chain. The game follows Nikolai Orelov as he attempts to protect a Precursor artifact and Grand Duchess
                  Anastasia from the Templars and the Bolsheviks after witnessing the execution of the Romanov family.
                </li>
              </ul>
            </div>

            <h4 className="article-heading-4" id="4.2.4">Assassin's Creed Nexus VR</h4>


            <h3 className="article-heading-3" id="4.3">Handheld and mobile games</h3>
            <h4 className="article-heading-4" id="4.3.1">Assassin's Creed: Altaïr's Chronicles</h4>


            <h4 className="article-heading-4" id="4.3.2">Assassin's Creed: Bloodlines</h4>


            <h4 className="article-heading-4" id="4.3.3">Assassin's Creed II: Discovery</h4>


            <h4 className="article-heading-4" id="4.3.4">Assassin's Creed: Multiplayer Rearmed</h4>


            <h4 className="article-heading-4" id="4.3.5">Assassin's Creed: Recollection</h4>


            <h4 className="article-heading-4" id="4.3.6">Assassin's Creed: Pirates</h4>


            <h4 className="article-heading-4" id="4.3.7">Assassin's Creed: Memories</h4>


            <h4 className="article-heading-4" id="4.3.8">Assassin's Creed Unity: Arno's Chronicles</h4>


            <h4 className="article-heading-4" id="4.3.9">Assassin's Creed Rebellion</h4>


            <h3 className="article-heading-3" id="4.4">Cancelled and defunct games</h3>
            <h4 className="article-heading-4" id="4.4.1">Assassin's Creed: Project Legacy</h4>


            <h4 className="article-heading-4" id="4.4.2">Assassin's Creed: Utopia</h4>


            <h4 className="article-heading-4" id="4.4.3">Assassin's Creed: Initiates</h4>


            <h4 className="article-heading-4" id="4.4.4">Assassin's Creed Identity</h4>


            <h4 className="article-heading-4" id="4.4.5">Untitled Civil War game</h4>


            <h3 className="article-heading-3" id="4.5">Re-release compilations and collections</h3>


            <h3 className="article-heading-3" id="4.6">Future games</h3>
            <h4 className="article-heading-4" id="4.6.1">Assassin's Creed Jade</h4>


            <h4 className="article-heading-4" id="4.6.2">Assassin's Creed: Codename Hexe</h4>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Animus Hub"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Other media"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Television</h3>


            <h3 className="article-heading-3" id="6.2">Film</h3>


            <h3 className="article-heading-3" id="6.3">Print publications</h3>


            <h3 className="article-heading-3" id="6.4">Audio drama</h3>


            <h3 className="article-heading-3" id="6.5">Board games</h3>


            <h3 className="article-heading-3" id="6.6">Concert</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <p>
              The Assassin's Creed series has received mainly positive reviews from critics, with Blast Magazine calling it "the standout series on [the
              seventh generaton] of consoles". It has been praised for its ambitious game design, visuals, and narratives but criticized for its technical
              issues and annual releases of almost every installment, the series' shift which started in Origins, towards prioritising role-playing
              mechanichs over stealth in several games has been considered polarizing.
            </p>
            <p>
              As of September 2019, the series had sold over 140 million copies with over 95 million players, becoming Ubisoft's best selling franchise
              and one of the highest selling video game franchises of all time. By September 2022, total sales of the series had reached 200 million. The
              franchise reportedly generated around €4 billion in the decade leading up to 2024.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Cultural impact"} />
          <div>

          </div>
        </div>
        <div>
          <TableAssassinsCreed />
        </div>
      </main>
    </>
  )
}

export default AssassinsCreed
