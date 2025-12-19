import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card';
import Collapse from '../../components/Collapse';
import Heading2 from '../../components/Heading2';

const Pixar = () =>
{
  useEffect(() =>
  {
    document.title = "Pixar - Pop Culture Wiki";
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
          <li>Pixar</li>
        </ul>
        <div>
          <h1 className="article-heading">Pixar</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Pixar</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://1000logos.net/wp-content/uploads/2023/01/Pixar-logo-1536x864.png" alt="Pixar logo" />
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

export default Pixar;