import { Link } from 'react-router-dom'
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
            item="Release History"
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
          <li className="sidebar-list-item"><a href="#7">Cultural impact</a></li>
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
          <TableAssassinsCreed />
        </div>
      </main>
    </>
  )
}

export default AssassinsCreed
