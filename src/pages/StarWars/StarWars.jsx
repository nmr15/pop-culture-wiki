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
          <p>
            The original 1977 film, retroactively subtitled <Link to="/starwars/a_new_hope">Episode IV: A New Hope</Link>, was followed by the sequels
            <Link to="/starwars/the_empire_strikes_back"> Episode V: The Empire Strikes Back</Link> (1980) and
            <Link to="/starwars/return_of_the_jedi"> Episode VI: Return of the Jedi</Link> (1983), forming the <Link>original Star Wars trilogy</Link>.
            Lucas later returned to the series to write and direct <Link>a prequel trilogy</Link>, consisting of
            <Link to="/starwars/the_phantom_menace"> Episode I: The Phantom Menace</Link> (1999), <Link to="/starwars/attack_of_the_clones">Episode
            II: Attack of the Clones</Link> (2002), and <Link to="/starwars/revenge_of_the_sith">Episode III: Revenge of the Sith</Link> (2005). In 2012,
            Lucas sold his production company to <Link>Disney</Link>, relinquishing his ownership of the franchise. This led to <Link>a sequel
            trilogy</Link>, consisting of <Link to="/starwars/the_force_awakens">Episode VII: The Force Awakens</Link> (2015),
            <Link to="/starwars/the_last_jedi">Episode VIII: The Last Jedi</Link> (2017), and <Link to="/starwars/the_rise_of_skywalker">Episode
            IX: The Rise of Skywalker</Link> (2019).
          </p>
          <p>
            All nine films, collectively referred to as the "Skywalker Saga", were nominated for Academy Awards, with Oscars going to the first three
            releases. Together with the theatrical live action "anthology" films <Link to="/starwars/rogue_one">Rogue One</Link> (2016) and
            <Link to="/starwars/solo">Solo</Link> (2018), the combined box office revenue of the films equate to over US$10 billion, making Star Wars
            the third-highest-grossing film franchise in cinematic history.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Premise</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Films</h2>
          <div>
            <h3 className="article-heading-3" id="2.1">The Skywalker Saga</h3>
            <h4 className="article-heading-4" id="2.1.1">Original trilogy</h4>
            <h4 className="article-heading-4" id="2.1.2">Prequel trilogy</h4>
            <h4 className="article-heading-4" id="2.1.3">Sequel trilogy</h4>
            <h3 className="article-heading-3" id="2.2">Standalone films</h3>
            <h3 className="article-heading-3" id="2.3">Upcoming films</h3>
            <h4 className="article-heading-4" id="2.3.1">Other potential projects</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Television</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Animated series</h3>
            <h3 className="article-heading-3" id="3.2">Live-action series</h3>
            <h3 className="article-heading-3" id="3.3">Films and specials</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Fictional universe</h2>
          <div>
            
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Other media</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Print media</h3>
            <h4 className="article-heading-4" id="5.1.1">Novels</h4>
            <h4 className="article-heading-4" id="5.1.2">Comics</h4>
            <h3 className="article-heading-3" id="5.2">Audio</h3>
            <h4 className="article-heading-4" id="5.2.1">Soundtracks and singles</h4>
            <h4 className="article-heading-4" id="5.2.2">Audio novels</h4>
            <h4 className="article-heading-4" id="5.2.3">Radio</h4>
            <h3 className="article-heading-3" id="5.3">Video games</h3>
            <h4 className="article-heading-4" id="5.3.1">Early licensed games (1979-1993)</h4>
            <h4 className="article-heading-4" id="5.3.2">LucasArts and modern self-published games (1993-2014)</h4>
            <h4 className="article-heading-4" id="5.3.3">EA Star Wars (2014-present)</h4>
            <h3 className="article-heading-3" id="5.4">Theme park attractions</h3>
            <h3 className="article-heading-3" id="5.5">Multimedia projects</h3>
            <h3 className="article-heading-3" id="5.6">Merchandising</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Themes</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Historical influences</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Cultural impact</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Indistry</h3>
            <h4 className="article-heading-4" id="7.1.1">Fan workds</h4>
            <h3 className="article-heading-3" id="7.2">Academia</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default StarWars