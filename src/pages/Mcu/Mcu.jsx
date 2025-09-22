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
          </div>
        </div>
        <div>
          <h2 className="article-heading" id="2">Feature films</h2>
        </div>
        <div>
          <h2 className="article-heading" id="3">Television series and specials</h2>
        </div>
        <div>
          <h2 className="article-heading" id="4">Short films</h2>
        </div>
        <div>
          <h2 className="article-heading" id="5">Other media</h2>
        </div>
        <div>
          <h2 className="article-heading" id="6">Fictional universe</h2>
        </div>
        <div>
          <h2 className="article-heading" id="7">Recurring cast and characters</h2>
        </div>
        <div>
          <h2 className="article-heading" id="8">Reception</h2>
        </div>
        <div>
          <h2 className="article-heading" id="9">Cultural impact</h2>
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
