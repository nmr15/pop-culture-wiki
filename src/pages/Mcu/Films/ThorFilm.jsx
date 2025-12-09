import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const ThorFilm = () =>
{
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
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
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
            </ul>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
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
            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical response</h3>
            <h3 className="article-heading-3" id="7.3">Accolades</h3>
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