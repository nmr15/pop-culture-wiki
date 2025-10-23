import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableAssassinsCreed from '../../components/TableAssassinsCreed'

const AssassinsCreedGame = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list"></ul>
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
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg" 
            alt="Assassin's Creed logo" 
            className="article-heading-img"
          />
        </div>
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
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedGame;