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