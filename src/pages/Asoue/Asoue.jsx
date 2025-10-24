import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

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

            </p>
            <h3 className="article-heading-3" id="3.2">Genre</h3>
            <h3 className="article-heading-3" id="3.3">Morality in the series</h3>
            <h3 className="article-heading-3" id="3.4">Narration style</h3>
            <h3 className="article-heading-3" id="3.5">Repetition</h3>
            <h3 className="article-heading-3" id="3.6">Secrets in the series</h3>
            <h3 className="article-heading-3" id="3.7">Clues</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Distribution</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Books</h3>
            <h3 className="article-heading-3" id="4.2">Appearance</h3>
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
      </main>
    </>
  )
}

export default Asoue;