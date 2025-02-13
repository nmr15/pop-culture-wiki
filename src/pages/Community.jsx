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
            style={{ width: "250px" }}
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
          <p>
            Harmon based Community on his experiences attending Glendale Community College.
            Each episode was written in accordance with Harmon's "story circle" template, a
            method designed to create effective and structured storytelling. Harmon was the
            showrunner for the first three seasons byt was fired before the fourth and replaced by
            David Guarascio and Moses Port. After weaker reviews, Harmon was rehired for the
            fifth season, after which NBC canceled the series. Yahoo! Screen revived the show for
            Community's sixth and final season.
          </p>
          <p>
            Despite sturggling in the ratings, Community developed a cult following and received
            acclaim for its acting, direction, writing, and meta-humor. It won a Primetime Emmy
            Award from four nominations and received the Critics' Choice Television Award for Best
            Comedy Series in 2012, among other accolades. In September 2022, after several
            years of speculation and development, a featre-length Community film was announced
            for NBCUniversal's streaming service <a href="#">Peacock</a>
          </p>
        </div>
      </main>
    </>
  )
}

export default Community