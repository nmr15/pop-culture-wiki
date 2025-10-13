import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Himym = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <li className="sidebar-list-item"><a href="#3">Production</a></li>
          <li className="sidebar-list-item"><a href="#4">Syndication</a></li>
          <li className="sidebar-list-item"><a href="#5">Cast and characters</a></li>
          <Collapse 
            id="6"
            item="Season synopses"
            sub={[
              {id: "6.1", title: "Season 1"},
              {id: "6.2", title: "Season 2"},
              {id: "6.3", title: "Season 3"},
              {id: "6.4", title: "Season 4"},
              {id: "6.5", title: "Season 5"},
              {id: "6.6", title: "Season 6"},
              {id: "6.7", title: "Season 7"},
              {id: "6.8", title: "Season 8"},
              {id: "6.9", title: "Season 9"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Critical reception</a></li>
          <Collapse 
            id="7"
            item="Subplots"
            sub={[
              {id: "7.1", title: "The Slap Bet"},
              {id: "7.2", title: "The Pineapple Incident"},
              {id: "7.3", title: "Robin Sparkles"},
              {id: "7.4", title: "The Doppelgangers"},
              {id: "7.5", title: "The Playbook"},
              {id: "7.6", title: "Marshall vs. Machines"},
            ]}
          />
          <Collapse 
            id="8"
            item="Tie-ins"
            sub={[
              {id: "8.1", title: "Books"},
              {id: "8.2", title: "Podcasts"},
              {id: "8.3", title: "Music Volume"},
              {id: "8.4", title: "Soundtracks"},
              {id: "8.5", title: "Pineapple incident explained"},
              {id: "8.6", title: "Websites"},
              {id: "8.7", title: "Spin-offs", sub2: [
                {id: "8.7.1", title: "How I Met Your Dad"},
                {id: "8.7.2", title: "How I Met Your Father"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Nielsen ratings</a></li>
          <li className="sidebar-list-item"><a href="#10">Awards and nominations</a></li>
          <li className="sidebar-list-item"><a href="#11">Home media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>How I Met Your Mother</li>
        </ul>
        <div>
          <h1 className="article-heading">How I Met Your Mother</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/HowIMetYourMother.svg/440px-HowIMetYourMother.svg.png" 
            alt="How I Met Your Mother" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            <b>How I Met Your Mother</b> is an American sitcom created by Craig Thomas and Carter Bays for CBS. The series, which aired from September 19, 2005,
            to March 31, 2014, follows main character <a href="#">Ted Mosby</a> and his group of friends in New York City's Manhattan. As a frame story, Ted (in 2030)
            recounts to his daughter Penny and son Luke the events from September 2005 to May 2013 that led to him meeting <a href="#">their mother</a>.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Premise</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Production</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Syndication</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Cast and characters</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Season synopses</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Season 1</h3>
            <h3 className="article-heading-3" id="5.2">Season 2</h3>
            <h3 className="article-heading-3" id="5.3">Season 3</h3>
            <h3 className="article-heading-3" id="5.4">Season 4</h3>
            <h3 className="article-heading-3" id="5.5">Season 5</h3>
            <h3 className="article-heading-3" id="5.6">Season 6</h3>
            <h3 className="article-heading-3" id="5.7">Season 7</h3>
            <h3 className="article-heading-3" id="5.8">Season 8</h3>
            <h3 className="article-heading-3" id="5.9">Season 9</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Critical reception</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Subplots</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">The Slap Bet</h3>
            <h3 className="article-heading-3" id="7.2">The Pineapple Incident</h3>
            <h3 className="article-heading-3" id="7.3">Robin Sparkles</h3>
            <h3 className="article-heading-3" id="7.4">The Doppelgangers</h3>
            <h3 className="article-heading-3" id="7.5">The Playbook</h3>
            <h3 className="article-heading-3" id="7.6">Marshall vs. Machines</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Tie-ins</h2>
          <div>
            <h3 className="article-heading-3" id="8.1">Books</h3>
            <h3 className="article-heading-3" id="8.2">Podcasts</h3>
            <h3 className="article-heading-3" id="8.3">Music Volume</h3>
            <h3 className="article-heading-3" id="8.4">Soundtracks</h3>
            <h3 className="article-heading-3" id="8.5">Pineapple incident explained</h3>
            <h3 className="article-heading-3" id="8.6">Websites</h3>
            <h3 className="article-heading-3" id="8.7">Spin-offs</h3>
            <h4 className="article-heading-4" id="8.7.1">How I Met Your Dad</h4>
            <h4 className="article-heading-4" id="8.7.2">How I Met Your Father</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="9">Nielsen ratings</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="10">Awards and nominations</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="11">Home media</h2>
          <div></div>
        </div>
      </main>
    </>
  )
}

export default Himym
