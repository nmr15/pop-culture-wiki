import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const CaptainAmericaTheFirstAvenger = () =>
{
  useEffect(() =>
  {
    document.title = "Captain America: The First Avenger - Pop Culture Wiki";
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
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Sequels", sub2: [
                {id: "8.1.1", title: "Captain America: The Winter Soldier"},
                {id: "8.1.2", title: "Captain America: Civil War"}
              ]},
              {id: "8.2", title: "Marvel One-Shot"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Captain America: The First Avenger</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain America: The First Avenger</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain America: The First Avenger</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg" alt="Captain America: The First Avenger poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Joe Johnston</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/thor_film">Thor</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="mcu/the_avengers_film">The Avengers</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Captain America: The First Avenger</b> is a 2011 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/captain_america"> Captain America</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Paramount Pictures, it is the fifth film in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link> (MCU). The film was directed by <Link>Joe Johnston</Link>, written by Christopher Markus and Stephen McFeely, and stars <Link>Chris Evans</Link>
            as Steve Rogers / Captain America alongside <Link>Tommy Lee Jones</Link>, <Link>Hugo Weaving</Link>, <Link>Hayley Atwell</Link>, <Link>Sebastian Stan</Link>, <Link>Dominic Cooper</Link>,
            <Link> Toby Jones</Link>, <Link>Neal McDonough</Link>, <Link>Derek Luke</Link>, and <Link>Stanley Tucci</Link>. During World War II, Rogers, a frail man, is transformed into the super-soldier
            Captain America and must stop the <Link>Red Skull</Link> from using the <Link>Tesseract</Link> as an energy source for world domination.
          </p>
          <p>
            The film began as a concept in 1997 and was scheduled for distribution by Artisan Entertainment. However, a lawsuit disrupted the project and was not settled until September 2003. In 2005,
            Marvel Studios received a loan from Merrill Lynch, and planned to finance and release the film through Paramount Pictures. Director Jon Favreau and Louis Leterrier were interested in
            directing the project before Johnston was approached in 2008. The principal characters were cast between March and June 2010. Production began in June, and filming took place in London,
            Manchester, Caerwent, Liverpool, and Los Angeles. Several different techniques were used by the visual effects company Lola to create the physical appearance of the character before he
            becomes Captain America.
          </p>
          <p>
            Captain America: The First Avenger premiered at the El Capitan Theatre in Los Angeles on July 19, 2011, and was released in the United States on July 22, as part of <Link>Phase One</Link>
            of the MCU. The film was commercially successful, grossing over $340 million. worldwide, and received positive reviews from critics, who praised Evans' performance, the film's depiction of
            the 1940s time period, and Johnston's direction. Two direct sequels have been released: <Link to="/mcu/captain_america_the_winter_soldier">Captain America: The Winter Soldier</Link> (2014)
            and <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> (2016).
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
          <Heading2 id={8} title={"Future"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Sequels</h3>
            <h4 className="article-heading-4" id="8.1.1">Captain America: The Winter Soldier</h4>
            <h4 className="article-heading-4" id="8.1.2">Captain America: Civil War</h4>
            <h3 className="article-heading-3" id="8.1">Marvel One-Shot</h3>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default CaptainAmericaTheFirstAvenger;