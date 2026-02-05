import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const BartSimpson = () =>
{
  useEffect(() =>
  {
    document.title = "Bart Simpson - Pop Culture Wiki";
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
          <li><Link to="/simpsons">The Simpsons</Link></li>
          <li>Bart Simpson</li>
        </ul>
        <div>
          <h1 className="article-heading">Bart Simpson</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Bart Simpson</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="" alt="Bart Simpson" />
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

export default BartSimpson;