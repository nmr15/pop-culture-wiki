import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const RogueOne = () =>
{
  useEffect(() =>
  {
    document.title = "Rogue One: A Star Wars Story - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Plot"
            sub={[
              {id: "1.1", title: "Capture of Galen Erso"},
              {id: "1.2", title: "Jyn's imprisonment"},
              {id: "1.3", title: "Mission to the Ring of Kafrene"},
              {id: "1.4", title: "An urgent message"},
              {id: "1.5", title: "Freeing Jyn Erso"},
              {id: "1.6", title: "When has become now"},
              {id: "1.7", title: "Battle on Jeddha"},
              {id: "1.8", title: "Galen's message"},
              {id: "1.9", title: "Destruction of Jeddha City"},
              {id: "1.10", title: "Mission to Eadu"},
              {id: "1.11", title: "Krennic's groveling on Mustafar"},
              {id: "1.12", title: "Rebel council meeting"},
              {id: "1.13", title: "Rogue One departs for Scarif"},
              {id: "1.14", title: "The Battle of Scarif"},
              {id: "1.15", title: "Secret mission to Tatooine"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Casting"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "5.1", title: "Promotion"},
              {id: "5.2", title: "Tie-in novels"},
              {id: "5.3", title: "Comics"},
              {id: "5.4", title: "Video games"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Release</a></li>
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.", title: "Box office"},
              {id: "7.", title: "Critical response"},
              {id: "7.", title: "Digital recreation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">TV series</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Rogue One: A Star Wars Story</li>
        </ul>
        <div>
          <h1 className="article-heading">Rogue One: A Star Wars Story</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Rogue One: A Star Wars Story</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png" alt="Rogue One: A Star Wars Story poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Gareth Edwards</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Films and series</th>
              <td className="infobox-data"><Link>List of Star Wars films and series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Star Wars characters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Rogue One: A Star Wars Story</b> is a 2016 American epic space opera film directed by <Link>Gareth Edwards</Link> and written by Chris Weitz and <Link>Tony
            Gilroy</Link>. Produced by <Link>Lucasfilm</Link> and distributed by Walt Disney Studios Motion Pictures, it is the first Star Wars anthology film and a prequel to
            <Link to="/starwars/a_new_hope"> Star Wars</Link> (1977). It stars <Link>Felicity Jones</Link>, <Link>Diego Luna</Link>, <Link>Ben Mendelsohn</Link>,
            <Link> Donnie Yen</Link>, <Link>Mads Mikkelsen</Link>, <Link>Alan Tudyk</Link>, Riz Ahmed, Jiang Wen, and <Link>Forest Whitaker</Link>. Set a week before the events of
            Star Wars, the film follows rebels who steal the schematics for the <Link>Galactic Empire</Link>'s ultimate weapon, the <Link>Death Star</Link>. It details the
            <Link> Revel Alliance</Link>'s first effective victory against the Empire, as referenced in the Star Wars opening crawl.
          </p>
          <p>
            John Knoll, who served as the visual effects supervisor of the <Link>Star Wars prequel trilogy</Link>, pitched Rogue One's story as an episode of the unproduced
            television series Star Wars: Underworld in 2003. He pitched it again as a film following Disney's acquisition of Lucasfilm in 2012; Edwards was hired to direct in 2014.
            Edwards sought to differentiate Rogue One from previous <Link to="/starwars">Star Wars</Link> films and approach it as a war film, omitting the opening crawl and
            transitional screen wipes used in the main "<Link>Skywalker Saga</Link>" installments. Principal photography began at Pinewood Studios, Buckinghamshire, in early
            August 2015 and wrapped in February 2016. The film went through extensive reshoots in mid-2016. The score was composed by <Link>Michael Giacchino</Link>, rather than
            the Skywalker Saga composer <Link>John Williams</Link>. With an estimated production budget of $200-280.2 million, Rogue One is one of the most expensive films ever
            made. 
          </p>
          <p>
            Rogue One: A Star Wars Story premiered in Los Angeles on December 10, 2016, and was theatrically released in the United States on December 16. It received positive
            reviews, with praise for its acting, story, visuals, musical score, cinematography, and darker tone than previous Star Wars films, but criticism for its pacing and
            digital recreations of <Link>Carrie Fisher</Link> and <Link>Peter Cushing</Link>. Rogue One grossed $1 billion worldwide, becoming the second highest grossing film of
            2016, and received two Academy Award nominations for Best Sound Mixing and Best Visual Effects. <Link to="/starwars/andor_series">Andor</Link>, a prequel television
            series, aired on the streaming service <Link>Disney+</Link> for two seasons from 2022 to 2025.
          </p>
        </div>
      </main>
    </>
  )
}

export default RogueOne;