import { Link } from 'react-router-dom'
import { assassinscreed } from '../../data/dataAssassinsCreed'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreed = () => 
{
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
              {id: "4.1", title: "Main series"},
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
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2017/08/Assassins-Creed-Logo-1536x966.png" 
            alt="Assassin's Creed" 
            className="article-heading-img"
          />
        </div>
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
          <h2 className="article-heading-2" id="1">Development history</h2>
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
            <h3 className="article-heading-2" id="1.1">Period one</h3>
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
            <h3 className="article-heading-2" id="1.2">Period two</h3>
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
            <h3 className="article-heading-2" id="1.3">Period three</h3>
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
          <h2 className="article-heading-2" id="2">Gameplay</h2>
          <div>
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
          <h2 className="article-heading-2" id="3">Storyline</h2>
          <div>
            <h3 className="article-heading-2" id="2.1">Premise</h3>
            <h3 className="article-heading-2" id="2.2">Story arcs</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Release history</h2>
          <div>
            <h3 className="article-heading-2" id="4.1">Main series</h3>
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
            <h3 className="article-heading-2" id="4.2">Spin-offs</h3>
            <h4 className="article-heading-2" id="4.2.1">Assassin's Creed III: Liberation</h4>
            <h4 className="article-heading-2" id="4.2.2">Assassin's Creed: Freedom Cry</h4>
            <h4 className="article-heading-2" id="4.2.3">Assassin's Creed Chronicles</h4>
            <h4 className="article-heading-2" id="4.2.4">Assassin's Creed Nexus VR</h4>
            <h3 className="article-heading-2" id="4.3">Handheld and mobile games</h3>
            <h4 className="article-heading-2" id="4.3.1">Assassin's Creed: Altaïr's Chronicles</h4>
            <h4 className="article-heading-2" id="4.3.2">Assassin's Creed: Bloodlines</h4>
            <h4 className="article-heading-2" id="4.3.3">Assassin's Creed II: Discovery</h4>
            <h4 className="article-heading-2" id="4.3.4">Assassin's Creed: Multiplayer Rearmed</h4>
            <h4 className="article-heading-2" id="4.3.5">Assassin's Creed: Recollection</h4>
            <h4 className="article-heading-2" id="4.3.6">Assassin's Creed: Pirates</h4>
            <h4 className="article-heading-2" id="4.3.7">Assassin's Creed: Memories</h4>
            <h4 className="article-heading-2" id="4.3.8">Assassin's Creed Unity: Arno's Chronicles</h4>
            <h4 className="article-heading-2" id="4.3.9">Assassin's Creed Rebellion</h4>
            <h3 className="article-heading-2" id="4.4">Cancelled and defunct games</h3>
            <h4 className="article-heading-2" id="4.4.1">Assassin's Creed: Project Legacy</h4>
            <h4 className="article-heading-2" id="4.4.2">Assassin's Creed: Utopia</h4>
            <h4 className="article-heading-2" id="4.4.3">Assassin's Creed: Initiates</h4>
            <h4 className="article-heading-2" id="4.4.4">Assassin's Creed Identity</h4>
            <h4 className="article-heading-2" id="4.4.5">Untitled Civil War game</h4>
            <h3 className="article-heading-2" id="4.5">Re-release compilations and collections</h3>
            <h3 className="article-heading-2" id="4.6">Future games</h3>
            <h4 className="article-heading-2" id="4.6.1">Assassin's Creed Jade</h4>
            <h4 className="article-heading-2" id="4.6.2">Assassin's Creed: Codename Hexe</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Animus Hub</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Other media</h2>
          <div>
            <h3 className="article-heading-2" id="6.1">Television</h3>
            <h3 className="article-heading-2" id="6.2">Film</h3>
            <h3 className="article-heading-2" id="6.3">Print publications</h3>
            <h3 className="article-heading-2" id="6.4">Audio drama</h3>
            <h3 className="article-heading-2" id="6.5">Board games</h3>
            <h3 className="article-heading-2" id="6.6">Concert</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Cultural impact</h2>
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
