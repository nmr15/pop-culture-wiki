import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'
import { starwarsAhsokaEps } from '../../../data/dataStarWars'

export const TableAhsoka = () =>
{
  return(
    <div>
      <table className="table-center">
        <thead>
          <tr>
            <th colSpan={2}>Ahsoka</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Episodes</td>
            <td>
              <div className="table-list">
                {starwarsAhsokaEps.map((ahsEps) => (
                  <Link to={ahsEps.route} className="table-list-link" key={ahsEps.id}>{ahsEps.title}</Link>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const TableAhsokaEps = () =>
{
  return(
    <div>
      <table className="table-center">
        <thead>
          <tr>
            <th>Season</th>
            <th>Episode</th>
            <th>Image</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {starwarsAhsokaEps.map((ahsEps) => (
            <>
              <tr>
                <td>{ahsEps.season}</td>
                <td>{ahsEps.episode}</td>
                <td>
                  <img src={ahsEps.img} alt="" />
                </td>
                <td>{ahsEps.title}</td>
              </tr>
              <tr>
                <td colSpan={4}>{ahsEps.description}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const AhsokaSeries = () =>
{
  useEffect(() =>
  {
    document.title = "Ahsoka (series) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <Collapse 
            id="2"
            item="Cast and characters"
            sub={[
              {id: "2.1", title: "Starring"},
              {id: "2.2", title: "Recurring"},
              {id: "2.3", title: "Guests"}
            ]}
          />
          <Collapse 
            id="3"
            item="Episodes"
            sub={[
              {id: "3.1", title: "Season 1 (2023)"},
              {id: "3.2", title: "Season 2"}
            ]}
          />
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Writing"},
              {id: "4.3", title: "Casting"},
              {id: "4.4", title: "Design"},
              {id: "4.5", title: "Filming"},
              {id: "4.6", title: "Music"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Release</a></li>
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Viewership"},
              {id: "5.2", title: "Critical response"},
              {id: "5.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Tie-in media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Ahsoka (series)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ahsoka (series)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ahsoka</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ahsoka.svg/500px-Ahsoka.svg.png" alt="Ahsoka poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>Dave Filoni</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><a href="#3">List of Ahsoka episodes</a></td>
            </tr>
            <tr>
              <th className="infobox-data">Films and series</th>
              <td className="infobox-data"><Link>List of Star Wars films and series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Star Wars characters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Ahsoka</b>, also known as <b>Star Wars: Ahsoka</b>, is an American space fantasy television series created by <Link>Dave Filoni</Link> for the streaming service
            <Link> Disney+</Link>. It is part of the <Link to="/starwars">Star Wars</Link> franchise and a spin-off from
            <Link to="/starwars/the_mandalorian"> The Mandalorian</Link> (2019-2023), taking place in the same timeframe as that series and its other interconnected spin-offs after
            the events of the film <Link to="/starwars/return_of_the_jedi">Return of the Jedi</Link> (1983). Ahsoka follows former <Link>Jedi</Link> apprentice
            <Link to="/starwars/ahsoka_tano"> Ahsoka Tano</Link> and her allies as they defend the fledging <Link>New Republic</Link> against remnants of the <Link>Galactic
            Empire</Link>.
          </p>
          <p>
            <Link>Rosario Dawson</Link> stars as the title character, reprising her role from The Mandalorian. <Link>Natasha Liu Bordizzo</Link>, <Link>Mary Elizabeth 
            Winstead</Link>, <Link>Ray Stevenson</Link>, Ivanna Sakhno, Diana Lee Inosanto, <Link>David Tennant</Link>, Eman Esfandi, Evan Whitten, Genevieve O'Reilly,
            <Link> Hayden Christensen</Link>, <Link>Ariana Greenblatt</Link>, <Link>Lars Mikkelsen</Link>, and <Link>Anthony Daniels</Link> also star. Ahsoka Tano was co-created
            by Filoni for the animated series <Link to="/starwars/the_clone_wars_series">Star Wars: The Clone Wars</Link> (2008-2020). Dawson was cast to bring her into live-action
            for the second season of The Mandalorian, and a spin-off series starring Dawson was announced by <Link>Lucasfilm</Link> in December 2020 with Filoni as showrunner. It
            serves as a continuation of the animated series <Link to="/starwars/rebels_series">Star Wars Rebels</Link> (2014-2018). In addition to Filoni, <Link>Jon Favreau</Link>,
            Kathleen Kennedy, and Colin Wilson returned from The Mandalorian as executive producers and were joined by Carrie Beck.
          </p>
          <p>
            Ahsoka premiered on August 22, 2023, with the first two episodes of the first season. The other six episodes were released through October 3. The season received high
            viewership, generally positive reviews from critics, and several accolades including a Primetime Creative Arts Emmy Award. A second season was onfirmed in January 2024.
          </p>
        </div>
        <div>
          <Heading2 id={3} title={"Episodes"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Season 1</h3>
            <TableAhsokaEps />
          </div>
        </div>
        <TableAhsoka />
      </main>
    </>
  )
}

export default AhsokaSeries;