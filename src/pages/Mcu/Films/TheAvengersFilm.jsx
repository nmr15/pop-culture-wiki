import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const TheAvengersFilm = () =>
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
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "4.1", title: "Trailers"},
              {id: "4.2", title: "Tie-in comic"},
              {id: "4.3", title: "Promotional partners"},
              {id: "4.4", title: "Video game"}
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
                {id: "7.1.1", title: "United States and Canada"},
                {id: "7.1.2", title: "Records"},
                {id: "7.1.3", title: "Other territories"},
              ]},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>The Avengers (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Avengers</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Avengers (film)</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg" alt="The Avengers poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Joss Whedon</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/captain_america_the_first_avenger">Captain America: The First Avenger</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/iron_man_3">Iron Man 3</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>The Avengers</b> (titled <b>Avengers Assemble</b> in the United Kingdom and Ireland) is a 2012 American superhero film based on the
            <Link to="/marvelcomics"> Marvel Comics</Link> superhero team <Link>of the same name</Link>. Produced by <Link>Marvel Studios</Link> and
            distributed by Walt Disney Studios Motion Pictures, it is the sixth film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
            Written and directed by <Link>Joss Whedon</Link>, the film features and ensemble cast including <Link>Robert Downey Jr.</Link>,
            <Link> Chris Evans</Link>, <Link>Mark Ruffalo</Link>, <Link>Chris Hemsworth</Link>, <Link>Scarlett Johansson</Link>, and
            <Link> Jeremy Renner</Link> as the <Link>Avengers</Link>, alongside <Link>Tom Hiddleston</Link>, <Link>Stellan Skarsgård</Link>, and
            <Link> Samuel L. Jackson</Link>. In the film, <Link t0="/mcu/nick_fury">Nick Fury</Link> and the spy agency <Link>S.H.I.E.L.D.</Link> recruit
            <Link to="/mcu/tony_stark">Tony Stark</Link>, <Link to="/mcu/steve_rogers">Steve Rogers</Link>, <Link to="/mcu/bruce_banner">Bruce
            Banner</Link>, <Link to="/mcu/thor">Thor</Link>, <Link to="/mcu/natasha_romanoff">Natasha Romanoff</Link>, and
            <Link to="/mcu/clint_barton"> Clint Barton</Link> to form a team capable of stopping Thor's brother <Link>Loki</Link> from subjugating Earth.
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
            <h3 className="article-heading-3" id="5.1">Trailers</h3>
            <h3 className="article-heading-3" id="5.2">Tie-in</h3>
            <h3 className="article-heading-3" id="5.3">Promotional partners</h3>
            <h3 className="article-heading-3" id="5.4">Video game</h3>
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
            
          </div>
        </div>
      </main>
    </>
  )
}

export default TheAvengersFilm;