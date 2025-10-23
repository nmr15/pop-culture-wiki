const AssassinsCreedII = () =>
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
          <li>Assassin's Creed II</li>
        </ul>
        <div>
          <h1 className="article-heading">Assassin's Creed II</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/7/77/Assassins_Creed_2_Box_Art.JPG" 
            alt="Assassin's Creed II logo" 
            className="article-heading-img"
          />
        </div>
      </main>
    </>
  )
}

export default AssassinsCreedII;