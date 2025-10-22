import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaIII = () =>
{
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
              {id: "3.1", title: "Design"},
              {id: "3.2", title: "Story and characters"},
              {id: "3.3", title: "Sound and radio design"},
              {id: "3.4", title: "Cuts and changes"}
            ]}
          />
          <Collapse 
            id="4"
            item="Reception"
            sub={[
              {id: "4.1", title: "Critical response", sub2: [
                {id: "4.1.1", title: "Windows version"},
                {id: "4.1.2", title: "Mobile version"},
              ]},
              {id: "4.2", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Sales</a></li>
          <li className="sidebar-list-item"><a href="#6">Controversies</a></li>
          <Collapse 
            id="7"
            item="Legacy"
            sub={[
              {id: "7.1", title: "Ports"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto III</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto III</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/GTA3boxcover.jpg/250px-GTA3boxcover.jpg" 
            alt="Grand Theft Auto III logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto III is a 2001 action-adventure game developed by DMA Design and published by <Link>Rockstar Games</Link>.
            It was the first 3D game in the <Link to='/gita'>Grand Theft Auto</Link> series. Set in <Link>Liberty City</Link>, loosely
            based on New York City, the story follows <Link>Claude</Link>, a silent protagonist who becomes entangled in a world of
            crime, drugs, gang warfare, and corruption. The game is played from a third-person perspective and its world is navigated
            on foot or by vehicle. Its open world design lets players freely roam Liberty City.
          </p>
          <p>
            Development was shared between DMA Design, based in Edinburgh, and Rockstar, based in New York City. Development involved
            transforming popular Grand Theft Auto elements into a fully 3D world for the first time. The game was delayed following the
            September 11 attacks to allow the team to change references and gameplay deemed inappropriate. Grand Theft Auto III was
            released in October 2001 for the <Link>PlayStation 2</Link>, in May 2002 for Windows, and in November 2003 for the
            <Link> Xbox</Link>. Mobile ports were released for the tenth anniversary in 2011, followed by <Link>a remastered
            version</Link> for the twentieth in 2021.
          </p>
          <p>
            Grand Theft Auto III received acclaim for its concept, gameplay, sound design, and visual fidelity, but generated
            controversies for its violent and sexual content. It received year-end accolades from several gaming publications, and it is
            considered a landmark game in the open world concept, one of the most significant games of the <Link>sixth generation of
            consoles</Link>, and among the best video games ever made. It was the best-selling video game of 2001 and among the
            best-selling PlayStation 2 games with over 11.6 million copies sold; it has sold over 14.5 million copies overall. The game
            was followed by <Link to="/gta/grand_theft_auto_vice_city">Grand Theft Auto: Vice City</Link> (2002) and two prequels,
            Advance (2004) and <Link to="/gta/grand_theft_auto_liberty_city_stories">Liberty City Stories</Link> (2005).
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Gameplay</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Plot</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Development</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Design</h3>
            <h3 className="article-heading-3" id="3.2">Story and characters</h3>
            <h3 className="article-heading-3" id="3.3">Sound and radio design</h3>
            <h3 className="article-heading-3" id="3.4">Cuts and changes</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Critical response</h3>
            <h4 className="article-heading-4" id="4.1.1">Windows version</h4>
            <h4 className="article-heading-4" id="4.1.2">Mobile version</h4>
            <h3 className="article-heading-3" id="4.2">Accolades</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Sales</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Controversies</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Legacy</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Ports</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default GtaIII;