import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const StarWars = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <Collapse 
            id="2"
            item="Films"
            sub={[
              {id: "2.1", title: "The Skywalker Saga", sub2: [
                {id: "2.1.1", title: "Original trilogy"},
                {id: "2.1.2", title: "Prequel trilogy"},
                {id: "2.1.3", title: "Sequel trilogy"},
              ]},
              {id: "2.2", title: "Standalone films"},
              {id: "2.3", title: "Upcoming films", sub2: [
                {id: "2.3.1", title: "Other potential projects"}
              ]}
            ]}
          />
          <Collapse 
            id="3"
            item="Television"
            sub={[
              {id: "3.1", title: "Animated series"},
              {id: "3.2", title: "Live-action series"},
              {id: "3.3", title: "Films and specials"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Fictional universe</a></li>
          <Collapse 
            id="5"
            item="Other media"
            sub={[
              {id: "5.1", title: "Print media", sub2: [
                {id: "5.1.1", title: "Novels"},
                {id: "5.1.2", title: "Comics"}
              ]},
              {id: "5.2", title: "Audio", sub2: [
                {id: "5.2.1", title: "Soundtracks and singles"},
                {id: "5.2.2", title: "Audio novels"},
                {id: "5.2.3", title: "Radio"},
              ]},
              {id: "5.3", title: "Video games", sub2: [
                {id: "5.3.1", title: "Early licensed games (1979-1993)"},
                {id: "5.3.2", title: "LucasArts and modern self-published games (1993-2014)"},
                {id: "5.3.3", title: "EA Star Wars (2014-present)"},
              ]},
              {id: "5.4", title: "Theme park attractions"},
              {id: "5.5", title: "Multimedia projects"},
              {id: "5.6", title: "Merchandising"},
            ]}
          />
          <Collapse 
            id="6"
            item="Themes"
            sub={[
              {id: "6.1", title: "Historical influences"}
            ]}
          />
          <Collapse 
            id="7"
            item="Cultural impact"
            sub={[
              {id: "7.1", title: "Indistry", sub2: [
                {id: "7.1.1", title: "Fan workds"}
              ]},
              {id: "7.2", title: "Academia"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Star Wars (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png" 
            alt="Star Wars logo"
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            <b>Star Wars</b> is an American epic space opera media franchise created by <a href="#">George Lucas</a>,
            which began with the <a href="#">eponymous 1977 film</a> and quickly became a worlwide pop
            culture phenomenon. The franchise has been expanded into <a href="#">various films</a> and <a href="#">other media</a>,
            including <a href="#">television series</a>, <a href="#">video games</a>, <a href="#">novels</a>, <a href="#">comic books</a>, <a href="#">theme park attractions</a>,
            and <a href="#">themed areas</a>, comprising an all-encompassing fictional universe.
            Star Wars is one of the highest-grossing media franchises of all time.
          </p>
        </div>
      </main>
    </>
  )
}

export default StarWars