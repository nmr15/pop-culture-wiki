import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import TableMcu from '../../../components/TableMcu'

const AntManAndTheWasp = () =>
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
                {id: "3.4.1", title: "Visual effects"}
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
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Ant-Man and the Wasp</li>
        </ul>
        <div>
          <h1 className="article-heading">Ant-Man and the Wasp</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg" 
            alt="Ant-Man and the Wasp poster" 
            className="article-heading-img" 
          />
        </div>
        <div className="div-top">
          
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Plot</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Cast</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Production</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
            <h4 className="article-heading-4" id="3.4.1">Visual effects</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Music</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Marketing</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Release</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Sequel</h2>
          <div>
            
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default AntManAndTheWasp;