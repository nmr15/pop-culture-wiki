import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const GuardiansOfTheGalaxyVol2 = () =>
{
  useEffect(() =>
  {
    document.title = "Guardians of the Galaxy Vol. 2 - Pop Culture Wiki";
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
                {id: "3.1.1", title: "Writing"}
              ]},
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
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Sequel"},
              {id: "8.2", title: "I Am Groot"},
              {id: "8.3", title: "The Guardians of the Galaxy Holiday Special"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Guardians of the Galaxy Vol. 2</li>
        </ul>
        <div>
          <h1 className="article-heading">Guardians of the Galaxy Vol. 2</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Guardians of the Galaxy Vol. 2</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Guardians_of_the_Galaxy_Vol._2_poster.jpg" alt="Guardians of the Galaxy Vol. 2 poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>James Gunn</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/doctor_strange_film">Doctor Strange</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/spiderman_homecoming">Spider-Man: Homecoming</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Guardians of the Galaxy Vol. 2</b> is a 2017 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> superhero team
            <Link> Guardians of the Galaxy</Link>, produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion Pictures. It is the sequel
            to <Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link> (2014) and the 15th film in the
            <Link to="/mcu"> Marvel Cinematic Universe</Link> (MCU). Written and directed by <Link>James Gunn</Link>, the film stars an ensemble cast featuring
            <Link> Chris Pratt</Link>, <Link>Zoe Saldaña</Link>, <Link>Dave Bautista</Link>, <Link>Vin Diesel</Link>, <Link>Bradley Cooper</Link>,
            <Link> Michael Rooker</Link>, <Link>Karen Gillian</Link>, <Link>Pom Klementieff</Link>, Sylvester Stallone, and <Link>Kurt Russell</Link>. In the film,
            The <Link>Guardians</Link> travel throughout the cosmos as they help <Link to="/mcu/peter_quill">Peter Quill</Link> (Pratt) learn more about his
            mysterious parentage.
          </p>
          <p>
            The film was officially announced at the 2014 San Diego Comic-Con before the theatrical release of the first film, along with Gunn's return as writer and
            director from the first film, with the title of the sequel revealed a year later in June 2015. Principal photography began in February 2016 at Pinewood
            Atlanta Studios in Fayette County, Georgia, with many crew changes from the first film due to other commitments. Filming concluded in June 2016. Gunn
            chose to set the sequel shortly after the first film to explore the characters' new roles as the Guardians, and to follow the storyline of Quill's father
            established throughout that previous film. Russell was confirmed as Quill's father in July 2016, portraying <Link>Ego</Link>, a departure from Quill's
            comic father.
          </p>
          <p>
            Guardians of the Galaxy Vol. 2 premiered in Tokyo on April 10, 2017, and was released in the United States on May 5, 2017, as part of <Link>Phase
            Three</Link> of the MCU. It grossed more than $869 million worldwide, making it the eigth highest grossing film of 2017, while also outgrossing its
            predecessor. The film received praise for its visuals, direction, soundtrack, action sequences, humor, and performances, though some critics deemed it
            inferior to the original. It received a nomination for Best Visual Effects at the 90th Academy Awards. A sequel,
            <Link to="/mcu/guardians_of_the_galaxy_vol_3">Guardians of the Galaxy Vol. 3</Link>, was released on May 5, 2023, preceded by the <Link>Disney+</Link>
            special <Link to="/mcu/the_guardians_of_the_galaxy_holiday_special">The Guardians of the Galaxy Holiday Special</Link> in November 2023.
          </p>
        </div>
      </main>
    </>
  )
}

export default GuardiansOfTheGalaxyVol2;