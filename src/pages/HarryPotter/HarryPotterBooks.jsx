import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Heading2 from '../../components/Heading2'

const HarryPotterBooks = () =>
{
  useEffect(() =>
  {
    document.title = "Harry Potter (book series) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Plot"
            sub={[
              {id: "1.1", title: "Early years"},
              {id: "1.2", title: "Voldemort returns"}
            ]}
          />
          <Collapse 
            id="2"
            item="Style and allusions"
            sub={[
              {id: "2.1", title: "Genre and style"},
              {id: "2.2", title: "Allusions"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Themes</a></li>
          <Collapse 
            id="4"
            item="Development history"
            sub={[
              {id: "4.1", title: "Publishing history"},
              {id: "4.2", title: "Translations"},
              {id: "4.3", title: "Cover art"}
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Commercial success"},
              {id: "5.2", title: "Literary criticism"},
              {id: "5.3", title: "Themes critique"},
              {id: "5.4", title: "Controversies"}
            ]}
          />
          <Collapse 
            id="6"
            item="Legacy"
            sub={[
              {id: "6.1", title: "Influence on literature"},
              {id: "6.2", title: "Cultural impact"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#7">Awards, honors, and recognition</a></li>
          <Collapse 
            id="8"
            item="Adaptations"
            sub={[
              {id: "8.1", title: "Films", sub2: [
                {id: "8.1.1", title: "Spin-off prequels"}
              ]},
              {id: "8.2", title: "Games"},
              {id: "8.3", title: "Stage production"},
              {id: "8.4", title: "Television"},
              {id: "8.5", title: "Full-cast audiobook"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#9">Attractions</a></li>
          <li className="sidebar-list-item"><a href="#10">Supplementary works</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Harry Potter (book series)</li>
        </ul>
        <div>
          <h1 className="article-heading">Harry Potter (books)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Harry Potter</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Harry_Potter_%28Bloomsbury_Publishing%29_series_logo.webp/500px-Harry_Potter_%28Bloomsbury_Publishing%29_series_logo.webp.png" alt="Harry Potter logo" />
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
            Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard,
            <Link> Harry Potter</Link>, and his friends, <Link>Ron Weasley</Link>, and <Link>Hermione Granger</Link>, all of whom are students at
            <Link> Hogwarts School of Witchcraft and Wizardry</Link>. The main story arc concerns Harry's conflict with <Link>Lord Voldemort</Link>, a
            dark wizard who intends to become immortal, overthrow the wizard governing body known as the <Link>Ministry of Magic</Link>, and subjugate
            all wizards and <Link>Muggles</Link> (non-magical people).
          </p>
          <p>
            The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. A series of
            many genres, including fantasy, drama, coming-of-age fiction, and the British school story (which includes elements of mystery, thriller,
            adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meaning and references.
            Major themes in the series include prejudice, corruption, madness, love, and death.
          </p>
          <p>
            Since the release of the first novel, <Link to="/harry_potter/harry_potter_and_the_philosophers_stone">Harry Potter and the Philosopher's
            Stone</Link>, on June 26 1997, the books have found immense popularity and commercial success worldwide. They have attracted a wide adult
            audience as well as younger readers and are widely considered cornerstones of modern literature, though the books have received mixed
            reviews from critics and literary scholars. As of February 2023, the books have sold more than 600 million copies worldwide, making them the
            best-selling book series in history, available in dozens of languages. The last four books all set records as the fastest-selling books in
            history, with the final installment selling roughly 2.7 million copies in the United Kingdom and 8.3 million copies in the United States
            within twenty-four hours of its release. It holds the Guiness World Record for "Best-selling book series for children."
          </p>
          <p>
            <Link> Warner Bros. Pictures</Link> adapted the original seven books into an eight-part <Link>namesake film series</Link>. In 2016, the total
            value of the Harry Potter franchise was estimated at $25 billion, making it one of the highest-grossing media franchises of all time. Harry
            Potter and the Cursed Child is a play based on a story co-written by Rowling. A <Link>television series</Link> based on the books is in
            production at <Link>HBO</Link>.
          </p>
          <p>
            The success of the books and films has allowed the Harry Potter franchise to expand with numerous derivative works, a traveling exhibition
            that premiered in Chicago in 2009, a studio tour in London that opened in 2012, a digital platform on which J. K. Rowling updates the series
            with new information and insight, and a trilogy of spin-off films premiering in November 2016 with Fantastic Beasts and Where to Find Them,
            among many other developments. Themed attractions, collectively known as The Wizarding World of Harry Potter, have been built at several
            Universal Destinations & Experiences amusement parks around the world.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <h3 className="article-heading-3" id="1.1">Early years</h3>
            <div className="img-left img-card">
              <img
                src="https://en.wikipedia.org/wiki/File:The_Elephant_House.jpg"
                alt="The Elephant House"
              />
            </div>
            <p>
              The series follows the life of a boy named <Link to="/harry_potter/harry_potter_character">Harry Potter</Link>. In the first book, Harry
              Potter and the Philosopher's Stone (Harry Potter and the Sorcerer's Stone in the US), Harry Potter lives in a cupboard under the stairs in
              the house of the <Link>Dursleys</Link>, his aunt, uncle, and cousin, who all treat him poorly. At the age of 11, Harry discovers that he is
              a wizard. He meets a half-giant named <Link to="/harry_potter/rubeus_hagrid">Hagrid</Link> who gives him a letter of acceptance to attend
              the <Link>Hogwarts School of Witchcraft and Wizardry</Link>. Harry learns that his parents, <Link>Lily</Link> and <Link>James Potter</Link>,
              also had magical powers and were murdered by the dark wizard <Link to="/harry_potter/tom_riddle">Lord Voldemort</Link> when Harry was a
              baby. When Voldemort attempted to kill Harry, his curse rebounded, seemingly killing Voldemor, and Harry survived with a lightning-shaped
              scar on his forehead. The event made Harry famous among the community of wizards and witches.
            </p>
            <p>
              Harry becomes a student at Hogwarts and is sorted into <Link>Gryffindor House</Link>. He gains the friendship of
              <Link to="/harry_potter/ron_weasley"> Ron Weasley</Link>, a member of a large but poor wizarding family, and
              <Link to="/harry_potter/hermione_granger"> Hermione Granger</Link>, a witch of non-magical, or <Link>Muggle</Link>, parentage. The trio
              develop an enmity with the rich <Link>pure-blood</Link> student <Link to="/harry_potter/draco_malfoy">Draco Malfoy</Link>. Harry encounters
              the school's headmaster, <Link to="/harry_potter/albus_dumbledore">Albus Dumbledore</Link>; the <Link>potions</Link> professor,
              <Link to="/harry_potter/severus_snape"> Severus Snape</Link>, who displays a dislike for him; and the <Link>Defense Against the
              Dark Arts</Link> teacher, <Link>Quirinus Quirrell</Link>. Quirrell turns out to be allied with Voldemort, who is still alive as a weak
              spirit. The first book concludes with Harry's confrontation with Voldemort, who, in his quest to regain a body, yearns to possess the
              <Link>Philosopher's Stone</Link>, a substance that bestows everlasting life.
            </p>
            <p>
              <Link to="/harry_potter/harry_potter_and_the_chamber_of_secrets"> Harry Potter and the Chamber of Secrets</Link> describes Harry's second
              year at Hogwarts. Students are attacked and petrified by an unknown creature; wizards of Muggle parentage are the primary targets. The
              attacks appear related to the mythical <Link>Chamber of Secrets</Link> and resemble attacks fifty years ago earlier. Harry discovers an
              ability to speak the snake language <Link>Parseltongue</Link>, which he learns is rare and associated with the <Link>Dark Arts</Link>.
              When Hermione is attacked and Ron's younger sister <Link to="/harry_potter/ginny_weasley">Ginny Weasley</Link> is abducted, Harry and Ron
              uncover the chamber's secrets and enter it. Harry discovers that Ginny was possessed by an old diary, inside which the memory of Tom
              Marvolo Riddle, Voldemort's youner self, resides. On Voldemort's behalf, Ginny opened the chamber and unleashed the <Link>basilisk</Link>,
              an ancient monster that kills or petrifies those who make direct or indirect eye contact, respectively. With the help of Dumbledore's
              <Link> phoenix</Link>, Fawkes, and the <Link>Sword of Gryffindor</Link>, Harry slays the basilisk and destroys the diary.
            </p>

            <h3 className="article-heading-3" id="1.2">Voldemort returns</h3>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Style and allusions"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Genre and style</h3>

            <h3 className="article-heading-3" id="2.2">Allusions</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Themes"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Development history"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Publishing history</h3>

            <h3 className="article-heading-3" id="4.2">Translations</h3>

            <h3 className="article-heading-3" id="4.3">Cover art</h3>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Commercial success</h3>

            <h3 className="article-heading-3" id="5.2">Literary criticism</h3>

            <h3 className="article-heading-3" id="5.3">Themes critique</h3>

            <h3 className="article-heading-3" id="5.4">Controversies</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Legacy"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Influence on literature</h3>

            <h3 className="article-heading-3" id="6.2">Cultural impact</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Awards, honors, and recognition"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Adaptations"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Films</h3>
            <h4 className="article-heading-4" id="8.1.1">Spin-off prequels</h4>

            <h3 className="article-heading-3" id="8.2">Games</h3>

            <h3 className="article-heading-3" id="8.3">Stage production</h3>

            <h3 className="article-heading-3" id="8.4">Television</h3>

            <h3 className="article-heading-3" id="8.5">Full-cast audiobook</h3>
          </div>
        </div>
        <div>
          <Heading2 id={9} title={"Attractions"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={10} title={"Supplementary works"} />
          <div>

          </div>
        </div>
      </main>
    </>
  )
}

export default HarryPotterBooks;