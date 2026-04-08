import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableSpiderManFilms from '../../components/TableSpiderManFilms'
import { spidermanFilms } from '../../data/dataSpidermanFilms'

const SpidermanFilms = () =>
{
  useEffect(() =>
  {
    document.title = "Spider-Man films - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Early adaptation"
            sub={[
              {id: "1.1", title: "TV films"},
              {id: "1.2", title: "Feature film development"}
            ]}
          />
          <Collapse 
            id="2"
            item="Sam Raimi trilogy"
            sub={[
              {id: "2.1", title: "Spider-Man (2002)"},
              {id: "2.2", title: "Spider-Man 2 (2004)"},
              {id: "2.3", title: "Spider-Man 3 (2007)"},
              {id: "2.4", title: "Cancellation"}
            ]}
          />
          <Collapse 
            id="3"
            item="Marc Webb films"
            sub={[
              {id: "3.1", title: "The Amazing Spider-Man (2012)"},
              {id: "3.2", title: "The Amazing Spider-Man 2 (2014)"},
              {id: "3.3", title: "Cancellation"}
            ]}
          />
          <Collapse 
            id="4"
            item="Marvel Cinematic Universe"
            sub={[
              {id: "4.1", title: "Licensing agreement with Marvel Studios"},
              {id: "4.2", title: "Title roles", sub2: [
                {id: "4.2.1", title: "Spider-Man: Homecoming (2017)"},
                {id: "4.2.2", title: "Spider-Man: Far From Home (2019)"},
                {id: "4.2.3", title: "Spider-Man: No Way Home (2021)"},
                {id: "4.2.4", title: "Spider-Man: Brand New Day (2026)"}
              ]},
              {id: "4.3", title: "Ensemble roles"}
            ]}
          />
          <Collapse 
            id="5"
            item="Animated Spider-Verse"
            sub={[
              {id: "5.1", title: "Spider-Man: Into the Spider-Verse (2018)"},
              {id: "5.2", title: "Spider-Man: Across the Spider-Verse (2023)"},
              {id: "5.3", title: "Spider-Man: Beyond the Spider-Verse (2027)"},
              {id: "5.4", title: "Spin-offs"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Sony's Spider-Man Universe</a></li>
          <li className="sidebar-list-item"><a href="#top">Amateur works</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Spider-Man films</li>
        </ul>
        <div>
          <h1 className="article-heading">Spider-Man films</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Spider-Man films</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Spider-Man-Logo.svg/700px-Spider-Man-Logo.svg.png" alt="Spider-Man film logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directors</th>
              <td className="infobox-data">
                <Link>Sam Raimi</Link> <br />
                <Link>Marc Webb</Link> <br />
                <Link>Jon Watts</Link> <br />
                <Link>Destin Daniel Cretton</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Actors</th>
              <td className="infobox-data">
                <Link>Tobey Maguire</Link> <br />
                <Link>Andrew Garfield</Link> <br />
                <Link>Tom Holland</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Spider-Man</b>, a superhero character, created by <Link>Stan Lee</Link> and <Link>Steve Ditko</Link> for comic books published by
            <Link to="/marvelcomics"> Marvel Comics</Link>, has appeared in film since CBS's 1977 television film pilot, for the program The Amazing Spider-Man.
            Marvel Comics pursued plans for a feature film in the 1980s in a tumultuous development process that involved multiple directors, writers, and
            financiers. After protected litigation over the Spider-Man copyrights, Sony Pictures and its subsidiariy Columbia obtained the film rights for $7 million
            through a joint venture with Marvel in 1999.
          </p>
          <p>
            Beginning in the 2000s, Columbia developed a film trilogy starring <Link>Tobey Maguire</Link> as <Link>Spider-Man</Link>, which includes
            <Link to="/spiderman_films/spider_man"> Spider-Man</Link> (2002), <Link to="/spiderman_films/spider_man_2">Spider-Man 2</Link> (2004), and
            <Link to="/spiderman_films/spider_man_3"> Spider-Man 3</Link> (2007). The original film, in particular, greatly influenced Hollywood's conception of
            superheroes. A reboot series featuring <Link>Andrew Garfield</Link> as <Link>Spider-Man</Link>, consisting of
            <Link to="/spiderman_films/the_amazing_spider_man"> The Amazing Spider-Man</Link> (2012), and
            <Link to="/spiderman_films/the_amazing_spider_man_2"> The Amazing Spider-Man 2</Link> (2014). Sony then licensed the rights to <Link>Marvel Studios</Link>
            in a renewed agreement, yielding a succession of films that incorporated the character into the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
            The MCU features a version of <Link to="/mcu/peter_parker">Spider-Man</Link> played by <Link>Tom Holland</Link>, beginning with
            <Link to="/mcu/captain_america_civil_war"> Captain America: Civil War</Link> (2016). The animated Spider-Verse centers on a cast of Spider-Men led by
            <Link> Miles Morales</Link>, the main protagonist voiced by Shameik Moore. Sony's <Link>Spider-Man Universe</Link> (SSU) operates with a loosely
            shared continuity to all existing Spider-Man film franchises but does not explicitly feature the character. Amateur films about Spider-Man explore a
            range of interpretations from ordinary people.
          </p>
          <p>
            The mainstream Spider-Man films have been highly successful and make up the second highest grossing film franchise of all time, collectively grossing
            over $11 billion worldwide. Critical opinion of films skew positive, occasionally garnering Academy Awards recognition for achievement in special
            effects and animation.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Early adaptations"} />
          <div>
            <h3 className="article-heading-3" id="1.1">TV films</h3>
            <div className="img-right img-card">
              <img src="https://en.wikipedia.org/wiki/File:1977_Nicholas_Hammond.JPG" alt="Nicholas Hammond" />
            </div>
            <p>
              In the 1970s, Marvel partnered with CBS to produce a TV adaptation of the character. The Marvel-CBS partnership yielded three Spider-Man films
              starring Nicholas Hammond for the live-action program The Amazing Spider-Man, which aired sporadically for thirteen episodes. The first film,
              Spider-Man (1977), follows the character's quest to thwart an extorionist's plot to kill a group of civillians with a mind control device. Two
              sequels, Spider-Man Strikes Back (1979), and Spider-Man: The Dragon's Challenge (1981), were composites of individual episodes of The Amazing
              Spider-Man. Each film received minor distribution in theaters outisde of the United States.
            </p>
            <p>
              A Japanese Spider-Man adaptation was conceived in the same period. Part of a four-year licensing deal with Marvel, Toei Company developed a
              theatrical film, Spider-Man (1978), as a spin-off to the live-action tokusatsu series of the same name, commonly referred to by its Japanese
              pronunciation Supaidaman. The film's origin story is a significant departure from the source material, portraying Spider-Man as the alter ego of a
              motorcyclist seeking to avenge his deceased father with powers inherited from Garia, the lone survivor of the extinct Spider Planet.
            </p>

            <h3 className="article-heading-3" id="1.2">Feature film development</h3>
            <p>
              After the success of Superman (1978), Marvel began a concerted effort to produce more feature film projects. They abandoned several early Spider-Man
              proposals, including a musical and another concept culimating in a battle against Nazis and a 100-foot robot. By 1982, Roger Corman, an experienced
              producer of low-budget B films, optioned the rights to develop an adaptaion with Orion Pictures from Lee's film treatment. Lee's original treatment
              featured <Link>Doctor Octopus</Link> as the primary antagonist and a subplot of nuclear war with the Soviet Union. However, Lee and Corman ended their
              collaboration when they could not agree on a budget.
            </p>
          </div>
        </div>
        <TableSpiderManFilms />
      </main>
    </>
  )
}

export default SpidermanFilms;