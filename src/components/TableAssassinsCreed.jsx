import { Link } from 'react-router-dom'
import { assassinscreed } from '../data/dataAssassinsCreed';

const TableAssassinsCreed = () =>
{
  return(
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
                <th colSpan={2}>Assassin's Creed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Games</td>
                <td>
                    <div className="table-list">
                        {assassinscreed.map((ac) => (
                            <Link to={ac.route} className="table-list-link" key={ac.id}>{ac.title}</Link>
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

export default TableAssassinsCreed;