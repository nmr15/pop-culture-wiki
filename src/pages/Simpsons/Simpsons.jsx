import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const Simpsons = () =>
{
  useEffect(() =>
  {
    document.title = "The Simpsons (franchise) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Background"
            sub={[
              {id: "1.1", title: "Creation"},
              {id: "1.1", title: "Themes"},
              {id: "1.1", title: "Main characters"}
            ]}
          />
          <Collapse 
            id="2"
            item="Television"
            sub={[
              {id: "2.1", title: "Shorts on the Tracey Ullman Show"},
              {id: "2.2", title: "The Simpsons", sub2: [
                {id: "2.2.1", title: "Crossovers"},
                {id: "2.2.2", title: "Disney+ shorts"}
              ]}
            ]}
          />
          <Collapse 
            id="3"
            item="Films"
            sub={[
              {id: "3.1", title: "Feature films", sub2: [
                {id: "3.1.1", title: "The Simpsons Movie"},
                {id: "3.1.2", title: "Upcoming film"}
              ]},
              {id: "3.2", title: "Theatrical short films", sub2: [
                {id: "3.2.1", title: "The Longest Daycare"},
                {id: "3.2.2", title: "Playdate with Destiny"}
              ]},
              {id: "3.3", title: "In other media"},
            ]}
          />
          <Collapse 
            id="4"
            item="Print publication"
            sub={[
              {id: "4.1", title: "Books", sub2: [
                {id: "4.1.1", title: "Episode guides"}
              ]},
              {id: "4.2", title: "Comic books", sub2: [
                {id: "4.2.1", title: "Simpsons Illustrated"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Video games</a></li>
          <Collapse 
            id="6"
            item="Theme park attractions"
            sub={[
              {id: "6.1", title: "Universal Studios"},
              {id: "6.2", title: "Broadway at the Beach"}
            ]}
          />
          <Collapse 
            id="7"
            item="Merchandise"
            sub={[
              {id: "7.1", title: "Home releases"},
              {id: "7.2", title: "Music"},
              {id: "7.3", title: "T-shirts"},
              {id: "7.4", title: "Action figures", sub2: [
                {id: "7.4.1", title: "Lego"}
              ]},
              {id: "7.5", title: "Board and card games"},
              {id: "7.6", title: "Other"},
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>The Simpsons (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Simpsons (franchise)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>The Simpsons</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Simpsons_yellow_logo.svg/220px-The_Simpsons_yellow_logo.svg.png" alt="The Simpsons logo" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>Matt Groening</Link></td>
            </tr>
             <tr>
              <th className="infobox-data">Animated series</th>
              <td className="infobox-data"><Link>The Simpsons (1989 to present)</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><Link>List of The Simpsons episodes</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of The Simpsons character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Film</th>
              <td className="infobox-data"><Link>The The Simpsons Movie (2007)</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            The Simpsons is an American animated comedy franchise whose eponymous family consists of <Link>Homer</Link>, <Link>Marge</Link>,
            <Link> Bart</Link>, <Link>Lisa</Link>, and <Link>Maggie</Link>. The Simpsons were created by cartoonist <Link>Matt Groening</Link> for
            a series of <Link>animated shorts</Link> that debuted on The Tracey Ullman Show on <Link>Fox</Link> on April 19, 1987. After a three-season
            run, the sketch was developed into <Link>The Simpsons</Link>, a half-hour prime time show that was an early hit for Fox, becoming the first
            Fox series to land in the Top 30 ratings in a season (1989-1990). The popularity of The Simpsons had made it a billion-dollar merchandising
            and media franchise. Alongside the television series, the characters of the show have been featured in a variety of media, including books,
            comic books, a magazine, musical releases, and video games.
          </p>
          <p>
            <Link>The Simpsons Movie</Link>, a feature-length film, was released in 2007 and was the eighth highest-grossing film of that year. A variety
            of merchandise, including T-shirts, DVDs, board games, and action figures have been released. The Simpsons merchandise has sold well,
            generating $2 billion in revenue during the first 14 months of sales. In 2003, about 500 companies around the world were licensed to use The
            Simpsons characters in their advertising. In 2008, $750 million worth of The Simpsons merchandise were purchased worldwide. Peter Byrnes, Fox
            executive vice-president of licensing and merchandising, called The Simpsons "without doubt the biggest licensing entity that Fox has had,
            full stop, I would say from either TV or film."
          </p>
          <p>
            In 2002, the property was valued at $5 billion to $6 billion according to Fox.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Background"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Creation</h3>
            <p>
              <Link>Matt Groening</Link> conceived of the idea for the Simpsons in the lobby of <Link>James L. Brooks</Link>'s office. Brooks, the
              producer of the sketch comedy program The Tracey Ullman Show, wanted to use the series of animated cartoons as bumpers between sketches.
              Groening had been called in to pitch a series of animated shorts, and had intended to present his Life in Hell series. When he realized
              that animating Life in Hell would require him to rescind publication rights for his life's work, Groening decided to go in another
              direction. He hurriedly sketched out his version of a dysfunctional family, and named the characters after his own family.
            </p>
            <h3 className="article-heading-3" id="1.2">Themes</h3>
            <p>
              The Simpsons takes place in the fictional American town of <Link>Springfield</Link>, without any geographical coordinates or references to
              U.S. states that might identify which part of the country it represents. The Simpsons uses the standard setup of a situational comedy or
              "sitcom" as its premise. The series centers on a family and their life in a typical American town. However, because of its animated nature,
              The Simpsons' scope is larger than that of a regular sitcom. The town of Springfield acts as a complete universe in which characters can
              explore the issues faced by modern society. By having Homer work in a nuclear power plant, the show can comment on the state of the
              environment. Through Bart and Lisa's day at <Link>Springfield Elementary School</Link>, the show's writers illustrate pressing or
              controversial issues in the field of education. The town, features a vast array of media channels, from kids' television programming to
              local news, which enables the producers to make jokes about themselves and the entertainment industry. Some commentators say the show is
              political in nature and susceptible to a left-wing bias. The writer and producer <Link>Al Jean</Link> admitted in an interview that "We
              [the show] are of liberal bent." The writers often evince an appreciation for liberal ideals, but the show makes jokes across the
              political spectrum. Religion and fiugres as a recurring theme. In times of crisis, the family often turns to God, and the show has dealth
              with most of the major religions.
            </p>
            <h3 className="article-heading-3" id="1.3">Main characters</h3>
            <p>
              The main characters of the show are the Simpsons family. The Simpsons are a family who live at <Link>742 Evergreen Terrace</Link> in
              Springfield. Although the family is dysfunctional, many episodes examine their relationsips and bonds with each other and they are often
              shown to care about one another.
            </p>
            <ul className="article-list">
              <li>
                <Link>Homer Simpson</Link>, voiced by <Link>Dan Castellaneta</Link>, is the father of the Simpsons family. He embodies several American
                working class stereotypes: he is crude, overweight, incompetent, clumsy, thoughtless, and a bonafide alcoholic. His voice started out as
                an impression of Walter Matthau but eventually evolved into a more robust voice during the second and third season of the half-hour show,
                allowing Homer to cover a fuller range of emotions. Homer has since become one of the most influential fictional characters. He has
                inspired an entire line of merchandise and his catchphrase, the annoyed grunt "<Link>D'oh!</Link>", has been included in the Oxford
                English Dictionary.
              </li>
              <li>
                <Link>Marge Simpson</Link>, voiced by Julie Kavner, is the well-meaning and extremely patient wife of Homer and mother of Bart, Lisa, and
                Maggie. Her most notable physical feature is her distinct beehive hairstyle which was inspired by Bride of Frankensten and the style that
                Matt Groening's mother wore during the 1960s, although her hair was never blue.
              </li>
              <li>
                <Link>Bart Simpson</Link>, voiced by Nancy Cartwright, is the oldest child in the family, at age 10. Bart's most prominent character
                traits are his mischievousness, rebelliousness, disrespect for authority, and sharp wit. During the first two seasons of The Simpsons,
                Bart was the show's main character. The name "Bart" is an anagram of the word "brat". In 1998, Time magazine selected Bart as 46th of the
                most influential people of the 20th century, and the only fictional character to make the list. He had previously appeared on the cover
                of the December 31, 1990 edition. During the early episodes, Bart was revellious and frequently escaped without punishment, which led some
                parents' group and conservative spokepeople to believe he provided a poor role model for children. This prompted George H. W. Bush to
                rally, "We're going to keep trying to strengthen the American family. To make them more like the Waltons and less like the Simpsons."
              </li>
              <li>
                <Link>Lisa Simpson</Link>, voiced by Yeardley Smith, is the middle child of the family, at age 8. She is an extremely intelligent
                eight-year-old girl, one of the most intelligent characters on the show. Lisa's political convictions are generally socially liberal. In
                the Tracey Ullman Show shorts, Lisa was more of a "female Bart" and was equally mischievous. As the series progressed, Lisa began to
                develop into a more intelligent and more emotional character. In 2001, Lisa received a special "Board of Directors Ongoing Commitment
                Award" at the Environmental Media Awards. "<Link>Lisa the Vegetarian</Link>", an episode from the <Link>seventh season</Link>, won both
                an Environmental Media Award for "Best Television Episodic Comedy" and a Genesis Award for "Best Television Comedy Series, Ongoing
                Commitment".
              </li>
              <li>
                <Link>Maggie Simpson</Link>, is the youngest child of the five main family members, at age 1, is almost always seen as a baby. She was
                quite prominent in the Tracey Ullman Show shorts, often being featured alongside Bart and Lisa but has since become the least seen and
                heard of the five main Simpsons. Maggie rarely speaks, but has been voiced by several actors including Elizabeth Taylor, <Link>James
                Earl Jones</Link>, <Link>Harry Shearer</Link>, who used <Link>Kang</Link>'s voice, Jodie Foster, Yeardley Smith, and Nancy Cartwright.
              </li>
            </ul>
            <p>
              The five family members were given simple designs so that their facial emotions could easily be changed with little effort and so that they
              would be recognizeable in silhouette. They made their debuts on April 19, 1987, in The Tracey Ullman Show short "Good Night". In 1989, the
              shorts were adapted into The Simpsons, a half-four series airing on the Fox Broadcasting Company. The Simpsons family remained the main
              characters on this new show.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Television"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Shorts on the Tracey Ullman Show</h3>
            <p>
              The Simpsons shorts debuted on The Tracey Ullman Show on April 19, 1987, were featured on the first three seasons of the show. By the fourth
              and last season of The Tracey Ullman Show, the first season of the half-hour show was on the air. In the two first seasons, the shorts were
              divided into three or four parts, but in the third season they were played as a single story. The stories for the shorts were written and
              storyboarded by Matt Groening. The family was crudely drawn because Groening had submitted basic sketches to the animators, assuming they
              would clean them up; instead they just traced over his drawings. The animation was produced domestically at <Link>Klasky Csup</Link>, with
              Wesley Archer, David Silverman, and Bill Kopp being animators for the first season. After season one it was animated by Arcer and Silverman.
              "Georgie" Gyorgyi Korvacs Peluce (Kovács Györgyike) was the colorist and the person who decided to make the characters yellow.
            </p>
            <p>
              The actors who voiced the characters would later reprise their roles in The Simpsons. Dan Castellaneta performed the voices of Homer
              Simpson, <Link>Abraham Simpson</Link>, and <Link>Krusty the Clown</Link>. Homer's voice sounds different in the shorts compared to most
              episodes of the half-hour show. In the shorts, his voice is a loose impression of Walter Matthau, whereas it is more robust and humorous on
              the half-hour show, allowing Homer to cover a fuller range of emotions. Voices were needed for the shorts, so the producers decided to ask
              Castellaneta as well as Julie Kavner to voice Homer and Marge, rather than hire more actors; Castellaneta and Kavner were already members of
              the main Tracey Ullman Show cast. Nancy Cartwright and Yeardley Smith performed the voices of Bart and Lisa Simpson respectively.
            </p>
            <h3 className="article-heading-3" id="2.2">The Simpsons</h3>
            <p>
              In 1989, a team of production companies adapted The Simpsons into a half-hour series for the Fox Broadcasting Company. The team included
              what is not the Klasky Csupo animation house. The half-hour series premiered on December 17, 1989, with "<Link>Simpsons Roasting on
              an Open Fire</Link>", a Christmas special. "<Link>Some Enchanted Evening</Link>" was the first full-length episode produced, but it did
              not broadcast until May 1990 because of animation problems. The Simpsons takes place in the fictional American town of Springfield, without
              any geographical coordinates or references to U.S. states that might identify which part of the country it represents. For The Simpsons,
              Harry Shearer and Hank Azaria were added as cast members. In addition to the main cast, Pamela Hayden, Tress MacNeille, Marcia Wallace,
              Maggie Roswell, and Russi Taylor voice supporting characters. From 1999 to 2002, Maggie Roswell's characters were voiced by Marcia Mitzman
              Gaven. Karl Wiedergott has appeared in minor roles, but does not voice any recurring characters. Repeat "special guest" cast members
              include <Link>Albert Brooks</Link>, <Link>Phil Hartman</Link>, <Link>Jon Lovitz</Link>, Joe Mantegna, and <Link>Kelsey Grammer</Link>.
            </p>
            <p>
              The Simpsons was the Fox network's first TV series to rank among a season's top 30 highest-rated shows. While later seasons would focus on
              Homer, Bart was the lead character in most of the first three seasons. In 1990, Bart quickly became one of the most popular characters on
              television in what was termed "Bartmania". On February 9, 1997, The Simpsons surpassed The Flintstones with the episode
              "<Link>The Itchy and Scratchy & Poochie Show</Link>" as the longest-running prime-time animated series in the United States. In 2004, The
              Simpsons replaced The Adventures of Ozzie and Harriet (1952 to 1966) as the longest-running sitcom (animated or live action) in the United
              States. In May 2007, The Simpsons reached their 400th episode at the end of the eighteenth season. Hallmarks of the show include the
              <Link>opening sequence</Link>; its <Link>theme song</Link>, composed by <Link>Danny Elfman</Link> in 1989; <Link>Treehouse of
              Horror</Link> episodes, which have themselves inspired an offshoot of merchandise; its use of cultural references; sight gags; and the use
              of catchphrases, such as Homer's annoyed grunt "D'oh!".
            </p>
            <p>
              The Simpsons has won dozens of awards since it debuted as a series, including 24 Primetime Emmy Awards, 26 Annie Awards, and a Peabody
              Award. In a 1998 issue celebrating the 20th century's greatest achievements in arts and entertainment, Time magazine named The Simpsons the
              century's best television series. On January 14, 2000, the Simpsons was awarded a star on the Hollywood Walk of Fame.
            </p>
            <p>
              In September 1994, 20th Television began syndicating reruns of The Simpsons to local stations throughout the United States. As of 2003,
              syndication reruns of The Simpsons have generated an estimated one billion dollars in revenue for Fox. In 2008, advertisers spent $314.8
              million to advertise during the primetime show and subsequent reruns, down 16.8% from 2007. Since August 2014, every episode of the show
              has aired on FXX. From 2014 until 2019, all episodes were available on-demand via the Simpsons World website. All of the episodes have since
              been moved to <Link>Disney+</Link> streaming service since November 12, 2019.
            </p>
            <h4 className="article-heading-4" id="2.2.1">Crossovers</h4>
            <p>
              Throughout its run, The Simpsons has featured characters from different series. The first such instance was in the <Link>season six</Link>
              episode "<Link>A Star is Burns</Link>", which featured characters from The Critic; due to it being produced by staff who had worked on The
              Simpsons, including former writer Al Jean, Mike Reiss, and producer James L. Brooks. Matt Groening publicly criticized the episode and
              Brooks, going on to remove his name from the opening credits.
            </p>
            <p>
              Further episodes with crossovers include <Link>season 8</Link> episode "<Link>The Springfield Files</Link>" with The X-Files, and
              <Link> season 26</Link> episode "<Link>Simpsorama</Link>", which is a full-length crossover with <Link to="/futurama">Futurama</Link>,
              another show created by Matt Groening. Also in season 26, the episode "<Link>Mathlete's Feat</Link>" featured a crossover couch gag with
              Adult Swim series <Link to="/rick_and_morty">Rick and Morty</Link>.
            </p>
            <p>
              Fellow Animation Domination series Family Guy would have a crossover with The Simpsons titled "The Simpsons Guy", which is part of Family
              Guy season 13.
            </p>
            <p>
              An alternate telecast of the Monday Night Football game between the Cincinnati Bengals and Dallas Cowboys on December 2024, centered around
              The Simpsons, with Homer playing quarterback for the Cowboys against Bart and the Bengals. Airing on Disney+, play had been slighly delayed
              from the primary broadcast on ABC and ESPN, allowing animators to replace players with characters from the show (Bart, for example, took
              the place of Cincinnati's Joe Burow).
            </p>
            <h4 className="article-heading-4" id="2.2.2">Disney+ shorts</h4>
            <p>
              Following the addition of The Simpsons to the Disney+ streaming service,co-creator and executive producer James L. Brooks suggested the
              creation of a series of short films in which the Simpsons would "invade the rest of Disney+" as a way to promote The Simpsons and reach
              viewers who may not have been familiar with the series. So far, nine shorts have been released, the most recent being The Most Wonderful
              Time of the Year on October 11, 2024.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Films"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Feature films</h3>
            <h4 className="article-heading-4" id="3.1.1">The Simpsons Movie</h4>
            <p>
              20h Century Fox, Gracie Films, and Film Roman produced an animated Simpsons film, titled The Simpsons Movie, that was released on July
              27, 2007. The film was directed by long-time Simpsons producer David Silverman and written by a team of Simpsons writers comprising Matt
              Groening, James L. Brooks, Al Jean, George Meyer, Mike Reiss, John Swartzwelder, Jon Vitti, David Mirkin, Mike Scully, Matt Selman, and
              Ian Maxtone-Graham. Production of the film occurred alongside continued writing of the series despite long-time claims by those involved in
              the show that a film would enter procution only after the series had concluded. There had been talk of a possible feature-length Simpsons
              film ever since the early seasons of the series. James L. Brooks originally thought that the story of the episode "<Link>Kamp Krusty</Link>"
              was suitable for a film, but he encountered difficulty in trying to expand the script to feature-length. For a long time, difficulties
              such as lack of a suitable story and an already fully engaged crew of writers delayed the project. After winning a Fox and USA Today
              competition, Springfield, Vermont hosted the film's world premiere.
            </p>
            <p>
              The Simpsons Movie grossed a combined total of $74 million in is opening weekend in the United States, taking it to the top of the box
              office, and set the record for highest grossing opening weekend for a film based on a television series, surpassing Mission Impossible 2.
              It opened at the top of the international box office, taking $96 million from seventy-one overseas territories, including $27.8 million in
              the United Kingdom, making it Fox's second highest opening ever in that country. In Australia, it grossed A$13.2 million, the biggest
              opening for an animated film and third largest opening weekend in the country. The film closed on December 20, 2007, with a worldwide
              gross of $527,068,706, making it the eighth highest grossing film of 2007.
            </p>
            <h4 className="article-heading-4" id="3.1.2">Upcoming film</h4>
            <p>
              In September 2025, a second feature film was officially announced to be in production, set for theatrical release on July 23, 2027. A
              picture saying "Homer's coming back for seconds." and the release date as a small teaser was released.
            </p>
            <h3 className="article-heading-3" id="3.2">Theatrical short films</h3>
            <h4 className="article-heading-4" id="3.2.1">The Longest Daycare</h4>
            <p>
              A 3D short film entitled The Longest Daycare, focusing on Maggie, was shown in theaters before the 2012 film Ice Age: Continental Drift.
              It received an Academy Award nomination in the category of best animated short film.
            </p>
            <h4 className="article-heading-4" id="3.2.2">Playdate with Destiny</h4>
            <p>
              On February 27, 2020, it was announced that a new short film titled Playdate with Destiny would be screened in theaters with
              <Link to="/pixar"> Pixar</Link>'s <Link to="/pixar/onward">Onward</Link>. The short film starred Maggie Simpson. Onward was released on
              March 6, 2020, with a release on Disney+ on April 10, 2020.
            </p>
            <h3 className="article-heading-3" id="3.3">In other media</h3>
            <p>
              <Link> Milhouse</Link> makes a cameo appearance in the 2014 film The Lego Movie as a Master Builder in Cloud Cuckoo Land.
            </p>
            <p>
              Bootleg versions of Homer and Bart, as well as background characters based on the series' animation style, have cameo appearances in the
              2022 film Chip 'n Dale: Rescue Rangers.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Print publication"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Books</h3>
            <h4 className="article-heading-4" id="4.1.1">Episode guides</h4>
            <h3 className="article-heading-3" id="4.2">Comic books</h3>
            <h4 className="article-heading-4" id="4.2.1">Simpsons Illustrated</h4>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Video games"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Theme park attractions"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Universal Studios</h3>
            <h3 className="article-heading-3" id="6.2">Broadway at the Beach</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Merchandise"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Home releases</h3>
            <h3 className="article-heading-3" id="7.2">Music</h3>
            <h3 className="article-heading-3" id="7.3">T-shirts</h3>
            <h3 className="article-heading-3" id="7.4">Action figures</h3>
            <h4 className="article-heading-4" id="7.4.1">Lego</h4>
            <h3 className="article-heading-3" id="7.5">Board and card games</h3>
            <h3 className="article-heading-3" id="7.6">Other</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default Simpsons;