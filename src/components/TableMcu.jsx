import { mcu } from '../data/dataMcu'

const phaseOne = mcu.filter((mcu) => mcu.phase == 1);

const TableMcu = () =>
{
    return(
        <>
            <div>
                <table className="table-center">
                    <thead>
                        <tr>
                            <th>Marvel Cinematic Universe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Phase One</td>
                            <td>
                                <div className="table-list">
                                    {phaseOne.map((p1) => (
                                        <a href="#" className="table-list-link" key={p1.id}>{p1.title}</a>
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

export default TableMcu;