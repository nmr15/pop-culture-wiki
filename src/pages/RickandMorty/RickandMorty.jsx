import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const RickandMorty = () =>
{
  useEffect(() =>
  {
    document.title = "Rick and Morty - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise and main characters</a></li>
          <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Writing"},
              {id: "3.3", title: "Animation and voice recording"},
              {id: "3.4", title: "Roiland's firing"}
            ]}
          />
          <Collapse 
            id="4"
            item="Themes and analysis"
            sub={[
              {id: "4.1", title: "Comedic style"},
              {id: "4.2", title: "Philosophy"}
            ]}
          />
          <Collapse 
            id="5"
            item="Release"
            sub={[
              {id: "5.1", title: "Broadcast"},
              {id: "5.2", title: "Streaming service and home media"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Ratings"},
              {id: "6.3", title: "Industry impact"},
              {id: "6.4", title: "Awards and nominations"}
            ]}
          />
          <Collapse 
            id="7"
            item="Other media and products"
            sub={[
              {id: "7.1", title: "Possible feature film"},
              {id: "7.2", title: "Spin-off series"},
              {id: "7.3", title: "Cameos", sub2: [
                {id: "7.3.1", title: "Film"},
                {id: "7.3.2", title: "Television"}
              ]},
              {id: "7.4", title: "Comics"},
              {id: "7.5", title: "Product tie-ins"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Rick and Morty</li>
        </ul>
        <div>
          <h1 className="article-heading">Rick and Morty</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Rick and Morty</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/500px-Rick_and_Morty.svg.png" alt="Rick and Morty logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data">
                <Link>Justin Roiland</Link> <br />
                <Link>Dan Harmon</Link>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><Link>List of Rick and Morty episodes</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Rick and Morty character</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default RickandMorty;