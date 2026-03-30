import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { pixarFilms } from '../../data/dataPixar'
import Card from '../../components/Card';
import Collapse from '../../components/Collapse';
import Heading2 from '../../components/Heading2';

const Pixar = () =>
{
  useEffect(() =>
  {
    document.title = "Pixar - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "Early history"},
              {id: "1.2", title: "Independent company (1986-1999)"},
              {id: "1.3", title: "Collaboration with Disney (1999-2006)"},
              {id: "1.4", title: "Walt Disney Studios subsidiary (2006-present)", sub2: [
                {id: "1.4.1", title: "Expansion and John Lasseter's exit (2010-2018)"},
                {id: "1.4.2", title: "Sequels and financial success (2018-2019)"},
                {id: "1.4.3", title: "COVID-19, Disney+ releases, and some financial struggles (2020-present)"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Campus</a></li>
          <Collapse 
            id="3"
            item="Filmography"
            sub={[
              {id: "3.1", title: "Traditions"},
              {id: "3.2", title: "Sequels and prequels"},
              {id: "3.3", title: "Adaptation to television"},
              {id: "3.4", title: "2D animation and live-action"},
              {id: "3.5", title: "Upcoming films"},
              {id: "3.6", title: "Franchises"},
              {id: "3.7", title: "Highest-grossing films"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Co-op Program</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Pixar</li>
        </ul>
        <div>
          <h1 className="article-heading">Pixar</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Pixar</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pixar_logo.svg/960px-Pixar_logo.svg.png" alt="Pixar logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Pixar</b>, doing business as <b>Pixar Animation Studios</b>, is an American animation studio based in Emeryville, California, known for
            its critically and commercially successful computer-animated feature films. Pixar is a subsidiary of Walt Disney Studios, a division of
            Disney Entertainment segment of the Walt Disney Company.
          </p>
          <p>
            The studio started in 1979 as part of the <Link>Lucasfilm</Link> computer division. It was known as the <b>Graphics Group</b> before its spin-off as a
            corporation in 1986, with funding from Apple co-founder Steve Jobs, who became its majority shareholder. The studio's mascot is Luxo Jr., a desk lamp
            from the studio's 1986 short film of the same name. Disney announced its acquisition of Pixar in January 2006, and completed it in May 2006. Pixar is
            best known for its feature films, technologically powered by its RenderMan software. RenderMan began as Pixar's implementation of the industry-standard
            RenderMan Interface Specification (RISpec) image-rendering API, which came out in 1988; support for RISpec was dropped in 2016. RenderMan became fully
            path-traced and physically based (PBR).
          </p>
          <p>
            In addition to producing short films, Pixar has produced 30 feature films, with its first film being
            <Link to="/toy_story/toy_story_film"> Toy Story</Link> (1995), which is also the first fully computer-animated feature film. As of July 2023, its
            feature films have earned over $17 billion at the worldwide box office with an average gross of $589 million per film.
            <Link to="/toy_story/toy_story_3"> Toy Story 3</Link> (2010), <Link to="/finding_nemo/finding_dory">Finding Dory</Link> (2016),
            <Link to="/the_incredibles/the_incredibles_2"> The Incredibles 2</Link> (2018), <Link to="/toy_story/toy_story_4">Toy Story 4</Link> (2019), and
            <Link to="/inside_out/inside_out_2"> Inside Out 2</Link> all grossed over $1 billion and are among the 50 highest grossing films of all time. Moreover,
            13 of Pixar's films are in the 50 highest grossing animated films of all time. As of August 2025, Inside Out 2 was the second highest grossing
            animated film of all time.
          </p>
          <p>
            Pixar has earned 23 Academy Awards, 10 Golden Globe Awards, and 11 Grammy Awards, along with numerous other awards and acknowledgments. Since its
            inauguration in 2001, eleven Pixar films have won the Academy Awards for Best Animated Feature, including
            <Link to="/finding_nemo/finding_nemo_film"> Finding Nemo</Link> (2003), <Link to="/the_incredibles/the_incredibles_film">The Incredibles</Link> (2004),
            <Link to="/pixar/ratatouille"> Ratatouille</Link> (2007), <Link to="/pixar/wall_e">WALL-E</Link> (2008), <Link to="/pixar/up">Up</Link> (2009),
            Toy Story 3 and Toy Story 4, <Link to="/pixar/brave">Brave</Link> (2012), <Link to="/inside_out/inside_out_film">Inside Out</Link> (2015),
            <Link to="/coco/coco_film"> Coco</Link>, and <Link to="/pixar/soul">Soul</Link> (2020). Toy Story 3 and Up were also nominated for the Academy Award for
            Best Picture.
          </p>
          <p>
            In February 2009, Pixar executives <Link>John Lasseter</Link>, <Link>Brad Bird</Link>, <Link>Pete Docter</Link>, <Link>Andrew Stanton</Link>, and
            <Link> Lee Unkrich</Link> were presented with the Golden Lion for Lifetime Achievement by the Venice Film Festival. The physical award was ceremonially
            handed to Lucasfilm's founder, <Link>George Lucas</Link>.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"History"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Early history</h3>
            <h3 className="article-heading-3" id="1.2">Independent company (1986-1999)</h3>
            <h3 className="article-heading-3" id="1.3">Collaboration with Disney (1999-2006)</h3>
            <h3 className="article-heading-3" id="1.4">Walt Disney Studios subsidiary (2006-present)</h3>
            <h4 className="article-heading-4" id="1.4.1">Expansion and John Lasseter's exit (2010-2018)</h4>
            <h4 className="article-heading-4" id="1.4.2">Sequels and financial success (2018-2019)</h4>
            <h4 className="article-heading-4" id="1.4.3">COVID-19, Disney+ releases, and some financial struggles (2020-present)</h4>
          </div>
        </div>
         <div>
          <Heading2 id={2} title={"Campus"} />
          <div>
            
          </div>
        </div>
         <div>
          <Heading2 id={3} title={"Filmography"} />
          <div>
            <div className="row">
              {pixarFilms.map((pxrFilm) => (
                <div className="col-3" key={pxrFilm.id}>
                  <Card 
                    route={pxrFilm.route}
                    img={pxrFilm.img}
                    alt={pxrFilm.title}
                    title={pxrFilm.title}
                    imgStyle="card-img-vertical"
                  />
                </div>
              ))}
            </div>
            <h3 className="article-heading-3" id="3.1">Traditions</h3>
            <h3 className="article-heading-3" id="3.2">Sequels and prequels</h3>
            <h3 className="article-heading-3" id="3.3">Adaptation to television</h3>
            <h3 className="article-heading-3" id="3.4">2D animation and live-action</h3>
            <h3 className="article-heading-3" id="3.5">Upcoming films</h3>
            <h3 className="article-heading-3" id="3.6">Franchises</h3>
            <h3 className="article-heading-3" id="3.7">Highest-grossing films</h3>
          </div>
        </div>
         <div>
          <Heading2 id={4} title={"Co-op Program"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Pixar;