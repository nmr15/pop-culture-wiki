import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import TableCommunity from '../../../components/TableCommunity'

const CommunityS1E4 = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">End tag</a></li>
          <Collapse 
            id="3"
            item="Recurring themes"
            sub={[
              {id: "3.1", title: "Continuity", sub2: [
                {id: "3.1.1", title: "Narrative"},
                {id: "3.1.2", title: "People"},
                {id: "3.1.3", title: "Places"},
                {id: "3.1.4", title: "Things"}
              ]},
              {id: "3.2", title: "Running gags"},
              {id: "3.3", title: "Pop culture references"},
            ]}
          />
          <Collapse 
            id="4"
            item="Trivia"
            sub={[
              {id: "4.1", title: "DVD differences", sub2: [
                {id: "4.1.1", title: "Intro with Chang"},
                {id: "4.1.2", title: "First Duncan scene"},
                {id: "4.1.3", title: "Second Duncan scene"},
              ]},
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Quotes</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li>Social Psychology</li>
        </ul>
        <div>
          <h1 className="article-heading">Social Psychology</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://static.wikia.nocookie.net/community-sitcom/images/1/1a/Troy_dragging_legs.gif" 
            alt="Social Psychology" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default CommunityS1E4;