import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const ThorFilm = () =>
{
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
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Sequels"
            sub={[
              {id: "8.1", title: "Thor: The Dark World"},
              {id: "8.2", title: "Thor: Ragnarok"},
              {id: "8.1", title: "Thor: Love and Thunder"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Thor (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Thor (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Thor</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg" alt="Thor poster" />
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
              <td className="infobox-data"><Link to="/mcu/iron_man_2">Iron Man 2</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/captain_america_the_first_avenger">Captain America: The First Avenger</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Thor</b> is a 2011 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/thor">of the same name</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Paramount Pictures. It is
            the fourth film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). It was directed by <Link>Kenneth Branagh</Link>, written by the
            writing team of Ashley Edward Miller and Zack Stentz along with Don Payne, and stars <Link>Chris Hemsworth</Link> as the title character
            alongside <Link>Natalie Portman</Link>, <Link>Tom Hiddleston</Link>, <Link>Stellan Skarsgård</Link>, <Link>Kat Dennings</Link>,
            <Link> Clark Gregg</Link>, <Link>Colm Feore</Link>, <Link>Ray Stevenson</Link>, <Link>Idris Elba</Link>, <Link>Jaimie Alexander</Link>,
            <Link> Rene Russo</Link>, and <Link>Anthony Hopkins</Link>. After reigniting a dormant war, Thor is banished from Asgard to Earth, stripped
            of his powers and his hammer <Link>Mjölnir</Link>. As his brother <Link>Loki</Link> (Hiddleston) plots to take the Asgardian throne, Thor must
            prove himself worthy.
          </p>
          <p>
            <Link>Sam Raimi</Link> first developed the concept of a film adaptation based on Thor in 1991, but soon abandoned the project, leaving it in
            "developmen hell" for several years. During this time, the rights were picked up by various film stdios until Marvel signed Mark Protosevich
            to develop the project in 2006, and planned to finance and release it through Paramount. <Link>Matthew Vaughn</Link> was assigned to direct
            the film for a tentative 2010 release. However, after Vaughnwas released from his holding deal in 2008, Branagh was approached and the film's
            release was rescheduled to 2011. The main characters were cast in 2009, and princial photography took place in California and New Mexico
            from January to May 2010. The film was converted to 3D in post-production.
          </p>
          <p>
            Thor premiered in Sydney on April 17, 2011, and was released in the United States on May 6, as part of <Link>Phase One</Link> of the MCU. It
            received generally positive reviews from critics and was a financial success, earning $449.3 million worldwide. Three sequels have been
            released: <Link to="/mcu/thor_the_dark_world">Thor: The Dark World</Link> (2013), <Link to="/mcu/thor_ragnarok">Thor: Ragnarok</Link> (2017),
            and <Link to="/mcu/thor_love_and_thunder"> Thor: Love and Thunder</Link> (2022).
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <p>
              In 985 AD, <Link>Odin</Link>, king of <Link>Asgard</Link>, wages war against the <Link>Frost Giants</Link> of <Link>Jotunheim</Link> and
              their leader <Link>Laufey</Link>, to prevent them from conquering the <Link>Nine Realms</Link>, starting with <Link>Earth</Link>. The
              Asgardians defeat the Frost Giants and seize the source of their power, the <Link>Casket of Ancient Winters</Link>.
            </p>
            <p>
              In the present, Odin's son Thor prepares to ascent to the throne of Asgard but is interrupted when Frost Giants, secretly allowed in by
              his brother, <Link>Loki</Link>, attempt to retrieve the Casket. Against Odin's orders, Thor travels to Jotunheim to confront Laufey,
              accompanies by Loki, childhood friend <Link>Sif</Link>, and the <Link>Warriors Three</Link>: <Link>Volstagg</Link>, <Link>Fandral</Link>,
              and <Link>Hogun</Link>. A battle ensuses until Odin intervenes to save the Asgardians, destroying the fragile truce between the two races.
              As punishment for Thor's arrogance, Odin deems his son unworthy and strips his powers before exiling him to Earth as a mortal, accompanied
              by his hammer Mjölnir, now protected by an enchantment that allows only the worthy to wield it.
            </p>
            <p>
              Thor lands in <Link>New Mexico</Link>, where astrophysicist <Link>Dr. Jane Foster</Link>, her assistant <Link>Darcy Lewis</Link>, and
              mentor <Link>Dr. Erik Selvig</Link> find him. The local population discover Mjölnir which <Link>S.H.I.E.L.D.</Link> agent
              <Link to="/mcu/phil_coulson"> Phil Coulson</Link> soon commandeers before forcibly acquring Foster's data about the wormhole that delivered
              Thor to Earth. Having learned about Mjölnir's nearby location, Thor seeks to retrieve it from the facility that S.H.I.E.L.D. has constructed
              and tries to lift it, but is unable to do so and is captured. With Selvig's help, he is freed and resigns himself to exile on Earth as he
              develops a romance with Foster.
            </p>
            <p>
              Loki discovers that he is Laufey's biological son, adopted by Odin after the war ended. Loki confronts Odin, who wearily falls into the deep
              "Odinsleep" to recover his strength. Loki takes the throne in Odin's stead and offers Laufey the chance to kill Odin and retrieve the
              Casket. Sif and the Warriors Three, unhappy with Loki's rule, attempt to return Thor from exile, convincing <Link>Heimdall</Link>,
              gatekeeper of the Bifröst, the means of traveling between worlds, to allow them passage to Earth. Aware and suspicious of their plan, Loki
              sends the <Link>Destroyer</Link>, a seemingly indestructible automaton, to pursue them and kill Thor. The warriors find Thor, but the
              Destroyer attacks and overpowers them, prompting Thor to offer himself instead. Struck by the Destroyer and near death, Thor proves
              himself worthy to wield Mjölnir. The hammer returns to him, restoring his powers and enabling him to defeat the Destroyer. Thor and Jane
              kiss each other goodbye before he leaves with his fellow Asgardians to confront Loki.
            </p>
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
            <h3 className="article-heading-3" id="7.3">Accolades</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequels"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Thor: The Dark World</h3>
            <h3 className="article-heading-3" id="8.1">Thor: Ragnarok</h3>
            <h3 className="article-heading-3" id="8.1">Thor: Love and Thunder</h3>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default ThorFilm;