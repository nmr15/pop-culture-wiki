const Himym = () => 
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
          <h1 className="article-heading">How I Met Your Mother</h1>
        </div>
        <div className="img-right pt-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/HowIMetYourMother.svg/440px-HowIMetYourMother.svg.png" 
            alt="How I Met Your Mother" 
            className="article-heading-img"
          />
        </div>
        <div className="pt-2">
          <p>
            <b>How I Met Your Mother</b> is an American sitcom created by Craig Thomas and Carter Bays for CBS. The series, which aired from September 19, 2005,
            to March 31, 2014, follows main character <a href="#">Ted Mosby</a> and his group of friends in New York City's Manhattan. As a frame story, Ted (in 2030)
            recounts to his daughter Penny and son Luke the events from September 2005 to May 2013 that led to him meeting <a href="#">their mother</a>.
          </p>
        </div>
      </main>
    </>
  )
}

export default Himym
