import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaV = () =>
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
              {id: "3.1", title: "Release"},
              {id: "3.2", title: "Grand Theft Auto Online"}
            ]}
          />
          <Collapse 
            id="4"
            item="Reception"
            sub={[
              {id: "4.1", title: "Initial release"},
              {id: "4.2", title: "Re-release"},
              {id: "4.3", title: "Awards"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Controversies</a></li>
          <li className="sidebar-list-item"><a href="#6">Sales</a></li>
          <Collapse 
            id="7"
            item="Legacy"
            sub={[
              {id: "7.1", title: "Use in research"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto V</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto V</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/250px-Grand_Theft_Auto_V.png" 
            alt="Grand Theft Auto V logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto V is a 2013 action-adventure game developed by <Link>Rockstar North</Link> and published by <Link>Rockstar
            Games</Link>. It is the seventh main entry in the <Link to="/gta">Grand Theft Auto series</Link>, following 2008's
            <Link to="/gta/grand_theft_auto_iv">Grand Theft Auto IV</Link>, and the fifteenth installment overall. Set within the fictional state of
            <Link> San Andreas</Link>, based on Southern California, the single-player story follows three protagonists, retired bank robber
            <Link> Michael De Santa</Link>, street gangster <Link>Franklin Clinton</Link>, and drug dealer and gunrunner <Link>Trevor Philips</Link>,
            and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. Players freely roam
            San Andreas's open world countrysid and fictional city of <Link>Los Santos</Link>, based on Los Angeles.
          </p>
          <p>
            The game world is navigated on foot and by vehicle, from either a third-person or first-person perspective. Players control the
            protagonists throught single-player and switch among them, both during and outside missions. The story is centered on the heist
            sequences, and many missions invlove shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to
            players who commit crimes. In Grand Theft Auto Online, the game's online multiplayer mode, up to 30 players engage in a variety of
            different cooperative and competitive game modes.
          </p>
          <p>
            Shared between many of Rockstar's studios worldwide, the game's development began around the time of Grand Theft Auto IV's release. The
            development drew influence from many of their previous projects (such as <Link>Red Dead Redemption</Link> and Max Payne 3) and designed
            the game around three lead protagonists to innovate on the core structure of its predecessors. Much of the development work constituted
            the open world's creation, and several team members conducted field research around California to capture footage for the design team.
            The game's soundtrack features an original score composed by a team of producers who collaborated over several years. Grand Theft Auto V
            was released in September 2013 for the <Link>PlayStation 3</Link> and <Link>Xbox 360</Link>, in November 2014 for the <Link>PlayStation
            4</Link> and <Link>Xbox One</Link>, in April 2015 for Windows, and in March 2022 for the <Link>PlayStation 5</Link> and <Link>Xbox
            Series X/S</Link>.
          </p>
          <p>
            Extensively marketed and widely anticipated, the game broke industry sales records and became the fastest selling entertainemnt product in
            history, earning $800 million in its first day and $1 billion in its first three days. It received critical acclaim, with praise directed
            at its multiple protagonist design, open world, presentation, and gameplay. However, its depiction of violence and women caused
            controversies. Several gaming publications awarded the game year-end accolades including Game of the Year awards. In retrospect, it is
            considered one of <Link>seventh</Link> and <Link>eighth generation console gaming</Link>'s monst significant titles and among the
            best video games ever made. It is the second best selling video game of all time with 215 million copies shipped, and one of the most
            financially successful entertainment products of all time, with nearly $10 billion in worldwide revenue. Its successor,
            <Link to="/gta/grand_theft_auto_vi">Grand Theft Auto VI</Link>, is schedule to be released in May 2026.
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
            <h3 className="article-heading-3" id="3.1">Release</h3>
            <h3 className="article-heading-3" id="3.2">Grand Theft Auto Online</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Initial release</h3>
            <h3 className="article-heading-3" id="4.2">Re-release</h3>
            <h3 className="article-heading-3" id="4.3">Awards</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Controversies</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Sales</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Legacy</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Use in research</h3>
          </div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default GtaV;