import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const CaptainAmericaTheWinterSoldier = () =>
{
  useEffect(() =>
  {
    document.title = "Captain America: The Winter Soldier - Pop Culture Wiki";
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
              {id: "3.1", title: "Development", sub2: [
                {id: "3.1.2", title: "Writing"}
              ]},
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
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Captain America: The Winter Soldier</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain America: The Winter Soldier</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain America: The Winter Soldier</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg" alt="Captain America: The Winter Soldier poster" />
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
              <td className="infobox-data"><Link to="/mcu/thor_the_dark_world">Thor: The Dark World</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Captain America: The Winter Soldier</b> is a 2014 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link>
            character <Link to="/marvelcomics/captain_america">Captain America</Link>, produced by <Link>Marvel Studios</Link> and distributed by Walt
            Disney Studios Motion Pictures. It is the sequel to <Link to="/mcu/captain_america_the_first_avenger">Captain America: The First
            Avenger</Link> (2011) and the ninth film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). The film was directed by
            <Link> Anthony and Joe Russo</Link> from a screenplay by Christopher Markus and Stephen McFeely. It stars <Link>Chris Evans</Link> as
            <Link to="/mcu/steve_rogers"> Steve Rogers / Captain America</Link> alongside <Link>Scarlett Johansson</Link>, <Link>Sebastian Stan</Link>,
            <Link>Anthony Mackie</Link>, <Link>Cobie Smulders</Link>, <Link>Frank Grilo</Link>, <Link>Emily VanCamp</Link>, <Link>Hayley Atwell</Link>,
            <Link> Toby Jones</Link>, Jenny Agutter, <Link>Robert Redford</Link>, and <Link>Samuel L. Jackson</Link>. In the film, Rogers,
            <Link to="/mcu/natasha_romanoff">Natasha Romanoff</Link> (Johansson), and <Link to="/mcu/sam_wilson">Sam Wilson</Link> (Mackie) uncover a conspiracy
            within the spy agency <Link>S.H.I.E.L.D.</Link> while facing the <Link to="/mcu/bucky_barnes">Winter Soldier</Link> (Stan), a mysterious assassin.
          </p>
          <p>
            Markus and McFeely began writing the sequel around the release of The First Avenger in July 2011. The script draws from the Winter Soldier story arc in
            the comic book written by Ed Brubaker, as well as conspiracy fiction from the 1970s such as the film Three Days of the Condor (1975). The Winter
            Soldier explores S.H.I.E.L.D. in a similar way to how the first film explored the U.S. military, after Rogers was shown working for S.H.I.E.L.D. in
            the MCU crossover film <Link to="/mcu/the_avengers_film">The Avengers</Link> (2012). The Russo brothers signed on to direct in June 2012, and casting
            began the following month. They wnted the film to be a political thriller that focused on topical ideas such as drone warfare, targeted killing, and
            global surveillance. Filming began in April 2013 in Los Angeles, California, before moving to Washington, D.C., and Cleveland, Ohio. Though the directors
            prioritized practical effects and intense stunt work to differentiate from previous Captain America portrayals, visual effects were created by six
            companies for 2,500 shots including the climactic <Link>Helicarrier</Link> sequence.
          </p>
          <p>
            Captain America: The Winter Soldier premired at the El Capitan Theatre in Hollywood, Los Angeles, on March 13, 2014, and was released in the United
            States on April 4, as part of <Link>Phase Two</Link> of the MCU. The film received positive reviews from critics, with praise for the performances,
            action sequences, storyline, and themes. It $714 million worldwide, making it the seventh highest grossing film of 2014, and received several accolades
            including a nomination for best visual effects at the 87th Academy Awards. A sequel titled
            <Link to="/mcu/captain_america_civil_war"> Captain America: Civil War</Link>, also directed by the Russos, was released in 2016.
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
            <h4 className="article-heading-4" id="3.1.1">Writing</h4>
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
          <Heading2 id={8} title={"Sequel"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default CaptainAmericaTheWinterSoldier;