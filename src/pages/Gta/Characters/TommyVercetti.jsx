import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableGta from '../../../components/TableGta'

const TommyVercetti = () =>
{
  useEffect(() =>
  {
    document.title = "Tommy Vercetti - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">

        </ul>
      </aside>
      <main className="main" id="top">
        <h1>Tommy Vercetti</h1>
      </main>
    </>
  )
}

export default TommyVercetti;