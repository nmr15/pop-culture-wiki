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
                src="https://upload.wikimedia.org/wikipedia/en/7/74/The_Beatles_in_Hamburg.webp" 
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
            <p>
              On February 11, 1963, the Beatles recorded ten songs during a single studio session for their debut LP,
              <Link to="/beatles/please_please_me_album">Please Please Me</Link>. It was supplemented by the four tracks already released on their first
              two singles. Martin considered recording the LP live at The Cavern Club, but after deciding that the building's acoustic were inadequate,
              he elected to simulate a "live" album with minimal production in "a single marathon session at Abbey Road". After the moderate success of
              "Love Me Do", the single "Please Please Me" was released in January 1963, two months ahead of the album. It reached number one on every
              UK chart except Record Retailer, where it peaked at number two.
            </p>
            <p>
              Recalling how the Beatles "rushed to deliver a debut album, bashing out Please Please Me in a day", AllMusic critic Stephen Thomas Eriewine wrote: "Decades after its
              release, the album still sounds fresh, precisely because of its intense origins." Lennon said little thought wwent into composition at the time; he and McCartney were
              "just writing songs <i>à la Everly Brothers à la Buddy Holly</i>, pop songs with nore more thought of them than that, to create a sound. And the words were almost
              irrelevant."
            </p>
            <p>
              Released in March 1963, Please Please Me was the first of eleven consecutive Beatles albums released in the United Kingdom to reach number one. The
              band's third single, "<Link to="/beatles/from_me_to_you">From Me to You</Link>", came out in April and began an almost unbroken string of
              seventeen British number-one singles, including all but one of the eighteen they released over the next six years. Issued in August, their fourth
              single, "<Link to="/beatles/she_loves_you">She Loves You</Link>", achieved the fastest sales of any record in the UK up to that time, selling
              three-quarters of a million copies in under four weeks. It became their first single to sell a million copies and remained the biggest-selling record
              in the UK until 1978.
            </p>
            <p>
              The success brought increased media exposure, to which the Beatles responded with an irreverent and comical attitude that defied the expectations of
              pop musicians at the time, inspiring even more interest. The band toured the UK three times in the first half of the year; a four-week tour that
              began in February, the Beatles' first nationwide, preceded three-week tours in March and May-June. As their popularity spread, a frenzied adulation of
              the group took hold.On October 13, the Beatles starred on Sunday Night at the London Palladium, the UK's top variety show. Their performance was
              televised live and watched by 15 million viewers. One national paper's headlines in the following days coined the term "Beatlemania" to describe the
              riotous enthusiasm by screaming fans who greeted the band, and it stuck. Although not billed as tour leaders, the Beatles overshadowed American acts
              Tommy Roe and Chris Montez during the February engagements and assumed top billing "by audience demand", something no British act had previously
              accomplished while touring with artists from the US. A similar situtation arose during their May-June tour with Roy Orbison.
            </p>
            <div className="img-left img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/The_Beatles_and_Lill-Babs_1963.jpg/500px-The_Beatles_and_Lill-Babs_1963.jpg" alt="The Beatles and Lili-Babs" />
              <p>McCartney, Harrison, Swedish pop singer Lili-Babs, and Lennon on the set of the Swedish television show Drop In, October 30, 1963</p>
            </div>
            <p>
              In late October, the Beatles began a five-day tour of Sweden, their first time abroad since the final Hamburg engagement of December 1962. On their
              return to the UK on October 31, several hundred screaming fans greeted them in heavy rain at Heathrow Airport. Around 50 to 100 journalists and
              photographers, as well as representatives from the BBC also joined the airport reception, the first of more than 100 such events. The next day, the
              band began its fourth tour of Britain within nine months, this one scheduled for six weeks. In mid-November, as Beatlemania intensified, police
              resorted to using high pressure water hoses to control the crowd before a concert in Plymouth. On November 4, they played in front of The Queen Mother
              and Princess Margaret during the Royal Variety Performance at the Prince of Wales Theatre.
            </p>
            <p>
              Please Please Me maintained the top position on the Record Retailer chart for 30 weeks, only to be displaced by its follow-up,
              <Link to="/beatles/with_the_beatles"> With the Beatles</Link>, which EMI released on November 25 to record advance orders of 270,000. The LP topped
              a half-million albums sold for one week. Recorded between July and October, With the Beatles made better use studio production techniques than its
              predecessor. It held the top spot for 21 weeks with a chart life of 40 weeks. Eriewine described the LP as "a sequel of the highest order, one that
              betters the original."
            </p>
            <p>
              In a reversal of then standard practices, EMI released the album ahead of the impending single
              "<Link to="/baatles/i_want_to_hold_your_hand">I Want to Hold Your Hand</Link>", with the song excluded to maximize the single's sales. The album
              caught the attention of music critic William Mann of The Times, who suggested that Lennon and McCartney were "the outstanding English composers of
              1963." The newspaper published a series of articles in which Mann offered detailed analyses of the music, lending it respectability. With the Beatles
              became the second album in UK chart history to sell a million copies, a figure previously reached only by the 195 South Pacific soundtrack. When
              writing the sleeve notes for the album, the band's press officer, Tony Barrow, used the superlative the "fabulous foursome", which the media widely
              adopted as "the Fab Four."
            </p>

            <h4 className="article-heading-4" id="1.2.1">First visit to the United States and the British Invasion</h4>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/The_Beatles_arrive_at_JFK_Airport.jpg/500px-The_Beatles_arrive_at_JFK_Airport.jpg"
              alt="The Beatles at JFK airport" />
              <p>The Beatles arrive at John F. Kennedy International Airport, February 7, 1964.</p>
            </div>
            <p>
              EMI's American subsidiary, Capitol Records, hindered the Beatles' releases in the United States for more than a year by initially declining to issue
              their music, including their first three singles. Concurrent negotiations with the independent US label Vee-Jay led to the release of some, but not
              all, of the songs in 1963. Vee-Jay finished preparation for the album Introducing... The Beatles, compising most of the songs of Parlophone's
              Please Please Me, but a managament shake-up led to the album not being released. After it emerged that the label did not report royalties on their
              sales, the license that Vee-Jay had signed with EMI was voided. A new license was granted to the Swan label for the single "She Loves You." The
              record received some airplay in the Tidewater area of Virginia from Gene Loving of radio station WGH and was featured on the "Rate-a-Record" segment of
              American Bandstand, but it failed to catch on nationally.
            </p>
            <div className="img-left img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Beatlemania_fan_-_Press_and_Sun-Bulletin_%281964%29.jpg/500px-Beatlemania_fan_-_Press_and_Sun-Bulletin_%281964%29.jpg"
              alt="Newspaper clipping of Beatlemania" />
              <p>A newspaper clipping from February 8, 1964 covering "Beatlemania".</p>
            </div>
            <p>
              Epstein brought a demo copy of "I Want to Hold Your Hand" to Capitol's Brown Meggs, who signed the band and arranged for a $40,000 US marketing campaign.
              American chart success began after disc jockey Carroll James on AM radio station WWDC, in Washington, DC, obtained a copy of the British single "I
              Want to Hold Your Hand" in mid-December 1963 and began playing it on-air. Taped copies of the song soon circulated among other radio stations
              throughout the US. This caused an increase in demand, leading Capitol to bring forward the release of "I Want to Hold Your Hand" by three weeks.
              Issued on December 26 with the band's previously scheduled debut there just weeks away. "I Want to Hold Your Hand" sold a million copies, becoming a
              number-one hit in the US by mid-January. In its wake Vee-Jay released Introducing... The Beatles along with Capitol's debut album, Meet the Beatles,
              while Swan reactivated production of "She Loves You." The Odeon label, an EMI subsidiary, pressed Beatles LPs to be shipped out and distributed abroad.
              After the Beatles' US trip, MGM Records released the single "My Bonnie" backed with "The Saints" in the US on January 27, 1964 as a Beatles single,
              and Atco followed in issuing the recordings the Beatles had made in Germany with Tony Sheridan in 1961 and 1962.
            </p>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Beatles_with_Ed_Sullivan.jpg/500px-Beatles_with_Ed_Sullivan.jpg" alt="Beatles and Ed Sullivan" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/The_Beatles_performing_at_The_Ed_Sullivan_Show_%28cropped_2%29.jpg/500px-The_Beatles_performing_at_The_Ed_Sullivan_Show_%28cropped_2%29.jpg"
              alt="Beatles Ed Sullivan show colored" />
              <p>The Beatles performing on The Ed Sullivan Show, February 1964.</p>
            </div>
            <p>
              On February 7, 1964, the Beatles departed from Heathrow with an estimated 4,000 fans waving and screaming as the aircraft took off. Upon landing at New York's
              John F. Kennedy Airport, an uproarious crowd estimated at 3,000 greeted them. They gave their first live US television performance two days later on The Ed
              Sullivan Show, watched by approximately 73 million viewers in over 23 million hoouseholds, or 34 percent of the American population. Biographer Jonathan
              Gould writes that, according to the Nielsen rating service, it was "the largest audience that had ever been recorded for an American television program." The
              next morning, the Beatles awoke to a large negative critical consensus in the US, but a day later at their first US concert, Beatlemania erupted at the
              Washington Coliseum. Back in New York the following day, the Beatles met with another strong reception during two shows at Carnegie Hall. The band flew to
              Florida, where they appeared on The Ed Sullivan Show a second time, again before 70 million viewers, before returning to the UK on February 22.
            </p>
            <p>
              The Beatles' first visit to the US took place when the nation was still mourning the assassination of President John F. Kennedy the previous November.
              Commentators often suggest that for many, particularly the young, the Beatles' performances reignited the sense of excitement and possibility that had
              momentarily faded in the wake of the assassination and helped pave the way for the revolutionary social changes to come later in the decade. Their hairstyle,
              unusually long for the era and mocked by many adults, became an emblem of rebellion to the burgeoning youth culture.
            </p>
            <p>
              The group's popularity generated unprecedented interest in British music, and many other UK acts subsequently made their American debuts, successfully touring
              over the next three years in what was termed the British Invasion. The Beatles' success in the US opened the door for a successive string of British beat
              groups and pop acts such as the Dave Clark Five, the Animals, Herman's Hermits, Petula Clark, the Kinks, and the Rolling Stones to achieve success in America.
              During the week of April 4, 1964, the Beatles held twelve positions on the Billboard Hot 100 singles chart, including the top five.
            </p>

            <h4 className="article-heading-4" id="1.2.1">A Hard Day's Night</h4>
            <p>
              Capitol Records' lack of interest throughout 1963 did not go unnoticed, and a competitor, UnitedArtists Records, encouraged its film
              division to offer the Beatles a three-motion-picture deal, primarily for the commercial potential of the soundtracks in the US. Directed by
              Richard Lester, A Hard Day's Night involved the band for six weeks in March–April 1964 as they played themselves in a musical comedy. The film
              premiered in London and New York in July and August, respectively, and was an international success, with some critics drawing a comparison
              with the Marx Brothers.
            </p>
            <p>
              United Artists released a full soundtrack album for the North American market, combining Beatles songs and Martin's orchestral score;
              elsewhere, the group's third studio LP, A Hard Day's Night, contained songs from the film on side one and other new recordings on side two.
              According to Erlewine, the album saw them "truly coming into their own as a band. All of the disparate influences on their first two albums
              coalesced into a bright, joyous, original sound, filled with ringing guitars and irresistible melodies." That "ringing guitar" sound was
              primarily the product of Harrison's 12-string electric Rickenbacker, a prototype given to him by the manufacturer, which made its debut on the
              record.
            </p>

            <h4 className="article-heading-4" id="1.2.1">1964 world tour, meeting Bob Dylan and stand on civil rights</h4>
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Paul%2C_George_%26_John.png/330px-Paul%2C_George_%26_John.png"
                alt="Paul, George, and John on Dutch TV" 
              />
              <p>McCartney, Harrison, and Lennon performing on Dutch TV in 1964.</p>
            </div>
            <p>
              Touring internationally in June and July, the Beatles staged 37 shows over 27 days in Denmark, the Netherlands, Hong Kong, Australia, and
              New Zealand. In August and September, they returned to the US, with a 30-concert tour of 23 cities. Generating intense interest once again,
              the month-long tour attracted between 10,000 and 20,000 people to each 30-minute performance in cities from New York to San Francisco.
            </p>
            <p>
              In August, journalist Al Aronwitz arranged for the Beatles to meet Bob Dylan. Visiting the band in their New York hotel suite, Dylan
              introduced them to cannabis. Gould points out the musical and cultrual significance of the meeting, before which the musicians' respective
              fan bases were "perceived as inhabiting two separate subcultural worlds": Dylan's audience of "college kids with artistic or intellectual
              leanings, a dawning political and social idealism, and a mildly bohemian style" contrasted with their fans, "veritable 'teenyboppers', kids in
              high school or grade school whose lives were totally wrapped up in the commercialised popular culture of television, radio, pop records, fan
              magazines, and teen fashion. To many of Dylan's followers in the folk music scene, the Beatles were seen as idolaters, not idealists."
            </p>
            <p>
              Within six months of the meeting, according to Gould, "Lennon would be making records on which he openly imitated Dylan's nasal drone, brittle
              strum, and introspective vocal persona"; and six months after that, Dylan began performing with a backing band and electric instrumentation,
              and "dressed in the height of Mod fasion." As a result, Gould continues, the traditional division between folk and rock enthusiats
              "nearly evaporated", as the Beatles' fans began to mature in their outlook and Dylan's audienc embraces the new, youth-driven pop culture.
            </p>
            <p>
              During the 1964 US tour, the group were confronted with racial segregation in the country at the time. When informed that the venue for their
              September 11 concert, the Gator Bowl in Jacksonville, Florida, was segregated, the Beatles said they would refuse to perform unless the
              audience was integrated. Lennon stated: "We never play to segregated audinences and we aren't going to start now... I'd sooner lose our
              appearance money." City officials relented and agreed to allow an integrated show. The group also cancelled their reservations at the
              white-only Hotel George Washington in Jacksonville. For their subsequent US tours in 1965 and 1966, the Beatles included clauses in contracts
              stipulating that shows be integrated.
            </p>

            <h4 className="article-heading-4" id="1.2.1">Beatles for Sale, Help!, and Rubber Soul</h4>
            <p>
              According to Gould, the Beatles' fourth studio LP, <Link to="/beatles/beatles_for_sale">Beatles for Sale</Link>, evidenced a growing
              conflict between the commercial pressures of their global success and their creative ambitions. They had intended the album, recorded
              between August and October 1964, to continue the format established by A Hard Day's Night which, unlike the first two LPs, contained only
              original songs. They had nearly exhausted their backblog of songs on the previous album, however, and given the challenges constant
              international touring posed to their songwriting efforts, Lennon admitted, "Material's becoming a hell of a problem." As a result, six
              covers from their extensive repertoire were chosen to complete the album. Released in early December, its eight original composition stood
              out, demonstrating the growing maturity of the Lennon-McCartney songwriting partnership.
            </p>
            <p>
              In early 1965, following a dinner with Lennon, Harrison and their weives, Harrison's dentist, John Riley, secretly added LSD to their
              coffee. Lennon described the experience: "It was just terrifying, but it was fantastic. I was pretty stunned for a month or two." He and
              Harrison subsequently became regular users of the drug, joined by Starr on at least one occasion. Harrison's use of psychedelic drugs
              encouraged his path to meditation and Hinduism. He commented: "For me, it was like a flash. The first time I had acid, it just opened up
              something in my head that was inside of me, and I realised a lot of things. I didn't learn them beause I already knew them, but that 
              happened to be the key that opened the door to reveal them. From the moment I had that, I wanted to have it all the time, these thoughts about
              he yogis and the Himalayas, and Ravi's music." McCartney was initially reluctant to try it, but eventually did so in late 1966. He beame the
              first Beatle to discuss LSD publicly, declaring in a magazine interview that "it opened my eyes" and "made me a better, more honest, more
              tolerant member of society."
            </p>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/TrailerUSHelp.jpg/250px-TrailerUSHelp.jpg"
                alt="US trailer for Help!" 
              />
              <p>The US trailer for Help! with (from the rear) Harrison, McCartney, Lennon, and (largely obscured) Starr.</p>
            </div>
            <p>
              Controversy erupted in June 1965 when Queen Elizabeth II appointed all four Beatles Members of the Order of the British Empire (MBE) after
              Prime Minister Harold Wilson nominated them for the award. In protests, the honor was at that time primarily bestowed upon miliary veterans
              and civic leaders, some conservative MBE recipients returned their insignia.
            </p>
            <p>
              In July, the Beatles' second film, Help!, was released, again directed by Lester. Described as "mainly a relentless spoof of Bond", it
              inspired a mixed response among both reviewers and the band. McCartney said: "Halp! was great but it wasn't our film, we were sort of
              guest stars. It was fun, but basically, as an idea for a film, it was a bit wrong." The soundtrack was dominated by Lennon, who wrote and
              sang lead on most of its songs, including the two singles: "<Link to="/beatles/help_song">Help!</Link>" and
              "<Link to="/beatles/ticket_to_ride">Ticket to Ride</Link>."
            </p>
            <p>
              The <Link to="/beatles/help_album">Help!</Link> album, the group's fifth studio LP, mirrored A Hard Day's Night by featuring soundtrack
              songs on side one and additional songs from the same sessions on side two. The LP contained all original material save for two covers,
              "<Link to="/beatles/act_naturally">Act Naturally</Link>" and "<Link to="/beatles/dizzy_miss_lizzy">Dizzy Miss Lizzy</Link>"; they were the
              last covers the band would include on an album until <Link to="/beatles/let_it_be_album">Let It Be</Link>'s brief rendition of the
              traditional Liverpool folk song "<Link to="/beatles/maggie_mae">Maggie Mae</Link>." The band expanded their use of vocal overdubs on Help!
              and incorporated classical insruments into some arrangements, including a string quartet on the pop ballad
              "<Link to="/beatles/yesterday">Yesterday</Link>." Composed and sung by McCartney, none of the other Beatles perform on the recording.
              "Yesterday" has inspired the most cover versions of any song ever written. With Help!, the Beatles became the first rock roup to be
              nominated for a Grammy Award for Album of the Year.
            </p>
            <div className="img-left img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Beatles_press_conference_1965.jpg/330px-Beatles_press_conference_1965.jpg"
                alt="Beatles press conference"
              />
              <p>The Beatles at a press conference in Minnesota in August 1965, shortly after playing at Shea Stadium in New York.</p>
            </div>
            <p>
              The group's third US tour opened with a performance before a world-record crowd of 55,600 at New York's Shea Stadium on August 15, "perhaps
              the most famous of all Beatles' concerts", in Lewisohn's description. A further nine successful concerts followed in other American cities.
              At a show in Atlanta, the Beatles gave one of the first live performances ever to make use of a foldback system of on-stage monitor
              speaers. Towards the end of the tour, they met with Elvis Presley, a foundational musical influence on the band, who invited them to his home
              in Beverly Hills. Presley later said the band was an example of a trend of anti-Americanism and drug abuse.
            </p>
            <p>
              Steptember 1965 saw the launch of an American Saturday-morning cartoon series, The Beatles, that echoed A Hard Day's Night's slapstick
              antics over its two-year original run. The series was the first weekly television series to feature animated versions of real, living
              people.
            </p>

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
