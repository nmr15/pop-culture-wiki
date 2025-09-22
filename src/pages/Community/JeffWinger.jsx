import { Link } from 'react-router-dom'
import TableCommunity from '../../components/TableCommunity'

const JeffWinger = () =>
{
    return(
        <>
            <nav className="sidebar bg-dark">
                <ul>
                    <li className="py-1"><a href="#top">Top</a></li>
                </ul>
            </nav>
            <main className="px-5 py-4" id="top">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Jeff Winger</li>
                    </ol>
                </nav>
                <div>
                    <h1 className="article-heading">Jeff Winger</h1>
                </div>
            </main>
        </>
    )
}

export default JeffWinger;