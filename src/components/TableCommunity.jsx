import { communitychars, communitys1, communitys2, communitys3 } from "../data/dataCommunity";

const TableCommunity = () =>
{
    return(
        <>
            <div>
                TableCommunity
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
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableCommunity;