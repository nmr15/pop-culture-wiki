import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MonstersUniversity = () =>
{
  useEffect(() =>
  {
    document.title = "Monsters University - Pop Culture Wiki";
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
          <li>Monsters University</li>
        </ul>
        <div>
          <h1 className="article-heading">Monsters University</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Monsters University</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/2a/Monsters_University_poster_3.jpg" alt="Monsters University poster" />
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

export default MonstersUniversity;