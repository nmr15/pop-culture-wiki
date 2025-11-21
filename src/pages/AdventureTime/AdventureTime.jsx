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
          <li className="sidebar-list-item"><a href="#4">Comic series</a></li>
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
            <p>
              Three television series make up the Adventure Time franchise: Adventure Time, Distant Lands, and Fionna and Cake. All series in total
              amount to 302 episodes across 13 seasons of television.
            </p>
            <h3 className="article-heading-3" id="2.1">Adventure Time Shorts (2007)</h3>
            <p>
              The series can trace its origin back to a seven-minute, stand-alone animated short film of the same name (this short would later be
              identified as the show's pilot post facto). <Link>Frederator Studios</Link> identified Ward and the short in 2006, and Ward created the
              short almost entirely by himself (along with <Link>Adam Muto</Link>, the eventual creative director and Ward's college classmate worked as
              his creative companion on the short and future supervising director Larry Leichliter), and concluded its production in early 2006. It was
              first broadcast on Nicktoons Network on January 11, 2007, and was re-broadcast as part of Frederator Studios' anthology show Random!
              Cartoons on December 7, 2008. After its initial release, the video became a viral hit on the Internet.
            </p>
            <h3 className="article-heading-3" id="2.2">Adventure Time (2010-2018)</h3>
            <p>
              <Link>Adventure Time</Link> is a fantasy animated television series created by Pendleton Ward and produced by Frederator Studios for
              <Link> Cartoon Network</Link>. The series follows the adventures of a boy named Finn (Jeremy Shada) and his best friend and adoptive brother
              Jake (John DiMaggio), a dog with the magical power to change size and shape at will. Finn and Jake live in the post-epocalyptic Land of Ooo,
              where they interact with Princess Bubblegum, the Ice King, Marceline, BMO, and others. After the pilot became a viral hit on the Internet,
              <Link>Nickelodeon</Link>'s executives passed on its opetion before Cartoon Network commissioned a full-length series from Fred Seibert and
              Ward, which was previewed on March 11, 2010. The same year, the series premiered on Cartoon Network on April 5, and it ended its eight-year
              run on September 3, 2018.
            </p>
            <h3 className="article-heading-3" id="2.3">Adventure Time: Distant Lands (2020-2021)</h3>
            <p>
              On October 23, 2019, Cartoon Network announced that four hour-long specials, collectively titled <Link>Adventure Time: Distant
              Lands</Link>, would air on <Link>HBO Max</Link>. The first two specials were released in 2020, while the third was released on May 20, 2021.
              The fourth and final episode, "Wizard City", was released on September 2, 2021. The series focuses on new and returning characters in
              previously unexplored areas of the Adventure Time universe.
            </p>
            <h3 className="article-heading-3" id="2.4">Adventure Time: Fionna and Cake (2023-present)</h3>
            <p>
              On August 17, 2021, it was announced that a third series, <Link>Adventure Time: Fionna and Cake</Link>, had been ordered by HBO Max. The
              series follows Finn and Jake's gender-swapped complements, <Link>Fionna the Human</Link> and <Link>Cake the Cat</Link>. The series also
              starts Simon Petrikov, a character who for most of Adventure Time had been identified as the Ice King. Adventure Time: Fionna and Cake
              sees the trio travel throughout the multiverse, while also being chased by "a powerful new antagonist" who is "determined to track them
              down and erase them from existence." Fionna and Cake was renewed for a second season on December 5, 2023.
            </p>
            <h3 className="article-heading-3" id="2.5">Side Quest</h3>
            <p>
              On June 12, 2024, a fourth series, Adventure Time: Side Quests, was announced at the Annecy International Animation Film Festival. The
              series will follow a younger Finn and Jake.
            </p>
            <h3 className="article-heading-3" id="2.6">Heyo BMO</h3>
            <p>
              On June 12, 2024, a preschool series titled Adventure Time: Heyo BMO was announced to be in development at the Annecy International
              Animation Film Festival. The series will follow BMO as they settle into a new neighborhood with new friends.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">References in other media</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Cameo in Futurama</h3>
            <p>
              "<Link>Leela and the Genestalk</Link>" is the twenty-second episode of the <Link>seventh season</Link> of the animated television series
              <Link to="/futurama"> Futurama</Link>, and the 136th episode of the series overall. It aired in the United States on Comedy Central on
              August 17, 2013. The episode features a cameo of Finn and Jake, with John DiMaggio (who voices <Link>Bender</Link> in Futurama) reprising
              his role for the appearance.
            </p>
            <h3 className="article-heading-3" id="3.2">Parody in The Simpsons</h3>
            <p>
              "<Link>Monty Burns' Fleeing Circus</Link>" is the season premier of the <Link>twenty-eighth season</Link> of the animated television series
              <Link to="/simpsons"> The Simpsons</Link>, and the 597th episode of the series overall. It aired in the United States on Fox on September
              25, 2016. The couch gag of "Monty Burns' Fleeing Circus" is a parody of Adventure Time, parodying the series' title sequence, complete with
              Pendleton Ward himself singing a spoof of the Advenutre Time theme song. According to Al Jean, the executive producer of The Simpsons,
              "[The couch gag] was the brain child of the Mike Anderson, our supervising director ... it's a really beautiful, elaborate crossover".
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Comic series</h2>
          <div>
            <p>
              On November 19, 2011, KaBoom! Studios announced plans for an Adventure Time comic book series written by independent web comic creator Ryan
              North, who wrote the series Dinosaur Comics. The series launched on February 8, 2012, with art by Shelli Paroline and Braden Lamb. In
              October 2014, it was revealed that North had left the comic series after three years. His duties were assumed by Christopher Hastings, the
              creator of The Adventures of Dr. McNinja. This comic book line ended in April 2018 with its seventy-fifth issue, which North returned to
              co-write.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Video games</h2>
          <div>
            <p>
              The series has spawned several major video game releases; various minor video games have also been released. Several, including Legends of
              Ooo, Fionna Fights, Beemo-Adventure Time, and Ski Safari: Adventure Time, have been released on the iOS App store. A game titled Finn &
              Jake's Quest was released on April 11, 2014 on Steam. Cartoon Network also released a multiplayer online battle arena (MOBA) game titled
              Adventure Time: Battle Party on Cartoon Network's official site, on June 23, 2014. In April 2015, two downloadable content packs for
              LittleBigPlanet 3 on <Link>PlayStation 3</Link> and <Link>PlayStation 4</Link> were released; one contained Adventure Time costumes, while
              the other contained a level kit with decorations, stickers, music, objects, a background, and a bonus Fionna costume. A virtual reality (VR)
              game titled Adventure Time: Magic Man's Head Games was also released on Oculus Rift, HTC Vive, and PlayStation VR. A second VR game, titled
              Adventure Time: I See Ooo, was released on September 29, 2016. In that same month, Adventure Time characters were added to the Lego
              Dimensions game. Finn and Jake became playable characters in the video game Cartoon Network: Battle Crashers which was released for the
              Nintendo 3DS, PlayStation 4, and Xbox One on November 8, 2016, and the Nintendo Switch on October 31, 2017. Finn, Jake, and Banana Guard are
              playable characters in the platform fighter MultiVersus.
            </p>
            <h3 className="article-heading-3" id="5.1">Adventure Time: Hey Ice King! Why'd You Steal Our Garbage?!! (2012)</h3>
            <p>
              The first gmae based on the series, Adventure Time: Hey Ice King! Why'd You Steal Our Garbage?!, was announced by Pendleton Ward on his
              Twitter account in March 2012. The game was developed by WayForward Technologies for Nintendo DS and Nintendo 3DS, and was released by D3
              Publisher on November 20, 2012.
            </p>
            <h3 className="article-heading-3" id="5.2">Adventure Time: Explore the Dungeon Because I Don't Know! (2013)</h3>
            <p>
              The second game based on the series, Adventure Time: Explore the Dungeon Because I Don't Know!, follows Finn and Jake as they strive "to
              save the Candy Kingdom by exploring the mysterious Secret Royal Dungeon deep below the Land of Ooo", was released in November 2013.
            </p>
            <h3 className="article-heading-3" id="5.3">Adventure Time: The Secret of the Nameless Kingdom (2014)</h3>
            <p>
              On November 18, 2014, Adventure Time: The Secret of the Nameless Kingdom was released for Nintendo 3DS, <Link>Xbox 360</Link>, PlayStation
              3, PlayStation Vita, and Microsoft Windows.
            </p>
            <h3 className="article-heading-3" id="5.4">Adventure Time: Finn & Jake Investigations (2015)</h3>
            <p>
              In October 2015, the fourth major Adventure Time video game, titled Finn & Jake Investigations, was released for 3DS, Windows, and other
              consoles. It is the first in the series to feature full 3D graphics.
            </p>
            <h3 className="article-heading-3" id="5.5">Adventure Time: Pirates of the Enchiridion (2018)</h3>
            <p>
              Another game, Adventure Time: Pirates of the Enchiridion, was released for the PlayStation 4, Nintendo Switch, Windows, and Xbox One in July
              2018. The game was published by Outright Games, developed by Climax Studios, and features the show's original cast. That game won the award
              for "Performance in a Comedy, Lead" with John DiMaggio at the National Academy of Video Game Trade Reviewers Awards, in which Jeremy Shada
              was also nominated for the same category.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Books</h2>
          <div>
            <div className="img-right">
              <img 
                src="https://en.wikipedia.org/wiki/File:Martin_Olson_at_Forbidden_Planet_(cropped).jpg" 
                alt="Martin_Olson_at_Forbidden_Planet" 
              />
            </div>
            <p>
              The Adventure Time Encyclopaedia, published on July 22, 2013, was written by comedian Marin Olson, father of Olivia Olson and the voice of
              recurring character Hunson Abadeer. This was followed by Adventure Time: The Enchiridion & Marcy's Super Secret Scrapbook!!!, which was
              released on October 6, 2015. Written by Martin and Olivia Olson, it is presented as a combination of the Enchiridion and Marceline's secret
              diary. An official Art of ... book, titled The ARt of Ooo was published on Octobe4 14, 2014. It contains interviews with cast and crew
              members and opens with an introduction by filmmaker Guillermo del Toro. Two volumes with collections of the show's title cards have also
              been released, as well as a cookbook with recipes inspired by the show.
            </p>
            <h3 className="article-heading-3" id="6.1">Epic Tales from Adventure Time (2014-2016)</h3>
            <p>
              A series of prose novels have been published under the header "Epic Tales from Adventure Time", which includes The Untamed Scoundrel, Queen
              of Rogues, The Lonesome Outlaw, and The Virtue of Ardor, all of which were written by an author under the pseudonym "T. T. MacDangereuse".
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Merchandise</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Home release</h3>
            <p>
              On September 27, 2011, Cartoon Network released the region 1 DVD My Two Favorite People, which features a selection of twelve episodes from
              the series' first two seasons. Following this, several other region 1 compilation DVDs have been released, including: It Came from the
              Nightosphere (2012), Jake vs. Me-Mow (2012), Fionna and Cake (2013), Jake the Dad (2013), The Suitor (2014), Princess Day (2014), Adventure
              Time and Friends (2014), Finn the Human (2014), Frost & Fire (2015), The Enchiridion (2015), Stakes (2016), Card Wars (2016), and Islands
              (2017). All of the seasons have been released on DVD, and the final six have been released domestically on Blu-ray. A box set containing the
              entire series was released on DVD on April 30, 2019.
            </p>
            <p>
              On March 30, 2013, the first season of Adventure Time was made available on the Netflix Instant Watch service for online streaming; the
              second season was made available on March 30, 2014. Both seasons were removed from Netflix on March 30, 2015. The series was made available
              for streaming via Hulu on May 1, 2015.
            </p>
            <p>
              While in the United States, Max becomes the primary platform to watch Adventure Time: Distant Lands, there are debuts of "BMO," the first
              special of the spin-off series, in different countries and regions in respective Cartoon Network channels worldwide, on different dates
              mainly in 2020; such as October 24 (Turkey), October 25 (France), November 21 (the United Kingsom), December 12 (Germany, Australia, and
              Taiwan), and December 27 (Russia). In South Korea, the debut was on January 1, 2021.
            </p>
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