import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const ThorTheDarkWorld = () =>
{
  useEffect(() =>
  {
    document.title = "Thor: The Dark World - Pop Culture Wiki";
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
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
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
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical response"}
            ]}
          />
          <Collapse 
            id="8"
            item="Sequels"
            sub={[
              {id: "8.1", title: "Thor: Ragnarok"},
              {id: "8.2", title: "Thor: Love and Thunder"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Thor: The Dark World</li>
        </ul>
        <div>
          <h1 className="article-heading">Thor: The Dark World</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Thor: The Dark World</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg" alt="Thor: The Dark World poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Kenneth Branagh</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/iron_man_3">Iron Man 3</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Thor: The Dark World</b> is a 2013 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/thor"> Thor</Link>, produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion
            Pictures. It is the sequel to <Link to="/mcu/thor_film">Thor</Link> (2011) and the eigth film in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link> (MCU). The film was directed by Alan Taylor from a screenplay by Christopher Yost and the
            writing team of Christopher Markus and Stephen McFeely. It stars <Link>Chris Hemsworth</Link> as <Link to="/mcu/thor">Thor</Link> alongside
            <Link>Natalie Portman</Link>, <Link>Tom Hiddleston</Link>, <Link>Stellan Skarsgård</Link>, <Link>Idris Elba</Link>, <Link>Christopher
            Eccleston</Link>, Adewale Akinnuoye-Agbaje, <Link>Kat Dennings</Link>, <Link>Ray Stevenson</Link>, <Link>Zachary Levi</Link>, Tadanobu Asano,
            <Link>Jaimie Alexander</Link>, Rene Russo, and <Link>Anthony Hopkins</Link>. In the film, Thor and <Link>Loki</Link> (Hiddleston) team up to
            save the Nine Realms from the <Link>Dark Elves</Link>.
          </p>
          <p>
            Development of a sequel to Thor began in April 2011 when producer <Link>Kevin Feige</Link> announced plans for it to follow the MCU crossover
            film <Link to="/mcu/the_avengers_film">The Avengers</Link> (2012). In July, Thor director <Link>Kenneth Branagh</Link> withdrew from the
            sequel. Taylor was hired to replace him as director in January 2012. The supporting cast filled out that August with the hiring of
            Eccleston and Akinnuoye-Agbaje as the film's villains. Filming took place from September to December 2012, primarily in Surrey, England, as
            well as in Iceland and London. Taylor wanted the film to be more grounded than Thor, inspired by his work on Game of Thrones (2011 - 2019).
            He hired Carter Burwell to compose the score, but Marvel replaced Burwell with Brian Tyler.
          </p>
          <p>
            Thor: The Dark World premiered at the Odeon Leicester Square in London on October 22, 2013, and was released in the United States on November
            8, as part of <Link>Phase Two</Link> of the MCU. The film was a commercial success, grossing over $644 million worldwide and becoming the
            tenth highest-grossing film of 2013. It received praise for the performance of Hemsworth and Hiddleston, visual effects, and action
            sequences, but was criticized for its generic villain and lack of depth. Retrospectively, Taylor expressed dissatisfaction with the film and
            said Marvel substantially altered it from his original vision during post-production. Two sequels have been released:
            <Link to="/mcu/thor_ragnarok"> Thor: Ragnarok</Link> (2017) and <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link> (2022).
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/bf/Malekithaethertdw.jpg" alt="Malekith takes the Aether" />
                <p>Malekith takes the Aether from the Chamber.</p>
              </div>
              <p>
                Five thousand years ago, a cosmic event known as the Convergence occurs, opening a portal between the Nine Realms. A sinister race called the
                Dark Elves attempts to use the Convergence as a way of unleashing the <Link to="/mcu/reality_stone">Aeither</Link>, a force of destruction with the
                capability of destroying the entire galaxy. The exact origin of the Aether is unknown, but it is known that it is one of
                <Link to="/mcu/infinity_stones"> six powerful objects</Link> that predate the universe itself. The leader of the Dark Elves,
                <Link to="/mcu/malekith"> Malekith</Link>, nearly succeeds in using the Aether to cause the instantaneous destruction of the Nine Realms under the
                misguided belief that he can recreate them in his own image. He is opposed by Bor, the then-king of Asgard and the father of
                <Link to="/mcu/odin"> Odin</Link>, who uses the Bifrost to rip the Aether from Malekith's grasp just as he attempted to enact his plan, robbing the
                Dark Elves of their most potent weapon. Driven back to their homeworld, Svartalftheim, it becomes apparent that the Dark Elves cannot defeat the
                Asgardians and are all but wiped out in the battle. While the Asgardians, unable to destroy the Aether, seal it away in a place it can never be
                found. Malekith, his lieutenant Algrim, and various survivors managed to escape into a suspended animation, vowing to one day return and finish
                their plan.
              </p>
            </div>
            <div className="flex">
              <p>
                In 2012, after the Chitauri invasion, <Link to="/mcu/loki">Loki</Link> is brought befor Odin in shackles. Odin gives Loki a life-sentence in
                prison for his crimes against humanity, promising him that Thor will be made king one day after he's cleaned up the damage Loki has caused. One year
                later, in Vanaheim, home of the Vanir. Thor, alongside warriors <Link>Fandral</Link>, <Link>Volstagg</Link>, <Link>Hogun</Link>, and <Link>Sif</Link>,
                fight against the Marauders, a ragtag group of invaders that have been systematically terrorizing the Nine Realms for the past two years. The
                Asgardians win the battle, and while Hogun remains on Vanaheim to help his people rebuild, Thor and his friends return to Asgard via the Bifrost
                Bridge, which was repaired by the power of the <Link to="/mcu/space_stone">Tesseract</Link>. A party is held in celebration for Thor's victory, but
                he leaves quickly. He visits <Link to="/mcu/heimdall">Hemidall</Link> daily, asking each time how <Link to="/mcu/jane_foster">Jane Foster</Link> is
                faring. Odin clearly does not approve of Thor's affections for Jane as she will be dead long before him.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/df/Thor-2.jpg" alt="Thor" />
                <p>Thor battling the invading Marauders army.</p>
              </div>
            </div>
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
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
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
            <h3 className="article-heading-3" id="7.2">Critical response</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequels"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Thor: Ragnarok</h3>
            <h3 className="article-heading-3" id="8.2">Thor: Love and Thunder</h3>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default ThorTheDarkWorld;