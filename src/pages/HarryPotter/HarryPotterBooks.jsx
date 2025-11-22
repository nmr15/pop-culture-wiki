import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const HarryPotterBooks = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Plot"
            sub={[
              {id: "1.1", title: "Early years"},
              {id: "1.2", title: "Voldemort returns"}
            ]}
          />
          <Collapse 
            id="2"
            item="Style and allusions"
            sub={[
              {id: "2.1", title: "Genre and style"},
              {id: "2.2", title: "Allusions"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Themes</a></li>
          <Collapse 
            id="4"
            item="Development history"
            sub={[
              {id: "4.1", title: "Publishing history"},
              {id: "4.2", title: "Translations"},
              {id: "4.3", title: "Cover art"}
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Commercial success"},
              {id: "5.2", title: "Literary criticism"},
              {id: "5.3", title: "Themes critique"},
              {id: "5.4", title: "Controversies"}
            ]}
          />
          <Collapse 
            id="6"
            item="Legacy"
            sub={[
              {id: "6.1", title: "Influence on literature"},
              {id: "6.2", title: "Cultural impact"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Awards, honors, and recognition</a></li>
          <Collapse 
            id="7"
            item="Adaptations"
            sub={[
              {id: "7.1", title: "Films", sub2: [
                {id: "7.1.1", title: "Spin-off prequels"}
              ]},
              {id: "7.2", title: "Games"},
              {id: "7.3", title: "Stage production"},
              {id: "7.4", title: "Television"},
              {id: "7.5", title: "Full-cast audiobook"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Attractions</a></li>
          <li className="sidebar-list-item"><a href="#9">Supplementary works</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Harry Potter (books)</li>
        </ul>
        <div>
          <h1 className="article-heading">Harry Potter (books)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Harry_Potter_%28Bloomsbury_Publishing%29_series_logo.webp/500px-Harry_Potter_%28Bloomsbury_Publishing%29_series_logo.webp.png" 
            alt="Harry Potter logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard,
            <Link> Harry Potter</Link>, and his friends, <Link>Ron Weasley</Link>, and <Link>Hermione Granger</Link>, all of whom are students at
            <Link> Hogwarts School of Witchcraft and Wizardry</Link>. The main story arc concerns Harry's conflict with <Link>Lord Voldemort</Link>, a
            dark wizard who intends to become immortal, overthrow the wizard governing body known as the <Link>Ministry of Magic</Link>, and subjugate
            all wizards and <Link>Muggles</Link> (non-magical people).
          </p>
          <p>
            The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. A series of
            many genres, including fantasy, drama, coming-of-age fiction, and the British school story (which includes elements of mystery, thriller,
            adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meaning and references.
            Major themes in the series include prejudice, corruption, madness, love, and death.
          </p>
        </div>
      </main>
    </>
  )
}

export default HarryPotterBooks;