import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const ThorFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Thor (film) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical response"}
            ]}
          />
          <Collapse 
            id="8"
            item="Sequels"
            sub={[
              {id: "8.1", title: "Thor: The Dark World"},
              {id: "8.2", title: "Thor: Ragnarok"},
              {id: "8.1", title: "Thor: Love and Thunder"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Thor (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Thor (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Thor</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg" alt="Thor poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Kenneth Branagh</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of MCU projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link to="/mcu/characters">List of MCU character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous MCU project</th>
              <td className="infobox-data"><Link to="/mcu/iron_man_2">Iron Man 2</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/captain_america_the_first_avenger">Captain America: The First Avenger</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Thor</b> is a 2011 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/thor">of the same name</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Paramount Pictures. It is
            the fourth film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). It was directed by <Link>Kenneth Branagh</Link>, written by the
            writing team of Ashley Edward Miller and Zack Stentz along with Don Payne, and stars <Link>Chris Hemsworth</Link> as the title character
            alongside <Link>Natalie Portman</Link>, <Link>Tom Hiddleston</Link>, <Link>Stellan Skarsgård</Link>, <Link>Kat Dennings</Link>,
            <Link> Clark Gregg</Link>, <Link>Colm Feore</Link>, <Link>Ray Stevenson</Link>, <Link>Idris Elba</Link>, <Link>Jaimie Alexander</Link>,
            <Link> Rene Russo</Link>, and <Link>Anthony Hopkins</Link>. After reigniting a dormant war, Thor is banished from Asgard to Earth, stripped
            of his powers and his hammer <Link>Mjölnir</Link>. As his brother <Link>Loki</Link> (Hiddleston) plots to take the Asgardian throne, Thor must
            prove himself worthy.
          </p>
          <p>
            <Link>Sam Raimi</Link> first developed the concept of a film adaptation based on Thor in 1991, but soon abandoned the project, leaving it in
            "developmen hell" for several years. During this time, the rights were picked up by various film stdios until Marvel signed Mark Protosevich
            to develop the project in 2006, and planned to finance and release it through Paramount. <Link>Matthew Vaughn</Link> was assigned to direct
            the film for a tentative 2010 release. However, after Vaughnwas released from his holding deal in 2008, Branagh was approached and the film's
            release was rescheduled to 2011. The main characters were cast in 2009, and princial photography took place in California and New Mexico
            from January to May 2010. The film was converted to 3D in post-production.
          </p>
          <p>
            Thor premiered in Sydney on April 17, 2011, and was released in the United States on May 6, as part of <Link>Phase One</Link> of the MCU. It
            received generally positive reviews from critics and was a financial success, earning $449.3 million worldwide. Three sequels have been
            released: <Link to="/mcu/thor_the_dark_world">Thor: The Dark World</Link> (2013), <Link to="/mcu/thor_ragnarok">Thor: Ragnarok</Link> (2017),
            and <Link to="/mcu/thor_love_and_thunder"> Thor: Love and Thunder</Link> (2022).
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <p>
              In 985 AD, <Link>Odin</Link>, king of <Link>Asgard</Link>, wages war against the <Link>Frost Giants</Link> of <Link>Jotunheim</Link> and
              their leader <Link>Laufey</Link>, to prevent them from conquering the <Link>Nine Realms</Link>, starting with <Link>Earth</Link>. The
              Asgardians defeat the Frost Giants and seize the source of their power, the <Link>Casket of Ancient Winters</Link>.
            </p>
            <p>
              In the present, Odin's son Thor prepares to ascent to the throne of Asgard but is interrupted when Frost Giants, secretly allowed in by
              his brother, <Link>Loki</Link>, attempt to retrieve the Casket. Against Odin's orders, Thor travels to Jotunheim to confront Laufey,
              accompanies by Loki, childhood friend <Link>Sif</Link>, and the <Link>Warriors Three</Link>: <Link>Volstagg</Link>, <Link>Fandral</Link>,
              and <Link>Hogun</Link>. A battle ensuses until Odin intervenes to save the Asgardians, destroying the fragile truce between the two races.
              As punishment for Thor's arrogance, Odin deems his son unworthy and strips his powers before exiling him to Earth as a mortal, accompanied
              by his hammer Mjölnir, now protected by an enchantment that allows only the worthy to wield it.
            </p>
            <p>
              Thor lands in <Link>New Mexico</Link>, where astrophysicist <Link>Dr. Jane Foster</Link>, her assistant <Link>Darcy Lewis</Link>, and
              mentor <Link>Dr. Erik Selvig</Link> find him. The local population discover Mjölnir which <Link>S.H.I.E.L.D.</Link> agent
              <Link to="/mcu/phil_coulson"> Phil Coulson</Link> soon commandeers before forcibly acquring Foster's data about the wormhole that delivered
              Thor to Earth. Having learned about Mjölnir's nearby location, Thor seeks to retrieve it from the facility that S.H.I.E.L.D. has constructed
              and tries to lift it, but is unable to do so and is captured. With Selvig's help, he is freed and resigns himself to exile on Earth as he
              develops a romance with Foster.
            </p>
            <p>
              Loki discovers that he is Laufey's biological son, adopted by Odin after the war ended. Loki confronts Odin, who wearily falls into the deep
              "Odinsleep" to recover his strength. Loki takes the throne in Odin's stead and offers Laufey the chance to kill Odin and retrieve the
              Casket. Sif and the Warriors Three, unhappy with Loki's rule, attempt to return Thor from exile, convincing <Link>Heimdall</Link>,
              gatekeeper of the Bifröst, the means of traveling between worlds, to allow them passage to Earth. Aware and suspicious of their plan, Loki
              sends the <Link>Destroyer</Link>, a seemingly indestructible automaton, to pursue them and kill Thor. The warriors find Thor, but the
              Destroyer attacks and overpowers them, prompting Thor to offer himself instead. Struck by the Destroyer and near death, Thor proves
              himself worthy to wield Mjölnir. The hammer returns to him, restoring his powers and enabling him to defeat the Destroyer. Thor and Jane
              kiss each other goodbye before he leaves with his fellow Asgardians to confront Loki.
            </p>
            <p>
              In Asgard, Loki betrays and kills Laufey. Thor arrives, and Loki reveals his plan to destroy Jotunheim with the Bifröst Bridge. Thor fights
              Loki before destorying the Bifröst Bridge to stop Loki's plan. Odin awakens and prevents the brothers from falling into the abyss created
              in the wake of the bridge's destruction; when Odin rejects Loki's pleas for approval, Loki allows himself to fall into the abyss. Thor
              makes amends with Odin, admitting he is not ready to be king and longs to see Jane. Meanwhile, on Earth, Foster and her team search for a
              way to open a portal to Asgard.
            </p>
            <p>
              In a post-credits scene, Selvig is taken to a S.H.I.E.L.D. facility, where <Link to="/mcu/nick_fury">Nick Fury</Link> opens a briefcase and
              asks him to study a mysterious cube-shaped object, which Fury says may hold untold power. An invisible Loki, who survived his fall and
              arrived on Earth, secretly prompts Selvig to agree.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            <ul className="article-list">
              <div className="img-right img-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/ChrisHemsworthApr2011.jpg/500px-ChrisHemsworthApr2011.jpg" 
                  alt="Chris Hemsworth April 2011"
                />
                <p>Hemsworth promoting the film in London in April 2011.</p>
              </div>
              <li>
                <Link>Chris Hemsworth</Link> as <Link to="/mcu/thor">Thor</Link>: <br />
                The crown prince of Asgard, based on the Norse mythological deity of the same name. Director Kenneth Branagh and Marvel Studios chief
                <Link> Kevin Feige</Link> chose Hemsworth after a back-and-forth process in which the 25-year-old actor was initially dropped from
                consideration and then given a second chance to read for the part. Hemsworth stated that he gained 20 pounds (9 kg) for the role by
                eating non-stop and revealed that "It wasn't until Thor that I started lifting wrights, it was all pretty new to me." After taking an
                initial costume fitting, Hemsworth returned three weeks later to find it did not fit because of the mass he had cultivated in that time
                span. At that point, he shifted away from eating a lot of calories and training to a kettlebell workout that would maintain his muscle
                mass rather than continuing to add to it. Regarding his take on the character, Hemsworth said, "We just kept trying to humanize it all,
                and keep it very real. Look into all the research about the comic books that we could, but also bring it back to "Who is this guy as a
                person, and what's his relationship with people in the individual scenes?" About approaching Thor's fighting style, he remarked, "First,
                we looked at the comic books and the posturing, the way [Thor] moves and fights, and a lot of his power seems to be drawn up through the
                ground. We talked about boxers, you know, Mike Tyson, very low to the ground and big open chest and big shoulser swings and very sort of
                brutal but graceful at the same time, and then as we shot stuff things became easier." Dakota Goyo portrays a young Thor.
              </li>
              <li>
                <Link>Natalie Portman</Link> as <Link>Jane Foster</Link>: <br />
                A scientist and Thor's love interest. Marvel Studios stated in an announcement that the character was updated from the comics' initial
                portrayal for the feature adaptation. When asked why she took the role, Portman replied, "I just thought it sounded like a weird idea
                because Kenneth Branagh's directing it, so I was just like, 'Kenneth Branagh doing Thor is super-weird, I've gotta do it.'" Portman
                stated that she really wanted to do a big effects film that emphasized character, and getting to do it with Branagh was a new way of
                approaching it, relative to <Link to="/starwars">Star Wars</Link>. Regarding her preparation for the role, Portman remarked, "I signed on
                to do it before there was a script. And Ken, who's amazing, who is so incredible, was like, 'You can really help create this character'.
                I got to read all of these biographies of female scientists like Rosalind Franklin who actually discovered the DNA double helix but didn't
                get the credit for it. The struglles they had and the way that they thought, I was like, 'What a great opportunity, in a very big movie
                that is going to be seen by a lot of people, to have a woman as a scientist'. She's a very serious scientist. Because in the comic she's
                a nurse and now they made her an astrophysicist. Really, I know it sounds silly, but it is those little things that makes girls think it's
                possible. It doesn't give them a [role] model of 'Oh, I just have to dress cute in movies'".
              </li>
              <div className="img-right img-card">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TomHiddlestonApr2011.jpg/500px-TomHiddlestonApr2011.jpg" 
                  alt="Tom Hiddleston April 2011"
                />
                <p>Hiddleston promoting the film in London in April 2011.</p>
              </div>
              <li>
                <Link>Tom Hiddleson</Link> as <Link>Loki</Link>: <br />
                Thor's adoptive brother and nemesis, based on the deity of the same name. Hiddleston was chosen after previously working with Branagh on
                Ivanov and Wallander. Initially, Hiddleston auditioned to play Thor but Branagh decided his talent would be better harnessed playing Loki.
                Hiddleston stated that the character was "a comic book version of Edmund in King Lear, but nastier." Hiddleston had to keep a strict diet
                before the start of filming because Branagh wanted "Logi to have a lean and hungry look, like Cassius in Julius Caesar. Physically, he
                can't be posing as Thor". Hiddleston looked at Peter O'Toole as inspiration for Loki as well, explaining, "Interestingly enough, [Kenneth
                Branagh] said to look at Peter O'Toole in two specific films. The Lion in Winter and Lawrence of Arabia. What's intresting about ... his
                performance [as King Henry] is you see how damaged he is. There's a rawness [to his performance]; it's almost as if he's living with a
                layer of skin peeled away. He's grandiose and teary and, in a moment, bu turns hilarious and then terrifying. What we wanted was that
                emotional volatility. It's a different acting style, it's not quite the same thing, bu it's fascinating to go back and watch an actor as
                great as O'Toole head for those great high hills". Ted Allpress portrays a young Loki.
              </li>
              <li>
                <Link>Stellan Skarsgård</Link> as <Link>Erik Selvig</Link>: <br />
                A scientist doing research in New Mexico who encounters Thor. Skarsgård stated that he was not initially familiar with the comic book
                version of Thor. As to why he took the part, Skarsgård remarked, I "chose Thor because of [director] Kenneth Branagh. The script was nice
                and we got to rehearse and talk to the writers and do some collaborating in the process to make it fit us. So I had a very happy time on
                it. What I always try to do is immediately do something I just haven't done so I get variation in my life. I've made about 90 films and if
                I did the same thing over and over again I would be bored by now. I try to pick different films, I go and do those big ones and having
                done that I can usually afford to go and do some really small obscure films and experment a little".
              </li>
              <li>
                <Link>Kat Dennings</Link> as <Link>Darcy Lewis</Link>: <br />
                A political science major who is Jane Foster's intern. Dennings described her character as Foster's "little helper gnome". Dennings
                stated that her role was expanded during the rehearsal process. Dennings explained, "She's kind of like a cute clueless, little puppy or
                maybe a hamster. There wasn't much on the page for the Darcy role to begin with and I didn't even see a script before I took the job so I
                didn't really know who Darcy was at first. But she really evolved, she's so much fun now even. She's very Scooby-Doo if that makes sense.
                She's always three steps behind and reacting to what's happening with these great expressions ... She gets things wrong and doesn't care."
              </li>
              <li>
                <Link>Clark Gregg</Link> as <Link to="/mcu/phil_coulson">Phil Coulson</Link>: A S.H.I.E.L.D. agent. Gregg reprises his role from the Iron
                Man films.
              </li>
              <li>
                <Link>Colm Feore</Link> as <Link>Laufey</Link>: <br />
                King of the Frost Giants and Loki's biological father, based on the mythological being of the same name, who in myth was actually Loki's
                mother. Feore stated it took five hours for his makeup to be applied. About his character, Feore remarked "I am the King of the Frost
                Giants. And if you've seen any of the Frost Giants, you know that I am, of course, the Napoleon of Frost Giants. We've got some
                massive, fabulous guys who dward me and come in at around eight-and-a-half feet, nine feet. But, no. Can't you tell by the commanding
                presence? I am the boss". He said the Shakespearean training he shared with Hopkins and director Branagh helped keep production moving
                briskly, saying that "during the breaks, Tony, myself, and Ken would be talking in Shakespearaean shorthand about what the characters
                were doing, what we thought they may be like, and how we could focus our attention more intelligently. These were discusssions that took
                no more than a few minutes between takes, but they allowed Ken, Tony and [me] to understand each other instantly without Ken taking an
                hour away to explain to the actors exactly what was going on. So that was enormously helpful."
              </li>
              <li>
                <Link>Ray Stevenson</Link> as <Link>Volstagg</Link>: <br />
                A member of the Warriors Three, a group of three Asgardians adventurers who are among Thor's closest comrades, known for both is heartly
                appetite and wide girth. Stevenson previously worked with Kenneth Branagh in the 1998 film The Theory of Flight, and with Marvel Studios
                as the titular character in Punisher: War Zone. Stevenson wore a fat suit for the role, stating "I've tried the suit on, and what they've
                done is kind of sex him up: he's sort of slimmer but rounder." Stevenson said, "He's got every bit of that Falstaffian verve and vigor,
                and a bit of a beer gut to suggest that enormous appetite, but he's not the sort of Weeble-shaped figure he is in the comics. He's
                Falstaff with muscles. I've got this amazing foam-injected undersuit that flexes with me."
              </li>
              <li>
                <Link>Idris Elba</Link> as <Link>Heimdall</Link>: <br />
                The all-seeing, all-hearing Asgardian sentry of the bifröst bridge, based on the mythological deity of the same name. Elba said Branagh's
                involvement was a major incentive to take the role: "[Branagh] called me up personally and said, 'I know this isn't a big role, but I
                would really love to see you play it.' It's Kenneth Branagh. I was like, 'Definitely'". About the role, Elba remarked, "I did green screen
                for the first time! I wouldn't like to do a whole movie of green screen, though. You kind of forget the plot a little, like being in a
                Broadway play and doing it over and over and forgetting your line halfway through". Elba stated he has made a four-picture commitment with
                Marvel Studios. Elba's casting prompted a proposed boycott by the Council of Conservative Citizens and a debate amongst comic book fans,
                some insisting it was wrong for a black man to play a Nordic god. In response Elba called the debate "ridiculous".
              </li>
              <li>
                <Link>Jaimie Alexander</Link> as <Link>Sif</Link>: <br />
                A warrior and Thor's childhood friend, based on the mythological deity of the same name. Alexander was best known for her portrayal of
                Jessi XX on the ABC Family series Kyle XY. Alexander said that she was familiar with Marvel Comics before having taken the part, having
                grown up with four brothers. Alexander said the part required hours a day in the gym, though training is not unfamiliar to her,
                explaining she was one of few girls on her Colleyville, Texas, high-school wrestling team. Alexander described her character as "one of
                the guys" and that, "She's a very talented, skilled warrior and can stand on her own against any villain in the film". About her
                relationship with Thor she stated, "She is very loyal to Thor and cares a lot about protecting him and protecting Asgard".
              </li>
              <li>
                <Link>Rene Russo</Link> as <Link>Frigga</Link>: <br />
                The wife of Odin, queen of Asgard, mother of Thor, and adoptive mother of Loki, based on the mythological deity of the same name. Russo
                stated in a March 2011 interview that she has signed on for possible sequels, although she stated that "who knows how many I'll do".
              </li>
              <li>
                <Link>Anthony Hopkins</Link> as <Link>Odin</Link>: <br />
                The ruler of Asgard, father of Thor, and adoptive father of Loki, based on the mythological deity of the same name. In an interview,
                Hopkins stated he knew nothing of the comic. About the film he said, "It's a superhero movie, but with a bit of Shakespeare thrown in".
                Hopkins stated, "I'm very interested in that relationship between father and sons", and that, "My father's relationship with me was cold.
                He was a hot-blood character but to me, cold. When I was young, he expressed his disappointment because I was bad in school and all of
                that. He didn't mean any harm, but I felt I could never meet up to his expecations." Hopkins expressed that he found a personal resonance 
                in the Odin role, saying, "He's a stern man. He's a man with purpose. I play the god of who banished his son from the kingdom of Asgard
                because he screwed up. He's a hot-headed, temperamemntal young man... probably a chip off of the old block but I decide he's not really
                ready to rule the future kingdom, so I banish him. I'm harsh and my wife complains and I say, 'That is why I'm king.' He's ruthless,
                take-it-or-lieave-it. Women are much more forgiving; men are not so forgiving. I know in my life, my karma is, 'If you don't like it,
                tough, move on.' And I move on. I'm a little like Odin myself". In May 2016, Mel Gibson stated he was approached about the role but
                "didn't do it".
              </li>
            </ul>
            <p>
              Additionally, Tadanobu Asano portrayed <Link>Hogun</Link>, a member of the Warriors Three primarily identified by his grim demeanor and as
              the only member who is not an Æsir. Ray Stevenson said of Asano's character, "He doesn't speak much buy when he does, everybody shuts up.
              But also in the healing room where everyone licks their wounds, he's the guy who just goes about his business". Josh Dallas portrays
              <Link> Fandral</Link>, an impressible swashbuckler and romantic member of the Warriors Three. Stuart Townsend was initially cast after
              Zachary Levi was forcd to vacate the role due to a scheduling conflict. However, days before filming began, Townsend was replaced by Dallas
              citing "creative differences". Dallas said he believed that Fandral "would like to think of himself a philander. He would like to think of
              himself, I was saying, as the R. Kelly of Asgard. He's a lover, not a fighter". Dallas mentioned that Errol Flynn was an inspiration for the
              character stting, "He was a big inspiration for the character and for me. I watched a lot of his movies and kind of got that into my bones.
              I tried to bring out that little bit of Flynn-ness in it. Flynn had a lot of that boyish charm that Fandral's got...."
            </p>
            <p>
              Maximiliano Hernandez appears as S.H.I.E.L.D. agent <Link>Jasper Sitwell</Link>, Adriana Barraza plays diner owner Isabella Alvarez, and
              Isaac Kappy plays a pet store clerk. Joseph Gatt, Josh Coxx, and Douglas Tait portray Frost Giants. <Link>Stan Lee</Link> and J. Michael
              Straczynski have cameo appearances as pick-up truck drivers, Walter Simonson has a camero appearance as one of the guards at a large
              Asgardian banquet, and <Link>Samuel L. Jackson</Link> and <Link>Jeremy Renner</Link> have uncredited cameos as Nick Fury and
              <Link to="/mcu/clint_barton">Clint Barton / Hawkeye</Link>, respectively.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <p>
              Sam Raimi originally envisioned the idea of Thor after making Darkman (1990); he met Thor co-creator Stan Lee and pitched the concept to
              20th Century Fox, but they did not understand it. Thor was abandoned until April 1997, when Marvel Studios was beginning to expand rapidly.
              The film gained momentum after the success of <Link to="/xmen_films/x_men">X-Men</Link> (2000). The plan was for Thor to be made for
              television. UPN was in talks for airing it; excited by the prospect, they pushed for a script and approached Tyler Mane to play Thor. In
              May 2000, Marvel Studios brought Artisan Entertainment to help fiance it as a film, but by June 2004 the project still had yet to be
              patronized by a studio. Sony Pictures Entertainment finally purchased the film rights, and in December 2004, David S. Goyer was in
              negotiations to write and direct. By 2005, though there were talks between Goyer and Marvel, Goyer was no longer interested, though at this
              point the film was still set to be distributed through Sony Pictres.
            </p>
            <p>
              Mark Protosevich, a fan of the Thor comic book, agreed to write the script in April 2006, and the project moved to Paramount Pictures,
              after it acquired the rights from Sony. That year the film was announced to be a Marvel Studios production. In December 2007, Protosvich
              described his plans for it "to be like a superhero origin story, but not one about a human gaining superpowers, but of a god realizing his
              true potential. It's the story of an Old Testament god who becomes a New Testament god". Protosevich's script saw Odin banishing Thor to
              Earth in the Middle Ages, where he becomes enslaved by Norsemen before being resuced by Lady Sif and the Warriors Three. In August 2007,
              Marvel Studios signed Matthew Vaughn to direct the film. Vaughn then rewrote Protosevich's script in order to bring down the budget to
              $150 million, as Protosevich's first draft would have cost $300 million to produce. After the success of
              <Link to="/mcu/iron_man_film"> Iron Man</Link>, Marvel Studios announed that they intended to release Thor on June 4, 2010, with
              <Link to="/mcu/iron_man_2"> Iron Man 2</Link> being used to intoduce the character of Thor.
            </p>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <p>
              Vaughn was released when his holding deal expire in May 2008, at which point Marvel set Protosevich to work on a new draft and began
              searching for a new director. Marvel Studios also approached J. Michael Straczynski to work on an outline. Guillermo del Toro entered
              talks to direct the film. Del Toro was a fan of Jack Kirby's work on the comics, and said that he loved the character of Loki, but wished
              to incorporate more of the original Norse mythology into the film, including a "really dingy Valhalla, [with] Vikings and mud". However,
              del Toro ultimately turned down Thor to direct The Hobbit. By September 200, D. J. Caruso had been discussing taking on the project,
              though he did not read the script. Later that month, Kenneth Branagh entered into negotiations to direct, while Daniel Craig was offered
              the leading role, but ultimately turned it down, citing his commitment to the James Bond franchise.
            </p>
            <p>
              By December 2008, Branagh confirmed that he had been hired. He described it as "a human story right in the center of a big epic scenario".
              In February 2009, Samuel L. Jackson, who had briefly portrayed Nick Fury at the end of the film Iron Man, signed on to reprise the role in
              Thor as part of an unprecedented nine-picture deal with Marvel Studios. In the same month, a casting call went out looking for actors with
              certain physical attributes to audition for the role of Thor. Casting director Sara Halley Finn said that casting Thor was "daunting" as
              the film demanded a lead actor could play "both an Asgardian god and a relatable Earth figure". Marvel Studios set back the release date of
              the film in March 2009 from its scheduled July 16, 2010 date to June 17, 2011. They later moved the release date to May 20, 2011, to
              distance the film's release from that of <Link to="/mcu/captain_america_the_first_avenger">Captain America: The First Avenger</Link>,
              another Marvel Studios film that was scheduled to be released on July 22, 2011. Marvel Studios then approached television writing team
              Ashley Edward Miller and Zack Stentz to work on the script; they were chosen because Marvel was looking for to get the script done quickly,
              understanding that television writers were usually able to get work done fast.
            </p>
            <p>
              In May 2009, Christ Hemsworth was in negotiations to portray the titular role after a back-and-forth process in which the 25-year-old actor
              was refused early on, then given a second chance to read for the part. Hemsworth's brother, Liam, also auditioned for the role but was
              passed on by Marvel Studios head Kevin Feige. <Link>Josh Hartnett</Link>, Kevin McKidd, and Triple H were also considered for the role,
              while Charlie Hunnam, Alexander Skarsgård, and Joel Kinnaman were tested. Alan Ritchson auditioned, but lost the part after he failed to
              take the casting process seriously. <Link>Channing Tatum</Link> also auditioned. The next day, Marvel announced that Tom Hiddleston, who
              had worked with Branagh before and had initially been considered to portray the lead role, had been cast as Loki. Branagh stated that he
              hoped to begin filming in January 2010. In June 2009, Feige confirmed that both Hemsworth and Hiddleston had signed on. Feige mentioned that
              the film would take place on both modern day Earth and Asgard but Thor's human host, Dr. Donald Blake, would not be included.
            </p>
            <p>
              In July 2009, Marvel announced that Natalie Portman would portray Jane Foster. Branagh was drawn to the intelligence Portman brought to the
              role, while Stenz felt that "pretty much every notable Hollywood actress between the ages of twenty-five and thirty" were seen for the part.
              Jaimie Alexander and Colm Feore were reported to have joined the cast in September, with Alexander portraying Sif and Feore's role
              unrevealed, though it was thought to be a villain. In an interview with Swedish news site Ystads Allehanda, Stellan Skarsgård stated that
              he had joined the cast, though he did not specify his role. By late October, Anthony Hopkins had been cast as Odin in the film. The
              following month, Marvel announced that they had cast the Warriors Three: Fandral was to be played by Stuart Townsend, Hogun was to be
              played by Tadanobu Asano, and Volstagg was to be played by Ray Stevenson. Idris Elba was announced to have joined the cast, portraying
              Heimdall. Natalie Portman revealed that Kat Dennings would be involved in the project, portraying Darcy, a coworker of Portman's Jane
              Foster. Feige was inspired by The Godfather (1972) since like Thor, that film is about "father and sons, and it's about the actions that a
              father takes that his sons will have to answer for".
            </p>
            <p>
              In December 2009, Rene Russo was cast as Frigga, Thor's mother and Odin's wife. Later that month, actor Joseph Gatt, Troy Brenna, and Josh
              Coxx had been cast in the film, thouh none of their roles were revealed. In January 2010, Adriana Barraza had joined the film's cast, in a
              supporting capacity. Only days before filming began, Stuart Townsend was replaced by Joshua Dallas as Fanfral, citing "creative
              differences". When Spider-Man 4's production stalled, Paramount and Marvel Entertainment pushed up the release of Thor by two weeks to
              May 6, 2011.
            </p>
            <p>
              The Science & Entertainment Exchange introduced Marvel Entertainment, Kenneth Branagh, "the screenwriter, and a few people on the design
              and production side of things" to three physicists (Sean Carroll, Kevin Hand, and Jim Hartle), as well as physics student Kevin Hickerson,
              to provide a realistic science background for the Thor universe. The consultation resulted in a change in Jane Foster's profession, from
              nurse to particle physicist, and the technology (Einstein-Rosen bridge) to describe the Bifröst Bridge.
            </p>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KennethBranaghApr2011.jpg/500px-KennethBranaghApr2011.jpg" 
                alt="Kenneth Branagh April 2011" 
              />
              <p>Director Kenneth Branagh prmoting the film in London in April 2011.</p>
            </div>
            <p>
              In October 2008, Marvel Studios signed a long-term lease agreement with Raleigh Studios to photograph their next four films, Iron Man 2,
              Thor, Captain America: The First Avenger and <Link to="mcu/the_avengers_film">The Avengers</Link>, at Raleigh's Manhattan Beach, California
              facility. Filming on Thor was scheduled to begin in Los Angeles mid-January 2010, then move to Santa Fe, New Mexico from Marchuntil late
              April. Principal photography began on January 22, 2010. A few days after filming began, Clark Gregg signed on to reprise his role from
              Iron Man and Iron Man 2 as Agent Coulson. In February, Paramount Pictures entered negotiations with Del Mar, California to use a 300-yard
              stretch of beach to film a scene for Thor involving six horses running down the terrain. Paramount said this coastline was ideal because
              its gradual slope of sand down to the waterline creates excellent reflective opportunities on film. On March 15, 2010, production of Thor
              moved to Gallsteo, New Mexico where Cerro Pelon Ranch, an old-fashioned Western film town was extensively modified for the shoot.
            </p>
            <p>
              Branagh, a fan of the comic book since childhood, commented on the challenge of bridging Asgard and the modern world: "Inspired by the
              comic book world both pictorially and compositionally at once, we've tried to find a way to make a virtue and a celebration of the
              distinction between the worlds that exist in the film but absoultely make them live in the same world. It's about finding the framing
              style, the color palette, finding the texture and the amount of camera movement thta helps celebrate and express the differences and the
              distinctions in those worlds. If it succeeds, it will mark this film as different... The combination of the primitive and the sophisticated,
              the ancient and the modern, I think that potentially is the exciting fusion, the exciting tension in the film".
            </p>
            <p>
              By April, the prospect for filming parts of Thor in Del Mar, California had fallen through. Paramount Pictures sent a letter informing the
              city that it has instead chosen an undisclosed Northern California location to film a beachfront scene for the film. The letter cied cost
              concerns with moving production too far away from its headquarters. In April 2010, Jackson stated he would not be appearing in Thor,
              despite the claims he would with his nine-picture deal; however, later in the month he said he would be filming a scene for Thor to serve
              as "connective tissue" for The Avengers. During filming, Marvel Studios enlisted the help of the writers it had in its in-house writers
              program, including Christopher Yost and Nicole Perlman, for uncredited on-set rewrites. Perlman worked on enhancing Jane Foster's role in
              the film in addition to some material with Odin and Thor in the New Mexico town, while Yost, along with The Avengers writer and director
              <Link> Joss Whedon</Link>, wrote material for Jeremy Renner's cameo as Clint Barton / Hawkeye, the character's first appearance in the MCU.
              Renner's cameo was filmed in a parking lot behind a grocery store. Filming wrapped on May 6, 2010.
            </p>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <p>
              Thor held its world premiere at the Event Cinemas theatre in George Street, Sydney on April 17, 2011, with the film opening on April 21,
              2011, in Australia. The following weekend it opened in 56 markets, while the premiere at the El Capitan Theatre in Los Angeles, California
              took place on May 2, 2011. Thor opened on May 6, 2011, in the United States, in 3,955 theaters (of which 214 were IMAX 3D and 2,737 in 3D,
              a record amount). The film is part of <Link>Phase One</Link> of the MCU.
            </p>
            <h3 className="article-heading-3" id="6.2">Home media</h3>
            <p>
              In July 2011, Marvel Studios and Paramount Pictures announced the release of Thor on Blu-ray 3D, Blu-ray Disc and DVD. The discs were
              released by Paramount Home Media Distribution on September 13, 2011, in three editions: a single-disc DVD, a 2-disc Blu-ray-DVD combo pack,
              and a 3-disc Blu-ray/DVD/3D combo pack. All sets come with deleted scenes and a "Road to The Avengers" featurette. The 2-disc and 3-disc
              packs includes a digital copy, the first in a series of Marvel One-Shots, <Link>The Consultant</Link>, and 7 behind-the-scenes featurettes.
            </p>
            <p>
              Branagh said that the DVD includes at least 20 minutes of deleted scenes. Branagh stated the footage contains "things like the Asgardian
              parents, Odin and Frigga, played by the beautiful Rene Russo, there's some beautiful scenes in there that I think people will enjoy. And
              certainly Thor and Loki interacting in different ways that just fill in a little bit of a back story, that was part of our rehearsal and
              research." In its first week of release, Thor took the number one spot on Blu-ray/DVD sales chart and topped Home Media Magazine's rental
              chart for the week.
            </p>
            <p>
              The film was also collected in a 10-disc box set titled "Marvel Cinematic Universe: Phase One – Avengers Assembled" which includes all of
              the Phase One films in the Marvel Cinematic Universe. It was released by Walt Disney Studios Home Entertainment on April 2, 2013.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical response</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequels"} />
          <div>
            <h3 className="article-heading-3" id="8.1">Thor: The Dark World</h3>
            <h3 className="article-heading-3" id="8.1">Thor: Ragnarok</h3>
            <h3 className="article-heading-3" id="8.1">Thor: Love and Thunder</h3>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default ThorFilm;