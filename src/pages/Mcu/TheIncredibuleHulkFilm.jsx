import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableMcu from "../../components/TableMcu"

const TheIncredibuleHulkFilm = () =>
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
              {id: "3.4", title: "Post-production", sub2: [
                {id: "3.4.1", title: "Editing"},
                {id: "3.4.2", title: "Visual effects"}
              ]}
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
          <Collapse 
            id="8"
            item="Future"
            sub={[
              {id: "8.1", title: "Future MCU appearances"},
              {id: "8.2", title: "Potential sequel"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>The Incredible Hulk (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">The Incredible Hulk (film)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg" 
            alt="The Incredible Hulk" 
            className="article-heading-img" 
          />
        </div>
        <div className="div-top">
           <p>
            The Incredible Hulk is a 2008 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character the
            <Link to="/marvelcomics/hulk">Hulk</Link>. Produced by <Link>Marvel Studios</Link> and Valhalla Motion Pictures, and distributed by
            Universal Pictures, it is the second film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). It was directed by Louis
            Leterrier from a screenplay by Zak Penn, and stars <Link>Edward Norton</Link> as <Link to="/mcu/bruce_banner">Bruce Banner</Link>
            alongside <Link>Liv Tyler</Link>, <Link>Tim Roth</Link>, <Link>William Hurt</Link>, <Link>Tim Blake Nelson</Link>, <Link>Ty Burrell</Link>,
            and Christine Cabot. In the film, Banner becomes the monstrous Hulk as an unwitting pawn in a military scheme to reinvigorate the "super
            soldier" program through <Link>gamma radiation</Link>. He goes on the run from the military while attempting to cure himself of the Hulk.
          </p>
          <p>
            After the mixed reception to Universal's 2003 film <Link>Hulk</Link>, Marvel Studios reacquired the rights to the character, though
            Universal retained distribution rights. Leterrier, who expressed interest in directing <Link to="/mcu/iron_man_film">Iron Man</Link> (2008)
            for Marvel, was brought onboard and Penn wrote a script that was closer to the comics and the 1978-1982 television series. In April 2007,
            Norton was hired to portray Banner and to rewrite Penn's screenplay. His script positioned the film as a reboot of the series, distancing it
            from the 2003 film to give the new version its own identity. Norton was ultimately not credited for his writing. Filming took place from
            July to November 2007, primarily in Toronto, with additional filming in New York City and Rio de Janeiro. Over 700 visual effects shots were
            created in post-production using a combination of motion capture and computer-generated imagery.
          </p>
          <p>
            The Incredible Hulk premiered at the Gibson Amphitheatre in Universal City, California, on June 8, 2008, and was released in the United
            States on June 13, as part of <Link>Phase One</Link> of the MCU. It received praise for its action sequences and was considred an improvement
            over the 2003 film, but it was criticized as lacking in depth. The film grossed $265.6 million worldwide. Nortion and Marvel Studios had
            various production disagreements while working on the film, including over the final edit, which Marvel Studios deemed uncollaborative.
            Norton was replaced in the role of Banner by <Link>Mark Ruffalo</Link> for subsequent MCU appearances starting with
            <Link to="mcu/the_avengers_film">The Avengers</Link> in 2012.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Plot</h2>
          <div>
            <p>
              At Culver University in Virginia, U.S. military general <Link>Thaddeus Ross</Link> meets with Dr. Bruce Banner, the colleague and boyfriend
              of his daughter <Link>Betty</Link>, regarding an experiment that Ross claims is meant to make humans immune to gamma radiation. This is
              part of Ross's attempts to recreate a World War II-era "super soldier" program. The experiment fails and Banner is exposed to high levels of
              gamma radiation, causing him to transform into the Hulk if enraged or if his heart rate rises above 200 beats per minute. The Hulk destroys
              the lab and injures the general, Betty, and others outside. Banner becomes a fugitive from Ross, who wants to weaponize the Hulk.
            </p>
            <p>
              Five years later, Banner works at a bottling factory in Rio de Janeiro, Brazil, and has not transformed in five months. He trains in yoga
              and breathing techniques while collaborating anonymously with an internet user called "Mr. Blue" in his search to cure his condition. After
              Banner accidentally cuts his finger, a drop of his blood falls into a bottle of soda which is eventually ingested by an elderly consumer in
              Milwaukee, Wisconsin, giving him gamma sickness. Using the bottle to track Banner, Ross sends a special forces team led by <Link>Emil
              Blonsky</Link> to capture him. Banner transforms into the Hulk and defeats Blonsky's team, though Blonsky survives. After Ross explains
              how Banner became the Hulk, Blonsky agrees to be injected with a similar serum, gaining enhanced speed, strength, and agility.
            </p>
            <p>
              Banner returns to Culver University and reunites with Betty. Her new boyfriend, Dr. Leonard Samson, contacts Ross who soon arrives with his
              forces and Blonsky. They attack Banner at the university and he transforms into the Hulk again. Blonsky, whose judgement is impaired by the
              serum, attacks and mocks the Hulk. The Hulk severely injures Blonsky, but the serum allows him to heal quickly. Betty is almost killed by
              military fire and is saved by the Hulk, who flees with Betty and eventually reverts to Banner. The pair go on the run, and Banner contacts
              Mr. Blue who urges them to meet him in New York City. Mr. Blue is a cellular biologist Dr. <Link>Samuel Sterns</Link>, who has developed
              a possible antidote to Banner's condition. After a seemingly successful test, he warns Banner that the antidote may only reverse an initial
              transformation. Sterns reveals that he has synthesized Banner's blood samples, which Banner sent from Brazil, into a large supply, and
              wants to apply its "limitless potential" to medicine. Fearful of the Hulk's power falling into the wrong hands, Banner wants to destroy the
              supply.
            </p>
            <p>
              Blonsky and Ross's forces take Banner into custody. As Banner and Betty are taken away in a helicopter, Blonsky stays behind and orders
              Sterns to inject him with Banner's blood, as he covets the Hulk's powers. The experiment mutates Blonsky into <Link>the Abomination</Link>,
              a monstrous creature with size and strength surpassing that of the Hulk. He attacks Sterns, who gets some of Banner's blood in a cut on his
              forehead and begins mutating as well. The Abomination rampages through Harlem. Realzing that Hulk is the only one who can stop the
              Abomination, Banner convinces Ross to release him. He jumps from Ross's helicopter and transforms after hitting the ground. The Hulk defeats
              the Abomination by nearly strangling him to death with a chain, but spares his life upon hearing Betty's plea. The Hulk leaves the
              Abomination for Ross and his forces to arrest and flees New York.
            </p>
            <p>
              A month later, Banner is in Bella Coola, British Columbia, where he practices transforming in a controlled manner. Sometime later,
              <Link to="/mcu/tony_stark"> Tony Stark</Link> approaches Ross at a bar and informs him that a team is being put together.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Cast</h2>
          <div>
            <ul className="article-list">
              <li>
                <Link>Edward Norton</Link> as <Link to="/mcu/bruce_banner">Bruce Banner</Link>:<br/>
                A nuclear physicist and biochemist at Culver University who, because of exposure to gamma radiation, transforms into an enormous green
                humanoid monster when enraged or agitated. David Duchovny was a front-runner for the film before Norton's casting, while director Louis
                Leterrier's original choice was Mark Ruffalo who would later play Banner in future Marvel Cinematic Universe (MCU) films. Producer Gale
                Anne Hurd recalled the duality of Norton's performance in the films Primal Fear (1996) and Fight Club (1999), while Norton reminded
                producer <Link>Kevin Feige</Link> of Bill Bixby, who played Banner in the 1978-1982 television series. Lou Ferrigno, who played the Hulk
                in that series, said Norton "has a smiliar physique [and a] similar personality" to Bixby. Norton was a Hulk fan, citing the early comic
                books, the Bixby series, and Bruce Jone's run on the comics as his favorite depictions of the character. He had expressed interest in the
                role for the previous film, <Link>Hulk</Link> (2003), and was initially reluctant to take on the part after the film had strayed from the
                fugitive story that he associated with the character. He was won over by the vision of Leterrier and Marvel Studios and believed they
                were looking to him to guide the project. Norton subsequently rewrote the script. Leterrier praised Norton for bringing gravitas to the
                script, and said they were both approaching superheroes as "the new greek gods". Norton was particularly drawn to the Greek myth of
                Prometheus for the character.
              </li>
              <li>
                <Link>Lou Ferrigno</Link> voices the Hulk. During the 2008 New York Comic Con, Leterrier publicly offered Ferrigno the role. This marks
                the third time Ferrigno portrayed the Hulk, having also voice the character in the 1996-97 animated series. Originally, the Hulk's only
                line was "Betty" at the film's ending, which would have been his first word. Leterrier was aware that fans wanted him to speak
                normally and added "Leave me alone!" and "Hulk smash!". The latter line received cheers during a screening Leterrier attended. Ferrigno
                also had a cameo appearance in the film as a security guard who is bribed by Banner with a pizza.
              </li>
              <li>
                <Link>Liv Tyler</Link> as <Link>Betty Ross</Link>:<br />
                A cellular biologist and Bruce's former girlfriend, from whom he is separated as a result of his condition. Tyler was attracted to the
                love story in the script and was a fan of the Bixby series because of the "humanity and what [Banner] is going through". She was called
                about the role while driving home and accepted the part after a day, without reading the script. Tyler and Norton spent hours discussing
                Bruce and Betty's life before he became the Hulk. She said filming the part was physical and fun, and compared her performance to "a
                deer caught in the headlights" because of Betty's shock at Bruve's unexpected return into her life.
              </li>
              <li>
                <Link>Tim Roth</Link> as <Link>Emil Blonsky / Abomination</Link>:<br />
                A Russian-born officer in the United Kingdom's Royal Marines Commandos who is loaned to General Ross. Lusting for the Hulk's power,
                Blonsky is injected with various serums that transform him into a near-skeletal humanoid monster as strong as the Hulk himself. Roth said
                he took the part to please his sons, who are comic book superhero fans, and because he found Leterrier's ideas "very dark and very
                interesting". Roth was a fan of the Bixby series as a teenager. He started watching the 2003 film to prepare for the part, but stopped as
                he did not want to compare himself to it. It was Roth who suggested Blonsky be a soldier rather than a KGB agent as in the comics.
                Leterrier was a fan of Roth's work and felt it was "great watching a normal Cockney boy become a superhero", but Marvel and Norton were
                initially reluctant to cast him. Before he was cast in the film Punisher: War Zone (2008), Ray Stevenson was in discussion for the role.
                Roth trained with gun and military experts in preparation for the role, but did not work out due to Blonsky's aging. This made it
                difficult to film some stunts, including being pulled bu a harness to show Blonsky's enhanced 30-40 mile per hour running speed. Cyril
                Raffaelli performed some of his stunts. Roth enjoyed the motion capture for Abomination, which reminded him of fringe theatre. He worked
                with Terry Notary, his trainer from the film Planet of the Apes (2001), on the monster's movement. Roth was signed on for three more
                films.
              </li>
              <li>
                <Link>William Hurt</Link> as <Link>Thaddeus Ross</Link>:<br />
                Betty's father and a U.S. Army general who has dedicated his life to capturing the Hulk. Leterrier cast Hurt because "Ross is more
                physical, more explosive in this movie, and no actor goes from zero to 100 as well as Villiam". He compared Ross to  Captain Ahab. The
                Hulk was Hurt's favorite superhero, and his son is also a big fan of the character. Hurt found production very different from the typical
                "pure anxiety" of a studio film, finding it more akin to an independent film. He described Ross as "humiliated by Hulk's conscience: he
                actually sees and recognizes that it's more developed than his own, even though he's a patriot and a warrior for his country. He's
                sacrificed [much] for that purpose, but at the expense at times of his humanity, which he occasionally recovers." In June 2015, when
                reflecting on how his reprisal in the MCU film <Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link> (2016) was
                different from this film, Hurt said, "What I created [for The Incredible Hulk] was a Ross who was right out of the graphic novel type of
                thing, when he was as much of a cartoon, in a way, as the monsters were. His ego was just as big and his problems were just as big. I
                really did do that consciously. I created a General Ross before which created a verisimillitude for the monsters, by making him a
                human monster. I worked really hard on the makeup and the exaggerated behavior and things like that and a controlled psychosis." Sam
                Elliott had expressed interest in reprising the role from the 2003 film before Hurt was cast.
              </li>
              <li>
                <Link>Tim Blake Nelson</Link> as <Link>Samuel Sterns</Link>:<br />
                A cellular biologist who develops a possible antidote to Banner's condition. Towards the end of the film, Sterns is exposed to a
                substance that begins his transformation into the comic book villain "<Link>The Leader</Link>".
              </li>
              <li>
                <Link>Ty Burrell</Link> as <Link>Leonard Samson</Link>:<br />
                A psychiatrist who is in a relationship with Betty during Bruce's absence. Burrell had performed with Norton in the off Broadway play
                Burn This in 2003, and when Leterrier met him, he recognized Burrell as the "jerk" from the 2004 <Link>Dawn of the Dead</Link> remake,
                which was how Samson was characterized in the script before Norton rewrote it.
              </li>
              <li>
                Christina Cabot as Kathleen Sparr: A U.S. Army major who is General Ross's personal aide.
              </li>
            </ul>
            <p>
              <Link>Robert Downey Jr.</Link> makes an uncredited cameo appearance as <Link to="/mcu/tony_stark">Tony Stark</Link> at the end of the film,
              reprising his role from the MCU film <Link to="/mcu/iron_man_film">Iron Man</Link> (2008). Downey appeared as a favor to Marvel Studios
              and was frustrated that he was constantly being asked about his short appearance in the film while promoting Iron Man. He acknowledged that
              this was a smart move on Marvel's part, bringing more attention to The Incredible Hulk. Hulk co-creator <Link>Stan Lee</Link> cameos as a
              man who becomes ill when drinking soda that is poisoned with Banner's blood. Paul Soles, who voiced Banner in the 1966 The Marvel Super
              Heroes animated series, appears as kindly pizzeria owner Stanley Lieber who was friends with Banner and Betty in the past. His name is a
              reference to Stan Lee's full name. <Link>Jim Wilson</Link> and <Link>Jack McGee</Link>, supporting characters from the Hulk comics, appear
              as Culver University students played by P.J. Kerr and Nicholas Rose, respectively. Other small roles include: Brazilian Jiu-Jitsu artist
              Rickson Gracie as Bruce Banner's martial arts instructor, credited as an Aikido instructor due to Norton's background with that style;
              Brazilian actress Débora Nascimento as Martina, Banner's colleague at a beverage factory; Michael K. Williams as a Harlem bystander, a role
              that was written for him by Norton and a fan of William's series The Wire (2002-2008); and Peter Mensah as General Joe Greller, one of
              Ross's military friends. Additionally, Martin Starr played a college student who is credited as "Computer Nerd". In May 2019, Feige said
              this character had been retroactively named <Link>Roger Harrington</Link>, which is Starr's role in the MCU films
              <Link to="/mcu/spiderman_homecoming"> Spider-Man: Homecoming</Link> (2017), <Link to="/mcu/spiderman_far_from_home">Spider-Man:
              Far From Home</Link> (2019), and <Link to="/mcu/spiderman_no_way_home">Spider-Man: No Way Home</Link> (2021).
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Production</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>
            <p>
              After the release of Ang Lee's Hulk, screenwriter James Schamus was planning a sequel which would continue the story featuring the Grey
              Hulk. He was also considering the <Link>Leader</Link> and the Abomination as villains. Marvel wanted the Abomination because he would be
              an actual threat to the Hulk, unlike General Ross. During the filming of Hulk, producer Avi Arad had a target May 2005 theatrical release
              date. On January 28, 2006, Arad confirmed Marvel Studios would be providing the money for The Incredible Hulk's production budget, with
              Universal distributing, because Universal did not meet the deadline for filming a sequel. Marvel felt it would be better to deviate from
              Ang Lee's style to continue the franchise, arguing his film was like a parallel universe one-shot comic book, and their next film needed
              to be, in Kevin Feige's words, "really starting the Marvel Hulk franchise". Producer Glen Anne Hurd also felt the film had to meet what
              "everyone expects to see from having read the comics and seen the TV series".
            </p>
            <h3 className="article-heading-3" id="3.2">Pre-production</h3>
            <p>
              Louis Leterrier, who enjoyed the TV series as a child and liked the first film, had expressed interest in directing the Iron Man film
              adaptation. <Link>Jon Favreau</Link> had taken that project, so Marvel offered him the Hulk. Leterrier was reluctant as he was unsure if
              he could replicate Lee's style, but Marvel explained that was not their intent. Leterrier's primary inspiration was Jeph Loeb and Tim
              Sale's <Link>Hulk: Gray</Link> (a retelling of the character's first appearance). He replicated every comic book panel that he pinned-up
              during pre-production, from the many comics he browsed, in the final film. Leterrier said that he planned to show Bruce Banner's sturggle
              with the monster within him, while Feige added the film would explore "that element of wish fulfillment, of overcoming an injustice or a
              bully and tapping into a strength that you didn't quite realize you had in yourself". Arad also said the film would be "a lot more of a
              love story between Bruce Banner and Betty Ross". In May 2006, Arad left Marvel Studios to become an independent producer. Because he was on
              staff when the deal was made for The Incredible Hulk, he retained producer credit on the film.
            </p>
            <p>
              Zak Penn, who wrote a draft of the first film in 1996, said the film would follow up Hulk, but stressed it would be more tonally similar
              to the TV show and Bruce Jones' run on the comic. He compared his script to <Link>Aliens</Link>, which was a very different film from
              <Link> Alien</Link>, but still in the same continuity. He included two scens from his 1996 script: Banner jumping from a helicopter to
              trigger a transformation, and realizing he is unable to have sex with Betty. After the studio rejected a treatment by another screenwriter
              in 2006, Penn wrote three drafts before departing in early 2007 to promote his film The Grand. Edward Norton began discussions to play
              Banner in April 2006, and arranged a deal that included him as a both an actor and a writer, with a screenpaly draft he was contractually
              obligated to turn in within a month. He did so, and continued to polish his draft as late as halfway through principal photography. In
              November 2006, a June 13, 2008 release date was set. Leterrier acknowledged the only remaining similarity between the two films was Bruce
              Banner hiding in South America, and that the film was a unique reboot, as generally audiences would have expected another forty-minute
              origin story. There were previous discussions to set the first act in Thailand. Leterrier felt audiences were left restless waiting for the
              character to arrive in Ang Lee's film. Feige commented, "we didn't want to tell the origin story again, because we thought people were so
              familiar with it, which is why we didn't tell that... One reason we made Incredible Hulk was to get Hulk into the [Marvel Cinematic
              Universe] canon." The end of the film occurs st Columbia University, and Leterrier was interested in naming it Empire State University, as
              a reference to <Link to="/marvelcomics/spiderman">Peter Parker</Link>, but was unable to since <Link>Sony Pictures</Link> controls the film
              rights of Spider-Man.
            </p>
            <p>
              Shortly after the release of The Incredible Hulk, Gale Anne Hurd commented on the uncertainty of its relationship with Ang Lee's Hulk film.
              "We couldn't quite figure out how to term this ...It's kind of a reboot and it's kind of a sequel." Hurd said that "requel", a portmanteau
              of "reboot" and "sequel", was a "perfect" description for the film. Feige clarified that the two films are not connected, noting how events
              shown in the opening sequence of The Incredible Hulk contradicts Hulk. Norton explained his decision to ignore Lee's origin story: "I don't
              even like the phrase: 'origin story', and I don't think in great literature and great films that explaining the roots of the story doesn't
              mean it comes in the begining." "Audiences know this story," he added, "[so] deal with it artfully." He wanted to "have revelations even
              in the third act about what set this whole thing in motion". The new origin story references <Link>Ultimate Marvel</Link>'s take on the
              Hulk, which also had him created in an attempt to make super soldiers. Norton removed <Link>Rick Jones</Link> and toned down
              <Link> S.H.I.E.L.D.</Link>'s presence. He also added the scene where Banner attempts to extract a cure from a flower and his e-mailing
              with Samuel Sterns, which references Bruce Jones' story. Norton rewrote scenes every day. Ultimately, the Writers Guild of America decided
              to credit the script solely to Penn, who argued Norton had not dramatically changed his script. Journalist Anne Thompson explained "The
              Guild tends to favor plot, structure, and pre-existing characters over dialogue." Penn said in 2008, "I wasn't happy with [Norton] coming
              to Comic-Con saying that he wrote the script." Before either Penn or Norton joined the project, an anonymous screenwriter wrote a draft
              and lobbied for credit.
            </p>
            <h3 className="article-heading-3" id="3.3">Filming</h3>
            <p>
              Leterrier had to direct four units with a broken foot. Filming began on July 9, 2007. Shooting primarily took place in Toronto, because
              mayor David Miller is a Hulk fan and promised to be helpful to the crew when closing Yonge Street for four nights in September to shoot
              Hulk and Blonsky's climactic fight. Despite messing up the street with explosives and overturned burning vehicles, the crew would clean it up
              within twenty minutes so business could continue as normal each day. The first action sequence shot was the Culver University battle, which
              was filmed at the University of Toronto and Morningside Park. The filmmakers built a glass wall over a walkway at the university for when
              the soldiers trap Banner inside to smoke him out. There was also shooting in the Financial District. A factory in Hamilton, Ontario, which
              was due for demolition, was the interior of the Brazilian factory. The site's underground floors were used for Ross's military command
              center. The crew also shot part of the Hulk and Blonsky's fight on a backlot in Hamilton. Other Canadian locations included military
              base CFB Trenton and a glacier in Bella Coola, British Columbia. Afterwards, there was a week-long shoot in New York City and two weeks in
              Rio de Janeiro. While there, the crew shot at Rocinha, Lapa, Tijuca Forest, and Santa Teresa. Filming concluded in November after
              eighty-eight days of filming.
            </p>
            <p>
              The Incredible Hulk joined Toronto's Green-Screen Initiative, to help cut carbon emissions and waste created during filming. Producer Gale
              Anne Hurd acknowledged the Hulk, being green, was a popular environmental analogy, and Norton himself is an environmentalist. Hybrid and
              fuel-efficient vehicles were used, with low-sulfur diesel as their energy source. The construction department used a sustainably
              harvested, locally sourced yellow pine instead of lauran for the sets, and also used zero- or low-VOC paint. The wood was generally
              recycled or given to environmental organizations, and paint cans were handed to waste management. In addition, they used cloth bags,
              biodegradable food containers, china and silverware food utenshils, a stainless steel mug for each production crew member, a contractor
              who removed bins, recycled paper, biodegradable soap and cleaners in the trailers and production offices, and the sound department used
              rechargeable batteries. The Incredible Hulk became the first blockbuster film to receive the Environmental Media Association's Green Seal,
              which is displayed during the end credits.
            </p>
            <h3 className="article-heading-3" id="3.4">Post-production</h3>
            <h4 className="article-heading-4" id="3.4.1">Editing</h4>
            <p>
              Seventy minutes of footage, mostly dealing with the origin, were not included in the final cut. Much of this back-story was unscripted and
              the filmmakers were never sure of including it in the final cut, and had considered releasing some of these clips on the internet. Editor
              Kyle Cooper, creator of the Marvel logo (with the flipping pages) and the montage detailing Iron Man's biography in that film, edited
              together much of this footage into the opening credits. Leterrier explained a negative test screening, where flashbacks were placed
              accross the film that the audiences found too similar to Hulk, had resulted in compressing these to the film's start. This replaced the
              original opening, where Banner comes to the Arctic to commit suicide. When the scene ends, in an instant the frozen body of
              <Link to="/mcu/steve_rogers"> Captain America</Link> is partially seen in the ice. Leterrier said he did not want this scene to be lost
              amid the opening montage. Associate producer Stephen Broussard opined that the scene really worked, but given the test audiences's
              dislike for such an opening, the filmmakers decided to move on from the planned opening and instead open the film with Bruce Banner living
              in Brazil after a recap telling his origin story.
            </p>
            <p>
              Norton and Leterrier disputed with the producers over the final running time: they wanted it to be near 135 minutes, while the producers
              wanted the film to be under 2 hours. This was made public, and rumors spread that Norton "made it clear he won't cooperate with publicity
              plans if he's not happy with the final product". Norton dismissed this: "Our healthy process [of collaboration], which is and should be a
              private matter, was misrepresented publicly as a 'dispute', seized on by people looking for a good story, and has been distorted to such a
              degree that it risks distracting from the film itself, which Marvel, Universal, and I refuse to let happen. It has always been my firm
              conviction that films should speak for themselves and that knowing too much about how they are made diminishes the magic of watching them."
            </p>
            <h4 className="article-heading-4" id="3.4.2">Visual effects</h4>
            <p>
              Leterrier cited Andy Serkis's motion capture portrayal of Gollum and King Kong in The Lord of the Rings and King Kong, respectively, as the
              standard he was aiming for with the Hulk and Abomination. Norton and Roth filmed 2500 takes of different movements the monsters would make,
              such as the Hulk's "thunder claps". Phosporescent face paint applied to the actors' faces and strobe lighting would help record the most
              subtle mannerisms into the computer. Others, including Cyril Raffaelli, provided motion capture for stunts and fights, after the main actor
              had done video referencing. Leterrier hired Rhythym & Hues Studios to provide the computer-generated imager (CGI), rather than Industrial
              Light & Magic (ILM) who created the visual effects for Ang Lee's Hulk. Visual effects company Image Engine spent over a year working on a
              shot where Banner's gamma-irradiated blood falls through three factory floors into a bottle. 700 effects shots were created for the film.
              Motion cature aided in placing and timing of movements, but key frame animation by Rhythm and Hues provided the necessary "finesse [and]
              superhero quality". Many of the animators and Leterrier himself provided video reference for the climactic fight.
            </p>
            <p>
              Dale Keown's comic book artwork of the Hulk was an inspiration for his design. Leterrier felt the first Hulk had "too much fat [and] the
              proportions were a little off". He explained, "The Hulk is beyond perfect so there is zero grams of fat, all chiseled, and his muscle and
              strength defines this creature so he's like a tank." Visual effects supervisor Kurt Williams envisioned the Hulk's physique as a linebacker
              rather than a bodybuilder. A height of nine feet was chosen for the character as they did not want him to be too inhuman. To make him more
              expressive, computer programs controlling the inflation of his muscles and saturation of skin color were created. Williams cited flushing
              as an example of humans' skin color being influenced by their emotions. The animators felt green blood would mke his skin become darker
              than lighter, and his skin tones, depending on lighting, either resemble an olive or even gray slate. His animation model was completed
              without the effects company's full knowledge of what he would be required to do: he was rigged to do whatever they imagined, in case the
              model was to be used for <Link to="mcu/the_avengers_film">The Avengers</Link> film. The Hulk's medium-length hair was modeled on Mike
              Deodato's art. He originally had a crew cut, but Leterrier decided flopping hair imbued him with more character. Leterrier cited An
              American Werewolf in London as the inspiration for Banner's transformation, wanting to show how painful it was for him to change. As a nod
              to the live-action TV series, Banner's eyes change color first when he transforms. Leterrier changed the Abomination's design from the
              comics because he felt the audience would question why he resembled a fish or a reptile, instead of "an uber-human" like the Hulk. Rather,
              his hideousness is derived from being injected multiple times into his skin, muscles, and bones, creating a creature with a protruding
              spine and sharp bones that he can use to stab. His green skin is pale and reflects light, so it appears orange because of the surrounding
              fire during the climactic battle. The motion capture performers, including Roth, tried to make the character behave less gracefully than
              the Hulk. They modeled his posture and the way he turns his head on a shark. The character also shares Roth's tattoos. A height of eleven
              feet was chosen for the character. Leterrier tried to work in the character's pointed ears, but realized the Hulk would bite them off
              (using the example of Mike Tyson when he fought Evander Holyfield), and felt ignoring that would make the Hulk come across as stupid.
            </p>
            <p>
              Leterrier had planned to use prostetic makeup and animatronics to complement the computer-generated imagery that was solely used in the
              previous film. The make-up artists who worked on <Link>X-Men: The Last Stand</Link> were set to portray Blonsky's gradual transformation,
              which Zak Penn said would portray Blonsky "not [being] used to having these properties. Like he's much heavier, and we talked about how
              when he walks down the sidewalk, his weight destroys the sidewalk and he's tripping. [It's all about] the humanization of these kinds of
              superhero characters, showing the effects physics may actually have on [them]." Tom Woodruff Jr. of Amalgamated Dynamics (who created all
              the costumes for the <Link>Alien</Link> films since Alien 3) was in negotiations and created two busts of the Hulk and prosthetic hands
              to act as stand-ins for the character. A full animatronic was never created as it was decided it would complicate production to set up
              shots for a puppet and then a cumputer graphic. An animatronic was used for Sterns' mutating head, however. Destruction was mostly done
              practically. A model of a bottling machine was smashed through a wall for when the Hulk escapes the factory. The filmmakers used steam and
              dry ice for the gas used to smoke out the Hulk, and they destoryed a real humbee by dropping a weight on it when shooting the Culver
              University battle. Pipes blew fire for when the Hulk strikes down the computer-generated helicopter. When Banner falls from the helicopter
              to trigger the Hulk into fighting the Abomination, Norton was attached to surface held by a bar which turned 90 degrees while the camera
              was pulled to the ceiling to simulate falling. Leterrier jokingly remarked that making Norton fall that distance would render him unable
              to act.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Music</h2>
          <div>
            <p>
              The score for the film was composed by Craig Armstrong, who was the arrange for Massive Attack, a band Letterier was fond of and had
              collaborated with on the 2005 film Unleashed. Armstrong was his first choice, which surprised Marvel, not knowing if he had scored an
              action film (he did compose 2001's Kiss of the Dragon). At Leterrier's suggestion, the soundtrack was released on a two-disc album, which
              Armstrong thought was a joke until he compiled the album and Marvel asked him whey they were given only one disc. The film's score borrows
              Joe Harnell's theme "The Lonely Man" from the 1978 Incredible Hulk television series.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Marketing</h2>
          <div>
            <p>
              Effort was made to promote the story as having a romance and a physical antagonist, and the title was used for promotional puns (such as
              7-Eleven's "Incredible Gulp" Slurpees, and "Incredible Dad" themed Father's Day gifts at Kmart). Burger King also promoted the film, and
              general Nutrition Centers used the title character as a role model for strength training. Hasbro created the toy line, which they released
              on May 3, 2008. Sega released two tie-in video games on Juen 5, 2008; a <Link>version for consoles and personal computers</Link> was
              developed by Edge of Reality, while a <Link>handheld version</Link> for the <Link>Nintendo DS</Link> was developed by Amaze Entertainment.
              The film was promoted in an episode of American Gladiators on June 9, 2008, which was hosted by Hulk Hogan and featured Lou Ferrigno.
            </p>
            <p>
              Following the editing dispute between Norton and Leterrer, Universal's Adam Fogelson and Norton planned a promotional tour that would
              avoid constant media interviews and therefore uncomfortable questions. Norton attended the premiere, took part in a <Link>Jimmy
              Kimmel Live!</Link> sketch, and would also promote the film in Japan. However, during the film's release he chose to do charity work in
              Africa.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Release</h2>
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>
            <p>
              The Incredible Hulk premiered on June 8, 2008, at the Gibson Ampitheatre in Universal City, California and was released in theaters on
              June 13 in the United States, where it opened in 3,505 theaters. The film is part of <Link>Phase One</Link> of the MCU. The Incredible
              Hulk was formatted and screened in IMAX for the first time on August 30, 2018, as part of Marvel Studios' 10 year anniversary IMAX
              festival.
            </p>
            <h3 className="article-heading-3" id="6.2">Home media</h3>
            <p>
              The Incredible Hulk was released by Universal Studios Home Entertainment on Blu-ray and DVD on October 21, 2008. It includes
              behind-the-scenes featurettes, audio commentary, deleted scenes, and an alternate opening.
            </p>
            <p>
              The film was also collected in a 10-disc box set titled "Marvel Cinematic Universe: Phase One - Avengers Assembled" which
              included all of the Phase One films in the Marvel Cinematic Universe. It was released by Walt Disney Studios Home Entertainment on April
              2, 2013. Universal released the film on Ultra HD Blu-ray on April 10, 2018. The Incredible Hulk began streaming on <Link>Disney+</Link>
              in the United States on June 16, 2023, after the distribution rights to the film reverted to Marvel Studios and Disney from Universal.
            </p>
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
          <h2 className="article-heading-2" id="8">Future</h2>
          <div>
            <h3 className="article-heading-3" id="8.1">Future MCU appearances</h3>
            <h3 className="article-heading-3" id="8.2">Potential sequel</h3>
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default TheIncredibuleHulkFilm;
