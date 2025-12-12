import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const StarWars = () => 
{
  useEffect(() =>
  {
    document.title = "Star Wars (franchise) - Pop Culture Wiki";
  }, []);

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
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Star Wars</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png" alt="Star Wars logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>George Lucas</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Owner</th>
              <td className="infobox-data">Lucasfilm</td>
            </tr>
            <tr>
              <th className="infobox-data">Films</th>
              <td className="infobox-data"><Link>List of Star Wars films</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Series</th>
              <td className="infobox-data"><Link>List of Star Wars series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Character</th>
              <td className="infobox-data"><Link>List of Star Wars character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Video games</th>
              <td className="infobox-data"><Link>List of Star Wars video games</Link></td>
            </tr>
          </tbody>
        </table>
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
          <Heading2 id={1} title={"Premise"} />
          <div>
            <p>
              The Star Wars franchise depicts the adventures of characters "a long time ago in a <Link>galaxy</Link> far, far away" across
              <Link> multiple fictional eras</Link>, in which humans and many species of <Link>aliens</Link> (often humanoid) co-exist with
              <Link> droids</Link>, which may be programmed for personal assistance or battle. Space travel between planets is common due to lightspeed
              hyperspace technology. The planets range from wealthy, planet-wide cities to deserts scracely populated by primitive tribes. Virtually any
              Earth biome, along with many fictional ones, has its counterpart as a Star Wars planet which, in most cases, teem with sentient and
              non-sentient alien life. The franchise also makes use of other astrological objects such as asteroid fields and nebulae. Spacecraft range
              from small <Link>starfighters</Link> to large <Link>capital ships</Link>, such as <Link>Star Destroyers</Link>, as well as space stations
              such as the moon-sized <Link>Death Stars</Link>. Telecommunication includes two-way audio and audiovisual screens, holographic projections,
              and hyperspace transmission.
            </p>
            <p>
              The universe of Star Wars is generally similar to the real universe but its laws of physics are less strict allowing for more imaginative
              stories. One result of that is a mystical power known as <Link>the Force</Link> which is described in the original film as "an energy field
              created by all living things ... [that] bins the galaxy together". The field is depicted as a kind of pantheistic god. Through training and
              meditation, those whom "the Force is strong with" exhibit various superpowers (such as telekinesis, precognition, telepathy, and manipulation
              of physical energy); it is believed nothing is impossible for the Force. These superpowers are wielded by two major knightly orders at
              conflict with each other: the <Link>Jedi</Link>, peacekeepers of the <Link>Galactic Republic</Link> who act on the light side of the Force
              through non-attachment and arbitration, and the <Link>Sith</Link>, who use the dark side by manipulating anger, fear, and aggression. While
              Jedi Knights can be numerous, the Dark Lords of the Sith (or 'Sith Lords') are intended to be limited to two: a master and their apprentice.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Films"} />
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
          <Heading2 id={3} title={"Television"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Animated series</h3>
            <h3 className="article-heading-3" id="3.2">Live-action series</h3>
            <h3 className="article-heading-3" id="3.3">Films and specials</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Fictional universe"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Other media"} />
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
          <Heading2 id={6} title={"Themes"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Historical influences</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Cultural impact"} />
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