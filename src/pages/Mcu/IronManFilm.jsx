import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

const IronManFilm = () =>
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
          <li className="sidebar-list-item"><a href="#8">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Iron Man (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Iron Man (film)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg" 
            alt="Iron Man" 
            className="article-heading-img" 
          />
        </div>
        <div className="div-top">
          <p>
            Iron Man is a 2008 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character <Link>of the same name</Link>.
            Produced by <Link>Marvel Studios</Link> and distributed by <Link>Paramount Pictures</Link>, it is the first film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU).
            Directed by <Link>Jon Favreau</Link> from a screenplay by the writing team of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film
            stars <Link>Roberty Downey Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link> alongside Terrence Howard, <Link>Jeff Bridges</Link>, <Link>Gwyneth Paltrow</Link>,
            <Link> Leslie Bibb</Link>, and <Link>Shaun Toub</Link>. In the film, following his escape from captivity by a terrorist group, world-famous industrialist
            and master engineer Tony Stark builds a mechanical suit of armor and becomes the superhero Iron Man.
          </p>
          <p>
            A film featuring Iron Man was in development at <Link>Universal Pictures</Link>, <Link>20th Century Fox</Link>, and <Link>New Line Cinema</Link> at various
            times since 1990 before Marvel Studios reacquired the rights in 2005. Marvel put the project in production as its first self-financed film, with Paramount
            Pictures distributing. Favreau signed on as director in April 2006 and faced opposition from Marvel when trying to cast Downey in the title role; the actor was
            signed in September. Filming took place from March to June 2007, primarily in California to differenetiaite the film from numerous other superhero stories that
            are set in New York. During filming, the actors were free to create their own dialogue because pre-production was focused on the story and action. Rubber and
            metal versions of the armor, created by Stan Winston's company, were mixed with computer-generated imagery to create the title character.
          </p>
          <p>
            Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on May 2, as the first film in <Link>Phase One</Link> of the MCU. It
            grossed over $585 million, becoming the eigth-highest grossing film of 2008, and received praise from critics, especially for Downey's performance as well as
            Favreau's direction, the visual effects, action sequences, and writing. The American Film Insitute selcted it as one of the ten best films of 2008. It received
            two nominations at the 81st Academy Awards for Best Sound Editing and Best Visual Effects. In 2022, the Library of Congress selected the film for preservation
            in the United States National Film Registry for being "culturally, historically, or aesthetically significant". Two sequels have been released:
            <Link to="/mcu/iron_man_2"> Iron Man 2</Link> (2010), and <Link to="/mcu/iron_man_3">Iron Man 3</Link> (2013).
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Plot</h2>
          <div>
            <p>
              <Link to="/mcu/tony_stark">Tony Stark</Link>, who has inherited the defense contractor <Link>Stark Industries</Link> from his late father <Link>Howard Stark</Link>, tours in
              war-torn Afghanistan with his best friend and military liasion, <Link to="/mcu/james_rhodes">James "Rhodey" Rhodes</Link>, to demonstrate the new "Jericho" missile. After the
              demonstration, his convoy is ambushed by a terrorist group, the <Link>Ten Rings</Link>, and Stark is gravely wounded by a missile used by the attackers,
              one of his company's own. He is captured and imprisoned in a cave by the Ten Rings. <Link>Yinsen</Link>, a fellow captive and doctor, implants an
              electromagnet into Stark's chest to keep the shrapnel shards that wounded him from reaching his heart and killing him. Ten Rings leader <Link>Raza</Link>,
              offers Stark freedom in exchange for building a Jericho missile for the group, but he and Yinsen believe that Raza will not keep his word.
            </p>
            <p>
              Stark and Yinsen secretly build a small, powerful electric generator called an <Link>arc reactor</Link> to power Stark's electromagnet and construct a
              prototype armored suit to aid in their escape. Although they keep the suit hidden, the Ten Rings discover their intentions and attack the workshop.
              Yinsen sacrifices himself to divert them while the suit powers up. The armored Stark battles his way out of the cave to find the dying Yinsen, then
              burns the Ten Rings' weapons and flies away, crashing in the desert and destroying the suit. After being rescued by Rhodes, Stark returns home and
              announces that his company will cease manufacturing weapons. <Link>Obadiah Stane</Link>, his father's old partner and the company's manager, advises
              Stark that this will bankrupt Stark Industries and ruin his father's legacy. In his home workshop, Stark builds a sleeker, more powerful version of
              his improvised armor suit as well as a more powerful arc reactor for it and his chest after testing a prototype. Personal assistant
              <Link> Pepper Potts</Link> places the original reactor inside a small glass showcase. Though Stane requests details, a suspicious Stark decides to keep
              his work to himself.
            </p>
            <p>
              At a charity event, reporter <Link>Christine Everhart</Link> informs Stark that his company's weapons were recently delivered to the Ten Rings and are
              being used to attack Yinsen's home village. Stark dons his new armor and flies to Afghanistan, where he fends off the terrorists and saves the villagers.
              While flying home, Stark is intercepted by the Air Force. He reveals his secret identity to Rhodes over the phone to end the attack. Meanwhile, the Ten
              Rings gather the pieces of Stark's prototype suit and meet with Stane, who has been trafficking arms to the Ten Rings and has staged a coup to replace
              Stark as Stark Industries' CEO by hiring the Ten Rings to kill him. He subdues Raza and has him and the rest of the group killed. Stane has a massive
              new armor suit reverse-engineered from the wreckage. Seeking to track his company's illegal shipments, Stark sends Potts to hack into its database. She
              discovers that Stane hired the Ten Rings to kill Stark, but the group altered their plans when they realized they had a direct route to Stark's weapons.
              Potts meets with Agent <Link to="/mcu/phil_coulson">Phil Coulson</Link> of <Link>S.H.I.E.L.D.</Link>, an intelligence agency, to inform him of Stane's activities.
            </p>
            <p>
              Stane's scientists are unable to replicate Stark's miniature arc reactor, so Stane enters Stark's home, stuns him, and steals the one from his chest.
              Stark manages to replace it with his original reactor. Potts and several S.H.I.E.L.D. agents attempt to arrest Stane, but he dons his suit and overpowers
              them. Stark fights Stane but is outmatched without his new reactor to run his suit at full capacity. The fight carries Stark and Stane to the top of the
              Stark Industries building, where Stark instructs Potts to overload the large arc reactor powering the building. This unleashes a massive electrical surge
              that causes Stane to fall into the reactor and he is killed in the explosion. The next day, at a press conference, Stark publicly admits to being the
              superhero the press has dubbed "Iron Man".
            </p>
            <p>
              In a post-credits scene, S.H.I.E.L.D. director <Link to="/mcu/nick_fury">Nick Fury</Link> visits Stark at his home, telling him he has become part of a
              "bigger universe", and that he wants to discuss the "<Link>Avengers Initiative</Link>".
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Cast</h2>
          <div>
            <ul className="article-list">
              <li>
                <Link>Robert Downey Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link>:<br />
                An industrialist, genius inventor, and playboy, he is CEO of Stark Industries and chief weapons manufacturer for the U.S. military. Director Jon
                Favreau felt that Downey's past made him an appropriate choice for the part and that the actor could not only make Stark a "likeable asshole."
                but also portray an authentic emotional journey, one he had won over the audience. Favreau was also attracted to Downey because of his performance
                in <Link>Kiss Kiss Bang Bang</Link>. Downey frequently spoke with the film's director, <Link>Shane Black</Link>, about the script and dialogue in
                Iron Man. Downey had an office next to Favreau during pre-production, which allowed him greater involvement in the screenwriting process, especially
                when it came to adding humor to the film. Downey explained, "What I usually hate about these [superhero] movies [is] when suddenly the guy that you
                were digging turns into Dudley Do-Right, and then you're supposed to buy into all his 'Let's go do some good!' That Eliot Ness-in-a-cape-type thing.
                What was really important to me was to not have him change so much that he's unrecognizable. When someone used to be a schmuck and they're not
                anymore, hopefully they still have a sense of humor." To get into shape, Downey spent five days a week weight training and practiced martial arts,
                which he said benefited him because "it's hard not to have a personality meltdown ...after about several hours in that suit. I'm calling up
                every therapeutic moment I can think of to just get them through the day."
              </li>
              <li>
                <Link>Terrence Howard</Link> as <Link to="/mcu/james_rhodes">James "Rhodey" Rhodes</Link>:<br />
                A friend of Stark's and the liaison between Stark Industries and the United States Air Force in the department of acquisitions, specifically
                weapons development. Favreau cast Howard because he felt he could play War Machine in a sequel. Howard prepared for the role by visiting Nellis
                Air Force Base on March 16, 2007, where he ate with the pilots and observed HH-60 Pave Hawk rescue helicopters and F-22 Raptors. While Rhodes is
                roguish in the comics after he meets Stark, his previous role as a disciplinarian creates a dynamic tension with Stark's character. He is unsure
                whether Stark's actions are acceptable, "Rhodey is completely disgusted with the way Tony has lived his life, but at a certain point he realizes
                that perhaps there is a different way," Howard said. "Whose life is the right way: Is it the strict military life, or the life of an independent?"
                Howard and his father are Iron Man fans, partly because Thodes was one of the few black superheroes when Howard was a child. Howard admired
                Downey as an actor since the latter appeared in Weird Science (1985); the two completed physically on set. Howard signed a three-picure deal
                with Marvel Studios.
              </li>
              <li>
                <Link>Gwyneth Paltrow</Link> as <Link>Virgina "Pepper" Potts</Link>:<br />
                Stark's personal assistant and budding love interest. Paltrow asked Marvel to send her any comics they would consider relevant to her
                understanding of the character, whom she considered to be very smart, level-headed, and grounded. She said she like "the fact that there's a
                sexuality that's not blatant." Favreau wanted Potts' and Stark's relationship to be reminiscent of a 1940s comedy, something which Paltrow
                considered to be fun in an "innocent yet sexy" way.
              </li>
              <li>
                <Link>Leslie Bibb</Link> as <Link>Christine Everhart</Link>: A reported for Vanity Fair.
              </li>
              <li>
                <Link>Shaun Toub</Link> as <Link>Ho Yinsen</Link>: Stark's fellow captive, who grafts an electromagnet to Stark's chest "to keep the shrapnel
                shell shards that wounded him from reaching his heart and killing him" and helps Stark build the first Iron Man suit.
              </li>
            </ul>
            <p>
              Additionally, Faran Tahir appears as <Link>Raza</Link>, the leader of the Ten Rings; <Link>Paul Bettany</Link> voices <Link>J.A.R.V.I.S.</Link>,
              Stark's personal AI system; and <Link>Clark Gregg</Link> appears as <Link to="/mcu/phil_coulson">Phil Coulson</Link>, an agent of S.H.I.E.L.D.
              Will Lyman provides the voice-over during the opening awards ceremony. Director <Link>Jon Favreau</Link> plays <Link>Harold "Happy" Hogan</Link>,
              Stark's bodyguard and chauffeur, and <Link>Samuel L. Jackson</Link> makes an uncredited cameo appearance as <Link to="/mcu/nick_fury">Nick Fury</Link>,
              director of S.H.I.E.L.D., in a post-credits scene. Jackson's face was previously used as the model for the <Link>Ultimate Marvel</Link> imprint
              <Link>version of Nick Fury</Link>. Other cameos in the film include <Link>Stan Lee</Link> as himself, being mistaken for Hugh Hefner by Stark
              at a party; Peter Billingsley as <Link>William Ginter Riva</Link>, a scientist who works for Stane; Tom Morello, who provided guitar music for
              the film, as a terrorist guard; and Jim Cramer as himself. Ghostface Killah, who often adopted Iron Man's name as an alias, had a cameo in a
              scene where Stark says in Dubai, but the scene was cut for pacing reasons.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Production</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <p>
              In April 1990, Universal Pictures bought the rights to develop Iron Man for the big screen, with Stuart Gordon to direct a low-budget film based
              on the property. By February 1996, 20th Century Fox had acquired the rights from Universal. In January 1997, <Link to="#">Nicolas Cage</Link> expressed 
              interest in portraying the character, while in September 1998, <Link to="#">Tom Cruise</Link> expressed interest in producing as well as starring
              in an Iron Man film. Jeff Vintar and Iron Man co-creator Stan Lee co-wrote a story for Fox, which Vintar adapted into a screenplay. It included a
              new science-fiction origin for the character, and featured <Link to="#">MODOK</Link> as the villain. Tom rothman, President of Production at Fox,
              credited the screenplay with finally making him understand the character. In May 1999, Jeffrey Caine was hired to rewrite Vintar and Lee's script.
              That October, <Link to="#">Quentin Tarantino</Link> was approached to write and direct the film. Fox sold the rights to New Line Cinema the
              following December, reasong that although the Vintar/Lee scripts was strong, the studio had too many Marvel superheroes in development, and "we
              can't make them all."
            </p>
            <p>
              By July 2000, the film was being written for New Line Cinema by Ted Elliott, Terry Rossio, and Tim McCanlies. McCanlies' script used the idea of
              a Nick Fury cameo to set up his own film. In June 2001, New Line Cinema entered talks with <Link to="#">Joss Whedon</Link>, a fan of the character,
              to direct, and in December 2002, McCanlies had turned in a completed script. New Line took a "unique" approach to writing the film's script,
              hiring David Hayter, David S. Goyer, and Mark Protosevich to "sit in a room and simply talk on camera about Iron Man for a few days". After this,
              Hayter was hired in 2004 to write the script. He reworked scripts that had been written by Jeff Vintar and Alfred Gough and Miles Millar, which had
              included the villain the <Link to="#">Mandarin</Link> and Pepper Potts as a love interest. Hayter removed the Mandarin and instead chose to pit
              Iron Man against his father Howard Stark, who becomes War Machine. Hayter said "you want to try to mirror your hero with your villain as much as
              possible" for his reasoning behing making Howard the villain. He also made <Link to="#">Bethany Cabe</Link> the film's love interest over Potts.
              In December 2004, the studio attached director Nick Cassavetes to the project for a target 2006 release. However, this deal ultimately fell
              through, and the Iron Man film rights return to Marvel.
            </p>
            <p>
              In November 2005, Marvel Studios worked to start development from sratch, and announced Iron Man as their first independent feature, because the
              character was their only major one not already depicted in live action. Paramount Pictures was announced as Marvel's distribution partner for Iron
              Man. According to associate producer Jeremy Latcham, "we went after about 30 writers and they all passed," saying they were uninterested in the
              project due to both the relative obscurity of the character and the fact that it was solely a Marvel production. When the film did have a script,
              even the requests to rewrite met with many refusals. Early scripts for the film also directly referenced Sony Pictures' <Link>Spider-Man 2</Link>
              (2004) by identifying Stark as the creator of <Link>Otto Octavius</Link>'s bionic arms. In order to build the general public's awareness of Iron
              Man and elevate him to the same level of popularity as <Link>Spider-Man</Link> or <Link>Hulk</Link>, Marvel conducted focus groups, trying to find
              a way to remove the general perception that the character is a robot. The information Marvel received from the focus groups was used to formulate
              an awareness-building plan which included releasing three animated short films ahead of the film's release. The shorts were called "Iron Man
              Advertorials", and were produced by <Link>Tim Miller</Link> and Blur Studio.
            </p>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <p>
              Jon Favreau was hired to direct the film in April 2006, and he celebrated getting the job by going on a diet, resulting in him losing 70 pounds
              (32 kg). Favreau had wanted to work with Marvel producer <Link>Avi Arad</Link> on another film after they both worked on <Link>Daredevil</Link>
              (2003). The director found the opportunity to create a politically ambitious "ultimate spy movie" in Iron Man, citing inspiration from
              <Link> Tom Clancy</Link>, <Link>James Bond</Link>, and <Link>Robocop</Link> (1987), and compared his approach to an independent film, "If
              Robert Altman had directed <Link>Superman</Link>" and <Link>Batman Begins</Link> (2025). Favreau wanted to make Iron Man a story of an adult man
              literally reinventing himself after discovering the world is far more complex than he originally believed. He changed the Vietnam War origin of
              the character to Afghanistan, as he did not to do a period piece. Art Marcum and Matt Holloway were hired to write the script, while Mark Fergus
              and Hawk Ostby wrote another version, with Favreau compiling both teams' scripts, and John August then "polishing" the combined version. Comic
              book staff <Link>Mark Millar</Link>, <Link>Brian Michael Bendis</Link>, <Link>Joe Quesada</Link>, Tom Brevoort, Axel Alonso, and Ralph Macchio
              were also called upon by Favreau to give advice on the script. In May 2006, Arad left Marvel Studios to become an independent producer. Because
              he was on staff when the deal was made for Iron Man, he retained producer credit on the film. By July 2006, Matthew Libatique was attached to
              serve as cinematographer.
            </p>
            <p>
              Favreau planned to cast a newcomer in the title role, as "those movies don't require an expensive star; Iron Man's the star, the superhero is
              the star. The success of <Link>X-Men</Link> and <Link>Spider-Man</Link> without being star-driven pieces reassures [executives] that the film
              does have an upside commercially." Those considered for the role included Jim Caviezel, <Link>Timothy Olyphant</Link>, <Link>Sam Rockwell</Link>,
              and Clive Owen. Rockwell was approached and was interested, but Favrueau then met with Robert Downey Jr., who he was convinced was the right
              actor for the role. Favreau chose Downey, a fan of the comic, because he felt the actor's past made him an appropriate choice for the part,
              explaining: "The best and worst moments of Robert's life have been in the public eye. He had to find an inner balance to overcome obstacles
              that went far beyond his career. That's Tony Stark." Favreau faced opposition from Marvel Entertainment executives in casting Downey, but
              would not take no for an answer, saying: "It was my job as a director to show that it was the best choice creatively ...everybody knew he was
              talented [and] certainly by studying the Iron Man role and developing that script I realized that the character seemed to line-up with Robert
              in all the good and bad ways." Casting director <Link>Sarah Hailey Finn</Link> suggested Downey create an audition tape to help persuade them.
              The executives were still not convinced, despite Favreau and Feige recommending Downey for the role, which resulted in Favreau leaking to the
              press that Downey was in talks; the positive reaction and enthusiasm to this story helped convice the executives, and Downey was cast in
              September 2006. Rockewell would later portray <Link>Justin Hammer</Link> in <Link>Iron Man 2</Link> (2010). Downey earned $500,000 for the
              role. While preparing for filming, Favreau and Downey were given a tour of SpaceX by Elon Musk. Downey said, "Elon was someone Tony probably
              hung out with and partied with, or more likely went on some weird jungle trek together to drink concotions with the shamans."
            </p>
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
          <h2 className="article-heading-2" id="8">Sequels</h2>
          <div></div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}


export default IronManFilm;



