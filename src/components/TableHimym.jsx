import { Link } from 'react-router-dom'
import { HimymChar, himymS1, himymS2, himymS3, himymS4, himymS5, himymS6, himymS7, himymS8, himymS9 } from '../data/dataHimym'

const TableHimym = () =>
{
  return(
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
              <th colspan="2">How I Met Your Mother</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Characters</td>
              <td>
                <div className="table-list">
                    {HimymChar.map((character) => (
                        <Link to={character.route} className="table-list-link" key={character.id}>{character.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 1</td>
              <td>
                <div className="table-list">
                    {himymS1.map((s1) => (
                        <Link to={s1.route} className="table-list-link" key={s1.id}>{s1.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 2</td>
              <td>
                <div className="table-list">
                    {himymS2.map((s2) => (
                        <Link to={s2.route} className="table-list-link" key={s2.id}>{s2.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 3</td>
              <td>
                <div className="table-list">
                    {himymS3.map((s3) => (
                        <Link to={s3.route} className="table-list-link" key={s3.id}>{s3.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 4</td>
              <td>
                <div className="table-list">
                    {himymS4.map((s4) => (
                        <Link to={s4.route} className="table-list-link" key={s4.id}>{s4.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 5</td>
              <td>
                <div className="table-list">
                    {himymS5.map((s5) => (
                        <Link to={s5.route} className="table-list-link" key={s5.id}>{s5.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 6</td>
              <td>
                <div className="table-list">
                    {himymS6.map((s6) => (
                        <Link to={s6.route} className="table-list-link" key={s6.id}>{s6.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 7</td>
              <td>
                <div className="table-list">
                    {himymS7.map((s7) => (
                        <Link to={s7.route} className="table-list-link" key={s7.id}>{s7.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 8</td>
              <td>
                <div className="table-list">
                    {himymS8.map((s8) => (
                        <Link to={s8.route} className="table-list-link" key={s8.id}>{s8.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Season 9</td>
              <td>
                <div className="table-list">
                    {himymS9.map((s9) => (
                        <Link to={s9.route} className="table-list-link" key={s9.id}>{s9.title}</Link>
                    ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableHimym;