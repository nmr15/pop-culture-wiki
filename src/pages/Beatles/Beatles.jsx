import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableBeatles from "../../components/TableBeatles"

const Beatles = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "1956-1963: Formation", sub2: [
                {id: "1.1.1", title: "The Quarrymen and name change"},
                {id: "1.1.2", title: "Early residencies and UK popularity"},
                {id: "1.1.3", title: "First EMI recordings"}
              ]},
              {
                id: "1.2", title: "1963-1966: Beatlemania and touring years"
              }
            ]}
          />
        </ul>
      </aside>
      <main className="main px-5 py-4">
        <div id="top">
          <h1 className="article-heading">The Beatles</h1>
        </div>
        <div className="img-right pt-2">
          <img 
            src="https://1000logos.net/wp-content/uploads/2017/06/Beatles-Logo-768x370.png" 
            alt="The Beatles" 
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
      <TableBeatles />
      </main>
    </>
  )
}

export default Beatles
