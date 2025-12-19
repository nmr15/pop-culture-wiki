import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const BookOfBobaFett = () =>
{
  useEffect(() =>
  {
    document.title = "The Book of Boba Fett - Pop Culture Wiki";
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
          <li>The Book of Boba Fett</li>
        </ul>
        <div>
          <h1 className="article-heading">The Book of Boba Fett</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Book of Boba Fett</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/The_Book_of_Boba_Fett.svg/640px-The_Book_of_Boba_Fett.svg.png" alt="The Book of Boba Fett poster" />
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

export default BookOfBobaFett;