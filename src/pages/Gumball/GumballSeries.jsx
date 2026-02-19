import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const GumballSeries = () =>
{
  useEffect(() =>
  {
    document.title = "The Amazing World of Gumball - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <Collapse 
            id="2"
            item="Episodes"
            sub={[
              {id: "2.1", title: "Crossovers"},
              {id: "2.2", title: "Shorts and miniseries"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>The Amazing World of Gumball</li>
        </ul>
        <div>
          <h1 className="article-heading">The Amazing World of Gumball</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Amazing World of Gumball</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/b/b8/The_Amazing_World_of_Gumball_logo.png" alt="The Amazing World of Gumball logo" />
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

export default GumballSeries;