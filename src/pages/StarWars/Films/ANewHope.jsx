import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

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
          <li className="sidebar-list-item"><a href="#1">Opening crawl</a></li>
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "Assault on Tantive IV"},
              {id: "2.2", title: "Luke's destiny"},
              {id: "2.3", title: "Rescue of the princess"},
              {id: "2.4", title: "Sacrifice and victory"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Writing"},
              {id: "4.3", title: "Casting"},
              {id: "4.4", title: "Design"},
              {id: "4.5", title: "Filming"},
              {id: "4.6", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Soundrack</a></li>
          <li className="sidebar-list-item"><a href="#6">Marketing</a></li>
          <Collapse 
            id="7"
            item="Release"
            sub={[
              {id: "7.1", title: "MPAA rating"},
              {id: "7.2", title: "First public screening"},
              {id: "7.3", title: "Premiere and initial release"},
              {id: "7.4", title: "Box office"}
            ]}
          />
          <Collapse 
            id="8"
            item="Reception"
            sub={[
              {id: "8.1", title: "Critical response"},
              {id: "8.2", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="9"
            item="Post-release"
            sub={[
              {id: "9.1", title: "Theatrical re-releases", sub2: [
                {id: "9.1.1", title: "Special Edition"}
              ]},
              {id: "9.2", title: "Home media"},
              {id: "9.3", title: "Merchandising"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#10">Cinematic and literary allusions</a></li>
          <Collapse 
            id="11"
            item="Legacy and influence"
            sub={[
              {id: "11.1", title: "In popular culture"},
              {id: "11.2", title: "Cinematic influence"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#12">Sequels, prequels, and adatations</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
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
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>George Lucas</Link></td>
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
          <Heading2 id={1} title={"Opening crawl"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Plot"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Assault on Tantive IV</h3>
            <p>
              Nineteen years after the formation of the <Link>Galactic Empire</Link>, <Link>the galaxy</Link> is in a state of <Link>civil war</Link>.
              The <Link>Rebel Alliance</Link> has won their first major victory by stealing plans to the Galactic Empire's secret weapon, the
              <Link> Death Star</Link>. Hoping that the stolen plans can save her people and restore freedom to the galaxy. Princess Leia Organa, who is
              in custody of the plans, attempt to race home aboard the <Link>Tantive IV</Link>. However, her ship is intercepted by the Imperial I-class
              <Link> Star Destroyer</Link> Devastator over the desert planet of <Link>Tatooine</Link>.
            </p>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/0/02/Devastatortantiveiv.png" alt="The Devastator and the Tantive IV" />
              <p>Princess Leia is kidnapped by the Galactic Empire.</p>
            </div>
            <p>
              The ship is captured, and several Imperial <Link>stormtroopers</Link> come aboard. After defeating the small number of guards defending the
              ship, the Sith Lord <Link to="/starwars/anakin_skywalker">Darth Vader</Link> arrives to assess the damage. Vader is outraged and questions
              <Link> Captain Antilles</Link>, whom he eventually strangles and kills. Hiding on the ship, Princess Leia is able to record a holographic
              message with the help of <Link to="/starwars/r2d2">R2-D2</Link>, and gives the <Link>droid</Link> the plans for the Death Star and the
              responsibility of taking the message to <Link to="/starwars/obi_wan_kenobi">Obi-Wan Kenobi</Link>, a Jedi-in-hiding on Tatooine. Leia is
              spotted by stormtroopers and they shoot her with a stun blast and bring her before Vader. Leia claims she and the ship's crew were on a
              diplomatic mission to <Link>Alderaan</Link>, but is disbelieved by Vader, who denounes her as a traitor and has her taken prisoner. Vader
              orders a message be sent to the Imperial Senate, informing them that the ship was destroyed, with everyone on board killed. R2-D2 and
              <Link to="/starwars/c3po">C-3PO</Link> use an escape pod in order to escape the ship and reach the planet of Tatooine below, narrowly
              escaping destruction by an Imperial cannon when the operators do not detect the droids in the pod.
            </p>

            <h3 className="article-heading-3" id="2.2">Luke's destiny</h3>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/9/92/Lukesaberanh.png" alt="Luke with lightsaber" />
              <p>Luke Skywalker receives his father's lightsaber.</p>
            </div>
            <p>
              After arguing and going their separate ways for a while, the droids are individually picked up by <Link>Jawa</Link> traders and brought
              aboard a <Link>sandcrawler</Link>. They are later bought by moisture farmer <Link>Owen Lars</Link> and his nephew, Luke Skywalker, a young
              farmer who lost his parents as a baby and hopes to one day be a starfighter pilot just like his friends. While cleaning R2, Luke discovers
              a short portion of the hologram. At the mention of Obi-Wan, he wonders if she means his neighbor Ben Kenobi.
            </p>
            <p>
              While eating dinner with Owen and his aunt <Link>Beru Lars</Link>, Owen asks Luke to take R2 to Anchorage the next day to have his memory
              wiped, and expresses his hope Luke will stay with them for one more harvest season before applying to the Academy. R2 escapes from the
              Lars' homestead in search of Obi-Wan, whom the droid claims to be the property of. Luke and C-3PO search the desert and find R2 the next
              day, only to be attacked by <Link>sand people</Link>. Luke and his droids are rescued by Ben Kenobi, who confirms he is Obi-Wan.
            </p>

            <h3 className="article-heading-3" id="2.3">Rescue of the princess</h3>

            <h3 className="article-heading-3" id="2.4">Sacrifice and victory</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Cast"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Development</h3>
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

            <h3 className="article-heading-3" id="4.2">Writing</h3>

            <h3 className="article-heading-3" id="4.3">Casting</h3>

            <h3 className="article-heading-3" id="4.4">Design</h3>

            <h3 className="article-heading-3" id="4">Filming</h3>

            <h3 className="article-heading-3" id="4">Post-production</h3>

          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Soundrack"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Marketing"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="7.1">MPAA rating</h3>

            <h3 className="article-heading-3" id="7.2">First public screening</h3>

            <h3 className="article-heading-3" id="7.3">Premiere and initial release</h3>

            <h3 className="article-heading-3" id="7.4">Box office</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Critical response</h3>

            <h3 className="article-heading-3" id="8.2">Accolades</h3>
          </div>
        </div>
        <div>
          <Heading2 id={9} title={"Post-release"} />
          <div>
            <h3 className="article-heading-3" id="9.1">Theatrical re-releases</h3>
            <h4 className="article-heading-4" id="9.1.1">Special Edition</h4>

            <h3 className="article-heading-3" id="9.2">Home media</h3>

            <h3 className="article-heading-3" id="9.3">Merchandising</h3>
          </div>
        </div>
        <div>
          <Heading2 id={10} title={"Cinematic and literary allusions"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={11} title={"Legacy and influence"} />
          <div>
            <h3 className="article-heading-3" id="11.1">In popular culture</h3>
            <h3 className="article-heading-3" id="11.1">Cinematic influence</h3>
          </div>
        </div>
        <div>
          <Heading2 id={12} title={"Sequels, prequels, and adatations"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default ANewHope;