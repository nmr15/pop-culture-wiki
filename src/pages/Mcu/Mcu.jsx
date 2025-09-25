import { Link } from 'react-router-dom'
import TableMcu from "../../components/TableMcu"

const Mcu = () => 
{
  return (
    <>
      <nav className="sidebar bg-dark">
        <ul>
          <li className="py-1">
            <a href="#top">Top</a>
          </li>
          <div className="accordion py-1">
            <span className="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#development"
              aria-expanded="true" aria-controls="development">
            </span>
            <li className="d-inline ms-2"><a href="#1">Development</a>
              <ul id="development" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li className="py-1">
                  <a href="#1.1">Marvel Studios films and series</a>
                  <ul>
                    <li className="py-1"><a href="#1.1.1">The Infinity Saga films</a></li>
                    <li className="py-1"><a href="#1.1.2">The Multiverse Saga films and series</a></li>
                    <li className="py-1"><a href="#1.1.3">Integration of mutant characters and the X-Men</a></li>
                    <li className="py-1"><a href="#1.1.4">Next saga</a></li>
                  </ul>
                </li>
                <li className="py-1"><a href="#1.2">Marvel Television series</a></li>
                <li className="py-1"><a href="#1.3">Expansion to other media</a></li>
                <li className="py-1"><a href="#1.4">Business practices</a></li>
              </ul>
            </li>
          </div>
          <div className="accordion py-1">
            <span className="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#films"
              aria-expanded="true" aria-controls="films">
            </span>
            <li className="d-inline ms-2"><a href="#2">Feature films</a></li>
            <ul id="films" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#2.1">The Infinity Saga</a></li>
              <li className="py-1"><a href="#2.2">The Multiverse Saga</a></li>
            </ul>
          </div>
          <div className="accordion py-1">
            <span className="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#series-specials"
              aria-expanded="true" aria-controls="series-specials">
            </span>
            <li className="d-inline ms-2"><a href="#3">Television series and specials</a></li>
            <ul id="series-specials" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#3.1">Marvel Television series</a></li>
              <li className="py-1"><a href="#3.2">Marvel Studio series</a></li>
            </ul>
          </div>
          <div className="accordion py-1">
            <span className="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#short-films"
              aria-expanded="true" aria-controls="short-films">
            </span>
            <li className="d-inline ms-2"><a href="#4">Short films</a></li>
            <ul id="short-films" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#4.1">Marvel One-Shots</a></li>
              <li className="py-1"><a href="#4.2">I Am Groot</a></li>
            </ul>
          </div>
          <div className="accordion py-1">
            <span className="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#other-media"
              aria-expanded="true" aria-controls="other-media">
            </span>
            <li className="d-inline ms-2"><a href="#5">Other media</a></li>
            <ul id="other-media" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#5.1">Digital series</a></li>
              <li className="py-1"><a href="#5.2">Comic books</a></li>
              <li className="py-1"><a href="#5.3">Books</a></li>
              <li className="py-1"><a href="#5.4">Music</a></li>
            </ul>
          </div>
          <div className="accordion py-1">
            <span className="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#universe"
              aria-expanded="true" aria-controls="universe">
            </span>
            <li className="d-inline ms-2"><a href="#6">Fictional universe</a></li>
            <ul id="universe" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#6.1">Timeline</a></li>
              <li className="py-1"><a href="#6.2">Multiverse</a></li>
            </ul>
          </div>
          <li className="py-1"><a href="#7">Recurring cast and characters</a></li>
          <li className="py-1"><a href="#8">Reception</a></li>
          <div className="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#impact"
              aria-expanded="true" aria-controls="impact">
            </span>
            <li className="d-inline ms-2"><a href="#9">Cultural impact</a>
              <ul id="impact" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li className="py-1">
                  <a href="#9.1">Other studios</a>
                  <ul>
                    <li className="py-1"><a href="#9.1.1">DC Entertainment and Warner Bros. Pictures</a></li>
                    <li className="py-1"><a href="#9.1.2">20th Century Fox</a></li>
                    <li className="py-1"><a href="#9.1.3">Sony Pictures</a></li>
                  </ul>
                </li>
                <li className="py-1"><a href="#9.2">Academia</a></li>
              </ul>
            </li>
          </div>
        </ul>
      </nav>
      <main className="main px-5 py-4" id="top">
        <div >
          <h1 className="article-heading">Marvel Cinematic Universe</h1>
        </div>
        <div className="img-right pt-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Marvel_Cinematic_Universe_logo.png/250px-Marvel_Cinematic_Universe_logo.png" 
            alt="Marvel Cinematic Universe" 
            className="article-heading-img"
          />
        </div>
        <div className="pt-2">
          <p>
            The <b>Marvel Cinematic Universe</b> is an American media franchise and shared universe centered on <a href="#">a series</a> of superhero films
            produced by <a href="#">Marvel Studios</a>. The films are based on characters that appear in American comic books published by <a href="#">Marvel Comics</a>.
            The franchise also includes <a href="#">several television series</a>, short films, digital series, and literature. The shared universe, much like the original
            <a href="#">Marvel Universe</a> in comic books, was established by crossing over common plot elements, settings, cast, and characters.
          </p>
          <p>
            Marvel Studios releases its films in groupd called "Phases", with the first three phases collectively known as "The Infinity Saga" and the following three phases
            as "The Multiverse Saga". The first MCU film, <a href="#">Iron Man</a> (2008), began <a href="#">Phase One</a>, which culminated in the 2012 crossover film
            <a href="#">The Avengers</a>. <a href="#">Phase Two</a> begain with <a href="#">Iron Man 3</a> (2013) and concluded with <a href="#">Ant-Man</a> (2015), while
            <a href="#">Phase Three</a> began with <a href="#">Captain America: Civil War</a> (2016) and concluded with <a href="#">Spider-Man: Far From Home</a> (2019).
            <a href="#">Black Widow</a> (2021) is the first film in <a href="#">Phase Four</a>, which concluded with <a href="#">Black Panther: Wakanda Forever</a> (2022),
            while <a href="#">Phase Five</a> began with <a href="#">Ant-Man and the Wasp: Quantumania</a> (2023) and will conclude with <a href="#">Thunderbolts*</a> (2025).
            <a href="#">Phase Six</a> will begin with <a href="#">The Fantastic Four: First Steps</a> (2025) and it will conclude with <a href="#">Avengers: Doomsday</a>
            (2026) and <a href="#">Avengers: Secret Wars</a> (2027).
          </p>
          <p>
            <a href="#">Marvel Television</a> expanded the universe to network television with <a href="#">Agents of S.H.I.E.L.D.</a> on <a href="#">ABC</a> in 2013 before
            further expanding to streaming television on <a href="#">Netflix</a> and <a href="#">Hulu</a> and to cable television on Freeform. They also produced the digital
            series <a href="#">Agents of S.H.I.E.L.D.: Slingshot</a> (2016). Marvel Studios began producing their own television series for streaming on <a href="#">Disney +</a>,
            starting with <a href="#">WandaVision</a> in 2021, as the beginning of Phase Four. That phase also saw the studio expand to television specials, known as
            <a href="#">Marvel Studios Special Presentation</a>, starting with <a href="#">Werewolf by Night</a> (2022). The MCU includes <a href="#">various tie-in comics</a> 
            published by Marvel Comics, a series of direct-to-video short films called <a href="#">Marvel One-Shots</a> from 2011 to 2014, and viral marketing campaigns for some
            films featruing the faux news program <a href="#">WHIH Newsfront</a> (2015-2016) and <a href="#">The Daily Bugle</a> (2019-2022).
          </p>
          <p>
            The franchise has been commercially successful, becoming one of the highest-grossing media franchises of all time, and it has received generally positive reviews
            from critics. The studio attributed several Multiverse Saga projects performing below expectations to the increase in the amount of content being produced after the
            2019 film <a href="#">Avengers: Endgame</a>, and began decreasing its content output from 2024. The MCU has inspired other film and television studios to attempt
            similar shared universes and has also inspired several themed attractions, an art exhibit, television specials, literary material, multiple tie-in video games,
            and commercials.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1" data-bs-toggle="collapse" data-bs-target="#collapseOne">Development</h2>
          <div className="collapse show" id="collapseOne">
            <h3 className="pt-2" id="1.1">Marvel Studios films and series</h3>
            <h4 className="pt-2" id="1.1.1">The Infinity Saga films</h4>
            <p>
              By 2005, Marvel Entertainment was planning to produce its own films independently and distribute them through Paramount Pictures. Previously, Marvel had
              co-produced several superhero films based on <Link to="/marvelcomics">Marvel Comics</Link> with Columbia Pictures, New Line Cinema, 20th Century Fox, and
              others. Marvel made relatively little profit from these licensing deals and wanted to get more money out of its films while maintaining artistic control
              of the projects and distribution. Avi Arad, head of Marvel Entertainment's film division known as <Link>Marvel Films</Link>, was pleased with director
              <Link>Sam Raimi</Link>'s <Link>Spider-Man film trilogy</Link> (2002-2007) at <Link>Sony Pictures</Link> and Columbia but was less enthused with some of
              the other films. Arad decided to form <Link>Marvel Studios</Link>, Hollywood's first major independent film studio since <Link>DreamWorks Pictures</Link>
              was founded in 1994, <Link>Kevin Feige</Link>, Arad's second-in-command, realized that unlike <Link>Spider-Man</Link>, <Link>Blade</Link>, and the
              <Link>X-Men</Link> which were respectively licensed to Sony, New Line, and Fox, Marvel owned the rights to the <Link>Avengers</Link> team. Feige, a
              self-described "fanboy", envisioned combining these characters in a shared universe similar to the one created by <Link>Stan Lee</Link> and 
              <Link>Jack Kirby</Link> for Marvel Comics in the 1960s.
            </p>
            <p>
              To raise capital, the studio secured funding from a seven-year, $520 million revolving credit facility with Merrill Lynch. Marvel planned to release
              individual films for their main characters and then merge them in a crossover film. Arad, who resigned in 2006, doubted this strategy would work. He
              insisted that it was his reputation that helped secure the initial financing. In 2007, Feige was named studio chief. To preserve its artistic integrity,
              Marvel Studios formed a creative committee of six people familiar with its comic book lore: Feige, Marvel Studios co-president Louis D'Esposito, Marvel
              Comics' president of publishing Dan Buckley, Marvel Entertainment's chief creative officer Joe Quesada, comic book writer <Link>Brian Michael Bendis</Link>,
              and Marvel Entertainment president Alan Fine, who oversaw the committee. Feige initally referred to the shared narrative continuity of the films as the
              "Marvel Cinema Universe", but later used the term "Marvel Cinemtic Universe". Since the franchise expanded to other media, some have use this phrase to
              only refer to the feature films.
            </p>
            <p>
              The MCU films are released in groups called "Phases", beginning with <Link>Phase One</Link> and <Link>Phase Two</Link>. In December 2009, <Link>the Walt
              Disney Company</Link> purchased Marvel Entertainment for $4 billion. Disney said future Marvel Studios films would be distributed by its own studio once
              the prior deal with Paramount expired. The films of <Link>Phase Three</Link> were announced at a special press event in October 2014. By September 2015,
              Marvel Studios was integrated into Walt Disney Studios. Feige was reporting to Walt Disney Studios chairman Alan F. Horn instead of Marvel Entertainment
              CEO Isaac Perlmutter, and the creative committee begain having only "nominal" input on the films. They continued to consult on <Link>Marvel Television</Link>
              productions, which remained under Perlmutter's control. All key film decisions moving forward were to be made by Feige, D'Esposito, and executive vice
              president Victoria Alonso. The studio went on to establish the Marvel Studios Parliament, a "brain trust" of long-time executives at the company who help
              to elevate each other's projects where possible. In November 2017, Feige said <Link>Avengers: Endgame</Link> (2019) would provide a definitive conclusion
              to the films thus far and begin a new period for the franchise. He later said Phase Three would conclude "<Link>The Infinity Saga</Link>".
            </p>
            <h4 className="pt-2" id="1.1.2">The Multiverse Saga films and series</h4>
            <p>
              Disney was reportedly developing a Marvel-based television series for their new streaming service <Link>Disney+</Link> by November 2017. In July 2018,
              Feige said discussions had begun with Disney regarding any potential invlovement Marvel Studios could have with the streaming service, which he felt was
              important for the wider company. In September 2018, Marvel Studios was reported to be developing several limited series centered on "second-tier"
              characters from the MCU films who had not and were unlikely to headline their own films. Each series was expected to be six to eight episodes and would
              be produced by Marvel Studios rather than Marvel Television, with Feige taking a "hands-on role" in each series' development. Feige said these series
              would "tell stories... that we wouldn't be able to tell in a theatrical experience, a longer-form narrative". He added that being asked by Disney to
              create these series "energized everyone creatively" within Marvel Studios, since they "could play in a new medium and throw the rules out the window in
              terms of structure and format". Television specials from the studio are marketed as "<Link>Marvel Studios Special Presentations</Link>".
              <Link>The Guardians of the Galaxy Holiday Special</Link> (2022), a Special Presentation, was the first project Marvel Studios began planning for Disney+.
            </p>
            <p>
              In July 2019, Feige announced the <Link>Phase Four</Link> slate at <Link>San Diego Comic-Con</Link>, consisting of films and, for the first time,
              television event series on Disney+. The Phase Four slate included <Link>What If...?</Link>, the first animated series from Marvel Studios, and by July
              2021 the studio was creating an "animation branch and mini studio", known as <Link>Marvel Studios Animation</Link>, to focus on more animated content
              beyond What If...?. Alonso said Marvel had around 31 projects in various stages of development by September 2021. In April 2022, Feige said he and
              Marvel Studios were on a creative retreat to plan and discuss the MCU films for the following 10 years. That July, Feige announced some of the films
              and series for <Link>Phase Five</Link> and <Link>Phase Six</Link> at San Diego Comic-Con, revealing that the second three Phases were collectively
              known as "<Link>The Multiverse Saga</Link>". After the "creative experience" of ending Phase Three and "The Infinity Saga" with <Link>Avengers:
              Infinity War</Link> (2018) and Avengers: Endgame, and the expansion in the number of projects being produced by the studio in a short amount of time,
              Marvel Studios decided to move away from having an Avengers crossover film at the end of each Phase and instead decided to have a crossover culmination
              at the end of "The Multiverse Saga" with the planned <Link>Avengers: The Kang Dynasty</Link> and <Link>Avengers: Secret Wars</Link> (2027).
              The studio was excited to explore <Link>Kang the Conqueror</Link> as an overarching villain of the Multiverse Saga after <Link>Thanos</Link> in the
              Infinity Saga, because Kang was a different villain in part because he has multiple variants from different timelines within the multiverse. The studio
              did not initially plan to build the next saga around Kang, and made that decision after seeing actor <Link>Jonathan Majors</Link>' performance in the
              <Link>first season</Link> of the Disney+ series <Link>Loki</Link> (2021), as well as dallies from the filming of <Link>Ant-Man and the Wasp: Quantumania</Link>
              (2023). After Majors was found guilty of assault and harassment amidst legal issues in December 2023, he was fired by Disney and Marvel Studios. At that
              time, Marvel was internally referring to The Kang Dynasty as Avengers 5, by early 2024, Marvel had decided to drop the Kang storyline and began searching
              for a new antagonist for the saga.
            </p>
            <p>
              Alonso was fired from her role at Marvel Studios in March 2023 for serving as a producer on the Amazon Studios film Argentina, 1985 (2022), in breach of
              a 2018 agreement between Alonso and Disney to not work for a competing studio. The decision was made by a group that included Disney Entertainment
              co-chairman Alan Bergman and Disney's human resources and legal department. Alonso reportedly did not seek permission to work on the film and was asked by
              Disney to stop working on it or promoting it. The situation was deemed serious enough that Disney requested a new agreement be signed. The company
              consistently reminded her of this while she continued to promote the film following its September 2022 premiere, ultimately leading to her firing. Alonso's
              lawyers refuted these claims, saying Disney was aware of, and agreed to, Alonso's work on Argentina, 1985 and Alonso had been "silenced [and] was terminated
              when she refused to do something she believed was reprehensible", this was reported to be a disagreement with a Disney executive over the censoring of gay
              pride elements in Quantumania so the film could be released in Kuwait in compliance with the country's restrictive anti-LGBTQ laws. A Disney spokesperson
              reiterated that Alonso was fird due to "an indisputable breach of contract and a direct violation of company policy" among other factors. Disney and
              Alonso reached a multi-million dollar compensation settlement in April.
            </p>
            <p>
              Disney CEO Bob Iger said in July 2023 that the company would be reducing the amount of Marvel content created moving forward, admitting that Marvel Studios'
              expansion into Disney+ series and more films had "diluted foxus and attention" after several underachieving films at the box office. He clarified their
              plans in May 2024, saying Disney would now release two, or at most three, Marvel films and two Marvel series a year. This was a decrease from up to four
              films and around four series being released in some recent years. The company was reducing output and focusing on quality across all its divisions, but
              Iger felt the change was especially needed for Marvel. Feige and D'Esposito said 2023 had been a particularly difficult year for the studio but they had
              learned their lesson on trying to make too much content at once. They added that no longer being "on top" of the box office allowed them to be underdogs
              again, as they had been while starting work on Phase One, and they would be "coming back strong" with the hopes of surprising audiences and exceeding
              expectations. Feige expected the studio to begin releasing two films and three series per year after 2025, when they were planning to release three films
              and six series that had been in development for a long time and were ready to be released. In May 2025, Iger called Thunderbolts* the "first and best
              example" of Marvel Studios refocusing efforts. In July, Feige said the studio had reduced the budgets of their 2024 and 2025 films to be a third lower
              than those for 2022 and 2023.
            </p>
            <p>
              In 2024, Marvel Studios introduced their "Marvel Animation" and "Marvel Television" banners for their animated and live-action series, respectively.
              This was done, along with the previously established <Link>Marvel Spotlight</Link> banner, to help indicate to audiences that they did not have to
              watch all of the studio's projects to understand the overall story and could choose which storylines and characters under these banners to follow.
              At San Diego Comic-Con 2024, the fifth Avengers film was retitled <Link>Avengers: Doomsday</Link> (2026), with <Link>Robert Downey Jr.</Link> cast
              as the Multiverse Saga's new antagonist <Link>Victor von Doom / Doctor Doom</Link> (after previously portraying the superhero <Link>Tony Stark /
              Iron Man</Link> in the MCU from 2008 to 2019) for both Doomsday and Secret Wars. Following several critical and financial failures, the studio began
              testing its films through test screenings organized by the National Research Group (NRG). The studio previously relied on "friends-and-family" test
              screenings at Walt Disney Studios in Burbank, California, to help maintain secrecy. Feige said the NRG tests had similar results to their own. By
              July 2025, <Link>Sacha Baron Cohen</Link>'s <Link>Mephisto</Link> was being viewed as the next "prominent" villain of the MCU.
            </p>
            <h4 className="pt-2" id="1.1.3">Integration of mutant characters and the X-Men</h4>
            <p>
              In December 2017, Disney agreed to acquire assets from <Link>21st Century Fox</Link>, and finalized the transaction on March 19, 2019. This saw the
              return of the film rights for <Link>Deadpool</Link>, the X-Men, and the <Link>Fantastic Four</Link> to Marvel Studios, although Feige explained that
              despite the acquisition being completed in 2019, access and integration of these characters and concepts were unavailable "for a very long time"
              because of corporate acquisition laws. Some of the first elements to be integrated into the MCU following the acquisition were the organization
              <Link>S.W.O.R.D.</Link> in the Disney+ series <Link>WandaVision</Link> (2021) and the fictional country <Link>Madripoor</Link> in the series
              <Link>The Falcon and the Winter Soldier</Link> (2021). Additionally, <Link>Patrick Stewart</Link> appeared as Professor <Link>Charles Xavier</Link>
              in the film <Link>Doctor Strange in the Multiverse of Madness</Link> (2022), portraying a different version of the character that he previously
              played in Fox's <Link>X-Men film series</Link>, while <Link>Kamala Khan</Link> was revealed to have a genetic mutation in <Link>Ms. Marvel</Link>,
              with star <Link>Iman Vellani</Link> confirming that she is the first mutant (a term related to the X-Men) in the MCU. <Link>Namor</Link> is also
              revealed to be a mutant in the film <Link>Black Panther: Wakanda Forever</Link> (2022), as he is in the comics. <Link>Kelsey Grammer</Link> appears
              as <Link>Dr. Hank McCoy / Beast</Link> in <Link>The Marvels</Link> (2023), reprising the role from the X-Men films. The film also introduces the
              mutant <Link>Binary</Link>, an alternate version of <Link>Maria Rambeau</Link>, portrayed by <Link>Lashana Lynch</Link>.
            </p>
            <p>
              Feige called <Link>Deadpool & Wolverine</Link> (2024) the true start to Marvel Studios' exploration and use of the Fox characters, and said every
              project after it would be part of the MCU's "Mutant era". Some of the films between Deadpool & Wolverine and Secret Wars featured additional X-Men
              characters, with Feige saying the story of Secret Wars would lead into a "new age of mutants" and the X-Men being introduced to the MCU. Doomsday
              sees additional X-Men film series actors reprising their roles, including <Link>Ian McKellen</Link> as <Link>Erik Lensherr / Magneto</Link>,
              <Link>Alan Cumming</Link> as <Link>Kurt Wagner / Nightcrawer</Link>, <Link>Rebecca Romjin</Link> as <Link>Raven Darkhölme / Mystique</Link>,
              and <Link>James Marsden</Link> as <Link>Scott Summers / Cyclops</Link>, Stewart and Grammer also reprise their roles in the film. Feige reportedly
              has a 10-year plan for the X-Men in the MCU.
            </p>
            <h4 className="pt-2" id="1.1.4">Next saga</h4>
            <p>
              In July 2025, Feige said Marvel Studios was "already well into development" on the three phases of their next saga following the conclusion of
              the Multiverse Saga with Secret Wars, noting that Phase Seven would be "directly impacted" bu what was being created for Doomsday and Secret Wars.
            </p>
            <h3 className="pt-2" id="1.2">Marvel Television series</h3>
            <p>
              Marvel Television was lanuched in June 2010 with Jeph Loeb as head, and had entered into discussions with <Link>ABC</Link> to create a show set in
              the MCU by July 2012, the network went on to release <Link>Agents of S.H.I.E.L.D.</Link>, <Link>Agent Carter</Link>, and <Link>Inhumans</Link>.
              The latter was a co-production with IMAX Corporation. In November 2013, Disney was set to provide Netflix with the live-action series
              <Link>Daredevil</Link>, <Link>Jessica Jones</Link>, <Link>Luke Cage</Link>, and <Link>Iron Fist</Link>, building up to the crossover miniseries
              <Link>The Defenders</Link>. In April 2016, Netflix ordered <Link>The Punisher</Link>, a spin-off of Daredevil. By February 2019, Netflix had
              cancelled all of its Marvel series. In April 2016, the Disney-owned cable network Freeform announced <Link>Cloak & Dagger</Link>. In May 2017,
              Marvel announced that <Link>Runaways</Link> had received a series order from Hulu. In May 2019, Marvel announced that <Link>Helstrom</Link>
              had been greenlit for Hulu.
            </p>
            <p>
              In October 2019, further corporate restructuring saw Feige named Chief Creative Officer of Marvel Entertainment, with Marvel Television
              becoming part of Marvel Studios and executives of Marvel Television reporting to Feige. In December 2019, Marvel Television was folded into
              Marvel Studios, with Marvel Studios taking over production of the remaining series and no further series expected to be developed by Marvel
              Television. In January 2021, Feige said "never say never" to potentially reviving the Netflix series, but noted that Marvel Studios was
              focused on their new Disney+ series. In May 2022, Marvel Studios was revealed to be developing a new Daredevil series for Disney+, which was
              announed in July as <Link>Daredevil: Born Again</Link>.
            </p>
            <h3 className="pt-2" id="1.3">Expansion to other media</h3>
            <p>
              In 2008, the first comic book to tie-into the MCU was released. Quesada explained that these comics would be set within the continuity of the
              films, but were not intended to be direct adaptations. Rather, they would explore "something that happened off screen" or flesh out something
              briefly mentioned. Feige was invloved with the creation of the comics, with the film's screenwriters sometimes as well. Marvel Comics worked
              with Brad Winderbaum, Jeremy Latcham, and Will Corona Pilgrim at Marvel Studios to decide which concepts would be carried over from the Marvel
              Comics Universe to the Marvel Cinematic Universe, what to show in the tie-in comics, and what to leave for the films. Marvel later clarified
              which of the tie-in comics are considered canonical MCU stories, with the rest being merely inspired by the MCU "where we get to show off all
              the characters from the film in costume and in comic form".
            </p>
            <p>
              In August 2011, Marvel announced a series of direct-to-video short films called <Link>Marvel One-Shots</Link>. The name was derived from the
              label used by Marvel Comics for their one-shot comics. Winderbaum said the shorts were "a fun way to experiment with new characters and ideas"
              and to expand the MCU. Each short was designed to be a self-contained story that provided more backstory for characters or events introduced in
              the films.
            </p>
            <p>
              In March 2015, Marvel's vice president of animation development and production, Cort Lane, said animated tie-ins to the MCU were "in the works".
              That July, Marvel Studios partneered with <Link>Google</Link> to produce the faux news program <Link>WHIH Newsfront with Christine Everhart</Link>,
              a series of in-universe <Link>Youtube</Link> videos serving as the center of a viral marketing campaign to promote the films and universe. In
              Deceber 2016, a six-part web series, <Link>Agents of S.H.I.E.L.D.: Slingshot</Link>, debuted on ABC.com. It follows <Link>Elena "Yo-Yo" 
              Rodriguez</Link> on a secret mission, shortly before the start of Agents of S.H.I.E.L.D.'s <Link>fourth season</Link>, with <Link>Natalie
              Cordova-Buckley</Link> reprising her role from the series. In September 2019, Sony created a real version of the fictional <Link>The Daily Bugle</Link>
              website as part of a viral marketing campaign to promote the home media realse of <Link>Spider-Man: Far From Home</Link> (2019).
              Inspired by real world "conspiracy-pushing" websites such as Alex Jones' InfoWars, the website featured <Link>J. K. Simmons</Link> reprising his role
              as <Link>J. Jonah Jameson</Link> in a video where he speaks out against Spider-Man before asking viewers to "like and subscribe". In December 2020,
              Marvel Studios announeced <Link>I Am Groot</Link>, a series of photorealistic animated shorts atarring <Link>Baby Groot</Link> for Disney+.
            </p>
            <h3 className="pt-2" id="1.4">Business practices</h3>
            <p>
              In November 2016, Feige explained that the studio would often put together a "lookback" of influences from the comics and art by Marvel's visual 
              development department, to create a visual template for a project. These are put together at company retreats, which the studio holds approximately
              every 18 months to plan out future projects and develop the phases of the MCU. However, these lookbacks are not always shown to directors, with
              Marvel sometimes preferring to let the director offer their own ideas first. When choosing a director for a project, Marvel Studios looks for
              filmmakers to hire who can guide a film. Some of their choices for directors have been considered "out-of-left-field" based on those director's
              previous work. On this, Feige remarked that "you don't have to have directed a big, giant visual-effects movie to do a big, giant visual-effects
              movie for us. You just have to have done something singularly sort of awesome."
            </p>
            <p>
              The studio ensures directors are open to the idea of the shared universe and are willing to include connective material, such as
              <Link>Kenneth Branagh</Link> and <Link>Joe Johnston</Link> needing to invlude scenes that set-up <Link>The Avengers</Link> (2012) in their
              respective Phase One films <Link>Thor</Link> and <Link>Captain America: The First Avenger</Link> (both 2011). Marvel Studios usually has a
              big idea they would like to explore or build to in a project, such as <Link>Hydra</Link> infiltrating <Link>S.H.I.E.L.D.</Link> in
              <Link>Captain America: The Winter Soldier</Link> (2014), but they leave it up to the filmmaker to interpret and "improve a little bit" to
              get that point. After these ideas have been developed, the creative team then begins exploring ideas from other future projects to see how to
              make and larger universe connections. For many of their early films, Feige was closely involved during a film's development before allowing
              filming to be overseen by lower-level studio executives. Feige would then become invloved again during editing, when films could be entirely
              rewritten or reworked. Feige described the company's approach as "plus-ing at every turn", where they are always trying to improve a project
              and include new suggestions rather than sticking to a set script. Feige said they would not atart a film without a full script, but he was never
              satisfied with their scripts or finished films and always felt they could do better.
            </p>
            <p>
              In August 2012, Marvel sined The Avengers and <Link>Avengers: Age of Ultron</Link> (2015) director <Link>Joss Whedon</Link> to an exclusive
              contract through June 2015 for film and television. With the deal, Whedon contributed creatively to all of the Phase Two films and also
              developed Agents of S.H.I.E.L.D., the first telvesion series set in the MCU. In April 2017, <Link>Guardians of the Galaxy</Link> (2014) and
              <Link>Guardians of the Galaxy Vol. 2</Link> (2017) writer and director <Link>James Gunn</Link> revealed that he would be working with Marvel
              to help plan future stories for the <Link>Guardians of the Galaxy</Link> characters and the wider "Marvel Cosmic Universe", although Gunn
              became the co-CEO of <Link>DC Studios</Link> in November 2022 and signed a four-year deal to work exclusively on <Link>DC Comics</Link>-based
              projects. For Phase Three, there was a large amount of collaboration between the filmmakers of the individual character films and the
              filmmakers of the crossover films Avengers: Infinity War and Avengers: Endgame, which were directed by the <Link>Russo brothers</Link> and
              written by <Link>Christopher Markus and Stephen McFeely</Link>. This was to ensure their storytelling aligned for the Infinity Saga's
              culmination.
            </p>
            <p>
              Marvel Studios began contracting their actors for multiple films, including signing actor <Link>Samuel L. Jackson</Link> to a
              then-unprecedented nine-film contract. Feige said the studio had all actors sign contracts for multiple films, with the normal number being
              for three or more while the nine or twelve film deals were rare. The actors' contracts also featre clauses that allow Marvel to use up to
              three minutes of an actor's performance from one film in another, which Marvel describes as "bridging material". By the start of Phase
              Four, Marvel Studios was no longer contracting actors for a large number of projects, with deal lengths varying for each actor and project.
              Feige said the studio was looking for actors who were excited to join the franchise and appear in multiple projects without being locked into
              contractual obligations. He also noted that they were starting to include theme park attractions in actors' deals. By December 2020,
              because of the impact COVID-19 had on theaters and film studios shifting away from theatrical releases, Marvel Studios began exploring updated
              contracts for actors, writers, directors, and producers to receive adjusted compensation in the event a film had to debut on Disney+ instead
              of in theaters. TheWrap reported that the new contracts would likely only apply to films about to enter production.
            </p>
            <p>
              For Marvel Television, Loeb said he and his executives were involved in all aspects of production: "whether it's being in the writers' room,
              editing, on set, casting, every step of the production goes through the Marvel team to tell the best story that we can". He said the studio
              was able to work on so many series across different networks and platforms because all they needed was one person working on each series to
              help "guide the process". When developing the crossover miniseries The Defenders, showrunner Marco Ramirez consulted with the creators of
              all the individual Marvel Netflix series, having them read each of the scripts for The Defenders and provide insight into individual
              characters' worlds. Actors appearing in Marvel Television series, such as <Link>Charlie Cox</Link> (who portrayed <Link>Matt Murdock /
              Daredevil</Link> in Daredevil) and <Link>Adrianna Palicki</Link> (<Link>Bobbi Morse / Mockingbird</Link> in Agents of S.H.I.E.L.D.), were
              contractually obligated to appear in a Marvel Studios film if asked. In December 2021, Feige confirmed that Cox would reprise the role of
              Daredevil in Marvel Studios MCU productions, with Cox first reprising the role in the film <Link>Spider-Man: No Way Home</Link> (2021).
              Additionally, <Link>Vincent D'Onofrio</Link> first reprised his role as <Link>Wilson Fisk / Kingpin</Link> from Daredevil in the Disney+
              series <Link>Hawkeye</Link> (2021).
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Feature films</h2>
          <div className="collapse show" id="collapseTwo">

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3" data-bs-toggle="collapse" data-bs-target="#collapseThree">Television series and specials</h2>
          <div className="collapse show" id="collapseThree"></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4" data-bs-toggle="collapse" data-bs-target="#collapseFour">Short films</h2>
          <div className="collapse show" id="collapseFour"></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5" data-bs-toggle="collapse" data-bs-target="#collapseFive">Other media</h2>
          <div className="collapse show" id="collapseFive"></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6" data-bs-toggle="collapse" data-bs-target="#collapseSix">Fictional universe</h2>
          <div className="collapse show" id="collapseSix">
            <h3 className="pt-2" id="6.1">Timeline</h3>
            <p>
              The fictional timeline of the MCU includes the feature films, television series, television specials, short films, and the I Am Groot
              shorts from Marvel Studios, and Marvel Television's Netflix series. While the early films of Phase One and Phase Two of the franchise
              followed each other in the timeline similar to their release order, Phase Three saw many of the films overlapping with each other in
              the timeline, while also introducing the first prequel property, Captain Marvel. The Phase Three film Avengers: Endgame featured
              characters travelling into the past and introduced a five-year time jump, with many subsequent releases in Phase Four and Phase Five
              set after Endgame's events in the timeline. The television series Loki and What If...? were the first properties to occur outside of
              the main timeline and explore alternate timelines and universes.
            </p>
            <p>
              There have been numerous attempts by Marvel Studios and others to codify the events of the MCU, which have been subject to perceived
              continuity errors, resulting in Marvel Studios releasing an official timeline book in 2023 for their first four phases that were
              designated as part of their "<Link>Sacred Timeline</Link>". This book did not feature projects produced by other companies, such as
              Marvel Television's series which all had been loosely connected to the films, however, it was noted all of these outside projects
              were part of the larger Marvel canon. In early 2024, Marvel Studios formally integrated Marvel Television's group of Netflix series
              into their Disney+ timeline.
            </p>
            <p>
              As of the Phase Five television series Daredevil: Born Again and the film Thunderbolts*, the "present day" in the MCU is 2027. The
              following covers and discusses MCU media released by Marvel Studios and the Netflix series by Marvel Television. Loki and What
              If...? are excluded from the diagram because they occur outside of the main timeline. Werewolf by Night is also excluded give the
              special explicitly does not indicate where it takes place in the MCU. Disney+'s timeline order places the first seasons of Loki and
              What If...? between Avengers: Endgame and WandaVision, their second seasons after The Marvels, and Werewolf by Night after Thor: Love
              and Thunder. Werewolf by Night is also placed here in The Marvel Cinematic Universe: An Official Timeline.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7" data-bs-toggle="collapse" data-bs-target="#collapseSeven">Recurring cast and characters</h2>
          <div className="collapse show" id="collapseSeven"></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8" data-bs-toggle="collapse" data-bs-target="#collapseEight">Reception</h2>
          <div className="collapse show" id="collapseEight"></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="9" data-bs-toggle="collapse" data-bs-target="#collapseNine">Cultural impact</h2>
          <div className="collapse show" id="collapseNine"></div>
        </div>
        <div>
          <table className="table-center">
            <thead>
              <tr>
                <th colSpan="4">Marvel Cinematic Universe</th>
              </tr>
              <tr>
                <th colSpan="4">Marvel Studios</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3">Infinity Saga</td>
                <td>Phase One</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">Iron Man</a></li>
                    <li><a href="#">The Incredible Hulk</a></li>
                    <li><a href="#">Iron Man 2</a></li>
                    <li><a href="#">Thor</a></li>
                    <li><a href="#">Captain America: The First Avenger</a></li>
                    <li><a href="#">The Avengers</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Phase Two</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">Iron Man 3</a></li>
                    <li><a href="#">Thor: The Dark World</a></li>
                    <li><a href="#">Captain America: The Winter Soldier</a></li>
                    <li><a href="#">Guardians of the Galaxy</a></li>
                    <li><a href="#">Avengers: Age of Ultron</a></li>
                    <li><a href="#">Ant-Man</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Phase Three</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">Captain America: Civil War</a></li>
                    <li><a href="#">Doctor Strange</a></li>
                    <li><a href="#">Guardians of the Galaxy Vol. 2</a></li>
                    <li><a href="#">Spider-Man: Homecoming</a></li>
                    <li><a href="#">Thor: Ragnarok</a></li>
                    <li><a href="#">Black Panther</a></li>
                    <li><a href="#">Avengers: Infinity War</a></li>
                    <li><a href="#">Ant-Man and the Wasp</a></li>
                    <li><a href="#">Captain Marvel</a></li>
                    <li><a href="#">Avengers: Endgame</a></li>
                    <li><a href="#">Spider-Man: Farm From Home</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default Mcu
