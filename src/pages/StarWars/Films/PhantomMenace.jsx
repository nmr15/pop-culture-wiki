import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const PhantomMenace = () =>
{
  useEffect(() =>
  {
    document.title = "Episode I: The Phantom Menace - Pop Culture Wiki";
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
          <li>Episode I: The Phantom Menace</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode I: The Phantom Menace</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode I: The Phantom Menace</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg" alt="Episode I: The Phantom Menace" />
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

export default PhantomMenace;