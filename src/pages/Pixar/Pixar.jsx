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
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pixar_Computer_-_computer_history_museum_2013-04-11_23-46.jpg/500px-Pixar_Computer_-_computer_history_museum_2013-04-11_23-46.jpg"
              alt="Pixar computer" />
              <p>A Pixar computer at the Computer History Museum in Mountain View with the 1986-95 logo on it.</p>
            </div>
            <p>
              Pixar got its start in 1974, when New York Institute of Technology's founder, Alexander Schure, who was also the owner of a traditional animation
              studio, established the Computer Graphics Lab (CGL) and recruited computer scientists who shared his ambitions about creating the world's first
              computer-animated film. Edwin Catmull and Malcolm Blanchard were the first to be hired and were soon joined by Alvy Ray Smith and David DiFrancisco
              some months later, who were the four original members of the Computer Graphics Lab, located in a converted two-story garage acquired from the former
              Vanderbilt-Whitney estate. Schure invested significant funds into the computer graphics lab, approximately $15 million, providing the resources the
              group needed but contributing to NYIT's financial difficulties. Eventually, the group realized they needed to work in a real film studio to reach
              thei goal. Francis Ford Coppola then invited Smith to his house for a three-day media conference, where Coppola and George Lucas shared their visions
              for the future of digital moviemaking.
            </p>
            <p>
              When Lucas approached the group and offered them jobs at his studio, six employees moved to Lucasfilm. During the following months, they gradually
              resigned from CGL, found temporary jobs for about a year to avoid making Schure suspicious, and joined the Graphics Group at Lucasfilm. The Graphics
              Group, which was one-third of the Computer Division of Lucasfilm, opened in 1979 with the hiring of Catmull from NYIT, where he was in charge of the
              Computer Graphics Lab. He was then reunited with Smith, who also made the journey from NYIT to Lucasfilm, and was made the director of the Graphics
              Group. At NYIT, the researchers pioneered many of the CG foundation techniques, in particular, the invention of the alpha channel by Catmull and Smith.
              Over the next several years, the CGL would produce a few frames of an experimental film called The Works. After moving to Lucasfilm, the team worked on
              creating the precursor to RenderMan, called REYES (for "renders everything you ever saw"), and developed several critical technologies for CG,
              including particle effects and various animation tools.
            </p>
            <p>
              John Lasseter was hired to the Lucasfilm team for a week in late 1983 with the title "interface designer"; he animated the short film The
              Adventures of Andre & Wally B. In the next few years, a designer suggested naming a new digital compositing computer the "Picture Maxer". Smith
              suggested that the laser-based device have a catchier name, and came up with "Pixer", which after a meeting was changed to "Pixar". According to
              Michael Rubin, the author of Droidmaker: George Lucas and the Digital Revolution, Smith and three other employees came up with the name during a
              restaurant visit in 1981, but when interviewing them he got four different versions about the origin of the name.
            </p>
            <p>
              In 1982, the Pixar team began working on special-effects film sequences with <Link>Industrial Light & Magic</Link>. After years of research, and key
              milestones such as the Genesis Effect in Star Trek II: The Wrath of Khan and the Stained Glass Knight in Young Sherlock Holmes, the group, which
              then numbered 40 individuals, was spun out as a cororation in February 1986 by Catmull and Smith. Among the 38 remaining employees were Malcolm
              Blanchard, David DiFrancisco, Ralph Guggenheim, and Bill Reeves, who had been part of the team since the days of NYIT. Tom Duff, also an NYIT
              member, would later join Pixar after is formation. With Lucas's 1983 divorce, which coincided with the sudden dropoff in revenue from Star Wars
              licenses following the release of <Link to="/starwars/return_of_the_jedi">Return of the Jedi</Link>, they knew he would most likely sell the whole
              Graphics Group. Worried that the employees would be lost to them if that happened, which would prevent the creation of the first computer-animated
              movie, they concluded that the best way to keep the team together was to turn the group into an independent company. But Moore's Law also
              suggested that sufficient computing power for the first film was still some years away, and they needed to focus on a proper product until then.
              Eventually, they decided they should be a hardware company in the meantime, with their Pixar Image Computer as the core product, a system
              primarily sold to governmential, scientific, and medical markets. They also used SGI computers.
            </p>
            <p>
              In 1983, Nolan Bushnell founded the new computer-guided animation studio called Kadabrasope as a subsidiary of his Chuck E. Cheese's Pizza Time
              Theatres company (PTT), which was founded in 1977. Only one major project was made out of the new studio, an animated Christmas special for NBC
              starring Chuck E. Cheese and other PTT mascots; known as "Chuck E. Cheese: The Christmas That Almost Wasn't." The animation movement would be made
              using tweening instead of traditional cel animation. After the video game crash of 1983, Bushnell started selling some subsidiaries of PTT to keep
              the business afloat. Sente Technologies (another division, was founded to have games distributed in PTT stores) was sold to Bally Games and
              Kadabrascope was sold to Lucasfilm. The Kadabrascope assets were combined with the Computer Division of Lucasfilm. Coincidentally, one of Steve Job's
              first jobs was under Bushnell in 1973 as a technician at his other company Atari, which Bushnell sold to Warner Communications in 1976 to focus on
              PTT. PTT would later go bankrupt in 1984 and be acquired by ShowBiz Pizza Place.
            </p>

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