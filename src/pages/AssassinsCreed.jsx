const AssassinsCreed = () => 
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
          <h1 className="article-heading">Assassin's Creed</h1>
        </div>
        <div className="img-right pt-2">
          <img 
            src="https://1000logos.net/wp-content/uploads/2017/08/Assassins-Creed-Logo-1536x966.png" 
            alt="Assassin's Creed" 
            className="article-heading-img"
          />
        </div>
        <div className="pt-2">
          <p>
            <b>Assassin's Creed</b> is a historical action-adventure video game series and media franchise published by <a href="#">Ubisoft</a> and developed mainly
            by its studio <a href="#">Ubisoft Montreal</a> using the game engine Anvil and its more advanced derivatives. Created by Patrice Désilets, Jade Raymond,
            and Corey May, the Assassin's Creed video game series depicts a fictional millennia-old struggle between the <a href="#">Order of Assassins</a>, who
            fight for peace and free will, and the <a href="#">Knights Templar</a>, who desire peace through order and control. The series features historical fiction,
            science fiction, and fictional characters interwined with real-world historical events and historical figures. In most games, players control a historical
            Assassin while also playing as an Assassin Initiative or someone caight in the Assassin-Templar conflict in the present day framing story. Considered
            a spirtial successor to the Prince of Persia series, Assassin's Creed took inspiration from the novel Alamut by the Slovenian writer Vladimir Bartol,
            based on the historical Hashashin sect of the medieval Iran (Persia).
          </p>
        </div>
      </main>
    </>
  )
}

export default AssassinsCreed
