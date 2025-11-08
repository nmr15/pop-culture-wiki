import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Spongebob = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Development"
            sub={[
              {id: "1.1", title: "Early inspirations"},
              {id: "1.2", title: "Conception"},
              {id: "1.3", title: "Assembling the crew"},
              {id: "1.4", title: "Pitching"}
            ]}
          />
          <Collapse 
            id="2"
            item="Television series"
            sub={[
              {id: "2.1", title: "Spongebob Squarepants (1999-present)"},
              {id: "2.2", title: "Kamp Koral!: Spongebob's Under Years (2021-2024)"},
              {id: "2.3", title: "The Patrick Star Show (2021-present)"}
            ]}
          />
          <Collapse 
            id="4"
            item="Films"
            sub={[
              {id: "4.1", title: "The Spongebob Squarepants Movie (2004)"},
              {id: "4.2", title: "The Spongebob Movie: Sponge Out of Water (2015)"},
              {id: "4.3", title: "The Spongebob Movie: Sponge on the Run (2020)"},
              {id: "4.4", title: "In development", sub2: [
                {id: "4.4.1", title: "The Spongebob Movie: Search for Squarepants (2025)"}
              ]},
              {id: "4.5", title: "Spin-off films", sub2: [
                {id: "4.5.1", title: "Saving Bikini Bottom: The Sandy Cheeks Movie (2024)"},
                {id: "4.5.2", title: "Plankton: The Movie (2025)"}
              ]},
              {id: "4.6", title: "Fans' short films", sub2: [
                {id: "4.6.1", title: "Spongebob Squareshorts"}
              ]},
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Video games</a></li>
          <li className="sidebar-list-item"><a href="#6">Comic books</a></li>
          <li className="sidebar-list-item"><a href="#7">Music</a></li>
          <li className="sidebar-list-item"><a href="#8">Theater</a></li>
          <li className="sidebar-list-item"><a href="#9">Theme park rides</a></li>
          <li className="sidebar-list-item"><a href="#10">Merchandise</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Spongebob Squarepants (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Spongebob Squarepants (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png" 
            alt="Spongebob Squarepants logo"
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          Spongebob Squarepants is an American animated comedy media franchise created by marine science eduactor and animator
          <Link> Stephen Hillenburg</Link> and owned by <Link>Nickelodeon</Link>. It begain with the <Link>series</Link>, which premiered in 1999, and
          went on to become one of the longest-running American animated series. The franchise is the most profitable property for Paramount Consumer
          Products, having generated over $13 billion in merchandising revenue.
        </div>
      </main>
    </>
  )
}

export default Spongebob
