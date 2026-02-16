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
            <p>
              In the third novel, <Link to="/harry_potter/harry_potter_and_the_prisoner_of_azkaban">Harry Potter and the Prisoner of Azkaban</Link>,
              Harry learns that he is targeted by <Link to="/harry_potter/sirius_black">Sirius Black</Link>, an escaped convict who allegedly assisted
              in his parents' murder. <Link>Dementors</Link>, creatures that feed on happiness, search for Sirius and guard the school. As Harry
              struggles with his reaction to the dementors, he reaches out to <Link to="/harry_potter/remus_lupin">Remus Lupin</Link>, a new professor
              who teaches him the <Link>Patronus charm</Link>. On a windy night, Ron is dragged by a black dog into the <Link>Shrieking Shack</Link>, a
              haunted house, and Harry and Hermione follow. The dog is revealed to be Sirius Black. Lupin enters the shack and explains that Sirius was
              James Potter's best friend; he was framed by another friend of James, <Link>Peter Pettigrew</Link>, who hides as Ron's pet rat, Scabbers.
              As the full moon rises, Lupin transforms into a werewolf and bounds away, and the group chase after him. They are surrounded by dementors,
              but are saved by a figure resembling James who casts a stag Patronus. This is later revealed to be a future version of Harry, who travelled
              back in time with Hermione using a device called a <Link>Time Turner</Link>. The duo help Sirius escape on a <Link>Hippogriff</Link>, while
              Pettigrew escapes.
            </p>

            <h3 className="article-heading-3" id="1.2">Voldemort returns</h3>
            <p>
              In Harry's fourth year of school (detailed in <Link to="/harry_potter/harry_potter_and_the_goblet_of_fire">Harry Potter and the
              Goblet of Fire</Link>), Hogwarts hosts the <Link>Triwizard Tournament</Link>, a contest between Hogwarts and the schools Beauxbatons and
              Durmstrang. Harry is unwillingly entered into the contest, becoming Hogwarts' second participant after <Link>Cedric Diggory</Link>, an
              unusual occurrence that causes his friends to distance themselves from him. Harry claims the Triwizard Cup with Cedric, but he is
              teleported to a graveyard where Pettigrew kills Cedric, then resurrects Voldemor unsing Harry's blood. Voldemort convenes his supporters,
              the <Link>Death Eaters</Link>, and Harry manages to escape after a duel with Voldemor. Upon returning to Hogwarts, it is revealed that a
              Death Eater, <Link>Barty Crouch, Jr</Link>, in disguise as the new Defense Against the Dark Arts professor,
              <Link> Alastor "Mad-Eye" Moody</Link>, engineered Harry's entry into the tournament, secretly helped him, and had him teleported to
              Voldemort.
            </p>
            <p>
              In the fifth book, <Link to="/harry_potter/harry_potter_and_the_order_of_the_phoenix">Harry Potter and the Order of the Phoenix</Link>,
              the <Link>Ministry of Magic</Link> refuses to believe that Voldemort has returned. Dumbledore re-activates the <Link>Order of the
              Phoenix</Link>, a secret society to counter Voldemort; meanwhile, the Ministry tightens control of Hogwars by appointing
              <Link> Dolores Umbridge</Link> as High Inquisitor of Hogwarts, and she gradually increases her powers. When Umbridge bans practical
              teaching of Defense Against the Dark Arts, Harry, Ron, and Hermione form "<Link>Dumbledore's Army</Link>", a secret group to continue the
              teachings. Harry has recurring dreams of a dark corridor in the Ministry of Magic, eventually dreaming that Sirius is being tortured there.
              He races to the Ministry with his friends, but it is a trap, planted in his head by Voldemort. The group are attacked by Death Eaters
              and saved by the Order of the Phoneix, but Sirius is killed in the battle. A duel between Dumbledore and Voldemort convinces the ministry
              of Voldemort's return. A prophecy concerning Harry and Voldemort is revealed: one must die at the hands of the other.
            </p>
            <p>
              In the sixth book, <Link to="/harry_potter/harry_potter_and_the_half_blood_prince">Harry Potter and the Half-Blood Prince</Link>, Snape
              teaches the Defense Against the Dark Arts class while <Link>Horace Slughorn</Link> becomes the Potions master. Harry finds an old textbook
              with annotations by the Half-Blood Prince, due to which he achieves success in Potions class. Harry also takes private sessions with
              Dumbledore, viewing memories about the early life of Voldemort in a device called a <Link>Pensieve</Link>. Harry learns from a drunken
              Slughorn that he used to teach Tom Riddle, and that Voldemort divided his soul into pieces, creating a series of <Link>Horcruxes</Link>,
              Harry and Dumbledore travel to a distant lake to destroy a Horcrux; they succeed, but Dumbledore weakens. On their return, they find
              Draco Malfoy and Death Eaters attacking the school. The book ends with the killing of Dumbledore by Professor Snape, the titular Half-Blood
              Prince.
            </p>
            <p>
              In <Link to="/harry_potter/harry_potter_and_the_deathly_hallows">Harry Potter and the Deathly Hallows</Link>, the seventh and final novel
              in the series, Lord Voldemor gains control of the Ministry of Magic. Harry, Ron, and Hermione learn about the <Link>Deathly Hallows</Link>,
              legendary items that lead to mastery over death. The group infiltrate the ministry, where they steal a locket Horcrux, and visit
              <Link> Godric's Hollow</Link>, where they are attacked by <Link>Nagini</Link>, Voldemort's snake. A silver doe Patronus leads them to the
              Sword of Gryffindor, with which they destroy the locket. They steal a Horcrux from Gringotts and travel to Hogwarts, culminating in a
              battle with the Death Eaters. Snape is killed by Voldemort out of paranoia, but he lends Harry his memories before he dies. Harry learns
              that Snape was always loyal to Dumbledore, and that Harry is himself a Horcrux. Harry surrenders to Voldemort and is hit with the killing
              curse; however he is not killed as the protection Lily gave him lives on within Voldemort since he used Harry's blood to ressurect himself.
              The defenders of Hogwarts continue to fight on; Harry comes back from limbo, faces Voldemor and kills him.
            </p>
            <p>
              An epliogue titled "Nineteen Years Later" describe s the lives of the surviving characters and the impact of Voldemort's death. Harry and
              Ginny are married with three <Link>children</Link>, and Ron and Hermione are married with <Link>two children</Link>.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Style and allusions"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Genre and style</h3>
            <p>
              The novels fall into the genre of fantasy literature, and qualify as a type of fantasy called "urban fantasy", "contemporary fantasy", or
              "low fantasy". They are mainly dramas, and maintain a fairly serious and dark tone throughout, though they do contain some notable
              instances of tragicomedy and black humor. In many respects, they are also examples of the bildungsroman, or coming of age novel, and
              contain elements of mystery, adventure, horror, thriller, and romance. The books are also, in the words of Stephen King, "shrewd mystery
              tales", and each book is constructed in the manner of a Sherlock Holmes-style mystery adventure. The stories are told from a third person
              limited point of view with very few exceptions (such as the opening chapters of Philosopher's Stone, Goblet of Fire, and Deathly Hallows
              and the first two chapters of Half-Blood Prince).
            </p>
            <p>
              The series can be considered part of the British children's boarding school genre, which includes Rudyard Kipling's Stalky & Co., Enid
              Blyton's Malory Towers, St. Claire's and the Naightiest Girl series, and Frank Richard's Billy Bunter novels: the Harry Potter books are
              predominantly set in Hogwarts, a fictional British boarding school for wizards, where the curriculum includes the use of magic. In this
              sense they are "in a direct line of descent from Thomas Hughes's Tom Brown's School Days and other Victorian and Edwardian novels of
              British public school life", though they are, as many note, more contemporary, grittier, darker, and more mature than the typical boarding
              school novel, addressing serious themes of death, love, loss, prejudice, coming-of-age, and the loss of innocence in a 1990s British
              setting.
            </p>
            <p>
              In Harry Potter, Rowling juxtaposes the extraordinary against the ordinary. Her narrative features two worlds: a contemporary world
              inhabited by non-magical people called Muggles, and another featuring wizards. It differs from typical portal fantasy in that its magical
              elements stay grounded in the mundane. Paintings move and talk; books bite readers; letters shout messages; and maps show live journeys,
              making the wizarding world both exotic and familiar. This blend of realistic and romantic elements extends to Rowling's characters. Their
              names are often onomatopoeic: Malfoy is difficult, Filch is unpleasant, and Lupin is a werewolf. Harry is ordinary and relatable, with
              down-to-earth features such as wearing broken glasses; the scholar Roni Natov terms him as "everychold". These elements serve to highlight
              Harry when he is heroic, making him both an everyman and a fairytale hero.
            </p>
            <p>
              Each of the seven books is set over the course of one school year. Harry struggles with the problems he encounters, and dealing with them
              often involves the need to violate some school rules. If students are caught breaking rules, they are often disciplined by Hogwarts
              professors. The stories reach their climax in the summer term, near or just after final exams, when events escalate far beyond
              in-school squabbles and struggles, and Harry must confront either Voldemort or one of his followers, the Death Eaters, with the stakes a
              matter of life and death, a point underlined, as the series progresses, by characters being killed in each of the final four books. In the
              aftermath, he learns important lessons through exposition and discussions with head teacher and mentor Albus Dumbledore. The only exception
              to this school-centered setting is the final novel, Harry Potter and the Deathly Hallows, in which Harry and his friends spend most of
              their time away from Hogwarts, and only return there to face Voldemort at the denoument.
            </p>

            <h3 className="article-heading-3" id="2.2">Allusions</h3>
            <p>
              The Harry Potter stories feature imagery and motifs drawn from Arthurian myth and fairytales. Harry's ability to draw the Sword of
              Gryffindor from the <Link>Sorting Hat</Link> resembles the Arthurian sword in the stone legend. His life with the Dursleys has been
              compared to Cinderella. Hogwarts resembles a medieval university-cum-castle with several professors who belong to an Order of Merlin; Old
              Professor Binns still lectures about the international Warlock Convention in 1289; and a real historical person, a 14th-century scribe,
              Sir Nicolas Flamel, is described as a holder of the Philosopher's Stone. Other medieval elements in Hogwarts include coats-of-arms and
              medieval weapons on the walls, letters written on parchment and sealed with wax, the Great Hall of Hogwarts, which is similar to the
              Great Hall of Camelot, the use of Latin phrases, the tents put up for Quidditch tournaments, which are similar to the "marvellous tents"
              put up for knightly tournaments, imaginary animals like dragons and unicorns that exist around Hogwarts, and the banners with heraldic
              animals for the four Houses of Hogwarts.
            </p>
            <p>
              Many of the motifs of the Potter stories, such as the hero's quest invoking objects that confer invisibility, magical animals and trees, a
              forest full of danger and the recognition of a character based upon scars, are drawn from medieval French Arthurian romances. Other aspects
              borrowed from French Arthurian romances include the use of owls as messengers, werewolves as characters, and white deer. The American
              scholars Heather Arden and Kathryn Lorenz in particular argue that many aspects of the Potter stories are inspired by a 14th-century French
              Arthurian romance, Claris et Laris, writing of the "startling" similarities between the adventures of Potter and the knight Claris. Arden
              and Lorenz noted that Rowling graduated from the University of Exeter in 1986 with a degree in French literature and spent a year living in
              France afterwards.
            </p>
            <p>
              Like C. S. Lewis's The Chronicles of Narnia, Harry Potter also contains Christian symbolism and allegory. The series has been viewed as a
              Christian moral fable in the pschomeachia tradition, in which stand-ins for good and evil fight for supremacy over a person's soul.
              Children's literature critic Joy Farmer sees parallels between Harry and Jesus Christ. Comparing Rowling with Lewis, she argues that
              "magic is both authors' ways of talking about spiritual reality". According to Maria Nikolajava, Christian imagery is particularly strong
              in the final scenes of the series: Harry dies in self-sacrifice and Voldemort delivers an "ecce homo" speech, after which Harrys is
              resurrected and defeats his enemy.
            </p>
            <p>
              Rowling stated that she did not reveal Harry Potter's religious parallels in the beginning because doing so would have "give[n] too much
              away to fans who might then see the parallels". In the final book of the series, Harry Potter and the Deathly Hallows, Rowling makes the
              book's Christian imagery more explicit, quoting both Matthew 6:21 and 1 Corinthians 15:26 (King James Version) when Harry visits his
              parents' graves. Hermione Granger teaches Harry Potter that the meaning of these verses from the Christian Bible are "lving beyond death.
              Living after death", which Rowling states "epitomize the whole series". Rowling also exhibits Christian values in developing Albus
              Dumbledore as a God-like character, the divine, trusted leader of the series, guiding the long-suffering hero along his quest. In the
              seventh novel, Harry speaks with and questions the deceased Dumbeldore much like a person of faith would talk to and question God.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Themes"} />
          <div>
            <p>
              Harry Potter's overarching theme is death. In the first book, when Harry looks into the Mirror of Erised, he feels both joy and "a terrible
              sadness" at seeing his desire: his parents, alive and with him. Confronting their loss is central to Harry's character arc and manifests in
              different ways through the series, such as in his struggles with Dementors. Other characters in Harry's life die; he even faces his own
              death in Harry Potter and the Deathly Hallows. The series has an existential perspective, Harry must grow mature enough to accept death.
              In Harry's world, death is not binary but mutable, a state that exists in degrees. Unlike Voldemort, who evades death by separating and
              hiding his soul in seven parts, Harry's soul is whole, nourished by friendship and love.
            </p>
            <p>
              Love distinguishes Harry and Voldemort. Harry is a hero because he loves others, even willing to accept death to save them; Voldemort is a
              villain because he does not. Harry carries the protection of his mother's sacrifice in his blood; Voldemort, who wants Harry's blood and
              the protection it carries, does not understand that love vanquishes death.
            </p>
            <p>
              Rowling has spken about thematising death and loss in the series. Soon after she started writing Philosopher's Stone, her mother died; she
              said that "I really think from that momemnt on, death became a central, if not the central theme of the seven books". Rowling has
              described Harry as "the prism through which I view death", and further stated that "all of my characters are defined by their attitude to
              death and the possibility of death".
            </p>
            <p>
              While Harry Potter can be viewed as a story about good vs. evil, its moral divisions are not absolute. First impressions of characters
              are often misleading. Harry assumes in the first book that Quirrell is on the side of good because he opposes Snape, who appears to be
              malicious; in reality, Quirrell is an agent of Voldemort, while Snape is loyal to Dumbledore. This pattern later recurs with Moody and
              Snape. In Rowling's world, good and evil are choices rather than inherent attributes: second chances and the possibility of redemption are
              key themes of the series. This is reflected in Harry's self-dobut after learning his connection to Voldemort, such as Parseltongue; and
              prominently in Snape's charactersization, which has been described as complex and multifaceted. In some scholars' view, while Rowling's
              narrative appears on the surface to be about Harry, her focus may actually be on Snape's morality and character arc.
            </p>
            <p>
              Rowling said that, to her, the moral significance of the tales seems "blindingly obvious". In the fourth book, Dumbledore speaks of a
              "choice between what is right and what is easy"; Rowling views this as a key theme, "because that ... is how tyranny is started, with
              people being apathetic and taking the easy route and suddenly finding themselves in deep trouble".
            </p>
            <p>
              Academics and journalists have developed many other interpretations of themes in the books, some more complex than others, and some
              including political subtexts. Themes such as normality, oppression, survival, and overcoming imposing odds have all been considered as
              prevalent throughout the series. Similarly, the theme of making one's way through adolescence and "going over one's most harrowing
              ordeals, and thus coming to terms with them" has also been considered. Rowling has stated that the books comprise "a prolonged argument
              for tolerance, a prolonged plea for an end to bigory" and that they also pass on a message to "question authority and... not assurme that
              the establishment or the press tells you all of the truth".
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Development history"} />
          <div>
            <p>
              In 1990, Rowling was on a crowded train from Manchester to London when the idea for Harry suddenly "fell into" her head. Rowling gives an
              account of the experience on her website saying:
            </p>
            <div className="article-quote">
              <p>
                I had been writing almost continously since the age of six but I had never been so exited about an idea before. I simply sat and
                thought, for four (delayed train) hours, and all the details bubbled up in my brain, and this scrawny, black-haired bespectacled boy who
                did not know he was a wizard became more and more real to me.
              </p>
            </div>
            <p>
              Rowling completed Harry Potter and the Philosopher's Stone in 1995 and the manuscript was sent off to several prospective agents. The
              second agent she tried, Christopher Little, offered to represent her and sent the manuscript to several publishers.
            </p>

            <h3 className="article-heading-3" id="4.1">Publishing history</h3>
            <p>
              After twelve other publishers had rejected Philospher's Stone, Bloomsbury agreed to publish the book. Despite Rowling's statement that she
              did not have any particular age group in mind when beginning to write the Harry Potter books, the publishers initially targeted children
              aged nine to eleven. On the eve of publishing, Rowling was asked by her publishers to adpot a more gender-neutral pen name in order to
              appeal to the main members of this age group, fearing that they would not be interested in reading a novel they knew to be written by a
              woman. She elected to use J. K. Rowling (Joanne Kathleen Rowling), using her grandmother's name as her second name because she has no
              middle name.
            </p>
            <p>
              Harry Potter and the Philosopher's Stone was published by Bloomsbury, the publisher of all Harry Potter books in the United Kingdom, on
              June 26, 1997. It was published in the United States on September 1, 1998 by Scholastic, the American publisher of the books, as Harry
              Potter and the Sorcerer's Stone, after the American rights sold for $105,000, a record amount for a children's book by an unknown author.
              Scholastic feared that American readers would not associate the word "philosopher" with magic, and Rowling suggested the title Harry Potter
              and the Sorcerer's Stone for the American market. Rowling has lader said that she regrets the change.
            </p>
            <p>
              The second book, Harry Potter and the Chamber of Secrets, was originally published in the UK on July 2, 1998 and in the US on June 2, 1999.
              Harry Potter and the Prisoner of Azkaban was published a year later in the UK on July 8, 1999 and in the US on September 8, 1999. Harry
              Potter and the Goblet of Fire was published on July 8, 2000 at the same time by Bloomsbury and Scholastic. Harry Potter and the Order of
              the Phoenix is the longest book in the series, at 766 pages in the UK version and 870 pages in the US version. It was published worldwide
              in English on June 21, 2003. Harry Potter and the Half-Blood Prince was published on July 16, 2005. The seventh and final novel, Harry
              Potter and the Deathly Hallows, was published on July 21, 2007. Rowling herself has stated that the last chapter of the final book (in fact,
              the epilogue) was completed "in something like 1990".
            </p>
            <p>
              Rowling retained rights to digital editions and released them on the Pottermore website in 2012. Vendors such as Amazon displayed the
              ebooks in the form of links to Pottermore, which controlled pricing. All seven Harry Potter novels have been released in unabridged
              audiobook versions, with Stephen Fry reading the British editions and Jim Dale voicing the series for the American editions. On Audible,
              the series has been listened to, as of November 2022, for over a billion hours.
            </p>

            <h3 className="article-heading-3" id="4.2">Translations</h3>
            <p>
              The series has been translated into more than 80 languages, placing Rowling among the most translated authors in history. The books have
              seen translations to diverse languages such as Korean, Armenian, Ukrainian, Arabic, Urdu, Hindi, Bengali, Bulgarian, Welsh, Afrikaans,
              Albanian, Latvian, Vietnamese and Hawaiian. The first volume has been translated into Latin and even Ancient Greek, making it the longest
              published work in Ancient Greek since the novels of Heliodorus of Emesa in the 3rd century AD. The second volume has also been translated
              into Latin.
            </p>
            <p>
              Some of the translators hired to work on the books were well-known authors before their work on Harry Potter, such as Viktor Golyshev, who oversaw the
              Russian translation of the series' fifth book. The Turkish translation of books two to seven was undertaken by Sevin Okyay, a popular literary critic
              and cultural commentator. For reasons of secrecy, translation on a given book could only start after it had been released in English, leading to a lag
              of several months before the translations were available. This led to more and more copies of the English editions being sold to impatient fans in
              non-English speaking countries; for example, such was the clamour to read Harry Potter and the Order of the Phoenix that its English language edition
              became the first English-language book ever to top the best-seller list in France.
            </p>
            <p>
              The United States editions were adapted into American English to make them more understandable to a young American audience.
            </p>

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