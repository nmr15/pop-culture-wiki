import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ANewHope = () =>
{
  useEffect(() =>
  {
    document.title = "Episode IV: A New Hope - Pop Culture Wiki";
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
              {id: "3.2", title: "Writing"},
              {id: "3.3", title: "Casting"},
              {id: "3.4", title: "Design"},
              {id: "3.5", title: "Filming"},
              {id: "3.6", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Soundrack</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "MPAA rating"},
              {id: "6.2", title: "First public screening"},
              {id: "6.3", title: "Premiere and initial release"},
              {id: "6.4", title: "Box office"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Critical response"},
              {id: "7.2", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="8"
            item="Post-release"
            sub={[
              {id: "8.1", title: "Theatrical re-releases", sub2: [
                {id: "8.1.1", title: "Special Edition"}
              ]},
              {id: "8.2", title: "Home media"},
              {id: "8.3", title: "Merchandising"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Cinematic and literary allusions</a></li>
          <Collapse 
            id="10"
            item="Legacy and influence"
            sub={[
              {id: "10.1", title: "In popular culture"},
              {id: "10.2", title: "Cinematic influence"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#11">Sequels, prequels, and adatations</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Episode IV: A New Hope</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode IV: A New Hope</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode IV: A New Hope</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg" alt="Episode IV: A New Hope poster" />
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
          <Heading2 id={1} title={"Plot"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default ANewHope;