import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const AntManFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Ant-Man (film) - Pop Culture Wiki";
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
          <li>Ant-Man (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ant-Man (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ant-Man</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg" alt="Ant-Man poster" />
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
              <td className="infobox-data"><Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Ant-Man</b> is a 2015 American suphero film based on the <Link to="/marvelcomics">Marvel Comics</Link> characters of the same name:
            <Link> Scott Lang</Link> and <Link to="/marvelcomics/ant_man">Hank Pym</Link>. Produced by <Link>Marvel Studios</Link> and distributed
            by Walt Disney Studios Motion Pictures, it is the 12th film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). The film was
            directed by <Link>Peyton Reed</Link> from a screenplay by the writing teams of <Link>Edgar Wright</Link> & Joe Cornish and Adam McKay &
            <Link>Paul Rudd</Link>. It stars Rudd as <Link to="/mcu/scott_lang">Scott Lang / Ant-Man</Link> alongside <Link>Evangeline Lilly</Link>,
            Corey Stoll, Bobby Cannavale, <Link>Michael Peña</Link>, Tip "T.I." Harris, <Link>Anthony Mackie</Link>, Wood Harris, Judy Greer, Abby Ryder
            Forston, <Link>David Dastmalchian</Link>, and <Link>Michael Douglas</Link> as <Link to="/mcu/hank_pym">Hank Pym</Link>. In the film, Lang
            must help defend Pym's Ant-Man shrinking technology and plot a heist with worldwide ramifications.
          </p>
          <p>
            Development of Ant-Man began in April 2006 with the hiring of Wright to direct and co-write with Cornish. By April 2011, Wright and Cornish
            had completed three drafts of the script and Wright shot test footage for the film in July 2012. Pre-production began in October 2013 after
            being put on hold so that Wright could complete <Link>The World's End</Link>. Casting began in December 2013, with the hiring of Rudd to play
            Lang. In May 2014, Wright left the project citing creative differences, though he still received screenplay and story credits with Cornish.
            The following month, Reed was brought in to replace Wright, while McKay was hired to contribute to the script with Rudd. Filming took place
            between August and December 2014 in San Francisco and Metro Atlanta.
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
          <Heading2 id={5} title={"Music"} />
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

            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequels"} />
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

export default AntManFilm;