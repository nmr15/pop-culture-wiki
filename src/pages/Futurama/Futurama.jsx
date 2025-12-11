import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const Futurama = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Premise"
            sub={[
              {id:"1.1", title: "Characters"},
              {id:"1.2", title: "Setting"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Writing"},
              {id: "3.3", title: "Voice actors"},
              {id: "3.4", title: "Animation"}
            ]}
          />
          <Collapse 
            id="4"
            item="Hallmarks"
            sub={[
              {id: "4.1", title: "Opening sequence"},
              {id: "4.2", title: "Languages"},
              {id: "4.3", title: "30th Century Fox"},
              {id: "4.4", title: "Humor"}
            ]}
          />
          <Collapse 
            id="5"
            item="Cancellations, syndications, and revivals"
            sub={[
              {id: "5.1", title: "Fox cancellation"},
              {id: "5.2", title: "Adult Swim reruns"},
              {id: "5.3", title: "Comedy Central revival"},
              {id: "5.4", title: "Comedy Central cancellation"},
              {id: "5.5", title: "Simpsorama"},
              {id: "5.6", title: "Syndication"},
              {id: "5.7", title: "Hulu revival"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Ratings"},
              {id: "6.3", title: "Accolades"},
              {id: "6.4", title: "Other honors"}
            ]}
          />
          <Collapse 
            id="7"
            item="Other media"
            sub={[
              {id: "7.1", title: "Comic books"},
              {id: "7.2", title: "Films"},
              {id: "7.3", title: "Video games"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Futurama</li>
        </ul>
        <div>
          <h1 className="article-heading">Futurama</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Futurama_1999_logo.svg/440px-Futurama_1999_logo.svg.png" 
            alt="Futurama logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Futurama is an American animated science fiction sitcom created by <Link>Matt Groening</Link> for the Fox Broadcasting Company and later
            revived by Comedy Central, and then Hulu. The series follows <Link>Philip J. Fry</Link>, a young man who is cryogenically preserved for 1,000
            years and revived on December 31, 2999. Fry finds work at the interplanetary delivery company <Link>Planet Express</Link>, working alongside
            the one-eyed mutant <Link>Leela</Link> and the robot <Link>Bender</Link>. The series was envisioned by Groening in the mid-1990s while
            working on The Simpsons; he brought David X. Cohen aboard to develop storylines and characters to pitch the show on Fox.
          </p>
          <p>
            Following its initial cancellation by Fox, Futurama began airing reruns on <Link>Cartoon Network</Link>'s Adult Swim programming block, which
            lasted from 2003 to 2007. It was revived in 2007 as four direct-to-video films, the last of which was released in early 2009. Comedy Central
            entered into an agreement with 20th Century Fox Television to syndicate the existing episodes and air the films as 16 new, half-hour episodes,
            constituting a fifth production season, or the sixth to be broadcast (in 2008 and 2009).
          </p>
        </div>
      </main>
    </>
  )
}

export default Futurama;