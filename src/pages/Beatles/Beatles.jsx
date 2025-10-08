import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableBeatles from "../../components/TableBeatles"

const Beatles = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "1956-1963: Formation", sub2: [
                {id: "1.1.1", title: "The Quarrymen and name change"},
                {id: "1.1.2", title: "Early residencies and UK popularity"},
                {id: "1.1.3", title: "First EMI recordings"}
              ]},
              {id: "1.2", title: "1963-1966: Beatlemania and touring years", sub2: [
                {id: "1.2.1", title: "Please Plase Me and With the Beatles"},
                {id: "1.2.2", title: "First visit to the United States and the British Invasion"},
                {id: "1.2.3", title: "A Hard Day's Night"},
                {id: "1.2.4", title: "1964 world tour, meeting Bob Dylan and stand on civil rights"},
                {id: "1.2.5", title: "Beatles for Sale, Help!, and Rubber Soul"},
                {id: "1.2.6", title: "Controversies, Revolver, and final tour"}
              ]},
              {id: "1.3", title: "1966-1970: Studio years", sub2: [
                {id: "1.3.1", title: "Sgt. Pepper's Lonely Hearts Club Band"},
                {id: "1.3.2", title: "Magical Mystery Tour and Yellow Submarine"},
                {id: "1.3.3", title: "India retreat, Apple Corps, and the White Album"},
                {id: "1.3.4", title: "Abbey Road, Let it Be, and separation"}
              ]},
              {id: "1.4", title: "After the breakup", sub2: [
                {id: "1.4.1", title: "1970s"},
                {id: "1.4.2", title: "1980s"},
                {id: "1.4.3", title: "1990s"},
                {id: "1.4.4", title: "2000s"},
                {id: "1.4.5", title: "2010s"},
                {id: "1.4.6", title: "2020s"}
              ]}
            ]}
          />
          <Collapse 
            id="2"
            item="Artistry"
            sub={[
              {id: "2.1", title: "Development"},
              {id: "2.2", title: "Influences"},
              {id: "2.3", title: "Genres"},
              {id: "2.4", title: "Contribution of George Martin"},
              {id: "2.5", title: "In the studio"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Legacy</a></li>
          <li className="sidebar-list-item"><a href="#4">Awards and achievements</a></li>
          <Collapse 
            id="5"
            item="Band members"
            sub={[
              {id: "5.1", title: "Timeline"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Discography</a></li>
          <li className="sidebar-list-item"><a href="#7">Song catalogue</a></li>
          <li className="sidebar-list-item"><a href="#8">Selected filmography</a></li>
          <li className="sidebar-list-item"><a href="#9">Concert tours</a></li>
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
