import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGta from '../../../components/TableGta'

const Claude = () =>
{
  useEffect(() =>
  {
    document.title = "Claude - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="History"
            sub={[
              {id: "1.1", title: "Background"},
              {id: "1.2", title: "Events of Grand Theft Auto: San Andreas", sub2: [
                {id: "1.2.1", title: "Racing with Carl Johnson"}
              ]},
              {id: "1.3", title: "Before the events of Grand Theft Auto III"},
              {id: "1.4", title: "Events of Grand Theft Auto III", sub2: [
                {id: "1.4.1", title: "Bank Heist and Jailbreak"},
                {id: "1.4.2", title: "The Leone Family"},
                {id: "1.4.3", title: "The Yakuza"},
                {id: "1.4.4", title: "Later Jobs and The Exchange"}
              ]},
              {id: "1.5", title: "After Grand Theft Auto III"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <h1>Claude</h1>
      </main>
    </>
  )
}

export default Claude;