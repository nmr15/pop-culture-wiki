import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const AntManAndTheWasp = () =>
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
              {id: "3.4", title: "Post-production", sub2: [
                {id: "3.4.1", title: "Visual effects"}
              ]}
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
              {id: "7.2", title: "Critical reception"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Ant-Man and the Wasp</li>
        </ul>
        <div>
          <h1 className="article-heading">Ant-Man and the Wasp</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg" 
            alt="Ant-Man and the Wasp poster" 
            className="article-heading-img" 
          />
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ant-Man and the Wasp</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/2c/Ant-Man_and_the_Wasp_poster.jpg" alt="Ant-Man and the Wasp poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Peyton Ree</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/captain_marvel_film">Captain Marvel</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Ant-Man and the Wasp</b> is a 2018 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> featuring the
            characters <Link>Scott Lang / Ant-Man</Link> and <Link>Hope Pym / Wasp</Link>. Produced by <Link>Marvel Studios</Link> and distributed by
            Walt Disney Studios Motion Pictures, it is the sequel to <Link to="/mcu/antman_film">Ant-Man</Link> (2015) and the 20th film in the
            <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). The film was directed by <Link>Peyton Reed</Link> and written by the writing teams of
            <Link>Chris McKenna</Link> and Erik Sommers, and <Link>Paul Rudd</Link>, Andrew Barrer and Gabriel Ferrari. It stars Rudd as
            <Link to="/mcu/scott_lang"> Lang</Link> and <Link>Evangeline Lilly</Link> as <Link to="/mcu/hope_van_dyne">Hope van Dyne</Link>, alongside
            <Link>Michael Peña</Link>, <Link>Walton Goggins</Link>, <Link>Hannah John-Kamen</Link>, <Link>David Dastmalchian</Link>, Tip "T.I." Harris,
            <Link> Judy Greer</Link>, Bobby Cannavale, <Link>Randall Park</Link>, Abby Ryder Fortson, <Link>Michelle Pfeiffer</Link>,
            <Link> Laurence Fishburne</Link>, and <Link>Michael Douglas</Link>. In the film, the titular pair work with
            <Link to="/mcu/hank_pym"> Hank Pym</Link> (Douglas) to retrieve <Link>Janet van Dyne</Link> (Pfeiffer) from the <Link>Quantum Realm</Link>.
          </p>
          <p>
            Talks for a sequel to Ant-Man began shortly after that film was released. Ant-Man and the Wasp was officially announced in October 2015, with
            Rudd and Lilly returning to reprise their roles. A month later, Ant-Man director Reed was officially set to return. He had joined the first
            film later in its production and was excited to develop this one from the beginning. He also looked forward to inroducing Hope van Dyne as
            the Wasp in this film, and insisted on treating Lang and her as equals. Filming took place from August to November 2017, at Pinewood Atlanta
            Studios in Fayette County, Georgia, as well as Metro Atlanta; San Francisco; Savannah, Georgia; and Hawaii.
          </p>
          <p>
            Ant-Man and the Wasp had its world premiere in Hollywood, Los Angeles, on June 25, 2018, and was released in the United States on July 6,
            2018, as part of <Link>Phase Three</Link> of the MCU. The flm was a critical and commercial success, receiving praise for its performances
            (particularly those of Rudd and Lilly), humor, and levity, and grossing over $622 million worldwide. A sequel, <Link>Ant-Man and the
            Wasp: Quantumania</Link>, was released in February 2023.
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
          <h2 className="article-heading-2" id="5">Marketing</h2>
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Release"} />
          <h2 className="article-heading-2" id="6">Release</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>

            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequel"} />
          <h2 className="article-heading-2" id="8">Sequel</h2>
          <div>
            
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default AntManAndTheWasp;