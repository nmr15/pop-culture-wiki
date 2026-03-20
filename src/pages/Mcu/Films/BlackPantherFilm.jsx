import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const BlackPantherFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Black Panther (film) - Pop Culture Wiki";
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
              {id: "3.2", title: "Pre-production", sub2: [
                {id: "3.2.1", title: "Writing"},
                {id: "3.2.2", title: "Design", sub3: [
                  {id: "3.2.2.1", title: "Sets"},
                  {id: "3.2.2.2", title: "Costumes"}
                ]}
              ]},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production", sub2: [
                {id: "3.4.1", title: "Editing"},
                {id: "3.4.2", title: "Visual effects"}
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
              {id: "7.1", title: "Box office", sub2: [
                {id: "7.1.1", title: "Pre-sale tickets"},
                {id: "7.1.2", title: "United States and Canada"},
                {id: "7.1.3", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Analysis", sub2: [
                {id: "7.3.1", title: "Cultural importance"},
                {id: "7.3.2", title: "African and African American representation"}
              ]},
              {id: "7.4", title: "Accolades", sub2: [
                {id: "7.4.1", title: "Oscars campaign"}
              ]}
            ]}
          />
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Sequels"},
              {id: "8.2", title: "Television series", sub2: [
                {id: "8.2.1", title: "Eyes of Wakanda"},
                {id: "8.2.2", title: "Unproduced spin-off series"}
              ]}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Black Panther (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Black Panther (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Black Panther</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg" alt="Black Panther poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Ryan Coogler</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/thor_ragnarok">Thor: Ragnarok</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/avengers_infinity_war">Avengers: Infinity War</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Black Panther</b> is a 2018 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/black_panther"> of the same name</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Walt Disney
            Studios Motion Pictures, it is the 18th film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). The films was directed by
            <Link> Ryan Coogler</Link>, who co-wrote the screenplay with Joe Robert Cole, and it stars <Link>Chadwick Boseman</Link> as
            <Link to="/mcu/t'challa"> T'Challa / Black Panther</Link> alongside <Link>Michael B. Jordan</Link>, <Link>Lupita Nyong'o</Link>,
            <Link> Danai Gurira</Link>, <Link>Martin Freeman</Link>, <Link>Daniel Kaluuya</Link>, <Link>Letitia Wright</Link>, Winston Duke,
            Sterling K. Brown, <Link>Angela Bassett</Link>, <Link>Forest Whitaker</Link>, and <Link>Andy Serkis</Link>. In Black Panther, T'Challa is
            crowned king of <Link>Wakanda</Link> following his father's death, but he is challenged by <Link>Killmonger</Link> (Jordan), who plans to
            abandon the country's isolationist policies and begin a global revolution.
          </p>
          <p>
            Wesley Snipes planned to make a Black Panther film in 1992, but the project did not come to fruition. In September 2005, Marvel Studios listed
            a Black Panther film as one of ten films based on Marvel characters intended to be distributed by Paramount Pictures. Mark Bailey was hired to
            write a script in January 2011. Black Panther was officially announced in October 2014, and Boseman made his first appearance as the
            character in <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> (2016). Cole and Coogler had joined by then, with
            additional casting in May. Black Panther was the first Marvel Studios film with a Black director and a predominantly Black cast. Principal
            photography took place from January to April 2017 at EUE/Screen Germ Studios in the Atlanta metropolitan area, and in Busan, South Korea.
          </p>
          <p>
            Black Panther premiered at the Dolby Theatre in Los Angeles on January 29, 2018, and was released theatrically in the United States on February 16, as part of
            <Link> Phase Three</Link> of the MCU. Critics praised its direction, writing, acting (particularly that of Boseman, Jordan, Wright), costume design, production
            values, and soundtrack, but some criticized the visual effects. Many critics considered the film to be one of the best in the MCU and it was noted for its cultural
            significance. The National Board of Review and the American Film Institute named Black Panther one of the top ten films of 2018. It grossed over $1.3 billion worldwide
            and broke numberous box office records, becoming the highest grossing film directed by a Black filmmaker, the ninth highest grossing film at the time of its release,
            the third highest grossing film in the U.S. and Canada that year, and the second highest grossing film of 2018.
          </p>
          <p>
            Black Panther was nominated for seven awards at the 91st Academy Awards, winning three, and received numerous other accolades. It was the first superhero film to
            receive a Best Picture nomination, and the first MCU film to win an Academy Award. A sequel,
            <Link to="/mcu/black_panther_wakanda_forever"> Black Panther: Wakanda Forever</Link>, was released on November 11, 2022, with Wright taking over as the lead following
            Boseman's death in 2020, while a third film is in development. An animated series, Eyes of Wakanda, was relased in August 2025 on <Link>Disney+</Link>.
          </p>
        </div>
      </main>
    </>
  )
}

export default BlackPantherFilm;