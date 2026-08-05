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
            <p>
              Martin doubted the commercial appeal of "Love Me Do" and was surprised when it reached No. 17 on the British charts in November. Now
              convinced that the Beatles could write hits, Martin met the Beatles on November 16 and made two suggestions for their upcoming work. First,
              he suggested that they re-record "Please Please Me" and issue it as the Beatles' second single. Next, he proposed that they record a full
              album, a recommendation Beatles historian Mark Lewisohn deemed "geninly mind-boggling" because the Beatles were so new to the music scene
              and because the album market was dominated by adult buyers, not teenagers. On November 26, the Beatles held another session for "Please
              Please Me" (to be backed with "<Link to="/beatles/ask_me_why">Ask Me Why</Link>"), after which Martin predicted that they had just made
              their first number one record.
            </p>
            <p>
              As the Beatles had extensive stage experience and a large following of local fans in Liverpool, Martin proposed the band could record a
              live album, primarily of Lennon-McCartney songs at their resident venue, the Cavern Club, in December. Martin planned to attend the
              Beatles' November 18 Cavern concert to gauge its suitability for recording, though he postponed the visit until December 12. Upon his
              visit to the Cavern, Martin decided the acoustics would be unsuitable and decided to record a traditional studio album in February 1963; as
              the Beatles had already recorded four songs for release, they would record another ten to complete the album. In the meantime, Martin also
              solicited the Beatles' input for album names; McCartney suggested Off the Beatles Track.
            </p>
            <p>
              The single "Please Please Me" was released on January 11, 1963 and reached humber one on the NME, Melody Maker, and Disc charts. In early
              February, the group undertook their first national tour, and they planned to record their album during a break in the tour on
              February 11.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Recording"} />
          <div>
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Abbeyroadtomswain.jpg/250px-Abbeyroadtomswain.jpg"
                alt="Studio 2 at EMI Studios."
              />
              <p>Studio 2 at EMI Studios, where the Beatles recorded the entirety of Please Please Me.</p>
            </div>
            <p>
              Martin asked the band if they had any songs that they could record quickly. According to Martin, "It was a straighforward performance of
              their stage repertoire, a broadcast, more or less." Initially, a morning and afternoon session only were booked; the evening session was
              added later. Mark Lewisohn later wrote: "There can scarcly have been 585 more productive minutes in the history of recorded music."
              Martin oversaw each session on the day, with Norman Smith as first engineer and Richard Langham as second engineer
            </p>
            <p>
              On February 11, 1963, the Beatles arrived with John Lennon suffering from a bad cold, which he attempted to treat with a steady supply of
              throat lozanges. They began their morning session at 10 am with "<Link to="/beatles/theres_a_place">There's a Place</Link>" and
              "Seventeen" (the working title of what became "<Link to="/beatles/i_saw_her_standing_there">I Saw Her Standing There</Link>"). The band
              rehearsed during their lunch break and then proceeded with their afternoon session. In that session, Paul McCartney recorded a
              double-tracked vocal for "<Link to="/beatles/a_taste_of_honey">A Taste of Honey</Link>" (a standard later covered by renowneed soul
              artists such as The Supremes, Four Tops, and Mel Carter), George Harrison sang lead on
              "<Link to="/beatles/do_you_want_to_know_a_secret">Do You Want to Know a Secret</Link>", and Lennon and McCartney sang co-lead on
              "<Link to="/beatles/misery">Misery</Link>." During the evening session, the band recorded covers of
              "<Link to="/beatles/anna_go_to_him">Anna (Go to Him)</Link>", "<Link to="/beatles/boys">Boys</Link>"
              (<Link to="/beatles/ringo_starr">Ringo Starr</Link>'s sole vocal). "<Link to="/beatles/chains">Chains</Link>", and "Baby, It's You." The
              song "<Link to="/beatles/hold_me_tight">Hold Me Tight</Link>" was also recorded during the evening session, but proved "surplus to
              requirements" and was not included on the album.
            </p>
            <p>
              At 10 pm, with the studio set to close soon, the day ended with a cover of "<Link to="/beatles/twist_and_shout">Twist and Shout</Link>".
              The song was picked after a discussion in the studio canteen in which numerous songs were suggested before "Twist and Shout" was
              chosen. The performance, caight on the first take, prompted Martin to say: "I don't know how they do it. We've been recording all day but
              the longer we go on the better they get." Lennon later remarked, "The last song nearly killed me. My voice wasn't the same for a long time
              after; every time I swallowed, it was like sandpaper."
            </p>
            <p>
              At the end of the evening session at 10:30 pm, the Beatles attended a full tape playback in the studio control room. Lennon reflected,
              "Waiting to hear that LP played back was one of our most worrying experiences. ...As it happens, we were very happy with the result. The
              Beatles were not present during an overdub session on February 20, during which Martin overdubbed piano on "Misery" and celesta on
              "Baby It's You."
            </p>
            <p>
              The day of recording cost approximately £400 (equivalent to £7,300 in 2025). Martin said: "There wasn't a lot of money at Parlophone. I was
              working to an annual budget of £55,000." This budget had to cover all of the artists on Martin's roster. Individually, under a contract
              with the Musicians' Union, each Beatle collected a session fee of £7 10s (£7.50; equivalent to £137 in 2025) for each three-hour
              session (10:00 am - 1:00 pm / 2:30 pm - 5: 30 pm / 7:30 pm - 10:30 pm).
            </p>
            <p>
              Before deciding on the title Please Please Me, Martin considered calling the album Off the Beatle Track, a title he would later use for
              his own orchestral album of Beatles songs. The album was recorded on a two-track BTR tape machine with most of the instruments on one
              track and the vocals on the other, allowing Martin to better balance the two in the final mono mix. A stereo mix was also made with one
              track on the left channel and the other on the right, as well as an added layer of reverb to better blend the two tracks together. The
              two tracks generally divided the instrumental track from the vocals, with the exception of "Boys", in which the close proximity of
              Ringo's drums to his vocal microphone placed the drums (but not the other instruments) on the vocal channel.
            </p>
            <p>
              Two tracks, "Love Me Do" and "P.S. I Love You", were only mixed for mono for the single's release and no stereo versions were made, so,
              for the stereo version of the album, during the mixing sessions on February 25, 1963, Martin created "mock stereo" versions by
              emphasizing low frequencies on one side and high frequencies on the other. These versions would contine to be made available via 
              compilation albums (such as <Link to="/beatles/1962-1966">1962-1966</Link>), and on Mobile Fidelity Sound Labs' half-speed mastered
              vinyl releases sourced from EMI's original stereo master tapes, until the Beatles' catalogue was standardized and issued on compact disc
              in 1987, starting with the first four UK albums being issued in their mono versions. However, when Capitol Records issued the second
              volume of American Beatles albums on compact disc in 2006, the same mock stereo versions that appeared on The Early Beatles were included.
              When the entire catalogue was remastered for release in 2009, the mono mixes were chosen for inclusion on the stereo reissues, and
              appear on all releases since, including newer compoilations and variations.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Artwork and packaging"} />
          <div>
            <p>
              George Mrtin was an honorary fellow of the Zoological Society of London, which owns London Zoo, and he thought that it might be good
              publicity for the zoo to have the Beatles pose outside the insect house for the cover photography of the album. However, the society
              turned down Martin's request, and instead, Angus McBean was asked to take the distinctive color photograph of the group looking down over
              the stairwell inside EMI's London headquarters in Manchester Square. Martin was to write later: "We rang up the legendary theatre
              photographer Angus McBean, and bingo, he came round and did it there and then. It was done in an almighty rush, like the music. Thereafter,
              though, the Beatles own creativity came bursting to the fore." In 1969, the Beatles asked McBean to recreate this shot. Although the 1969
              photograph was originally intended for the then-planned Get Back album, it was not used when that project saw eventual release in 1970
              as <Link to="/beatles/let_it_be_album">Let It Be</Link>. Instead, the 1969 photograph, along with an unused photograph from the 1963
              photo shoot, was used in 1973 for the Beatles' retrospective albums 1962-1966 and <Link to="/beatles/1697-1970">1967-1970</Link>.
              Another unused photograph from the 1963 photo shoot was used for The Beatles (No. 1).
            </p>
            <p>
              The Beatles' press officer Tony Barrow wrote extensive sleeve notes, which included a brief mention of their early 1960s rivals the
              Shadows.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Release"} />
          <div>
            <p>
              Parlophone released Please Please Me in the UK on March 22, 1963. As was typical for the time, the LP was initially released in mono,
              with a stereo release following on April 26. Singles remained the dominant format for pop music, made up mostly of teenage buyers, while
              more expensive LPs were typically reserved for genres like classical music and jazz, whose listeners could more easily afford the format.
              Author Barry Miles suggested the album's cover design, promising "Please Please Me", "Love Me Do", and "12 Other Songs", indicated EMI's
              dsire to promote the album towards "die-hard supporters" excited by the two earlier singles.
            </p>
            <p>
              Please Please Me hit the top of the UK album charts in May 1963 and remained there for 30 weeks before being replace by
              <Link to="/beatles/with_the_beatles"> With the Beatles</Link>. This was an unprecedented achievement for a pop album. At the time, the
              UK album charts tended to be dominated by film soundtracks and easy listening vocalists. Please Please Me was the first non-soundtrack
              album to spend more than one year (62 weeks) consecutively inside the top ten of what became the Official UK Albums Chart. This record
              run of consecutive weeks in the top ten for a debut album stood until April 2013, when Emeli Sande's Our Version of Events achieved a
              63rd consecutive week.
            </p>
            <p>
              In the March 30 issue of Record Mirror, Norman Jopling reviewed the album in depth, providing track-by-track reviews for the ten songs
              that had not been previously released. He concluded that, for a debut, the LP is "surprisingly good and up to standard", and contained
              many tracks that could have been released as singles, such as "I Saw Her Standing There" and "Misery". Jopling further highlighted the
              LP's packaging, writing that its cover image and sleeve notes provided extra value. Author Jonathan Gould suggests in retrospect that the
              album's packaging majorly contributed to its success, promising fans "glossy cover art" and a greater companion to the musi than the
              plain paper packaging then offered by singles.
            </p>

            <h3 className="article-heading-3" id="4.1">International and CD releases</h3>
            <p>
              
            </p>
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