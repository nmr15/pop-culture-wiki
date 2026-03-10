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
            <h3 className="article-heading-3" id="5.2">Visual aspects and animation</h3>
            <h3 className="article-heading-3" id="5.3">Cast</h3>
            <h3 className="article-heading-3" id="5.4">Music</h3>
            <h3 className="article-heading-3" id="5.5">Conclusion and revival</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Critical response</h3>
            <h3 className="article-heading-3" id="6.1">Ratings</h3>
            <h3 className="article-heading-3" id="6.3">Awards and nominations</h3>
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