import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedII = () =>
{
  useEffect(() =>
  {
    document.title = "Assassin's Creed II - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Gameplay</a></li>
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "The Battle of Forli"},
              {id: "2.2", title: "Bonfire of the Vanities"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Development</a></li>
          <Collapse 
            id="4"
            item="Marketing"
            sub={[
              {id: "4.1", title: "Promotions"},
              {id: "4.2", title: "Editions"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Music</a></li>
          <Collapse 
            id="6"
            item="Downloadable content"
            sub={[
              {id: "6.1", title: "Expansion packs"},
              {id: "6.2", title: "Uplay content"},
              {id: "6.3", title: "Templar Lairs"},
              {id: "6.4", title: "Bonus skin"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Critical reception"},
              {id: "7.2", title: "DRM-related criticism"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed II</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed II</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Assassin's Creed II</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG" alt="Assassin's Creed II cover" />
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

export default AssassinsCreedII;