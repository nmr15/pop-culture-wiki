const SpidermanFilms = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Spider-Man films</li>
        </ul>
        <div>
          <h1 className="article-heading">Spider-Man films</h1>
        </div>
      </main>
    </>
  )
}

export default SpidermanFilms;