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
        <div>
          <Heading2 id={1} title={"Premise"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Episodes"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <h3 className="article-heading-3" id="3.2">Writing</h3>
            <h3 className="article-heading-3" id="3.3">Animation and voice recording</h3>
            <h3 className="article-heading-3" id="3.4">Roiland's firing</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Themes and analysis"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Comedic style</h3>
            <h3 className="article-heading-3" id="4.2">Philosophy</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Broadcast</h3>
            <h3 className="article-heading-3" id="5.2">Streaming service and home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Critical response</h3>
            <h3 className="article-heading-3" id="6.2">Ratings</h3>
            <h3 className="article-heading-3" id="6.3">Industry impact</h3>
            <h3 className="article-heading-3" id="6.4">Awards and nominations</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Other media and products"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Possible feature film</h3>
            <h3 className="article-heading-3" id="7.2">Spin-off series</h3>
            <h3 className="article-heading-3" id="7.3">Cameos</h3>
            <h4 className="article-heading-4" id="7.3.1">Film</h4>
            <h4 className="article-heading-4" id="7.3.2">Television</h4>

            <h3 className="article-heading-3" id="7.4">Comics</h3>
            <h3 className="article-heading-3" id="7.5">Product tie-in</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default RickandMorty;