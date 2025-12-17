import { useEffect } from 'react'
import { Link } from 'react-router-dom'

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
                  <img src="" alt="Episode IV: A New Hope" />
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

export default ANewHope;