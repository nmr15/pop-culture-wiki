import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const PhineasandFerb = () =>
{
  useEffect(() =>
  {
    document.title = "Phineas and Ferb - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <li className="sidebar-list-item"><a href="#2">Episodes</a></li>
          <li className="sidebar-list-item"><a href="#3">Characters</a></li>
          <Collapse 
            id="4"
            item="Development"
            sub={[
              {id: "4.1", title: "Early inspirations"},
              {id: "4.2", title: "Conception"},
              {id: "4.3", title: "Pitching and pickup"}
            ]}
          />
          <Collapse 
            id="5"
            item="Production"
            sub={[
              {id: "5.1", title: "Writing style"},
              {id: "5.2", title: "Visual aspects and animation"},
              {id: "5.3", title: "Cast"},
              {id: "5.4", title: "Music"},
              {id: "5.5", title: "Conclusion and revival"}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Critical response"},
              {id: "6.2", title: "Ratings"},
              {id: "6.3", title: "Awards and nominations"}
            ]}
          />
          <Collapse 
            id="7"
            item="Other media"
            sub={[
              {id: "7.1", title: "Films"},
              {id: "7.2", title: "Crossovers and short series"},
              {id: "7.3", title: "Fireside Girls scrapped and unconfirmed spinoff series"},
              {id: "7.4", title: "Video games"},
              {id: "7.5", title: "Live tour"},
              {id: "7.6", title: "Merchandise"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Phineas and Ferb</li>
        </ul>
        <div>
          <h1 className="article-heading">Phineas and Ferb</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Phineas and Ferb</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Phineas_and_Ferb_logo.svg/500px-Phineas_and_Ferb_logo.svg.png" alt="Phineas and Ferb logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            Phineas and Ferb is an American animated musical-comedy television series created by <Link>Dan Povenmire</Link> and <Link>Jeff "Swampy"
            Marsh</Link> for <Link>Disney Channel</Link> and <Link>Disney XD</Link>. The series originally aired on the network for four seasons between
            2007 and 2015, and returned for the first of two additional seasons in 2025. The series follows stepbrothers <Link to="/phinease_and_ferb/phineas_flynn">Phineas Flynn</Link> and
            <Link to="/phinease_and_ferb/ferb_fletcher"> Ferb Fletcher</Link>, who construct a grand project or embark on an adventure each day to make the most of their time on summer
            vacation, to the annoyance of Phineas' older sister <Link to="/phinease_and_ferb/candace_flynn">Candace Flynn</Link>. Candace's attempts to expose their schemes to her mother
            always fail due to the fights between local evil scientist <Link to="/phinease_and_ferb/heinz_doofenshmirtz">Dr. Heinz Doofenshmirtz</Link> and the boys' secret agent pet
            <Link to="/phinease_and_ferb/perry_the_platypus"> Perry the Platypus</Link> inadvertently removing all evidence of their work. The series follows a standard plot system, with several
            running gags occuring each episode.
          </p>
          <p>
            Povenmire and Marsh conceived the characters while working together on animated programs <Link to="/simpsons">The Simpsons</Link> and Rocko's
            Modern Liffe in the 2990s, and were inspired by the summers of their own childhoods. They developed the series together and pitched it to
            networks for 16 years before successfully selling it to The Walt Disney Company. Phineas and Ferb is produced by Disney Television Animation,
            and was originally broadcast as a one-episode preview on August 17, 2007, following the premiere of the made-for-television film High School
            Musical 2. It again previewed on September 28, 2007, and officially premiered on Disney Channel on February 1, 2008. The series originally
            concluded on June 12, 2015, before two new seasons were ordered in January 2023, with the <Link>fifth season</Link> premiering on Disney
            Channel on June 5, 2025, and on <Link>Disney+</Link> the following day.
          </p>
          <p>
            Phineas and Ferb is one of Disney Channel's most successful animated franchises. It received high viewership in the United States on cable
            television and influenced the development of merchandise, a live tour, spin-offs, and movies. A made-for-television film,
            <Link> Phineas and Ferb the Movie: Across the 2nd Dimension</Link>, aired in 2011, while a follow-up titled <Link>Phineas and
            Ferb the Movie: Candace Against the Universe</Link> was released on Disney+ in 2020. Critics praised the writing and humor of the show, citing
            its appeal to a wide range of ages. Others criticize its perceived lack of originality and formulaic approach. The series won a Daytime Emmu
            Award in 2010 for Outstanding Writing in Animation and several Primetime Emmy Awards for Outstanding Individual Achievement in Animation.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Premise"} />
          <div>
            <p>
              The series follows the adventures of stepbrothers Phineas Flynn and Ferb Fletcher. They live in the fictional
              city of <Link>Danville</Link> in an unspecified <Link>tri-state area</Link>, as they seek ways to occupy their time during their "104 days
              of summer vacation". Often these adventures involve elaborate, life-sized, and ostensibly dangerous construction projects, which are
              usually unrealistic in scale given the protagonists' ages (and sometimes physically impossible). The stepbrothers primarily share their
              adventures with their friends <Link to="/phinease_and_ferb/isabella_garcia_shapiro">Isabella Garcia-Shapiro</Link>, their neighbor from across the street who has a crush on Phineas, and
              <Link to="/phinease_and_ferb/baljeet_tjinder"> Baljeet Tjinder</Link> and <Link to="/phinease_and_ferb/buford_van_stomm">Buford Van Stomm</Link>, a nerd and bully duo of frenemies. Phineas's older sister
              Candace has two obsessions: unveiling Phineas and Ferb's schemes and ideas to her mother, and winning the attention of a boy
              named <Link>Jeremy</Link>.
            </p>
            <p>
              The subplot almost always features Phineas and Ferb's pet platypus Perry, who works as a secret agent for an all-animal government
              organization named <Link>O.W.C.A.</Link> (Organization Without a Cool Acryonym). His usual objective is to defeat the latest scheme of
              Dr. Heinz Doofenshmirtz, an evil scientist driven largely by a need to assert his evilness, whose own ineptitude often defeats him. The two
              plots intersect at the end of each episode, erasing all traces of the boys' project just before a dismayed Candace can show it to their
              mother and destroying Doofenshmirtz's evil contraption; either occurrence usually indirectly leads to the other's in some way.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Episodes"} />
          <div>
            <p>
              Most of the episodes premiered in pairs of two 11-minute stories, while others were released on their own. Disney Television Animation
              produced the episodes in two variants: they were primarily paired in 22-minute shows but also produced as individual episodes. Thus, a
              credits scene was made for each quarter-hour episode, while for the packaged variant, only the credits from the second "segment" would be
              used.
            </p>
            <p>
              Currently, the series airs in a 22-minute format, with the separate variants being occasionally shown as fillers. Digital and streaming
              releases, like on iTunes and Disney+, have the episodes in pairs.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Characters"} />
          <div>
            <p>
              The series' main characters live in a blended family, a premise that the creators considered underused in children's programming and that
              reflected Marsh's own upbringing. Marsh considers explaining the family background "not important to the kids' lives. They are a great
              blended family and that's all we need to know". The choice of a platypus as the boys' pet was similarly inspired by media underuse, as
              well as the animal's striking appearance. Povenmire and Marsh wanted an uncommon species, an animal that kids could not "pick out at a
              pet store and beg [their parents] for". The platypus also gave them freedom to "make stuff up" since "no one knows very much about them",
              and allowed them to own that "mental real estate", so that if someone thinks of the word "platypus", they will associate it with Agent P,
              just as an ogre is now commonly associated with <Link>Shrek</Link>. Marsh called the character "cool, edgy, and clever without ... being
              mean-spirited". Animation director Rob Hughes is said to have noted that "in all the other shows every character is either stupid or a jerk,
              but there are no stupid characters or jerks in this one".
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Development"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Early inspirations</h3>
            <p>
              Dan Povenmire attributes the show's genesis to his childhood in Mobile, Alabama, where his mother told him to never waste a day of summer.
              To occupy himself, Povenmire undertook projects such as hole-digging and home movie-making. Povenmire recalled, "My let me drape black
              material all the way across one end of our living room to use as a space field. I would hang little models of spaceships for these little
              movies I made with a Super 8 camera". He was an artistic prodigy and displayed his very detailed drawings at art shows. Marsh was raised in
              a large, blended family. As with Povenmire, Marsh spent his summers exploring and taking part in various activities to have fun.
            </p>

            <h3 className="article-heading-3" id="4.2">Conception</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/9/92/Phineas_original_sketch.jpg" alt="Phineas original sketch" />
              <p>
                Drawn on butcher paper, this first drawing of Phineas began a rapid growth of characters and the outline of the artistic style.
              </p>
            </div>
            <p>
              While attending the University of Southern California, Povenmire started a daily comic called Life is a Fish, and received money from the
              sale of its related merchandise. He eventually dropped out and started drawing people on street corners to make a living, until he was
              finally called by Tommy Chong to work on a short bit of animation in the film Far Out Man. Povenmre began to take up animation
              professionally, working on shows such as Teenage Mutant Ninja Turtles. Marsh had become a vice president of sales and marketing for a
              computer company until he "freaked out" and decided to quit. His friend helped him put together a portfolio and enter the animation
              business.
            </p>
            <p>
              Povenmire and Marsh started working across from each other as layout artists on The Simpsons. The two bonded over mutual tastes in humor
              and music, becoming fast friends. They continued their working relationship as a writing team on the <Link>Nickelodeon</Link> series
              Rocko's Modern Life, where they conceived the idea for their own series. While eating dinner at a Wild Thyme restaurant in South Pasadena,
              Povenmire drew a quick sketch of a "triangle kid" on butcher paper. He tore it out and called Marsh that night to report, "Hey, I think we
              have our show". The triangle doodle sparked rapid development of characters and designs. Povenmire decided that his sketch "looked like a
              Phineas," and named Ferb after a friend who "owns more tools than anyone in the world". The creators based their character designs on
              angular shapes in homage to Tex Avery, an animator and director for MGM and Warner Bros., adding geometric shapes to the background for
              continuity.
            </p>

            <h3 className="article-heading-3" id="4.3">Pitching and pickup</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Disney_Channel_HQ.jpg/500px-Disney_Channel_HQ.jpg" alt="Disney Channel HQ" />
              <p>
                Disney Channel was the first network to give the series a chance, though initially declined when Dan Povenmire originally pitched it to
                them.
              </p>
            </div>
            <p>
              The writing duo's early attempts to pitch the show failed and, though they remained committed to the concept, Povenmire and Marsh began to
              drift apart after their work on Rocko's. Marsh moved to London and worked on shows including Postman Pat and Bounty Hamster. Povenmire
              began working on the primetime Fox series Family Guy and the Nickelodeon series
              <Link to="/spongebob/spongebob_squarepants_series">SpongeBob SquarePants</Link>, always carrying a Phineas and Ferb portfolio for
              convenient pitching to networks such as <Link>Cartoon Network</Link> and Fox Kids. The networks passed on the show, believing the series'
              premise was too complex to succeed.
            </p>
            <p>
              Povenmire persisted and again pitched the series to Nickelodeon, where it was considered by high-level executives and given his
              experience with the network, but rejected onc more as overly complicated. Then, after 16 years of trying, Povenmire landed a pitch with
              Disney. The network did not immediately accept the show but told Povenmire that it would keep the packet. Povenmire assumed that this had
              meant an end to negotiations, aware that the phrase usually "means they throw it in the trash later". Disney then surprised him by
              accepting. Povenmire said, "Disney was the first to say, 'Let's see if you can it in 11 minutes.' We did it in the pilot and they said,
              'Let's see if you can do it for 26 episodes.'"
            </p>
            <p>
              Povenmire was initially worried that his work on Family Guy (an adult show known for its lowbrow humor) would concern Disney, which
              markets its fare primarily to families. However, Disney Channel senior vice president of original series Adam Bonnett was a Family Guy fan
              who appreciated Povenmire's connection to the show and received his pitch well.
            </p>
            <p>
              In 2006, after the Disney Channel had accepted the show, Povenmire and Marsh turned their attention to the company's overseas executives.
              Instead of penning a normal script, the two drew out storyboards and played them in a reel. Povenmire voiced over the reel with his
              dialogue and added sound effects. This novel approach secured the executives' support.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Writing style</h3>
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dan_Povenmire_and_Swampy_Marsh_%282009%29.jpg/960px-Dan_Povenmire_and_Swampy_Marsh_%282009%29.jpg"
                alt="Povenmire and Marsh in 2009"
              />
              <p>Phineas and Ferb co-creators Dan Povenmire and Jeff "Swampy" Marsh in 2009.</p>
            </div>
            <p>
              The show uses four main writers to devise story ideas according to "strict guidelines", such as that the boys' scemes never appear to be
              "magical". Stories are reviewed at weekly sessions on a Monday, then simultaneously scripted and storyboarded. A very rough design is
              built before the storyboard, featuring little more than suggested scenes and dialogue, is drafted; the writers then gather for a
              "play-by-play" walkthrough of the storyboard in front of the whole crew, whose reactions to the joke are assessed before rewrites are made.
              The writers also include running gags in every episode, which are generally lines spoken by characters. Almost every eisode is split into
              two 11-minute segments. Dan Povenmire admitted that the "a-plot" of each episode, the one following Phineas and Ferb's inventions, is not
              actually a plot, but instead the setting, with the actual plot being Candance, Perry, and Dr. Doofenshmirtz's story, "The essence of story 
              is that the characters are changed by what happens to them. Nothing ever changes the boys, they never learn anything, there's never any
              obstacles they have to overcome, everything just works out for them".
            </p>
            <p>
              Much of the series' humor relies on running gags used in almost every episode, with slight variation. Certain aspects of the show's humor
              are aimed at adults. Including its frequent pop-culture references. Co-creator Dan Povenmire, who had previosuly worked on Family Guy,
              sought to create a less raunchy show that would make similar use of comic timing, metahumor, humorous blank stares, wordplay, and breaking
              the fourth wall. Povenmire describes the show as a combination of Family Guy and SpongeBob SquarePants. Co-creator Jeff "Swampy" Marsh has
              said that the show was not created exclusively for children; he simply did not exclude them as an audience.
            </p>
            <p>
              For the original run, the show was storyboard-driven, but as of season 5, the show is not script-driven.
            </p>

            <h3 className="article-heading-3" id="5.2">Visual aspects and animation</h3>
            <p>
              Rough Draft Studios in South Korea, Wang Film Productions in Taiwan, Morning Sun Animation and Synergy Animation in Shanghai and Hong Ying
              Animation and Hong Guang Animation in Suzhou animate the series in 2D Animation using the software package Toon Boom. Povenmire would
              undertake the bulk production direction, along with Zac Monocrief and Robert F. Hughey. The series adopts artistic features from animator
              Tex Avery, such as geometric shapes integrated into characters, objects, and background. Povenmire says of this inclusion, "There's a
              little bit of Tex Avery in there, he had that very graphic style [in his later cartoons]". Triangles are featured as an easter egg in the
              background of every episode, sometimes in trees or buildings.
            </p>
            <div className="img-left img-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/3/39/PhineasFerbPaint_designs.jpg" alt="Phineas and Ferb original and final draft" />
              <p>
                The stages of development for a scene during the opening theme, from the original draft (top) to the final design (bottom). The top
                briefly appears in the Season 1 theme.
              </p>
            </div>
            <p>
              Bright colors are also a prominent element of the animation. Marsh elaborates, "The idea at the end of the day was candy. One of the things
              that I think works so well is that the characters are so bright and candy-colored and our backgrounds are a much more realistic depiction
              of the world: the soft green of the grass, the natural woods for the fence. In order for all the stuff that they do to work, their world
              needs to be grounded in reality". The designers sought to keep their characters visually simple so that kids "would easily be able to draw
              [them] themselves". Characters were also created to be recognizable from a distance, a technique that the creators say is based on
              <Link> Matt Groening</Link>'s goal of making characters recognizable by silhouette.
            </p>

            <h3 className="article-heading-3" id="5.3">Cast</h3>
            <p>
              Phineas and Ferb are voiced by <Link>Vincent Martella</Link> and <Link>Thomas Sangster</Link> (seasons 1-4) and David Errigo Jr.
              (season 5-present), respectively. Sangster was one of many British actors cast, as Marsh lived in the United Kingdom for seven years and
              developed a fondness for the British. The rest of the cast includes <Link>Ashley Tisdale</Link> as their sister Candace; Bobby Gaylor as
              Buford van Stomm, who has a tendency to bully but is kept distracted by being included in the adventures; Maulik Pancholy as Baljeet Tjinder,
              a very intelligent boy who avoids being Buford's main victim by their participation in the adventures; <Link>Dee Bradley Baker</Link> as
              Perry the Platypus; Caroline Rhea as Linda Flynn-Fletcher, Phineas and Candace's mother and stepmother to Ferb; Richard O' Brien as
              Lawrence Fletcher, Ferb's father and Phineas and Candace's stepfather; <Link>Jack McBrayer</Link> as Irving, who admires Phineas and Ferb,
              and is the creator of the Phineas and Ferb fansite; Kelly Hu as Candace's best friend Stacy, Povenmire as Dr. Doofenshmirtz; Marsh as
              Major Monogram; <Link>Olivia Olson</Link> as Dr. Doofenshmirtz daughter Vanessa; Tyler Mann as Carl, Major Monogram's goofy super genius
              intern; <Link>Alyson Stoner</Link> as neighbor Isabella Garcia-Shapiro, a sweet Mexican/Jewish girl with a crush on Phineas;
              <Link> Mitchell Musso</Link> as Jeremy, Candace's crush and later her boyfriend; and Madison Pettis as Adyson Sweetwater, a member of
              Isabella's Fireside Girl troop.
            </p>
            <p>
              The show's casting organization is responsible for selecting most of the voice actors and actresses, choosing actors such as Martella
              and Musso for major roles based on perceived popularity with target demographics. Povenmire and Marsh select guest stars, casting people
              that they "really want to work with." They also solicit guest roles from actors whom they feel would lend an interesting presentation
              to the show.
            </p>
            <p>
              Guest stars have included pop-culture figures such as Damian Lewis, boxer Evander Holyfield, film stars Cloris Leachman, and
              <Link> Ben Stiller</Link>, and pop singer Kelly Clarkson. Povenmire and Marsh have also solicited <Link>Tim Curry</Link> and Barry
              Bostwick, stars of The Rocky Horror Picture Show, to make guest appearances, while Rocky Horror creator Richard O'Brien voices Lawrence
              Fletcher. Top Gear stars Jeremy Clarkson, Richard Hammond, and James May guest-starred in a race-car themed episode as commentators.
              Other guest stars include <Link>Tina Fey</Link>, <Link>Seth MacFarlane</Link>, David Mitchell, Jaret Reddick, Clay Aiken, Chaka Khan,
              and <Link>Kevin Smith</Link>.
            </p>

            <h3 className="article-heading-3" id="5.4">Music</h3>
            <p>
              The series is known for its original songs that appear in almost every episode since the first season episode
              "<Link to="/phinease_and_ferb/flop_starz">Flop Starz</Link>". Disney's executives particularly enjoyed the episode's song "Gitchee, Gitchee Goo" and requested that a
              song appear in each subsequent episode. The music earned the series a total of four Emmy nominations: two Primetime Creative Arts nominations in 2008 (for the main
              title theme and for the song "I Ain't Got Rhythm" from the episode
              "<Link to="/phinease_and_ferb/dude_we're_getting_the_band_back_together">Dude, We're Getting the Band Back Together</Link>") and two Daytime Creative Arts
              nominations in 2010 (for the song "Come Home Perry" from the episode "<Link to="/phineas_and_ferb/oh_there_you_are_perry">Oh, There You Are, Perry</Link>" and the
              original score by Danny Jacob). 
            </p>
            <p>
              Phineas and Ferb follows structural conventions that Povenmire and Marsh developed while writing Rocko's Modern Life, whereby each episode features "a song or a musical
              number, plus a big action/chase scene". Both creators had musical backgrounds, as Povenmire performed rock and roll in his college years and Marsh's grandfather was the
              bandleader Les Brown.
            </p>
            <p>
              The series' songs span many genres, from 16th-century madrigals to Broadway show tunes. Each is written in an intensive session during episode production; a concept,
              score and lyrics are developed quickly. Together, Marsh and Povenmire could "write a song about almost anything" in an hour. After they finished their songs, Povenmire
              and Marsh sang them over the answering machine of series composer Danny Jacob on Friday nights. By the following Monday, the song would be fully produced.
            </p>
            <p>
              The opening theme song "Today Is Gonna Be a Great Day", performed by the American group Bowling for Soup, was nominated for an Emmy award in 2008. The creators
              originally wrote a slower number more in keeping with a "classic Disney song", but the network felt that changes were needed to especially appeal to children and
              commissioned the rock version that made the final cut.
            </p>
            <p>
              A clip show titled "Phineas and Ferb's Musical Cliptastic Countdown" was broadcast as part of season two in October 2009. The show focuses on the series' music,
              featuring a viewer-voted list of its top ten songs. This clip show spawned a sequel, "Phineas and Ferb Musical Cliptastic Countdown Hosted by Kelly Osbourne", which
              aired on June 28, 2013. Osbourne hosted the special in live form, while Dr. Doofenshmirtz and Major Monogram appeared as animated.
            </p>

            <h3 className="article-heading-3" id="5.5">Conclusion and revival</h3>
            <p>
              The series was renewed for a fourth season in August 2011, which was originally planned to be the final season; the hour-long finale
              "<Link to="/phineas_and_ferb/last_day_of_summer">Last Day of Summer</Link>" aired on June 12, 2015. Povenmire and Marsh remained with the network and together
              created a new series, <Link>Milo Murphy's Law</Link>, which aired from 2016 to 2019. A revival of Phineas and Ferb, spanning 40 episodes across two seasons, was
              announced by Disney Branded Television in January 2023; by May of that year, Povenmire confirmed that the two seasons would be considered as the fifth and sixth
              of the series overall. The fifth season premiered on Disney Channel on June 5, 2025, and began streaming on <Link>Disney+</Link> the next day. A soundtrack album
              with 13 songs from the new season was released on June 6, 2025. David Errigo Jr. replaced Thomas Brodie-Sangster as Ferb, while Mitchell Musso is replaced by an
              uncredited actor as Jeremy Johnson.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Critical response</h3>
            <p>
              The show has received generally positive reviews. The New York Times commented favorably, describing the show as "Family Guy with an espionage subplot and a big dose
              of magical realism". It considered the pop-culture references ubiquitous "but [placed] with such skill that it seems smart, not cheap". Whitney Matheson wrote in
              her USA Today blog Pop Candy that the series was an achievement in children's programming, applauding the writing and calling the show "an animated version of Parker
              Lewis Can't Lose". Emily Ashby of Common Sense Media praised the show's humor and plot, giving it four out of five stars. The Seattle Times wrote that the story of
              the show was "valiant" and that the main characters are "young heroes".
            </p>
            <p>
              Variety noted the show's appeal to all ages with its "sense of wit and irreverence". Similar reviews have emphasized the series' popularity with adults; Rebecca Wright
              of Elastic Pops wrote, "As an adult, I really enjoyed watching this Phineas and Ferb DVD, and I think it is one that the whole family can enjoy". Wright also called the
              series' "irreverent style" reminiscent of The Adventures of Rocky and Bullwinkle. Matt Blum of Wired has stated in reviews that he "can stand to watch just about
              anything with [his] kids, but [he] actually look[s] forward to watching Phineas and Ferb with them". Notable celebrities identified as fans of the series include Bob
              Eubanks, Anthony LaPaglia, Ben Stiller, Chaka Khan, Jeff Sullivan and Jake Gyllenhaal.
            </p>
            <p>
              Among the negative reviews is one that charges the series with a lack of originality. Maxie Zeus of Toon Zone argues that the show is "derivative, but obviously so,
              and shorn of even the best features of what has been stolen". Zeus takes issue with the writing, feeling that certain jokes and conventions were "ripped-off" from
              other shows. Kevin McDonough of Sun Coast Today criticized the show for its plot complexity, constant action and "characters [that] can do just about anything".
              McDonough stated that "it's never clear whether P&F are intended to entertain children or are merely a reflection of grown-up animators engaged in a juvenile lark".
              Marylin Moss of The Hollywood Reporter described Phineas and Ferb as "Pretty mindless but kids of all ages might find a humorous moment in it". Moss called the plot
              lines redundant but praised the music styles and guest stars.
            </p>
            <p>
              Alan Sepinwall and Matt Zoller Seitz gave a positive assessment in their 2016 book TV (The Book), stating that "In television, formula often seems to come from a lack of
              imagination. ... Phineas and Ferb though, managed at the same time to be wildly imaginative and slavishly formulaic, using its repetitive structure not as a crutch, but
              as a sturdy framework on which it could hang all kinds of fantastic new ideas". They further added that "the characters' awareness of that formula, and any deviations
              from it, quickly became one of the show's most fertile sources of humor".
            </p>

            <h3 className="article-heading-3" id="6.1">Ratings</h3>
            <p>
              The first episode, "Rollercoaster", garnered a total of 10.8 million viewers when aired as a preview on August 17, 2007, holding onto more than half of the
              record-setting audience of its lead-in, High School Musical 2. When Phineas and Ferb officially debuted in February the next year, it proved to be cable's number-one
              watched animated series premiere by tweens. Throughout the quarter that followed, it peaked as the top-rated animated series for ages 6–10 and 9–14, also becoming the
              number-three animated series on cable television for viewers aged 6–10. By the time the second season was announced in May 2008, the series had become a top-rated
              program in the 6–11 and 9–14 age groups.
            </p>
            <p>
              The Disney Channel airing of "Phineas and Ferb Get Busted!" was watched by 3.7 million viewers. The episodes "Perry Lays an Egg" and "Gaming the System" achieved the
              most views by ages 6–11 and 9–14 of any channel in that night's time slot. This achievement made the series the number-one animated telecast that week for its target
              demographics. On June 7, 2009, Disney announced that the show had become the number-one primetime animated show for the 6–10 and 9–14 groups.
            </p>
            <p>
              The premiere of "Phineas and Ferb Christmas Vacation" garnered 2.62 million viewers during its debut on Disney XD, the most watched telecast in the channel's history
              (including Toon Disney) and the number-three program of the night across all demographics. It received 5.2 million viewers for its debut on Disney Channel and was the
              highest-rated episode of the series to date and fifth-highest for the week.
            </p>
            <p>
              The premiere of "Phineas and Ferb: Summer Belongs to You!" garnered 3.862 million viewers and was watched by 22% of children 2–11, 13% of teens, 5% of households and
              3% of adults 18–49, also ranking as the number-one program for that night and as 25th for the week. On Disney XD, the episode ranked among the channel's top three
              telecasts of the year with 1.32 million viewers, including 365,000 among boys 6–11, with a 2.9 rating. The hour-long telecast on August 2, 2010, was the series'
              number-two telecast of all time on Disney XD in total viewers, behind only December 2009's "Phineas and Ferb Christmas Vacation".
            </p>

          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Other media"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Films</h3>
            <h3 className="article-heading-3" id="7.2">Crossovers and short series</h3>
            <h3 className="article-heading-3" id="7.3">Fireside Girls scrapped and unconfirmed spinoff series</h3>
            <h3 className="article-heading-3" id="7.4">Video games</h3>
            <h3 className="article-heading-3" id="7.5">Live tour</h3>
            <h3 className="article-heading-3" id="7.6">Merchandise</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default PhineasandFerb;