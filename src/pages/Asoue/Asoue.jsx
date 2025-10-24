import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Asoue = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Background</a></li>
          <Collapse 
            id="2"
            item="Series overview"
            sub={[
              {id: "2.1", title: "Plot"},
              {id: "2.2", title: "Setting"},
              {id: "2.3", title: "Characters"}
            ]}
          />
          <Collapse 
            id="3"
            item="Literary analysis and themes"
            sub={[
              {id: "3.1", title: "Allusions"},
              {id: "3.2", title: "Genre"},
              {id: "3.3", title: "Morality in the series"},
              {id: "3.4", title: "Narration style"},
              {id: "3.5", title: "Repetition"},
              {id: "3.6", title: "Secrets in the series"},
              {id: "3.7", title: "Clues"}
            ]}
          />
          <Collapse 
            id="4"
            item="Distribution"
            sub={[
              {id: "4.1", title: "Books"},
              {id: "4.2", title: "Appearance"},
              {id: "4.3", title: "Accompanying books"},
              {id: "4.4", title: "All the Wrong Questions"}
            ]}
          />
          <Collapse 
            id="5"
            item="In other media"
            sub={[
              {id: "5.1", title: "Television"},
              {id: "5.2", title: "Film"},
              {id: "5.3", title: "Video game"},
              {id: "5.4", title: "Board games"},
              {id: "5.5", title: "Card games"},
              {id: "5.6", title: "Audio", sub2: [
                {id: "5.6.1", title: "Audio books"},
                {id: "5.6.2", title: "Album"}
              ]}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Reviews"},
              {id: "6.2", title: "Criticism"},
              {id: "6.3", title: "Sales"},
              {id: "6.4", title: "Awards"},
              {id: "6.5", title: "Book lists"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>A Series of Unfortunate Events</li>
        </ul>
        <div>
          <h1 className="article-heading">A Series of Unfortunate Events</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/A_Series_of_Unfortunate_Events_Logo.jpg" 
            alt="A Series of Unfortunate Events logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default Asoue;