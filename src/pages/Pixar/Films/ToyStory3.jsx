import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ToyStory3 = () =>
{
  useEffect(() =>
  {
    document.title = "Toy Story 3 - Pop Culture Wiki";
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
          <li><Link to="/pixar">Pixar</Link></li>
          <li><Link to="/toy_story">Toy Story (franchise)</li>
          <li>Toy Story 3</li>
        </ul>
        <div>
          <h1 className="article-heading">Toy Story 3</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Toy Story 3</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/6/69/Toy_Story_3_poster.jpg" alt="Toy Story 3 poster" />
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

export default ToyStory3;