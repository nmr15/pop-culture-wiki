import { Link } from 'react-router-dom'
import { asoue } from '../data/dataAsoue';

const TableAsoue = () =>
{
  return(
    <>
      <div>
        <table className="table-center">
          <thead>
            <tr>
                <th colSpan={2}>A Series of Unfortunate Events</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Games</td>
                <td>
                    <div className="table-list">
                        {asoue.map((asoue) => (
                            <Link to={asoue.route} className="table-list-link" key={asoue.id}>{asoue.title}</Link>
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

export default TableAsoue;