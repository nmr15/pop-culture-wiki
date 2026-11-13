import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { starwars } from '../../../data/dataStarWars.js'
import { intro, openingCrawl, production, soundtrack, marketing, postRelease } from '../../../markdown/starwars/films/anewhope.js'
import MarkdownRenderer from '../../../components/MarkdownRenderer'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const ANewHope = () =>
{
  const page = starwars.find((film) => film.file == "ANewHope");

  useEffect(() =>
  {
    document.title = `${page.title} - Pop Culture Wiki`;
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          {page.sidebar.map((sidebar) => (
            sidebar.sub ?
              <Collapse
                key={sidebar.id}
                id={sidebar.id}
                item={sidebar.title}
                sub={sidebar.sub}
              />
            :
              <li className="sidebar-list-item" key={sidebar.id}><a href={sidebar.id}>{sidebar.title}</a></li>
          ))}
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>{page.title}</li>
        </ul>
        <div>
          <h1 className="article-heading">{page.title}</h1>
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
                  <img src={page.img} alt={page.alt} />
                </span>
              </td>
            </tr>
            {page.infobox.map((info) => (
              info.route ?
              <tr>
                <th className="infobox-data">{info.header}</th>
                <td className="infobox-data"><Link to={info.route}>{info.data}</Link></td>
              </tr>
              :
              info.list ?
              <tr>
                <th className="infobox-data">{info.header}</th>
                <td className="infobox-data">
                  {info.list.map((list) => (
                    <>
                      <Link to={list.route}>{list.data}</Link> <br />
                    </>
                  ))}
                </td>
              </tr>
              :
              <tr>
                <th className="infobox-data">{info.header}</th>
                <td className="infobox-data">{info.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <section className="div-top">
          <MarkdownRenderer content={intro} />
        </section>
        
        <section>
          <Heading2 id={1} title={"Opening crawl"} />
          <div>
            <MarkdownRenderer content={openingCrawl} />
          </div>
        </section>
        
        <section>
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
            <p>
              At his home, Obi-Wan gives Luke his father's <Link>lightsaber</Link>, as Obi-Wan recalls his own friendship with Luke's father. He tells
              Luke that he and his father were a part of the <Link>Jedi</Link> order that once protected the galaxy before the Empire took over and
              that Darth Vader was once his apprentice before he fell to the <Link>dark side of the Force</Link> and murdered Luke's father. After
              viewing Leia's full recording. Obi-Wan attempts to persuade Luke to accompany him to Alderaan. Luke refuses but agrees to take Obi-Wan
              as far as Anchorhead. On the way, the group discovers the remains of the sandcrawler, the Jawas having been killed by stormtroopers
              searching for the droids. With dawning horror, Luke hurries home only to find it burning and his aunt and uncle's charred remains,
              both brutally murdered by the same stormtroopers.
            </p>
            <p>
              Luke returns upset, but Obi-Wan tells him there was nothing he could do, and that he would have been killed too and the plans would
              be in possession of the Empire. With nothing keeping him on Tatooine, Luke, Obi-Wan, and the two droids travel to <Link>Mos
              Eisley</Link> to find passage to Alderaan, Leia's home planet.
            </p>
            <p>
              Aboard the Death Star, Cassio Tagge argues with Conan Antonio Motti about the station's vulnerability to the rebels and points out
              that the rebellion has been gaining support within the imperial senate. <Link to="/starwars/grand_moff_tarkin">Wilhuff
              Tarkin</Link> enters the room with Darth Vader and informs them that the Emperor has dissolved the senate completely, sweeping away
              the last remnants of the Old Republic. Believing fear will keep the galaxy in line, Motti boasts the power of the Death Star, to
              which Vader replies that its power is insignificant compare to the Force. When Motti mocks Vader's belief in the Force, Vader
              <Link> force chokes</Link> him until Tarkin orders him to stop, and expresses his own desire to crush the Rebellion.
            </p>
            <p>
              Back in Mos Eisley, Luke, Obi-Wan, and the droids run into a patrol of stormtroopers, who ask for their identification. Obi-Wan
              uses a <Link>Jedi mind trick</Link> on the lead trooper, who lets them pass. Arriving at Chaimun's Spaceport Cantina, the group
              hires smuggler <Link to="/starwars/han_solo">Han Solo</Link> and his first mate, a <Link>Wookiee</Link> named
              <Link to="/starwars/chewbacca">Chewbacca</Link>, for 17,000 credits. 2,000 in advance and 15,000 upon arrival, to take the four
              of them to Alderaan aboard their ship, the <Link>Millennium Falcon</Link>. To obtain the money, Luke had to sell his
              <Link> landspeeder</Link>. Han has a brief run-in with <Link>Greedo</Link> over his debts to crime lord
              <Link to="/starwars/jabba_the_hutt"> Jabba the Hutt</Link>, which ends with Han fatally shooting Greedo. Jabba later confronts
              Han in the Falcon's docking bay, scolding him for killing Greedo. Han defends his actions that offended Jabba (dumping a load
              of cargo when confronted by an Imperial patrol) and promises he'll pay the gangster what he owes. Luke, Obi-Wan, and the droids
              arrive at the Falcon's hangar. A brief scuffle with stormtroopers ensues, and the Falcon escapes Imperial Star Destroyers over
              Tatooine and sets a course to Alderaan unaware that the Death Star had just arrived there as well.
            </p>

            <h3 className="article-heading-3" id="2.3">Rescue of the princess</h3>
            <p>
              Leia, having resisted being tortured with a mind probe for the location of the Rebel Alliance's headquarters, is brought
              before Tarkin. Tarkin threatens to use the Death Star's superlaser on Leia's homeworld of Alderaan if she does not tell them
              the Rebel base's lcation. She reluctantly tells them the base is on <Link>Dantoonie</Link>, but Tarkin orders Alderaan to be
              destroyed anyway for its role in supporting the rebels.
            </p>

            <h3 className="article-heading-3" id="2.4">Sacrifice and victory</h3>
          </div>
        </section>

        <section>
          <Heading2 id={3} title={"Cast"} />
          <div>
            
          </div>
        </section>

        <section>
          <Heading2 id={4} title={"Production"} />
          <div>
            <MarkdownRenderer content={production} />
            {/* <div className="img-left img-card">
              <img 
                src="https://en.wikipedia.org/wiki/File:George_Lucas_1986_(cropped).jpg" 
                alt="George Lucas 1986" 
              />
              <p>Star Wars creator George Lucas (pictured in 1986).</p>
            </div>

            <div className="img-right img-card">
              <img src="https://en.wikipedia.org/wiki/File:Hotel-sididriss.jpg" alt="Hotel Sidi Driss" />
              <p>Hotel Sidi Driss, the underground building used as Luke's Tatooine home.</p>
            </div>
           
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Tikal_Temple1_2006_08_11.JPG/250px-Tikal_Temple1_2006_08_11.JPG"
                alt="Mayan temple in Tikal, Guatemala"
              />
              <p>Scenes of the rebel base on Yavin 4 were filmed in Tikal, Guatemala.</p>
            </div> */}
            
            {/* <h3 className="article-heading-3" id="4">Post-production</h3>
            <MarkdownRenderer content={postProduction} /> */}
          </div>
        </section>

        <section>
          <Heading2 id={5} title={"Soundrack"} />
          <div>
            <MarkdownRenderer content={soundtrack} />
          </div>
        </section>

        <section>
          <Heading2 id={6} title={"Marketing"} />
          <div>
            <MarkdownRenderer content={marketing} />
          </div>
        </section>

        <section>
          <Heading2 id={7} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="7.1">MPAA rating</h3>

            <h3 className="article-heading-3" id="7.2">First public screening</h3>

            <h3 className="article-heading-3" id="7.3">Premiere and initial release</h3>

            <h3 className="article-heading-3" id="7.4">Box office</h3>
          </div>
        </section>

        <section>
          <Heading2 id={8} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Critical response</h3>

            <h3 className="article-heading-3" id="8.2">Accolades</h3>
          </div>
        </section>
        
        <section>
          <Heading2 id={9} title={"Post-release"} />
          <div>
            <MarkdownRenderer content={postRelease} />
            <h4 className="article-heading-4" id="9.1.1">Special Edition</h4>

            <h3 className="article-heading-3" id="9.2">Home media</h3>

            <h3 className="article-heading-3" id="9.3">Merchandising</h3>
          </div>
        </section>
        
        <section>
          <Heading2 id={10} title={"Cinematic and literary allusions"} />
          <div>
            
          </div>
        </section>
        
        <section>
          <Heading2 id={11} title={"Legacy and influence"} />
          <div>
            <h3 className="article-heading-3" id="11.1">In popular culture</h3>
            <h3 className="article-heading-3" id="11.1">Cinematic influence</h3>
          </div>
        </section>
        
        <section>
          <Heading2 id={12} title={"Sequels, prequels, and adatations"} />
          <div>
            
          </div>
        </section>
      </main>
    </>
  )
}

export default ANewHope;