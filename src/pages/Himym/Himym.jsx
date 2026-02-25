import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableHimym from '../../components/TableHimym'

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
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>How I Met Your Mother</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/HowIMetYourMother.svg/440px-HowIMetYourMother.svg.png" alt="How I Met Your Mother logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>Carter Bays</Link> <br /> <Link>Craig Thomas</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><Link>List of How I Met Your Mother episodes</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of How I Met Your Mother character</Link></td>
            </tr>
          </tbody>
        </table>
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
          <Heading2 id={1} title={"Premise"} />
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
          <Heading2 id={2} title={"Production"} />
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
              "<Link to="/himym/how_i_met_everyone_else">How I Met Everyone Else</Link>", and 
              "<Link to="/himym/the_mermaid_theory">The Mermaid Theory</Link>". Nevertheless, Thomas has also emphasized maintaining a coherent and
              consistent universe and trying to avoid continuity errors, a problem he noticed in other shows.
            </p>
            <p>
              A scene relating to the identity of the mother, involving Ted's future children, was filmed in 2006 for the show's eventual series finale.
              This was done because the teenage actors portraying them would be adults by the time the final season was shot.
            </p>
            <p>
              During the 2007-2008 Writers Guild of America strike, How I Met Your Mother shut down production; when the strike ended, the show returned
              on March 17, 2008, with nine new episodes. The network announced a change in the timeslot to 8:30 pm ET/7:30 pm CT, flip-flopping from the
              summer schedule with The Big Bang Theory. CBS renewed the show for a fourth season on May 14, 2008, which premiered on September 22, 2008.
            </p>
            <p>
              In September 2008, Lifetime Television announced it had purchased the cable rerun rights to How I Met Your Mother at a rate of about
              $725,000 per episode. The four-year syndication contract stipulated that the studio deliver at least 110 half-hour episodes by 2010 and
              allowed for up to eight seasons of the show. At the end of the fourth season only 88 episodes had been produced, and a further 22 episodes
              were required, ensuring that there would be a fifth season. There also was a complication with the writing of the show because of actress
              Alyson Hannigan's absence due to her pregnancy; in response, the writers had to create episodes that did not include on of the five main
              characters. On May 19, 2009, the fifth season renewal was announced. May 20, 2009, CBS announced that How I Met Your Mother would again be
              aired at 8 pm, leading into the new comedy Accidentally on Purpose. On January 12, 2010, the show aired its 100th episode, and CBS
              announced that the series would return for a sixth season. Upon learning that the series would be syndicated, Thomas said, "We're thrilled
              that it will live on in other forms," and they were proud of the show and it was great to see the strong demand.
            </p>
            <p>
              Reruns of the series began airing on local American broadcast television stations and on Chicago-based cable superstation WGN America on
              September 14, 2010. Featured in these airings are vanity cards previously unseen in the CBS and Lifetime airings due to marginalized credit
              sequences used by the two networkds. Shown in between the closing credits and the production company credits, these vanity cards show
              portions of "The Bro Code", a list of rules frequently referenced by Harris' character, Barney Stinson, on how men should interact with
              each other, with an emphasis on activities involving pursuing members of the opposite sex. The opening theme song for the syndicated reruns
              is also slightly edited, running shorter and not using all the pictures seen in the opening montage that runs on DVD and the original CBS
              broadcasts. The episodes are also slightly shorter, to allow for more commercials furing a timeslot in syndication.
            </p>
            <p>
              One of the series' traditions involves giving guest roles to actors from various <Link>Joss Whedon</Link> productions, many of whom
              co-starred with Hannigan on Buffy the Vampire Slayer. Bays attributed this to their being "huge fans" and to those casts represented "a big
              talent pool".
            </p>
            <p>
              On March 4, 2011, CBS announced that the show had been renewed for two more seasons, with the seventh season premiering with back-to-back
              episodes on September 19, 2011.
            </p>
            <p>
              On July 27, 2011, the FX channel announced it had picked up the series for syndication. On September 5, 2011, FX begain airing the series.
            </p>
            <p>
              Cast members had said the show would not run longer than eight seasons, but a ninth season was secured in December 2012 amid tense
              negotiations with the studios and the actors, especially Segel, who had wanted to move on to other ventures after the eighth season.
              During these negotitations, Bays and Thomas originally approached the eighth season as if it were the show's last, but had a "Plan B" in
              case the show were renewed. After producers secured a ninth season, they implemented plans to secretly cast the titular future mother, with
              Cristin Milioti eventually winning the role, having bested at least two other contenders. Milioti first appeared in the last scene in the
              season eight finale "<Link to="/himym/something_new">Something New</Link>" and was a regular cast member in the show's final season. This
              was the first time the show had expanded its core roster.
            </p>
            <p>
              In January 2013, How I Met Your Mother was renewed for a ninth season. Carter Bays told Entertainment Weekly that season 9 would "feature
              some of the most non-linear episodes we've ever done".
            </p>
            <p>
              The season 9 premiere episode aired on September 23, 2013, and the one-hour series finale aired on March 31, 2014.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Syndication"} />
          <div>
            <p>
              How I Met Your Mother aired on Nick at Nite from September 8, 2014 to December 27, 2015, and TV Land from June 29, 2015 to 2018. It also
              aired on FX from September 5, 2011 to 2019, and Lifetime from 2009 to 2018.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Cast and characters"} />
          <div>
            <ul className="article-list">
              <li>
                <Link>Josh Radnor</Link> as <Link>Ted Mosby</Link>, an architect, college professor, and the central character of the series. He tells the
                story of his adult years from his late twenties to his mid thirties, and all the obstacles he overcomes before he meets "The One" (the
                Mother). This story is stold by the Older Ted Mosby, and narrator of the series, Bob Saget. Ted moved to New York City with his friends
                Marshall and Lily after graduating from Wesleyan University. In New York, he met Barney (at the urinal of MacLaren's) and Robin, to whom
                he was imeediately attracted. Ted is on a quest for happiness and "The One", the woman he will marry. He has many relationships, one with
                Robin, that reveal the qualities he wants in his future wife. At the end of each relationship, with levity, he reflects on what went
                wrong. Although hope to find "the one" diminishes with each failed relationship, Ted does not give up. He has more elegant and
                higher-class interests than his friends. He goes to great lengths to profess his love to the women in his life, but they all falter
                eventually. Despite these qualities, Ted often acts immature, such as in wild activities with Barney. In the series finale, he says that,
                in Tracy, he had met the love of his life (the titular Mother), but only after he is finished telling the story does he accept that he is
                ready to move on and admit he is still in love with Robin.
              </li>
              <li>
                <Link>Jason Segel</Link> as <Link>Marshall Eriksen</Link>, Ted Mosby's best friend, Marshall and Ted were roommates at Wesleyan, and
                remained living together when they moved to New York. In season 2 Marshall marries Lily, with whom he has been in love since his
                freshman year of college; they have a child during season 7. Marshall was born in St. Cloud, Minnesota, where his family and culture are
                the foundation of major conflicts he faces in the series. He has an interest in the paranormal and mythical creatures, particularly
                Sasquatch. His dream to be an environmental lawyer conflicts with his imeediate need for money, such as for his wedding and to raise his
                children. He however, eventually switches from his corporate job, to his dream, environmental lawyer job, taking the pay cut willingly
                to help protect the environment. By the end of the series, he has become a New York supreme court justice.
              </li>
              <li>
                <Link>Cobie Smulders</Link> as <Link>Robin Scherbatsky</Link>, a news anchor trying to make it as a journalist who dates both Ted and
                Barney. Robin emigrated from Canada to take a job at a news station and met Ted at MacLaren's; her Canadian background is a source of
                many jokes from her friends, for instance, 'Robin Sparkles' which was her stage name as a Candian teenage pop star. She is very
                career-centric and rejects traditional roles, such as getting married and having kids. Robin often drinks scotch and smokes cigars, and
                is an avid gun fan. She and Barney get engaged and maary in the penultimate episode of the series, but divorce in the first part of the
                series finale, three years later. Smulder's husband <Link>Taran Killiam</Link> appears in six episodes as Gary Blauman.
              </li>
              <li>
                <Link>Neil Patrick Harris</Link> as <Link>Barney Stinson</Link>, a serial playboy, using his relative wealth and an array of outrageous
                strategies to seduce women with no intention of engaging in a relationship. His catchphrases include 'Suit Up' and 'Legen-wait-for-it-
                Dary'. He is Ted's other best friend. Abandoned by his father at a young age, Barney has abandonment issues and clings to his friends.
                He tells extravagant lies about everything in his life as a defense mechanism for his substandard childhood. He marries Robin in the
                penultimate episode of the series but they divorce after three years in the two-part series finale. In 2020, a failed one-night stand
                gives him a daughter, Ellie. Harris' husband David Burtka appeared in seven episodes as Scooter.
              </li>
              <li>
                <Link>Alyson Hannigan</Link> as <Link>Lily Aldrin</Link>, a kindergarten teacher, aspiring artist, and Marshall's wife. She is terrible
                at keeping secrets and can be manipulative at times. She marries Marshall in season 2 and gives birth to Marvin season 7. Though
                appearing sweet and cute, Lily can be quite unexpectedly fierce. Her best girl friend is Robin, whom she met through Ted as he dated
                Robin. Hannigan's husband Alexis Denisof appeared in ten episodes as Sandy Rivers.
              </li>
              <li>
                <Link>Cristin Milioti</Link> as <Link>Tracy McConnell</Link>, the titular character who is Ted's future wife. She makes her first
                official appearance in season 8, and gradually meets all the characters throughout season 9 leading up to her meeting Ted.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Season synopses"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Season 1</h3>
            <p>
              In 2030, Ted Mosby (voiced by Bob Saget) sits his children down to tell them the story of how he met their mother.
            </p>
            <p>
              The series begins in September 2005 with Ted as a single, 27-year-old architect living with his two best friends from his college years:
              Marshall Eriksen, a law student, and Lily Aldrin, a kindergarten teacher and an aspiring artist. Lily and Marshall have been dating for
              almost nine years when Marshall finally proposes. Their engagement causes Ted to think about marriage and finding his soul mate, much to the
              disgust of his self-appointed best friend Barney Stinson, whom he met in the restroom at a bar four years earlier. Barney is a serial
              womanizer who concocts elaborate con games, usually involving costumes and fake identities, designed to bed women, only to lose interest in
              them immediately afterward.
            </p>
            <p>
              Ted begins his search for his perfect soul mate and meets an ambitious young reporter from Canada, Robin Scherbatsky, with whom he quickly
              falls in love with. Robin, however, does not want to rush into a relationship and the two decide to be friends. Future Ted reveals that
              Robin is not the mother after referring to her as "Aunt Robin".
            </p>
            <p>
              Ted begins dating a baker, <Link>Victoria</Link> (Ashley Williams), whom he meets at <Link>Stuart and Claudia</Link>'s wedding, causing
              Robin to become jealous, and realize she does have feelings for Ted. Victoria is offeredd a fellowship in pastry-making, moves to Germany
              and she and Ted try a long-distance relationship. Once Ted learns Robin has feelings for him, he tells her he broke up with Victoria, even
              though he has not. They almost have sex when Victoria calls and Robin answers; mistaking Ted's phone for her own. Ted and Victoria then
              break up and an angry Robin distances herself from Ted, but they eventually reconcile and decide to date.
            </p>
            <p>
              Meanwhile, Lily begins to wonder if she has missed any opportunities because of her relationship with Marshall, and decides to pursue an
              art fellowship in San Francisco, breaking up with Marshall in the process. The season ends with Ted returning to the apartment, the morning
              after spending the night with Robin for the first time, to find Marshall sitting in the rain with Lily's engagement ring, devastated by
              their sudden break-up after nine years. Marshall must then call off their wedding.
            </p>
            <p>
              The phrase olive theory is most known for its appearance in the pilot episode. In the scene, Ted tells the story of his first date with
              Robin to Lily and Marshall. Ted states that since he does not like olives but his date does, they are compatible. Lily and Marshall add on
              that the olive theory works in their relationship, as Marshall always gives Lily his olives. However, it is later said that Marshall only
              pretends not to like them to make Lily happy.
            </p>

            <h3 className="article-heading-3" id="5.2">Season 2</h3>
            <p>
              Ted and Robin are now a couple; meanwhile, a heartbroken Marshall tries to continue his life without Lily. After enduring numerous
              emotional breakdowns, Marshall's friends step in, and Barney, using sly catchphrases and pick-up lines, tries to get Marshall back in the
              dating game. Marshall becomes Barney's new 'wingman' as Ted is now in a relationship with Robin. Barney mentors Marshall in the art of
              flirting with women. Marshall fails at impressing women, but he finally obains a barista's number. Later, Lily, after finally realizing
              she is not meant to be an artist, returns to New York. They remain separated as Marshall begins to date another girl, the barista whose
              number he earned, described by the gang as having 'creazy eyes'. The date with the girl does not end well and eventually leads to Lily and
              Marshall becoming reunited, and their engagement eventually resumes. When Robin refuses to go to the mall or explain why, Marshall suspects
              she is married, and Barney suspects she has performed in adult films. They make a slap bet on it, appointing Lily as "Slap Bet
              Commissioner." Lily oversees the search for the truth, as they discover that Robin was a teenage pop star named "Robin Sparkles", and
              Marshall eventually earns the right to slap Barney five times whenever he wishes. He uses one slap immediately and another later in the
              season. It is revealed that Barney has a gay African American half-brother named <Link>James</Link> (<Link>Wayne Brady</Link>) and,
              unaware that his mother lied to him, believes that Bob Barker is his father. As a result of this he takes a trip to California to be a
              contestant on The Price is Right to meet his "father". While on the show, Barney wins all the prizes and gives them to Lily and Marshall
              as a 'happy early wedding' present.
            </p>
            <p>
              In the season finale, Ted reveals to Barney that he and Robin have been broken up for some time due to their conflicting views on
              marriage and children. They did not tell anyone, in order to avoid taking attention away from Lily and Marshall's wedding. The season ends
              with Barney's excitement by the prospect of being an unfettered single man with Ted again. Barney's final words are "this is going to be
              legen- wait for it...".
            </p>

            <h3 className="article-heading-3" id="5.3">Season 3</h3>
            <p>
              Barney begins the season with the word, "-dary!" Robin returns from a trip to Argentina with her new boyfriend <Link>Gael</Link>
              (Enrique Iglesias), and Ted must adjust to life as just her friend, while watching Robin and Gael fawning over each other. Marshall and Lily
              decide to move out on their own, falling in love with a place they cannot afford. Marshall is fighting his temptation to take a corporate
              job with high pay and focusing instead to follow his dream of becoming an enviromental lawyer to protect the world from pollution. Robin
              learns of Lily's bad credit rating due to her compulsive shopping for designer brands, and forces Lily to tell Marshall. Despite that, they
              are able to finally secure their dream apartment, in Dowistrepla, only to discover it is in a bad location (DOwn Wind of the SEwage
              TREatment PLAnt) and more poorly constructed than they thought (the floor is tilted and the apartment is haunted by ghosts). Barney is
              slapped for the third time on Thanksgiving, which Marshall dubs "Slapsgiving."
            </p>
            <p>
              Ted tells his children he met their mother through a story concerning her yellow umbrella. He finds the umbrella at a club and takes it
              home after attending a St. Patrick's Day party where his future wife was, although they did not meet. Ted attempts to woo Stella
              (<Link>Sarah Chalke</Link>), a dermatologist he sees to remove an embrassing butterfly tattoo (his tramp-stamp). This culminates in a
              "two-minute date", which incorporates small talk, dinner, a movie (Manos, Hands of Fate), coffee, two cab rides, and a goodnight kiss.
              Robin sleeps with Barney after he comforts her following a break-up with a past Canadian love; Ted is infuriated, and decides to stop
              being friends with Barney. Meanwhile, an unknown woman begins to sabotage Barney's attempts to hook up. His sabeoteur is revealed to be
              Abby (Britney Spears), Stella's receptionist, with a vendetta against him for not calling her after they had sex.
            </p>
            <p>
              In the season finale, Ted gets into a car accident and ends up in a hospital after breaking up with Stella. Subsequently, Barney is hit
              by a bus while he is on his way to visit Ted and receives treatment in the same hospital. Ted realizes Barney cares about him and they
              renew their friendship. Barney's true feelings for Robin are revealed while Ted proposes to Stella in an arcade with a toy kangaroo.
            </p>

            <h3 className="article-heading-3" id="5.4">Season 4</h3>
            <p>
              Stella says yes to Ted's proposal. Robin takes a new job in Japan, but quickly resigns and returns to New York to attend Ted's wedding,
              after realizing how much she misses her friends. Stella leaves Ted at the altar to get back together with Tony (Jason Jones), the father
              of her daughter. Barney struggles with his feelings for Robin as his company shifts him to the management team of a new acquisition,
              Goliath National Bank (GNB), where Marshall has accepted a position as a lawyer.
            </p>
            <p>
              Marhsall and Lily moved to their new apartment and debate over whether or not they are ready to have kids. Robin is threatened to be
              deported for not having a job in her field, which opens an opportunity for Barney to spend time with Robin. Robin gets a job as an anchor
              for a 4 AM news show after Barney submits her video resume, and becomes roomates with Ted. Ted and Robin decide to sleep together
              constantly so they will not fight ove each other's bad co-living habits. Barney attempts to make them stop fighting to prevent this,
              revealing to Ted his love for Robin.
            </p>
            <h3 className="article-heading-3" id="5.5">Season 5</h3>
            <h3 className="article-heading-3" id="5.6">Season 6</h3>
            <h3 className="article-heading-3" id="5.7">Season 7</h3>
            <h3 className="article-heading-3" id="5.8">Season 8</h3>
            <h3 className="article-heading-3" id="5.9">Season 9</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Critical reception"} />
          <div>
            <p>
              The first season was met with generally favorable reviews from critics, although some compared the series unfavorably to Friends. On
              Metacritic, a review aggregation site that collected 25 reviews from the series, it scored a 69 out of 100. Michael Abernethy of
              PopMatters gave the season a negative review, writing that "The comedy that does occur in How I Met Your Mother isn't enough to compensate
              for its inconsistencies." Tom Shales of The Washington Post gave the season a lukewarm review, saying it's "a little better than most
              other sitcoms, past and present, especially those featuring wacky urban friends in their twenties experiencing the bittersweet mysteries of
              life." Melanie MacFarlane of the Seattle Post-Intelligencer gave the season a positive review, saying the show "may not break any comedic
              ground, but it's the sort of comfortable, reliable hitter CBS needs on Monday nights."
            </p>
            <p>
              The second season received critical acclaim. Staci Krauss of <Link>IGN</Link> gave the series a positive review, calling it "great".
            </p>
            <p>
              The third season was met with mostly positive reviews. Michelle Zoromski of IGN gave the season a positive review, saying that "the season
              was fun and clever, a good, consisten flow from the first two seasons".
            </p>
            <p>
              The fourth season received critical acclaim. Michelle Zoromski of IGN gave season 4 an overall rating of 8.5 out of 10, stating that "This
              fourth season seemed to settle down the chase for the titular mother. While Ted was busy dating Stella, the gang settled into many stand
              alone episodes which were every bit as entertaining as episodes devoted to Ted's love life". Zoromski went on to say: "A stellar
              Robin-Marshall episode, titled '<Link to="/himym/little_minnesota">Little Minnesota</Link>, makes it clear that these two do not get
              enough screen time together. With Robin homesick and unemployed (and at risk of being deported), this pairing brought out the best
              Robin Sparkles reference of the season, when Marshall leads a rousing karaoke version of '<Link>Let's Go to the Mall!'</Link>"
            </p>
            <p>
              The fifth season received mixed reviews. Cindy McLennan of Television Without Pity gave the season a mixed review, and at the end of the
              season wrote: "I'm okay with any given season not being primarily focused on mother-meeting, but this season, the characters seemed to
              regress, particularly Barney and Ted. Usually, when a season ends, I have to deal with a week or two weeks' worth of letdown. Right now, all
              I'm feeling is relief."
            </p>
            <p>
              The sicth season received generally positive reviews. Justin Fowler of Late Reviews gave the season a positive review, saying that the
              season was "a pretty good season of television" and batter than the "poor" fifth season. He also said that "Seventeen out of the 24
              episodes are what I would consider good".
            </p>
            <p>
              The seventh season received mixed reviews. Alan Sepinwall gave the season a mixed review and criticized the flash-forwards throughout the
              season, saying that "the show is just much, much stronger when its stories dwell on matters of the present or the past, and where the
              writers don't have to act like magicians trying to keep the audience from figuring out how the trick works. And the finale affirmed that
              belief for me. The parts that had little or nothing to do with things to come were quite good; the parts that were all about the future
              made me roll my eyes and ask, for the umpteenth time, 'Really? This is where you're going with this?'"
            </p>
            <p>
              The eigth season received mixed reviews and is often considered the worst season of the series. Rotten Tomatoes reported that 54% of critics
              gave the show a positive review. The consensus reads: "How I Met Your Mother wears out its welcome this season, with an anticlimactic reveal
              and rote, less-than-fruiful humor."
            </p>
            <p>
              The ninth season received mixed-to-positive reviews from critics, though fans found it worse than prior seasons. Rotten Tomatoes reported
              that 80% of critics gave the show a positive review, with an average rating of 7.3 out of 10. Gareth Mitchell at "House of Geekery"
              responded negatively, mostly criticizing the structure of the season, stating that they are "sturggling to come up with stories that last
              out the 22 minutes".
            </p>
            <p>
              The finale of the show received largely negative reaction from critics and fans. Some complained that the last few seasons (particularly
              the final season before the finale which took place over one weekend) had built towards an end game that was discarded within the
              hour-long episode, while others defended it as true to both the initial concept of the show and to life itself. In the years succeeding
              its airing, it continued to be singled out as one of the worst television series finales, e.g., topping USA Today's list of "Worst Series
              Finaels of All Time". The finale of the show was so poorly received, that studios have reduced production of sitcoms like How I Met Your
              Mother.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Subplots"} />
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
          <Heading2 id={8} title={"Tie-ins"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Books</h3>
            <ul className="article-list">
              <li>
                The Bro Code, cited by Barney many times throughout the series, is a set of rules for bros to follow, and has been published as a tie-in
                novel, an audiobook, an iPhone application and an Android application.
              </li>
            </ul>
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
          <Heading2 id={9} title={"Nielsen ratings"} />
          <div>
            <p>
              The show's highest viewed episode was the series finale, "<Link to="/himym/last_forever">Last Forever</Link>", watched by 13.13 million
              viewers. Previously, the most viewed episode was the season 1 episode "<Link to="/himym/the_pineapple_incident">The Pineapple
              Incident</Link>", watched by 12.3 million viewers. The lowest viewed episode was the season 6 episode
              "<Link to="/himym/landmarks">Landmarks</Link>", watched by 6.4 million viewers, approximately 52% of the show's previous series high, and
              approximately 49% of the show's finale viewership.
            </p>
            <p>
              Season 9 was the highest watched season overall and among the 18-49 adults, scoring a 4.5 rating in that sector up from the second-highest
              rating of 4.1 in season seven.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={10} title={"Awards and nominations"} />
          <div>
            <p>
              The show has been nominated for 72 awards, winning 18. The show has been nominated for 28 Emmy Awards, including a nomination for
              Outstanding Comedy Series. Stars Alyson Hannigan and Neil Patrick Harris have each received acting accolades, with both winning People's
              Choice Awards, and Harris receiving Emmy and Golden Globes nominations. In 2012, seven years after its premiere, the series won the
              People's Choice for Favorite Network TV Comedy. The show's art direction, editing, and cinematography have also been awarded.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={11} title={"Home media"} />
          <div>
            <p>
              Seasons 1 through 9 were available to stream on Netflix in Austria, Canada, Finland, France, Germany, Ireland, Italy, Latin America,
              Lebanon, Turkey, Spain, Sweden, the Philippines, Romania, Russia, and the UK; season 9 was released on September 26, 2014. But they were
              ultimately pulled and relocated to Disney+. Seasons 1-9 were removed from Netflix in the United States as of November 13, 2017 and are now
              available on Hulu. As of March 2020, Seasons 1 through 9 are available on Amazon Prime Video in Brazil. Seasons 1 through 9 are available
              to stream on Hotstar in India. As of December 31, 2020, seasons 1-9 are removed from Netflix in The Netherlands. Seasons 1 to 9 were
              previously available on Netflix, Stan, and Star on Disney+ in Australia. However, Disney has pulled the show from both Stan and Netflix,
              making Disney+ the only streaming service in Australia for the show. All nine seasons are available to stream on Hulu and Amazon Prime
              Video in the US. Repeats in Australia are often shown on 7flix and on 7plus and are shown on Fox Comedy.
            </p>
          </div>
        </div>
        <div>
          <TableHimym />
        </div>
      </main>
    </>
  )
}

export default Himym
