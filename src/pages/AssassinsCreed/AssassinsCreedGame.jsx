import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedGame = () =>
{
  useEffect(() =>
  {
    document.title = "Assassin's Creed (game) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <li className="sidebar-list-item"><a href="#2">Plot</a></li>
          <Collapse 
            id="3"
            item="Development"
            sub={[
              {id:  "3.1", title: "Design"},
              {id:  "3.2", title: "Voice acting"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Release</a></li>
          <li className="sidebar-list-item"><a href="#5">Music</a></li>
          <Collapse 
            id="4"
            item="Reception"
            sub={[
              {id: "4.1", title: "Critical reception"},
              {id: "4.2", title: "Awards"},
              {id: "4.3", title: "Sales"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed (game)</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed (game)</h1>
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
                  <img src="https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg" alt="Assassin's Creed cover" />
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
              <th className="infobox-data">Next Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_ii">Assassin's Creed II</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            Assassin's Creed is a 2007 action-adventure game developed by Ubisoft Montreal and published by <Link>Ubisoft</Link>. It is the first
            installment in the <Link to="/assassinscreed">Assassin's Creed</Link> series. The game was released for <Link>PlayStation 3</Link> and
            <Link> Xbox 360</Link> in Nivember 2007. A Microsoft Windows version titled Assassin's Creed: Director's Cut Edition containing
            additional content was released in April 2008.
          </p>
          <p>
            The plot is set in a fictional history of real-world events, taking place primarily during the Third Crusade in the Holy Lands in 1191.
            The player character is a modern-day man named <Link>Desmond Miles</Link> who, through a machine called the Animus, relives the genetic
            memories of his ancestor, <Link>Altaïr Ibn-La'Ahad</Link>. Through this plot device, details emerge about a millenia-old struggle
            between two factions: the Assassin Brotherhood (inspired by the real-life Order of Assassins), who fight to preserve peace and free will,
            and the Templar Order (inspired by the Knights Templar military order), who seek to establish peace through order and control. Both
            factions fight over powerful artifacts of mysterious origins known as Pieces of Eden to gain an advantage over the other. The 12th century
            portion of the story follows Altaïr, an Assassin who embarks on a quest to regain his honor after botching a mission to recover one such
            artifact from the Templars. Altaïr is stripped of his status as Master Assassin and is given nine targets spread out across the Holy Land
            that he must find and assassinate for his redemption.
          </p>
          <p>
            The game focuses on using Altaïr's combat, stealth, and parkour abilities to defeat enemies and explore the environment. The game features
            counter-based hack-and-slah combat, social stealth (the ability to use crowds of people and the environment to hide from enemies), and a
            large open world comprising various regions of the Holy Land, primarily the cities of Masyaf, Jerusalem, Acre, and Damascus, all of which
            have been accurately recreated to fir the game's time period. While most of the game takes places within a simulation based on Altaïr's
            memories, the player will occasionally be forced out of the Animus to play as Desmond in the modern day. Here, they are restricted to
            exploring a small laboratory facility, as Desmond has been kidnapped by Abstergo Industries, a shady corporation looking for specific
            information within Altaïr's memories that will further their enigmatic goals.
          </p>
          <p>
            Upon release, Assassin's Creed received generally positive reviews, with critics praising its storytelling, visuals, art design, and
            originality, while criticism mostly focused on the repetitive nature of its gameplay. Assassin's Creed won several awards at the 2006 E3
            and several year-end awards after its release. The game spawned two spin-offs: Assassin's Creed: Altaïr's Chronicles (2008) and
            Assassins Creed: Bloodlines (2009), which excluded the modern-day aspect and focus entirely on Altaïr. A direct sequel,
            <Link to="/assassinscreed/assassins_creed_ii"> Assassin's Creed II</Link>, was released in November 2009. The sequel continues the
            modern-day narrative following Desmond but introduces a new storyline set during the Italian Renaissance in the late 15th century and a
            new protagonist, <Link>Ezio Auditore da Firenze</Link>. Since the release and success of Assassin's Creed II, subsequent games have been
            released with various other Assassins and periods.
          </p>
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedGame;