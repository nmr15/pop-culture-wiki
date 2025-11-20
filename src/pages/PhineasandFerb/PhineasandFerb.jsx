import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const PhineasandFerb = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
          <li className="sidebar-list-item"><a href="#3">Characters</a></li>
          <Collapse 
            id="4"
            item="Development"
            sub={[
              {id: "4.1", title: "Early inspirations"},
              {id: "4.2", title: "Conception"},
              {id: "4.3", title: "Pitching and pickup"}
            ]}
          />
          <Collapse 
            id="5"
            item="Production"
            sub={[
              {id: "5.1", title: "Wiring style"},
              {id: "5.2", title: "Visual aspects and animation"},
              {id: "5.3", title: "Cast"},
              {id: "5.4", title: "Music"},
              {id: "5.5", title: "Conclusion and revival"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Ratings"},
              {id: "6.3", title: "Awards and nominations"}
            ]}
          />
          <Collapse 
            id="7"
            item="Other media"
            sub={[
              {id: "7.1", title: "Films"},
              {id: "7.2", title: "Crossovers and short series"},
              {id: "7.3", title: "Fireside Girls scrapped and unconfirmed spinoff series"},
              {id: "7.4", title: "Video games"},
              {id: "7.5", title: "Live tour"},
              {id: "7.6", title: "Merchandise"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Phineas and Ferb</li>
        </ul>
        <div>
          <h1 className="article-heading">Phineas and Ferb</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Phineas_and_Ferb_logo.svg/500px-Phineas_and_Ferb_logo.svg.png" 
            alt="Phineas and Ferb logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Phineas and Ferb is an American animated musical-comedy television series created by <Link>Dan Povenmire</Link> and <Link>Jeff "Swampy"
            Marsh</Link> for <Link>Disney Channel</Link> and <Link>Disney XD</Link>. The series originally aired on the network for four seasons between
            2007 and 2015, and returned for the first of two additional seasons in 2025. The series follows stepbrothers <Link>Phineas Flynn</Link> and
            <Link> Ferb Fletcher</Link>, who construct a grand project or embark on an adventure each day to make the most of their time on summer
            vacation, to the annoyance of Phineas' older sister <Link>Candace Flynn</Link>. Candace's attempts to expose their schemes to her mother
            always fail due to the fights between local evil scientist <Link>Dr. Heinz Doofenshmirtz</Link> and the boys' secret agent pet
            <Link> Perry the Platypus</Link> inadvertently removing all evidence of their work. The series follows a standard plot system, with several
            running gags occuring each episode.
          </p>
          <p>
            Povenmire and Marsh conceived the characters while working together on animated programs <Link to="/simpsons">The Simpsons</Link> and Rocko's
            Modern Liffe in the 2990s, and were inspired by the summers of their own childhoods. They developed the series together and pitched it to
            networks for 16 years before successfully selling it to The Walt Disney Company. Phineas and Ferb is produced by Disney Television Animation,
            and was originally broadcast as a one-episode preview on August 17, 2007, following the premiere of the made-for-television film High School
            Musical 2. It again previewed on September 28, 2007, and officially premiered on Disney Channel on February 1, 2008. The series originally
            concluded on June 12, 2015, before two new seasons were ordered in January 2023, with the <Link>fifth season</Link> premiering on Disney
            Channel on June 5, 2025, and on <Link>Disney+</Link> the following day.
          </p>
        </div>
      </main>
    </>
  )
}

export default PhineasandFerb;