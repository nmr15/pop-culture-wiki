import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ReturnOfTheJedi = () =>
{
  useEffect(() =>
  {
    document.title = "Episode VI: Return of the Jedi - Pop Culture Wiki";
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
              {id: "3.2", title: "Casting"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <Collapse 
            id="5"
            item="Release"
            sub={[
              {id: "5.1", title: "Title change"},
              {id: "5.2", title: "Box office"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="7"
            item="Post-release"
            sub={[
              {id: "7.1", title: "Re-releases"},
              {id: "7.2", title: "Home media"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Legacy</a></li>
          <Collapse 
            id="9"
            item="Marketing"
            sub={[
              {id: "9.1", title: "Novelization"},
              {id: "9.2", title: "Radio drama"},
              {id: "9.3", title: "Comic book adaptation"},
              {id: "9.4", title: "Book-and-record set"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#10">Sequels and prequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Episode VI: Return of the Jedi</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode VI: Return of the Jedi</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode VI: Return of the Jedi</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg" alt="Episode VI: Return of the Jedi poster" />
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
          
        </div>
      </main>
    </>
  )
}

export default ReturnOfTheJedi;