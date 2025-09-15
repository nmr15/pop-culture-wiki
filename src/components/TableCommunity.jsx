import { communitychars, communitys1, communitys2, communitys3, communitys4, communitys5, communitys6 } from "../data/dataCommunity";

const TableCommunity = () =>
{
    return(
        <>
            <div>
                <table className="table-center">
                    <thead>
                        <tr>
                            <th colspan="2">Community</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Characters</td>
                            <td>
                                <div className="table-list">
                                    {communitychars.map((character) => (
                                        <a href="#" className="table-list-link" key={character.id}>{character.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 1</td>
                            <td>
                                <div className="table-list">
                                    {communitys1.map((s1) => (
                                        <a href="#" className="table-list-link" key={s1.id}>{s1.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 2</td>
                            <td>
                                <div className="table-list">
                                    {communitys2.map((s2) => (
                                        <a href="#" className="table-list-link" key={s2.id}>{s2.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 3</td>
                            <td>
                                <div className="table-list">
                                    {communitys3.map((s3) => (
                                        <a href="#" className="table-list-link" key={s3.id}>{s3.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 4</td>
                            <td>
                                <div className="table-list">
                                    {communitys4.map((s4) => (
                                        <a href="#" className="table-list-link" key={s4.id}>{s4.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 5</td>
                            <td>
                                <div className="table-list">
                                    {communitys5.map((s5) => (
                                        <a href="#" className="table-list-link" key={s5.id}>{s5.title}</a>
                                    ))}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Season 6</td>
                            <td>
                                <div className="table-list">
                                    {communitys6.map((s6) => (
                                        <a href="#" className="table-list-link" key={s6.id}>{s.title}</a>
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

export default TableCommunity;