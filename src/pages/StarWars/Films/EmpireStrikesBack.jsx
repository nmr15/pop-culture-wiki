import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const EmpireStrikesBack = () =>
{
  useEffect(() =>
  {
    document.title = "Episode V: The Empire Strikes Back - Pop Culture Wiki";
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
              {id: "3.3", title: "Rewrite"},
              {id: "3.4", title: "Casting"},
              {id: "3.5", title: "Pre-production"},
              {id: "3.6", title: "Music"}
            ]}
          />
          <Collapse 
            id="4"
            item="Filming"
            sub={[
              {id: "4.1", title: "Commencement in Norway"},
              {id: "4.2", title: "Filming at Elstree Studios"},
              {id: "4.3", title: "The duel, Dagobah, and conclusion"},
              {id: "4.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Special effects and design</a></li>
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Context"},
              {id: "6.2", title: "Credits and title"},
              {id: "6.3", title: "Box office"}
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
              {id: "8.1", title: "Special Edition and other changes"},
              {id: "8.2", title: "Home media"},
              {id: "8.3", title: "Other media"}
            ]}
          />
          <Collapse 
            id="9"
            item="Thematic analysis"
            sub={[
              {id: "9.1", title: "Mythology and inspirations"},
              {id: "9.2", title: "Religion"},
              {id: "9.3", title: "Duality and evil"}
            ]}
          />
          <Collapse 
            id="10"
            item="Legacy"
            sub={[
              {id: "10.1", title: "Critical reassessment"},
              {id: "10.2", title: "Cultural influence"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#11">Sequels, prequels, and adaptations</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Episode V: The Empire Strikes Back</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode V: The Empire Strikes Back</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode V: The Empire Strikes Back</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg" alt="Episode V: The Empire Strikes Back poster" />
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

export default EmpireStrikesBack;