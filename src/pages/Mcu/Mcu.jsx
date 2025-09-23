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
          <div className="collapse show" id="collapseSix"></div>
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
