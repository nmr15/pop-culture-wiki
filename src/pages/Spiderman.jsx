import { Link } from 'react-router-dom'
import { spidermancharacters } from '../data'

const Spiderman = () => 
{
  return (
    <>
      <nav className="sidebar bg-dark">
        <ul>
          <li className="py-1"><a href="#top">Top</a></li>
          <div class="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
            </span>
            <li class="d-inline ms-2"><a href="#1">Publication History</a>
              <ul id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li className="py-1"><a href="#1.1">Creation and development</a></li>
                <li className="py-1"><a href="#1.2">Commercial success</a></li>
              </ul>
            </li>
          </div>

          <div class="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
              aria-controls="collapseTwo">
            </span>
            <li class="d-inline ms-2"><a href="#2">Fictional character biography</a>
              <ul id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li className="py-1"><a href="#2.1">Early years</a></li>
                <li className="py-1"><a href="#2.2">1970s</a></li>
                <li className="py-1"><a href="#2.3">1980s</a></li>
                <li className="py-1"><a href="#2.4">1990s</a></li>
                <li className="py-1"><a href="#2.5">2000s</a></li>
                <li className="py-1"><a href="#2.6">2010s</a></li>
                <li className="py-1"><a href="#2.7">2020s</a></li>
              </ul>
            </li>
          </div>
          <li className="py-1"><a href="#3">Personality and themes</a></li>
          <li className="py-1"><a href="#4">Powers, skills, and abilities</a></li>
          <div class="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#collapseFour"
              aria-expanded="true" aria-controls="collapseFour">
            </span>
            <li class="d-inline ms-2"><a href="#5">Supporting cast</a></li>
            <ul id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#5.1">Enemies</a></li>
              <li className="py-1"><a href="#5.2">Romantic interests</a></li>
              <li className="py-1"><a href="#5.3">Children</a></li>
              <li className="py-1"><a href="#5.4">Alternate versions of Spider-Man</a></li>
            </ul>
          </div>
          <div class="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#collapseFive"
              aria-expanded="true" aria-controls="collapseFive">
            </span>
            <li class="d-inline ms-2"><a href="#6">Legacy</a></li>
            <ul id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#6.1">Reception</a></li>
              <li className="py-1"><a href="#6.2">Real-life comparisons</a></li>
            </ul>
          </div>
          <li className="py-1"><a href="#7">In other media</a></li>
        </ul>
      </nav>
      <main className="main px-5 py-4">
        <div id="top">
          <h1 className="article-heading">Spider-Man (Earth-616)</h1>
        </div>
        <div className="img-right pt-2">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" 
            alt="Spider-Man" />
        </div>
        <div className="pt-2">
          <p><b>Spider-Man</b> is a superhero in American comic books published by <a href="#">Marvel Comics</a>.
            Created by writer-editor <a href="#">Stan Lee</a> and artist <a href="#">Steve Ditko</a>, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the <a href="#">Silver Age of Comic Books</a>. He has been featured in <a href="#">comic books</a>, <a href="#">television shows</a>, <a href="#">films</a>, <a href="#">video games</a>, <a href="#">novels, and plays</a>.
          </p>
          <p>
            Spider-Man's secret identity is <b>Peter Benjamin Parker</b>. Initially, Peter was depicted as a teenage high-school student and
            an orphan raised by his <a href="#">Aunt May</a> and <a href="#">Uncle Ben</a> in <a href="#">New York City</a> after his parents,
            <a href="#">Richard and Mary Parker</a>, died in a plane crash. Lee, Ditko, and later creators had the character deal with the
            struggles of adolescence and young adulthood and gave him many <a href="#">supporting characters</a>, such as
            <a href="#">Flash Thompson</a>, <a href="#">J. Jonah Jameson</a>, and <a href="#">Harry Osborn</a>;
            romantic interests <a href="#">Gwen Stacy</a>, <a href="#">Mary Jane Watson</a>, and the <a href="#">Black Cat</a>;
            and <a href="#">enemies</a> such as <a href="#">Doctor Octopus</a>, the <a href="#">Green Goblin</a>, and <a href="#">Venom</a>.
            In his origin story, Spider-Man gets his superhuman spider powers and abilities after being bitten by a radioactive spider. These
            powers include superhuman strength, agility, reflexes, stamina, durability, coordination, and balance; clinging to surfaces and ceilings
            like a spider; and detecting danger with his precognition ability called "spider-sense". He builds wrist-mounted "<a href="#">web-shooter</a>"
            devices that shoot articial spider-webs of his own design, which he uses both for fighting and web-swinging across the city. Peter Parker
            initially used his powers for his personal gain, but after his Uncle Ben was killed by a thief that Peter could not stop, he began to use his
            powers to fight crime by becoming Spider-Man.
          </p>
          <p>
            When Spider-Man first appeared in the early 1960s, teenagers in superhero comic books were usually relegated to the portagonist's sidekick role.
            The Spider-Man comic series broke ground by featuring Peter Parker, a high school student from the Queens borough of New York City, as Spider-Man's
            secret identity, whose "self-obsessions with rejection, inadequacy, and loneliness" were issues to which young readers could relate. While Spider-Man
            was a quintessential sidekick, unlike previous teen heroes <a href="#">Bucky Barnes</a> and <a href="#">Robin</a>, Spider-Man had no superhero
            mentor like <a href="#">Captain America</a> and <a href="#">Batman</a>; he had learned the lesson for himself that "with great poewr comes great
            responsibility" --a line included in a text box in the final panel of the first Spider-Man's origin story, but later retroactively attributed to the
            late Uncle Ben.
          </p>
          <p>
            Marvel has featured Spider-Man in several <a href="#">comic book series</a>, the first and longest-lasting of which is <a href="#">The Amazing Spider-Man</a>.
            Since his introducion, the main-continuity version of Peter has gone from a high school student to attending college to currently being somewhere in
            his late 20s. Peter has been a member of numerous superhero teams, most notably the <a href="#">Avengers</a> and <a href="#">Fantastic Four</a>. Doctor Octopus
            also took on the identity for a story arc spanning 2012-2014, following a body swap plot in which Peter appears to die. Marvel has also published comic books
            featuring the adventres of <a href="#">Miguel O'Hara</a>, the Spider-Man of the future; <a href="#">Ultimate Spider-Man</a>, which features the adventures of
            a teenage <a href="#">Peter Parker</a> in <a href="#">an alternate universe</a>; and <a href="#">Ultimate Comics: Spider-Man</a>, which depicts a teenager named
            <a href="#">Miles Morales</a> who takes up the mantle of Spider-Man after Ultimate Peter Parker's apparent death. Miles later became a superhero in his own
            right and was brought into mainstream continuity during the Secret Wars event, where he sometimes works alongside the mainline version of Peter.
          </p>
          <p>
            Spider-Man is one of the most popular and commercially successful superheroes. He has appeared in countless <a href="#">forms of media</a>, including
            <a href="#">several animated TV series</a>; the first original animated series <a href="#">Spider-Man</a>, with Paul Soles voicing the titular character, a
            <a href="#">live-action television series</a>, syndicated newspaper <a href="#">comic strips</a>, and multiple <a href="#">series of films</a>. Spider-Man was
            first portrayed in live-action by Danny Seagren in Spidey Super Stories, a recurring skit on The Electric Company from 1974 to 1977. In live-action films, Spider-Man
            has been portrayed actors <a href="">Tobey Maguire</a> in <a href="#">Sam Raimi's</a> <a href="#">Spider-Man trilogy</a>, by <a href="#">Andrew Garfield</a>
            in <a href="#">two films</a> by <a href="#">Marc Webb</a>, and in the <a href="#">Marvel Cinematic Universe</a> by <a href="#">Tom Holland</a>. Reeve Carney originally
            starred as Spider-Man in the 2010 Broadway musical Spider-Man: Turn Off the Dark. Spider-Man was also voiced by <a href="#">Jake Johnson</a> and
            <a href="#">Chris Pines</a> in the animated film <a href="#">Spider-Man Into the Spider-Verse</a>, with the former reprising his role in the sequel
            <a href="#">Spider-Man: Across the Spider-Verse</a>.
          </p>
        </div>
        <div>
          <h2 className="article-heading" id="1">Publication history</h2>
          <h3 className="pt-2" id="1.1">Creation and development</h3>
          <div className="articleImg-card img-right" style={{width: "220px"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Spider_Strikes_v1n1_i05_Wentworth.png/440px-Spider_Strikes_v1n1_i05_Wentworth.png"
             alt="" 
             className="articleImg-card-img" 
            />
            <div className="articleImg-card-body">
              <p className="articleImg-card-text">
                Richard Wentworth, a.k.a. the Spider in the pulp magazine The Spider. Stan Lee stated the Spider influenced the creation of Spider-Man.
              </p>
            </div>
          </div>
          <p>
            In 1962, with the success of the <a href="#">Fantastic Four</a>, Marvel Comics editor and head writer Stan lee was casting for a new superhero idea.
            He said the idea for Spider-Man arose from a surge in teenage demand for comic books and the desire to create a character with whom teens could identify.
            As with Fantastic Four, Lee saw Spider-Man as an opportunity to "get out of his system" what he felt was missing in comic books. In his autobiography
            , Lee cites the non-superhuman pulp magazine crime fighter the Spider as a great influence, and in a multitude of print and video interviews, Lee stated he was
            inspired by seeing a spider climb up a wall--adding in his autobiography that he has told that story so often he has become unsure of whether or not his is true.
            Besides the name, the Spider was wanted by both the law and the criminal underworld (a defining theme of Spider-Man's early years) and had through years ofceaseless
            struggle developed a "sixth sense", which warns him of danger, the inspiration for Spider-Man's "spider-sense". Although at the time teenage superheroes were
            usually given names ending with "boy", Lee says he chose "Spider-Man" because he wanted the character to age as the series progressed, and felt the name "Spider-Boy"
            would have made the character sound inferior to other superheroes. He also decided to insert a hyphen in the name, as he felt it looked to similar to Superman,
            another superhero with a red and blue costume that starts with an "S" and ends with "man" (although artist Steve Ditko intended the character to have an orange and
            purple costume). At the time, Lee had to get only the consent of Marvel publisher Martin Goodman for the character's appearance. In a 1986 interview, Lee describes
            in detail his arguments to overcome Goodman's objections. Goodman eventually agreed to a Spider-Man tryout in what Lee, in numerous interviews, recalled as what
            would be the final issue of the science-fiction and supernatural anthology series Amazing Adult Fantasy, which was renamed Amazing Fantasy for issue #15
            (cover-dated August 1962, on sale June 5, 1962). In particular, Lee stated that the fact that it had already been decided that Amazing Fantasy would be cancelled
            after issue #15 was the only reason Goodman allowed him to use Spider-Man. While this was the final issue, its editorial page anticipated the comic continuing and that
            "The Spider-Man ...will appear every month in Amazing."
          </p>
          <p>
            Regardless, Lee received Goodman's approval for the name Spider-Man and the "ordinary teen" concept and approached artist Jack Kirby. As comic historian Greg Theakston
            recounts, Kirby told Lee about an unpublished character on which he had collaborated with Joe Simon in the 1950s, in which an orphaned boy living with an old couple
            finds a magic ring that granted him superhuman powers. Lee and Kirby "immeediately sat down for a story conference". Theakston writes, and Lee afterward directed
            Kirby to flesh out the character and draw some pages. Steve Ditko would be the inker. When Kirby showed Lee the first six pages, Lee recalled, "I hated the way he was
            doing it! Not that he did it badly--it just wasn't the character I wanted; it was too heroic". Lee turned to Ditko, who developed an art style Lee found satisfactory.
            Ditko recalled:
          </p>
          <p className="article-quote">
            One of the first things I did was to work up a costume. A vital visual part of the character. I had to know how he looked ... before I did any breakdowns. For example:
            A clinging power so he wouldn't have hard shoes or boots, a hidden wrist-shooter versus a web gun and holster, etc ... I wasn't sure Stan would like the idea of
            covering the character's face but I did it because it hid an obvious boyish face. It would also add mystery to the character...
          </p>
          <p>
            Although the interior artwork was by Ditko alone, Lee rejected Ditko's cover art and commissioned Kirby to pencil a cover that Ditko inked. As Lee explained in 2010,
            "I think I had Jack sketch out a cover for it because I always had a lot of confience in Jack's covers".
          </p>
          <div className="articleImg-card img-left" style={{width: "228px"}}>
            <img src="https://upload.wikimedia.org/wikipedia/en/3/35/Amazing_Fantasy_15.jpg" 
                alt="" 
                className="articleImg-card-img" 
            />
            <div className="articleImg-card-body">
              <p className="articleImg-card-text">
                Amazing Fantasy #15 (Aug. 1962) first introduced the character. It was a gateway to commercial success for the superhero and inspired the launch of The Amazing
                Spider-Man comic books. - Cover art by penciller Jack Kirby and inker Steve Ditko.
              </p>
            </div>  
          </div>
          <p>
            In an early recollection of the character's creation, Ditko described his and Lee's contributions in a mail interview with Gary Martin published in Comic Fan #2
            (Summer 1965): "Stan Lee thought the name up. I did costume, web gimmick on wrist & spider signal". At the time, Ditko shared a Manhattan studio with noted fetish
            artist Eric Stanton, an art school classmate who, in a 1988 interview with Teaktston, recalled that although his contribution to Spider-Man was "almost nil", he
            and Ditko had "worked on storyboards together and I added a few ideas. But the whole thing was created by Steve on his own ... I think I added the business about
            the webs coming out of his hands". Ditko claimed in a rare interview with Jonathan Ross that the costume was initially envisioned with an orange and purple color
            scheme, rathern than the recognizable red and blue.
          </p>
          <p>
            Kirby disputed Lee's version of the story and claimed Lee had minimal involvement in the character's creation. According to Kirby, the idea for Spider-Man had
            originated with Kirby and Joe Simon, who in the 1950s had developed a character called the Silver Spider for the Crestwood Publications comic Black Magic, but the
            character was left unused. Simon, in his 1990 autobiography, disputed Kirby's account, asserting that Black Magic was not a factor and that Simon devised the name
            "Spider-Man" (later changed to "The Silver Spider"), while Kirby outlined the character's story and powers. Simon later elaborated that his and Kirby's character
            conception became the basis for Simon's Archie Comics superhero, the Fly. Artist Steve Ditko stated that lee liked the name Hawkman from <a href="#">DC Comics</a>,
            and that "Spider-Man" was an outgrowth of that interest.
          </p>
          <p>
            Simon concurred that Kirby had shown the original Spider-Man version to Lee, who liked the idea and assigned Kirby to draw sample pages of the new character, but
            disliked the results--in Simon's description, "<a href="#">Captain America</a> with cobwebs". Writer Mark Evanier notes that Lee's reasoning that Kirby's character
            was too heroic seems unlikely--Kirby still drew the covers for Amazing Fantasy #15 and the first issue of The Amazing Spider-Man. Evanier also disputed Kirby's
            given reason that he was "too busy" to draw Spider-Man in addition to his other duties, since Kirby was, said Evanier, "always busy". Neither Lee's nor Kirby's
            explanation explains why key story elements like the magic ring were dropped; Evanier states that the most plausible explanation for the sudden change was that
            Goodman, or one of his assistants, decided that Spider-Man, as drawn and envisioned by Kirby, was too similary to the Fly.
          </p>
          <p>
            Author and Ditko scholar Blake Bell writes that it was Ditko who noted the similarities to the Fly. Ditko recalled that
            "Stan called Jack about the Fly", adding that "days later, Stan told me I would be penciling the story panel
            breakdowns from Stan's synopsis." It was at this point that the entire concept of the strip went through a major
            overhaul. "Out went the magic ring, adult Spider-Man and whatever legend ideas that Spider-Man story would have
            contained." Lee gave Ditko the premise of a teenager bitten by a spider and developing powers, where Ditko would expand
            upon to the point he became what Bell describes as "the first work for hire artist of his generation to create and
            control the narrative arc of his series". On the issue of the initial creation, Ditko stated, "I still don't know whose
            idea was Spider-Man." Ditko did, however, view the published version of Spider-Man as a separate creation to the one
            he saw in the five pencilled pages that Kirby had completed. To support this, Ditko used the analogy of the Kirby/Marvel
            Thor, which was based on a name or idea of a character in Norse mythology: "If Marvel's Thor is a valid created work by
            Jack, his creation, then why isn't Spider-Man by Stan and me valid created work, our creation?"
          </p>
          <p>
            Kirby noted in a 1971 interview that it was Ditko who "got Spider-Man to roll, and the thing caught on because of what
            he did". Lee, while claiming credit for the initial idea, had acknowledged Ditko's role, stating, "If Steve wants to be
            called co-creator, I think he deserves [it]". He has further commented that Ditko's costume design was key to the
            character's success; since the costume completely covers Spider-Man's body, people of all races could visualize
            themselves inside the costume and thus easily identify with the character.
          </p>
          <h3 id="1.2">Commercial success</h3>
          <p>
            A few months after Spider-Man's introduction, publisher Goodman reviewed the sales figures for that issue and was
            shocked to find it was one of the nascent Marvel's highest-selling comics. A solo ongoing series followed,
            beginning with <a href="#">The Amazing Spider-Man</a> #1 (cover-dated March 1963). The title eventually became Marve's top-selling
            series with the character swiftly becoming a cultural icon; a 1965 Esquire poll of college campuses found that
            college students ranked Spider-Man and fellow Marvel hero <a href="#">the Hulk</a> alongside Bob Dylan and Che Guevara as their
            favorite revolutionary icons. One interviewee selected Spider-Man because he was "based by woes, money problems,
            and the question of existence. In shor, he is one of us." Following Ditko's departure after issue #38 (July 1966),
            John Romita Sr. replace him as penciller and would draw the series for the next several years. In 1968, Romita would
            also draw the character's extra-length stories in the comics magazine <a href="#">The Spectacular Spider-Man</a>, a proto-graphic
            novel designed to appeal to older readers. It lasted for two issues and represented the first Spider-Man spin-off
            publication, aside from the original series' summer Annuals that began in 1964.
          </p>
          <p>
            An early 1970s Spider-Man story ultimately led to the revision of the Comics Code Authority. Previously, the Code
            forbade the depiction of the use of illegal drugs, even negatively. However, in 1970, the Nixon administration's
            Department of Health, Education, and Welfare asked Stan Lee to publish an anti-drug message in one of Marvel's top-
            selling titles. Lee chose the top-selling The Amazing SpiderMan; issues #96-98 (May-July 1971) feature a story
            arc depicting the negative effects of drug use. In the story, Peter Parker's friend <a href="#">Harry Osborn</a> becomes addicted to pills.
            When Spider-Man fights the <a href="#">Green Goblin</a> (Norman Osbron, Harry's father), Spider-Man defeats him by revealing
            Harry's drug addiction. While the story had a clear anti-drug message, the Comics Code Authority refused to issue its
            seal of approval. Marvel nevertheless published the three issues without the Comics Code Authority's approval or seal.
            The issues sold so well that the industry's self-censorship was undercut, and the Code was subsequently revised.
          </p>
          <p>
            In 1972, a second monthly ongoing series starring Spider-Man began: <a href="#">Marvel Team-Up</a>, in which Spider-Man was paired
            with other superheroes and supervillains. From that point on, there have generally been at least two ongoing Spider-
            Man series at any time. In 1976, his second solo series, <a href="#">Peter Parker: the Spectacular Spider-Man</a>, began running
            parallel to the main series. A third series featuring Spider-Man, <a href="#">Web of Spider-Man</a>, launched in 1985 to replace
            Marvel Team-Up. The launch of a fourth monthly title in 1990, the "adjectiveless" <a href="#">Spider-Man</a> (with the storyline
            <a href="#">"Torment"</a>), written and drawn by popular artist <a href="#">Todd McFarlane</a>, debuted with several different covers, all with the same
            interior content. All four versions combined sold over three million copies, an indrustry record at the time. Several
            miniseries, one-shot issues, and loosely related comics have also been published, and Spider-Man makes frequent
            cameos and guest appearances in other comic book series. In 1996, <a href="#">The Sensational Spider-Man</a> was created to
            replace Web of Spider-Man.
          </p>
          <p>
            In 1998, writer-artist John Byrnes revamped the origin of Spider-Man in the 13-issue limited series <a href="#">Spider-Man: Chapter
            One</a> (Dec. 1998-Oct. 1999), similar to Byrne's adding details and some revisions to Superman's origin in DC Comics'
            <a href="#"> The Man of Steel</a>. During that time, the original The Amazing Spider-Man ended with issue #441 (Nov. 1998), and
            The Amazing Spider-Man started with volume 2, #1 (Jan. 1999). In 2003, Marvel reintroduced the original numbering
            for The Amazing Spider-Man and what would have been volume 2, #59, became issue #500 (Dec. 2003).
          </p>
          <p>
            When the main series The Amazing Spider-Man reached issue #545 (Dec. 2007), Marvel dropped its spin-off ongoing series
            and instead began publishing The Amazing Spider-Man three times monthly, beginning with #546-548 (all January 2008).
            The scheduling of The Amazing Spider-Man lasted until November 2010, when the comic book expanded from 22 pages to 30
            pages for each issue. Later on, The Amazing Spider-Man was published twice a month, beginning with #648-649 (both
            November 2010). The following year, Marvel launched Avenging Spider-Man as the first spin-off ongoing series in
            addition to The Amazing Spider-Man, since the previous ones were canceled at the end of 2007.[43] The Amazing series
            temporarily ended with issue #700 in December 2012 and was replaced by The Superior Spider-Man, which had Doctor Octopus
            serve as the new Spider-Man by taking over Peter Parker's body. Superior was an enormous commercial success for
            Marvel, and ran for 31 issues before the real Peter Parker returned in a newly relaunched The Amazing Spider-Man #1
            in April 2014.
          </p>
          <p>
            Following the 2015 Secret Wars crossover event, a number of Spider-Man-related titles were either relaunched or created as part of the
            "All-New, All-Different Marvel" event. Among them, The Amazing Spider-Man was relaunched and primarily focused on Peter
            Parker continuing to run Parker Industries and becomes a successful businessman who is operating worldwide.
          </p>
        </div>
        <div>
          <h2 className="article-heading" id="2">Fictional character biography</h2>
          <h3 class="pt-2" id="2.1">Early years</h3>
          <p>
            In Forest Hills, Queens, New York City, Midtown High School student Peter Benjamin Parker is a science-whiz orphan living with
            his <a href="#">Uncle Ben</a> and <a href="#">Aunt May</a>. As depicted in Amazing Fantasy #15 (Aug. 1962), he is bitten by a radioactive
            spider (erroneously classified as an insect in the panel) at a science exhibit and "acquires the agility and proportionate strength of an
            arachnid". Along with heightened athletic abilities, Parker gains the ability to adhere to walls and ceilings. Through his
            knack for science, he develops a gadget that lets him fier adhesive webbing of his own design through small, wrist-mounted
            barrels. Initially seeking to capitalize on his new abilities, Parker dons a costume and, as "Spider-Man", becomes a novelty television star.
            However, "he blitherly ignores the change to stop a fleeing thief, and his indifference ironically catches up with him when the same criminal
            later robs and kills his Uncle Ben." Spider-Man tracks and subdues the killer and learns, in the story's next-to-last caption,
            "With great power there must also come great responsiblity."
          </p>
          <p>
            In the first issue of The Amazing Spider-Man (March 1963), despite his superpowers, Peter struggles to help his widowed Aunt May
            pay the rent, is taunted by Flash, and continues fighting crime and saving the city as Spider-Man, but his heroic deeds engender the
            editorial wrath of newspaper publisher of the <a href="#">Daily Bugle</a>, <a href="#">J. Jonah James</a>, holds a grudge agains tSpider-Man, and continues
            making false statements about Spider-Man despite his heroism. Peter gets hired as a freelance photographer by Mr. Jameson to take
            pictures of Spider-Man, with him being unaware that Spider-Man is Peter Parker. Spider-man fights his enemies, including
            superpowered and non-superpowered supervillains, his archenemy and nemesis <a href="#">Green Goblin</a> and then <a href="#">Doctor Octopus</a>, <a href="#">Sandman</a>,
            <a href="#">Chameleon</a>, <a href="#">Lizard</a>, <a href="#">Vulture</a>, <a href="#">Kraven the Hunter</a>, <a href="#">Electro</a>, and <a href="#">Mysterio</a>, defeating them one by one-but Peter finds juggling his
            personal and superhero life difficult. In time, Peter graduates from high school, and enrolls in Empire State University (a fictional
            institution evoking the real-life Columbia University and New York University), whre he meets roomate and best friend <a href="#">Harry
              Osborn</a> and girlfriend <a href="#">Gwen Stacy</a>, and Aunt May introduces him to <a href="#">Mary Jane Watson</a>. As Peter deals with Harry's drug
            problems, and Harry's father, <a href="#">Norman Osborn</a>, is revealed to be the Green Goblin, Peter attempts to give up his costumed identity for
            a while. Gwen Stacy's father, New York City Police detective Captain <a href="#">George Stacy</a>, is accidentally killed during a battle
            between Spider-Man and Doctor Octopus (issue #90, November 1970).
          </p>
          <h3 className="pt-2" id="2.2">1970s</h3>
          <p>
            In issue #121 (June 1973), the Green Goblin throws Gwen Stacy from a tower of either the Brooklyn Bridge (as
            depicted in the art) or the George Washington Bridge (as given in the text). She dies during Spider-Man's rescue
            attempt, and Spider-Man swears revenge against his nemesis; a note on the letters page of issue #125 states: "It saddens
            us to say that the whiplash effect she underwent when Spidey's webbing stopped her so suddenly was, in fact, what killed
            her." The following issue, Spider-Man vengefully attacks and overpowers the Green Goblin, who kills himself
            accidentally in the ensuing battle with Spider-Man.
          </p>
          <p>
            Working through his grief, Peter eventually develops tentative feelings toward Mary Jane, and the two "become confidants rather than
            lovers." A romantic relationship eventually develops, with Parker proposing to her in issue #182 (July 1978), and being turned
            down an issue later. Peter went on to graduate from college in issue #185, and becomes involved with shy Debra Whitman
            and the extroverted, flirtatious costumed thief Felicia Hardy, a.k.a. the <a href="#">Black Cat</a>, whom he meets in issue #194 (July 1979).
          </p>
          <h3 className="pt-2" id="2.3">1980s</h3>
          <div className="articleImg-card img-right" style={{width: "228px"}}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Issue252.jpg/220px-Issue252.jpg" 
                alt="" 
                className="articleImg-card-img" 
            />
            <div className="articleImg-card-body">
              <p className="articleImg-card-text">
                The Amazing Spider-Man #252 (May 1984): The black costume debut was controversial among fans. The suit was later revealed as an alien
                symbiote and was used in the creation of the villain Venom. Cover art by Ron Frenz and Klaus Janson
              </p>
            </div>
          </div>
          <p>
            From 1984 to 1988, Spider-Man wore a black costume with a white spider design on his chest. The new costume originated in the <a href="#">Secret
              Wars miniseries</a> on an alien planet where Spider-Man participated in a battle between Earth's major superheroes and supervillains. He
            continues wearing the costume when he returns, starting in The Amazing Spider-Man #252. The change to a longstanding character's design
            met with controversy, "with many hardcore comic fans decrying it as tantamount to sacrilege. Spider-Man's traiditional red and blue costume
            was iconic, they argued, on par with those of his DC rivals <a href="#">Superman</a> and <a href="">Batman</a>." The creators then revealed the costume was an alien
            symbiote, which Spider-Man rejects after a difficult struggle, though the symbiote returns several times as <a href="#">Venom</a> for revenge. Peter
            proposes to Mary Jane in The Amazing Spider-Man #290 (July 1987), and she accepts two issues later, with <a href="#">the wedding</a> taking place in The
            Amazing Spider-Man Annual #21 (1987), promoted with a real-life mock wedding using actors at <a href="#">Shea Stadium</a>, with Stan Lee officiating, on
            June 5, 1987. David Michellinie, who scripted based on a plot by editor-in-chief Jim Shooter, said in 2007, "I didn't think they actually
            should have gotten married. I had actually planned another version, one that wasn't used." Peter publishes a book of Spider-Man
            photographs called Webs, and returns to his Empier State University graduate studies in biochemistry in #310 (Dec. 1988).
          </p>
          <h3 class="pt-2" id="2.4">1990s</h3>
          <p>
            In the controversial 1990s storyline the "<a href="#">Clone Saga</a>", a clone of Parker, created in the 1970s comics by insane scientist <a href="#">Miles Warren</a>, a.k.a
            the Jackal, returns to New York City upon hearing of Aunt May's health worsening. The clone had lived incognito as <a href="#">Ben Reilly</a>, but now
            assumes the superhero guise the <a href="#">Scarlett Spider</a> and allies with Parker. To the surprise of both, new tests indicate Ben is the original and
            Peter is the clone. Complicationg matters, Mary Jane announces in The Spectacular Spider-Man #220 (Jan. 1995) that she is pregnant with
            Peter's baby. Later, however, a resurrected Green Goblin (Norman Osborn) has Mary Jane poisoned, causing premature labor and the
            death of her and Peter's unborn daughter. It is later revealed that The Green Goblin switched the results of the clone test in an attempt to
            destroy Peter's life by making him believe himself to be the clone. Ben is killed while savign Peter, in Peter Parker: Spider-Man #75 (Dec.
            1996), and his body immediately crumbles into dust, confirming Ben was the clone.
          </p>
          <p>
            In usse #97 (Nov. 1998) of the second series title Peter Parker: Spider-Man, Parker learns his Norman Osborn kidnapped Aunt May and her apparent death in The Amazing
            Spider-Man #400 (April 1995) has been a hoax. Shortly afterward, in The Amazing Spider-Man (vol. 2) # 13 (#454, Jan. 2000), Mary Jane is killed in an airplane explosion.
            She is revealed to be alive in volume 2, issue #28 (#469, April 2001), but she and Peter are completely separated in the following issue.
          </p>
          <h3 class="pt-2" id="2.5">2000s</h3>
          <p>
            Babylon 5 creator J. Michael Straczynski began writing The Amazing Spider-Man, illustrated by John Romita Jr., beginning with
            volume 2, #30 (#471, June 2001). Two issues later, Peter, now employed as a teacher at his old high school, meets the enigmatic
            <a href="#">Ezekiel Sims</a>, who possesses similar spider powers and suggests that Peter, having gained such abilities, might not have been a fluke,
            that Parker had a connection to a totemic spider spirit. In vol 2. #37 (#478, Jan. 2002), Aunt May discovers her nephew is Spider-
            Man. Peter and Mary Jane reconcile in (vol. 2) #50 (#491, April 2003), and in #512 (Nov. 2004), the original issue numbering
            having returned with #500, Parker learns his late girlfriend Gwen Stacy had had two children with Norman Osborn.
          </p>
          <p>
            He joins the superhero team <a href="#">The New Avengers</a> in New Avengers #1-2. After a deranged, superpowered former high-school
            classmate destroys their respective homes, Peter, Mary Jane, and May move into <a href="#">Stark Tower</a>, and Peter begins working as <a href="#">Tony
              Stark</a>'s assistant while freelancing for The <a href="#">Daily Bugle</a> and continuing his teacher career. In the 12-part 2005 story arc "<a href="#">The Other</a>",
            Peter undergoes a transformation that evolves his powers. In the comic <a href="#">Civil War #2</a> (June 2006), part of the company-wide crossover
            arc of that title, the U.S. government's Superhuman Registration Act leads Spider-Man to reveal his true identity publicly. A growing
            unease about the Registration Act prompts him to escape with May and Mary Jane and joins the anti-registration underground.
          </p>
          <p>
            In issue #537 (Dec. 2006), Aunt May is critically wounded from <a href="#">Wilson Fisk</a>'s sniper, and enters into a coma. Peter, desparate to save
            her, exhausts all possibilities and makes a pact with the demon-lord <a href="#">Mephisto</a>, who saves May's life in exchange for Peter and Mary
            Jane aggreeing to have their marriage and all memory of it disappear. In this changed reality, Spider-Man's identity is secret once
            again, and in #545 (Jan. 2008), Mary Jane returns and is cold toward him. The controversial storyline "One More Day", rolled back
            much of the fictional continuity at the behest of editor-in-chief <a href="#">Joe Quesada</a>, who said, "Peter being single is an intrinsic part of the
            very foundation of the world of Spider-Man". It cuased unusual public friction between Quesada and writer Straczynski, who "told
            Joe that I was going to take my name off the last two issues of the story arc", but was talked out of doing so. At issue with
            Straczynski's climax to the arc, Quesada said, was
          </p>
          <p className="article-quote">
            ...that we didn't receive the story and methodology to the resolution that we were all expecting. What made that very
            problematic is that we had four writers and artists well underway on the sequal arc, "Brand New Day" that were expecting
            and needed "One More Day" to end in the way that we had all agreed it would. ...The fact that we had to ask for the story to
            move back to its original intent understandably made Joe upset and caused some major delays and page increases in the
            series. Also, the science that Joe was going to apply to the retcon of the marriage would have made over 30 years of Spider-
            Man books worthless, because they never would have had happened. ...It would have reset way too many things outside of
            the Spider-Man titles. We just couldn't go there...
          </p>
          <p>
            In this new continuity, designed to have very limited repercussions throughout the remainder of the Marvel Universe, Parker returns to
            work at the Daily Bugle, which has been reneame The DB under a new publisher. He soon switches to the alternate press paper
            <a href="#">The Front Line</a>. <a href="#">J. Jonah Jameson</a> becomes the Mayor of New York City in issue #591 (June 2008). Jonah's estranged father, J.
            Jonah Jameson Sr., marries May in issue #600 (Sept. 2009).
          </p>
          <p>
            During the "<a href="#">Secret Invasion</a>" by shape-shifting extraterrestrials, the <a href="#">Skrulls</a>, Norman Osborn shoots and kills the Skrull queen <a href="#">Veranke</a>. He leverages this widely publicized success, positioning himself as a new director of S.H.I.E.L.D. -like paramilitary
            force <a href="#">H.A.M.M.E.R.</a> to advance his agenda, while using his public image to start his own <a href="#">Dark Avengers</a>. Norman, by himself, leads
            the Dark Avengers as the Iron Patriot, a suit of armor fashioned by himself after Iron Man's armor with Captain America's colors.
          </p>
          <p>
            Harry is approached by Norman with the offer of a job within the Dark Avengers. It is later revealed that it is a ruse to coerce Harry
            into taking the American Son armor, whom Norman had planned to kill, in order to increase public sympathy. When Harry has the
            option of killing Norman, Spider-Man says to decapitate him, since Norman's healing factor may repair a blow to the head. Spider-Man
            also cautions Harry that killing Norman will cause Harry to "become the son Norman always wanted". Harry instead backs down
            and turns away from his father forever.
          </p>
          <h3 className="pt-2" id="2.6">2010s</h3>
          <p>
            At <a href="#">Loki</a>'s suggestion, Norman Osborn <a href="#">creates a rationale</a> to invade <a href="#">Asgard</a>, claiming the world poses a national security threat. He is
            defeated, and ends up incarcerated in the Raft penitentiary. A conflict between Doctor Octopus over Osborn's
            son ends when it is revealed the child's father is Harry, who leaves town to raise him. One of Doctor Octopus' Octobots swaps his
            and Spider-Man's personality, causing Peter to become trapped in the Doctor's dying body, while he in turn claimed Peter's life for
            himself. Though Peter failed to reverse the change, he manages to establish a weak link with the Doctor's mind, forcing him to relive
            all of his memories; Otto understands Peter's ideals of power and responsibility and swears to carry on with Peter's life with dignity as
            a "Superior" Spider-Man.
          </p>
          <p>
            A portion of Peter survived in his original body in the form of a subconsciousness. Later, realizingthat he failed in his role as the
            "Superior" Spider-Man, Otto willingly allows Peter to reclaim his body in order to defeat Osborn and Save Anna Maria Marconi, Otto's
            love. In the aftermath of these events, Peter began to amend the relationships damaged by Otto's arrogance and negligence, both
            as Peter Parker and Spider-Man. He additionally took up the reins of Parker Industries, a small company founded by Otto after
            leaving Horizon Labs.
          </p>
          <p>
            Peter soon learns a second person had been bitten by the radioactive spider, <a href="#">Cindy Moon</a>. Spider-Man tracks her down and frees
            her from a bunker owned by the late Ezekiel Simms. Not long after rescuing Cindy, who went on to adopt her own heroine identity
            as Silk. Spider-Man encounters a contingent of spider-people from all over the <a href="#">Multiverse</a> that banded together to fight the
            Inheritors, a group of psychic vampires who had begun to hunt down the spider-totems of other realities. During a mission to
            gather more recruits in 2099, the Spider-Army stumbled upon another party of spider-people led by an alternate version of Otto
            Octavius. Together, they neutralize the Inhertiors.
          </p>
          <p>
            Peter then stops a nefarious plan put forward by the Jackal. After the events of "<a href="#">Go Down Swinging</a>", Peter's life was plagued with
            problems on both sides. As Spider-Man, Mayor Fisk publicly supports him, condemning all other vigilantes in order to isolate him from
            his superhero peers. As Peter Parker, his academic credentials were revoked after accusations of plagiarizing his doctoral
            dissertation from Octavius, resulting in Peter being fired from the Daily Bugle. Subsequently, Peter became romantically involved with
            Mary Jane. Briefly, Peter Parker and Spider-Man split into separate beings due to an accident involving the reverse-engineered
            Isotope Genome Accelerator. Peter eventually manges to reverse the process, and merges his two halves back together before the
            side-effects worsen and result in their death.
          </p>
          <h3 className="pt-2" id="2.7">2020s</h3>
          <p>
            Kindred uses the resurrected Sin-Eater's sins to possess Miles Morales, Spider-Gwen, Spider-Woman, Anya Corazon, and Julia
            Carpenter. Doctor Strange, who manages to restrain a possessed Silk, agrees to help Spider-Man. However, Peter dies when fighting
            Kindred. While dead, Peter's consciousness remembers the fateful day of the start of One More Day, Kindred is willing to resurrect
            Peter.
          </p>
        </div>
        <div>
          <h2 className="article-heading" id="3">Personality and themes</h2>
          <p>
            Sally Kempton for the Village Voice ipined in 1965 that "Spider-Man has a terrible identity problem, a marked inferiority complex,
            and a fear of women. He is antisocial, castration-ridden, racked with Oedipal guilt, and accident-prone ... a functioning neurotic".
            Agonizing over his choices, always attempting to do right, he is nonetheless viewed with suspicion by the authorities, who seem unsure
            as to whether he is a helpful vigilante or a clever criminal.
          </p>
          <p>
            Cultural historian Bradford W. Wright notes:
          </p>
          <p className="article-quote">
            Spider-Man's plight was to be misunderstood and persecuted by the very public that he swore to protect. In the first issue of The Amzaing Spider-Man,
            J. Jonah Jameson, publisher of the Daily Bugle, launches an editorial campaign agains the "Spider-Man menace". The resulting negative publicity
            exacerbates popular suspicions about the mysterious Spider-Man and make it impossible for him to earn any more money by performing. Eventually, the
            bad press leads the authorities to brand him an outlaw. Ironically, Peter finally lands a job as a photographer for Jameson's Daily Bugle.
          </p>
          <p>
            The mid-1960s stories reflect the political tensions of the time; early 1960s Marvel stories often deal with the Cold War and communism. Wright writes:
          </p>
          <p className="article-quote">
            From his high-school beginnings to his entry into college life, Spider-man remained the superhero most relevant to the world
            of young people. Fittingly, then, his comic book also contained some of the earliest references to the politics of young people.
            In 1968, in the wake of actual militant student demonstrations at Columbia University, Peter Parker finds himself in the midst
            of similar unrest at his Empire State University... Peter has to reconcile his natural sympathy for the students with his
            assumed obligation to combat lawlessness as Spider-Man. As a law-upholding liberal, he finds himself caught between
            militant leftism and angry conservatives.
          </p>
        </div>
        <div>
          <h2 className="article-heading" id="4">Powers, skills, and equipment</h2>
          <p>
            Peter Parker has superhuman spider-powers and abilities derived from mutations resulting from the bite of a radioactive spider.
            Since the original Lee-Ditko stories, Spider-Man has had the ability to cling to walls. This has been speculated to be based on a
            distance-dependent interaction between his body and surfaces, known as the van der Waals force, though in the <a href="#">2002 Spider-Man film</a>, 
            his hands and feet are lined with tiny clinging cilia in the manner of a real spider's feet. Spider-Man's other powers include
            superhuman strength, speed, agility, and balance and a precognitive sixth sense referred to as his "spider-sense", which alerts him to danger.
          </p>
          <p>
            Spider-Man has a healing factor that allows him to recover from injuries sustained during battle. In the aftermath of the 1989
            "<a href="#">Acts of Vengeance</a>" storyline, Spider-Man was said to have "superhuman recuperative abilities" that sped up his recovery from the
            exhaustion he suffered in defeating the Tri-Sentinel.
          </p>
          <p>
            The character was originally conceived by Stan Lee and Steve Ditko as intellectually gifted, and later writers have depicted his
            intellect at genius level. Academically brilliant, Peter has expertise in the fields of applied science, chemistry, physics, biology,
            engineering, mathematics, and mechanics.
          </p>
          <p>
            With his talents, he sews his own costume to conceal his identity, and he constructs many devices that complement his powers, most
            notably mechanical web-shooters that allow him to shoot webs, swing at high speed throughout the city, and navigate and trap his
            enemies with his webs, additionally with a spider-signal as a flashlight and a warning beacon to criminals. Thomas Fireheart's
            scientits, world-renowned, and unable to replicate the fluid Parker created while hin high school.
          </p>
        </div>
        <div>
          <h2 className="article-heading" id="5">Supporting cast</h2>
          <p>
            Spider-Man has had a large range of supporting characters introduced in the comics that are essential in the issues and storiylines
            that star him. After <a href="#">his parents</a> died, Peter Parker was raised by his loving aunt, <a href="#">May Parker</a>, and his
            uncle and father figure, <a href="#">Ben Parker</a>. After Uncle Ben is murdered by a burglar, Aunt May is virtually Peter's only family,
            and she and Peter are very close.
          </p>
          <p>
            <a href="#">J. Jonah Jameson</a> is the publisher of the <a href="#">Daily Bugle</a> and Peter Parker's boss. A harsh critic of Spider-Man,
            he constantly features negative articles about the superhero in his newspaper. Despire his role as Jameson's editor and confidant,
            <a href="#">Robbie Robertson</a> is always depicted as a supporter or both Spider-Man and his alter ego Peter Parker.
          </p>
          <p>
            <a href="#">Eugene "Flash" Thompson</a> is commonly depicted as Peter Parker's high school tormentor and bully, who idolizes
            Spider-Man, but is unaware that Spider-Man is Peter Parker, he comes a friend of Peter and adopts his own superhero identity, Agent Venom,
            after merging with the <a href="#">Venom symbiote</a>. Meanwhile, <a href="#">Harry Osborn</a>, son of Norman Osborn, is most commonly
            recognized as Peter's best friend, although some versions depicted him as his rival.
          </p>
          <h3 className="pt-2" id="5.1">Enemies</h3>
          <p>
            Writers and artists over th years have established a rogues gallery of supervillains to face Spider-Man, in comics and in other media.
            As with Spider-Man, the majority of the villains' powers originate with scientific accidents or the misuse of scientific technology, and many
            have animal-themed costumes or powers.
          </p>
          <h3 className="pt-2" id="5.2">Romantic interests</h3>
          <p>
            Peter Parker's romantic interests range between his first crush, fellow high-school student <a href="#">Liz Allan</a>, to having his first date
            with <a href="#">Betty Brandt</a>, secretary to the <a href="#">Daily Bugle</a> newspaper publisher J. Jonah Jameson. After his breakup with
            Betty Brandt, Peter eventually falls in love with his college girlfriend <a href="#">Gwen Stacy</a>, daughter of New York City Police Department
            detective Captain <a href="#">George Stacy</a>, both of whom are later killed by supervillain enemies of Spider-Man. Mary Jane Watson became Peter's
            best friend and eventually his wife. Felicia Hardy, the <a href="#">Black Cat</a>, is a reformed cat burglar who had been Spider-Man's sole superhuman
            girlfriend and partner at one point.
          </p>
          <h3 className="pt-2" id="5.3">Children</h3>
          <p>
            Over the course of the comics, Peter Parker had several biological children across different continuities, usually with Mary Jane Watson,
            including <a href="#">Spider-Girl (Mayday Parker)</a> and Benjy Parker from the MC2 universe, and Spiderling (Annie Parker) from Earth-18119.
          </p>
          <h3 className="pt-2" id="5.4">Alternate version of Spider-Man</h3>
          <p>
            Within the <a href="#">Marvel Universe</a>, there exists a multiverse with many variations of Spider-man. An early character included in the
            1980s is the fictional anthropomorphic anmal parody of Spider-Man as a pig name <a href="#">Spider-Ham</a> (Peter Porker). Many imprints of
            Spider-Man were created, like the futuristic version of Spider-Man in <a href="#">Marvel 2099</a> name <a href="#">Miguel O'Hara</a>. In the <a href="#">Marvel Comics 2</a>
            imprint, Peter marries Mary Jane and has a daughter named Mayday Parker, who carries on Spider-Man's legacy, while <a href="#">Marvel Noir</a>
            has a 1930s version <a href="#">of Peter Parker</a>. Other themed versions exist wihtin the early 2000s, such as a <a href="#">Marvel Mangaverse</a>
            version and an Indian version from <a href="#">Spider-Man: India</a>, <a href="#">Pavitr Prabhadkar</a>.
          </p>
          <p>
            <a href="#">Ultimate Spider-Man</a> was a popular modern retelling of Spider-Man, <a href="#">Peter Parker</a>. The version of Peter Parker would later be depicted
            as being killed off and replaced by a Black Hispanic Spider-man named <a href="#">Miles Morales</a>.
          </p>
          <p>
            The storyline "<a href="#">Spider-Verse</a>" brought back many alternate takes on Spider-Man and introduced many new ones, such as an alternate
            world where <a href="#">Gwen Stacy</a> gets bitten by a radioactive spider instead, along with a British-themed version named <a href="#">Spider-UK</a>, who is
            Billy Braddock from the <a href="#">Captain British Corps</a>
          </p>
        </div>
        <div>
          <h2 className="article-heading" id="6">Legacy</h2>
          <p>
            In the Creaton of Spider-Man, comic book writer-editor and historian Paul Kupperberg calls the character's superpowers "nothing too
            original", what was original was that outside his secret identity, he was a "nerdy high school student." Going against typical
            superhero fare, Spider-man included "heavy doses of soap-opera and elements of melodrama." Kupperberg feels that Lee and Ditko
            had created something new in the world of comics: "the flawed superhero with everyday problems." This idea spawned a comics
            revolution. The insecurity and anxieties in Marvel's early 1960s comic books, such as The Amazing Spider-Man, The Incredible
            <a href="#">Hulk</a>, The <a href="#">Fantastic Four</a>, and The <a href="#">X-Men</a> ushered in a new type of superhero, very different from the certain and al-owerful
            superheroes before them, and changed the public's perception of them. After the comics depicted a real address in Forest Hills,
            Queens, New York, as May Parker's residence, its residents received many letters fro mchildred to the superhero.
          </p>
          <p>
            Spider-Man has become on of the most recognizeable fictional characters in the world, and has been used to sell toys, games, cereal,
            candy, soap, andmany other products. He has been used as the company mascot. When Marvel became the first comic book
            company to be listed on the New York Stock Exchange in 1991, The Wall Street Journal announced "Spider-Man is coming to Wall
            Street", the event was in turn promoted with an actor in a Spider-Man costume accompanying Stan Lee to the Stock Exchange.
            Since 1962, hundreds of millions of comics featuring the character have been sold around the world. Spider-Man is th world's
            most profitable superhero. In 2014, global retail sales of licensed products related to Spider-Man reached
            approximately $1.3 billion. Comparatively, this amount exceeds the global licensing revenue of <a href="#">Batman,</a> <a href="#">Superman</a>, and the 
            <a href="#">Avengers</a> combined.
          </p>
          <p>
            Spider-Man joined the Macy's Thanksgiving Day Parade from 1987 to 1998 as one of the balloon floats, designed by John Romita Sr., one of the character's signature
            artists. A new, different Spider-Man balloon float also appeared from 2009 to 2014.
          </p>
          <p>
            When Marvel wanted to issue a story dealing with the immediate aftermath of the September 11 attacks, the company chose the December 2001 issue of The Amazing Spider-Man.
            In 2006, Spider-Man garnered major media coverage with the revelation of the character's secret identity, an event detailed in a full-page story in the New York Post
            before the issue containing the story was even released.
          </p>
          <p>
            In 2008, Marvel announced plans to release a series of educational comics the following year in partnership with the United Nations, depicting Spider-Man alongside the
            UN Peacekeeping forces to highlight UN peacekeeping missions. A BusinessWeek article listed Spider-Man as one of the top 10 most intelligent fictional characters in American comics.
          </p>
          <p>
            In 2015, the Supreme Court of the United States decided Kimble v. Marvel Entertainment, LLC, a case concerning royalties on a patent for an imitaion web shooter.
            The opinion for the Court, by Justice Elena Kagan, included several Spider-Man references, concluding with the statement that
            "with great power, there must also come great responsibility".
          </p>
          <p>
            Spider-Man has become a subject of scientific inquirty. In 1987, researchers at Loyola University conducted a study into the utility of Spider-Man comics for
            informing children and parents about issues relating to child abuse.
          </p>
          <h3 className="pt-2" id="6.1">Reception</h3>
          <p>
            In 2005, Bravo's Ultimate Super Heroes, Vixens, and Villains TV series declared that Spider-Man was the number 1 superhero. Empire magazine has ranked him the
            fifth-greates comic book character of all time. Wizard magazine placed Spider-Man as the third-greatest comic book character on their website. In 2011,
            Spider-Man placed third on IGN's Top 100 Comic Book Heroes of All Time, behind <a href="#">DC Comics</a> characters <a href="#">Superman</a> and <a href="#">Batman</a>,
            and sixth in their 2012 list of "The Top 50 Avengers". In 2014, IGN identified Spider-Man the greates Marvel Comics character of all time. A 2015 poll at Comic Book
            Resources named Spider-man the greates Marvel character of all time. IGN described him as the common everyman that represents many normal people, but also noted his
            uniqueness compared to many superheroes with his depcted flaws as a superhero. IGN wrote that despite being one of the most tragic superheroes of all time, he is
            "one of the most fun and snarky superheroes in existence." Empire praised Spider-man's always-present sense of humor and wisecracks in the face of the many tragedies
            he faces. The magazine website appraised the depiction of his "iconic" superhero poses, described it as "a top artitst's dream."
          </p>
          <p>
            George Marston of Newsarama called Spider-Man's origin the greatest origin story of all time, opining that "Spider-Man's origin combines all of the most classic
            aspects of pathos, tragedy and scientific wonder into the perfect blend for a superhero origin."
          </p>
        </div>
        <div>
          <h2 className="article-heading" id="7">In other media</h2>
        </div>
        <div>
        </div>
      </main>
    </>
  )
}

export default Spiderman