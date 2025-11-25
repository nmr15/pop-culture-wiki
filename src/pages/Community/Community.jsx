import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableBeatles from "../../components/TableBeatles"

const Beatles = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "1956-1963: Formation", sub2: [
                {id: "1.1.1", title: "The Quarrymen and name change"},
                {id: "1.1.2", title: "Early residencies and UK popularity"},
                {id: "1.1.3", title: "First EMI recordings"}
              ]},
              {id: "1.2", title: "1963-1966: Beatlemania and touring years", sub2: [
                {id: "1.2.1", title: "Please Plase Me and With the Beatles"},
                {id: "1.2.2", title: "First visit to the United States and the British Invasion"},
                {id: "1.2.3", title: "A Hard Day's Night"},
                {id: "1.2.4", title: "1964 world tour, meeting Bob Dylan and stand on civil rights"},
                {id: "1.2.5", title: "Beatles for Sale, Help!, and Rubber Soul"},
                {id: "1.2.6", title: "Controversies, Revolver, and final tour"}
              ]},
              {id: "1.3", title: "1966-1970: Studio years", sub2: [
                {id: "1.3.1", title: "Sgt. Pepper's Lonely Hearts Club Band"},
                {id: "1.3.2", title: "Magical Mystery Tour and Yellow Submarine"},
                {id: "1.3.3", title: "India retreat, Apple Corps, and the White Album"},
                {id: "1.3.4", title: "Abbey Road, Let it Be, and separation"}
              ]},
              {id: "1.4", title: "After the breakup", sub2: [
                {id: "1.4.1", title: "1970s"},
                {id: "1.4.2", title: "1980s"},
                {id: "1.4.3", title: "1990s"},
                {id: "1.4.4", title: "2000s"},
                {id: "1.4.5", title: "2010s"},
                {id: "1.4.6", title: "2020s"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Artistry"
            sub={[
              {id: "2.1", title: "Development"},
              {id: "2.2", title: "Influences"},
              {id: "2.3", title: "Genres"},
              {id: "2.4", title: "Contribution of George Martin"},
              {id: "2.5", title: "In the studio"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Legacy</a></li>
          <li className="sidebar-list-item"><a href="#4">Awards and achievements</a></li>
          <Collapse 
            id="5"
            item="Band members"
            sub={[
              {id: "5.1", title: "Timeline"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Discography</a></li>
          <li className="sidebar-list-item"><a href="#7">Song catalogue</a></li>
          <li className="sidebar-list-item"><a href="#8">Selected filmography</a></li>
          <li className="sidebar-list-item"><a href="#9">Concert tours</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>The Beatles</li>
        </ul>
        <div>
          <h1 className="article-heading">The Beatles</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Beatles</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://1000logos.net/wp-content/uploads/2017/06/Beatles-Logo-768x370.png" alt="The Beatles logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Past members</th>
              <td className="infobox-data">
                <Link>John Lennon</Link> <br />
                <Link>Paul McCartney</Link> <br />
                <Link>George Harrison</Link> <br />
                <Link>Ringo Starr</Link> <br />
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Albums</th>
              <td className="infobox-data"><Link>List of Beatles albums</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            The Beatles were an English rock band formed in Liverpool in 1960. The core lineup of the band comprised <a href="#">John Lennon</a>, <a href="#">Paul McCartney</a>,
            <a href="#">George Harrison</a>, and <a href="#">Ringo Starr</a>. They are widely regarded as the most influential band in Western popular music and were integral to the
            development of 1960s counterculture and the recognition of popular music as an art form. Rooted in skiffle, beat, and 1950s rock 'n' roll, their sound incorporated elements of
            classical music and traditional pop in innovative ways. The band also explored music styles ranging from folk and Indian music to psychedelia and hard rock. As pioneers in
            recording, songwriting, and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and
            sociocultural movements.
          </p>
          <p>
            Led by primary songwriters <Link>Lennon and McCartney</Link>, the Beatles evolved from Lennon's previous group, <Link>the Quarrymen</Link>, and built
            their reputation by playing clubs in Liverpool and Hamburg, Germany, starting in 1960. The core trio of Lennon, Mccartney, and Harrison, together
            since 1958, went through a succession of drummers before inviting Starr to join them in 1962. Manager Brian Epstein moulded them into a professional
            act, and producer George Martin developed their recordings, greatly expanding their domestic success after they signed with EMI and achieved their
            first hit, "<Link>Love Me Do</Link>", in late 1962. As their popularity grew into the intense fan frenzy dubbed "<Link>Beatlemania</Link>", the band
            acquired the nickname "the Fab Four".
          </p>
          <p>
            By early 1964, the Beatles were international stars and had achieved unprecedented levels of critical and commercial success. They became a leading
            force in Britain's cultural resurgence, ushering in the British invasion of the United States pop market. They soon made their film debut with
            <Link>A Hard Day's Night</Link> (1964). A growing desire to refine their studio efforts, coupled with the challenging nature of their concert
            tours, led to the band's retirement from live performances in 1966. During this time, they produced albums of great sophistication, including
            <Link>Rubber Soul</Link> (1965), <Link>Revolver</Link> (1966), and <Link>Sgt. Pepper's Lonely Hearts Club Band</Link> (1967). They enjoyed further
            commercial success with <Link>The Beatles</Link> (also known as "the White Album", 1968) and <Link>Abbey Road</Link> (1969). The success of these
            records heralded the <Link>album era</Link>, increased public interest in psychedelic drugs and Eastern spirituality, and furthered advancements
            in electronic music, album art, and music videos. In 1968, they founded Apple Corps, a multi-armed multimedia company that continues to oversee
            projects related to the band's legacy. After <Link>the group's break-up</Link> in 1970, all principal former members enjoyed success as solo
            artists. While some partial reunions occurred over the next decades, the four members never reunited. <Link>Lennon was murdered</Link> in 1980
            and Harrison died of lung cancer in 2001; McCartney and Starr remain musically active.
          </p>
          <p>
            The Beatles are the best-selling music act of all time, with estimated sales of 600 million units worldwide.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">History</h2>
          <div>
            <h3 className="article-heading-3" id="1.1">1956-1963: Formation</h3>
            <h4 className="article-heading-4" id="1.1.1">The Quarrymen and name change</h4>
            <p>
              In November 1956, sixteen-year-old John Lennon formed a skiffle group with several friends from Quarry Bank High School in Liverpool. They
              were called <Link>the Quarrymen</Link>, a reference to their school song "Quarry men old before our birth". Fifteen-year-old Paul
              McCartney met Lennon on July 6, 1957 and joined as a rhythm guitarist shorly after. In February 1958, McCartney invited his friend George
              Harrison, then aged fifteen, to watch the band. Harrison auditioned for Lennon, impressing him with his playing, but Lennon initially
              thought Harrison was too young. After a month's persistence, during a second meeting (arranged by McCartney), Harrison performed the lead
              guitar part of the instrumental song "Raunchy" on the upper deck of a Liverpool bus, and they enlisted him as lead guitarist.
            </p>
            <h4 className="article-heading-4" id="1.1.2">Early residencies and UK popularity</h4>
            <h4 className="article-heading-4" id="1.1.3">First EMI recordings</h4>
            <h3 className="article-heading-3" id="1.2">1963-1966: Beatlemania and touring years</h3>
            <h4 className="article-heading-4" id="1.2.1">Please Plase Me and With the Beatles</h4>
            <h4 className="article-heading-4" id="1.2.1">First visit to the United States and the British Invasion</h4>
            <h4 className="article-heading-4" id="1.2.1">A Hard Day's Night</h4>
            <h4 className="article-heading-4" id="1.2.1">1964 world tour, meeting Bob Dylan and stand on civil rights</h4>
            <h4 className="article-heading-4" id="1.2.1">Beatles for Sale, Help!, and Rubber Soul</h4>
            <h4 className="article-heading-4" id="1.2.1">Controversies, Revolver, and final tour</h4>
            <h3 className="article-heading-3" id="1.3">1966-1970: Studio years</h3>
            <h4 className="article-heading-4" id="1.3.1">Sgt. Pepper's Lonely Hearts Club Band</h4>
            <h4 className="article-heading-4" id="1.3.2">Magical Mystery Tour and Yellow Submarine</h4>
            <h4 className="article-heading-4" id="1.3.3">India retreat, Apple Corps, and the White Album</h4>
            <h4 className="article-heading-4" id="1.3.4">Abbey Road, Let it Be, and separation"</h4>
            <h3 className="article-heading-3" id="1.4">After the breakup</h3>
            <h4 className="article-heading-4" id="1.4.1">1970s</h4>
            <h4 className="article-heading-4" id="1.4.2">1980s</h4>
            <h4 className="article-heading-4" id="1.4.3">1990s</h4>
            <h4 className="article-heading-4" id="1.4.4">2000s</h4>
            <h4 className="article-heading-4" id="1.4.5">2010s</h4>
            <h4 className="article-heading-4" id="1.4.6">2020s</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Artistry</h2>
          <h3 className="article-heading-3" id="2.1">Development</h3>
          <h3 className="article-heading-3" id="2.2">Influences</h3>
          <h3 className="article-heading-3" id="2.3">Genres</h3>
          <h3 className="article-heading-3" id="2.4">Contribution of George Martin</h3>
          <h3 className="article-heading-3" id="2.5">In the studio</h3>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Legacy</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Awards and achievements</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Band members</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Timeline</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Discography</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Song catalogue</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Selected filmography</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="9">Concert tours</h2>
          <div></div>
        </div>
      <TableBeatles />
      </main>
    </>
  )
}

export default Beatles
