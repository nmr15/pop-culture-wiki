import { Link } from 'react-router-dom'
import { mcu } from '../data/dataMcu'

const phaseOne = mcu.filter((mcu) => mcu.phase == 1);
const phaseTwo = mcu.filter((mcu) => mcu.phase == 2);
const phaseThree = mcu.filter((mcu) => mcu.phase == 3);
const phaseFour = mcu.filter((mcu) => mcu.phase == 4);
const phaseFive = mcu.filter((mcu) => mcu.phase == 5);
const phaseSix = mcu.filter((mcu) => mcu.phase == 6);

const TableMcu = () =>
{
    return(
        <>
            <div>
                <table className="table-center">
                    <thead>
                        <tr>
                            <th colSpan={3}>Marvel Cinematic Universe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>The Infinity Saga</td>
                            <td>Phase One</td>
                            <td>
                                <div className="table-list">
                                    {phaseOne.map((p1) => (
                                        <a href="#" className="table-list-link" key={p1.id}>{p1.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Phase Two</td>
                            <td>
                                <div className="table-list">
                                    {phaseTwo.map((p2) => (
                                        <a href="#" className="table-list-link" key={p2.id}>{p2.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Phase Three</td>
                            <td>
                                <div className="table-list">
                                    {phaseThree.map((p3) => (
                                        <a href="#" className="table-list-link" key={p3.id}>{p3.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={3}>The Multiverse Saga</td>
                            <td>Phase Four</td>
                            <td>
                                <div className="table-list">
                                    {phaseFour.map((p4) => (
                                        <a href="#" className="table-list-link" key={p4.id}>{p4.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Phase Five</td>
                            <td>
                                <div className="table-list">
                                    {phaseFive.map((p5) => (
                                        <a href="#" className="table-list-link" key={p5.id}>{p5.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Phase Six</td>
                            <td>
                                <div className="table-list">
                                    {phaseSix.map((p6) => (
                                        <a href="#" className="table-list-link" key={p6.id}>{p6.title}</a>
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