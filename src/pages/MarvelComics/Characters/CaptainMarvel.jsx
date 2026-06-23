import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const CaptainMarvel = () =>
{
  useEffect(() =>
  {
    document.title = "Captain Marvel (Carol Danvers) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Development</a></li>
          <Collapse 
            id="2"
            item="Publication history"
            sub={[
              {id: "2.1", title: "1960s"},
              {id: "2.2", title: "1970s"},
              {id: "2.3", title: "2980s"},
              {id: "2.4", title: "2990s"},
              {id: "2.5", title: "2000s"},
              {id: "2.6", title: "2020s"},
              {id: "2.7", title: "2020s"}
            ]}
          />

          <Collapse 
            id="4"
            item="Attributes"
            sub={[
              {id: "4.1", title: "Powers"},
              {id: "4.2", title: "Abilities"},
              {id: "4.3", title: "Weaknesses"}
            ]}
          />
          <Collapse 
            id="5"
            item="Paraphernalia"
            sub={[
              {id: "5.1", title: "Equipment"},
              {id: "5.2", title: "Weapons"},
              {id: "5.3", title: "Transportation"}
            ]}
          />
          
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marvelcomics">Marvel Comics</Link></li>
          <li>Captain Marvel (Carol Danvers)</li>
        </ul>
        <div>
          <h1 className="article-heading">Captain Marvel (Carol Danvers)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Captain Marvel</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Carol_Danvers_-_%28evolution%29.jpg/220px-Carol_Danvers_-_%28evolution%29.jpg" alt="Captain Marvel" />
                </span>
              </td>
            </tr>
           <tr>
              <th colspan="2">Publication information</th>
            </tr>
            <tr>
              <th className="infobox-data">Publisher</th>
              <td className="infobox-data"><Link to="/marvelcomics">Marvel Comics</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data">
                Roy Thomas (writer) <br />
                Gene Colan (artist)
              </td>
            </tr>
            <tr>
              <th colspan="2">In-story information</th>
            </tr>
            <tr>
              <th className="infobox-data">Full name</th>
              <td className="infobox-data">Carol Susan Jane Danvers</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default CaptainMarvel;