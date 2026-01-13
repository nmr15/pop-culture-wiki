import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const GrandMoffTarkin = () =>
{
  useEffect(() =>
  {
    document.title = "Grand Moff Tarkin - Pop Culture Wiki";
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
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Grand Moff Tarkin</li>
        </ul>
        <div>
          <h1 className="article-heading">Grand Moff Tarkin</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Grand Moff Tarkin</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg" alt="Grand Moff Tarkin" />
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

export default GrandMoffTarkin;