import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const Simpsons = () =>
{
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
            <h3 className="article-heading-3" id="2.2">The Simpsons</h3>
            <h4 className="article-heading-4" id="2.2.1">Crossovers</h4>
            <h4 className="article-heading-4" id="2.2.2">Disney+ shorts</h4>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Films"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Feature films</h3>
            <h4 className="article-heading-4" id="3.1.1">The Simpsons Movie</h4>
            <h4 className="article-heading-4" id="3.1.2">Upcoming film</h4>
            <h3 className="article-heading-3" id="3.2">Theatrical short films</h3>
            <h4 className="article-heading-4" id="3.2.1">The Longest Daycare</h4>
            <h4 className="article-heading-4" id="3.2.2">Playdate with Destiny</h4>
            <h3 className="article-heading-3" id="3.3">In other media</h3>
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