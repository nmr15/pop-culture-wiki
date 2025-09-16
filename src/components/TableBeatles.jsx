import { Link } from 'react-router-dom'
import { beatles } from '../data/dataBeatles';

const TableBeatles = () =>
{
    return(
        <>
            <div>
                <table className="table-center">
                    <thead>
                        <tr>
                            <th colSpan={2}>The Beatles</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default TableBeatles;