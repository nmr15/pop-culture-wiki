import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { beatlesPPM } from '../../../data/dataBeatles'
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
          <li className="sidebar-list-item"><a href="#1">Background</a></li>
          <li className="sidebar-list-item"><a href="#2">Recording</a></li>
          <li className="sidebar-list-item"><a href="#3">Artwork and packaging</a></li>
          <Collapse 
            id="4"
            item="Release"
            sub={[
              {id: "4.1", title: "International and CD releases"}
            ]}
          />
          <Collapse 
            id="5"
            item="Retrospective assessment"
            sub={[
              {id: "5.1", title: "Rankings"},
              {id: "5.2", title: "50th anniversary"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Track listing</a></li>
          <li className="sidebar-list-item"><a href="#7">Personnel</a></li>
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
          <p>
            <b>Please Please Me</b> is the debut studio album by English rock band <Link to="/beatles">The Beatles</Link>. Produced by <Link>George
            Martin</Link>, it was released in the United Kingdom on EMI's Parlophone label on March 22, 1963. The album's 14 tracks included cover songs
            and original material written by the partnership of band members <Link to="/beatles/john_lennon">John Lennon</Link> and
            <Link to="/beatles/paul_mccartney">Paul McCartney</Link>.
          </p>
          <p>
            The Beatles had signed with EMI in May 1962 and been assigned to the Parlaphone label run by Martin. They released their debut single
            "<Link to="/beatles/love_me_do">Love Me Do</Link>" in October, which surprised Martin by reaching number 17 on what would become the official
            UK singles chart. Impressed, Martin suggested they record a live album and helped arrange their next single,
            "<Link to="/beatles/please_please_me_song">Please Please Me</Link>", which topped the NME singles chart. Finding the Cavern Club, the band's
            venue in their native Liverpool, unsuitable for recording, Martin switched to a simple studio album. The Beatles recorded Please Please Me in
            one day at EMI Studios on February 11, 1963, with Martin adding overdubs to "<Link to="/beatles/misery">Misery</Link>" and
            "<Link to="/beatles/baby_its_you">Baby It's You</Link>" nine days later. Three of the four songs from their two previously released singles
            were added to the album, with a new version of "Love Me Do" recorded for the album.
          </p>
          <p>
            The album was well-received in Britain, where it remained in the Top 10 for over a year, a record for a debut album that stood for half a
            century. The presence of several songs written by band members Lennon-McCartney (credited as "McCartney-Lennon" at the time) was unusual and
            marked the emergence of a "self-contained rock band". On the other hand, the album was not released in the US, where the band sold poorly
            for most of 1963; after the stateside emergence of <Link>Beatlemania</Link>, Vee-Jay Records released a mid abridgement of the album as
            Introducing... The Beatles in early 1964, while EMI's American label Capitol Records divided the material from Please Please Me across
            multiple albums. Other countries also received different versions of the album, which continued until 1987, when the entirety of the Beatles
            catalogue was brought to CD and internationally standardized to the UK albums. Please Please Me remains critically acclaimed; it was voted
            39th on Rolling Stone's list of the "500 Greatest Albums of All Time" in 2012, and number 622 in the third edition of Colin Larkin's All
            Time Top 1000 Albums in 2000.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Background"} />
          <div>
            <p>
              The Beatles originated in the skiffle scene of Liverpool in the late 1959s, and by 1961 had solidified their lineup with John Lennon on
              rhythm guitar, Paul McCartney on bass, <Link to="/beatles/george_harrison">George Harrison</Link> on lead guitar, and Pete Best on drums.
              The band mostly played cover songs, although Lennon and McCartney had a budding songwriting partnership that also contributed material.
              After a stint in Hamburg backing English singer Tony Sheridan and releasing a single with Sheridan, "My Bonnie", on which they were
              credited as "The Beat Brothers", they returned to Liverpool in late 1961. Shortly after their return they were approached by
              <Link> Brian Epstein</Link>, a music store manager who recognized the group's local popularity and became the group's new manager. After a
              failed audition at Decca Records at the beginning of 1962, Epstein was eventually able to sign the group to EMI that May.
            </p>
            <p>
              EMI offered the Beatles a recording contract on its Parlophone label run by George Martin. Though Martin was drawn to the Beatles'
              personalities and charisma, he was initially unconvinced that they could write hit songs. Their first session, on June 6, with Best on
              drums, resulted in no recordings suitable for release. Martin reacted negatively to Best's presence and insisted on the use of a session
              drummer in his stead; although this was standard procedure at the time, the band took this as a cue to drop Best in favor of Rory Storm and
              the Hurricanes drummer <Link to="/beatles/ringo_starr">Ringo Starr</Link>. Their second session, on September 4 and now with Starr on
              drums, produced "Love Me Do", which became their first single several weeks later, and an early version of "Please Please Me". On
              September 11, the band re-recorded "Love Me Do" with session drummer Andy White and recorded
              "<Link to="/beatles/ps_i_love_you">P.S. I Love You</Link>", which became the B-side to "Love Me Do". They also recorded a sped-up version
              of "Please Please Me", which Martin believed had hit potential but required more work.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Recording"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Artwork and packaging"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="4.1">International and CD releases</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Retrospective assessment"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Rankings</h3>
            <h3 className="article-heading-3" id="5.2">50th anniversary</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Track listing"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Personnel"} />
          <div>
            
          </div>
        </div>
        <div>
          <table className="table-center">
            <thead>
              <tr>
                <th>Please Please Me</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table-list">
                    {beatlesPPM.map((ppm) => (
                      <Link to={ppm.route} className="table-list-link" key={ppm.id}>{ppm.title}</Link>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}

export default PleasePleaseMe;