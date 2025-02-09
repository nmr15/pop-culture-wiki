import { Link } from "react-router-dom"
import { marvelcharacters } from "../data"

const MarvelComics = () => 
{
  return (
    <>
      <nav className="sidebar bg-dark">

      </nav>
      <main className="main px-5 py-4">
        <div id="top">
          <h1 className="article-heading">Marvel Comics</h1>
        </div>
        <div className="img-right ms-3 pt-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Marvel_Comics_2024_logo.svg/220px-Marvel_Comics_2024_logo.svg.png"
            alt="Marvelo Comics Logo" 
          />
        </div>
        <div>
          <p>
            Marvel Comics is a New York City-based comic book publisher, a property of <a href="#">The Walt Disney Company</a>
            since March 2023. Marvel was founded in 1939 by <a href="#">Martin Goodman</a> as
            <a href="#">Timely Comics</a>, and by 1951 had generally become known as <a href="#">Atlas Comics</a>. The
            Marvel era began in August 1961 with the launch of <a href="#">The Fantastic Four</a> and other
            superheroe titles created by <a href="#">Stan Lee</a>, <a href="#">Jack Kirby</a>, <a href="#">Steve Ditko</a>, and numerous others.
            The Marvel brand, which has been used over the years and decades, was solidified as
            the company's primary brand.
          </p>
        </div>
        <div>
          <h2 className="article-heading">Characters</h2>
          <div className="row">
            {marvelcharacters.map((character) => (
              <div className="col-3" key={character.id}>
                <Link to={character.route}>
                  <div className="card article-card">
                    <img src={character.img} 
                      alt={character.title} 
                      className="card-img-top article-card-img" 
                    />
                    <div className="body">
                      <a href="#" className="card-title">{character.title}</a>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default MarvelComics