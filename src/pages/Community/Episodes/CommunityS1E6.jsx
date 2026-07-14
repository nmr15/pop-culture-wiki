import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CommunityS1E6 = () =>
{
  useEffect(() =>
  {
    document.title = "Football, Feminism and You - Pop Culture Wiki";
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
          <li>Football, Feminism and You</li>
        </ul>
        <div>
          <h1 className="article-heading">Football, Feminism and You</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Football, Feminism and You</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/community-sitcom/images/1/18/Football_feminism_and_you_Troy_and_Jeff.jpeg" alt="Football, Feminism and You" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Episode no.</th>
              <td className="infobox-data">
                Season 1 <br />
                Episode 6
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Previous episode</th>
              <td className="infobox-data"><Link to="/community/advanced_criminal_law">Advanced Criminal Law"</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next episode</th>
              <td className="infobox-data"><Link to="/community/introduction_to_statistics">Introduction to Statistics</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
      </main>
    </>
  )
}

export default CommunityS1E6;