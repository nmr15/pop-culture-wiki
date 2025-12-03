import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const IronMan2 = () =>
{
  useEffect(() =>
  {
    document.title = "Iron Man 2 - Pop Culture Wiki";
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
              {id: "7.2", title: "Critical reception"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Iron Man 2</li>
        </ul>
        <div>
          <h1 className="article-heading">Iron Man 2</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Iron Man 2</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg" alt="Iron Man 2 poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Jon Favreau</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of MCU projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of MCU character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous MCU project</th>
              <td className="infobox-data"><Link to="/mcu/the_incredible_hulk_film">The Incredible Hulk</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/thor_film">Thor</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            Iron Man 2 is a 2010 American superhero film basded on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/iron_man"> Iron Man</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Paramount Pictures, it is the
            sequel to <Link to="/mcu/iron_man_film">Iron Man</Link> (2008) and the third film in the <Link to="/mcu">Marvel Cinematic Universe</Link>
            (MCU). Directed by <Link>Jon Favreau</Link> and written by Justin Theroux, the film stars <Link>Robert Downey Jr.</Link> as
            <Link to="/mcu/tony_stark"> Tony Stark / Iron Man</Link> alongside <Link>Gwyneth Paltrow</Link>, <Link>Don Cheadle</Link>,
            <Link> Scarlett Johansson</Link>, <Link>Sam Rockwell</Link>, <Link>Mickey Rourke</Link>, and <Link>Samuel L. Jackson</Link>. Set six months
            after the events of Iron Man, the film follows Stark as he rejects government demands to share his technology, which is slowly killing him,
            while facing the vengeful Russian scientist <Link>Ivan Vanko</Link> (Rourke).
          </p>
          <p>
            Development on a sequel to Iron Man began in May 2008 after the success of the first film. In July, Theroux was hired to write the script and
            Favreau was signed to return as director. Downey, Paltrow, and Jackson were set to reprise their roles from Iron Man, while Cheadle was
            brought in to replace Terrence Howard in the role of <Link>James Rhodes</Link>. In early 2009, Rourke, Rockwell, and Johansson filled out the
            supporting cast. Filming took place from April to July 2009, mostly in California as with the first film. A key sequence was filmed in
            Monaco. Unlike its predecessor, which mixed digital and practical effects, the sequel primarily relied on computer-generated imagery to
            create the Iron Man suits.
          </p>
          <p>
            Iron Man 2 premiered at the El Capitan Theatre in Hollywood, Los Angeles, on April 26, 2010, and was released in the United States on May 7
            as part of <Link>Phase One</Link> of the MCU. It received praise for it action sequences and performance, but critics deemed it inferior to
            the first film. The sequel grossed over $623.9 million at the worldwide box office, making it the seventh-highest gorssing film of 2010. It
            received and Academy Award nomination for Best Visual Effects. A sequel, <Link to="/mcu/iron_man_3">Iron Man 3</Link>, was released on May 3,
            2013.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <p>
              In Russia, the media covers Tony Stark's disclosure of his identity as Iron Man. Ivan Vanko, mourning the death of his father
              <Link> Anton Vanko</Link>, a former <Link>Stark Industries</Link> employee, sees this and builds the same miniature arc reactor as Stark's
              using old Stark Industries blueprints left behind by Anton 
            </p>
            <p>
              Six months later, Tony wants to continue the legacy of his father <Link>Howard</Link>, and re-institutes the Stark Expo in New York City's
              Flushing Meadows-Corona Park. He also resists pressure to turn over his armored suits to the government and Stark's rival,
              <Link> Justin Hammer</Link>. However, Stark learns that the palladium core in the arc reactor that keeps him alive and powers the armor is
              slowly poisoning him, and he is unable to find a substitute. Growing increasingly despondent about his impending death, and refusing to
              tell anyone about his condition, Stark appoints his assistant <Link>Pepper Potts</Link> as CEO of Stark Industries and hires Stark employee
              <Link>Natlie Rushman</Link> to replace her as his assistant.
            </p>
            <p>
              Stark competes in the Monaco Historic Grand Prix, where he is attacked in the middle of the race by Vanko, who wields electrified whips
              powered by his arc reactor. Stark dons his armor and defeats Vanko, but the armor is severly damaged. Vanko explains that he intends to
              prove to the world that Iron Man is not invincible. Impressed by Vanko's performance, Hammer fakes Vancko's death while breaking him out
              of prison and asks him to build a line of armored suits to upstage Stark. Vanko decides that unmanned drones are better to eliminate the
              human factor.
            </p>
            <p>
              During his birthday party, Stark gets drunk while wearing the Iron Man suit. Annoyed by Tony's recklessness, Stark's best friend, U.S. Air
              Force Lieutenant Colonel <Link>James Rhodes</Link>, dons Stark's prototype armor and tries to restrain him. The fight ends in a stalemate,
              and Rhodes confiscates the prototype armor for the U.S. Air Force. <Link>Nick Fury</Link>, director of <Link>S.H.I.E.L.D.</Link>,
              approaches Stark. Fury reveals that "Rushman" is a S.H.I.E.L.D. agent <Link>Natasha Romanoff</Link> and that Fury personally knew Howard
              Stark, who was a founder of S.H.I.E.L.D. Fury explains that Vanko's father and Howard invented the arc reactor together, but Howard had
              Anton deported when the latter tried to sell it. The Soviets then sent Anton to the Gulag. Fury gives Stark some of his father's old
              material. In a diorama of the 1974 Stark Expo, Stark finds a diagram of the atomic structure of a new element. With the aid of his A.I.,
              <Link> J.A.R.V.I.S.</Link>, Stark determines it can replace his arc reactor's current palladium core, and successfully synthesizes it.
            </p>
            <p>
              When Stark learns that Vanko is still alive, he goes to Hammer's expo. The armored drones are unveiled, with Rhodes, in a heavily
              weaponized version of the prototype armor, dubbed "War Machine", as their leader. Just as Stark arrives to warn Rhodes, Vanko takes
              remote control of all the drones and Rhodes's armor and attacks Stark. Haamer is arrested for breaking Vanko out of prison while Romanoff
              and Stark's bodyguard <Link>Happy Hogan</Link>, infiltrate Hammer's factory. Vanko escapes, but Romanoff gains access to Hammer Industries
              software and returns control of Rhodes's armor to him. Together, Stark and Rhodes defeate Vanko who dies by suicide via blowing up his
              suit and the drones.
            </p>
            <p>
              At a debriefing, Fury informs Stark that because of his difficult personality, S.H.I.E.L.D. intends to use him only as a consultant moving
              forward. Stark and Rhodes receive medals for their heroism. In a post-credits scene, S.H.I.E.L.D. agent <Link>Phil Coulson</Link>
              discovers <Link>a large hammer</Link> in New Mexico.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            <ul className="article-list">
              <li>
                <Link>Robert Downey Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link>:<br />
                A billionaire who escaped captivity in Afganistan with a suit of armor he created, he now struggles to keep his technology out of the
                government's hands. Downey and Favreau, who had been handed a script and worked from it on the first movie, conceinved part of the film's
                story themselves. On Stark being a hero, Downey said, "It's kind of heroic, but really kind of on his own behalf. So I think there's
                probably a bit of an imposter complex and no sooner has he said, 'I am Iron Man,' that he's now really wondering what that means. If you
                hav all this cushion like he does and the public is on your side and you have immense wealth and power, I think he's way too insulated
                to be okay." Downey put on 20 pounds of muscle to reprise the role. Six-year-old Davin Ransom portrays Tony Stark as a child.
              </li>
              <li>
                <Link>Gwyneth Paltrow</Link> as <Link>Pepper Potts</Link>:<br />
                Stark's closest friend, budding love interest, and business partner; Pepper is promoted to CEO of Stark Industries. On her character's
                promotion, Paltrow opined, "When we start Iron Man 2 Pepper and Tony are very much in the same vibe... as the movie progresses, Pepper is
                given more responsibility and she's promoted and it's nice to see her sort of grow up in that way. I think it really suits her, the job
                fits her really well." Paltrow expressed excitement about working with Johansson.
              </li>
              <li>
                <Link>Don Cheadle</Link> as <Link>James "Rhodey" Rhodes / War Machine</Link>:<br />
                An officer in the U.S. Air Force and Tony Stark's close personal friend who later operates the <Link>War Machine</Link> armor. Cheadle
                replaces Terrence Howard from the first film. Cheadle had only a few hours to accept the role and did not even know what storyline Rhodes
                would undergo. commented that he is a comic book fan, but had not previously participated in comics-themed films due to the scarcity of
                black superheroes. Cheadle said he thought Iron Man was a robot before the first film cmae out. On how he approached his character,
                Cheadle stated, "I go, what's the common denominator here? And the common denominator was really his friendship with Tony, and that's
                what we really tried to track in this one. How is their friendship impacted once Tony comes out and owns 'I am Iron Man'?". Cheadle said
                his suit was 23 kilograms (50 lbs) of metal, and that he could not touch his face while wearing it. Cheadle signed a six-picture deal.
              </li>
              <li>
                <Link>Scarlett Johansson</Link> as <Link to="/mcu/natasha_romanoff">Natasha Romanoff / Black Widow</Link>:<br />
                An undercover spy for S.H.I.E.L.D. posing as Stark's new assistant. Johansson dyed her hair red before she landed the part, hoping that
                it would help convince Favreau that she was right for the role. On why she chose the role, Johansson said, "the Black Widow character
                resonated with me... [She] is a superhero, but she's also human. She's small, but she's strong... She is dark and has faced death so many
                times that she has a deep perspective on the value of life... It's hard not to admire her." She stated that she had "a bit of a freak-out
                moment" when she first saw the cat-suit and worked closely with the stunt team to learn how to fight in it in order to "sell it". During
                the promotion for <Link to="/mcu/black_widow_film">Black Widow</Link> (2021), Johansson said the character was hyper-sexualized in Iron
                Man 2, specifically referring to dialogue that described her as "a piece of something, like a possession", but at the time she felt this
                was "like a compliment". Though she was grateful to have bben a part of the film, she was more grateful that the character's portrayal
                had evolved to convey a more positive message by the time of Black Widow.
              </li>
              <li>
                <Link>Sam Rockwell</Link> as <Link>Justin Hammer</Link>:
                A rival weapons manufacturer. Sam Rockwell was considered for the role of Tony Stark in the first film, and he accepted the role of
                Hammer without reading the script. He had never heard of the character before he was contacted about the part, and was unaware Hammer
                is an old Englishman in the comics. Rockwell said, "I worked with Jon Favreau on this film called Made (2001). And Justin Theroux, who
                wrote the script, is an old friend of mine, they sort of cooked up this idea and pitched it to Kevin Feige. What they did, they were
                maybe going to do one villain like they did with <Link>Jeff Bridges</Link>, but then they decided to split the villains. And really
                Mickey [Rourke] is the main [villain], but I come to his aid." Rockwell described his character as "plucky comic relief, but he's got a
                little bit of an edge".
              </li>
              <li>
                <Link>Mickey Rourke</Link> as <Link>Ivan Vanko / Whiplash</Link>:<br />
                A Russian physicist and ex-convict who builds a pair of arc reactor-based electric whips to exact vengeance on the Stark family. The
                character is an amalgamation of <Link>Whiplash</Link> and <Link>Crimson Dynamo</Link>. Rourke visited Butyrka to research the role, and
                he suggested that half of the character's dialogue be in Russian. He also suggested the addition of tattoos, gold teeth, and a
                fondness for a pet cockatoo, paying for the teeth and bird with his own money. One of Rourke's tattoos read "Loki", the name of one of
                his dogs that had died prior to filming, which Feige requested be digitally removed as it felt it would lead to confusion regarding the
                comics character <Link>Loki</Link>, who was set to appear in <Link to="/mcu/thor_film">Thor</Link> (2011). Rourke explained that he did
                not want to play a "one-dimensional bad guy", and wanted to challenge the audience to see something redeemable in him. Not knowing
                anything about computers, Rourke described pretending to be tech-savvy as the hardest part of the role.
              </li>
              <li>
                <Link>Samuel L. Jacson</Link> as <Link to="/mcu/nick_fury">Nick Fury</Link>:<br />
                Director of S.H.I.E.L.D.: Jackson signed a nine-film contract to play the character. On the subject of his character not seeing any
                action in the film, Jackson said, "We still haven't moved Nick Fury into the bad-ass zone. He's still just kind of a talker."
              </li>
            </ul>
            <p>
              The director, Jon Favreau, reprises his role as <Link>Happy Hogan</Link>, Tony Stark's bodyguard and chauffeu, while <Link>Clark
              Gregg</Link> and Leslie Bibb reprise their roles as S.H.I.E.L.D. agent <Link>Phil Coulson</Link> and reporter <Link>Christine
              Everhart</Link>, respectively. <Link>John Slattery</Link> appears as Tony's father <Link>Howard Stark</Link> and Garry Shandling appears
              as United States Senator <Link>Stern</Link>, who wants Stark to give <Link>Iron Man's armor</Link> to the government. Favreau stated that
              Shandling's character was named after radio personality Howard Stern. <Link>Paul Bettany</Link> again voices Stark's computer,
              <Link>J.A.R.V.I.S.</Link>. Olivia Munn originally appeared as an unnamed character who was subsequently cut from the film. Favreau then
              gave her the role of Chess Roberts, a reporter covering the Stark expo. Yevgeni Lazarev appears as Ivan Vanko's father, <Link>Anton
              Vanko</Link>, <Link>Kate Mara</Link> portrays a process server who summons Tony to the government hearing, and <Link>Stan Lee</Link>
              appears as himself (but is mistaken for Larry King).
            </p>
            <p>
              Additionally, news anchor Christiane Amanpour, political commentator Bill O'Reilly, Tesla Motors CEO Elon Musk, and Oracle Corporation
              CEO Larry Ellison appear as themselves. Adam Goldstein, who also appears as himself, died before the film's release; the film is dedicated
              to his memory. Favreau's son Max appears as a child wearing an Iron Man mask whom Stark saves from a drone. In 2017,
              <Link to="/mcu/spiderman_homecoming"> Spider-Man: Homecoming</Link> director <Link>Jon Watts</Link> said that he had suggested to Feige
              that they retroactively establish this child to be the intoduction of a young <Link to="/mcu/peter_parker">Peter Parker / Spider-Man</Link>
              to the MCU, an idea that Feige agreed was plausible, and which then-Spider-Man actor <Link>Tom Holland</Link> also supported.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <p>
              Jon Favreau said it was originally his intent to create a film trilogy for <Link>Iron Man</Link>, with Obadiah Stane (Jeff Bridges)
              becoming <Link>Iron Monger</Link> during the sequels. After a meeting between Favreau and various comic book writers, including
              <Link> Mark Millar</Link>, Stane became the main villain in Iron Man. Millar argued that the <Link>Mandarin</Link>, whom Favreau
              originally intended to fill that role, was too fantastical. Favreau concurred, deciding, "I look at Mandarin more like how in
              <Link>Star Wars</Link> you had the <Link>Emperor</Link>, but <Link>Darth Vader</Link> is the guy you want to see fight. Then you work your
              way to the time when lightning bolts are shooting out of the fingers and all that stuff could happen. But you can't have what happened in
              <Link>Return of the Jedi</Link> (1983) happen in <Link>A New Hope</Link> (1977). You just can't do it". Favreau also discussed in
              interviews how the films' version of Mandarin "allows us to incorporate the whole pantheon of villains". He mentioned that S.H.I.E.L.D.
              would continue to have a major role.
            </p>
            <p>
              During development, Favreau said the film would explore Stark's alcoholism, but it would not be "the '<Link>Demon in a Bottle</Link>'
              version". While promoting the first film, Downey stated that Stark would probably develop a drinking problem as he is unable to cope with
              his age, the effects of revealing he is Iron Man, and Pepper getting a boyfriend. Downey later clarified that the film was not a strict
              adaptation of the "Demon in a Bottle" storyline from the comic book series, but was instead about the "interim space" between the origin
              and the "Demon" story arc. The storyline was ultimately downplayed for the film, as studio executives were concerned with how an alcoholic
              Iron Man would be perceived in marketing and affect merchandise sales. <Link>Shane Black</Link> gave some advice on a script, and
              suggested to Favreau and Downey that they model Stark on J. Robert Oppenhemier, who became depressed with being "the destroyer of worlds"
              after working on the Manhattan Project. An early version for the film's story involved Justin Hammer creating different villains in
              addition to Whiplash, like <Link>Ghost</Link>, but the idea was discarded. Ghost debuted in the MCU years later in
              <Link to="/mcu/antman_and_the_wasp"> Ant-Man and the Wasp</Link> (2018).
            </p>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <p>
              After the commercial success of Iron Man in May 2008, Marvel Studios began developing a sequel, with an intended release date of April 30,
              2010. That July, Favreau officially signed on to direct following several months of negotiating, while Justin Theroux signed to write the
              script, which would be based on a story written by Favreau and Downey. Theroux co-wrote <Link>Tropic Thunder</Link> (2008), which Downey
              had starred in, and Downey recommended him to Marvel. Genndy Tartakovsky storyboarded the film, and Adi Granov returned to supervise the
              design for <Link>Iron Man's armor</Link>.
            </p>
            <p>
              In October 2008, Marvel Studios came to an agreement to film Iron Man 2, as well as their next three films, at Raleigh Studios in
              Manhattan Beach, California. A few days later, Don Cheadle was hired to replace Terrence Howard. On being replaced, Howard stated, "There
              was no explanation, apparently the contracts that we write and sign aren't worth the paper that they're printed on sometims. Promises aren't
              kept, and good-faith negotiations aren't always held up." Entertainment Weekly stated Favreau did not even enjoy working with Howard, often
              re-shooting and cutting his scenes; Howard's publicist said he had a good experience playing the part, while Marvel chose not to comment.
              As Favreau and Theroux chose to reduce the role, Marvel came to Howard to discuss lowering his salary, Howard was the first actor hired in
              Iron Man and was paid the largest salary. The publication stated they were unsure whether Howard's representatives left the project first
              or if Marvel chose to stop negotiating. Theroux denied the part of the report which claimed the size of the role has fluctuated. In
              November 2013, Howard stated that, going into the film, the studio offered him far less than was in his three-picture contract, claiming
              they told him the second will be successful, "with or without you," and, without mentioning him by name, said Downey "took the money that
              was supposed to go to me and pushed me out."
            </p>
            <p>
              In January 2009, Rourke and Rockwell entered negotiations to play a pair of villains. A few days later, Rockwell confirmed he would take
              the role, and that his character would be Justin Hammer. Paul Bettany confirmed that he would be returning to voice J.A.R.V.I.S. Marvel
              entered into early talks with <Link>Emily Blunt</Link> to play the Black Widows, though she was unable to take the role due to a previous
              commitment to star in Gulliver's Travels (2010). Samuel L. Jackson confirmed that he had been in discussions to reprise the role of Nick
              Fury from the first film's post-credits scene, but that contract disputes were making a deal difficult. Jackson stated, "There was a huge
              kind of negotiation that broke down. I don't know. Maybe I won't be Nick Fury."
            </p>
            <p>
              In February, Jackson and Marvel came to terms, and he was signed to play the character in up to nine films. Downey and Rourke discussed his
              part during a roundtable discussion with David Ansen a the 2009 Golden Globes, and Rourke met with Favreau and Theroux to discuss the role.
              Rourke almost dropped out because of Marvel's initial salary offer of $250,000, but the studio raised the offer, and in March, Rourke signed
              on. Later that same day, Scarlett Johansson signed on to play the Black Widow. Her deal included options for multiple films, including
              potentially <Link to="mcu/the_avengers_film">The Avengers</Link>. Prior to her casting, Johansson had also researched other Marvel
              characters she could play, including the Blonde Phantom and the <Link>Wasp</Link>. In April, Garry Shandling, Clark Gregg, and Kate Mara
              joined the cast.
            </p>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <p>
              Principal photography began April 6, 2009, at the Pasadena Masonic Temple, with the working title Rasputin. The bulk of the production took
              place at the Raleigh Studios, though other locations were also used. Scenes were filmed at Edwards Air Force Base from May 11 through May
              13. The location had also been used for Iron Man, and Favreau stated that he felt the "real military assets make the movie more authentic
              and the topography and the beauty of the desert and flightline open the movie up". The Historical Grand Prix of Monaco action sequence was
              shot in the parking lot of Downey Studios, with sets constructed in May and filming lasting through June. Permission to film in Monaco
              prior to the 2009 Monaco Grand Prix had initially been awarded, but was later retracted by Bernie Ecclestone. The filmmakers shipped one
              Rolls-Royce Phantom there and filmed a track sequence in which race cars were later digitally added. Tanner Foust took on the role of
              driving Stark's racing car. Also in June, it was reported that John Slattery had joined the film's cast as Howard Stark. Olivia Munn was
              also cast, in an unspecified role.
            </p>
            <p>
              A massive green screen was constructed at the Sepulveda Dam to film a portion of the Stark Expo exterior, with the rest either shot at an
              area high school or added digitally. To construct the green screen, hundreds of shipping containers were stackd, covered in plywood and
              plaster, and then painted green. For the conclusion of that climactic scene, wich the crew dubbed the "Japanese Garden" scene, a set was
              built inside Sony Studios in Los Angeles. Filming lasted 71 days, and the film's production officially wrapped on July 18, 2009. A
              post-credits scene depicting the discovery of a large hammer was filmed on the set of <Link to="/mcu/thor_film">Thor</Link> (2011), and
              some of it was reused in the film. Jon Favreau revealed that the scene was filmed with anamorphic lenses to match Thor, and was directed
              by <Link>Kenneth Branagh</Link>, the director of Thor.
            </p>
            <p>
              A large amount of improvisation was done on set during filming, notably from Downey, which necessitated Theroux to do "writing gymnastics"
              to create a cohesive narrative around the various ad-libs; this process caused Theroux's back to give out and become bedridden because of
              the stress and toll it took on him. The film's story eventually strayed from the intended adaptation of the "Demon in the Bottle"
              storyline. Speaking to the "Demon in the Bottle" elements in the film, Theroux noted how Stark is shown drinking and out of control,
              becoming a "self-destructive ticking clock", stating that his palladium illness serves as a substitute metaphor for "a man who's running out
              of steam and needs his friends to step up". Additionally, the creatives did not want the film to become like Leaving Las Vegas (1995) had
              they faithfully adapted the storyline.
            </p>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
            <p>
              In January 2010, IMAX Corporation, Marvel, and Paramount announced that the film would receive a limited release on digital IMAX screens.
              It was not shot with IMAX cameras, so it was converted into the format using the IMAX DMR technology. The film underwent reshoots in
              February. Olivia Munn's original role was cut, but she was given a new role during the reshoots. 
            </p>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/b/b0/Iron_Man_and_War_Machine_suits_VFX_in_Iron_Man_2.jpg" 
                alt="Iron Man and War Machine suits VFX in Iron Man 2" 
              />
              <p>Robert Downy Jr. and Don Cheadle in their suits, before and after ILM's CGI enhancements</p>
            </div>
            <p>
              Janek Sirrs was the film's viusal effects supervisor, and <Link>Industrial Light & Magic</Link> did the majority of the effects, as it did
              on the first film. ILM's visual effects supervisor on the film, Ben Snow, said their work on the film was "harder" than their work on the
              first, stating that Favreau asked more of them this time around. Snow described the process of digitally creating the suits:
            </p>
            <div className="article-quote">
              <p>
                On the first Iron Man, we tried to use the Legacy [Studios, Stan Winston's effects company] and Stan Winston suits as much as we could. For
                the second one, Jon [Favreau] was confident we could create the CG suits, and the action dictated using them. So, Legacy created what we
                called the "football suits" from the torso up with a chest plate and helmet. We'd usually put in some arm pieces, but not the whole arm.
                In the house fight sequence, where Robert Downey Jr. staggers around tipsy, we used some of the practical suit and extended it digitally.
                Same thing in the Randy's Donuts scene. But in the rest of the film, we used the CG suit entirely. And Double Negative did an all-digital
                suit for the Monaco chase.
              </p>
            </div>
            <p>
              ILM created 527 shots for the film, using programs such as Maya. Perception worked on over 125 shots for the film. They crafted gadgets,
              such as Tony Stark's transparent LG smarthone, and created the backdrops for the Stark Expo as well as the computer screen interface on the
              touch-screen coffee table and the holographic lab environment. In total, 11 visual effect studios worked on the film.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            <p>
              A soundtrack album featuring AC/DC was released by Columbia Recors on April 19, 2010, in at least three different versions: basic, special,
              and deluxe. The basic edition includes the CD; the special edition contains a 15-track CD, a 32-page booklet and a DVD featuring interviews,
              behind-the-scenes footage, and music vidoes; and the deluxe includes a reproduction of one of Iron Man's first comic book appearance. Only
              2 songs on the soundtrack actually appear in the movie. Although not included on the soundtrack album, the film includes songs by The Average
              White Band, The Clash, Queen, Daft Punk, 2Pac and Beastie Boys.
            </p>
            <p>
              The film score was released commercially as Iron Man 2: Original Motion Picture Score on June 20, 2010, featuring 25 tracks. John Debney
              composed the score with Tom Morello, with composer Richard M. Sherman of the Sherman Brothers contributing the Stark Expo theme song, "Make
              Way for Tomorrow Today".
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            <div className="img-right img-card">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/Iron_man_2_cast_comic_con.jpg" 
                alt="Iron Man 2 cast Comic-on" 
              />
              <p>The cast of Iron Man 2 at the 2009 San Diego Comic-Con.</p>
            </div>
            <p>
              At the 2009 San Diego Comic-Con, a five-minute trailer for the movie was sown. Actors portraying Stark Industries recruiters handed out
              business cards with an invitation to apply. A website for Stark Industries went online, with an attached graphic of a "napkin memo" from
              Stark to Potts announcing that Stark Industries no longer made weapons. Another section featured an online application. It was confirmed
              that the first theatrical trailer would premiere in front of Sherlock Holmes (another Robert Downey Jr. film). This trailer was released
              online on December 16, 2009. A new trailer was shown by Robert Downey Jr. on <Link>Jimmy Kimmel Live!</Link> on March 7 after the Academy
              Awards. Promotional partners included Symantec, Dr. Pepper, Burger King, 7 Eleven, Audi, LG Electronics, and Hershey.
            </p>
            <p>
              Author Alexander C. Irvine adapted the script into a novel, also titled Iron Man 2, that was released in April 2010. Prior to the film's
              release, Marvel Comics released a four-issue miniseries comic book titled Iron Man vs. Whiplash, which introduced the film's version of
              Whiplash into the <Link>Marvel Universe</Link>. A three-issue prequel miniseries titled Iron Man 2: Public Identity was released in April.
            </p>
            <p>
              An <Link>Iron Man 2 video game</Link> was released by <Link>Sega</Link> on May 4, 2010, in North America, written by <Link>The
              Invincible Iron Man</Link> scribe Matt Fraction. The Wii version was developed by High Voltage Software and all console versions were
              published by Sega, while <Link>Gameloft</Link> published the mobile game. The game's Comic-Con trailer showed that the <Link>Crimson
              Dynamo</Link> was set to appear as a villain. Cheadle and Jackson voice their respective characters in the games. The trailer revealed
              that <Link>A.I.M,</Link>, <Link>Roxxon Energy Corporation</Link>, and <Link>Ultimo</Link> (depicted as man named Kearson DeWitt in a
              large armor suit) are enemies in the game as well as revealing that the wearer of the Crimson Dynamo armor is General Valentin Shatalov.
              The game received "generally unfavorable" revies, with a Metacritic score of 41% for both the PS3 and Xbox 36 versions.
            </p>
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
            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
            <h3 className="article-heading-3" id="7.3">Accolades</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequel"} />
          <div>

          </div>
        </div>
        <TableMcu />
      </main>
    </>
  )
}

export default IronMan2;