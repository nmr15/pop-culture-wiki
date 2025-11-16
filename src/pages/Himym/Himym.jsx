import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Himym = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <li className="sidebar-list-item"><a href="#3">Production</a></li>
          <li className="sidebar-list-item"><a href="#4">Syndication</a></li>
          <li className="sidebar-list-item"><a href="#5">Cast and characters</a></li>
          <Collapse
            id="6"
            item="Season synopses"
            sub={[
              { id: "6.1", title: "Season 1" },
              { id: "6.2", title: "Season 2" },
              { id: "6.3", title: "Season 3" },
              { id: "6.4", title: "Season 4" },
              { id: "6.5", title: "Season 5" },
              { id: "6.6", title: "Season 6" },
              { id: "6.7", title: "Season 7" },
              { id: "6.8", title: "Season 8" },
              { id: "6.9", title: "Season 9" },
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Critical reception</a></li>
          <Collapse
            id="7"
            item="Subplots"
            sub={[
              { id: "7.1", title: "The Slap Bet" },
              { id: "7.2", title: "The Pineapple Incident" },
              { id: "7.3", title: "Robin Sparkles" },
              { id: "7.4", title: "The Doppelgangers" },
              { id: "7.5", title: "The Playbook" },
              { id: "7.6", title: "Marshall vs. Machines" },
            ]}
          />
          <Collapse
            id="8"
            item="Tie-ins"
            sub={[
              { id: "8.1", title: "Books" },
              { id: "8.2", title: "Podcasts" },
              { id: "8.3", title: "Music Volume" },
              { id: "8.4", title: "Soundtracks" },
              { id: "8.5", title: "Pineapple incident explained" },
              { id: "8.6", title: "Websites" },
              {
                id: "8.7", title: "Spin-offs", sub2: [
                  { id: "8.7.1", title: "How I Met Your Dad" },
                  { id: "8.7.2", title: "How I Met Your Father" }
                ]
              }
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Nielsen ratings</a></li>
          <li className="sidebar-list-item"><a href="#10">Awards and nominations</a></li>
          <li className="sidebar-list-item"><a href="#11">Home media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>How I Met Your Mother</li>
        </ul>
        <div>
          <h1 className="article-heading">How I Met Your Mother</h1>
        </div>
        <div className="img-right img-top">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/HowIMetYourMother.svg/440px-HowIMetYourMother.svg.png"
            alt="How I Met Your Mother"
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            How I Met Your Mother is an American sitcom created by Craig Thomas and Carter Bays for CBS. The series, which aired from September 19, 2005,
            to March 31, 2014, follows main character <Link>Ted Mosby</Link> and his group of friends in New York City's Manhattan. As a frame story,
            Ted (in 2030)recounts to his daughter Penny and son Luke the events from September 2005 to May 2013 that led to him meeting
            <Link> their mother</Link>.
          </p>
          <p>
            The series was loosely inspired by Thomas and Bays' friendship when they both lived in New York. The vast majority of the episodes (196 out of
            208) were directed by Pamela Fryman. The other directors were Rob Greenberg (7 episodes), Michael Shea (4 episodes), and
            <Link> Neil Patrick Harris</Link> (1 episode).
          </p>
          <p>
            Known for its non-contemporary structure, humor, and incorporation of dramatic elements, How I Met Your Mother was popular throughout its run.
            It received positive reviews initially, but reception became more mixed as the seasons went on. The show was nominated for 91 awards and
            received 21.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Premise</h2>
          <div>
            <p>
              The series follows the adventures of <Link>Ted Mosby</Link> (played by <Link>Josh Radnor</Link>) and his love life as a single man. His
              stories are narrated by <Link>Bob Saget</Link> as Ted Mosby 25 years later, as he tells them to his adolescent children, Luke (named after
              <Link>Luke Skywalker</Link>) and Penny (named after Ted's love for coins).
            </p>
            <p>
              The narrative leads to a flashback, and the story proper starts in 2005 with 27-year-old Ted Mosby living in New York City and working as
              an architect. The story deals primarily with his best friends. These include the long-standing couple <Link>Marshall Eriksen</Link>
              (<Link>Jason Segel</Link>), a law student, and <Link>Lily Aldrin</Link> (<Link>Alyson Hannigan</Link>), a kindergarten teacher, who have
              been dating for almost nine years when Marshall proposes; and the playboy <Link>Barney Stinson</Link> (<Link>Niel Patrick Harris</Link>),
              and the Canadian news reporter <Link>Robin Scherbatsky</Link> (<Link>Cobie Smulders</Link>). All of the characters' lives are interwined.
              The series explores many story lines, including "will they or won't they" relationships between Robin and each of the two single male
              friends, Marshall and Lily's relationship, and the ups and downs of the characters' careers.
            </p>
            <p>
              The show's frame story depicts Ted (voiced by Bob Saget, uncredited) telling the story to his sone Luke (David Henrie) and daughter
              Penny (Lyndsy Fonseca) as they sit on the couch in the year 2030. This frame is the show's putative narrative present, and How I
              Met Your Mother exploits this narrative structure in numerous ways: to depict and re-depict events from multiple points of view;
              to set up jokes using quick and sometimes multiple flashbacks nested within the oral retelling; to substitute visual, verbal, or
              aural euphemisms for activities Ted does not want to talk about with his children (sexual practices, use of illicit substances,
              vulgar language, etc.).
            </p>
            <p>
              Although the traditional love story structure begins when the lead characters first meet. How I Met Your Mother does not intoduce
              Ted's wife (<Link>Cristin Milioti</Link>) until the eighth season finale and only announces her full name, <Link>Tracy
              McConnell</Link>, during the series finale. Her first name, Tracy, is mentioned in the first season at the end of episode nine.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Production</h2>
          <div>
            <p>
              How I Met Your Mother was inspired by Carter Bays and Craig Thomas' idea to "write about our friends and the stupid stuff we did
              in New York", where they previously worked as writers for Late Show with David Letterman, among others. The two drew from their
              friendship in creating the characters. Ted is based loosely on Bays, and Marshall and Lily are based loosely on Thomas and his
              wife. Thomas' wife Rebecca was initially reluctant to have a character based on her but agreed if they could get Alyson Hannigan
              to play her. Hannigan was looking to do more comedy work and was available. Josh Radnor and Jason Segel, who were cast as Ted and
              Marshall, respectively, were not well known, although Segel had been a cast member on the short-lived Freaks and Geeks and a
              recurring guest star on Judd Apatow's follow-up show, Undeclared. The role of Barney was initially envisioned as a "John
              Belushi-type character" before Neil Patrick Harris won the role after being invited to an audition by the show's casting
              director Megan Branman. Pamela Fryman invited Bob Saget to be the voice-over narrator, Future Ted, explaining to him that the
              show would be like The Wonder Years but "kind of into the future". Saget either went to the television studio and recorded the
              narration while watching the episode, or did so separately and rerecorded with the episode if necessary. He normally did not
              attend table readings but did so for the last episode.
            </p>
            <p>
              In multiple interviews Bays and Thomas have stated that "a pretty famous actress" turned down the role of Robin, who they
              revealed in February 2014 was Jennifer Love Hewitt. They then cast the unknown Cobie Smulders; Bays and Thomas later said,
              "Thank God we did for a million reasons... when Ted's seeing her for the first time, America's seeing her for the first time,
              the intrigue of that propelled the show going forward and kep the show alive". Although Ted is initially smitten by Robin in the
              <Link to="/himym/pilot"> pilot</Link>, it is quickly established at the end of the episode that she is not the mother, which
              Thomas said was done so they would not repeat the "will they or won't they" Ross and Rachel storyline from Friends.
            </p>
            <p>
              According to an Entertainment Weekly article, the writers adopted facets of each main actor's personality and incorporated them
              into their characters. This includes Neil Patrick Harris' skills with magic, Jason Segel's passion for songwriting, Alyson
              Hannigan's absent-mindedness while pregnant, and Josh Radnor's intellectualism.
            </p>
            <p>
              MacLaren's, an Irish bar in the middle of New York City, in which a lot of the show is set, is loosely based on four of Bays and
              Thomas's favorite bars: McGee's, a Midtown tavern near the Ed Sullivan Theater where the Late Show is taped; McHale's, a
              legendary Hell's Kitchen bar which closed in 2006; Chumley's, a since-closed historic Greenwich Village pub; and Fez, another
              closed bar on the Upper West Side. McGee's had a mural that Bays and Thomas both liked and wanted to incorporate into the show.
              The name for the bar is from Carter Bays' assistant, Carl MacLaren; the bartender in the show is also named Carl.
            </p>
            <p>
              Episodes were generally shot over a three-day period in the Los Angeles-based Soundstage Studio 22 and featured upwards of 50
              scenes with quick transitions and flashbacks. However, the pilot episode was filmed at CBS Radford. The laugh track was later
              created by recording an audience being shown the final edited episode. Thomas claimed that shooting before a live audience
              would have been impossible because of the structure of the show and the numerous flashforwards in each episode and because
              doing so "would blur the line between 'audience' and 'hostage situation'". Later seasons started filming in front of an
              audience on occasion, when smaller sets were used.
            </p>
            <p>
              The theme song is a portion of "Hey Beatiful" by The Solids, of which Bays and Thomas are members. Episodes from season 1
              generally started with the opening credits. A cold opening has been used since season 2. Viewers then occasionally see Ted's
              children on a couch and hear him talking to them, telling the story of how he met their mother. Alternatively, scenes from
              previous episodes or shots of New York City are shown with Ted narrating over them. Thomas has stated that Future Ted is an
              unreliable narrator, since he is trying to tell a story that happened over 20 years earlier, this has been a plot point in
              several episodes including "<Link to="/himym/the_goat">The Goat</Link>", "<Link to="/himym/oh_honey">Oh Honey</Link>",
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Syndication</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Cast and characters</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Season synopses</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Season 1</h3>
            <h3 className="article-heading-3" id="5.2">Season 2</h3>
            <h3 className="article-heading-3" id="5.3">Season 3</h3>
            <h3 className="article-heading-3" id="5.4">Season 4</h3>
            <h3 className="article-heading-3" id="5.5">Season 5</h3>
            <h3 className="article-heading-3" id="5.6">Season 6</h3>
            <h3 className="article-heading-3" id="5.7">Season 7</h3>
            <h3 className="article-heading-3" id="5.8">Season 8</h3>
            <h3 className="article-heading-3" id="5.9">Season 9</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Critical reception</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Subplots</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">The Slap Bet</h3>
            <h3 className="article-heading-3" id="7.2">The Pineapple Incident</h3>
            <h3 className="article-heading-3" id="7.3">Robin Sparkles</h3>
            <h3 className="article-heading-3" id="7.4">The Doppelgangers</h3>
            <h3 className="article-heading-3" id="7.5">The Playbook</h3>
            <h3 className="article-heading-3" id="7.6">Marshall vs. Machines</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Tie-ins</h2>
          <div>
            <h3 className="article-heading-3" id="8.1">Books</h3>
            <h3 className="article-heading-3" id="8.2">Podcasts</h3>
            <h3 className="article-heading-3" id="8.3">Music Volume</h3>
            <h3 className="article-heading-3" id="8.4">Soundtracks</h3>
            <h3 className="article-heading-3" id="8.5">Pineapple incident explained</h3>
            <h3 className="article-heading-3" id="8.6">Websites</h3>
            <h3 className="article-heading-3" id="8.7">Spin-offs</h3>
            <h4 className="article-heading-4" id="8.7.1">How I Met Your Dad</h4>
            <h4 className="article-heading-4" id="8.7.2">How I Met Your Father</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="9">Nielsen ratings</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="10">Awards and nominations</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="11">Home media</h2>
          <div></div>
        </div>
      </main>
    </>
  )
}

export default Himym
