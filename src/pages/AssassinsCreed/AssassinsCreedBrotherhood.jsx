const AssassinsCreedBrotherhood = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list"></ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/assassinscreed">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed Brotherhood</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed Brotherhood</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/2/2a/Assassins_Creed_brotherhood_cover.jpg" 
            alt="Assassin's Creed Brotherhood logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedBrotherhood;