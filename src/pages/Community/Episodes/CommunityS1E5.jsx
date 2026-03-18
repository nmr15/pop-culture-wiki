import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CommunityS1E5 = () =>
{
  useEffect(() =>
  {
    document.title = "Advanced Criminal Law - Pop Culture Wiki";
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
          <li><Link to="/community">Community</Link></li>
          <li>Advanced Criminal Law</li>
        </ul>
        <div>
          <h1 className="article-heading">Advanced Criminal Law</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Advanced Criminal Law</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/community-sitcom/images/a/ae/ACL_Abed_the_alien.png" alt="Advanced Criminal Law" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Episode no.</th>
              <td className="infobox-data">
                Season 1 <br />
                Episode 5
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Previous episode</th>
              <td className="infobox-data"><Link to="/community/social_psychology">Social Psychology</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next episode</th>
              <td className="infobox-data"><Link to="/community/football_feminism_and_you">Football, Feminism, and You</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Advanced Criminal Law</b> is the fifth episode of the first season of the American comedy television series <Link to="/community">Community</Link>. It aired in the
            United States on NBC on October 15, 2009. The episode follows <Link to="/community/jeff_winger">Jeff</Link> (<Link>Joel McHale</Link>) attempting to help
            <Link to="/community/britta_perry"> Britta</Link> (<Link>Gillian Jacobs</Link>) after she confesses to cheating on a Spanish test, as
            <Link to="/community/pierce_hawthorne"> Pierce</Link> (<Link>Chevy Chase</Link>) helps <Link to="/community/annie_edison">Annie</Link> (<Link>Alison Brie</Link>) by
            composing a school song and <Link to="/community/abed_nadir">Abed</Link> (<Link>Danny Pudi</Link>) attempts to convince
            <Link to="/community/troy_barnes"> Troy</Link> (<Link>Donald Glover</Link>) that he is an alien. It garnered 5.01 million viewers in its first broadcast and was met with
            mixed critical reception.
          </p>
        </div>
      </main>
    </>
  )
}

export default CommunityS1E5;