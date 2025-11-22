import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import TableMcu from '../../../components/TableMcu'

const IronMan2 = () =>
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
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg" 
            alt="Iron Man 2" 
            className="article-heading-img" 
          />
        </div>
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
          <h2 className="article-heading-2" id="1">Plot</h2>
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
          <h2 className="article-heading-2" id="2">Cast</h2>
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
          <h2 className="article-heading-2" id="3">Production</h2>
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
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Music</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Marketing</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Release</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
            <h3 className="article-heading-3" id="7.3">Accolades</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Sequel</h2>
        </div>
      </main>
    </>
  )
}

export default IronMan2;