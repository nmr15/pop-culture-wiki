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
            <b>Community</b>
          </p>
        </div>
      </main>
    </>
  )    
}

export default Community
