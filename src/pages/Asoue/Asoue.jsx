import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Collapse from '../../components/Collapse'
import TableAsoue from '../../components/TableAsoue'
import { asoue } from '../../data/dataAsoue'

const Asoue = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Background</a></li>
          <Collapse 
            id="2"
            item="Series overview"
            sub={[
              {id: "2.1", title: "Plot"},
              {id: "2.2", title: "Setting"},
              {id: "2.3", title: "Characters"}
            ]}
          />
          <Collapse 
            id="3"
            item="Literary analysis and themes"
            sub={[
              {id: "3.1", title: "Allusions"},
              {id: "3.2", title: "Genre"},
              {id: "3.3", title: "Morality in the series"},
              {id: "3.4", title: "Narration style"},
              {id: "3.5", title: "Repetition"},
              {id: "3.6", title: "Secrets in the series"},
              {id: "3.7", title: "Clues"}
            ]}
          />
          <Collapse 
            id="4"
            item="Distribution"
            sub={[
              {id: "4.1", title: "Books"},
              {id: "4.2", title: "Appearance"},
              {id: "4.3", title: "Accompanying books"},
              {id: "4.4", title: "All the Wrong Questions"}
            ]}
          />
          <Collapse 
            id="5"
            item="In other media"
            sub={[
              {id: "5.1", title: "Television"},
              {id: "5.2", title: "Film"},
              {id: "5.3", title: "Video game"},
              {id: "5.4", title: "Board games"},
              {id: "5.5", title: "Card games"},
              {id: "5.6", title: "Audio", sub2: [
                {id: "5.6.1", title: "Audio books"},
                {id: "5.6.2", title: "Album"}
              ]}
            ]}
          />
          <Collapse 
            id="6"
            item="Reception"
            sub={[
              {id: "6.1", title: "Reviews"},
              {id: "6.2", title: "Criticism"},
              {id: "6.3", title: "Sales"},
              {id: "6.4", title: "Awards"},
              {id: "6.5", title: "Book lists"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>A Series of Unfortunate Events</li>
        </ul>
        <div>
          <h1 className="article-heading">A Series of Unfortunate Events</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/A_Series_of_Unfortunate_Events_Logo.jpg" 
            alt="A Series of Unfortunate Events logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            A Series of Unfortunate Events is a series of thirteen children's novels written by American author <Link>Daniel Handler</Link> under the pen
            name <Link>Lemony Snicket</Link>. The books follow the turbulent lives of orphaned siblings <Link>Violet</Link>, <Link>Klaus</Link>, and
            <Link> Sunny Baudelaire</Link>. After their parents' death in a fire, the children are placed under the care of a murderous villain,
            <Link> Count Olaf</Link>, who attempts to steal their inheritance and causes numerous disasters with the help of his accomplices as the
            children attempt to flee. As the plot progresses, the Baudelaires gradually confront further mysteries surrounding their family and deep
            conspiracies invloving a secret society, which also involves Olaf and Snicket, the author's own fictional self-insert.
          </p>
          <p>
            Characterized by Victorian Gothic tones and absurdist textuality, the books are noted for their dark humor, sarcastic storytelling, and
            anachronistic elements, as well as frequent cultured and literary allusions. They have been classifed as postmodern and metafictional
            writing, with the plot evolution throughout the later novels being cited as an exploration of the psychological process of the transition
            from the innocnce of childhood to the moral complexity of maturity. As the series progresses, the Baudelaires must face the reality that
            their actions have become morally ambigious, blurring the lines between which characters should be reas as "good" or "evil".
          </p>
          <p>
            Since the release of the first novel, <Link>The Bad Beginning</Link>, in September 1999, the books have gained significant popularity,
            critical acclaim, and commercial success worldwide, spawning a <Link>film</Link>, a <Link>video game</Link>, assorted merchandise, and a
            <Link> television series</Link>. The main thirteen books in the series have collectively sold more than 60 million copies and have been
            translated into 41 languages. Several companion books and set in the same universe of the series have also been released, including
            <Link>Lemony Snicket: The Unauthorized Autobiography</Link>, <Link>The Beatrice Letters</Link>, and the noir prequel tetralogy
            <Link>All the Wrong Questions</Link>, which chronicled Snicket's childhood.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Background</h2>
          <div>
            <p>
              Prior to the publication of A Series of Unfortunate Events, Handler had never written for children. According to an interview with Handler,
              he was encouraged to try writing children's books by his friend and editor, Susan Rich. In a separate author interview, Daphne Merkin wrote
              that Handler adapted a manuscript for a "mock-gothic" book originally inded for adults into a series more suited for children. Handler
              invented the pseudonym "Lemony Snicket" as an inside joke among friends years before the publication of A Series of Unfortunate Events.
            </p>
            <p>
              Handler acknowledges Edward Gorey and Roald Dahl as influences for his writing style in the series. The first book in the series, The Bad
              Beginning, was released on September 30, 1999.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Series overview</h2>
          <div>
            <h3 className="article-heading-2" id="2.1">Plot</h3>
            <h3 className="article-heading-2" id="2.2">Setting</h3>
            <p>
              The books seem to be set in an alternate, "timeless" world with stylistic similarities to both the 19th century and the 1930s, though
              with contemporary, and seemingly anachronistic scientific knowledge. For instance, in <Link>The Hostile Hospital</Link>, the
              Baudelaire children send a message via Morse code on a telegraph, yet the general store they are in has fiber-optic cable for sale. An
              "advanced computer" appears in <Link>The Austere Academy</Link>.
            </p>
            <p>
              Danielle Russell, a professor at Glendale College, argues that the settings are reflective of familiar places, but are "bizarre"
              enough that young readers feel distanced from the world of the Baudelaires. The setting of the world has been compared to Edward
              Scissorhands in that it is "suburban gothic". While the film version sets the Baudelair mansion in the city of Boston, Massachusetts,
              real places rarely appear in the books, though some are mentioned. For example, in <Link>The Ersatz Elevator</Link>, a book in
              <Link> Jerome</Link> and <Link>Esmé Squalor</Link>'s library was titled Trout, in France They're Out. There are also references to the
              fictional nobility of North American regions, specifically the Duchess of Winnipeg and the King of Arizona.
            </p>
            <h3 className="article-heading-2" id="2.3">Characters</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Literary analysis and themes</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Allusions</h3>
            <p>
              While the books are marketed primarily to children, the series features numerous references that adults or older children are more
              likely to undertand.
            </p>
            <p>
              Many of the characters' names allude to other fictional works or real people with macabre connections. For example, The Reptile Room
              includes allusions to Monty Python (the Baudelaire children's unclue Monty has a large snake collection that includes a python, and
              a reference to the "Self-Defense Against Fresh Fruit" sketch). The Baudelaire orphans are named after Charles Baudelaire; Violet's name
              also comes from the T.S. Elliot's poem The Waste Land, specifically its verses concerning the "violet hour", and Sunny and Klaus take
              their first names from Claus and Sunny von Bülow, while Mr. Poe is a reference to Edgar Allan Poe (his sons are named Edgar and Albert).
              In the seventh installment, The Vile Village, Count Olaf's disguise, Detective Dupin, is an allusion to C. Augustus Dupin, a fictional
              detective created by Edgar Allan Poe.
            </p>
            <p>
              <Link> Isadora and Duncan Quagmire</Link> are named after Isadora Duncan, a notorious dancer also remembered for her unusual death by
              strangulation when her scarf entangled around the wheels of the open car in which she was a passenger. In the fourth book, The Miserable
              Mill, <Link>Dr. Georgina Orwell</Link> is a reference to British author George Orwell. Orwell finished his famous book <Link>1984</Link>
              in 1948, and in the sixth book, The Ersatz Elevator, it is not clear if the skyscraper in which Esmé and Jerome Squalor live has 48 or 84
              stories. The Squalors' names reference <Link>Jerome David "J.D." Salinger</Link> and his short story for Esmé - with Love and Squalor.
              While in an auction on which the plot hinges, Lot 49 is skipped, i.e. not cried, an allusion to Thomas Pynchon's The Crying of Lot 49.
              Both Salinger and Pynchon were reputed not to be actual persons at one time. The ninth book in the series, The Carnivorous Carnival, takes
              place at Caligari Carnival; the carnival's name is a nod to the 1920 silent horror film The Cabinet of Dr. Caligari. Also in the ninth
              book, Hugo the Hunchback's name is an allusion to French author Victor Hugo, who wrote the famous book The Hunchback of Notre Dame.
              Subsequently, many of the inhabitants of the island the Baudelaires find themselves on in The End are named after characters from The
              Tempest, a play by William Shakespeare, while some are named after characters from Robinson Crusoe, Moby-Dick, and other after general
              nautical or island-based literature. The Fire and the Sugar Bowl was inspired by We Have Always Lived in the Castle by Shirley Jackson.
            </p>
            <p>
              The name Beatrice, Snicket's dedicatee, may be an allusion to the poem La Béatrice by Charles Baudelaire. The poem references an "actor
              without a job", like the actor Count Olaf. The poem also begins with the line "In a burnt, ash-grey land without vegetation", similar to
              the Baudelaire mansion burning down at the beginning of the series. The name Beatrice could also be an allusion to Italian poet Dante.
              Dante dedicated all of his works to "Beatrice", with whom he was obsessed, and who was also dead, like Snicket's Beatrice.
            </p>
            <p>
              In the final book, in an allusion to the Book of Genesis, a snake offers the children a life-giving apple (which the other characters in
              The End refuse to eat despire the fact that it is a cure for a fatal illness).
            </p>
            <h3 className="article-heading-3" id="3.2">Genre</h3>
            <p>
              This series is most commonly classified as children's fiction, but the books have also been classified in more specific genres such as
              gothic fiction, or some variety thereof, whether it is mock-gothic, a satire of gothic literature, neo-Victorian or "suburban gothic".
              The series has been described as absurdist fiction, because of its strange characters, improbable storylines, and black comedy.
            </p>
            <p>
              The books can be categorized as mystery novels. According to Chris McGee, the Baudelaires spend the series trying to uncover the truth
              about their parents' deaths. He also likens the series to noir fiction. Danielle Russell argues that mysteries are solved for the reader
              by their end. So, the lack of clear answers in The End does not align with this genre.
            </p>
            <p>
              Although the series does not neatly fit into the genres of fantasy or science fiction, it does feature occasional instances of whimsy, the
              supernatural, and steampunk technology. There is a constant theme of some form of ate guiding the characters throughout the books. The
              Baudelaires are capable of communicating with their infant sister, as well as with reptiles. The Reptile Room houses a variety of
              fantastical reptiles, inclund the Incredibly Deadly Viper, which is extremely intelligent and seems to have a humanoid consciousness.
              There is a mysterious aquatic monster known as The Great Unknown.
            </p>
            <p>
              In a paper for the Maria Curie-Sklodowska University, Barbara Kaczyńska claims that "realism" is absent within the series. Russell disputes
              this, noting that throughout the novels the narrator insists that the stories he recounts are completely true. She believes that this
              strong level of realism discredits any argument that the books can be classified as fantasies.
            </p>
            <h3 className="article-heading-3" id="3.3">Morality in the series</h3>
            <p>
              Social commentary is a major element in the books, which often comment on the seemingly inescapable follies of humaan nature. The books
              consistently present the Baudelaire children as free-thinking and independent, while the adults around them obey authority and succumb to
              mob psychology, peer pressure, ambition, and other social ills. A high account is given to learning: those who are "well-read" are often
              sympathetic characters, while those who shun knowledge are villains.
            </p>
            <p>
              Tison Pugh argues that the central issue of the series is whether the Baudelaires are morally good and distinct from the villains of the
              story, or whether their actions make them as morally ambigious as the so-called evil characters.
            </p>
            <p>
              Evil characters are shown to have sympathetic characteristics. Similarly, good characters' flaws become major problems. The books highlight
              the inevitability of temptation and moral decision making, regardless of the external situation. This indicates that regardless of one's
              outside influences, one always has the final choice in whether to be good or bad. Characters that make brave decisions to fight back and
              take charge are almost always "good", and characters that just go along end up as "bad." However, some characters suggest that people are
              neither good nor bad, but a mix of both. Rebecca-Anna C. Do Rozario notes the nihilistic tone of the series, claiming the lines between
              good and evil acts become blurred to the point where they become meaningless.
            </p>
            <h3 className="article-heading-3" id="3.4">Narration style</h3>
            <p>
              The series is narrated by Lemony Snicket, the pseudonym of Daniel Handler. He dedicates each of his works to his deceased love interest,
              Beatrice, and often attempts to dissuade the reader from reading the Baudelaires' unfortunate story. Handler has referred to Lemony
              Snicket as a "character" who also doubles as the series' narrator. Some details of his life are explained somewhat in a supplement to the
              series, <Link>Lemony Snicket: The Unauthorized Autobiography</Link>.
            </p>
            <p>
              When Snicket describes a word the reader may be unfamiliar with, he typically follows it with the saying "a word which here means ...."
              He sometimes follows this phrase with a humorous definition, or one that is relevant only to the events at hand (for example, he describes
              "adversity" as meaning "Count Olaf").
            </p>
            <p>
              Lemony Snicket continously maintains that the story is true and that it is his "solemn duty" to record it. Snicket often goes off into
              humorous or satirical asides, discussing his opinion or personal life.
            </p>
            <p>
              Lemony Snicket's narration and commentary are characteristically cynical and despondent. In the blurb for each book, Snicket warns of the
              misery the reader may experience in reading about the Baudelaire orphans and suggests abandoning the books altogether. However, he also
              provides ample comic relief with wry, dark humor. Snicket's narration has been described as "self-conscious" and "post-modern". Daphne
              Merkin characterized Snicket's narration style as "droll and detached."
            </p>
            <p>
              When describing a character whom the Baudelaires have met before, Snicket often describes the character first and does not reveal the name
              of the character until they have been thoroughly described. Lemony Snicket starts each book with a "post-modern dissection of the reading
              experience" before linking it back to how he presents the story of the Baudelaires and what their current situation is. Snicket often uses
              alliteration to name locations, as well as book titles, throughout the story. Many of the books start with a theme being introduced that
              is continually referenced throughout the book, such as the repeated comparisons of the words "nervous" and "anxious" in The Ersatz
              Elevator, the consistent use of the phrase "where there's smoke, there's fire" in The Slippery Slope, and the descriptions of the water
              cycle in The Grim Grotto.
            </p>
            <h3 className="article-heading-3" id="3.5">Repetition</h3>
            <p>
              The plots of the first seven books follow the same basic pattern: the Baudelaires go to a new guardian in a new location, where Count
              Olaf appears and attempts to steal their fortune; although the guardian is killed off, Olaf's schemes are foiled. The books following
              pick up where the previous book ended. There are thirteen books in the series and each book has thirteen chapters. The last book in the
              series, The End, contains two stories: The End, which has 13 chapters, and a separate "book" that is titled Chapter Fourteen. The
              location of each book's events is udually identified in the book's title; the first twelve book titles are generally alliterative.
            </p>
            <h3 className="article-heading-3" id="3.6">Secrets in the series</h3>
            <p>
              After the fourth book, Barbara Kaczyńska argues that secrets play a more important role in the story. In the final book, The End, the
              concept is especially important, as demonstrated by a several-page-long discussion of the phrase "in the dark." The children hear of a
              massive schism within the organization of V.F.D., which was once noble but became filled with corruption and split into two sides,
              "volunteers" and "villains." While many of the critical plot points are given anwers, Snicket explains that no story can be fully devoid
              of questions as every story is interwinded with numerous others and every character's history is shared in a great web of mysteries and
              unfortunate events tat make up the world's legacy, making it impossible for anyone to know all the answers to every qyestion. The
              Baudelaire children and Count Olaf's story is said to be merely a fragment of a much bigger story between numerous characters with the
              central connection being the orgnization of V.F.D.
            </p>
            <h3 className="article-heading-3" id="3.7">Clues</h3>
            <p>
              There is a full-page picture at the end of each book, showing a hint or clue about the content on the next book. This may show a flyer
              or piece of paper drifting by, though sometimes by a significant object: a snake appears at the end of The Bad Beginning, referring to
              Montgomery's snake collection in the following book. The same picture is used at the start of the succeeding book. This practice
              continued at the end of The End which shows a boat sailing off into the sunset and at the start of Chapter Fourteen. The picture at the
              end of Chapter Fourteen includes a shape of a question mark.
            </p>
            <p>
              Following the picture is a letter to the editor, which explains to the editor how to get a manuscript of the next book. Snicket is
              writing from the location of the next book and usually reveals its title. Snicket notes that the editors will find various objects
              along with the manuscript, all of them having some impact in the story. Starting with the fourth book (which previews the fifth),
              each letter has a layout relating to the next book, such as torn edges, fancy stationery, sopping wet paper, or telegram format. The
              letters change dramatically starting with the letter at the end of The Hostile Hospital, for this preview letter, the letter is ripped
              to shreds and only a few scraps remain. The remaining letters are difficult to read, and some do not reveal the title. The final letter
              appears at the end of The End and simply has "The end of THE END can be found at the end of THE END." There is no letter after Chapter
              Fourteen.
            </p>
            <p>
              Each book begins with a dedication to a woman named Beatrice, and references to her are made by Snicket throughout the series, describing
              her as the woman he still loves while emphasizing the fact that she apparently died long ago. At the end of the Chapter Fourteen epilogue,
              it is revealed that Beatrice was the Baudelaires' late mother, who married their after after an unknown event caused her to return
              Snicket's engagement ring, alongside a two-hundred-page book explaining all the reasons she could not marry him.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Distribution</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Books</h3>
            <div className="row">
              {asoue.map((asoue) => (
                <div className="col-4" key={asoue.id}>
                  <Card 
                    route={asoue.route}
                    img={asoue.img}
                    alt={asoue.title}
                    imgStyle="card-img-vertical"
                    title={asoue.title}
                  />
                </div>
              ))}
            </div>
            <h3 className="article-heading-3" id="4.2">Appearance</h3>
            <p>
              In an article about children's literature, Bruce Butt describes the hardcover books as "elegant" and "collectible". He noted that the
              endpapers and overall book design resemble Victorian-era novels. Danielle Russell argues that the visual stylization of the books adds to
              their sense of timelessness. The hardcover books were printed with a deckle edge.
            </p>
            <p>
              There was an initial paperback release of the series, featuring restyled covers, new illustrations, and a serial supplement entitled The
              Cornucopian Cavalcade with The Bad Beginning: or, Orphans!, The Reptile Room: or, Murder!, and The Wide Window: or, Disappearance!.
              However, the release was stopped after the third.
            </p>
            <h3 className="article-heading-3" id="4.3">Accompanying books</h3>
            <h3 className="article-heading-3" id="4.4">All the Wrong Questions</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">In other media</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Television</h3>
            <h3 className="article-heading-3" id="5.2">Film</h3>
            <h3 className="article-heading-3" id="5.3">Video game</h3>
            <h3 className="article-heading-3" id="5.4">Board games</h3>
            <h3 className="article-heading-3" id="5.5">Card games</h3>
            <h3 className="article-heading-3" id="5.6">Audio</h3>
            <h4 className="article-heading-4" id="5.6.1">Audio books</h4>
            <h4 className="article-heading-4" id="5.6.2">Album</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Reviews</h3>
            <h3 className="article-heading-3" id="6.2">Criticism</h3>
            <h3 className="article-heading-3" id="6.3">Sales</h3>
            <h3 className="article-heading-3" id="6.4">Awards</h3>
            <h3 className="article-heading-3" id="6.5">Book lists</h3>
          </div>
        </div>
        <div>
          <TableAsoue />
        </div>
      </main>
    </>
  )
}

export default Asoue;