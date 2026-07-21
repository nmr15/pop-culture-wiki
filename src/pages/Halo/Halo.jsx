import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const Halo = () =>
{
  useEffect(() =>
  {
    document.title = "Halo (franchise) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Story</a></li>
          <Collapse 
            id="2"
            item="Game series"
            sub={[
              {id: "2.1", title: "2001-2010: Bungie games"},
              {id: "2.2", title: "2011-2021: 343 Industries games"},
              {id: "2.3", title: "2024-present: Halo Studios games"},
              {id: "2.4", title: "Spin-offs"},
              {id: "2.5", title: "Defunct projects"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Cultural influences and themes</a></li>
          <li className="sidebar-list-item"><a href="#4">Esports</a></li>
          <li className="sidebar-list-item"><a href="#5">Music</a></li>
          <Collapse 
            id="6"
            item="Other media"
            sub={[
              {id: "6.1", title: "Books"},
              {id: "6.2", title: "Comics"},
              {id: "6.3", title: "Live-action", sub2: [
                {id: "6.3.1", title: "Unproduced feature"},
                {id: "6.3.2", title: "Halo 4: Forward Unto Dawn"},
                {id: "6.3.3", title: "Halo: Nightfall"},
                {id: "6.3.4", title: "Paramount+ television series"}
              ]},
              {id: "6.4", title: "Animation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Legacy</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Halo (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Halo (franchise)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Halo</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Halo_%28series%29_logo.svg/580px-Halo_%28series%29_logo.svg.png" alt="Halo logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Developers</th>
              <td className="infobox-data">
                <Link>Bungie</Link> (2001–2010) <br />
                <Link>Halo Studios</Link> (2011–present)
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data">Xbox Game Studios</td>
            </tr>
            <tr>
              <th className="infobox-data">Games</th>
              <td className="infobox-data"><Link>List of Halo games</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            Halo is a military science fiction video game series and media franchise, originally developed by <Link>Bungie</Link> and currently managed
            and developed by Halo Studios (previously 343 Indistries), part of Microsoft's Xbox Game Studios. The series launched in November 2001 with
            the first-person shooter video game <Link>Halo: Combat Evolved</Link> and its tie-in novel, <Link>The Fall of Reach</Link>. The latest major
            installment, <Link>Halo Infinite</Link>, was released in 2021. Spinoffs include real-time strategy and twin-stick shooter games.
          </p>
          <p>
            Bungie began as a developer of computer games for the Macintosh platform, making games including Marathon 2: Durandal (1995). After the
            company was acquired by Microsoft in 2000, their in-progress game, which started life as a real-time strategy game, became Halo: Combat
            Evolved, a first-person shooter and exclusive launch title for Microsoft's Xbox video game console. Following the success of Halo, Bungie
            developed additional Halo sequels before and after regaining the independence from Microsoft in 2007. Microsoft established 343 Industries
            to oversee Halo going forward, producing games itself and in partnership with other studios. The developer was restructured and rebranded
            as Halo Studios in 2024, in conjunction with producing new games that would shift the series away from being developed on proprietary game
            technology, and towards being available on multiple platforms beyond Xbox and Windows going forward.
          </p>
          <p>
            Halo: Combat Eveloved was the Xbox's flagship "killer app" and cemented Microsoft as a major competitor in the video game console space, and
            its sequels pioneered online matchmaking, social features, and video game marketing. The games have sold more than 81 million copies
            worldwide. With more than &6 billion in franchise sales, Halo is one of the highest-grossing media franchises of all time, spanning novels,
            graphic novels, comic books, short films, animated films, feature films, fan-made short machinima animations and other licensed products.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Story"} />
          <div>
            <p>
              Millions of years ago, a powerful interstellar species known as the <Link>Precursors</Link> seeded the galaxy with life. One of their
              created races, known as the <Link>Forerunners</Link>, attacked their former masters and drove the Precursors into near extinction. A few
              Precursors turned into a dust, intending to regenerate themselves in the future. This dust became defective, infecting and contorting
              organisms into a new parasitic species, connected by a hivemind: the <Link>Flood</Link>. Spacefaring ancient humanity, fighting the Flood,
              also came into conflict with the Forerunners. After defeating humanity, the Forerunners reduced humanity's technology and species to a
              primitive level, while they concentrated on the threat of the Flood. The Forerunners conceived the Halo Array, ring-shaped megastructures
              and weapons of last resort that would destroy all sentient life in the galaxy to stop the Flood's spread. The array could be activated
              from the <Link>Ark</Link>, a repository of sentient life outside the range of the Halos. Exhausting all other options, the Array was
              activated, ending the Flood outbreak. The surviving Forerunners reseeded life and left the Milky Way galaxy.
            </p>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Halo3_ark-and-halo-reborn.png/250px-Halo3_ark-and-halo-reborn.png" alt="Human ship approaches a Halo structure" />
              <p>A human ship approaches a Halo megastructure under construction. Portions of the Ark are visible at the bottom. From the video game Halo 3.</p>
            </div>
            <p>
              Nearly a hundred thousand years later, in the 26th century, humanity, under the auspices of the United Earth Government, or UEG, and their
              United Nations Space Command, or <Link to="/halo/unsc">UNSC</Link>, colonizes many worlds thanks to the development of faster-than-light
              "slipstream space" (i.e., hyperspace) travel. Tensions between the government and colonies desiring independence sparks violence. The
              UNSC's <Link to="/halo/oni">Office of Naval Intelligence</Link> (ONI) creates the <Link to="/halo/spartan_ii">SPARTAN-II</Link> Project to
              create an elite group of enhanced supersoldiers to suppress the rebellions. In the year 2525, human worlds come under attack by a
              theocratic alliance of alien races known as the <Link to="/halo/covenant">Covenant</Link>, whose leadership declares humanity an affront to
              their gods, the <Link to="/halo/forerunner">Forerunners</Link>. The Covenant began a genocidal holy war. Their superior technology and numbers
              prove to be deisive advantages; although effective, the Spartans are too few to turn the tide of battle in humanity's favor. After the
              Covenant invaded <Link to="/halo/reach">Reach</Link> in 2552, the UNSC's last major stronghold besides Earth,
              <Link to="/halo/master_chief"> Master Chief Petty Officre John-117</Link> was left as one of the few remaining Spartans.
            </p>
            <p>
              The rediscovery of the Halo rings prompts a desperate battle against the Covenant, who believe they are instruments of transcendence, not
              destruction. Master Chief and his artificial intelligence <Link to="/halo/cortana">Cortana</Link> are instrumental in the destruction of a
              Halo ring to stop the Covenant and the threat of the Flood. Turmoil within the Covenant and the revelation of the Halo Array's true purpose
              leads to the Covenant splintering into civil war. The disgraced former Covenant commander known as the
              <Link to="/halo/arbiter"> Arbiter</Link>, along with many of his species, helps the humans stop the Covenant leadership from activating the
              Halo Array via the <Link to="/halo/ark">Ark</Link>. The Human-Covenant War ends.
            </p>
            <p>
              In the post-war era, the UNSC trains a new generation of Spartans, and tensions between the UNSC and rebels resumes. The Master Chief and
              Cortana accidentally free the Forerunner commander Didact and he briefly returns to assert supremacy over humanity. Master Chief and Cortana
              halt his plans, although Cortana is initially believed dead in the attempt. Cortana's survival through the Domain leads her to break with the
              UNSC and assert a new hegemony over the galaxy, with artificial intelligence (the "Creator") in control. After two years of a scattered war
              between Cortana and the UNSC, Cortana attacks the Banished, a mercenary organization of former Covenant races. The Banished win the
              resultant conflict, terminating Cortana and battling the UNSC for control of Zeta Halo.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Game series"} />
          <div>
            <h3 className="article-heading-3" id="2.1">2001-2010: Bungie games</h3>
            <h3 className="article-heading-3" id="2.2">2011-2021: 343 Industries games</h3>
            <h3 className="article-heading-3" id="2.3">2024-present: Halo Studios games</h3>
            <h3 className="article-heading-3" id="2.4">Spin-offs</h3>
            <h3 className="article-heading-3" id="2.5">Defunct projects</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Cultural influences and themes"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Esports"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Music"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Other media"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Books</h3>
            <h3 className="article-heading-3" id="6.2">Comics</h3>
            <h3 className="article-heading-3" id="6.3">Live-action</h3>
            <h4 className="article-heading-4" id="6.3.1">Unproduced feature</h4>
            <h4 className="article-heading-4" id="6.3.2">Halo 4: Forward Unto Dawn</h4>
            <h4 className="article-heading-4" id="6.3.3">Halo: Nightfall</h4>
            <h4 className="article-heading-4" id="6.3.4">Paramount+ television series </h4>
            <h3 className="article-heading-3" id="6.4">Animation</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Legacy"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Halo;