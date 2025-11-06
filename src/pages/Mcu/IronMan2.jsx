import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

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
              Six months later, Tony wants to continue the legacy of his father <Lin>Howard</Lin>, and re-institutes the Stark Expo in New York City's
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
                moment" when she first saw the cat-suit and worked closely with the stunt team to learn how to fight in it in order to "sell it".
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Production</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
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