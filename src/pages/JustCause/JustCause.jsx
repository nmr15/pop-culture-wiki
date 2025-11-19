import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const JustCause = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Overview</a></li>
          <Collapse 
            id="2"
            item="Games"
            sub={[
              {id: "2.1", title: "Just Cause (2006)"},
              {id: "2.2", title: "Just Cause 2 (2010)"},
              {id: "2.3", title: "Just Cause 3 (2015)"},
              {id: "2.4", title: "Just Cause 4 (2018)"},
              {id: "2.5", title: "Just Cause Mobile (Cancelled)"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Reception</a></li>
          <li className="sidebar-list-item"><a href="#4">Film adaptation</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Just Cause (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Just Cause (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Just_Cause_logo.svg/580px-Just_Cause_logo.svg.png"
            alt="Just Cause"
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default JustCause;