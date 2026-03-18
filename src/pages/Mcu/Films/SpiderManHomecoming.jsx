import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const SpiderManHomecoming = () =>
{
  useEffect(() =>
  {
    document.title = "Spider-Man: Homecoming - Pop Culture Wiki";
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
          <li>Spider-Man: Homecoming</li>
        </ul>
        <div>
          <h1 className="article-heading">Spider-Man: Homecoming</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Spider-Man: Homecoming</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg" alt="Spider-Man: Homecoming poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Jon Watts</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/thor_ragnarok">Thor: Ragnarok</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Spider-Man: Homecoming</b> is a 2017 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/spider_man">Spider-Man</Link>. Produced by Columbia Pictures, <Link>Marvel Studios</Link>, and Pascal Pictures, and distributed by Sony Pictures
            Releasing, it is the second <Link to="/spiderman_films">Spider-Man film reboot</Link>  and the 16th film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
            Directed by <Link>Jon Watts</Link> from a screenpaly by the writing teams of Jonathan Goldstein and John Francis Daley, Watts and Christopher Ford, and Chris McKenna
            and Erik Sommers, the film stars <Link>Tom Holland</Link> as <Link to="/mcu/peter_parker">Peter Parker / Spider-Man</Link> alongside <Link>Michael Keaton</Link>,
            <Link> Jon Favreau</Link>, <Link>Gwyneth Paltrow</Link>, <Link>Zendaya</Link>, <Link>Donald Glover</Link>, <Link>Jacob Batalon</Link>, Laura Harrier, Tony Revoloi,
            Bokeem Woodbine, Tyne Daly, <Link>Marisa Tomei</Link>, and <Link>Robert Downey Jr.</Link> In the film, Peter tries to balance high school life with being the hero
            Spider-Man while facing the <Link>Vulture</Link> (Keaton).
          </p>
          <p>
            In February 2015, Marvel Studios and Sony reached a deal to chare the film rights for Spider-Man, integrating the character into the established MCU. The following
            June, Holland was cast as Spider-Man, and Watts was hired to direct. Soon after, Daley and Goldstein joined the project. In April 2016, the film's title was revealed,
            along with additional cast members, including Downey Jr. in his MCU role of <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link>. Principal photography begain in
            June 2016 at Pinewood Atlanta Studios in Fayette County, Georgia, and also took place in Atlanta, Los Angeles, New York City, and Berlin. The film's additional
            screenwriters were revealed during filming, which wrapped in October 2016. The filmmakers made efforts to differentiate the film from previous Spider-Man films.
          </p>
          <p>
            Spider-Man: Homecoming premiered in Hollywood, Los Angeles, on June 28, 2017, and was released in the United States on July 7, as part of <Link>Phase Three</Link> of
            the MCU. The film grossed $880.9 million worldwide, becoming the second most successful Spider-Man film and the sixth highest grossing film of 2017. It received praise
            for its light tone, its focus on Peer's high school life, and its acting, particularly of Holland and Keaton. Two sequels have been released:
            <Link to="/mcu/spiderman_far_from_home">Spider-Man: Far From Home</Link> (2019) and <Link to="/mcu/spiderman_no_way_home">Spider-Man: No Way Home</Link> (2021). A
            new trilogy of live-action films from Sony and Marvel Studios is in development, beginning with <Link>Spider-Man: Brand New Day</Link> (2026).
          </p>
        </div>
      </main>
    </>
  )
}

export default SpiderManHomecoming;