import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const AdventureTime = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Main characters</a></li>
          <Collapse 
            id="2"
            item="Television series"
            sub={[
              {id: "2.1", title: "Adventure Time Shorts (2007)"},
              {id: "2.2", title: "Adventure Time (2010-2018)"},
              {id: "2.3", title: "Adventure Time: Distant Lands (2020-2021)"},
              {id: "2.4", title: "Adventure Time: Fionna and Cake (2023-present)"},
              {id: "2.5", title: "Side Quest"},
              {id: "2.6", title: "Heyo BMO"}
            ]}
          />
          <Collapse 
            id="3"
            item="References in other media"
            sub={[
              {id: "3.1", title: "Cameo in Futurama"},
              {id: "3.2", title: "Parody in The Simpsons"}
            ]}
          />
          <Collapse 
            id="4"
            item="Comic series"
            sub={[
              {id: "4.1", title: "Comic books", sub2: [
                {id: "4.1.1", title: "Trade Paperback collections"},
                {id: "4.1.2", title: "Sugary Shorts"},
                {id: "4.1.3", title: "Miniseries"},
                {id: "4.1.4", title: "Fionna and Cake comics"},
              ]},
              {id: "4.2", title: "Graphic novels"}
            ]}
          />
          <Collapse 
            id="5"
            item="Video games"
            sub={[
              {id: "5.1", title: "Adventure Time: Hey Ice King! Why'd You Steal Our Garbage?!! (2012)"},
              {id: "5.2", title: "Adventure Time: Explore the Dungeon Because I Don't Know! (2013)"},
              {id: "5.3", title: "Adventure Time: The Secret of the Nameless Kingdom (2014)"},
              {id: "5.4", title: "Adventure Time: Finn & Jake Investigations (2015)"},
              {id: "5.5", title: "Adventure Time: Pirates of the Enchiridion (2018)"}
            ]}
          />
          <Collapse 
            id="6"
            item="Books"
            sub={[
              {id: "6.1", title: "Epic Tales from Adventure Time (2014-2016)"}
            ]}
          />
          <Collapse 
            id="7"
            item="Merchandise"
            sub={[
              {id: "7.1", title: "Home release"},
              {id: "7.2", title: "Board and card games"},
              {id: "7.3", title: "Lego"},
              {id: "7.4", title: "Other"},
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Adventure Time (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Adventure Time (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2020/09/Adventure-Time-Logo-1280x800.png" 
            alt="Adventure Time logo" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            Adventure Time is an American animated fantasy franchise created by <Link>Pendleton Ward</Link>, set in the post-apocalyptic <Link>Land
            of Ooo</Link>. The franchise originated from a 2007 short produced by <Link>Fred Seibert</Link>'s animation incubator series Random!
            Cartoons at Nickelodeon Animation and aired on Nicktoons Network. After the short became a viral hit on the Internet, Nickelodeon's executives
            passed on its option before <Link>Cartoon Network</Link> commissioned a full-length series from Seibert and Ward, which premiered on
            Cartoon Network on April 5, 2010, and ended on September 3, 2018. The series drew inspiration from a variety of sources, including the
            fantasy role-playing game, Dungeons & Dragons and video games. Alongside the original television series, the characters of the show have been
            featured in a variety of media, including two spin-offs, comic series, card games, and video games.
          </p>
          <p>
            The original series centers on the coming of age of <Link>Finn the Human</Link> and his best friend and adoptive brother <Link>Jake the
            Dog</Link>, a dog with the magical power to change size and shape at will, as they embark on a series of adventures, interacting with
            <Link>Princess Bubblegum</Link>, the <Link>Ice King</Link>, <Link>Marceline the Vampire Queen</Link>, and several others. Different versions
            of the characters inhabit other dimensions throughout the show's multiverse and their personal characteristics can vary from one reality from
            one reality to another. The Adventure Time franchise has received widespread critical acclaim, winning several awards, including eight
            Primetime Emmy Awards, a Peabody Award, three Annie Awards, two British Academy Children's Awards, a Motion Picture Sound Editors Award, and
            a Karrang! Award. The series has also been nominated for three Critic's Choice Television Awards, two Annecy Festival Awards, a TCA Award,
            and a Sundance Film Festival Award, among others. Of the many comic book series in the franchise, one received an Elsner Award and two Harvey
            Awards.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Main characters</h2>
          <div>
            <p>
              Adventure Time follows the adventures of a boy named <Link>Finn the Human</Link> (voiced by <Link>Jeremy Shada</Link>), and his best friend
              and adoptive brother <Link>Jake the Dog</Link> (<Link>John DiMaggio</Link>), who has magical powers to change shape and size at will.
              Pendleton Ward, the series' creator, describes Finn as a "fiery little kid with strong morals". Jake, on the other hand, is based on
              Tripper Harrison, <Link>Bill Murray</Link>'s character in Meatballs. This means while Jake is somewhat care-free, he will "sit [Finn] down
              and give him some decent advice if he really needs it". Finn and Jake live in the post-apocalyptic Land of Ooo, which was ravaged by a
              cataclysmic event known as the "Mushroom War", a nuclear war that destroyed civilization a thousand years before the series' events.
              Throughout the series, Finn and Jake interact with major characters, including the other main characters, Princess Bubblegum (Hynden Walch),
              the sovereign of the Candy Kingdom and a sentient piece of gum; the Ice King (<Link>Tom Kenny</Link>), a menacing but largely misunderstood
              ice wizard and Marceline the Vampire Queen (<Link>Olivia Olson</Link>), a thousand-year-old vampire and rock music enthusiast; and major
              recurring characters, <Link>Lumpy Space Princess</Link> (Pendleton Ward), a melodramatic and immature princess made out of "lumps";
              <Link> BMO</Link> (<Link>Niki Yang</Link>), a sentient video game console-shaped robot that lives with Finn and Jake; and
              <Link> Flame Princess</Link> (<Link>Jessica DiCicco</Link>), a flame elemental and ruler of the Fire Kingdom.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Television series</h2>
          <div>
            <h3 className="article-heading-3" id="2.1">Adventure Time Shorts (2007)</h3>
            <h3 className="article-heading-3" id="2.2">Adventure Time (2010-2018)</h3>
            <h3 className="article-heading-3" id="2.3">Adventure Time: Distant Lands (2020-2021)</h3>
            <h3 className="article-heading-3" id="2.4">Adventure Time: Fionna and Cake (2023-present)</h3>
            <h3 className="article-heading-3" id="2.5">Side Quest</h3>
            <h3 className="article-heading-3" id="2.6">Heyo BMO</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">References in other media</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Cameo in Futurama</h3>
            <h3 className="article-heading-3" id="3.2">Parody in The Simpsons</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Comic series</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Comic books</h3>
            <h4 className="article-heading-4" id="4.1.1">Trade Paperback collections</h4>
            <h4 className="article-heading-4" id="4.1.2">Sugary Shorts</h4>
            <h4 className="article-heading-4" id="4.1.3">Miniseries</h4>
            <h4 className="article-heading-4" id="4.1.4">Fionna and Cake comics</h4>
            <h3 className="article-heading-3" id="4.2">Graphic novels</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Video games</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Adventure Time: Hey Ice King! Why'd You Steal Our Garbage?!! (2012)</h3>
            <h3 className="article-heading-3" id="5.2">Adventure Time: Explore the Dungeon Because I Don't Know! (2013)</h3>
            <h3 className="article-heading-3" id="5.3">Adventure Time: The Secret of the Nameless Kingdom (2014)</h3>
            <h3 className="article-heading-3" id="5.4">Adventure Time: Finn & Jake Investigations (2015)</h3>
            <h3 className="article-heading-3" id="5.5">Adventure Time: Pirates of the Enchiridion (2018)</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Books</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Epic Tales from Adventure Time (2014-2016)</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Merchandise</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Home release</h3>
            <h3 className="article-heading-3" id="7.2">Board and card games</h3>
            <h3 className="article-heading-3" id="7.3">Lego</h3>
            <h3 className="article-heading-3" id="7.4">Other</h3>
          </div>
        </div>
      </main>
    </>
  )
}

export default AdventureTime;