import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const GravityFalls = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
            <li className="sidebar-list-item"><a href="#top">Top</a></li>
            <li className="sidebar-list-item"><a href="#1">Premise</a></li>
            <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
            <li className="sidebar-list-item"><a href="#3">Voice cast</a></li>
            <Collapse 
              id="4"
              item="Production"
              sub={[
                {id: "4.1", title: "Conception"},
                {id: "4.2", title: "Writing"},
                {id: "4.3", title: "Animation"}
              ]}
            />
            <Collapse 
              id="5"
              item="Broadcast"
              sub={[
                {id: "5.1", title: "Initial broadcast"},
                {id: "5.2", title: "International broadcast"},
                {id: "5.3", title: "Broadcast edits"}
              ]}
            />
            <Collapse 
              id="6"
              item="Merchandise"
              sub={[
                {id: "6.1", title: "Home media"},
                {id: "6.2", title: "Books"},
                {id: "6.3", title: "Video game"}
              ]}
            />
            <Collapse 
              id="7"
              item="Reception"
              sub={[
                {id: "7.1", title: "Critical reception"},
                {id: "7.2", title: "Ratings"},
                {id: "7.3", title: "Influence, legacy, and industry impact"},
                {id: "7.4", title: "Awards and nominations"},
              ]}
            />
            <li className="sidebar-list-item"><a href="#8">Future</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Gravity Falls</li>
        </ul>
        <div>
          <h1 className="article-heading">Gravity Falls</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2021/12/Gravity-Falls-Logo-1536x864.png" 
            alt="Gravity Falls logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
            <p>
                Gravity Falls is an American animated mystery comedy television series created by <Link>Alex Hirsch</Link> for <Link>Disney Channel</Link> and
                <Link> Disney XD</Link>.
            </p>
        </div>
      </main>
    </>
  )
}

export default GravityFalls;