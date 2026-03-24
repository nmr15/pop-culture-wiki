import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
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
            
        </div>
      </main>
    </>
  )
}

export default SpidermanFilms;