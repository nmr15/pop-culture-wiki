const Mcu = () => 
{
  return (
    <>
      <nav className="sidebar bg-dark">
        <ul>
          <li className="py-1">
            <a href="#top">Top</a>
          </li>
          <div class="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#development"
              aria-expanded="true" aria-controls="development">
            </span>
            <li class="d-inline ms-2"><a href="#1">Development</a>
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
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#films"
              aria-expanded="true" aria-controls="films">
            </span>
            <li class="d-inline ms-2"><a href="#2">Feature films</a></li>
            <ul id="films" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#2.1">The Infinity Saga</a></li>
              <li className="py-1"><a href="#2.2">The Multiverse Saga</a></li>
            </ul>
          </div>
          <div className="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#series-specials"
              aria-expanded="true" aria-controls="series-specials">
            </span>
            <li class="d-inline ms-2"><a href="#3">Television series and specials</a></li>
            <ul id="series-specials" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#3.1">Marvel Television series</a></li>
              <li className="py-1"><a href="#3.2">Marvel Studio series</a></li>
            </ul>
          </div>
          <div className="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#short-films"
              aria-expanded="true" aria-controls="short-films">
            </span>
            <li class="d-inline ms-2"><a href="#4">Short films</a></li>
            <ul id="short-films" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#4.1">Marvel One-Shots</a></li>
              <li className="py-1"><a href="#4.2">I Am Groot</a></li>
            </ul>
          </div>
          <div className="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#other-media"
              aria-expanded="true" aria-controls="other-media">
            </span>
            <li class="d-inline ms-2"><a href="#5">Other media</a></li>
            <ul id="other-media" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#5.1">Digital series</a></li>
              <li className="py-1"><a href="#5.2">Comic books</a></li>
              <li className="py-1"><a href="#5.3">Books</a></li>
              <li className="py-1"><a href="#5.4">Music</a></li>
            </ul>
          </div>
          <div className="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#universe"
              aria-expanded="true" aria-controls="universe">
            </span>
            <li class="d-inline ms-2"><a href="#6">Fictional universe</a></li>
            <ul id="universe" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li className="py-1"><a href="#6.1">Timeline</a></li>
              <li className="py-1"><a href="#6.2">Multiverse</a></li>
            </ul>
          </div>
          <li class="d-inline ms-2"><a href="#7">Recurring cast and characters</a></li>
          <li class="d-inline ms-2"><a href="#8">Reception</a></li>
          <div class="accordion py-1">
            <span class="accordion-toggle dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#impact"
              aria-expanded="true" aria-controls="impact">
            </span>
            <li class="d-inline ms-2"><a href="#9">Cultural impact</a>
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
      <main className="main px-5 py-4">
        <div id="top">
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
        </div>
      </main>
    </>
  )
}

export default Mcu
