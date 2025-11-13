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
            a series of <Link>animated shorts</Link> that debuted on The Tracey Ullman Show on <Link>Fox</Link> on April 19, 1987. After a three-season
            run, the sketch was developed into <Link>The Simpsons</Link>, a half-hour prime time show that was an early hit for Fox, becoming the first
            Fox series to land in the Top 30 ratings in a season (1989-1990). The popularity of The Simpsons had made it a billion-dollar merchandising
            and media franchise. Alongside the television series, the characters of the show have been featured in a variety of media, including books,
            comic books, a magazine, musical releases, and video games.
          </p>
          <p>
            <Link>The Simpsons Movie</Link>, a feature-length film, was released in 2007 and was the eighth highest-grossing film of that year. A variety
            of merchandise, including T-shirts, DVDs, board games, and action figures have been released. The Simpsons merchandise has sold well,
            generating $2 billion in revenue during the first 14 months of sales. In 2003, about 500 companies around the world were licensed to use The
            Simpsons characters in their advertising. In 2008, $750 million worth of The Simpsons merchandise were purchased worldwide. Peter Byrnes, Fox
            executive vice-president of licensing and merchandising, called The Simpsons "without doubt the biggest licensing entity that Fox has had,
            full stop, I would say from either TV or film."
          </p>
          <p>
            In 2002, the property was valued at $5 billion to $6 billion according to Fox.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Background</h2>
          <div>
            <h3 className="article-heading-3" id="1.1">Creation</h3>
            <h3 className="article-heading-3" id="1.2">Themes</h3>
            <h3 className="article-heading-3" id="1.3">Main characters</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Television</h2>
          <div>
            <h3 className="article-heading-3" id="2.1">Shorts on the Tracey Ullman Show</h3>
            <h3 className="article-heading-3" id="2.2">The Simpsons</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Films</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Feature films</h3>
            <h3 className="article-heading-3" id="3.2">Theatrical short films</h3>
            <h3 className="article-heading-3" id="3.3">In other media</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Print publication</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Books</h3>
            <h3 className="article-heading-3" id="4.2">Comic books</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Video games</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Theme park attractions</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Universal Studios</h3>
            <h3 className="article-heading-3" id="6.2">Broadway at the Beach</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Merchandise</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Home releases</h3>
            <h3 className="article-heading-3" id="7.2">Music</h3>
            <h3 className="article-heading-3" id="7.3">T-shirts</h3>
            <h3 className="article-heading-3" id="7.4">Action figures</h3>
            <h3 className="article-heading-3" id="7.5">Board and card games</h3>
            <h3 className="article-heading-3" id="7.6">Other</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default Simpsons;