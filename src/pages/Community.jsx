const Community = () => 
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
          <h1 className="article-heading">Community</h1>
        </div>
        <div className="img-right pt-2">
          <img
            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/community-tv/a/a3/Community-logo.jpg"
            alt="Community"
          />
        </div>
        <div className="pt-2">
          <p>
            <b>Community</b> is an American television sitcom created by <a href="#">Dan Harmon</a>. The series ran
            for <a href="#">110 episodes</a> over six seasons, with its first five seasons airing on <a href="#">NBC</a> from
            September 17, 2009, to April 17, 2014, and its final season airing on <a href="#">Yahoo! Screen</a>
            from March 17 to June 2, 2015. Set at a community college in the fictional Colorado
            town of Greendale, the series stars an ensemble cast including <a href="#">Joel McHale</a>, <a href="#">Gillian Jacobs</a>,
            <a href="#">Danny Pudi</a>, <a href="#">Yvette Nicole Brown</a>, <a href="#">Alison Brie</a>, <a href="#">Donald Glover</a>, <a href="#">Ken Jeong</a>,
            <a href="#">Chevy Chase</a>, and <a href="#">Jim Rash</a>. It makes use of meta-humor and pop culture references,
            paying homage to film and television clichés and tropes.
          </p>
        </div>
      </main>
    </>
  )
}

export default Community