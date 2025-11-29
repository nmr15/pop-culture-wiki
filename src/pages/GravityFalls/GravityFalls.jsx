import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'
import TableGravityFalls from '../../components/TableGravityFalls'

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
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Gravity Falls</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://1000logos.net/wp-content/uploads/2021/12/Gravity-Falls-Logo-1536x864.png" alt="Gravity Falls logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>Alex Hirsch</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><Link>List of Gravity Falls episodes</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Gravity Falls character</Link></td>
            </tr>
          </tbody>
        </table>
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
          <Heading2 id={1} title={"Premise"} />
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
          <Heading2 id={2} title={"Episodes"} />
          <div></div>
        </div>
        <div>
          <Heading2 id={3} title={"Voice cast"} />
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
          <Heading2 id={4} title={"Production"} />
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
          <Heading2 id={5} title={"Broadcast"} />
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
            <p>
              The symbol on Grunkle Stan's fez was changed from a crescent shape resembling the Islamic crescent to a fish-like symbol mid-way
              through the first season's broadcast. The symbol represents his membership in the Royal Order of the Holy Mackerel. When the series was
              released to Disney+, the crescent-shaped symbol was edited out entirely, leaving a symbol-less fez in the early episodes, later episodes
              featured the fish-like symbol were unaffected. However, the crescent symbol remains in the thumbnails, and on the zodiac wheel in the
              title sequence. Hirsch drew attention to the change on Twitter. Disney has not commented on why it was removed. Sometime later, the
              symbol on the fez was restored.
            </p>
            <p>
              In 2017, Disney Channel redubbed Louis C.K.'s minor role as "The Horrifying Sweaty One-Armed Monstrosity" in the 2015 episode
              "Weirdmagedon Part 1", as well as its 2016 follow up episode and series finale, "Weirdmageddon 3: Take Back the Falls", following
              the comedian's admission of sexual misconduct. Series creator Alex Hirsch is now credited as voicing the character.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Merchandise"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Home media</h3>
            <p>
              On March 27, 2018, Shoutl Factory announced that it would release the complete series as a box set on July 24, 2018, on DVD and
              Blu-ray Disc. The box set is available in a "Collector's Edition", which includes an exclusive bonus features disc. The complete
              series has only been released in the United States and Canada. The box set is now out of print.
            </p>
            <h3 className="article-heading-3" id="6.2">Books</h3>
            <h3 className="article-heading-3" id="6.3">Video game</h3>
            <p>
              A video game was created for the series, titled Gravity Falls: Legend of the Gnome Gemulets. The game was released excusively
              on Nintendo 3DS on October 20, 2015. It was developed and published by Ubisoft and produced by Disney Interactive Studios.
              The game is a platformer and uses the same graphics as the series.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Critical reception</h3>
            <p>
              Gravity Falls received critical acclaim, with praise directed at its writing, characters, voice actors, animation, humor,
              and multi-generational appeal. Both seasons of Gravity Falls hold a 100% approval rating on Rotten Tomatoes. On Rotten
              Tomatoes, season one has an average critic score of 7.40 out of 10 based on 12 reviews. Season two has average critic
              scoreof 8.80 out of 10 based on 8 reviews. The website's critical consensus for season one reads: "Gravity Falls' warm
              humor and bright performances elevates this children's cartoon to a show for all ages", while the website's critical
              consensus for season two reads: "Gravity Falls continues to blend old fashioned storytelling with a modern sense of
              humor to create a uniquely enjoyable viewing experience."
            </p>
            <p>
              Brian Lowry of Variety stated: "The show hasa breezy quality that should play to kids, and tickle some twinges of
              nostalgia among their parents." Robert Lloyd of the Los Angeles Times referred to the program as ".../gently twisted,
              with some Disneyfied action and heart-warming folded in". In his review, David Hinckley of New York Daily News called
              Gravity Falls "quirky and endearing", and offered praise for the character of Mabel Pines. Matt Blum, writing for Wired,
              favorably compared the show to <Link>Cartoon Network</Link>'s Regular Show and Disney Channel's
              <Link to="/phinease_and_ferb"> Phineas and Ferb</Link>, hailing Gravity Falls as "clever, strange, and somewhat poignant".
              Erik Kain of Forbes called Gravity Falls "the best thing on TV at the moment", saying "I don't care how old you are, if
              you're not watching Gravity Falls you're missing out on some of the cleverest, most enjoyable television you can find".
              Kayle Cobb at Decider called Gravity Falls "one of the most structurally smart shows ever created". Matt Fowley from IGN
              called Gravity Falls "a quirky and gently twisted heart-warmer for all ages. Smart, satirical, and sweet. Gravity Falls
              was a one-of-a-kind gem."
            </p>
            <p>
              Michelle Jaworski writing for The Daily Dot described Gravity Falls as "[A] classic summer story woven into a smart and
              addictive show tackling the paranormal, the supernatural, and the pains of growing up." IndieWire's Michawl Schneider
              said "Gravity Falls is a kids' show so dense with mythology, pop culture jokes, Easeter eggs, and mystery that grown=ups
              were often more invested." Joey Keogh from Den of Geek wrote "Gravity Falls, is a spooky-cute must-watch for adults who
              never grew out of Halloween." Donna Dickens from Uproxx said "Not only does Gravity Falls deal with the inexplicable
              supernatural occurences in the town, the whole thing is just one big puzzle of secets waiting for fans to uncover and
              solve." Myles McNutt from The A. V. Club said "With a complex mythology and a deep lexicon of cultur references, there's
              sophistication to the show's  epic storytelling that immediately draw the attention of a wider audience." Liz Baessler
              writing for Film School Rejects said "Gravity Falls is an exceptional kids' show, brilliant, hilatious, and carefully
              crafted." Kevin Tash from Collider called Gravity Falls "one of the greatest things that Disney has ever produced in general".
            </p>
            <p>
              Brian Tallerico from RogerEbert.com said "Gravity Falls deserves to be in the conversation with Bob's Burgers,
              <Link to="/rick_and_morty"> Rick and Morty</Link>, and <Link to="/bojack_horseman">Bojack Horseman</Link> when people discuss the best animated
              programming of the '10s. It is a beatiful blend of old-fashioned storytelling with a modern sense of humor that never feels like it's taling down to
              kids. It works for all ages. It sounds cheesy, but the best fiction for kids doesn't hammer them with a message but incorporates it into the characters
              and story. It's a deliriously strange, faschinating show, with sources of humor and heart that always find a way to surprise. It also helps that the
              voice work is uniformly fantastic." Collider's Joel Pesantez said "Gravity Falls exemplifies Disney's abilitiy to appeal to all ages with captivating
              mysteries and a diverse relatable cast. The show cleverly blends comedy and horror to keep viewers hooked, pushing boundaries without crossing them."
              Abigail Stevens of Screen Rant said "There is so much to learn about Gravity Falls' two seasons, which pack in plenty of laugh-out-loud and tear-jerking
              moments." Stevens further added, "Gravity Falls also created something of a cult of mystery, encouraging viewers to find hidden codes in each episode
              and giving rise to a fandom that was able to predict the show's biggest twist. However, at its core, Gravity Falls is about family and letting go of
              childhood." Lilian McDonough from CBR called Gravity Falls "The undeniable peak of Disney Channel cartoon history" and said "by utilizing an overarching
              narrative to an extent that no prior Disney cartoon had and funneling that into an intricately crafted and endlessly interesting location overflowing
              with lovable and hilarious characters, Gravity Falls broke every barrier imaginable and made what, for good reason, became one of the most beloved
              shows of that era."
            </p>
            <p>
              In 2015, Uproxx ranked Gravity Falls as the third Current Kids Cartoon That Adults Need to be Watching. In 2018, IndieWire ranked Gravity Falls at
              number 12 on their list of The 50 Best Animated Series of All Time. In 2019, Yardbarker ranked Gravity Falls number 21 on their list of The 25
              Greatest Animated Shows of All Time. Also in 2019, IGN placed Gravity Falls at Number 19 on their list titled The 25 Best Adult Cartoon TV Series and
              The A. V. Club placed Gravity Falls at number 48 on their list of The 100 Best TV Shows of the 2010s.
            </p>
            <h3 className="article-heading-3" id="7.2">Ratings</h3>
            <p>
              A special preview of the series following the Disney Channel Original Movie Let It Shine was watched by 3.4 million viewers. The series garnered high
              viewership on its fifth episode, which aired on July 13, 2013, and attracted 3.6 million viewers. On March 15, 2013, the episode "The Deep End" was
              watched by 4.5 million viewers after the premiere of Wizards of Waverly Place's The Wizards Return: Alex vs. Alex, becoming the highest-rated episode of
              the series.
            </p>
            <p>
              Later moving on to Disney XD, the episode "<Link to="/gravityfalls/a_tale_of_two_stans">A Tale of Two Stans</Link>" became the highest-rated telecast
              ever on Disney XD, with 1.91 million viewers. In addition to total viewers, "A Tale of Two Stans" also set a network record in kids ages 2-11 (1.036
              million) boys age 2-11 (686,000), boys ages 6-11 (574,000), kids ages 6-14 (1.279 million) and boys ages 6-14 (856,000). In 2015, Gravity Falls
              accounted for Disney CD's top seven regular animated series telecasts of all time among kids ages 6-11. During the week of July 12-18, 2015, Gravity
              Falls was the top-rated program in its 8:30 p.m. timeslot across kids and boys ages 2-11, 6-11, and 6-14. That same week, it was also cable TV's
              number 1 scripted telecast in total viewers, according to estimates from Nielsen Ratings.
            </p>
            <p>
              Gravity Falls ranked as Disney XD's number 1 series of 2015 across all target demographics with an average of 1.8 million viewers per episode.
              Additionally, Gravity Falls ranked as 2015's third animated cable TV series in boys ages 9-14. In kids ages 6-11, the series averaged 654,000 viewers
              and 790,000 in kids ages 2-11. Among boys ages 6-14, it pulled in 680,000 views. It was strong viewership in Disney XD's core demographic, but it also
              made it clear that older teens and young adults made up more than half of the show's audience, according to Variety.
            </p>
            <p>
              In February 2016, Gravity Falls was the number 1 regular series telecasted on record across kids ages 6-11 (1.0 million/4.4 rating), boys ages 6-11
              (642,000/5.3 rating), kids ages 2-11 (1.3 million/3.4 rating) and boys ages 2-11 (797,000/4.0 rating). The series finale "Weirdmageddon 3: Take Back
              The Falls" beat the ratings record previosuly held by "A Tale of Two Stans" becoming Disney XD's most-watched telecast ever, with 2.47 million viewers
              in the United States. "Weirdmageddon 3: Take Back The Falls" also established new all-time network highs in kids ages 6-14 (1.5 million/4.1 rating) and
              boys ages 6-14 (909,000/5.0 rating). The all-day Gravity Falls marathon that preceded the premiere of "Weirdmageddon 3: Take Back The Falls" generated
              10.7 million unique total viewers of which 5.4 million were kids ages 2-14.
            </p>
            <p>
              Marketing for <Link>The Book of Bill</Link> in January 2024 revealed that Gravity Falls was one of the top 50 shows with the most hours watched on
              Disney+ of all time and that more than half of the viewers were families with kids over the age of thirteen.
            </p>
            <h3 className="article-heading-3" id="7.3">Influence, legacy, and industry impact</h3>
            <p>
              Gravity Falls has been considered to be an influence for many animated shows that followed it, including Steven Universe, Star vs. The Forces of Evil,
              The Owl House, Amphibia, and Rick and Morty, the latter three of which with it features numerous Easter egg crossovers. Other examples of the show's
              influence include LGBTQ representation and series-long story arcs as opposed to isolated single-episode stories. The show also maintains a loyal and
              passionate fandom, even years after the series finale. Hirsch hid a variety of codes, cryptograms, backwards messages, and other secret clues for fans
              to find in every episode, which often contributed to the show's mysteries and lore. Some have compared Gravity Falls to more adult-oriented mystery
              shows such as Lost, Twin Peaks, and The X-Files. While it was on the air, the show was Disney XD's highest-rated series, with an average of 1.8 million
              viewers per episode.
            </p>
            <p>
              In the summer of 2016, Hirsch threw an international treasure hunt known as the "Cipher Hunt", the goal of which was to find the real-life Bill Cipher
              statue briefly glimpsed in the series finale. It ran from July 20 to August 3, 2016, and involved retrieving and decoding riddles and codes hidden in
              various locations worldwide. One clue involved a 2,000-piece jigsaw puzzle that took several days to complete with someone almost always working on it.
              On August 3, 2016, the statue was found in a forest in Reedsport, Oregon. While the first ones to the statue received various prizes, Hirsch made it
              clear that the hunt itself was the real treasure. On August 3, the statue was removed by authorities due to a property dispute and was temporarily held
              at the Reedsport police department while Hirsch arranged for it to be moved somewhere else. By August 5, the statue temporarily ended up in
              Bicentennial Park in Reedsport, before being permanently relocated to Confusion Hill in Piercy, California a few weeks later.
            </p>
            <p>
              In celebration of the release of <Link>Journal 3</Link> and the end of the Gravity Falls series. Oh My Disney and Cyclops Print Works teamed up with
              Gallery Nucleus in Alhmbra, California to hold an official Gravity Falls art show, titled Farewell to the Falls: A Gravity Falls Art Show, on August
              6-21, 2016. Creator Alex Hirsch along with other production staff and professional illustrators contributed new and original artwork to this
              exhibition. Some fans camped out overnight to see the show and some works of art sold for over $1,000.
            </p>
            <p>
              On August 8, 2020, Disney Channel aired a Gravity Falls-inspired episode of the show Amphibia titled "Wax Musuem". The episode served as a tribute to
              Gravity Falls and features Alex Hirsch in a voice role.
            </p>
            <p>
              On September 11, 2020, a short was released on the Disney Channel YouTube channel called "Gravity Falls x Line Rider". The short is based on the
              Internet game Line Rider. It is the first of a new series of shorts for Disney. Disney partnered with Line Rider artist Mark Robbins, Ben Harvey, and
              David Lu for the series.
            </p>
            <p>
              On September 25, 2020, a Gravity Falls short was released on the Disney Channel YouTube channel called "Call Me Maybe Parody". In the short, Mabel sings
              "Call Me Mabel", a parody of Carly Rae Jepsen's "Call Me Maybe". The short was released as a part of a seris called "Broken Karaoke" where various
              Disney characters sing parodies of pop songs.
            </p>
            <p>
              On October 3, 2021, the television show <Link to="/simpsons">The Simpsons</Link> aired the episode "Bart's in Jail!" which featured a brief cameo of
              Bill Cipher as one of Loki's many incarnations, voiced by Alex Hirsch in a guest role.
            </p>
            <p>
              Several former storyboard artists and production crew members who worked on Gravity Falls have gone on to create their own series and movies, including
              Matt Braly (a former director and storyboard artist who went on to create Amphibia), Dana Terrace (a former storyboard artist who went on to direct on
              the first season of DuckTales and create The Owl House), Tim McKeon (a former writer who went on to create the educational live action show Odd Squad
              and Helpsters), Aury Wallington (a former writer who went on to create Spirit Riding Free and co-write the film Spirit Untamed), Chris Houghton (a
              former storyboard artist who went on to create Big City Greens with his brother Shane), Mike Rianda (a former creative director, and writer who went on
              to direct and co-write the film The Mitchells vs. the Machines), Shion Takeuchi (a former writer who went on to create Inside Job), and Jeff Rowe (a
              writer on the show who went on to co-write The Mitchells vs. the Machines and write and direct Teenage Mutant Ninja Turtles: Mutant Mayhem).
            </p>
            <h3 className="article-heading-3" id="7.4">Awards and nominations</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Future"} />
          <div>
            <p>
              On July 14, 2017, Hirsch revealed that he and Disney had discussed making a Gravity Falls film. Disney ultimately passed on the project, as the studio
              felt the show "wasn't big enough to warrant [a film]"; Hirsch stated that he was still intersted in the idea. In February 2018, on the second
              anniversary of the series finale, Hirsch used a cipher to announce Gravity Falls: Lost Legends, a continuation of the Gravity Falls story in a new
              graphic novel that was later relased on July 24, 2018. In an interview with Inverse in March 2021, Hirsch expressed interest in continuing the story of
              Gravity Falls in the form of a video game that "is really, really in-depth to the lore of the series and includes new canon that has been in the
              periphery of the series." In June 2024, Disney Television Vice President Meredith Roberts revealed that they were having discussions with Hirsch about
              the show, adding, "never say never".
            </p>
          </div>
        </div>
        <div>
          <TableGravityFalls />
        </div>
      </main>
    </>
  )
}

export default GravityFalls;
