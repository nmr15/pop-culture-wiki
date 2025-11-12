import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Simpsons = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Background"
            sub={[
              {id: "1.1", title: "Creation"},
              {id: "1.1", title: "Themes"},
              {id: "1.1", title: "Main characters"}
            ]}
          />
          <Collapse 
            id="2"
            item="Television"
            sub={[
              {id: "2.1", title: "Shorts on the Tracey Ullman Show"},
              {id: "2.2", title: "The Simpsons", sub2: [
                {id: "2.2.1", title: "Crossovers"},
                {id: "2.2.2", title: "Disney+ shorts"}
              ]}
            ]}
          />
          <Collapse 
            id="3"
            item="Films"
            sub={[
              {id: "3.1", title: "Feature films", sub2: [
                {id: "3.1.1", title: "The Simpsons Movie"},
                {id: "3.1.2", title: "Upcoming film"}
              ]},
              {id: "3.2", title: "Theatrical short films", sub2: [
                {id: "3.2.1", title: "The Longest Daycare"},
                {id: "3.2.2", title: "Playdate with Destiny"}
              ]},
              {id: "3.3", title: "In other media"},
            ]}
          />
          <Collapse 
            id="4"
            item="Print publication"
            sub={[
              {id: "4.1", title: "Books", sub2: [
                {id: "4.1.1", title: "Episode guides"}
              ]},
              {id: "4.2", title: "Comic books", sub2: [
                {id: "4.2.1", title: "Simpsons Illustrated"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Video games</a></li>
          <Collapse 
            id="6"
            item="Theme park attractions"
            sub={[
              {id: "6.1", title: "Universal Studios"},
              {id: "6.2", title: "Broadway at the Beach"}
            ]}
          />
          <Collapse 
            id="7"
            item="Merchandise"
            sub={[
              {id: "7.1", title: "Home releases"},
              {id: "7.2", title: "Music"},
              {id: "7.3", title: "T-shirts"},
              {id: "7.4", title: "Action figures", sub2: [
                {id: "7.4.1", title: "Lego"}
              ]},
              {id: "7.5", title: "Board and card games"},
              {id: "7.6", title: "Other"},
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>The Simpsons (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Simpsons</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/220px-The_Simpsons_yellow_logo.svg.png" 
            alt="The Simpsons logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            The Simpsons is an American animated comedy franchise whose eponymous family consists of <Link>Homer</Link>, <Link>Marge</Link>,
            <Link> Bart</Link>, <Link>Lisa</Link>, and <Link>Maggie</Link>. The Simpsons were created by cartoonist <Link>Matt Groening</Link> for
            a series of <Link>animated shorts</Link> that debuted on The Tracey Ullman Show on <Link>Fox</Link> on April 19, 1987.
          </p>
        </div>
      </main>
    </>
  )
}

export default Simpsons;