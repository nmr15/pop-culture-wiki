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