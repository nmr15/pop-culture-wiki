import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const ThorRagnarok = () =>
{
  useEffect(() =>
  {
    document.title = "Thor: Ragnarok - Pop Culture Wiki";
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
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Sequel"},
              {id: "8.2", title: "Other"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Thor: Ragnarok</li>
        </ul>
        <div>
          <h1 className="article-heading">Thor: Ragnarok</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Thor: Ragnarok</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg" alt="Thor: Ragnarok poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Taika Waititi Gunn</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/spiderman_homecoming">Spider-Man: Homecoming</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/black_panther">Black Panther</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Thor: Ragnarok</b>is a 2017 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character <Link to="/marvelcomics/thor">Thor</Link>,
            produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion Pictures. It is the sequel to <Link to="/mcu/thor_film">Thor</Link> (2011) and
            <Link to="/mcu/thor_the_dark_world"> Thor: The Dark World</Link> (2013), and is the 17th film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
            The film was directed by <Link>Taika Waititi</Link> from a screenplay by Eric Pearson and the writing team of Craig Kyle and Christopher Yost, and stars
            <Link> Chris Hemsworth</Link> as <Link to="/mcu/thor">Thor</Link> alongside <Link>Tom Hiddleston</Link>, <Link>Cate Blanchett</Link>, <Link>Idris Elba</Link>,
            <Link> Jeff Goldblum</Link>, <Link>Tessa Thompson</Link>, <Link>Karl Urban</Link>, <Link>Mark Ruffalo</Link>, and <Link>Anthony Hopkins</Link>. In Thor: Ragnarok,
            Thor must escape the alien planet <Link>Sakaar</Link> in time to save <Link>Asgard</Link> from <Link>Hela</Link> (Blanchett) and the impending Ragnarok.
          </p>
          <p>
            A third Thor film was confirmed in January 2014, when Kyle and Yost began work on the screenplay. The involvement of Hemsworth and Hiddleston was announced
            that October, and the film's title was revealed to be Thor: Ragnarok later that month. Waititi joined the film as director a year later, after Thor: The Dark World
            director Alan Taylor chose to not return. Ruffalo joined the cast reprising the role of <Link to="/mcu/bruce_banner">Bruce Banner / Hulk</Link> from previous MCU
            films, which allowed elements of the 2006 comic storyline "<Link>Planet Hulk</Link>" to be adapted for Ragnarok. The rest of the cast, including Blanchett as Hela,
            was confirmed in May 2016, with Pearson's involvement revealed at the start of filming that July. Principal photography took place in Brisbane and Sydney, Australia,
            with the film also having exclusive use of Village Roadshow Studios in Oxenford, concluding in October 2016.
          </p>
          <p>
            Thor: Ragnarok premiered at the El Capitan Theatre in Hollywood, Los Angeles, on October 10, 2017, and was released in the United States on November 3, as part of
            <Link> Phase Three</Link> of the MCU. The film received praise for its acting and Waititi's direction, as well as the action sequences, visual effects, musical score,
            and humor, with many critics considering it to be the best installment of the Thor franchise. It grossed $855 million, becoming the highest grossing film of the series
            and the ninth highest grossing film of 2017. A sequel, <Link to="/mcu/thor_love_and_thunder">Thor: Love and Thunder</Link>, was released in July 2022.
          </p>
        </div>
      </main>
    </>
  )
}

export default ThorRagnarok;