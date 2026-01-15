import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const ToyStory2 = () =>
{
  useEffect(() =>
  {
    document.title = "Toy Story 2 - Pop Culture Wiki";
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
          <li>Toy Story 2</li>
        </ul>
        <div>
          <h1 className="article-heading">Toy Story 2</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Toy Story 2</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://en.wikipedia.org/wiki/Toy_Story_2" alt="Toy Story 2 poster" />
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

export default ToyStory2;