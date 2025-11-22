import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const GravityFalls = () =>
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
          <li className="sidebar-list-item"><a href="#3">Voice cast</a></li>
          <Collapse
            id="4"
            item="Production"
            sub={[
              { id: "4.1", title: "Conception" },
              { id: "4.2", title: "Writing" },
              { id: "4.3", title: "Animation" }
            ]}
          />
          <Collapse
            id="5"
            item="Broadcast"
            sub={[
              { id: "5.1", title: "Initial broadcast" },
              { id: "5.2", title: "International broadcast" },
              { id: "5.3", title: "Broadcast edits" }
            ]}
          />
          <Collapse
            id="6"
            item="Merchandise"
            sub={[
              { id: "6.1", title: "Home media" },
              { id: "6.2", title: "Books" },
              { id: "6.3", title: "Video game" }
            ]}
          />
          <Collapse
            id="7"
            item="Reception"
            sub={[
              { id: "7.1", title: "Critical reception" },
              { id: "7.2", title: "Ratings" },
              { id: "7.3", title: "Influence, legacy, and industry impact" },
              { id: "7.4", title: "Awards and nominations" },
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Future</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Gravity Falls</li>
        </ul>
        <div>
          <h1 className="article-heading">Gravity Falls</h1>
        </div>
        <div className="img-right img-top">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/12/Gravity-Falls-Logo-1536x864.png"
            alt="Gravity Falls logo"
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Gravity Falls is an American animated mystery comedy television series created by <Link>Alex Hirsch</Link> for <Link>Disney Channel</Link>
            and <Link> Disney XD</Link>. The series follows the adventures of <Link>Dipper Pines</Link> (<Link>Jason Ritter</Link>) and his twin sister
            <Link> Mabel</Link> (<Link>Kristen Schaal</Link>), who are sent to spend the summer with their great-uncle (or "Grunkle") <Link>Stan</Link>
            (Hirsch) in <Link>Gravity Falls</Link>, Oregon, a mysterious town rife with paranormal incidents and supernatural creatures. The kids help
            Stan run the "<Link>Myster Shack</Link>", the tourist trap that he owns, while also investigating the local mysteries.
          </p>
          <p>
            The series premiered on June 15, 2012, and run until February 15, 2016. On November 20, 2015, Hirsch announed that the series would conclude
            with its second season, stating that this was "100% [his] choice" and that "the show isn't being cancelled, it's being finished" and was
            reaching its intended conclusion. The series ended on February 15, 2016, with a one-hour finale,
            "<Link to="/gravity_falls/weirdmageddon_3_take_back_the_falls">Weirdmageddon 3: Take Back the Falls</Link>". Hirsch later stated that he
            remains open to continuing the series with additional episodes or specials, with the story continued in written form with the 2016 replica of
            <Link>Journal 3</Link>, a 2018 graphic novel <Link>Gravity Falls: Lost Legends</Link> and the 2024 teen-oriented novel <Link>The Book
              of Bill</Link>.
          </p>
          <p>
            Gravity Falls received critical acclaim for its writing, characters, voice acting, animation, and humor. Additionally, the series won two
            Emmy Awards, three Annie Awards, and a BAFTA Children's Award, among various other wins and nominations. Gravity Falls garnered high
            viewership amongst children, teenagers, and young adults during its run and was Disney XD's highest-rated show in 2015 and early 2016, while
            also setting several ratings records for the network. The series has attracted a broad and passionate fandom, is considered to be an
            influence for many animated shows that followed it, and spawned a variety of official merchandise.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Premise</h2>
          <div>
            <p>
              For their summer vacation, 12-year-old twin siblings Dipper and Mabel Pines are dropped off from their home in Piedmont, California to the
              fictional town of Gravity Falls, Oregon, to spend the summer with their great uncle ("Grunkle") Stan Pines, who runs a tourist trap called
              the "Mystery Shack". Soon after they arrive in Gravity Falls, Dipper accidentally uncovers a mysterious journal that details many
              different paranormal or mythical creatures that live in the town. With Wendy Corduroy, Mystery Shack;s cashier; Soos Ramirez, a friend of
              Dipper and Mabel and handyman to Grunkle Stan; plus an assortment of other characters, Dipper and Mabel always have an intriguing day to
              look forward to.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Episodes</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Voice cast</h2>
          <div>
            <div className="img-right">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Jason_Ritter_y_Kristen_Schaal.jpg/500px-Jason_Ritter_y_Kristen_Schaal.jpg"
                alt="Jason Ritter and Kristen Schaal"
              />
            </div>
            <ul className="article-list">
              <li>
                <Link>Jason Ritter</Link> as <Link to="/gravityfalls/dipper_pines">Dipper Pines</Link>, the 12-year-old twin brother of Mabel Pines and
                the straight man to his sister's antics.
              </li>
              <li>
                <Link>Kristen Schaal</Link> as <Link>Mabel Pines</Link>, the 12-year-old hyperactive and fun-loving twin sister of Dipper Pines
              </li>
              <li>
                <Link>Alex Hirsch</Link> as:
                <ul className="article-sublist">
                  <li>
                    <Link>Stanley Pines</Link> (also known as "Grunkle Stan"), the greedy, grumpy, yet loving great-uncle of Dipper and Mabel Pines and
                    owner and manager of the Mystery Shack.
                  </li>
                  <li>
                    <Link>Jesus "Soos" Ramirez</Link>, the 22-year-old handyman at the Mystery Shack.
                  </li>
                  <li>
                    <Link>Bill Cipher</Link>, an interdimensional demon that can be summoned and released into a person's mind. He resembles a one-eyed
                    yellow triangle superficially similar to the Eye of Providence and wears a top hat and a bow tie. He serves as the main antagonist
                    of the series.
                  </li>
                </ul>
              </li>
              <li>
                <Link>Linda Cardellini</Link> as <Link>Wendy Corduroy</Link>, a tomboyish 15-year-old part-time cashier at the Myster Shack and Dipper's
                unrequited crush.
              </li>
              <li>
                <Link>J. K. Simmons</Link> (season 2) as Stanford Pines, Stanley's six-fingered long-lost older identical twin brother and the author of
                the journals.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Production</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Conception</h3>
            <div className="img-right">
              <img
                src="https://en.wikipedia.org/wiki/File:Alex_Hirsch_and_Grunkle_Stan_puppet_at_San_Diego_Comic-Con_International_2013.jpg"
                alt="Alex_Hirsch_and_Grunkle_Stan_puppet_at_San_Diego_Comic-Con_International_2013"
              />
            </div>
            <p>
              Before working on the series, series creator Alex Hirsch's primary inspiration growing up was the popular animated sitcom
              <Link> The Simpsons</Link>, where he observed that "animation could be funnier than live-action. That animation didn't have to just be for
              kids. That it could be satirical and observational and grounded in a sense of character interaction". Hirsch graduated from the California
              Institute of the Arts, and was hired to work as writer and storyboard artist for the <Link>Cartoon Network</Link> series The Marvelous
              Misadventures of Flapjack, where he was paired up with <Link>Pendleton Ward</Link>, the creator of <Link>Adventure Time</Link>. Afterwards,
              he moved on to co-develop the Disney Channel animated series Fish Hooks, shortly before he pitched Gravity Falls, which was subsequently
              green-lit.
            </p>
            <p>
              Hirsch said he was at the California Institute of the Arts when he turned down DreamWorks Animation executive Jeffrey Katzenberg out of a
              desire to work for Disney. He first developed the concept for the show in an 11-minute low-budget student film that he made at the
              Institute. Hirsch was called in to do a pitch for Disney Channel for a show based on the short pilot. Disney Channel bought the idea and
              the series premiered on June 15, 2012.
            </p>
            The series was inspired by Hirsch's own childhood experiences and his relationship with his own twin sister growing up during their summer
            vacations, such as roadside attractions including the Mystery Spot and Oregon Vortex, and a road sign for a town named Boring. He inserted
            many of his real-life experiences in the show, such as living in Piedmont and trick-or-treating with his sister as kids. Dipper is based on
            Hirsch's memory of how it felt to be a kid. When Hirsch was around Dipper's age, he "would record [him]self and play it backwards and try to
            learn to speak backwards". Hirsch described himself as "that neurotic kid who would carry 16 disposable cameras everywhere I went". Mabel
            Pines was inspired by his twin sister, Ariel Hirsch. According to Alex Hirsch, just like Mabel, his sister "really did wear wacky sweaters and
            have a different ridiculous crush, every week." In the series, Mabel gets a pet pig, just like his sister had always wanted when she was a
            kid. Grunkle Stan was inspired by Hirsch's grandfather Stan, who according to Hirsch "was a guy that told tall tales and would frequently
            mess with us to get a rise out of us. So, my family really inspired the character on the show."
            <h3 className="article-heading-3" id="4.2">Writing</h3>
            <p>
              In an interview with Oh My Disney, Hirsch claimed he already had the beginning, middle, and end of the story for Gravity Falls planned
              out when he first pitched the series. He originally thought the series would "be two or three seasons". However, Hirsch had never created
              a TV series before and after experiencing how "incredibly draining" it was, he initially wanted to end the series after season one and,
              ultimately, on a cliffhanger. After the series premiered and became a huge commercial success, Hirsch began to rethink his decision. Two
              people convinced him to return and do a second season: <Link>Jon Stewart</Link>, the former host of The Daily Show (and eventual Gravity
              Falls guest star), who told Hirsch that his kids loved the show, and Patrick McHale, who created the animated series Over the Garden Wall.
              McHale had been watching the series and told him: "Look, after that cliffhanger, you've got to finish it." Hirsch decided that he had
              about ten more episodes left in him, so he went to the network, who said, "We only take seasons in twenties". So he said, "Okay, one more
              seasons, ... Before we started the [second] season, it said in my contract, before I put pen to paper, that this is my last season." The
              studio agreed, under the condition that Hirsch could never tell anyone. As a result, Jason Ritter, who voiced Dipper, did not know the
              series was ending until after he read the finale script, claiming that "when I read the finale I though, this feels like, not just the
              season finale. It feels like a series finale."
            </p>
            <p>
              Hirsch explained in an interview with The A. V. Club that during the production of season one, a typical episode was conceived in a room
              reserved for writers, where a simple synopsis was presented, and from then on dramatic structure was defined, and the plot was modified to
              include a character-driven subplot, which Hirsch expressed as "the hardest thing ... to find a character story that actually uncovers,
              explores, or pushes tension, on something our characters care about, that is properly explored via the maigc of monster or impossibility of
              the week."
            </p>
            <p>
              B and A-stories were created and were given to a writer to produce an outline, which was then subsequently checked-off by Hirsch for
              feedback. The writer produced a draft from these edits, where more notes may have been given. Hirsch stated that he and creative director
              Mike Rianda may have personally created a draft for themselves before a final script was produced, in which the dialogue from the draft
              received from the writer was significantly revised; Hirsch stated that the revising process "is not a discredit to our writers, it's just
              we have a very particular vision. In particular, I usually rewrite almost all of Dipper's dialogue and most of Mabel's dialogue, just
              because I have them in my head. Me and Mike will stay up for about 24 hours prior to the delivery of every script. We'll take the weekend,
              we'll work all night, we'll drink Red Bull, we'll sleep on the couch in shifts like maniacs, we'll slap each other in the face."
            </p>
            <h3 className="article-heading-3" id="4.3">Animation</h3>
            <p>
              After a script was delivered, an episode then got translated into a storyboard, where feedback was received from Hirsch to the board
              artists if a certain element, such as a gag, did not work. Afterwards, a pitch for the episode was given to the network, where they did a
              read-through, and then the episode was either checked out by the network, or retooled in the small amount of time allocated before an
              animation studio must receive something to work with. The series was animated by Rough Draft Korea Digital eMation and Yearim Productions.
              Whenever a sequence was deemed too important for the outside animation studios to realize, it was animated in-house by storyboard artist
              and supervisor Dana Terrace.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Broadcast</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Initial broadcast</h3>
            <p>
              The first twelve episodes of Gravity Falls aired in a regular weekly slot on Disney Channel starting in mid-2012, but subsequent episodes
              were broadcast without similar regularity; it took until August 2013 to broadcast the remaining eight episodes of the first season. The
              second season began airing a year later in August 2014, transitioning over to Disney XD, but again without any regulairty as to when new
              episodes would be first broadcast. The first nine episodes aired from August to November 2014, the following two in February and March 2015,
              the next eight from July to November 2015, and the finale aired on February 15, 2016. According to Disney XD, as each episode took about six
              months of work to complete, they opted against stockpiling episodes to show weekly but instead take advantage of the serial nature of the
              show, broadcasting each episode as it was completed and making an event out of it. On November 20, 2015, Hirsch announced that the series
              would conclude with its second season, stating that this was "100% [his] choice" and that "the show isn't being cancelled, it's being
              finished" and was reaching its intended conclusion. Hirsch has stated that he remians open to continuing the series with additional
              episodes or specials. On April 2, 2018, reruns of the  show started airing on Disney Channel, although reruns of the show still air on
              Disney XD.
            </p>
            <h3 className="article-heading-3" id="5.2">International broadcast</h3>
            <p>
              The series began airing on Disney Channel Canda on September 1, 2015, following Corus Entertainment's acquisition of Disney Channel rights
              in Canada. In C, the show began airing on Disney XD starting on December 1, 2015, following the launch of Disney XD. The show started
              broadcasting in the United Kingdom and Ireland on July 20, 2012 as a preview and officially premiered on September 7, 2012. In Australia
              and New Zealand, it previewed on August 17, 2012, and premiered on September 24, 2012. It also premiered in Southeast Asia on October
              27, 2012. In India, it premiered on Septembe 16, 2013.
            </p>
            <p>
              The series preview debuted in Canada on June 15, 2012, and premired on July 6, 2012, on Family Channel, until January 2016 when it moved
              to the local Disney XD channel following Corus Entertainment's acquisition of Disney Channel rights in Canada from Family's owner DHX
              Media. In Australia, the show airs on Disney XD and 7mate while in Chile, the show was broadcast on Canal 13 on November 24, 2013,
              under its programming block CuBox. In the Philippines, the show was shown on TV5 beginning on May 4, 2014, while in Brazil, the show
              also began airing on Rede Glove on May 10, 2014. In Indonesia, the show premiered on RCTI on August 17, 2014.
            </p>
            <h3 className="article-heading-3" id="5.3">Broadcast edits</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Merchandise</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Home media</h3>
            <h3 className="article-heading-3" id="6.2">Books</h3>
            <h3 className="article-heading-3" id="6.3">Video game</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Critical reception</h3>
            <h3 className="article-heading-3" id="7.2">Ratings</h3>
            <h3 className="article-heading-3" id="7.3">Influence, legacy, and industry impact</h3>
            <h3 className="article-heading-3" id="7.4">Awards and nominations</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Future</h2>
          <div></div>
        </div>
      </main>
    </>
  )
}

export default GravityFalls;
