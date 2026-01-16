import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const RedDead = () =>
{
  useEffect(() =>
  {
    document.title = "Red Dead - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Games"
            sub={[
              {id: "1.1", title: "Red Dead Revolver"},
              {id: "1.2", title: "Red Dead Redemption"},
              {id: "1.3", title: "Red Dead Redemption 2"},
              {id: "1.4", title: "Future"}
            ]}
          />
          <Collapse 
            id="2"
            item={"Common elements"}
            sub={[
              {id: "2.1", title: "Gameplay", sub2: [
                {id: "2.1.1", title: "Dead Eye"},
                {id: "2.1.2", title: "Honor"}
              ]},
              {id: "2.2", title: "Setting"},
              {id: "2.3", title: "Characters"},
            ]}
          />
          <Collapse 
            id="3"
            item="Reception"
            sub={[
              {id: "3.1", title: "Sales"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Red Dead</li>
        </ul>
        <div>
          <h1 className="article-heading">Red Dead</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Red Dead</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Official_Red_Dead_logo.png" alt="Red Dead logo" />
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

export default RedDead;