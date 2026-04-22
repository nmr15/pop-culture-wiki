import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const IronMan3 = () =>
{
  useEffect(() =>
  {
    document.title = "Iron Man 3 - Pop Culture Wiki";
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
              {id: "3.1", title: "Development", sub2: [
                {id: "3.1.2", title: "Writing"}
              ]},
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
          <li className="sidebar-list-item"><a href="#8">Themes and analysis</a></li>
          <Collapse 
            id="9"
            item="Future"
            sub={[
              {id: "9.1", title: "Potential sequel"},
              {id: "9.2", title: "Marvel One-Shot"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Iron Man 3</li>
        </ul>
        <div>
          <h1 className="article-heading">Iron Man 3</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Iron Man 3</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg" alt="Iron Man 3 poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Shane Black</Link></td>
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
              <td className="infobox-data"><Link to="/mcu/the_avengers_film">The Avengers</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/thor_the_dark_world">Thor: The Dark World</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Iron Man 3</b> is a 2013 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/iron_man"> Iron Man</Link>, produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion
            Pictures. It is the sequel to <Link to="/mcu/iron_man_film">Iron Man</Link> and <Link to="/mcu/iron_man_2">Iron Man 2</Link>, and the seventh
            film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). The film was directed by <Link>Shane Black</Link> from a screenplay he
            co-wrote with Drew Pearce, and stars <Link>Robert Downey Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link> alongside
            <Link> Gwyneth Paltrow</Link>, <Link>Don Cheadle</Link>, <Link>Guy Pearce</Link>, <Link>Rebecca Hall</Link>, Stéphanie Szostak, James Badge
            Dale, William Sadler, Miguel Ferrer, <Link>Jon Favreau</Link>, and <Link>Ben Kingsley</Link>. In the film, Stark grapples with the
            consequences of the events of <Link to="/mcu/the_avengers_film">The Avengers</Link> (2012) during a national terrorism campaign on the United
            States led by the mysterious <Link>Mandarin</Link>.
          </p>
          <p>
            After the release of Iron Man 2 in May 2010, director Jon Favreau chose not to direct the third film. Black was hired to write and direct
            the sequel in February 2011, working with Pearce to make the script more character-centric, focus on thriller elements, and use concepts
            from Warren Ellis's "<Link>Extremis</Link>" comic book story arc. The film's supporting cast, including Kingsley, Pearce, and Hall, were
            brought on throughout April and May 2012. Filming took place from May 23 to December 17, 2012, primarily at EUE/Screen Gems Studio in
            Wilmington, North Carolina. Additional filming took place around North Carolina as well as in Florida, Los Angeles, and China; an extended
            version of the film specifically for Chinese audiences was created. Seventeen companies provided the film's visual effects.
          </p>
          <p>
            Iron Man 3 premiered at the Grand Rex in Paris on April 14, 2013 and was released in the United States on May 3, as the first film in
            <Link>Phase Two</Link> of the MCU. It received positive reviews from critics, with praise for its action sequences, Blake's direction, and
            Downey's performance, though there was criticism for the portrayal of the Mandarin. The film was a box office success, grossing over
            $1.215 billion worldwide, making it the second-highest-grossing film of 2013 and the sixteenth film to gross over $1 billion. It finished its
            theatrical run as the fifth-highest grossing film of all time, while its opening weekend was the sixth-highest of all time. The film
            received Best Visual Effects nominations at the Academy Awards and the BAFTA Awards.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0e/TStark-MeetingAKillian.jpeg" alt="Tony and Aldrich" />
                <p>Tony Stark meets Aldrich Killian.</p>
              </div>
              <p>
                Tony Stark begins narrating the story of how he lost everything, starting how it all started at a New Year's Eve party in 1999; Tony meets the
                eccentric and physically disabled <Link to="/mcu/aldrich_killian">Aldrich Killian</Link>, who promotes his company,
                <Link to="/mcu/aim"> Advanced Idea Mechanics</Link>. However, Tony, deciding to research another operation, <Link to="/mcu/extremis">Extremis</Link>
                with <Link to="/mcu/maya_hansen">Maya Hansen</Link> misleads Killian into believing he was interested in his ideas. He sends him to wait on the
                roof, never intending to show up. Tony witnesses the powers of Extremis first-hand, as it can genetically manipulate living organisims. As the year
                2000 begins, New Year's fireworks go off, and Killian is left alone on the roof.
              </p>
            </div>
            <div className="flex">
              <p>
                Thirteen years later, following the Battle of New York, Tony has spent all his time building dozens of new powered suits. It is clear that his near
                death experience while destorying the <Link>Chitauri</Link> has had a deep effect on him, as he starts showing signs of post traumatic stress
                disorder. Not helping is the emergence of a new threat; a powerful terrorist leader named the
                <Link to="/mcu/trevor_slattery"> Mandarin</Link> has been responsible for multiple bombings. In order to assure the public that the US government
                is capable of handling the threat, they have given <Link to="/mcu/james_rhodes">James hodes</Link>' War Machine armor a Captain America-inspired
                paint job and renamed him "Iron Patriot", to a mixed reception across the United States.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/ee/Mark4p.jpg" alt="Mark 42 armor" />
                <p>Tony Stark tests the Mark XLII Armor.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/66/Trevor_Slattery_%28Mandarin%29.jpg" alt="The Mandarin" />
                <p>Trevor Slattery portrays the "Mandarin".</p>
              </div>
              <p>
                Tony meets Rhodes in a diner and the two discuss the Mandarin. Rhodes reveals there have been more bombings than have been reported on the news,
                and intelligence agencies have been left mystified by the lack of physical evidence left behind. Rhodes insists that Tony not get involved, as the
                US government is keen to handling this themselves to reassure people who have been left nervous following the Chitauri invasion. The discussion is
                interrupted when two children ask Tony to sign a drawing of him carrying the nuclear missile through the wormhole, and the image clearly puts
                Stark on edge. When one of the children asks how he escaped the wormhole, this triggered a severe panic attack and Tony leaves abruptly,
                concerning Rhodes.
              </p>
            </div>
            <div className="flex">
              <p>
                That night, Tony has a nightmare about his near death causing one of his suits to nearly attack <Link to="/mcu/pepper_potts">Pepper Potts</Link>,
                when it detects he is in distress. Pepper gets ready to leave, so Tony finally admits that something about him has changed since he left New York
                City. The situation becomes even worse when Pepper is visited by Killian, who happens to be an old love interest. Killian is now far more suave and
                confident, and no longer shows any signs of his previous handicap. Pepper rejects Killian's invitation into Advanced Idea Mechanics.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/6/6f/Aldrich_Killian_%26_Pepper_Potts.jpg" alt="Killian and Pepper" />
                <p>Pepper Potts says goodbye to Aldrich Killian.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/cc/ChineseTheatreExplosion2.jpg" alt="Chinese Theater explosion" />
                <p>Jack Taggart accidentally explodes.</p>
              </div>
              <p>
                <Link to="/mcu/happy_hogan">Happy Hogan</Link>, who has been promoted to Stark Industries' head of security (since Iron Man is hardly in need of a
                bodyguard at this point), becomes suspicious of Killian's bodyguard, Eri Savin, and investigates him at the Chinese Theatre. When he witnesses Jack
                Taggart unexpectedly combust. It destroys the Chinese Theatre, and puts Happy into the Cedars-Sinai hospital: Savin escapes, mysteriously
                regenerating from his injuries.
              </p>
            </div>
            <div className="flex">
              <p>
                When leaving the hospital after visiting Happy, a pointed question by a reporter causes a furious Tony to make an impromptu statement towards the
                Mandarin, promising revenge and giving him his home address as a challenge. Later, Tony is unexpctedly visited by Hansen, and the same time, Tony's
                home is attacked and destroyed by the Mandarin's helicopters. Tony survives the attack, but is left stranded in rural Rose Hill, Tennessee when
                <Link to="/mu/jarvis">J.A.R.V.I.S.</Link> follows a flight plan left in his system, and Tony's experimental armor does not have sufficient power to
                return to California. The world believes Tony to be dead as the Mandarin starts issuing more threats of violence. Unfortunately, after landing,
                J.A.R.V.I.S. powers down as the suit runs out of charge, leaving Tony with nothing but a dead suit and the clothes on his back.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/a/a5/Tony_armor.jpg" alt="Pepper using the armor" />
                <p>Pepper Potts using the XLII Armor to save Tony Stark.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/d/d0/Armor_Tony.jpg" alt="Tony sitting with his armor" />
                <p>Tony Stark relaxes beside his Mark XLII armor.</p>
              </div>
              <p>
                Tony uses his apparent death to his advantage, conducting an investigation into an explosion that bears the same hallmarks as one of the
                Mandarin's attacks, but which the Mandarin did not claim responsibility for. Tony befriends a local boy named
                <Link to="/mcu/harley_keener"> Harley Keener</Link>, and hides out in his garage where he begins slowly charging his suit. Using what little
                information he has, Tony discovers that each of the Mandarin's explosions was triggered by soldiers that were infected with Extremis, the same
                experimental treatment engineered by Maya Hansen.
              </p>
            </div>
            <div className="flex">
              <p>
                Extremis, however, has a fatal flaw; in the event a user is unable to regulate their internal body temperature, they will start to gain heat at an
                exponential rate and explode. Tony witnesses the power of Extremis first-hand when he is attacked by Ellen Brandt and Eric Savin. Tony sets fire to
                a building that blows up Brandt, and even though Savin had set a water tower on fire using his thermal abilities and had brought the tower down on
                Tony, Tony survives and after shooting Savin he steals his car keys. Savin survives, while Tony abandons Harley and flees Rose Hill.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/b/b9/TonyandHarley-IM3.jpg" alt="Tony and Harley" />
                <p>Tony Stark befriends Harley Keener.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/02/Aldrich_Killian.jpg" alt="Aldrich Killian" />
                <p>Aldrich Killian is updated about the attack on Tony Stark.</p>
              </div>
              <p>
                Further investigation into the Mandarin, he realizes that all the soldiers were once members of Advanced Idea Mechanics, Killian's company. Tony
                dedues that Killian had updated Extremis, and distributed the program to the Mandarin for his terror attacks. Hansen confirms working with
                Killian to Pepper, in an attempt to have Tony fix Extremis' flaws. However, unbeknownst to them, Killian arrives and kidnaps Pepper, after
                learning that Hansen visited Tony prior to the attack on his mansion.
              </p>
            </div>
            <div className="flex">
              <p>
                With Keener's help, Tony traces the Mandarin to Miami, where he infiltrates the Mandarin's headquarters with a variety of home-made weapons. There,
                he discovers that the Mandarin is actually a British actor named Trevor Slattery, who is completely oblivious to the acts the Mandarin has
                carried out. The Mandarin is Killian's creation, who used Hansen's research to cure his own disability and expanded the program to include
                injured war veterans.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/98/Trevor-Slattery-BloodyEll.jpg" alt="Trevor Slattery" />
                <p>Trevor Slattery being confronted by Tony Stark.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/cd/StarkKillian-HansensThreat.jpeg" alt="Maya betrays Aldrich" />
                <p>Maya betrays Aldrich.</p>
              </div>
              <p>
                After veterans started growing unstable and exploding, Killian used their deaths to cover up the flaws in Extremis and manufacture a terrorist
                plot. Realizing Killian's motivations, Tony blames himself for setting Killian on the path that would ultimately see him create the Mandarin.
                Killian reveals he has kidnapped Pepper and subjected her to the Extremis treament, using her as leverage against Tony. When Hansen reneges against
                Killian, and threatens to sabotage the Extremis program, Killian shoots her dead.
              </p>
            </div>
            <div className="flex">
              <p>
                As he controls the Mandarin, Killian has also manipulated the American intelligence agencies as to the Mandarin's location. He uses this falsified
                intelligenceto lure Rhodey with the Iron Patriot armor. Tony escapes captivity, just as Killian sends Savin to commandeer an attack on President
                Matthew Ellis aboard Air Force One. Saving plants a bomb on the plane, and kills multiple Secret Service agents, before abducting Ellis; Tony
                intervenes and kills Savin, but the bomb goes off, sucking out multiple passengers. Tony saves the passengers and crew from their deaths, but Ellis
                is nonetheless captured by Killian.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/0f/Iron_Patriot.png" alt="Iron Patriot" />
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e6/James_Rhodes_%26_Tony_Stark.jpg" alt="Tony and Rhodey" />
                <p>Tony and Rhodey witness the Iron Legion's arrival.</p>
              </div>
              <p>
                They follow him to a container terminal, where he intends to kill Ellis on live television. Vice President Gil Rodriguez will assume control of the
                country, following Killian's orders in exchange for a sample of Extremis to cure his daughter's disability. With the Mandarin and the President
                under his control, Killian will be able to manipulate global events for his own profit. Tony and Rhodey infilitrate the container terminal, with
                Tony going to save Pepper and Rhodey the President. Tony summons each of the Iron Man suits he has created, controlled remotely by J.A.R.V.I.S., to
                support them from the air. Rhodey secures President Ellis and leads him to safety, whilst Stark discovers that Pepper has survived the Extremis
                procedure. However, before he can save her, the rig collapses around them and Pepper falls to her apparent death.
              </p>
            </div>
            <div className="flex">
              <p>
                Tony has not time to process this as he is forced into a fierce fight with Killian whilst wearing various Iron Man suits. Tony successfully traps
                him in one of the suits and has it self-destruct. He starts searching Pepper, who survived her fall cortesy of the abilities she received from
                Extremis. A deformed Killian emerges from the wreckage and reveals to Stark that he is the real Mandarin, before attempting to kill Tony, but is
                instead killed by Pepper.
              </p>
              <div className="img-card ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/0/05/Aldrich_killian.jpg" alt="Aldrich Killian Extremis" />
                <p>Killian declaring himself as the Mandarin.</p>
              </div>
            </div>
            <div className="flex">
              <div className="img-card mr-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/e/e1/Dum-E_Saved.png" alt="Tony's mansion" />
                <p>Tony leaves his mansion.</p>
              </div>
              <p>
                In the aftermath of the events on the container terminal, Tony makes a promise to Pepper that he'll find a cure for her Extremis condition and
                orders J.A.R.V.I.S. to remotely destroy each of the Iron Man suits. Both Vice President Rodriguez and Trevor are taken into police custody, while
                Tony is able to reverse Pepper's Extremis condition. Afterwards, Tony decides to undergo surgery to remove the pieces of shrapnel embedded in
                his hear, and also rewards Harley for his help by filling his garage with cool and expensive items. Returning to the spot his mansion once stood,
                Tony throws the Arc Reactor into the sea as he remarks that even when he has nothing, he will always be Iron Man.
              </p>
            </div>
            <div className="flex">
              <p>
                Tony finishes telling this story, and it is revealed he was telling it to <Link to="/mcu/bruce_banner">Bruce Banner</Link>, who had fallen asleep
                near the beginning. As Bruce insists he isn't a psychiatrist as he hasn't got the temperament for the job, Tony starts telling the story again,
                much to Bruce's annoyance.
              </p>
              <div className="img-csrd ml-1">
                <img src="https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/92/Bruce_as_Tony%27s_therapist.jpg" alt="Tony and Bruce" />
                <p>Tony tells Bruce his story.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            <ul className="article-list">
              <li>
                <Link>Robert Downsy Jr.</Link> as <Link to="/mcu/tony_stark">Tony Stark / Iron Man</Link>: <br />
                An Avenger amd a self-described genius, billionaire, playboy, and philanthropist with mechanical suits of armor of his own invention. Tony now
                struggles to come to terms with his near-death experience in <Link to="/mcu/the_avengers_film">The Avengers</Link>, suffering from anxiety
                attacks. On making a third Iron Man film, Downey said, "My sense of it is that we need to leave it all on the field, whatever that means in the
                end. You can pick several different oints of departure from that." On following up The Avengers, Downey said they "tried to be practical, in a
                post-Avengers world. What are his challenges now? What are some limitations that might be placed on him? And what sort of threat would have him, as
                usual, ignore those limitations?" Screenwriter Drew Pearce compared Tony to an American James Bond for both being "heroes with a sense of danger to
                them, and unpredictable" evein if Stark was a "free agent" instead of an authority figure like Bond. He also likened Tony to the protagonists of
                1970s films such as The French Connection (1971), where "the idiosyncrasies of the heroes is what made them exciting."
              </li>
              <li>
                <Link>Gwyneth Paltrow</Link> as <Link to="/mcu/pepper_potts">Pepper Potts</Link>: <br />
                Tony's girlfriend, longtime associate, and the current CEO of Stark Industries. Paltrow says of her character's relationship to Tony, "She still
                adores Tony, but she absolutely gets fed up with him. He gets caught in a feedback loop." Kevin Feige commented on Pepper's role in the film: "The
                love triangle in this movie is really between Tony, Pepper, and the suits. Tony, Pepper, and his obsession with those suits, and the obsession
                with technology." Feige also stated the film uses the character to play with the damsel in distress trope, and posits the question, "is Pepper in
                danger or is Pepper the savior?"
              </li>
              <li>
                <Link>Don Cheadle</Link> as <Link to="/mcu/james_rhodes">James "Rhodey" Rhodes / War Machine</Link>: <br />
                Tony's best friend and the liaison between Stark Industries and the U.S. Air Force in the department of acquisitions. Rhodes operates the
                redesigned/upgraded War Machine armor, taking on an American flag-inspired color scheme similar to the Iron Patriot armor from the comics. Feige
                said of Rhodes and the armor, "The notion in the movie is that a red, white, and blue suit is a bold statement, and it's meant to be. With Rhodey,
                he's very much the foil to Tony's eccentricities, and in this one you get to see this and be reminded of the trust and friendship between them in
                that great Shane Black buddy-cop fashion." In the film, the president asks Rhodey to up the moniker "Iron Patriot", and don the red, white, and blue
                suit, in order to be the government's "American hero" in response to the events in The Avengers.
              </li>
              <li>
                <Link>Guy Pearce</Link> as <Link to="/mcu/aldrich_killian">Aldrich Killian</Link>: <br />
                The creator of the Extremis virus and the founder and owner of the science and developmnt organization Advanced Idea Mechanics who adopts the
                mantle of the Mandarin as his own. Killian develops Extremis to cure his own debilitating disability; in addition to his regenerative healing
                qualities, he has superhuman strength and the ability to generate extreme heat. Prolonged exposure to Extremis also grants him the ability to
                breathe fire. Pearce felt he was "a little more experimental" in the roles he was taking in his career, and was not keen on appearing in a
                superhero film, but felt his role in this film was "cameo stuff" which was a more enjoyable experience because he was "working in concentrated
                spurts." Pearce described Killian as a man with physical disabilities who has "never been able to accept those limitations" and works to overcome
                them, continuing, "His tenacity and blind dtermination in fighting for a better life are seen by some as irritating, as he often comes across as
                obnoxious." Black felt that Perace ultimately is the Mandarin in the film, and that Marvel worked with him "to come up with these crazy things,
                these far out ideas" that divert from established expectations from the comics.
              </li>
              <li>
                <Link>Rebecca Hall</Link> as <Link to="/mcu/maya_hansen">Maya Hansen</Link>: <br />
                A geneticist whose work helped Killian create Extremis. Hall said Hansen would be a "strong female character," and described her decision to
                take the role, saying, "I decided to do Iron Man 3 because I've never done the 'hurry up and wait' movie before. Even the studio movies I've done
                have been small studio movies, or indie film that we made on a wing and a prayer. I love these, but Iron Man is refreshing in a way because it's
                something out of my realm of experiences." Hall confirmed her character's role was greatly reduced in the final film, saying, "I signed on to do
                something that was a substantial role. She wasn't entirely the villain, there have been several phases of this, but I signed on to do something
                very different to what I ended up doing."
              </li>
              <li>
                <Link>Stéphanie Szostak</Link> as Ellen Brandt: <br />
                A war veteran who becomes an assassin after her exposure to Extremis. Describing Brandt, Szostak says, "...Extremis was a second chance at life.
                We talked about what you fell like and I think it almost makes you a fuller version of who you are, all your weakness and your qualities, just
                everything gets enhanced. I saw it as very freeing, almost you become your true-self and your fantasy-self all at once." The writers originally
                envisioned Brandt as Killian's mainhenchman, who would return throughout the film to fight Tony, but eventually, that role was reassigned to Erik
                Savin.
              </li>
              <li>
                <Link>JJames Badge Dale</Link> as Eric Savin: <br />
                Killian's Extremis-powered henchman. Dale stated that his character in the film was "loosely based on" the comic version of the character.
                According to Dale, "Ben Kingsley is the mouthpiece. Guy Pearce is the brain. I'm the muscle."
              </li>
              <li>
                <Link>William Sadler</Link> as Matthew Ellis: The President of the United States, named after Warren Ellis, who wrote the "Extremis" comics arc
                that primarily influenced the film's story.
              </li>
              <li>
                <Link>Miguel Ferrer</Link> as Rodriguez: The Vice President of the United States.
              </li>
              <li>
                <Link>Jon Favreau</Link> as <Link to="/mcu/happy_hogan">Happy Hogan</Link>: <br />
                Tony Stark's former bodyguard and chauffeur who now serves as Stark Industries' head of security department. Favreau, who served as both actor
                and director on the previous two Iron Man films, said participating in the new film was "like being a proud grandfather who doesn't have to change
                the diapers but gets to play with the baby."
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <p>
              Following the release of Iron Man 2, a conflict between Paramount Pictures, which had distribution rights to certain Marvel Comics properties, and
              The Walt Disney Company, Marvel Entertainment's then new corporate parent, clouded the timing and the distribution of a possible third film. On
              October 18, 2010, Walt Disney Studios agreed to pay Paramount at least $115 million for the worldwide distribution rights to Iron Man 3, with Disney,
              Marvel, and Paramount announcing a May 3, 2013 release date for the film.
            </p>
            <p>
              Iron Man and Iron Man 2 director Jon Favreau said in December 2010 that he would not direct Iron Man 3, opting to direct Magic Kingdom instead. He
              remained an executive producer of director <Link>Joss Whedon</Link>'s crossover film The Avengers and also served as an executive producer of Iron
              Man 3. Also in 2010, Downey reached out to Shane Black, who directed him in Kiss Kiss Bang Bang (2005), to write and direct the film. In February
              2011, Black entered final negotiations to join the project, and in March it was announced that Drew Pearce, who Marvel had orifinally hired for a
              Runaways script, would work with Black on the script. Downey said, "Bringing in Shane Black to write and direct Iron Man 3 to me is basically the
              only transition from Favreau to a 'next thing' that Favreau and the audience and Marvel and I could ever actually sign off on." Black was initially
              hesitaant to work with Pearce on the film, preferring to work with a writing partner of his own, but after a week of discussing the film and getting
              to know one another, agreed to write the film with Pearce.
            </p>
            <h4 className="article-heading-4" id="3.1.1">Writing</h4>

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
            
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Themes and analysis"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={9} title={"Future"} />
          <div>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default IronMan3;