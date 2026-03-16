import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const GuardiansOfTheGalaxyFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Guardians of the Galaxy (film) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development", sub2: [
                {id: "3.1.1", title: "Writing"}
              ]},
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production", sub2: [
                {id: "3.4.1", title: "Visual effects"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "5.1", title: "Promotion"},
              {id: "5.2", title: "Merchandise"}
            ]}
          />
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office", sub2: [
                {id: "7.1.1", title: "North America"},
                {id: "7.1.2", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Sequels and special"
            sub={[
              {id: "8.1", title: "Guardians of the Galaxy Vol. 2"},
              {id: "8.2", title: "The Guardians of the Galaxy Holiday Special"},
              {id: "8.3", title: "Guardians of the Galaxy Vol. 3"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Guardians of the Galaxy (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Guardians of the Galaxy (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Guardians of the Galaxy</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg" alt="Guardians of the Galaxy poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>James Gunn</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of MCU projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link to="/mcu/characters">List of MCU character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous MCU project</th>
              <td className="infobox-data"><Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Guardians of the Galaxy</b> (retroactively referred to as <b>Guardians of the Galaxy Vol. 1</b>) is a 2014 American superhero film based on the
            <Link to="/marvelcomics"> Marvel Comics</Link> superhero team <Link>of the same name</Link>. Produced by <Link>Marvel Studios</Link> and
            distrubited by Walt Disney Studios Motion Pictures, it is the 10th film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). Directed by
            <Link> James Gunn</Link>n who wrote the screenplay with Nocle Perlman, it features an ensemble cast including <Link>Chriss Pratt</Link>,
            <Link> Zoe Saldaña</Link>, <Link>Dave Bautista</Link>, <Link>Vin Diesel</Link>, and <Link>Bradley Cooper</Link> as the titular <Link>Guardians</Link>,
            along with Lee Pace, <Link>Michael Rooker</Link>, <Link>Karen Gillian</Link>, Djimon Hounsou, <Link>John C. Reilly</Link>, <Link>Glenn Close</Link>,
            and <Link>Benicio del Toro</Link>. In the film, <Link to="/mcu/peter_quill">Peter Quill</Link> (Pratt) and a group of extraterrestrial criminals go on
            the run after stealing a <Link>powerful artfiact</Link>.
          </p>
          <p>
            Perlman began working on the screenplay in 2009. Producer <Link>Kevin Feige</Link> first publicly mentioned Guardians of the Galaxy as a potential film
            in 2010 and Marvel Studios announced it was in active development at the June 2012 San Diego Comic-Con. Gunn was hired to write and direct the film that
            September. In February 2013, Pratt was hired to play Peter Quill / Star-Lord, and the supporting cast members were subsequently confirmed. Principal
            photography began in July 2013 at Shepperton Stuidos in England, with filming continuing in London before wrapping in October 2013. In addition to an
            original score by Tyler Bates, the soundtrack includes several popular songs from the 1960s and 1970s chosen by Gunn. Post-production was completed on
            July 7, 2014.
          </p>
          <p>
            Guardians of the Galaxy premiered at the Dolby Theatre in Hollywood, Los Angeles, on July 21, 2014, and was theatrically released in the United States
            on August 1 as part of <Link>Phase Two</Link> of the MCU. It was a critical and commercial success, grossing $773.3 million worldwide and became the
            third highest grossing film of 2014. It was praised for its screenplay, direction, acting, humor, soundtrack, visual effects, and action sequences. It
            was nominated for two awards at the 87th Academy Awards, and received numerous other accolades. Two sequels have been released:
            <Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link> (2017) and
            <Link to="/mcu/guardians_of_the_galaxy_vol_3">Guardians of the Galaxy Vol. 3</Link> (2023).
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <h4 className="article-heading-4" id="3.1.1">Writing</h4>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
            <h4 className="article-heading-4" id="3.4.1">Visual effects</h4>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Promotion</h3>
            <h3 className="article-heading-3" id="5.2">Merchandise</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h4 className="article-heading-4" id="7.1.1">North America</h4>
            <h4 className="article-heading-4" id="7.1.2">Other territories</h4>
            <h3 className="article-heading-3" id="7.2">Critical response</h3>
            <h3 className="article-heading-3" id="7.3">Accolades</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequels and special"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Guardians of the Galaxy Vol. 2</h3>
            <h3 className="article-heading-3" id="8.2">The Guardians of the Galaxy Holiday Special</h3>
            <h3 className="article-heading-3" id="8.3">Guardians of the Galaxy Vol. 3</h3>
          </div>
        </div>
        <TableMcu />
      </main>
    </>
  )
}

export default GuardiansOfTheGalaxyFilm;