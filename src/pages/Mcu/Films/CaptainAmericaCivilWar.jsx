import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const CaptainAmericaCivilWar = () =>
{
  useEffect(() =>
  {
    document.title = "Captain America: Civil War - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
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
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "5.1", title: "Promotion"},
              {id: "5.2", title: "Merchandise"}
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
                {id: "7.1.2", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Potential Evans' solo film"},
              {id: "8.2", title: "The Falcon and the Winter Soldier and Captain America: Brave New World"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Captain America: Civil War</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain America: Civil War</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain America: Civil War</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg" alt="Captain America: Civil War poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data">
                <Link>Anthony Russo</Link> <br />
                <Link>Joe Russo</Link>
              </td>
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
              <td className="infobox-data"><Link to="/mcu/antman_film">Ant-Man</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/doctor_strange_film">Doctor Strange</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Captain America: Civil War</b> is a 2016 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/captain_america"> Captain America</Link>, produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion
            Pictures. It is the sequel to <Link to="/mcu/captain_america_the_first_avenger">Captain America: The First Avenger</Link> (2011) and
            <Link to="/mcu/captain_america_the_winter_soldier"> Captain America: The Winter Soldier</Link> (2014), and the 13th film in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link> (MCU). The film was directed by <Link>Anthony and Joe Russo</Link> from a screenplay by the writing
            team of Christopher Markus and Stephen McFeely, and stars <Link>Chris Evans</Link> as <Link to="/mcu/steve_rogers"> Steve Rogers / Captain America</Link>
            alongside an ensemble cast including <Link>Robert Downey Jr.</Link>, <Link>Scarlett Johansson</Link>, <Link>Sebastian Stan</Link>,
            <Link> Anthony Mackie</Link>, <Link>Don Cheadle</Link>, <Link>Jeremy Renner</Link>, <Link>Chadwick Boseman</Link>, <Link>Paul Bettany</Link>,
            <Link> Elizabeth Olsen</Link>, <Link>Paul Rudd</Link>, <Link>Emily VanCamp</Link>, <Link>Marisa Tomei</Link>, <Link>Tom Holland</Link>,
            <Link> Frank Grillo</Link>, <Link>Martin Freeman</Link>, <Link>William Hurt</Link>, and <Link>Daniel Brühl</Link>. In Captain America: Civil War,
            disagreement over international oversight of the <Link>Avengers</Link> fractures the team into two opposing factions, one led by Steve Rogers and the
            other by <Link to="/mcu/tony_stark">Tony Stark</Link> (Downey).
          </p>
          <p>
            Development of Civil War begain in late 2013 when Markus and McFeely began writing the screenplay, which borrows concepts from the 2006 comic book
            storyline "<Link>Civil War</Link>" while also focusing on story and character elements from the previous Captain America films to conclude the trilogy.
            Following positive reactions of The Winter Soldier, the Russo brothers were brought back to direct in early 2014. The film's title and premise was
            revealed in October 2014, along with Downey's involvement as Stark; additional cast members jined in the following months. Principal photography began in
            April 2015 at Pinewood Atlanta Studios in Fayette County, Georgia. It contiuned in the Metro Atlanta area before concluding in Germany in August 2015,
            with the film being the first to use IMAX's digital 2D cameras (for the film's central airport fight sequence). Visual effects were provided by nearly 20
            different studios.
          </p>
          <p>
            Captain America: Civil War held its world premiere at the Dolby Theatre in Hollywood, Los Angeles, on April 12, 2016, and was released in the United
            States on May 6, as the first film in <Link>Phase Three</Link> of the MCU. The film was a commercial success, grossing over $1.1 billion worldwide,
            becoming the highest grossing film of 2016, and received positive reviews from critics, with praise for the performances (particularly Evans and
            Downey), action sequences, and themes. A fourh film, <Link to="/mcu/captain_america_brave_new_world">Captain Ameria: Brave New World</Link> (2025), is a
            continuation of Marvel Studios' <Link>Disney +</Link> series <Link to="/mcu/the_falcon_and_the_winter_soldier">The Falcon and the Winter Soldier</Link>
            (2021), following Mackie's <Link to="/mcu/sam_wilson">Sam Wilson</Link> as Captain America.
          </p>
        </div>
      </main>
    </>
  )
}

export default CaptainAmericaCivilWar;