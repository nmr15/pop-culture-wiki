import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

const TheIncredibuleHulkFilm = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production", sub2: [
                {id: "3.4.1", title: "Editing"},
                {id: "3.4.2", title: "Visual effects"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical reception"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Future MCU appearances"},
              {id: "8.2", title: "Potential sequel"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>The Incredible Hulk (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Incredible Hulk (film)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg" 
            alt="The Incredible Hulk" 
            className="article-heading-img" 
          />
        </div>
        <div className="div-top">
          <p>
            The Incredible Hulk
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Plot</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Cast</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Production</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default TheIncredibuleHulkFilm;
