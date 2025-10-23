const AssassinsCreedGame = () =>
{
  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list"></ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gta">Assassin's Creed (franchise)</Link></li>
          <li>Assassin's Creed (game)</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed (game)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg" 
            alt="Assassin's Creed logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedGame;