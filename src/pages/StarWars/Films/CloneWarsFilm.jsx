import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const CloneWarsFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Star Wars: The Clone Wars (film) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Opening narration</a></li>
          <li className="sidebar-list-item"><a href="#2">Plot</a></li>
          <li className="sidebar-list-item"><a href="#3">Voice cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Animation"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Music</a></li>
          <Collapse 
            id="6"
            item="Marketing"
            sub={[
              {id: "6.1", title: "Merchandise"},
              {id: "6.2", title: "Food partnership"},
              {id: "6.3", title: "Print media"},
              {id: "6.4", title: "Video games"},
              {id: "6.5", title: "Portable media players"},
              {id: "6.6", title: "Racing sponsorship"},
              {id: "6.7", title: "Novelization"}
            ]}
          />
          <Collapse 
            id="7"
            item="Release"
            sub={[
              {id: "7.1", title: "Theatrical"},
              {id: "7.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="8"
            item="Reception"
            sub={[
              {id: "8.1", title: "Critical response"},
              {id: "8.2", title: "Box office"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Accolades</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Star Wars: The Clone Wars (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Star Wars: The Clone Wars (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Star Wars: The Clone Wars</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/72/Star_wars_the_clone_wars.jpg" alt="Star Wars: The Clone Wars poster" />
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
        <div>
          <Heading2 id={1} title={"Opening narration"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Plot"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Voice cast"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Development</h3>
            <h3 className="article-heading-3" id="4.2">Animation</h3>
          </div>
        </div><div>
          <Heading2 id={5} title={"Nusic"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Marketing"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Merchandise</h3>
            <h3 className="article-heading-3" id="6.2">Food partnership</h3>
            <h3 className="article-heading-3" id="6.3">Print media</h3>
            <h3 className="article-heading-3" id="6.4">Video games</h3>
            <h3 className="article-heading-3" id="6.5">Portable media players</h3>
            <h3 className="article-heading-3" id="6.6">Racing sponsorship</h3>
            <h3 className="article-heading-3" id="6.7">Novelization</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Theatrical</h3>
            <h3 className="article-heading-3" id="7.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Critical response</h3>
            <h3 className="article-heading-3" id="8.2">Box office</h3>
          </div>
        </div>
        <div>
          <Heading2 id={9} title={"Accolades"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default CloneWarsFilm;