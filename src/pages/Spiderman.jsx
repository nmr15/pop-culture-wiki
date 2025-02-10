import React from 'react'

const Spiderman = () => 
{
  return (
    <>
      <nav className="sidebar bg-dark">
        <ul>
          <li><a href="#top">Top</a></li>
          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
            </span>
            <li class="d-inline"><a href="#1">Publication History</a>
              <ul id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li><a href="#1.1">Creation and development</a></li>
                <li><a href="#1.2">Commercial success</a></li>
              </ul>
            </li>
          </div>

          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
              aria-controls="collapseTwo">
            </span>
            <li class="d-inline"><a href="#2">Fictional character biography</a>
              <ul id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li><a href="#2.1">Early years</a></li>
                <li><a href="#2.2">1970s</a></li>
                <li><a href="#2.3">1980s</a></li>
                <li><a href="#2.4">1990s</a></li>
                <li><a href="#2.5">2000s</a></li>
                <li><a href="#2.6">2010s</a></li>
                <li><a href="#2.7">2020s</a></li>
              </ul>
            </li>
          </div>
          <li><a href="#3">Personality and themes</a></li>
          <li><a href="#4">Powers, skills, and abilities</a></li>
          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseThree"
              aria-expanded="true" aria-controls="collapseThree">
            </span>
            <li class="d-inline"><a href="#5">Other versions</a>
              <ul id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li><a href="5.1">Sky-Spider</a></li>
                <li><a href="#5.2">Spider-Man from Earth-93165</a></li>
              </ul>
            </li>
          </div>
          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseFour"
              aria-expanded="true" aria-controls="collapseFour">
            </span>
            <li class="d-inline"><a href="#6">Supporting cast</a></li>
            <ul id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li><a href="#6.1">Enemies</a></li>
              <li><a href="#6.2">Romantic interests</a></li>
              <li><a href="#6.3">Children</a></li>
              <li><a href="#6.4">Alternate versions of Spider-Man</a></li>
            </ul>
          </div>
          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseFive"
              aria-expanded="true" aria-controls="collapseFive">
            </span>
            <li class="d-inline"><a href="#7">Legacy</a></li>
            <ul id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li><a href="#7.1">Reception</a></li>
              <li><a href="#7.2">Real-life comparisons</a></li>
            </ul>
          </div>
          <li><a href="#8">In other media</a></li>
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
        </div>
        <div>
        </div>
      </main>
    </>
  )
}

export default Spiderman