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
          <p>
            The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film
            <Link to="/mcu/iron_man_film"> Iron Man</Link> in May 2008, Marvel announced that The Avengers would be released in July 2011 and would bring
            together Stark (Downey), Rogers (Evans), Thor (Hemsworth), and Banner (portrayed by <Link>Edward Norton</Link> in the 2008 film
            <Link to="/mcu/the_incredible_hulk_film"> The Incredible Hulk</Link>) from Marvel's previous films. After the signing of Johansson as
            Romanoff in March 2009, Renner as Barton in June 2010, and Ruffalo to replace Norton as Banner in July 2010, the film was pushed back for a
            2012 release. Whedon was hired in April 2010 and rewrote the original screenplay by Zak Penn. Production begain in April 2011 in Albuquerque,
            New Mexico, before moving to Cleveland, Ohio, in August and New York City in September. The film has more than 2,200 visual effects shots.
          </p>
          <p>
            The Avengers premiered at the El Capitan Theatre in Los Angeles on April 11, 2012, and was released in the United States on May 4, as the
            final film in <Link>Phase One</Link> of the MCU. The film received praise for Whedon's direction and screenplay, visual effects, action
            sequences, acting, and musical score. It grossed over $1.5 billion worldwide, setting numerous box office records and becoming the
            third-highest-grossing film of all time at the taime of its release and the highest-grossing film of 2012. It was the first Marvel production
            to generate $1 billion in ticket sales. In 2017, The Avengers was featured as one of the 100 greatest films of all time in an Empire
            magazine poll. It received a nomination for Best Visual Effects at the 85th Academy Awards, among numerous other accolades. Three sequels
            have been released: <Link to="/mcu/avengers_age_of_ultron">Avengers: Age of Ultron</Link> (2015),
            <Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link> (2018), and <Link to="/mcu/avengers_endgame">Avengers: Endgame</Link>
            (2019).
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <p>
              After being exiled from the Nine Realms following his actions in <Link>Asgard</Link>, Loki wanders the periphery of outer space before coming
              into contact with the <Link>Other</Link>, the servant of a mysterious <Link>warlord</Link>. The Other makes a deal with Loki: in exchange
              for recovering the <Link>Tesseract</Link>, a powerful energy source being stuied by S.H.I.E.L.D. on Earth, his master promises to give Loki
              command over the <Link>Chitauri</Link>, a warmongering race of cyborgs so that he may conquer humanity. Seeing this as a chance for
              greatness, Loki accepts. On Earth, Nick Fury, <Link to="/mcu/maria_hill">Maria Hill</Link>, 
              <Link to="/mcu/phil_coulson"> Phil Coulson</Link>, <Link>Erik Selvig</Link>, and Clint Barton are called to the Joint Dark Energy Mission
              Facility in the Mojave Desert, where Dr. Selvig is researching the Tesseract. The Tesseract has recently begun emitting strange quantities
              of energy on its own accord, prompting the facility to be evacuated.
            </p>
            <p>
              Before any necessary precautions can be made. Selvig's Tesseract Accelerator activates, opening a portal from which Loki appears.
              Announcing his intention to conquer Earth, Loki steals the Tesseract. He uses the <Link>Scepter</Link>, given to him by the Other, to
              enslave the minds of Selvig, Barton, and several S.H.I.E.L.D. agents, aiding him in his getaway. Despite the efforts of Fury and Hill to
              stop him, Loki escapes. In response, Fury reactivates the Avengers Initiative.
            </p>
            <p>
              Despite orders from the <Link>World Security Council</Link> to proceed with "Phase 2," Fury sends Natasha Romanoff to locate Bruce Banner,
              who has been living in Kolkata, India as a doctor. Agent Coulson is sent to recruit Tony Stark. Both of them are hired to help locate the
              Tesseract. Fury himself meets with Steve Rogers, informing him of Loki's theft of the Tesseract, requesting his help in recovering it and
              subduing the invader. All three men accept the offer, though Rogers is reluctant to do anything involving the Tesseract after his
              experiences with it in World War II. Banner is also hesitant to assist, fearing that his alter-ego, the Hulk, may cause mayhem.
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