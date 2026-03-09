import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'

const PleasePleaseMe = () =>
{
  useEffect(() =>
  {
    document.title = "Please Please Me (album) - Pop Culture Wiki";
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
          <li><Link to="/beatles">The Beatles</Link></li>
          <li>Please Please Me (album)</li>
        </ul>
        <div>
          <h1 className="article-heading">Please Please Me (album)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Please Please Me</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Please_Please_Me.png" alt="Please Please Me cover" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Released</th>
              <td className="infobox-data">March 22, 1963</td>
            </tr>
            <tr>
              <th className="infobox-data">Albums</th>
              <td className="infobox-data"><Link>List of Beatles albums</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Songs</th>
              <td className="infobox-data"><Link>List of Beatles songs</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next Beatles album</th>
              <td className="infobox-data"><Link to="/beatles/with_the_beatles">With the Beatles</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default PleasePleaseMe;