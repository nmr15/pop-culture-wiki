const Himym = () => 
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
          <h1 className="article-heading">How I Met Your Mother</h1>
        </div>
        <div className="img-right pt-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/HowIMetYourMother.svg/440px-HowIMetYourMother.svg.png" 
            alt="How I Met Your Mother" 
            className="article-heading-img"
          />
        </div>
        <div className="pt-2">
          <p>
            <b>The Beatles</b> were an English rock band formed in Liverpool in 1960. The core lineup of the band comprised <a href="#">John Lennon</a>, <a href="#">Paul McCartney</a>,
            <a href="#">George Harrison</a>, and <a href="#">Ringo Starr</a>. They are widely regarded as the most influential band in Western popular music and were integral to the
            development of 1960s counterculture and the recognition of popular music as an art form. Rooted in skiffle, beat, and 1950s rock 'n' roll, their sound incorporated elements of
            classical music and traditional pop in innovative ways. The band also explored music styles ranging from folk and Indian music to psychedelia and hard rock. As pioneers in
            recording, songwriting, and artistic presentation, the Beatles revolutionised many aspects of the music industry and were often publicised as leaders of the era's youth and
            sociocultural movements
          </p>
        </div>
      </main>
    </>
  )
}

export default Himym
