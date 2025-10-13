import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

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
              {id: "4.1", title: "Main series"}
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
        </div>
      </main>
    </>
  )
}

export default AssassinsCreed
