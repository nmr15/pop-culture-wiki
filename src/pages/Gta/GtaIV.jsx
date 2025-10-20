import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const GtaIV = () =>
{
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
              {id: "2.2", title: "Plot"}
            ]}
          />
          <Collapse 
            id="3"
            item="Development"
            sub={[
              {id: "3.1", title: "Research and open world design"},
              {id: "3.2", title: "Story and character development"},
              {id: "3.3", title: "Art design"},
              {id: "3.4", title: "Technical and gameplay design"},
              {id: "3.5", title: "Music production"},
            ]}
          />
          <Collapse 
            id="4"
            item="Release"
            sub={[
              {id: "4.1", title: "Promotion"}
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Critical response", sub2: [
                {id: "5.1.1", title: "Windows version"}
              ]},
              {id: "5.2", title: "Awards"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Sales</a></li>
          <Collapse 
            id="7"
            item="Controversies"
            sub={[
              {id: "7.1", title: "Pre-release"},
              {id: "7.2", title: "Post-release"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Grand Theft Auto (franchise)</Link></li>
          <li>Grand Theft Auto IV</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Theft Auto IV</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Grand_Theft_Auto_IV_cover.jpg/250px-Grand_Theft_Auto_IV_cover.jpg" 
            alt="Grand Theft Auto IV logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Grand Theft Auto IV is a 2008 action-adventure game developed by <Link>Rockstar North</Link> and published by <Link>Rockstar
            Games</Link>. It is the sixth main entry in the <Link to='/gta'>Grand Theft Auto series</Link>, following 2004's
            <Link to="/gta/grand_theft_auto_san_andreas">Grand Theft Auto: San Andreas</Link>, and the eleventh entry overall. Set in the
            fictional <Link>Liberty City</Link>, based on New York City, the single-player story follows Eastern European war veteran
            <Link>Niko Bellic</Link> and his attempts to escape his past while under pressure from high-profile criminals. The open world
            design lets players freely roam Liberty City, consisting of four boroughs across three islands, and the neighboring state of
            Alderney, which is based on New Jersey.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Gameplay</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Synopsis</h2>
          <div>
            <h3 className="article-heading-3" id="2.1">Setting</h3>
            <h3 className="article-heading-3" id="2.2">Plot</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Development</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Research and open world design</h3>
            <h3 className="article-heading-3" id="3.2">Story and character development</h3>
            <h3 className="article-heading-3" id="3.3">Art design</h3>
            <h3 className="article-heading-3" id="3.4">Technical and gameplay design</h3>
            <h3 className="article-heading-3" id="3.5">Music production</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Release</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Promotion</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Critical response</h3>
            <h4 className="article-heading-4" id="5.1.1">Windows version</h4>
            <h3 className="article-heading-3" id="5.2">Awards</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Sales</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Controversies</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Pre-release</h3>
            <h3 className="article-heading-3" id="7.2">Post-release</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default GtaIV;