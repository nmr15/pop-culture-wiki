import { useEffect } from 'react'
import { Link } from 'react-router-dom'

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