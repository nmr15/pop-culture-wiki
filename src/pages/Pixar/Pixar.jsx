import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { pixarFilms } from '../../data/dataPixar'
import Card from '../../components/Card';
import Collapse from '../../components/Collapse';
import Heading2 from '../../components/Heading2';

const Pixar = () =>
{
  useEffect(() =>
  {
    document.title = "Pixar - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "Early history"},
              {id: "1.2", title: "Independent company (1986-1999)"},
              {id: "1.3", title: "Collaboration with Disney (1999-2006)"},
              {id: "1.4", title: "Walt Disney Studios subsidiary (2006-present)", sub2: [
                {id: "1.4.1", title: "Expansion and John Lasseter's exit (2010-2018)"},
                {id: "1.4.2", title: "Sequels and financial success (2018-2019)"},
                {id: "1.4.3", title: "COVID-19, Disney+ releases, and some financial struggles (2020-present)"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Campus</a></li>
          <Collapse 
            id="3"
            item="Filmography"
            sub={[
              {id: "3.1", title: "Traditions"},
              {id: "3.2", title: "Sequels and prequels"},
              {id: "3.3", title: "Adaptation to television"},
              {id: "3.4", title: "2D animation and live-action"},
              {id: "3.5", title: "Upcoming films"},
              {id: "3.6", title: "Franchises"},
              {id: "3.7", title: "Highest-grossing films"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Co-op Program</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Pixar</li>
        </ul>
        <div>
          <h1 className="article-heading">Pixar</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Pixar</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pixar_logo.svg/960px-Pixar_logo.svg.png" alt="Pixar logo" />
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
            <b>Pixar</b>, doing business as <b>Pixar Animation Studios</b>, is an American animation studio based in Emeryville, California, known for
            its critically and commercially successful computer-animated feature films. Pixar is a subsidiary of Walt Disney Studios, a division of
            Disney Entertainment segment of the Walt Disney Company.
          </p>
          <p>
            The studio started in 1979 as part of the <Link>Lucasfilm</Link> computer division. It was known as the <b>Graphics Group</b> before its spin-off as a
            corporation in 1986, with funding from Apple co-founder Steve Jobs, who became its majority shareholder. The studio's mascot is Luxo Jr., a desk lamp
            from the studio's 1986 short film of the same name. Disney announced its acquisition of Pixar in January 2006, and completed it in May 2006. Pixar is
            best known for its feature films, technologically powered by its RenderMan software. RenderMan began as Pixar's implementation of the industry-standard
            RenderMan Interface Specification (RISpec) image-rendering API, which came out in 1988; support for RISpec was dropped in 2016. RenderMan became fully
            path-traced and physically based (PBR).
          </p>
          <p>
            In addition to producing short films, Pixar has produced 30 feature films, with its first film being
            <Link to="/toy_story/toy_story_film"> Toy Story</Link> (1995), which is also the first fully computer-animated feature film. As of July 2023, its
            feature films have earned over $17 billion at the worldwide box office with an average gross of $589 million per film.
            <Link to="/toy_story/toy_story_3"> Toy Story 3</Link> (2010), <Link to="/finding_nemo/finding_dory">Finding Dory</Link> (2016),
            <Link to="/the_incredibles/the_incredibles_2"> The Incredibles 2</Link> (2018), <Link to="/toy_story/toy_story_4">Toy Story 4</Link> (2019), and
            <Link to="/inside_out/inside_out_2"> Inside Out 2</Link> all grossed over $1 billion and are among the 50 highest grossing films of all time. Moreover,
            13 of Pixar's films are in the 50 highest grossing animated films of all time. As of August 2025, Inside Out 2 was the second highest grossing
            animated film of all time.
          </p>
          <p>
            Pixar has earned 23 Academy Awards, 10 Golden Globe Awards, and 11 Grammy Awards, along with numerous other awards and acknowledgments. Since its
            inauguration in 2001, eleven Pixar films have won the Academy Awards for Best Animated Feature, including
            <Link to="/finding_nemo/finding_nemo_film"> Finding Nemo</Link> (2003), <Link to="/the_incredibles/the_incredibles_film">The Incredibles</Link> (2004),
            <Link to="/pixar/ratatouille"> Ratatouille</Link> (2007), <Link to="/pixar/wall_e">WALL-E</Link> (2008), <Link to="/pixar/up">Up</Link> (2009),
            Toy Story 3 and Toy Story 4, <Link to="/pixar/brave">Brave</Link> (2012), <Link to="/inside_out/inside_out_film">Inside Out</Link> (2015),
            <Link to="/coco/coco_film"> Coco</Link>, and <Link to="/pixar/soul">Soul</Link> (2020). Toy Story 3 and Up were also nominated for the Academy Award for
            Best Picture.
          </p>
          <p>
            In February 2009, Pixar executives <Link>John Lasseter</Link>, <Link>Brad Bird</Link>, <Link>Pete Docter</Link>, <Link>Andrew Stanton</Link>, and
            <Link> Lee Unkrich</Link> were presented with the Golden Lion for Lifetime Achievement by the Venice Film Festival. The physical award was ceremonially
            handed to Lucasfilm's founder, <Link>George Lucas</Link>.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"History"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Early history</h3>
            <div className="img-right img-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pixar_Computer_-_computer_history_museum_2013-04-11_23-46.jpg/500px-Pixar_Computer_-_computer_history_museum_2013-04-11_23-46.jpg"
              alt="Pixar computer" />
              <p>A Pixar computer at the Computer History Museum in Mountain View with the 1986-95 logo on it.</p>
            </div>
            <p>
              Pixar got its start in 1974, when New York Institute of Technology's founder, Alexander Schure, who was also the owner of a traditional animation
              studio, established the Computer Graphics Lab (CGL) and recruited computer scientists who shared his ambitions about creating the world's first
              computer-animated film. Edwin Catmull and Malcolm Blanchard were the first to be hired and were soon joined by Alvy Ray Smith and David DiFrancisco
              some months later, who were the four original members of the Computer Graphics Lab, located in a converted two-story garage acquired from the former
              Vanderbilt-Whitney estate. Schure invested significant funds into the computer graphics lab, approximately $15 million, providing the resources the
              group needed but contributing to NYIT's financial difficulties. Eventually, the group realized they needed to work in a real film studio to reach
              thei goal. Francis Ford Coppola then invited Smith to his house for a three-day media conference, where Coppola and George Lucas shared their visions
              for the future of digital moviemaking.
            </p>
            <p>
              When Lucas approached the group and offered them jobs at his studio, six employees moved to Lucasfilm. During the following months, they gradually
              resigned from CGL, found temporary jobs for about a year to avoid making Schure suspicious, and joined the Graphics Group at Lucasfilm. The Graphics
              Group, which was one-third of the Computer Division of Lucasfilm, opened in 1979 with the hiring of Catmull from NYIT, where he was in charge of the
              Computer Graphics Lab. He was then reunited with Smith, who also made the journey from NYIT to Lucasfilm, and was made the director of the Graphics
              Group. At NYIT, the researchers pioneered many of the CG foundation techniques, in particular, the invention of the alpha channel by Catmull and Smith.
              Over the next several years, the CGL would produce a few frames of an experimental film called The Works. After moving to Lucasfilm, the team worked on
              creating the precursor to RenderMan, called REYES (for "renders everything you ever saw"), and developed several critical technologies for CG,
              including particle effects and various animation tools.
            </p>
            <p>
              John Lasseter was hired to the Lucasfilm team for a week in late 1983 with the title "interface designer"; he animated the short film The
              Adventures of Andre & Wally B. In the next few years, a designer suggested naming a new digital compositing computer the "Picture Maxer". Smith
              suggested that the laser-based device have a catchier name, and came up with "Pixer", which after a meeting was changed to "Pixar". According to
              Michael Rubin, the author of Droidmaker: George Lucas and the Digital Revolution, Smith and three other employees came up with the name during a
              restaurant visit in 1981, but when interviewing them he got four different versions about the origin of the name.
            </p>
            <p>
              In 1982, the Pixar team began working on special-effects film sequences with <Link>Industrial Light & Magic</Link>. After years of research, and key
              milestones such as the Genesis Effect in Star Trek II: The Wrath of Khan and the Stained Glass Knight in Young Sherlock Holmes, the group, which
              then numbered 40 individuals, was spun out as a cororation in February 1986 by Catmull and Smith. Among the 38 remaining employees were Malcolm
              Blanchard, David DiFrancisco, Ralph Guggenheim, and Bill Reeves, who had been part of the team since the days of NYIT. Tom Duff, also an NYIT
              member, would later join Pixar after is formation. With Lucas's 1983 divorce, which coincided with the sudden dropoff in revenue from Star Wars
              licenses following the release of <Link to="/starwars/return_of_the_jedi">Return of the Jedi</Link>, they knew he would most likely sell the whole
              Graphics Group. Worried that the employees would be lost to them if that happened, which would prevent the creation of the first computer-animated
              movie, they concluded that the best way to keep the team together was to turn the group into an independent company. But Moore's Law also
              suggested that sufficient computing power for the first film was still some years away, and they needed to focus on a proper product until then.
              Eventually, they decided they should be a hardware company in the meantime, with their Pixar Image Computer as the core product, a system
              primarily sold to governmential, scientific, and medical markets. They also used SGI computers.
            </p>
            <p>
              In 1983, Nolan Bushnell founded the new computer-guided animation studio called Kadabrasope as a subsidiary of his Chuck E. Cheese's Pizza Time
              Theatres company (PTT), which was founded in 1977. Only one major project was made out of the new studio, an animated Christmas special for NBC
              starring Chuck E. Cheese and other PTT mascots; known as "Chuck E. Cheese: The Christmas That Almost Wasn't." The animation movement would be made
              using tweening instead of traditional cel animation. After the video game crash of 1983, Bushnell started selling some subsidiaries of PTT to keep
              the business afloat. Sente Technologies (another division, was founded to have games distributed in PTT stores) was sold to Bally Games and
              Kadabrascope was sold to Lucasfilm. The Kadabrascope assets were combined with the Computer Division of Lucasfilm. Coincidentally, one of Steve Job's
              first jobs was under Bushnell in 1973 as a technician at his other company Atari, which Bushnell sold to Warner Communications in 1976 to focus on
              PTT. PTT would later go bankrupt in 1984 and be acquired by ShowBiz Pizza Place.
            </p>

            <h3 className="article-heading-3" id="1.2">Independent company (1986-1999)</h3>
            <div className="img-right img-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Luxo_Jr_in_Pixar_Fest_Hong_Kong_2021.jpg/500px-Luxo_Jr_in_Pixar_Fest_Hong_Kong_2021.jpg"
                alt="Luxo Jr. statue" 
              />
              <p>A Luxo Jr. figure displayed in Hong Kong.</p>
            </div>
            <p>
              In 1986, the newly independent Pixar was headed by President Edwin Catmull and Executive Vice President Alvy Ray Smith. Lucas's search for investors
              led to an offer from Steve Jobs, which Lucas initially found too low. He eventually accepted after determining it impossible to find other
              investors. At that point, Smith and Catmull had been declined by 35 venture capitalists and ten large corporations, including a deal with
              General Motors which fell through three days before signing the contracts. Jobs, who had been edged out of Apple in 1985, was now founder and CEO of
              the new computer company NeXT. On February 3, 1986, he paid $5 million of his own money to George Lucas for technology rights and invested $5 million
              cash as capital into the company, joining the board of directors as chairman.
            </p>
            <p>
              In 1985, while still at Lucasfilm, they had made a deal with the Japanese publisher Shogakukan to make a computer-animated movie called Monkey, based
              on the Monkey King. The project continued sometime after they became a separate company in 1986, but it became clear that the technology was not
              sufficiently advanced. The computers were not powerful enough and the budget would be too high. As a result, they focused on the computer hardware
              business for years until a computer-animated feature became feasible according to Moore's law.
            </p>
            <p>
              At the time, Walt Disney Studios made the decision to develop more efficient ways of producing animation. They reached out to Graphics Group at
              Lucasfilm and to Digital Productions. Because of the Graphic Group's deeper understanding of animation, and Smith's experience with paint programs at
              NYIT, it convinced Disney they were the right choice. In May 1986, Pixar signed a contract with Disney, who eventually bought and used the Pixar
              Image Computer and custom software written by Pixar as part of its Computer Animation Production System (CAPS) project, to migrate the laborous ink
              and paint part of the 2D animation process to a more automatic method. The company's first feature film to be released using this new animation method
              was <Link to="/disney/the_rescuers_down_under">The Rescuers Down Under</Link> (1990).
            </p>
            <p>
              In a bid to drive sales of the system and increase the company's capital, Jobs suggested releasing the product to the mainstream market. Pixar
              employee John Lasseter, who had long been working on not-for-profit short demonstration animations, such as Luxo Jr. (1986) to show off the device's
              capabilities, premiered his creation to great fanfare at SIGGRAPH, the computer graphics industry's largest convention.
            </p>
            <p>
              However, the Image Computer had inadequate sales which threatened to end the company as financial losses grew. Jobs increased investment in exchange
              for an increased stake, reducing the proportion of management and employee ownership until eventually, his total investment of $50 million gave him
              control of the entire company. In 1989, Lasseter's growing animation department which was originally composed of just four people (Lasseter, Bill
              Reeves, Eben Ostby, and Sam Leffler), was turned into a division that produced compute-animated commercials for outside companies. In April 1990,
              Pixar sold its hardware division, including all proprietary hardware technology and imaging software, to Vicom Systems, and transferred 18 of Pixar's
              approximately 100 employees. In the same year, Pixar moved from San Rafael to Richmond, California. Pixar relased some of its software tools on the
              open market for Macintosh and Windows systems. RenderMan is one of the leading 3D packages of the early 1990s, and Typestry is a special-purpose 3D
              text renderer that competed with RayDream.
            </p>
            <p>
              During this period of time, Pixar continued its successful relationship with Walt Disney Feature Animation, s stuido whose corporate parent would
              ultimately become its most important partner. As 1991 began, however, the layoff of 30 employees in the company's computer hardware department
              (including the company's president, Chuck Kolstad), reduced the total number of employees to just 42, approximately its original number. On March 6,
              1991, Steve Jobs bought the company from its employees and became the full owner. He contemplated folding it into NeXT, but the NeXT's co-founder
              refused. A few months later Pixar made a historic $26 million deal with Disney to produce three computer-animated feature films, the first of which was
              Toy Story (1995), the product of the technological limitations that challenged CGI. By then the software programmers working on RenderMan and IceMan,
              and Lasseter's animation department, which made television commercials (and four Luxo Jr. shorts for Sesame Street the same year), were all that
              remained of Pixar.
            </p>
            <p>
              Despite the income from these projects, the company still continued to lose money, and Steve Jobs, as chairman of the board and now owner, often
              considered selling it. As late as 1994, Jobs contemplated selling Pixar to other companies such as Hallmark Cards, Microsoft co-founder Paul Allen, and
              Oracle CEO and co-founder Larry Ellison. After learning from New York critics that Toy Story would probably be a hit, and confirming that Disney would
              distribute it for the 1995 Christmas season, he decided to give Pixar another chance. Also, for the first time, he took an active leadership role in the
              company and made himself CEO. Toy Story grossed more than $448 million worldwide and, when Pixar held its initial public offering on November 29, 1995,
              trading as "PIXR" on NASDAQ, it exceeded Netscape's as the biggest IPO of the year. In its first half-hour of trading, Pixar stock shot from $26 to $45,
              delaying trading because of unmatched buy orders. Shares climbd to $50 and closed the day at $42.
            </p>
            <p>
              The company continued to make the television commercials during the production of Toy Story, which came to an end on July 9, 1996, when Pixar
              announced they would shut down its television commercial unit, which counted 18 employees, to focus on longer projects and interactive entertainment.
            </p>
            <p>
              During the 1990sand 200s, Pixar gradually developed the "Pixar Braintrust", the studio's primary creative development process in which all of its
              directors, writers, and lead storyboard artists regularly examine each other's projects and give very candid "notes", the industry term for
              constructive criticism. The Braintrust operates under a philosophy of a "filmmaker-driven studio", in which creatives help each other move their films
              forward through a process somewhat like peer review, as opposed to the traditional Hollywood approach of an "executive-driven studio" in which directors
              are micromanaged through "mandatory notes" from development executives outranking the producers. According to Catmull, it evolved out of the working
              relationship between Lasseter, <Link to="/andrew_stanton">Andrew Stanton</Link>, <Link to="pete_docter">Pete Docter</Link>,
              <Link to="/lee_unkrich"> Lee Unkrich</Link>, and <Link to="/joe_ranft">Joe Ranft</Link> on Toy Story.
            </p>
            <p>
              As a result of the success of Toy Story, Pixar built a new studio at the Emeryville campus which was designed by PWP Landscape Architecture and
              opened in November 2000.
            </p>

            <h3 className="article-heading-3" id="1.3">Collaboration with Disney (1999-2006)</h3>
            <p>
              Pixar and Disney had disagreements over the production of <Link to="/toy_story/toy_story_2">Toy Story 2</Link>. Originally intended as a
              direct-to-video release (and thus not part of Pixar's three-picture deal), the film was eventually upgraded to a theatrical release during production.
              Pixar demanded that the film then be counted toward the three-picture agreement, but Disney refused. Though profitable for both, Pixar later
              complained that the arrangement was not equitable. Pixar was responsible for creation and production, while Disney handled marketing and distribution.
              Profits and production costs were split equally, but Disney exclusively owned all story, characters, and sequel rights and also collected a 10%-15%
              distribution fee.
            </p>
            <p>
              The two companies attempted to reach a new agreement for ten months and failed on January 26, 2001, July 26, 2002, April 22, 2003, January 16, 2004,
              July 22, 2004, and January 14, 2005. The proposed distribution deal meant Pixar would control production and own the resulting story, character,
              and sequel rigts, while Disney would own the right of first refusal to distribute any sequels. Pixar also wanted to finance its own films and collect
              100% profit, paying Disney the 10%-15% distribution fee. In addition, as part of any distribution agreement with Disney, Pixar demanded control over
              films already in production under the old agreement, including <Link to="/the_incredibles/the_incredibles_film">The Incredibles</Link> and
              <Link to="/cars/cars_film"> Cars</Link>. Disney considered these conditions unacceptable, but Pixar would not concede.
            </p>
            <p>
              Disagreements between Steve Jobs and Disney chairman and CEO Michael Eisner caused the negotiations to cease in 2004, with Disney forming Circle
              Seven Animation and Jobs declaring that Pixar was actively seeking partners other than Disney. Despite this announcement and several talks with
              Warner Bros. Pictures, Sony Pictures, and 20th Century Fox, Pixard did not enter negotiations with other distributors, although a Warner Bros.
              spokesperson told CNN, "We would love to be in business with Pixar. They are a great company." After a lengthy hiatus, negotiations between the two
              companies resumed following the departure of Eisner from Disney in September 2005. In preparation for potential fallout between Pixar and Disney, Jobs
              announced in late 2004 that Pixar would no longer release movies at the Disney-dictated November time frame, but during the more lucrative early
              summer months. This would also allow Pixar to release DVDs for its major releases during the Christmas shopping season. An added benefit of delaying
              Cars from November 4, 2005, to June 9, 2006, was to extend the time frame remaining on the Pixar-Disney contract, to see how things would play out
              between the two companies.
            </p>
            <p>
              Pending the Disney acquisition of Pixar, the two companies created a distribution deal for the intended 2007 release of
              <Link to="/pixar/ratatouille"> Ratatouille</Link>, to ensure that if the acquisition failed, this one film would be released through Disney's
              distribution channels. In contrast to the earlier Pixar deal, Ratatouille was meant to remain a Pixar property and Disney would have receieved a
              distribution fee. The competition of Disney's Pixar acquisition, however, nullified this distribution arrangement.
            </p>

            <h3 className="article-heading-3" id="1.4">Walt Disney Studios subsidiary (2006-present)</h3>
            <p>
              After extended negotiations, Disney ultimately agreed on January 24, 2006, to buy Pixar for approximately $7.4 billion in an all-stock deal.
              Following Pixar shareholder approval, the acquisition was completed on May 5, 2006. The transaction catapulted Jobs, who owned 49.65% of total share
              interest in Pixar, to Disney's largest individual shareholder with 7%, valued at $3.9 billion, and a new seat on the board of directors. Jobs' new
              Disney holdings exceeded holdings belonging to Eisner, the previous top shareholder, who still held 1.7$; and Disney Director Emeritus Roy E. Disney,
              who held almost 1% of the corporation's shares. Pixar shareholders received 2.3 shares of Disney common stock for each share of Pixar common stock
              redeemed.
            </p>
            <p>
              As part of the deal, John Lasseter, by then Executive Vice President, became Chief Creative Officer (reporting directly to president and CEO Bob Iger
              and consulting with Disney Director Roy E. Disney) of both Pixar and Walt Disney Animation Studios (including its division Disneytoon Studios), as well
              as the Principal Creative Adviser at Walt Disney Imagineering, which designs and builds the company's theme parks. Catmull retained his position as
              President of Pixar, while also becoming President of Walt Disney Animation Studios, reporting to Iger and Dick Cook, chairman of the Walt Disney Studios.
              Jobs' position as Pixar's chairman and chief executive officer was abolished, and instead, he took a place on the Disney board of directors.
            </p>
            <p>
              After the deal closed in May 2006, Lasseter revealed that Iger had felt that Disney needed to buy Pixar while watching a parade at the opening of
              Hong Kong Disneyland in September 2005. Iger noticed that of all the Disney characters in the parade, none were characters that Disney had created
              within the last ten years since all the newer ones had been created by Pixar. Upon returning to Burbank, Iger commissioned a financial analysis that
              confirmed that Disney had actually lost money on animation for the past decade, then presented that information to the board of directors at his
              first board meeting after being promoted from COO to CEO, and the board, in turn, authorized him to explore the possibility of a deal with Pixar.
              Lasseter and Catmull were wary when the topic of Disney buying Pixar first came up, but Jobs asked them to give Iger a chance (based on his own
              experience negotiating with Iger in summer 2005 for the rights to ABC shows for the fifth-generation iPod Classic), and in turn, Iger convinced them
              of the sincerity of his feeling that Disney needed to re-focus on animation.
            </p>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/John_Lasseter-Up-66th_Mostra.jpg/500px-John_Lasseter-Up-66th_Mostra.jpg"
                alt="John and Nancy Lasseter, Venice Film Festival"
              />
              <p>John Lasseter and his wife Nancy appear with characters from Up at the 2009 Venice Film Festival.</p>
            </div>
            <p>
              Lasseter and Catmull's oversight of both the Disney Feature Animation and Pixar studios did not mean that the two studios were merging, however. In fact,
              additional conditions were laid out as part of the deal to ensure that Pixar remained a separate entity, a concern that analysts had expressed about the
              Disney deal. Some of those conditions were that Pixar HR policies would remain intact, including the lack of employment contracts. Also, the Pixar name was
              guaranteed to continue, and the studio would remain in its current Emeryville, California location with the "Pixar" sign. Finally, branding of films made
              post-merger would be "Disney•Pixar" (beginning with Cars).
            </p>
            <p>
              Jim Morris, producer of <Link to="/pixar/wall_e">WALL-E</Link>, became general manager of Pixar. In this new position, Morris took charge of the day-to-day
              running of the studio facilities and products.
            </p>
            <p>
              After a few years, Lasseter and Catmull were able to successfully transform the basic principles of the Pixar Brantrust to Disney Animation, although
              meetings of the Disney Story Trust are reportedly "more polite" than those of the Pixar Braintrust. Catmull later explained that after the merger, to maintain
              the studios' seperate identities and cultures (notwithstanding the fact of common ownership and common senior management), he and Lasseter "drew a hard line"
              that each studio was solely responsible for its own projects and would not be allowed to borrow personnel from or lend tasks out to the other. The rule
              ensures that each studio maintains "local ownership" of projects and can be proud of its own work. Thus for example, when Pixar had issues with Ratatouille
              and Disney Animation had issues with Bolt, "nobody bailed them out" and each studio was required "to solve the problem on its own" despite knowing that there
              were personnel at the other studio who theoretically could have helped.
            </p>

            <h4 className="article-heading-4" id="1.4.1">Expansion and John Lasseter's exit (2010-2018)</h4>
            <p>
              On April 20, 2010, Pixar opened Pixar Canada in the downtown area of Vancouver, British Columbia, Canada. The roughly 2,000 square meters studio produced
              seven short films based on <Link to="/toystory">Toy Story</Link> and <Link to="/cars">Cars</Link> characters. In October 2013, the studio was closed down to
              refocus Pixar's efforts at its main headquarters.
            </p>
            <p>
              In November 2014, Morris was promoted to president of Pixar, while his counterpart at Disney Animation, general manager Andrew Millstein, was also promoted to
              president of that studio. Both continued to report to Catmull, who retained the title of president of both Disney Animation and Pixar.
            </p>
            <p>
              On November 21, 2017, Lasseter announced that he was taking a six-month leave of absence after acknowledging what he called "missteps" in his behavior with
              employees in a memo to staff. According to The Hollywood Reporter and The Washington Post, Lasseter had a history of alleged sexual misconduct towards
              employees. On June 8, 2018, it was announced that Lasseter would leave Disney Animation and Pixar at the end of the year, but would take on a consulting role
              until then. Pete Docter was announced as Lasseter's replacement as chief creative officer of Pixar on June 19, 2018.
            </p>

            <h4 className="article-heading-4" id="1.4.2">Sequels and financial success (2018-2019)</h4>
            <p>
              On June 15, 2018, <Link to="/the_incredibles/the_incredibles_2">The Incredibles 2</Link> was released, setting a record for widest opening weekend worldwide
              and domestic for an animated film. The film would eventually gross $1.2 billion worldwide. On October 23, 2018, it was announcd that Catmull would be
              retiring. He stayed in an adviser role until July 2019. On January 18, 2019, it was announced that Lee Unkrich would be leaving Pixar after 25 years although
              he would return to the studio a few years later. On June 21, 2019, <Link to="/toy_story/toy_story_4">Toy Story 4</Link> was released, surpassing the
              widest opening worldwide weekend record that Incredibles 2 set. The film would make over $1 billion and win the Academy Award for Best Animated Feature.
              During the 2019 D23 Expo, Pixar announced that their next film, <Link to="/pixar/soul">Soul</Link>, would release in 2020. Ahead of the launch of
              <Link> Disney+</Link>, Pixar debuted SparkShorts, experimental shorts done by Pixar staff.
            </p>

            <h4 className="article-heading-4" id="1.4.3">COVID-19, Disney+ releases, and some financial struggles (2020-present)</h4>
            <p>
              Pixar released <Link to="/pixar/onward">Onward</Link> on March 6, 2020. However, due to the start of the COVID-19 pandemic, the film
              underperformed at the box office and was released onto rental digital services on March 20, and later on Disney+ on April 3. Due to the
              pandemic, <Link to="/pixar/soul">Soul</Link> was moved to November 2020, and ultimately released on December 25, 2020, on Disney+ at no
              additional cost to subscribers, and later became the first animated streaming film to win the Academy Award for Best Animated Feature.
              Pixar's next two features, <Link to="/pixar/luca">Luca</Link> and <Link to="/pixar/turning_red">Turning Red</Link>, were also released free
              on Disney+ in June 2021 and March 2022, respectively. In 2021, several Pixar employees anonymously criticized Disney's decision to release
              their films direct to Disney+.
            </p>
            <p>
              <Link to="/toy_story/lightyear">Lightyear</Link>, Pixar's first movie to return to theaters, was released in June 2022. The film became a
              box-office failure with Deadline Hollywood calculating the film lost the studio $136 million, when factoring together all expenses and
              revenues. In September 2022, Jonas Rivera was promoted to Executive VP of Film Production at Pixar overseeing all film and streaming
              production. In December 2022, Disney CEO Bob Iger noted that they would rely more on the Pixar brand. In June 2023, Disney laid off 75
              employees including the director of Lightyear Angus MacLane, and the film's producer Galyn Susman.
            </p>
          </div>
        </div>
         <div>
          <Heading2 id={2} title={"Campus"} />
          <div>
            
          </div>
        </div>
         <div>
          <Heading2 id={3} title={"Filmography"} />
          <div>
            <div className="row">
              {pixarFilms.map((pxrFilm) => (
                <div className="col-3" key={pxrFilm.id}>
                  <Card 
                    route={pxrFilm.route}
                    img={pxrFilm.img}
                    alt={pxrFilm.title}
                    title={pxrFilm.title}
                    imgStyle="card-img-vertical"
                  />
                </div>
              ))}
            </div>
            <h3 className="article-heading-3" id="3.1">Traditions</h3>
            <h3 className="article-heading-3" id="3.2">Sequels and prequels</h3>
            <h3 className="article-heading-3" id="3.3">Adaptation to television</h3>
            <h3 className="article-heading-3" id="3.4">2D animation and live-action</h3>
            <h3 className="article-heading-3" id="3.5">Upcoming films</h3>
            <h3 className="article-heading-3" id="3.6">Franchises</h3>
            <h3 className="article-heading-3" id="3.7">Highest-grossing films</h3>
          </div>
        </div>
         <div>
          <Heading2 id={4} title={"Co-op Program"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Pixar;