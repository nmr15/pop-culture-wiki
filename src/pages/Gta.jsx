const Gta = () => 
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
          <h1 className="article-heading">Grand Theft Auto</h1>
        </div>
        <div className="img-right pt-2">
          <img 
            src="https://1000logos.net/wp-content/uploads/2018/03/GTA-Logo.png" 
            alt="Grand Theft Auto" 
            className="article-heading-img"
          />
        </div>
        <div className="pt-2">
          <p>
            <b>Grand Theft Auto</b> is an action-adventure video game series created by David Jones and Mike Dailly. Later titles were developed under the oversight
            of brothers Dan and Sam Houser, Leslie Benzies, and Aaron Garbut. It is primarily developed by British development house <a href="#">Rockstar North</a>
            (formerly DMA Design), and published by its American parent company, <a href="#">Rockstar Games</a>. The name of the series is a term for motor vehicle
            theft in the United States.
          </p>
        </div>
      </main>
    </>
  )
}

export default Gta
