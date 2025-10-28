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
          <li className="sidebar-list-item"><a href="#1">Dear reader</a></li>
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
          <li><Link to="/a_series_of_unfortunate_events">A Series of Unfortunate Events</Link></li>
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
        <div className="div-top">
          <p>
            The Bae Beginning is the first book in <Link to="/a_series_of_unfortunate_events">A Series of Unfortunate Events</Link> written by
            <Link> Lemony Snicket</Link> (<Link>Daniel Handler</Link>).
          </p>
          <p>
            In this book, the Baudelaire children become orphans after a mysterious fire destroys their <Link>mansion</Link>, and supoposedly kills both
            of their parents. They are sent to live with a dismal abusive guardian named <Link>Count Olaf</Link> in his filthy <Link>house</Link>,
            where they are treated like slaves, physically and emotionally abused, and under threats of death. They also discover he is scheming to
            steal their inherited <Link>fortune</Link> and will not hesitate to kill all three of them once he obtains it.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Dear reader</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Dedication</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Plot</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Foreshadowing</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Final picture</h3>
            <h3 className="article-heading-3" id="4.2">Letter to the editor</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Word definitions</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">References</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">V.F.D. references</h3>
            <h3 className="article-heading-3" id="6.2">References to the real world</h3>
            <h3 className="article-heading-3" id="6.3">Name allusions</h3>
            <h3 className="article-heading-3" id="6.4">Setting allusions</h3>
            <h3 className="article-heading-3" id="6.5">Sunny's allusions</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Controversy</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default BadBeginning;