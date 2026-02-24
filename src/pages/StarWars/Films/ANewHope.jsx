import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ANewHope = () =>
{
  useEffect(() =>
  {
    document.title = "Episode IV: A New Hope - Pop Culture Wiki";
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
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Writing"},
              {id: "3.3", title: "Casting"},
              {id: "3.4", title: "Design"},
              {id: "3.5", title: "Filming"},
              {id: "3.6", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Soundrack</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "MPAA rating"},
              {id: "6.2", title: "First public screening"},
              {id: "6.3", title: "Premiere and initial release"},
              {id: "6.4", title: "Box office"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Critical response"},
              {id: "7.2", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Post-release"
            sub={[
              {id: "8.1", title: "Theatrical re-releases", sub2: [
                {id: "8.1.1", title: "Special Edition"}
              ]},
              {id: "8.2", title: "Home media"},
              {id: "8.3", title: "Merchandising"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Cinematic and literary allusions</a></li>
          <Collapse 
            id="10"
            item="Legacy and influence"
            sub={[
              {id: "10.1", title: "In popular culture"},
              {id: "10.2", title: "Cinematic influence"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#11">Sequels, prequels, and adatations</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Episode IV: A New Hope</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode IV: A New Hope</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode IV: A New Hope</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg" alt="Episode IV: A New Hope poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Star Wars</b> (later retitled <b>Star Wars Episode IV: A New Hope</b>) is a 1977 American epic and space opera film written and directed
            by <Link>George Lucas</Link>, produced by <Link>Lucasfilm Ltd.</Link>, and released by Twentieth Century Fox. It is the first film in the
            <Link to="/starwars">Star Wars franchise</Link> and the fourth chronological chapter of the "<Link>Skywalker Saga</Link>". Set in
            <Link>a fictional galaxy</Link> under the rule of the tyrannical <Link>Galactic Empire</Link>, the film follows a resistance movement,
            called the <Link>Rebel Alliance</Link>, that aims to destroy the Empire's ultimate weapon, the <Link>Death Star</Link>. When the rebel
            leader <Link to="/starwars/leia_organa">Princess Leia</Link> is captured by the Galactic Empire,
            <Link to="/starwars/luke_skywalker"> Luke Skywalker</Link> acquires stolen architectural plans for the Death Star and sets out to rescue her
            while learning the ways of a metaphysical power known as "<Link>the Force</Link>" from the <Link>Jedi Master</Link>
            <Link to="/starwars/obi_wan_kenobi"> Obi-Wan Kenobi</Link>. The cast includes <Link>Mark Hamill</Link>, <Link>Harrison Ford</Link>,
            <Link> Carrie Fisher</Link>, <Link>Peter Cushing</Link>, <Link>Alec Guiness</Link>, <Link>Anthony Daniels</Link>, <Link>Kenny Baker</Link>,
            <Link> Peter Mayhew</Link>, <Link>David Prowse</Link>, and <Link>James Earl Jones</Link>.
          </p>
          <p>
            Lucas had the idea of a science fiction film in the vein of Flash Gordon around the time he completed his first film, THX 1138 (1971), and
            he began working on a treatment after the release of American Graffiti (1973). After numerous rewrites, principal photography began in March
            of 1976 in locations including Tunisia and Elstree Studios in Hertfordshire, England. Lucas formed the visual effects company
            <Link> Industrial Light & Magic</Link> to help create the film's visual effects. Star Wars suffered production difficulties: the cast and
            crew believed the film would be a failure, and it went $3 million over budget due to delays.
          </p>
          <p>
            Few were confident in the film's box office prospects. It was released in a small number of theaters in the United States on May 25, 1977,
            and quickly became a surprise blockbuster, leading it to being expanded to a much wider release. Star Wars opened to critical acclaim, with
            particular praise for its special effects. It grossed $410 million worldwide during its initial run, surpassing Jaws (1975) to become the
            highest-grossing film until the release of E.T. the Extra-Terrestrial (1982); subsequent releases have brought its total gross to $775
            million. When adjusted for inflation, Star Wars is the second-highest grossing film in North America (behind Gone with the Wind) and the
            fourth-highest grossing film of all time. It received six Academy Awards, two BAFTA awards, and thirteen Saturn Awards, among others. The film
            has been reissued many times with Lucas' support, including the 1981 reissue giving the film the subtitle Episode IV: A New Hope, and the 1997
            "Special Edition". The reissues have contained many changes, including new scenes, visual effects, and dialogue.
          </p>
          <p>
            Often regarded as one of the greatest and most influential films of all time, Star Wars quickly became a worldwide pop culture phenomenon,
            launching an industry of tie-in products, including novels, comics, video games, amusement park attractions, and merchandise such as toys,
            games, and clothing. It became one of the 25 films selected by the United States Library of Congress for preservation in the National Film
            Registry in 1989, and its soundtrack was added to the U.S. National Recording Registry in 2004.
            <Link to="/starwars/the_empire_strikes_back">The Empire Strikes Back</Link> (1980) and
            <Link to="/starwars/return_of_the_jedi">Return of the Jedi</Link> (1983) followed Star Wars, rounding out the <Link>original Star
            Wars trilogy</Link>. A <Link>prequel trilogy</Link> and <Link>sequel trilogy</Link> have since been released in addition to two
            standalone films and various television series.
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
            <div className="img-left img-card">
              <img 
                src="https://en.wikipedia.org/wiki/File:George_Lucas_1986_(cropped).jpg" 
                alt="George Lucas 1986" 
              />
              <p>Star Wars creator George Lucas (pictured in 1986).</p>
            </div>
            <p>
              George Lucas had the idea for a space opera prior to 1971. According to Mark Hamill, he wanted to make it before his 1973 coming-of-age film
              American Graffiti. His original plan was to adapt the Flash Gordon space adventure comics and serials into films, having been fascinated
              by them sinc he was young. Lucas attempted to purchase the rights, but they had already been acquired by the producer Dino De Laurentiis.
              Lucas then discovered that Flash Gordon was inspired by the John Carter of Mars book series by Edgar Rice Burroughs, the author of
              Tarzan. Burroughs, in turn, had been influenced by Gulliiver on Mars, a 1905 science fantasy written by Edwin Arnold. Lucas took the
              science fantasy concept and began developing what he would call a "space fantasy".
            </p>

            <h3 className="article-heading-3" id="3.2">Writing</h3>

            <h3 className="article-heading-3" id="3.3">Casting</h3>

            <h3 className="article-heading-3" id="3.4">Design</h3>

            <h3 className="article-heading-3" id="3.5">Filming</h3>

            <h3 className="article-heading-3" id="3.6">Post-production</h3>

          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Soundrack"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="6.1">MPAA rating</h3>

            <h3 className="article-heading-3" id="6.2">First public screening</h3>

            <h3 className="article-heading-3" id="6.3">Premiere and initial release</h3>

            <h3 className="article-heading-3" id="6.4">Box office</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Critical response</h3>

            <h3 className="article-heading-3" id="7.2">Accolades</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Post-release"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Theatrical re-releases</h3>
            <h4 className="article-heading-4" id="8.1.1">Special Edition</h4>

            <h3 className="article-heading-3" id="8.2">Home media</h3>

            <h3 className="article-heading-3" id="8.3">Merchandising</h3>
          </div>
        </div>
        <div>
          <Heading2 id={9} title={"Cinematic and literary allusions"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={10} title={"Legacy and influence"} />
          <div>
            <h3 className="article-heading-3" id="10.1">In popular culture</h3>
            <h3 className="article-heading-3" id="10.1">Cinematic influence</h3>
          </div>
        </div>
        <div>
          <Heading2 id={11} title={"Sequels, prequels, and adatations"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default ANewHope;