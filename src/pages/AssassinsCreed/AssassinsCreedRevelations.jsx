const AssassinsCreedRevelations = () =>
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
          <li>Assassin's Creed Revelations</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed Revelations</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/d/d9/Assassins_Creed_Revelations_Cover.jpg" 
            alt="Assassin's Creed Revelations logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedRevelations;