import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableBeatles from "../../components/TableBeatles"

const Beatles = () => 
{
  useEffect(() =>
  {
    document.title = "The Beatles - Pop Culture Wiki";
  }, []);

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
            The Beatles are the best-selling music act of all time, with estimated sales of 600 million units worldwide. They are the most successful act
            in the history of the US Billboard charts, with the most number 1 hits on the U.S. Billboard Hot 100 chart (20), and they hold the record for
            most number 1 albums on the UK Albums Chart (15) and most singles sold in the UK (21.9 million). The band received many accolades, including
            eight Grammy Awards, four Brit Awards, an Academy Award (for Best Original Song Score for the 1970 documentary Let It Be) and fifteen Ivor
            Novello Awards. They were inducted into the Rock and Roll Hall of Fame in their first year of eligibility, 1988, and each principal member
            was individually inducted between 1994 and 2015. In 2004 and 2011, the group topped Rolling Stone's lists of the greatest artists in history.
            Time magazine named them among the 20th century's 100 most important people.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"History"} />
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
            <p>
              By January 1959, Lennon's Quarry Bank friends had left the group and he began his studies at the Liverpool College of Art. The three
              guitarists, billing themselves as Johnny and the Moondogs, were playing rock and roll whenever they could find a drummer. They also
              performed as the Rainbows. Paul McCartney later told New Musical Express that they called themselves that "because we all had different
              coloured shirts and we couldn't afford any other!"
            </p>
            <p>
              Lennon's art school friend Stuart Sutcliffe, who had just sold one of his paintings and was persuaded to purchase a bass guitar with the
              proceeds, joined in January 1960. He suggested changing the band's name to Beatals, as a tribute to Buddy Holly and the Crickets. They
              used this name until May, when they became the Silver Beetles, before undertaking a brief tour of Scotland as the backing group for pop
              siner and fellow Liverpudlian Johhny Gentle. By early July, they had refashioned themselves as the Silver Beetles and by the middle of
              August simply the Beatles.
            </p>

            <h4 className="article-heading-4" id="1.1.2">Early residencies and UK popularity</h4>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/74/The_Beatles_in_Hamburg.webp/408px-The_Beatles_in_Hamburg.webp.png" 
                alt="The_Beatles_in_Hamburg" 
              />
              <p>
                Left to right: Pete Best, George Harrison, John Lennon, Paul McCartney, and Stuart Sutcliffe at Hamburg Funfair in 1960, photographed by
                Astrid Kirchherr. Sutcliffe left the Beatles in 1961 and Ringo Starr replaced Best in 1962.
              </p>
            </div>
            <p>
              Allan Williams, the Beatles' unofficial manager, arranged a residency for them in Hamburg. They auditioned and hired drummer Pete Best in
              mid-August 1960. The band, now a five-piece, departed Liverpool for Hamburg four days later, contracted to club owner Bruno Koschmider for
              what would be a 3 1/2-month residency. Beatles historian Mark Lewisohn writes: "They pulled into Hamburg at dusk on August 17, the time
              when the red-light area comes to life ... flashing neon lights screamed out the various entertainment on offer, while scantily clad women
              sat unabashed in shop windows waiting for business opportunities."
            </p>
            <p>
              Koschmider had converted a couple of strip clubs in the red light Reeperbahn district of St. Paull into music venues and initially placed
              the Beatles at the Indra Club. After closing Indra due to noise complaints, he moved them to the Kaiserkeller in October. When he learned
              they had been performing at the rival Top Ten Club in breach of their contract, he gave them one month's termination notice, and reported
              the underage Harrison, who had obtained permission to stay in Hamburg by lying to the German authorities about his age. The authorities
              arranged for Harrison's deportation in late November. One week later, Koschmider had McCartney and Best arrested for arson after they set
              fire to a condom in a concrete corridor; the authorities deported them. Lennon returned to Liverpool in early December, while Sutcliffe
              remained in Hamburg until late February with his German fiancée Astrid Kirchherr, who took the first semi-professional photos of the
              Beatles.
            </p>
            <p>
              During the next two years, the Beatles were resident for periods in Hamburg, where they used Preludin both recreationally and to maintain
              their energy through all-night performances. In 1961, during their second Hamburg engagement, Kirchherr cut Sutcliffe's hair in the "exi"
              (existentialist) style, later adopted by the other Beatles. Sutcliffe decided to leave the band early that year and resume his art studies
              in Germany. McCartney took over bass. Producer Bert Kaempfert contracted what was not a four-piece group until June 1962, and he used them
              as Tony Sheridan's backing band on a series of recordings for Polydon Records. As part of the sessions, the Beatles were signed to Polydon
              for one year. Credited to "Tony Sheridan & the Beat Brothers", the single "My Bonnie", recorded in June 1961 and released four months later,
              reached number 32 on the Musikmarkt chart.
            </p>
            <p>
              After the Beatles completed their second Hamburg residency, they enjoyed increasing popularity in Liverpool with the growing Merseybeat
              movement. However, they were growing tired of the monotony of numerous appearances at the same clubs night after night. In November 1961,
              during one of the group's frequent performances at the Cavern Club, they encountered Brian Epstein, a local record-store owner and music
              columnist. He later recalled: "I immediately liked what I heard. They were fresh, and they were honest, and they had what I thought was a
              sort of presence ... [a] star quality."
            </p>

            <h4 className="article-heading-4" id="1.1.3">First EMI recordings</h4>
            <p>
              Epstein courted the band over the next couple of months, and they appointed him as their manager in January 1962. Throughout early and
              mid-1962, Epstein sought to free the Beatles from their contractual obligations to Bert Kaempfert Productions. He eventually negotiated a
              one-month early release in exchange for one last recording session in Hamburg. On their return to Germany in April, a distraught Kirchherr
              met them at the airport with news of Sutcliffe's death the previous day from a brain haemorrhage. Epstein began negotiations with record
              labels for a recording contract. To secure a UK record contract, Epstein negotiated an early end to the band's contract with Polydor, in
              exchange for more recordings backing Tony Sheridan. After a New Year's Day audition, Decca Records rejected the band, saying, "Guitar
              groups are on the way out, Mr. Epstein". However, three months later, producer George Martin signed the Beatles to EMI's Parlophone label.
            </p>
            <p>
              Martin's first recording session with the Beatles took place at EMI Recording Studios (later Abbey Road Studios) in London on June 6, 1962.
              He immediately complained to Epstein about Best's drumming and suggested they use a session drummer in his place. Already contemplating
              Best's dismissal, the Beatles replaced him in mid-August with Ringo Starr, who left Rory Storm and the Hurricanes to join them. A September
              4 session at EMI yielded a recording of "<Link to="/beatles/love_me_do">Love Me Do</Link>" featuring Starr on drums, but a dissatisfied
              Martin hired drummer Andy White for the band's third session a week later, which produced recordings of "Love Me Do",
              "<Link to="/beatles/please_please_me_song">Please Please Me</Link>", and "<Link to="/beatles/ps_i_love_you">P.S. I Love You</Link>".
            </p>
            <p>
              Martin initially selected the Starr version of "Love Me Do" for the band's first single, though subsequent re-pressings featured the
              White version, with Starr on tambourine. Released in early October, "Love Me Do" peaked at number 17 on the Record Retailer chart. Their
              television debut came later that month with a live performance on the regional news program People and Places. After Martin suggested
              recording "Please Please Me" at a faster tempo, a studio session in late November yielded that recording, of which Martin accurately
              predicted, "You've just made your first No. 1".
            </p>
            <p>
              In Decembe 1962, the Beatles concluded their fifth and final Hamburg residency at te Star-Club. By 1963, they had agreed that all four
              band members would contribute vocals to their albums, including Starr, despite his restricted vocal range, to validate his standing in the
              group. Lennon and McCartney had established a songwriting partnership, and as the band's success grew, their dominant collaboration
              limited Harrison's opportunities as a lead vocalist. Epstein, to maximize the Beatles' commercial potential, encouraged them to adopt a
              professional approach to performing. Lennon recalled him saying, "Look, if you really want to get in these bigger places, you're going to
              have to change, stop eating on stage, stop swearing, stop smoking ...".
            </p>

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
          <Heading2 id={2} title={"Artistry"} />
          <h3 className="article-heading-3" id="2.1">Development</h3>
          <h3 className="article-heading-3" id="2.2">Influences</h3>
          <h3 className="article-heading-3" id="2.3">Genres</h3>
          <h3 className="article-heading-3" id="2.4">Contribution of George Martin</h3>
          <h3 className="article-heading-3" id="2.5">In the studio</h3>
          <div></div>
        </div>
        <div>
          <Heading2 id={3} title={"Legacy"} />
          <div></div>
        </div>
        <div>
          <Heading2 id={4} title={"Awards and achievements"} />
          <div></div>
        </div>
        <div>
          <Heading2 id={5} title={"Band members"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Timeline</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Discography"} />
          <div></div>
        </div>
        <div>
          <Heading2 id={7} title={"Song catalogue"} />
          <div></div>
        </div>
        <div>
          <Heading2 id={8} title={"Selected filmography"} />
          <div></div>
        </div>
        <div>
          <Heading2 id={9} title={"Concert tours"} />
          <div></div>
        </div>
      <TableBeatles />
      </main>
    </>
  )
}

export default Beatles
