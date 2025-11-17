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
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableHimym;