const Spongebob = () => 
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
          <h1 className="article-heading">Spongebob Squarepants</h1>
        </div>
        <div className="img-right pt-2">
          <img 
            src="https://1000logos.net/wp-content/uploads/2020/09/SpongeBob_SquarePants_logo-1536x802.png" 
            alt="Spongebob Squarepants" 
            className="article-heading-img"
          />
        </div>
        <div className="pt-2">
          <<p>
            <b>Spongebob Squarepants</b> is an American animated television series created by marine science educator and animator <a href="#">Stephen Hillenburg</a>
            for <a href="#">Nickelodeon</a>. It first aired as a sneak peek after the 1999 Kids' Choice Awards on May 1, 1999, and officially premiered on
            July 17, 1999. It chronicles the adventures of <a href="#">Spongebob Squarepants</a> and his aquatic friends in the underwater city of <a href="#">Bikini Bottom</a>.
          </p>
        </div>
      </main>
    </>
  )
}

export default Spongebob
