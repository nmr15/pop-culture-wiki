const Mcu = () => 
{
  return (
    <>
      <nav className="sidebar bg-dark">
        <ul>
          <li className="py-1">
            <a href="#top">Top</a>
          </li>
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
