import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Cars2 = () =>
{
  useEffect(() =>
  {
    document.title = "Cars 2 - Pop Culture Wiki";
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
          <li>Cars 2</li>
        </ul>
        <div>
          <h1 className="article-heading">Cars 2</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Cars 2</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/7/7f/Cars_2_Poster.jpg" alt="Cars 2 poster" />
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

export default Cars2;