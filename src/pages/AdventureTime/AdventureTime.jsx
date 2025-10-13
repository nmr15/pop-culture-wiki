import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const AdventureTime = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Main characters</a></li>
          <Collapse 
            id="2"
            item="Television series"
            sub={[
              {id: "2.1", title: "Adventure Time Shorts (2007)"},
              {id: "2.1", title: "Adventure Time (2010-2018)"},
              {id: "2.1", title: "Adventure Time: Distant Lands (2020-2021)"},
              {id: "2.1", title: "Adventure Time: Fionna and Cake (2023-present)"},
              {id: "2.1", title: "Side Quest"},
              {id: "2.1", title: "Heyo BMO"}
            ]}
          />
          <Collapse 
            id="3"
            item="References in other media"
            sub={[
              {id: "3.1", title: "Cameo in Futurama"},
              {id: "3.2", title: "Parody in The Simpsons"}
            ]}
          />
          <Collapse 
            id="4"
            item="Comic series"
            sub={[
              {id: "4.1", title: "Comic books", sub: [
                {id: "4.1.1", title: "Trade Paperback collections"},
                {id: "4.1.2", title: "Sugary Shorts"},
                {id: "4.1.3", title: "Miniseries"},
                {id: "4.1.4", title: "Fionna and Cake comics"},
              ]},
              {id: "4.2", title: "Graphic novels"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Adventure Time (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Adventure Time (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2020/09/Adventure-Time-Logo-1280x800.png" 
            alt="Adventure Time logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Adventure Time is an American animated fantasy franchise created by <Link>Pendleton Ward</Link>, set in the post-apocalyptic Land
            of Ooo.
          </p>
        </div>
      </main>
    </>
  )
}

export default AdventureTime;