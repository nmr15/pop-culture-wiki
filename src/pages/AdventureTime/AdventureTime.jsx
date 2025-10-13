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
              {id: "4.1", title: "Comic books", sub2: [
                {id: "4.1.1", title: "Trade Paperback collections"},
                {id: "4.1.2", title: "Sugary Shorts"},
                {id: "4.1.3", title: "Miniseries"},
                {id: "4.1.4", title: "Fionna and Cake comics"},
              ]},
              {id: "4.2", title: "Graphic novels"}
            ]}
          />
          <Collapse 
            id="5"
            item="Video games"
            sub={[
              {id: "5.1", title: "Adventure Time: Hey Ice King! Why'd You Steal Our Garbage?!! (2012)"},
              {id: "5.2", title: "Adventure Time: Explore the Dungeon Because I Don't Know! (2013)"},
              {id: "5.3", title: "Adventure Time: The Secret of the Nameless Kingdom (2014)"},
              {id: "5.4", title: "Adventure Time: Finn & Jake Investigations (2015)"},
              {id: "5.5", title: "Adventure Time: Pirates of the Enchiridion (2018)"}
            ]}
          />
          <Collapse 
            id="6"
            item="Books"
            sub={[
              {id: "6.1", title: "Epic Tales from Adventure Time (2014-2016"}
            ]}
          />
          <Collapse 
            id="7"
            item="Merchandise"
            sub={[
              {id: "7.1", title: "Home release"},
              {id: "7.2", title: "Board and card games"},
              {id: "7.3", title: "Lego"},
              {id: "7.4", title: "Other"},
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
        <div>
          <h2 className="article-heading-2" id="1">Main characters</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Television series</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">References in other media</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Comic series</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Video games</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Books</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Merchandise</h2>
          <div></div>
        </div>
      </main>
    </>
  )
}

export default AdventureTime;