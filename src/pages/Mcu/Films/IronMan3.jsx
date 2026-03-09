import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const IronMan3 = () =>
{
  useEffect(() =>
  {
    document.title = "Iron Man 3 - Pop Culture Wiki";
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
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Themes and analysis</a></li>
          <Collapse 
            id="9"
            item="Future"
            sub={[
              {id: "9.1", title: "Potential sequel"},
              {id: "9.2", title: "Marvel One-Shot"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Iron Man 3</li>
        </ul>
        <div>
          <h1 className="article-heading">Iron Man 3</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Iron Man 3</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg" alt="Iron Man 3 poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Shane Black</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/the_avengers_film">The Avengers</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/thor_the_dark_world">Thor: The Dark World</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Iron Man 3</b> is a 2013 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/iron_man"> Iron Man</Link>, produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion
            Pictures. It is the sequel to <Link to="/mcu/iron_man_film">Iron Man</Link> and <Link to="/mcu/iron_man_2">Iron Man 2</Link>, and the seventh
            film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). The film was directed by <Link>Shane Black</Link> from a screenplay he
            co-wrote with Drew Pearce, and stars <Link>Robert Downey Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link> alongside
            <Link> Gwyneth Paltrow</Link>, <Link>Don Cheadle</Link>, <Link>Guy Pearce</Link>, <Link>Rebecca Hall</Link>, Stéphanie Szostak, James Badge
            Dale, William Sadler, Miguel Ferrer, <Link>Jon Favreau</Link>, and <Link>Ben Kingsley</Link>. In the film, Stark grapples with the
            consequences of the events of <Link to="/mcu/the_avengers_film">The Avengers</Link> (2012) during a national terrorism campaign on the United
            States led by the mysterious <Link>Mandarin</Link>.
          </p>
          <p>
            After the release of Iron Man 2 in May 2010, director Jon Favreau chose not to direct the third film. Black was hired to write and direct
            the sequel in February 2011, working with Pearce to make the script more character-centric, focus on thriller elements, and use concepts
            from Warren Ellis's "<Link>Extremis</Link>" comic book story arc. The film's supporting cast, including Kingsley, Pearce, and Hall, were
            brought on throughout April and May 2012. Filming took place from May 23 to December 17, 2012, primarily at EUE/Screen Gems Studio in
            Wilmington, North Carolina. Additional filming took place around North Carolina as well as in Florida, Los Angeles, and China; an extended
            version of the film specifically for Chinese audiences was created. Seventeen companies provided the film's visual effects.
          </p>
          <p>
            Iron Man 3 premiered at the Grand Rex in Paris on April 14, 2013 and was released in the United States on May 3, as the first film in
            <Link>Phase Two</Link> of the MCU. It received positive reviews from critics, with praise for its action sequences, Blake's direction, and
            Downey's performance, though there was criticism for the portrayal of the Mandarin. The film was a box office success, grossing over
            $1.215 billion worldwide, making it the second-highest-grossing film of 2013 and the sixteenth film to gross over $1 billion. It finished its
            theatrical run as the fifth-highest grossing film of all time, while its opening weekend was the sixth-highest of all time. The film
            received Best Visual Effects nominations at the Academy Awards and the BAFTA Awards.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default IronMan3;