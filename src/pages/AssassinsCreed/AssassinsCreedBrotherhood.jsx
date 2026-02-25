import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedBrotherhood = () =>
{
  useEffect(() =>
  {
    document.title = "Assassin's Creed Brotherhood - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Gameplay"
            sub={[
              {id: "1.1", title: "Multiplayer", sub2: [
                {id: "1.1.1", title: "Game modes"},
                {id: "1.1.2", title: "Characters"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "The Da Vinci Disappearance"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Development</a></li>
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Retail editions</a></li>
          <Collapse 
            id="6"
            item="Downloadable content"
            sub={[
              {id: "6.1", title: "Uplay content"},
              {id: "6.2", title: "Copernicus Conspiracy"},
              {id: "6.3", title: "Animus Project Update 1.0"},
              {id: "6.4", title: "Animus Project Update 2.0"},
              {id: "6.5", title: "The Da Vinci Disappearance"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Sales"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed Brotherhood</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed Brotherhood</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Assassin's Creed Brotherhood</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/2a/Assassins_Creed_brotherhood_cover.jpg" alt="Assassin's Creed Brotherhood logo logo" />
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
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_ii">Assassin's Creed II</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Assassin's Creed game</th>
              <td className="infobox-data"><Link to="/assassinscreed/assassins_creed_revelations">Assassin's Creed Revelations</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Assassin's Creed: Brotherhood</b> is a 2010 action-adventure game developed by <Link>Ubisoft Montreal</Link> and published by
            <Link> Ubisoft</Link>. It is the third major installment in the <Link to="/assassinscreed">Assassin's Creed series</Link>, and the second
            chapter in the "Ezio Trilogy", as a direct sequel to 2009's <Link to="/assassinscreed/assassins_creed_ii">Assassin's Creed II</Link>. It
            was released on the <Link>PlayStation 3</Link> and <Link>Xbox 360</Link> in November 2010, and on Microsoft Windows in Marh 2011. A
            remastered version of Brotherhood, along with Assassin's Creed II and
            <Link to="/assassinscreed/assassins_creed_revelations"> Assassin's Creed Revelations</Link>, was released as part of The Ezio Collection
            compilation for the <Link>PlayStation 4</Link> and <Link>Xbox One</Link> on November 15, 2016, and for the <Link>Nintendo Switch</Link> on
            February 17, 2022.
          </p>
          <p>
            The game's plot is set in a fictional history of real-world events and follows the millennia-old struggle between the <Link>Assassins</Link>,
            who fight to preserve peace and free will, and the <Link>Templars</Link>, who desire peace through control. The framing story is set in the
            21st century and features series protagonist <Link>Desmond Miles</Link> using a machine known as the <Link>Animus</Link> to relive the
            memories of his Assassin ancestor, <Link>Ezio Auditore da Fireneze</Link>, and find a way to avert the 2012 apocalypse. The main narrative
            takes place during the Italian Wars, spanning the years 1500-1507, and continues from the events of Assassin's Creed II, as Ezio takes the
            fight against the Templars (led by the powerful Borgia family) to <Link>Rome</Link>, where he attempts to rebuild the Assassin Brotherhood in
            <Link>Italy</Link> and liberate the city from the Borgias' control.
          </p>
          <p>
            Brotherhood features an open world and is playaed from the third-person perspective, with a primary focus on using Desmond's and Ezio's
            combat, climbing, and stealth abilities to eliminate targets and explore the environment. As Ezio, players can freely explore Rome to
            advance the narrative, or complete a variety of side missions unrelated to the main storyline. The game intoduces a multiplayer component to
            the series, in which players assume the role of Templars in training. A number of downloadable content (DLC) packs were released to support
            Brotherhood, including The Da Vinci Disappearance, a story expansion set during the events of the single-player campaign.
          </p>
          <p>
            Like its predecessor, Brotherhood has been cited as one of the greatest video games ever made. It received critical acclaim, with praise
            directed at its setting, new content, gameplay improvements over its predecessor and the new multiplayer mode. The narrative was also
            positively received, although it was generally seen as inferior to that of Assassin's Creed II. The game won multiple awards including a
            BAFTA award for Best Action Game. It was also commercially successful, shipping 7.2 million units by May 2011. The final insallment in the
            Ezio Trilogy, Assassin's Creed: Revelations, was released in November 2011.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Gameplay"} />
          <div>
            <p>
              Assassin's Creed: Brotherhood is an action-adventure, stealth game set in an open world environment and played from a third-person
              perspective. The game features both single-player and multiplayer modes, a first for the series. For most of the single-olayer campaign,
              which is estimated to provide 15+ hours of gameplay, the player controls returning protagonist Ezio Auditore da Firenze from Assassin's
              Creed II; at predetermined points in the narrative, the player takes control of Desmond Miles, who is reliving Ezio's memroies through the
              Animus in the modern-day. For the first time in the series, Desmond can leave the Animus at almost any given time to explore
              <Link>Monteriggioni</Link>, where the Assassins have set up base, and find hidden secrets. Desmond can also access virtual training
              missions via the Animus, which test the player's skills in combat and free-running.
            </p>
            <p>
              The series' combat system has been modified in Brotherhood. Striking first and offensive actions are more deadly than in previous games
              where counter-attacks were the most efficient. Before, this made the player wait until their AI opponents struck, which slowed down the
              pace of fighting. The AI in this game is thus more aggressive and enemies can attack simultaneously. To dispatch them, Ezio can use melee
              and ranged weapons at the same time, including his hidden pistol, which could previously not be used in combat. After killing one enemy
              the player can start an execution streak to dispatch multiple enemies quickly. Ezio can also throw heavy weapons (axes, spears, and swords)
              at his enemies. The variety of enemies also saw an increase with the introduction of new archetypes such as horsemen, arquebusiers, and
              papal guards.
            </p>

            <h3 className="article-heading-3" id="1.1">Multiplayer</h3>
            <h4 className="article-heading-4" id="1.1.1">Game modes</h4>


            <h4 className="article-heading-4" id="1.1.2">Characters</h4>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Plot"} />
          <div>
            <h3 className="article-heading-3" id="2.1">The Da Vinci Disappearance</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Development"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Retail editions"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Downloadable content"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Uplay content</h3>


            <h3 className="article-heading-3" id="6.2">Copernicus Conspiracy</h3>


            <h3 className="article-heading-3" id="6.3">Animus Project Update 1.0</h3>


            <h3 className="article-heading-3" id="6.4">Animus Project Update 2.0</h3>


            <h3 className="article-heading-3" id="6.5">The Da Vinci Disappearance</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Sales</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequel"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedBrotherhood;