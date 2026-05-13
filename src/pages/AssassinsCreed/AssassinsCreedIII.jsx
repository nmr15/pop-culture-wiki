import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedIII = () =>
{
  useEffect(() =>
  {
    document.title = "Assassin's Creed III - Pop Culture Wiki";
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
              {id: "2.2", title: "Characters"},
              {id: "2.3", title: "Plot"}
            ]}
          />
          <Collapse 
            id="3"
            item="Development"
            sub={[
              {id: "3.1", title: "Origins"},
              {id: "3.2", title: "Pre-announcement", sub2: [
                {id: "3.2.1", title: "Internet leaks"}
              ]},
              {id: "3.3", title: "Post-announcement"},
              {id: "3.4", title: "Mohawk collaboration"},
              {id: "3.5", title: "Technical issues"},
              {id: "3.6", title: "Music"}
            ]}
          />
          <Collapse 
            id="4"
            item="Marketing"
            sub={[
              {id: "4.1", title: "Retail edition"},
              {id: "4.2", title: "Remastered"}
            ]}
          />
          <Collapse 
            id="5"
            item="Downloadable content"
            sub={[
              {id: "5.1", title: "Uplay content"},
              {id: "5.2", title: "The Hidden Secrets Pack"},
              {id: "5.3", title: "The Battle Hardened Pack"},
              {id: "5.4", title: "The Tyranny of King Washington"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical reception", sub2: [
                {id: "6.1.1", title: "Remastered"}
              ]},
              {id: "6.2", title: "Native depiction"},
              {id: "6.3", title: "Accolades"},
              {id: "6.4", title: "Sales"},
              {id: "6.5", title: "Controversy"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Series continuity</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed III</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed III</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Assassin's Creed III</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/29/Assassin%27s_Creed_III_Game_Cover.jpg" alt="Assassin's Creed III cover" />
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
              <th className="infobox-data">Previous Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_revelations">Assassin's Creed Revelations</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_iv_black_flag">Assassin's Creed IV: Black Flag</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="top">
          <p>
            <b>Assassin's Creed III</b> is a 2012 action-adventure game developed by <Link>Ubisoft Montreal</Link> and published by
            <Link to="/ubisoft"> Ubisoft</Link>. It is the fifth major installment in the <Link to="/assassinscreed">Assassin's Creed</Link> series, and a direct
            sequel to 2011's <Link to="/assassinscreed/assassins_creed_revelations">Assassin's Creed Revelations</Link>. The game was released worldwide for
            <Link to="/playstation/playstation_3"> PlayStation 3</Link> and <Link to="/xbox/xbox_360">Xbox 360</Link>, beginning in North America on October 30,
            2012, with a Wii U and Microsoft Windows release in November 2012. A remastered version of the game was released in 2019 for Windows,
            <Link to="/playstation/playstation_4"> PlayStation 4</Link>, <Link to="xbox/xbox_one">Xbox One</Link>, and
            <Link to="/nintendo/nintendo_switch"> Nintendo Switch</Link>, and in 2021 for Google Stadia.
          </p>
          <p>
            The game's plot is set in a fictional history of real-world events and follows the millennia-old struggle between the
            <Link to="/assassinscreed/assassins"> Assassins</Link>, who fight to preserve peace and free will, and the
            <Link to="/assassinscreed/templars"> Templars</Link>, who desire peace through control. The framing story is set in the 21st century and features series
            protagonist <Link to="/assassinscreed/desmond_miles">Desmond Miles</Link> using a machine known as the
            <Link to="/assassinscreed/animus"> Animus</Link> to relive the memories of his ancestor and find a way to avert the 2012 apocalypse. The main narrative is
            set in 18th-century Colonial America from 1754 to 1783, and follows two characters whose stories are interconnected:
            <Link to="/assassinscreed/haytham_kenway"> Haytham Kenway</Link>, a British Templar who attempts to build a presence for his Order in the colonies
            during the French and Indian War; and <Link to="/assassinscreed/ratonhnhake:ton">Ratonhnhake:ton / Connor</Link>, Haytham's half-Mohawk son, who becomes
            an Assassin to protect his people and avenge his mother's death, and battles the Templars' attempts to influence the outcome of he American Revolution.
          </p>
          <p>
            Assassin's Creed III is set in an open world and presented from the third-person perspective, with a primary focus on using each playable character's
            combat and stealth abilities to eliminiate targets and explore the environment. Connor is able to freely explore 18th-century <Link>Boston</Link>,
            <Link> New York City</Link>, and the American frontier to complete side missions away from the primary storyline. The game also features a multiplayer
            component, allowing players to compete online to complete solo and team-based objectives including assassinations and evading pursuers. Ubisoft
            developed a new game engine, AnvilNext, for the game. Assassin's Creed III was one of the first major video games released to prominently feature
            Mohawk people (Mohawk: Kanienʼkehá꞉ka), an Iroquoian-speaking indigenous people of North America. The team sought to capture Mohawk culture as
            authentically as possible and consulted with cultural experts about the depiction of Connor and other Mohawk characters. A number of downloadable
            content (DLC) packs were released to support Assassin's Creed III, including <Link>The Tyranny of King Washington</Link>, a story expansion set in an
            alternate timeline from te base game's events.
          </p>
          <p>
            The game received positive reviews from critics, who praised it for its gameplay, narrative, setting, and ambitious scale, while criticism was directed
            at the unevenly developed gameplay mechanics, mission design, and pacing. It was a commercial success, selling more than 12 million copies worldwide.
            Assassin's Creed III was released alongside a spin-off for the PlayStation Vita titled Assassin's Creed III: Liberation. A sequel,
            <Link to="/assassinscreed/assassins_creed_iv_black_flag"> Assassin's Creed IV: Black Flag</Link>, was released in October 2012. While its modern-day
            narrative continues from the events of Assassin's Creed III, the main plot is set during the Golden Age of Piracy in the early 18th century and follows
            Haytham's father and Connor's grandfather, <Link to="/assassinscreed/edward_kenway">Edward Kenway</Link>. Another prequel,
            <Link to="/assassinscreed/assassins_creed_rogue"> Assassin's Creed Rogue</Link>, detailing the rise and fall of the Templars and Assassins in Colonial
            America, respectively, was released in November 2014.
          </p>
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedIII;