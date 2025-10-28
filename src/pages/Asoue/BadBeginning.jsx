import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableAsoue from '../../components/TableAsoue'

const BadBeginning = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Dear Reader</a></li>
          <li className="sidebar-list-item"><a href="#2">Dedication</a></li>
          <li className="sidebar-list-item"><a href="#3">Plot</a></li>
          <Collapse 
            id="4"
            item="Foreshadowing"
            sub={[
              {id: "4.1", title: "Final picture"},
              {id: "4.2", title: "Letter to the editor"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Word definitions</a></li>
          <Collapse 
            id="6"
            item="References"
            sub={[
              {id: "6.1", title: "V.F.D. references"},
              {id: "6.2", title: "References to the real world"},
              {id: "6.3", title: "Name allusions"},
              {id: "6.4", title: "Setting allusions"},
              {id: "6.5", title: "Sunny's allusions"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Controversy"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/asoue">A Series of Unfortunate Events</Link></li>
          <li>The Bad Beginning</li>
        </ul>
        <div>
          <h1 className="article-heading">The Bad Beginning</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/6/68/BadBeginning.jpg" 
            alt="The Bad Beginning cover" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default BadBeginning;