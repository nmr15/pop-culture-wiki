import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const ANewHope = () =>
{
  useEffect(() =>
  {
    document.title = "Episode IV: A New Hope - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Opening crawl</a></li>
          <Collapse 
            id="2"
            item="Plot"
            sub={[
              {id: "2.1", title: "Assault on Tantive IV"},
              {id: "2.2", title: "Luke's destiny"},
              {id: "2.3", title: "Rescue of the princess"},
              {id: "2.4", title: "Sacrifice and victory"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Cast</a></li>
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Writing"},
              {id: "4.3", title: "Casting"},
              {id: "4.4", title: "Design"},
              {id: "4.5", title: "Filming"},
              {id: "4.6", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Soundrack</a></li>
          <li className="sidebar-list-item"><a href="#6">Marketing</a></li>
          <Collapse 
            id="7"
            item="Release"
            sub={[
              {id: "7.1", title: "MPAA rating"},
              {id: "7.2", title: "First public screening"},
              {id: "7.3", title: "Premiere and initial release"},
              {id: "7.4", title: "Box office"}
            ]}
          />
          <Collapse 
            id="8"
            item="Reception"
            sub={[
              {id: "8.1", title: "Critical response"},
              {id: "8.2", title: "Accolades"}
            ]}
          />
          <Collapse 
            id="9"
            item="Post-release"
            sub={[
              {id: "9.1", title: "Theatrical re-releases", sub2: [
                {id: "9.1.1", title: "Special Edition"}
              ]},
              {id: "9.2", title: "Home media"},
              {id: "9.3", title: "Merchandising"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#10">Cinematic and literary allusions</a></li>
          <Collapse 
            id="11"
            item="Legacy and influence"
            sub={[
              {id: "11.1", title: "In popular culture"},
              {id: "11.2", title: "Cinematic influence"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#12">Sequels, prequels, and adatations</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Episode IV: A New Hope</li>
        </ul>
        <div>
          <h1 className="article-heading">Star Wars Episode IV: A New Hope</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Episode IV: A New Hope</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg" alt="Episode IV: A New Hope poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>George Lucas</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Films and series</th>
              <td className="infobox-data"><Link>List of Star Wars films and series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Star Wars characters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Star Wars</b> (later retitled <b>Star Wars Episode IV: A New Hope</b>) is a 1977 American epic and space opera film written and directed
            by <Link>George Lucas</Link>, produced by <Link>Lucasfilm Ltd.</Link>, and released by Twentieth Century Fox. It is the first film in the
            <Link to="/starwars">Star Wars franchise</Link> and the fourth chronological chapter of the "<Link>Skywalker Saga</Link>". Set in
            <Link>a fictional galaxy</Link> under the rule of the tyrannical <Link>Galactic Empire</Link>, the film follows a resistance movement,
            called the <Link>Rebel Alliance</Link>, that aims to destroy the Empire's ultimate weapon, the <Link>Death Star</Link>. When the rebel
            leader <Link to="/starwars/leia_organa">Princess Leia</Link> is captured by the Galactic Empire,
            <Link to="/starwars/luke_skywalker"> Luke Skywalker</Link> acquires stolen architectural plans for the Death Star and sets out to rescue her
            while learning the ways of a metaphysical power known as "<Link>the Force</Link>" from the <Link>Jedi Master</Link>
            <Link to="/starwars/obi_wan_kenobi"> Obi-Wan Kenobi</Link>. The cast includes <Link>Mark Hamill</Link>, <Link>Harrison Ford</Link>,
            <Link> Carrie Fisher</Link>, <Link>Peter Cushing</Link>, <Link>Alec Guiness</Link>, <Link>Anthony Daniels</Link>, <Link>Kenny Baker</Link>,
            <Link> Peter Mayhew</Link>, <Link>David Prowse</Link>, and <Link>James Earl Jones</Link>.
          </p>
          <p>
            Lucas had the idea of a science fiction film in the vein of Flash Gordon around the time he completed his first film, THX 1138 (1971), and
            he began working on a treatment after the release of American Graffiti (1973). After numerous rewrites, principal photography began in March
            of 1976 in locations including Tunisia and Elstree Studios in Hertfordshire, England. Lucas formed the visual effects company
            <Link> Industrial Light & Magic</Link> to help create the film's visual effects. Star Wars suffered production difficulties: the cast and
            crew believed the film would be a failure, and it went $3 million over budget due to delays.
          </p>
          <p>
            Few were confident in the film's box office prospects. It was released in a small number of theaters in the United States on May 25, 1977,
            and quickly became a surprise blockbuster, leading it to being expanded to a much wider release. Star Wars opened to critical acclaim, with
            particular praise for its special effects. It grossed $410 million worldwide during its initial run, surpassing Jaws (1975) to become the
            highest-grossing film until the release of E.T. the Extra-Terrestrial (1982); subsequent releases have brought its total gross to $775
            million. When adjusted for inflation, Star Wars is the second-highest grossing film in North America (behind Gone with the Wind) and the
            fourth-highest grossing film of all time. It received six Academy Awards, two BAFTA awards, and thirteen Saturn Awards, among others. The film
            has been reissued many times with Lucas' support, including the 1981 reissue giving the film the subtitle Episode IV: A New Hope, and the 1997
            "Special Edition". The reissues have contained many changes, including new scenes, visual effects, and dialogue.
          </p>
          <p>
            Often regarded as one of the greatest and most influential films of all time, Star Wars quickly became a worldwide pop culture phenomenon,
            launching an industry of tie-in products, including novels, comics, video games, amusement park attractions, and merchandise such as toys,
            games, and clothing. It became one of the 25 films selected by the United States Library of Congress for preservation in the National Film
            Registry in 1989, and its soundtrack was added to the U.S. National Recording Registry in 2004.
            <Link to="/starwars/the_empire_strikes_back">The Empire Strikes Back</Link> (1980) and
            <Link to="/starwars/return_of_the_jedi">Return of the Jedi</Link> (1983) followed Star Wars, rounding out the <Link>original Star
            Wars trilogy</Link>. A <Link>prequel trilogy</Link> and <Link>sequel trilogy</Link> have since been released in addition to two
            standalone films and various television series.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Opening crawl"} />
          <div>

          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Plot"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Assault on Tantive IV</h3>
            <p>
              Nineteen years after the formation of the <Link>Galactic Empire</Link>, <Link>the galaxy</Link> is in a state of <Link>civil war</Link>.
              The <Link>Rebel Alliance</Link> has won their first major victory by stealing plans to the Galactic Empire's secret weapon, the
              <Link> Death Star</Link>. Hoping that the stolen plans can save her people and restore freedom to the galaxy. Princess Leia Organa, who is
              in custody of the plans, attempt to race home aboard the <Link>Tantive IV</Link>. However, her ship is intercepted by the Imperial I-class
              <Link> Star Destroyer</Link> Devastator over the desert planet of <Link>Tatooine</Link>.
            </p>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/0/02/Devastatortantiveiv.png" alt="The Devastator and the Tantive IV" />
              <p>Princess Leia is kidnapped by the Galactic Empire.</p>
            </div>
            <p>
              The ship is captured, and several Imperial <Link>stormtroopers</Link> come aboard. After defeating the small number of guards defending the
              ship, the Sith Lord <Link to="/starwars/anakin_skywalker">Darth Vader</Link> arrives to assess the damage. Vader is outraged and questions
              <Link> Captain Antilles</Link>, whom he eventually strangles and kills. Hiding on the ship, Princess Leia is able to record a holographic
              message with the help of <Link to="/starwars/r2d2">R2-D2</Link>, and gives the <Link>droid</Link> the plans for the Death Star and the
              responsibility of taking the message to <Link to="/starwars/obi_wan_kenobi">Obi-Wan Kenobi</Link>, a Jedi-in-hiding on Tatooine. Leia is
              spotted by stormtroopers and they shoot her with a stun blast and bring her before Vader. Leia claims she and the ship's crew were on a
              diplomatic mission to <Link>Alderaan</Link>, but is disbelieved by Vader, who denounes her as a traitor and has her taken prisoner. Vader
              orders a message be sent to the Imperial Senate, informing them that the ship was destroyed, with everyone on board killed. R2-D2 and
              <Link to="/starwars/c3po">C-3PO</Link> use an escape pod in order to escape the ship and reach the planet of Tatooine below, narrowly
              escaping destruction by an Imperial cannon when the operators do not detect the droids in the pod.
            </p>

            <h3 className="article-heading-3" id="2.2">Luke's destiny</h3>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/9/92/Lukesaberanh.png" alt="Luke with lightsaber" />
              <p>Luke Skywalker receives his father's lightsaber.</p>
            </div>
            <p>
              After arguing and going their separate ways for a while, the droids are individually picked up by <Link>Jawa</Link> traders and brought
              aboard a <Link>sandcrawler</Link>. They are later bought by moisture farmer <Link>Owen Lars</Link> and his nephew, Luke Skywalker, a young
              farmer who lost his parents as a baby and hopes to one day be a starfighter pilot just like his friends. While cleaning R2, Luke discovers
              a short portion of the hologram. At the mention of Obi-Wan, he wonders if she means his neighbor Ben Kenobi.
            </p>
            <p>
              While eating dinner with Owen and his aunt <Link>Beru Lars</Link>, Owen asks Luke to take R2 to Anchorage the next day to have his memory
              wiped, and expresses his hope Luke will stay with them for one more harvest season before applying to the Academy. R2 escapes from the
              Lars' homestead in search of Obi-Wan, whom the droid claims to be the property of. Luke and C-3PO search the desert and find R2 the next
              day, only to be attacked by <Link>sand people</Link>. Luke and his droids are rescued by Ben Kenobi, who confirms he is Obi-Wan.
            </p>
            <p>
              At his home, Obi-Wan gives Luke his father's <Link>lightsaber</Link>, as Obi-Wan recalls his own friendship with Luke's father. He tells
              Luke that he and his father were a part of the <Link>Jedi</Link> order that once protected the galaxy before the Empire took over and
              that Darth Vader was once his apprentice before he fell to the <Link>dark side of the Force</Link> and murdered Luke's father. After
              viewing Leia's full recording. Obi-Wan attempts to persuade Luke to accompany him to Alderaan. Luke refuses but agrees to take Obi-Wan
              as far as Anchorhead. On the way, the group discovers the remains of the sandcrawler, the Jawas having been killed by stormtroopers
              searching for the droids. With dawning horror, Luke hurries home only to find it burning and his aunt and uncle's charred remains,
              both brutally murdered by the same stormtroopers.
            </p>
            <p>
              Luke returns upset, but Obi-Wan tells him there was nothing he could do, and that he would have been killed too and the plans would
              be in possession of the Empire. With nothing keeping him on Tatooine, Luke, Obi-Wan, and the two droids travel to <Link>Mos
              Eisley</Link> to find passage to Alderaan, Leia's home planet.
            </p>
            <p>
              Aboard the Death Star, Cassio Tagge argues with Conan Antonio Motti about the station's vulnerability to the rebels and points out
              that the rebellion has been gaining support within the imperial senate. <Link to="/starwars/grand_moff_tarkin">Wilhuff
              Tarkin</Link> enters the room with Darth Vader and informs them that the Emperor has dissolved the senate completely, sweeping away
              the last remnants of the Old Republic. Believing fear will keep the galaxy in line, Motti boasts the power of the Death Star, to
              which Vader replies that its power is insignificant compare to the Force. When Motti mocks Vader's belief in the Force, Vader
              <Link> force chokes</Link> him until Tarkin orders him to stop, and expresses his own desire to crush the Rebellion.
            </p>
            <p>
              Back in Mos Eisley, Luke, Obi-Wan, and the droids run into a patrol of stormtroopers, who ask for their identification. Obi-Wan
              uses a <Link>Jedi mind trick</Link> on the lead trooper, who lets them pass. Arriving at Chaimun's Spaceport Cantina, the group
              hires smuggler <Link to="/starwars/han_solo">Han Solo</Link> and his first mate, a <Link>Wookiee</Link> named
              <Link to="/starwars/chewbacca">Chewbacca</Link>, for 17,000 credits. 2,000 in advance and 15,000 upon arrival, to take the four
              of them to Alderaan aboard their ship, the <Link>Millennium Falcon</Link>. To obtain the money, Luke had to sell his
              <Link> landspeeder</Link>. Han has a brief run-in with <Link>Greedo</Link> over his debts to crime lord
              <Link to="/starwars/jabba_the_hutt"> Jabba the Hutt</Link>, which ends with Han fatally shooting Greedo. Jabba later confronts
              Han in the Falcon's docking bay, scolding him for killing Greedo. Han defends his actions that offended Jabba (dumping a load
              of cargo when confronted by an Imperial patrol) and promises he'll pay the gangster what he owes. Luke, Obi-Wan, and the droids
              arrive at the Falcon's hangar. A brief scuffle with stormtroopers ensues, and the Falcon escapes Imperial Star Destroyers over
              Tatooine and sets a course to Alderaan unaware that the Death Star had just arrived there as well.
            </p>

            <h3 className="article-heading-3" id="2.3">Rescue of the princess</h3>
            <p>
              Leia, having resisted being tortured with a mind probe for the location of the Rebel Alliance's headquarters, is brought
              before Tarkin. Tarkin threatens to use the Death Star's superlaser on Leia's homeworld of Alderaan if she does not tell them
              the Rebel base's lcation. She reluctantly tells them the base is on <Link>Dantoonie</Link>, but Tarkin orders Alderaan to be
              destroyed anyway for its role in supporting the rebels.
            </p>

            <h3 className="article-heading-3" id="2.4">Sacrifice and victory</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Cast"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="4.1">Development</h3>
            <div className="img-left img-card">
              <img 
                src="https://en.wikipedia.org/wiki/File:George_Lucas_1986_(cropped).jpg" 
                alt="George Lucas 1986" 
              />
              <p>Star Wars creator George Lucas (pictured in 1986).</p>
            </div>
            <p>
              George Lucas had the idea for a space opera prior to 1971. According to Mark Hamill, he wanted to make it before his 1973 coming-of-age film
              American Graffiti. His original plan was to adapt the Flash Gordon space adventure comics and serials into films, having been fascinated
              by them sinc he was young. Lucas attempted to purchase the rights, but they had already been acquired by the producer Dino De Laurentiis.
              Lucas then discovered that Flash Gordon was inspired by the John Carter of Mars book series by Edgar Rice Burroughs, the author of
              Tarzan. Burroughs, in turn, had been influenced by Gulliiver on Mars, a 1905 science fantasy written by Edwin Arnold. Lucas took the
              science fantasy concept and began developing what he would call a "space fantasy".
            </p>
            <p>
              In May 1971, Lucas persuaded the head of United Artists, David Picker, to take a chance on two of his film ideas: American Graffiti and the
              space opera. Although Lucas signed a two-picture deal, the studio ultimately declined to produce Graffiti. Universal Pictures pickd it up,
              and Lucas spent the next two years making the coming-of-age film, which was immensely successful. In January 1973, he bagan working on the
              space opera full-time. He began the process by inventing odd names for characters and places. By the time the screenplay was finalized he
              had discarded many of the names, but several made it into the final script and later sequels. He used his early notes to compile a
              two-page synopsis titled Journal of the Whills, which chronicled the tale of CJ Thorpe, an apprentice "Jedi-Bendu", who was being trained
              by the legendary Mace Windy. He felt that this story was too difficult to understand, however.
            </p>
            <p>
              Lucas began writing a 13-page treatment called The Star Wars on April 17, 1973, which had narrative parallels with Akira Kurosawa's 1958
              film The Hidden Fortress. He later explained that Star Wars is not a story about the future, but rather a "fantasy" that has more in
              common with the Brothers Grimm than the 1968 film 2001: A Space Odyssey. He said his motivation for making the film was to give young
              people an "honest, wholesome fantasy life," of the kind his generation had. He hoped it would offer "the romance, the adventure, and
              the fun that used to be in practically every movie".
            </p>
            <p>
              While impressed with the innocence of the story and the sophistication of Lucas' fictional world. United Artists declined to fund the
              project. Lucas and Gary Kurtz, a producer, then presented the treatment to Universal Pictures, the studio that financed American
              Graffiti. Universal agreed it could be a successful venture, but declines to fund it, citing doubts about Lucas' ability to execute
              his vision. Kurtz claimed the studio's rejection was primarily due to Universal head Lew Wasserman's low opinion of science fiction,
              and the general unpopularity of the genre at the time. Francis Ford Coppola subsequently brought the project to a division of
              Paramount Pictures named the Directors Company he ran with fellow directors Peer Bogdanovich and William Friedkin, but Friedkin
              questioned Lucas' ability to direct the film, and both Friedkin and Bogdanovich declined to finance it. Walt Disney Productions also
              turned down the project.
            </p>
            <p>
              Star Wars was accepted by Twentieth Centory-Fox in June 1973. The president of the studio, Alan Ladd Jr., did not grasp the
              technical side of the project, but believed in Lucas' talent. Lucas later stated that Ladd invested inh im, not in the film. The
              Fox deal gave Lucas $150,000 (equivalent to $1,100,000 in 2013) to write and direct the film. In August 1973, American Graffiti
              opened to massive success, which afforded Lucas the necessary leverage to renegotiate the deal and gain control of merchandising
              and sequel rights.
            </p>

            <h3 className="article-heading-3" id="4.2">Writing</h3>
            <p>
              Since commencing the writing process in January 1973, Lucas wrote four different screenplay for Star Wars, searching for "just
              the right ingredients, characters, and storyline." By May 1974, he had expanded the original treatment into a full, 132-page
              rough draft, which included elements such as the Sith, the Death Star, and a general named Annikin Starkiller. He then changed
              Starkiller to an adolescent boy, and shifted the general, who came from a familiy of dwarfs, into a supporting role. Lucas
              envisioned the <Link>Corellian</Link> smuggler, Han Solo, as a large, green-skinned monster with gills. He based Chewbacca on
              his Alaskan Malamute dog, Indiana. She would sit in the passaner seat of his car while he driving, and he referred to her as
              his "co-pilot". The dog's name would later be given to the character <Link>Indiana Jones</Link>.
            </p>
            <p>
              Lucas completed a second draft in January 1975 entitled Adventures of the Starkiller, Episode One: The Star Wars. He had made
              substantial simplifications and introduced the young, farm-dwelling hero as Luke Starkiller. In this draft, Luke had several
              brothers. Annikin became Luke's father, a wise Jedi Knight who played a minor role at the end of the story. Early versions of
              the characters Han Solo and Chewbacca were present, and closely resembles those seen in the finished film. The draft introduced
              a mystical energy field call "The Force"; the concept of a Jedi turning to the dark side; and a Jedi who was the first to turn,
              and who subsequently trained the Sith. The script also included a Jedi Master with a son who trains under his father's friend.
              This version was more of a fairy tale quest than the action-filled adventure story of the previous draft, and ended with a text
              crawl that previewed the next story in the series. According to Lucas, the second draf was over 200 ages long, which led him to
              split up the story into multiple films. This division caused problems with the first film; Lucas had to use the ending of
              Return of the Jedi for Star Wars, which resulted in a Death Star being included in both films.
            </p>
            <p>
              While writing a third draft, Lucas claims to have been influenced by comics, J. R. R. Tolkien's The Hobbit, Joseph Campbell's
              The Hero with a Thousand Faces, James Geore Frazer's The Golden Bough, and Bruno Bettelheim's The Uses of Enchantment. The
              writer Michael Kaminski has objected to Lucas' claim regarding The Uses of Enchantment, arguing that it was not released
              until after Star Wars was filmed. Kaminski also claims that Campbell's influence on Star Wars has been exaggerated by Lucas
              and others, and that Lucas' second draft was "closer to Campbell's structre" than the third draft.
            </p>
            <p>
              In February 1975, Twentieth-Century Fox granted the film a budget of $5 million (equivalent to $30 million in 2025 dollars),
              which was later increased to $8.25 million (equivalent to $49 million). Lucas then started writing with a budget in mind. He
              conceived the cheap, "used" look for much of the film, and, with Fox having just shut down its special effects department,
              reduced the number of complex special effects shots called for by the script. The completed third draft of the screenplay,
              dated August 1, 1975, was titled The Star Wars From the Adventures of Luke Starkiller. This version had most of the elelments
              of the final plot, with only some differences in the characters and settings. It presented Luke as an only child whose father
              was already dead, and who was cared for by a man named Ben Kenobi. The script would be rewritten into a fourth and final
              draft, dated January 1, 1976, and titled The Adventures of Luke Starkiller as taken from the Journal of the Whills, Saga
              I: The Star Wars. Lucas' friend Gloria Katz and Willard Huyck helped him review the fourth draft into the final pre-production
              script. Lucas finished the screenplay in March 1976, when the crew started filming. During production, he changed Luke's
              surname from Starkiller to Skywalker, and changed the title first to The Star Wars, and then, finally, to Star Wars. For the
              film's opening crawl, Lucas originally wrote a composition of six paragraphs with four sentences each. He showed the crawl
              to his friend, the director Brian De Palma, who said it was incomprehensible and far too lengthy. De Palma and the
              screenwriter Jay Cocks helped edit the crawl into its final form, which contains only four sentences.              
            </p>

            <h3 className="article-heading-3" id="4.3">Casting</h3>
            <p>
              Lucas had a preference for casting unknown or realtively unknown actors, which led him to select Mark Hamill and Carrie
              Fisher for leading roles. Hamill was cast as Luke Skywalker over Robby Benson, Robert Englund, William Katt,
              <Link> Kurt Russell</Link>, and Charles Martin Smith, while Fisher was cast as Princess Leia over <Link>Karen
              Allen</Link>, Amy Irving, Terri Nunn, Cindy Williams, and Linda Puri. Jodie Foster was offered the role, but turned
              it down because she was under contract with Disney. Koo Stark was also considered for Leia, but was instead cast as
              Luke's friend Camie Marstrap, a character that was eventually cut from the film.
            </p>
            <p>
              Lucas initially resisted casting Harrison Ford as Han Solo, since Ford had previously worked with Lucas on American
              Graffiti, and was therefore not unkown. Instead, Lucas asked Ford to assist with auditions by reading lines with other
              actors. He was eventually won over by Ford, and cast him as Han over many other actors who auditioned, including
              James Caan, <Link>Chevy Chase</Link>, <Link>Robert De Niro</Link>, Richard Dreyfus, Robert Englund, <Link>Steve
              Martin</Link>, <Link>Bill Murray</Link>, <Link>Jack Nicholson</Link>, Nick Nolte, Burt Reynolds, Kurt Russell,
              Sylvester Stallone, <Link>John Travolta</Link>, Glynn Turman, <Link>Christopher Walken</Link>, and Perry King, who later
              played Han in the radio series. <Link>Al Pacino</Link> turned down the part because he did not understand the script.
            </p>
            <p>
              Lucas believed that he needed an established star to play Obi-Wan Kenobi. He considered Peter Cushing for the role,
              but decided the actor's lean features would be better employed as the villainous Tarkin. Kurtz felt a strong character
              actor was required to convey the "stability and gravitas" of Obi-Wan. Before Alec Guinness was cast, the Japanese
              actor Toshiro Mifune, who starred in many Akira Kurosawa films, was considered for the role . His daughter, Mika
              Kitagawa, said her father had a lot of "samurai pride" and turned down the role of Obi-Wan and Vader because he
              thought Star Wars would employ cheap special effects, and would therefore cheapen the image of samurai. Lucas
              credited Guinness with inspiring the cast and crew to work harder, which contributed significantly to the completion
              of filming. Ford said he admired Guinness' preparation, professionalism, and kindness towards the other actors. He
              recalled Guinness having "a very clear head about how to serve the story." On top of his salary, Guinness received
              2.25% of the film's backend grosses, which made him wealthy later in life.
            </p>
            <p>
              Anthony Daniels said he wanted the role of C-3PO after he saw a Ralph McQuarrie concep painting of the character
              and was struck by the vulnerability in the droid's face. After casting Daniels for the physical performance, Lucas
              intended to hire another actor for the droid's voice. According to Daniels, thirty well-established actors
              auditioned, including Dreyfus and Mel Blanc, but Daniels received the voice role after one of the actors suggested
              the idea to Lucas.
            </p>
            <p>
              Kenny Baker (R2-D2) and Peter Mayhew (Chewbacca) were cast largely due to their height. At 3 feet 8 inches (1.12 m),
              Baker was offered the role of the diminutive R2-D2 immediately after meeting Lucas. He turned it down multiple
              times, however, before finally accepting it. R2-D2's beeps and squeaks were made by the film's sound designer,
              <Link>Ben Burtt</Link>, by imitating baby noises, recording his voice over an intercom, and finally mixing the
              sounds together using a synthesizer. Mayhew initially auditioned for Vader, but David Prowse was cast instead.
              When Lucas and Kurtz saw Mayhew's 7-foot-3-inch (2.21 m) stature, they quickly cast him as Chewbacca. Mayhew
              modeled his performance on the mannerisms of animals he observed in public zoos.
            </p>
            <p>
              Prowse was originally offered the role of Chewbacca, but turned it down, as he wanted to play the villain. Prowse
              portrayed Vader physically, but Lucas felt his West Country English accent was inappropriate for the character,
              and selected James Earl Jones for Vader's voice. Lucas considered Orson Welles for the voice role, but was
              concerned his voice would be too familiar to audiences. Audiences and critics, however, immediately recognized
              Jones' voice in the film. Jones was uncredited as Vader in Star Wars films until 1983, although he was credited
              in the 1978 television special, Star Wars Holiday Special.
            </p>

            <h3 className="article-heading-3" id="4.4">Design</h3>
            <p>
              During pre-production, Lucas recruited several conceptual designers: Colin Cantwell, who visualized the initial
              spacecraft models; Alex Tavoularis, who created storyboard sketches from early scripts; and Ralph McQuarrie,
              who created conceptual images of characters, costumes, props, and scenery. McQuarrie's paintings helped studio
              executives visualize the film, which positively influenced their decision to fund the project. His artwork
              also set the visual tone for Star Wars and for the rest of the original trilogy.
            </p>
            <p>
              Lucas wanted to create props and sets that had never before been used in science fiction films. He hired as
              production designer John Barry and Roger Christian, who were then working on the film Lucky Lady (1975).
              Christian remembers that Lucas did not want anything in Star Wars to stand out, and wanted everything to
              look "real and used." In this "used future" aesthetic, all devices, ships, and buildings related to Tatooine
              and the rebels look aged and dirty, and the rebel ships look cobbled together in contrast to the Empire's
              sleeker designs. Lucas believed this aesthetic would lend credibility to the film's fictional places, and
              Christian was enthusiastic about this approach.
            </p>
            <p>
              Barry and Christian started working with Lucas before Star Wars was funded by Fox. For several months, in
              a studio in Kensal Rise, England, they planned the creation of props and sets with very little money.
              According to Christian, the Millennium Falcon set was the most difficult to build. He wanted the interior
              of the ship to look like a submarine, and used inexpensive airplane scrap metal to achieve the desired
              effect. Set construction later moved to Elstree Studios, where Barry created thirty sets. All nine
              sound stages at Elstree were needed to house the planets, starships, caves, control rooms, cantinas,
              and Death Star corridors. The rebel hangar was so massive it had to be built at nearby Shepperton Studios,
              which contained Europe's largest sound stage at the time.
            </p>

            <h3 className="article-heading-3" id="4">Filming</h3>

            <h3 className="article-heading-3" id="4">Post-production</h3>

          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Soundrack"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Marketing"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="7.1">MPAA rating</h3>

            <h3 className="article-heading-3" id="7.2">First public screening</h3>

            <h3 className="article-heading-3" id="7.3">Premiere and initial release</h3>

            <h3 className="article-heading-3" id="7.4">Box office</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Critical response</h3>

            <h3 className="article-heading-3" id="8.2">Accolades</h3>
          </div>
        </div>
        <div>
          <Heading2 id={9} title={"Post-release"} />
          <div>
            <h3 className="article-heading-3" id="9.1">Theatrical re-releases</h3>
            <h4 className="article-heading-4" id="9.1.1">Special Edition</h4>

            <h3 className="article-heading-3" id="9.2">Home media</h3>

            <h3 className="article-heading-3" id="9.3">Merchandising</h3>
          </div>
        </div>
        <div>
          <Heading2 id={10} title={"Cinematic and literary allusions"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={11} title={"Legacy and influence"} />
          <div>
            <h3 className="article-heading-3" id="11.1">In popular culture</h3>
            <h3 className="article-heading-3" id="11.1">Cinematic influence</h3>
          </div>
        </div>
        <div>
          <Heading2 id={12} title={"Sequels, prequels, and adatations"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default ANewHope;